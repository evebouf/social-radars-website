import React, { useEffect, useMemo, useState } from 'react';
import {
  changelogEntries,
  ChangelogBadge,
  ChangelogEntry,
  COMMIT_ACTIVITY,
  DEV_START,
  TAGLINE,
  PULL_REQUESTS,
  COMMITS,
  RELEASES,
  LINES_ADDED,
  LINES_DELETED,
} from '../types/changelog';
import './changelog.css';

const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MONTHS_LONG = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const WEEKDAYS_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MINUS = '−';

const fmt = (n: number) => n.toLocaleString('en-US');

const parseDay = (day: string) => {
  const [y, m, d] = day.split('-').map(Number);
  return { y, m: m - 1, d };
};

const shortDate = (day: string) => {
  const { y, m, d } = parseDay(day);
  return `${MONTHS_SHORT[m]} ${d}, ${y}`;
};

const longDate = (day: string) => {
  const { y, m, d } = parseDay(day);
  return `${MONTHS_LONG[m]} ${d}, ${y}`;
};

const BADGE_LABELS: Record<ChangelogBadge, string> = {
  new: 'New',
  improved: 'Improved',
  fixed: 'Fixed',
  milestone: 'Milestone',
};

const BADGE_STYLES: Record<ChangelogBadge, string> = {
  new: 'bg-accent-soft text-accent border-accent',
  improved: 'bg-info-bg text-info border-info-border',
  fixed: 'bg-success-bg text-success border-success-border',
  milestone: 'bg-warning-bg text-warning border-warning-border',
};

const PILL_BASE = 'inline-flex items-center gap-1 rounded-full font-medium tracking-wide uppercase border px-2 py-0.5 text-[10px]';

const Badge: React.FC<{ badge: ChangelogBadge }> = ({ badge }) => (
  <span className={`${PILL_BASE} ${BADGE_STYLES[badge]}`}>{BADGE_LABELS[badge]}</span>
);

const LiveNowPill: React.FC = () => (
  <span className={`${PILL_BASE} bg-success-bg text-success border-success-border`}>● Live now</span>
);

const Diff: React.FC<{ adds: number; dels: number; className: string; title: string }> = ({ adds, dels, className, title }) => (
  <span className={className} title={title}>
    <span className="text-success">+{fmt(adds)}</span>{' '}
    <span className="text-danger">{MINUS}{fmt(dels)}</span>
  </span>
);

const useNow = () => {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
};

const DevClock: React.FC = () => {
  const now = useNow();
  const elapsed = Math.max(0, Math.floor((now - new Date(DEV_START).getTime()) / 1000));
  const days = Math.floor(elapsed / 86400);
  const hours = Math.floor((elapsed % 86400) / 3600);
  const minutes = Math.floor((elapsed % 3600) / 60);
  const seconds = elapsed % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return (
    <span
      className="tabular-nums"
      aria-label={`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds in development`}
    >
      {days}d {pad(hours)}:{pad(minutes)}:{pad(seconds)}
    </span>
  );
};

interface ContribCell {
  level: 'x' | 0 | 1 | 2 | 3 | 4;
  title?: string;
}

interface ContribData {
  cols: ContribCell[][];
  monthLabels: { label: string; left: number }[];
  width: number;
  aria: string;
}

const WEEKS = 12;

const levelFor = (count: number): 0 | 1 | 2 | 3 | 4 => {
  if (count <= 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
};

const isoOf = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

const dayLabelOf = (date: Date) =>
  `${WEEKDAYS_SHORT[date.getDay()]}, ${MONTHS_SHORT[date.getMonth()]} ${date.getDate()}`;

const buildContrib = (): ContribData => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const start = new Date(today);
  start.setDate(start.getDate() - start.getDay() - 7 * (WEEKS - 1));

  const cols: ContribCell[][] = [];
  const monthLabels: { label: string; left: number }[] = [];
  let total = 0;
  let prevMonth = -1;

  for (let w = 0; w < WEEKS; w++) {
    const colStart = new Date(start);
    colStart.setDate(start.getDate() + w * 7);
    if (colStart.getMonth() !== prevMonth) {
      monthLabels.push({ label: MONTHS_SHORT[colStart.getMonth()], left: w * 13 });
      prevMonth = colStart.getMonth();
    }
    const col: ContribCell[] = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(colStart);
      date.setDate(colStart.getDate() + d);
      if (date > today) {
        col.push({ level: 'x' });
        continue;
      }
      const count = COMMIT_ACTIVITY[isoOf(date)] ?? 0;
      total += count;
      const label = count === 0 ? 'No commits' : count === 1 ? '1 commit' : `${count} commits`;
      col.push({ level: levelFor(count), title: `${label} · ${dayLabelOf(date)}` });
    }
    cols.push(col);
  }

  return {
    cols,
    monthLabels,
    width: WEEKS * 13 - 2,
    aria: `Commit activity: ${total} commits from ${dayLabelOf(start)} to ${dayLabelOf(today)}`,
  };
};

