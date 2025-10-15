export interface Episode {
  id: string;
  name: string;
  title: string;
  description: string;
  season: number;
  image: string;
  imagePosition: 'top' | 'center';
  seasonLabel?: string;
  hasTranscript: boolean;
  hasAudio: boolean;
}

export const episodesData: Episode[] = [
  // Founder Mode Episodes (Latest)
  {
    id: "jen-herbach",
    name: "Jen Herbach",
    title: "Founder & CEO, Adventris Pharmaceuticals",
    description: "In the latest Social Radars, we talk to Jen Herbach of Adventris, which is working on a cancer vaccine. She was in the audience of Brian Chesky's famous founder mode talk, and immediately went home and started changing things.",
    season: 4,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Founder Mode",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "andy-lapsa",
    name: "Andy Lapsa",
    title: "Founder & CEO, Stoke Space",
    description: "In this episode we talk to Andy Lapsa of Stoke Space. This startup is literally doing rocket science, because they're building fully reusable rockets. Anyone who meets Andy is struck by the depth of his expertise, and in this company that's what founder mode means: a deep understanding of all the engineering problems.",
    season: 4,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Founder Mode",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "emmett-shear-founder-mode",
    name: "Emmett Shear",
    title: "Founder, Softmax & Twitch",
    description: "In this Social Radars episode we talk to Emmett Shear, who told us about an interesting founder mode technique he developed when he was running Twitch. He wanted people there to be able to answer the question \"What would Emmett do?\" and he found the best way to ensure this was via the weekly all-hands, which he'd spend hours preparing for.",
    season: 4,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Founder Mode",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "christina-cacioppo",
    name: "Christina Cacioppo",
    title: "Founder & CEO, Vanta",
    description: "In today's episode, Christina Cacioppo gives us her take on founder mode, which is becoming more important now that Vanta has 1,000 employees around the world. She told us about a new variant of the idea: founder mode in fundraising. Christina delayed fundraising till after Vanta hit $100m ARR, which caused some investors to dismiss her, but she ended up net ahead.",
    season: 4,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Founder Mode",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "paul-gross",
    name: "Paul Gross",
    title: "Founder & CEO of Remora Carbon",
    description: "In this episode we talk to Paul Gross of Remora Carbon, a startup that does carbon capture right out of the exhausts of trucks and trains. Paul has a unique take on founder mode: once a quarter he decides what the three top risks to the company are, and for that quarter, those three things, whatever they are, are the main things he works on.",
    season: 4,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Founder Mode",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "chris-best",
    name: "Chris Best",
    title: "Founder & CEO, Substack",
    description: "In this episode, taped in front of a live audience, Chris Best tells us the story of Substack. He reminisces about his adventures with Elon Musk, and explains how he persisted in bringing to market a component of Substack that he knew was critical to their vision, even though any non-founder CEO would have killed it after years without any growth.",
    season: 4,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Founder Mode",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "jake-heller",
    name: "Jake Heller",
    title: "Founder & CEO, Casetext",
    description: "In this episode, Jake Heller talks about how he and his cofounder discovered the perfect product in a weekend of intense experimentation after GPT4 was released, and then changed the whole direction of the company. This was a classic case of founder mode, because Casetext was already 9 years old at that point and it was hard to convince everyone to change course.",
    season: 4,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Founder Mode",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "paul-graham-founder-mode",
    name: "Paul Graham",
    title: "Founder, Y Combinator",
    description: "Paul Graham talks about how the concept of founder mode arose from Brian Chesky's famous talk in 2024, what it means, and the latest things he's observed in the startup world.",
    season: 4,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Founder Mode",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "garry-tan-founder-mode",
    name: "Garry Tan",
    title: "President & CEO, Y Combinator",
    description: "We spoke with YC president & CEO Garry Tan about the Founder Mode event he organized for YC alumni. He talks about why founder mode matters and how the concept is evolving the the age of AI.",
    season: 4,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Founder Mode",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "brian-chesky-founder-mode",
    name: "Brian Chesky",
    title: "Founder & CEO, Airbnb",
    description: "At YC's first Founder Mode event, we talk with Brian Chesky, whose legendary talk last year was the origin of the concept. Unless you were one of the lucky founders in that audience, this interview is probably the closest you can get to experiencing it.",
    season: 4,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Founder Mode",
    hasTranscript: true,
    hasAudio: true
  },

  // Season 4 Episodes
  {
    id: "ron-conway-part3",
    name: "Ron Conway",
    title: "Founder, SV Angel Part 3",
    description: "In Part 3 of our conversation with Ron Conway, he takes us behind the scenes at early Google. Ron was involved with Google almost from the start; he and Ram Shriram arranged their Series A round. So if you want to know what a really, really big success looked like at the beginning, this is the episode for you.",
    season: 4,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 4",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "drew-houston",
    name: "Drew Houston",
    title: "Founder & CEO of Dropbox",
    description: "In today's episode we talk with Drew Houston, founder and CEO of Dropbox. We've known Drew for a long time (YC funded Dropbox in 2007) and he's extremely candid about the many challenges he faced, and overcame, in the journey from building something that solved his own problem to serving as an essential part of the foundation of today's tech infrastructure.",
    season: 4,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 4",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "sam-altman",
    name: "Sam Altman",
    title: "CEO of OpenAI",
    description: "Today we catch up with Sam Altman, Founder and CEO of OpenAI. Sam was in Y Combinator's first batch in 2005 and later returned as YC's president from 2014 to 2019, so he's one of the people in Silicon Valley that we know best. In this episode we cover his whole journey from Stanford sophomore to one of the most influential figures in tech.",
    season: 4,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 4",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "eric-migicovsky",
    name: "Eric Migicovsky",
    title: "Founder, Pebble & Beeper",
    description: "In today's episode Eric Migicovsky, the founder of Pebble and Beeper, shares the journey of building one of the first smartwatches. The Pebble watch made history as Kickstarter's most-funded project at the time, raising $10.3 million. What happened next showed how difficult it was to build a hardware startup in the 2010s, even if you did almost everything right.",
    season: 4,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 4",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "alexandr-wang",
    name: "Alexandr Wang",
    title: "Founder and CEO of Scale AI",
    description: "In today's episode we go down into the engine room of the AI Revolution with Scale AI founder Alexandr Wang. Since 2016 Scale has been supplying training data to most of the top AI models. In fact there's probably no one with a better overall view of the field than Alexandr.",
    season: 4,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 4",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "harj-taggar",
    name: "Harj Taggar",
    title: "Partner, Y Combinator",
    description: "Today we catch up with Harj Taggar, who knows as much about startups as anyone of his generation. YC funded two of his startups, Auctomatic in 2007 and Triplebyte in 2015. In between them he was the first partner we hired besides the founders, and now he's a YC partner again.",
    season: 4,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 4",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "gusto-founders",
    name: "Josh Reeves, Edward Kim & Tomer London",
    title: "Co-Founders of Gusto",
    description: "In today's episode, we chat with all three of the Gusto founders: Josh Reeves, Eddie Kim, and Tomer London. Gusto is a payroll and employee benefits company that YC funded in 2012. The striking thing about Josh, Eddie, and Tomer is their level of commitment: to their customers, their employees, and one another.",
    season: 4,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 4",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "ron-conway-part2",
    name: "Ron Conway",
    title: "Founder, SV Angel Part 2",
    description: "In Part 2 of our conversation with legendary investor Ron Conway, we chat about how he made one of the most prescient decisions in the history of startup investing when he decided in the early 1990s to focus exclusively on investing in internet startups.",
    season: 4,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 4",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "surbhi-sarna",
    name: "Surbhi Sarna",
    title: "Founder of nVision Medical",
    description: "In this episode, we speak with Surbhi Sarna, founder of nVision Medical, a pioneering company in women's health diagnostics. Surbhi shares her journey from experiencing a personal health scare as a teenager to founding nVision, which developed a microcatheter for the detection of ovarian cancer.",
    season: 4,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 4",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "tyler-shultz-part2",
    name: "Tyler Shultz",
    title: "Theranos Whistleblower Part 2",
    description: "We're back with Tyler Shultz for the second part of his story: the whistleblowing. He'd resigned after noticing potential fraud within Theranos. After he spoke on background to the Wall Street Journal, Theranos retaliated with a series of legal threats, intimidation, and surveillance -- all designed to silence him.",
    season: 4,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 4",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "tyler-shultz-part1",
    name: "Tyler Shultz",
    title: "Theranos Whistleblower Part 1",
    description: "Tyler Shultz went to work at Theranos right out of Stanford and soon noticed that things weren't as they seemed. Lots of other employees knew there was something fishy going on, but Tyler was one of a tiny handful able to resist the mesmerizing and intimidating Elizabeth Holmes and speak out about the fraud that was putting patients at risk.",
    season: 4,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 4",
    hasTranscript: true,
    hasAudio: true
  },

  // Season 3 Episodes
  {
    id: "amjad-masad-haya-odeh",
    name: "Amjad Masad & Haya Odeh",
    title: "Co-Founders of Replit",
    description: "Today we talk to Amjad Masad and Haya Odeh of Replit. They're not just co-founders but married too, and Replit is woven through their lives. Listen in as they describe their mission to bring coding to everyone.",
    season: 3,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 3",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "ryan-petersen",
    name: "Ryan Petersen",
    title: "Founder & CEO of Flexport",
    description: "In today's episode we chat with Ryan Petersen, Founder and CEO of Flexport, a global logistics company that Y Combinator funded in 2014. Ryan takes us on a journey from his early days importing motorcycles, through the supply chain disasters of the pandemic, to a company with thousands of employees and billions in revenue.",
    season: 3,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 3",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "dan-siroker",
    name: "Dan Siroker",
    title: "Co-founder of Limitless & Optimizely",
    description: "Today we catch up with Dan Siroker, co-founder of Limitless, which trains a personal AI to remember things for you. Y Combinator funded his previous company, Optimizely, in 2010, and it was acquired a decade later.",
    season: 3,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 3",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "eddy-lu",
    name: "Eddy Lu",
    title: "Co-founder & CEO of GOAT",
    description: "In today's episode we catch up with Eddy Lu, co-founder and CEO of GOAT, the fashion marketplace. GOAT represents one of the most epic pivots in Y Combinator history: they started out organizing group dinners.",
    season: 3,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 3",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "david-rusenko",
    name: "David Rusenko",
    title: "Founder of Weebly",
    description: "David Rusenko was a college student when he applied, at the last minute, to Y Combinator in 2006. His startup, Weebly, made a web site builder. At one point they came within days of running out of money, but they survived to be acquired by Square in 2018 for $365 million.",
    season: 3,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 3",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "yin-wu",
    name: "Yin Wu",
    title: "Co-Founder of Pulley",
    description: "In today's episode, we talk with Yin Wu, founder and CEO of Pulley, a cap table management system that YC funded in 2020. Yin has been founding startups since 2011 and she talks about her experiences testing startup ideas, what she's learned about persistence and determination, and why she loves having startup founders as users.",
    season: 3,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 3",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "ron-conway-season3",
    name: "Ron Conway",
    title: "Founder, SV Angel",
    description: "Ron Conway has been close to the center of things for longer than anyone else in Silicon Valley, from the point when he started his career at National Semiconductor in the early '70s, to the AI conference he organized last month.",
    season: 3,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 3",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "kyle-vogt",
    name: "Kyle Vogt",
    title: "Founder of Cruise Automation",
    description: "Today we catch up with Kyle Vogt, whose self-driving car company, Cruise, was funded by Y Combinator in 2014 and acquired by GM in 2016. Before that he was a co-founder of Twitch and its predecessor, Justin.tv.",
    season: 3,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 3",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "yuri-sagalov",
    name: "Yuri Sagalov",
    title: "Co-Founder of AeroFS",
    description: "Today we are talking to Yuri Sagalov. His company AeroFS, which did enterprise file syncing and sharing, was funded by Y Combinator in summer 2010. Yuri went on to work at Y Combinator before starting his own fund, Wayfinder Ventures.",
    season: 3,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 3",
    hasTranscript: true,
    hasAudio: true
  },

  // Season 2 Episodes
  {
    id: "adora-cheung",
    name: "Adora Cheung",
    title: "Co-founder of Homejoy & Instalab",
    description: "Today we chat with Adora Cheung, Co-founder of Homejoy (YC summer 2010) and now Instalab, an at-home blood testing service that helps you optimize your health by measuring over 60 biomarkers.",
    season: 2,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 2",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "trevor-blackwell",
    name: "Trevor Blackwell",
    title: "Co-founder Y Combinator; Founder, Anybots",
    description: "Today we have another insider episode: we're talking to Trevor Blackwell, who was my co-founder at Y Combinator. But that's not all he's done. He was also the founder of Anybots, where he created the first dynamically balancing biped robot.",
    season: 2,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 2",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "parker-conrad",
    name: "Parker Conrad",
    title: "Founder of Zenefits & Rippling",
    description: "Today we're talking with Parker Conrad, who founded two startups that went on to become unicorns: Zenefits in 2013, and Rippling in 2016. Parker's story is one the more dramatic ones you'll hear on this podcast.",
    season: 2,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 2",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "emmett-shear-season2",
    name: "Emmett Shear",
    title: "Co-Founder of Twitch",
    description: "Today we talk with Emmett Shear, who was in the very first YC batch in 2005 with a startup called Kiko. But you know him better as the co-founder of Twitch, which YC funded in 2007.",
    season: 2,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 2",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "patrick-john-collison",
    name: "Patrick & John Collison",
    title: "Co-Founders of Stripe",
    description: "In this episode we catch up with Patrick and John Collison, two brothers from Ireland who founded Stripe in 2009. Since then we've watched Stripe grow from a two-man show to one of the great powers of the tech world.",
    season: 2,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 2",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "bill-clerico",
    name: "Bill Clerico",
    title: "Co-Founder & CEO of WePay",
    description: "Today we're talking with Bill Clerico of WePay, which Y Combinator funded in 2009. WePay was one of the first of what are now called \"FinTech\" startups. In 2017, J.P. Morgan acquired WePay for $400M.",
    season: 2,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 2",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "dimitri-dadiomov",
    name: "Dimitri Dadiomov",
    title: "Co-Founder & CEO of Modern Treasury",
    description: "Today we're talking with Dimitri Dadiomov of Modern Treasury, a startup Y Combinator funded in 2018. Dimitri works in a very important world whose existence is hidden from most people: the movement of money into and out of companies.",
    season: 2,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 2",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "brian-armstrong",
    name: "Brian Armstrong",
    title: "Co-Founder & CEO of Coinbase",
    description: "Today we're talking with Brian Armstrong of Coinbase, a startup YC funded in 2012 and is now a publicly traded company. Coinbase is truly in the middle of the exciting new world of cryptocurrency.",
    season: 2,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 2",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "brian-chesky-season2",
    name: "Brian Chesky",
    title: "Co-Founder & CEO of Airbnb",
    description: "In this episode, we're talking once again with Brian Chesky, co-founder and CEO of Airbnb. YC funded Airbnb in 2009, when the company was at death's door. During YC we watched the founders work frantically to get growth started and turn Airbnb into the rocketship that it is today.",
    season: 2,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 2",
    hasTranscript: true,
    hasAudio: true
  },

  // Season 1 Episodes
  {
    id: "edith-elliot",
    name: "Edith Elliot",
    title: "Co-Founder & CEO of Noora Health",
    description: "In this episode we talk to Edith Elliot, cofounder of the non-profit startup Noora Health. Like the best for-profit startups, Noora is relentlessly effective, but what they do with relentless effectiveness is save lives.",
    season: 1,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 1",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "paul-graham-season1",
    name: "Paul Graham",
    title: "Co-founder of Viaweb and Y Combinator",
    description: "Today, we're doing something I do every day: talking to Paul Graham, who as well as being one of the founders of Viaweb and Y Combinator is also my husband. Paul has been involved with startups since 1995; before he invented the accelerator, he invented the web app.",
    season: 1,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 1",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "brian-chesky-season1",
    name: "Brian Chesky",
    title: "Co-Founder & CEO of Airbnb",
    description: "In today's episode, we're talking with Brian Chesky, cofounder and CEO of Airbnb. YC funded Airbnb in 2009, when the company was at death's door. During YC we watched the founders work frantically to get growth started and turn Airbnb into the rocketship that it is today.",
    season: 1,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 1",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "steve-huffman",
    name: "Steve Huffman",
    title: "Co-Founder & CEO of Reddit",
    description: "In this episode we walk down memory lane with Steve Huffman, co-founder and CEO of Reddit, who was in Y Combinator's very first batch of startups in 2005. In those days Steve was a programmer fresh out of UVA.",
    season: 1,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 1",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "tracy-young",
    name: "Tracy Young",
    title: "Co-Founder & CEO of PlanGrid",
    description: "Today we're talking with the fabulous Tracy Young, one of the most successful female startup founders so far. Y Combinator funded her company, PlanGrid in the winter of 2012. PlanGrid revolutionized the construction industry by getting blueprints off paper and onto tablets.",
    season: 1,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 1",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "garry-tan-season1",
    name: "Garry Tan",
    title: "President & CEO of Y Combinator",
    description: "In this episode we're talking to Garry Tan, the president & CEO of Y Combinator. We go full circle with Garry as we chat about his path from turning down a job with Peter Thiel, to founding a YC-backed company in 2008, then starting his own multi-billion dollar fund in 2011, and finally returning to run Y Combinator in 2023.",
    season: 1,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 1",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "tony-xu",
    name: "Tony Xu",
    title: "Founder & CEO of Doordash",
    description: "In this episode we catch up with Tony Xu, founder and CEO of the food delivery service, DoorDash. Tony and his cofounders were students at Stanford when they first launched DoorDash as a class project. Y Combinator funded them as part of its summer batch in 2013.",
    season: 1,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 1",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "david-lieb",
    name: "David Lieb",
    title: "Creator of Google Photos",
    description: "In this episode we're talking to David Lieb, creator of Google Photos. Back in 2009, YC funded his startup, Bump Technologies, which had a cool technology where you transferred your contact info from one person to another by literally bumping phones.",
    season: 1,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 1",
    hasTranscript: true,
    hasAudio: true
  },
  {
    id: "paul-buchheit",
    name: "Paul Buchheit",
    title: "Creator of Gmail",
    description: "In the premiere episode, Jessica and Carolynn sit down with Paul Buchheit. Paul, also known as PB, created Gmail in 2004 while he was employee number 23 at Google. They do a deep dive into the history of Gmail, including the fact that it might never have launched if it weren't for a leak to the New York Times.",
    season: 1,
    image: "/images/episodes/placeholder.svg",
    imagePosition: "center",
    seasonLabel: "Season 1",
    hasTranscript: true,
    hasAudio: true
  }
];