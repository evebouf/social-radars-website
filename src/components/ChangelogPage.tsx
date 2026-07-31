import React, { useEffect, useMemo } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { changelogEntries, ChangelogBadge, ChangelogEntry, DEV_START } from '../types/changelog';

const MONTHS_LONG = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const longDate = (day: string) => {
  const [y, m, d] = day.split('-').map(Number);
  return `${MONTHS_LONG[m - 1]} ${d}, ${y}`;
};

const BADGE_LABELS: Record<ChangelogBadge, string> = {
  new: 'New',
  improved: 'Improved',
  fixed: 'Fixed',
  milestone: 'Milestone',
};

const BADGE_STYLES: Record<ChangelogBadge, string> = {
  new: 'bg-custom-red/10 text-custom-red',
  improved: 'bg-gray-100 text-gray-700',
  fixed: 'bg-gray-100 text-gray-700',
  milestone: 'bg-custom-red text-white',
};

const Badge: React.FC<{ badge: ChangelogBadge }> = ({ badge }) => (
  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${BADGE_STYLES[badge]}`}>
    {BADGE_LABELS[badge]}
  </span>
);

interface DayGroup {
  day: string;
  entries: ChangelogEntry[];
}

const ChangelogPage: React.FC = () => {
  useEffect(() => {
    const previous = document.title;
    document.title = "What's New — The Social Radars";
    return () => {
      document.title = previous;
    };
  }, []);

  const groups = useMemo<DayGroup[]>(() => {
    const result: DayGroup[] = [];
    for (const entry of [...changelogEntries].reverse()) {
      const last = result[result.length - 1];
      if (last && last.day === entry.day) {
        last.entries.push(entry);
      } else {
        result.push({ day: entry.day, entries: [entry] });
      }
    }
    return result;
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="episodes-hero-section">
          <div className="episodes-hero-content">
            <div className="episodes-hero-text">
              <h1 className="episodes-hero-title">
                What's New
              </h1>
              <p className="episodes-hero-description">
                {changelogEntries.length} releases since {longDate(DEV_START.slice(0, 10))}
              </p>
            </div>
          </div>
        </section>

        {/* Release List */}
        <section className="pt-10 pb-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {groups.map((group) => (
              <div key={group.day} className="mb-14">
                <h2 className="font-outfit text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
                  {longDate(group.day)}
                </h2>
                <div className="border-t border-gray-200">
                  {group.entries.map((entry) => (
                    <div key={entry.version} className="py-8 border-b border-gray-200">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3">
                        <Badge badge={entry.badge} />
                        <span className="text-sm text-gray-500">v{entry.version} · {entry.author}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{entry.title}</h3>
                      <ul className="space-y-1.5">
                        {entry.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-3 text-gray-600 leading-relaxed">
                            <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ChangelogPage;