const ContribGraph: React.FC = () => {
  const data = useMemo(buildContrib, []);
  return (
    <div className="contrib font-mono shrink-0" role="img" aria-label={data.aria}>
      <div className="contrib-months" style={{ width: `${data.width}px` }}>
        {data.monthLabels.map((m) => (
          <span key={`${m.label}-${m.left}`} style={{ left: `${m.left}px` }}>{m.label}</span>
        ))}
      </div>
      <div className="contrib-grid">
        {data.cols.map((col, i) => (
          <div key={i} className="contrib-col">
            {col.map((cell, j) =>
              cell.level === 'x' ? (
                <div key={j} className="contrib-cell contrib-lx" />
              ) : (
                <div key={j} className={`contrib-cell contrib-l${cell.level}`} title={cell.title} />
              )
            )}
          </div>
        ))}
      </div>
      <div className="contrib-legend">
        <span>Less</span>
        <span className="contrib-cell contrib-l0" />
        <span className="contrib-cell contrib-l1" />
        <span className="contrib-cell contrib-l2" />
        <span className="contrib-cell contrib-l3" />
        <span className="contrib-cell contrib-l4" />
        <span>More</span>
      </div>
    </div>
  );
};

const LiveDot: React.FC = () => (
  <span className="relative inline-flex h-2 w-2 align-middle">
    <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 motion-safe:animate-ping" />
    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
  </span>
);

const TOTAL_BAR_BLOCKS = 18;

const StatsBlock: React.FC = () => {
  const green = Math.min(
    TOTAL_BAR_BLOCKS - 1,
    Math.max(1, Math.round((TOTAL_BAR_BLOCKS * LINES_ADDED) / (LINES_ADDED + LINES_DELETED)))
  );
  return (
    <section className="mb-8" aria-label="Development by the numbers">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 overflow-x-auto border-l-2 border-accent pl-4 font-mono text-sm leading-loose">
          <div className="mb-1 text-xs lowercase text-fg-mid">
            since {shortDate(DEV_START.slice(0, 10))} · <span className="text-fg">{TAGLINE}</span>
          </div>
          <div className="whitespace-nowrap">
            <span className="font-bold text-fg">{fmt(PULL_REQUESTS)}</span>{' '}
            <span className="text-fg-mid">pull requests</span>{' '}
            <span className="font-bold text-fg">{fmt(COMMITS)}</span>{' '}
            <span className="text-fg-mid">commits</span>{' '}
            <span className="font-bold text-fg">{fmt(RELEASES)}</span>{' '}
            <span className="text-fg-mid">releases</span>
          </div>
          <div className="whitespace-nowrap">
            <span className="text-fg-mid">lines</span>{' '}
            <span className="text-success">+{fmt(LINES_ADDED)}</span>{' '}
            <span className="text-success">{'█'.repeat(green)}</span>
            <span className="text-danger">{'█'.repeat(TOTAL_BAR_BLOCKS - green)}</span>{' '}
            <span className="text-danger">{MINUS}{fmt(LINES_DELETED)}</span>
          </div>
          <div className="whitespace-nowrap">
            <span className="text-fg-mid">in development</span>{' '}
            <span className="font-bold text-fg"><DevClock /></span> <LiveDot />{' '}
            <span className="text-fg-mid">live</span>
          </div>
        </div>
        <ContribGraph />
      </div>
    </section>
  );
};

const EntryCard: React.FC<{ entry: ChangelogEntry; live: boolean }> = ({ entry, live }) => (
  <div className="rounded-xl border border-border bg-surface p-4 space-y-2">
    <div className="flex items-start justify-between gap-2">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <Badge badge={entry.badge} />
        <span className="font-mono text-xs text-fg-mid">v{entry.version}</span>
        <span className="text-xs text-fg-mid">
          · {shortDate(entry.day)}{entry.time ? ` · ${entry.time}` : ''} · {entry.author}
        </span>
        {live && <LiveNowPill />}
      </div>
      <Diff
        adds={entry.adds}
        dels={entry.dels}
        className="shrink-0 whitespace-nowrap font-mono text-xs tabular-nums"
        title="Lines of product code changed in this release"
      />
    </div>
    <h3 className="text-base font-semibold text-fg">{entry.title}</h3>
    <ul className="space-y-1.5">
      {entry.bullets.map((bullet, i) => (
        <li key={i} className="flex gap-2 text-sm leading-relaxed text-fg-mid">
          <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fg-mid" />
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  </div>
);

interface DayGroup {
  day: string;
  entries: ChangelogEntry[];
  adds: number;
  dels: number;
}

const ChangelogPage: React.FC = () => {
  useEffect(() => {
    const previous = document.title;
    document.title = "What's new — The Social Radars";
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
        last.adds += entry.adds;
        last.dels += entry.dels;
      } else {
        result.push({ day: entry.day, entries: [entry], adds: entry.adds, dels: entry.dels });
      }
    }
    return result;
  }, []);

  return (
    <div className="changelog-page min-h-screen">
      <main className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold text-fg">What's new</h1>
        </header>
        <StatsBlock />
        <div className="space-y-8">
          {groups.map((group, gi) => (
            <section key={group.day} aria-label={longDate(group.day)}>
              <div className="mb-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <h2 className="text-xs font-semibold uppercase tracking-wide text-fg-mid">
                  {longDate(group.day)}
                </h2>
                <span className="text-xs text-fg-faint" aria-hidden="true">·</span>
                <span className="text-xs text-fg-mid">
                  {group.entries.length} {group.entries.length === 1 ? 'update' : 'updates'}
                </span>
                <Diff
                  adds={group.adds}
                  dels={group.dels}
                  className="font-mono text-xs tabular-nums"
                  title="Lines of product code changed this day"
                />
                {gi === 0 && <LiveNowPill />}
              </div>
              <div className="space-y-3">
                {group.entries.map((entry, ei) => (
                  <EntryCard key={entry.version} entry={entry} live={gi === 0 && ei === 0} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ChangelogPage;
