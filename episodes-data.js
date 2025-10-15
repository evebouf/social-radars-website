// Episodes Database
const episodesData = [
    // Season 4 Episodes
    {
        id: "ron-conway-part4",
        name: "Ron Conway",
        title: "Angel Investor & Founder of SV Angel",
        description: "The legendary investor takes us behind the scenes of Napster's rise and fall, sharing insights from his decades of experience backing Silicon Valley's biggest winners.",
        season: 4,
        image: "images/episodes/ron-conway.webp",
        imagePosition: "top",
        seasonLabel: "Special Series",
        hasTranscript: true,
        hasAudio: true
    },
    {
        id: "ron-conway-part3",
        name: "Ron Conway",
        title: "Angel Investor & Founder of SV Angel",
        description: "Behind the scenes at early Google with the investor who arranged their Series A round.",
        season: 4,
        image: "images/episodes/ron-conway.webp",
        imagePosition: "top",
        seasonLabel: "Special Series",
        hasTranscript: true,
        hasAudio: true
    },
    {
        id: "drew-houston",
        name: "Drew Houston",
        title: "Co-founder & CEO of Dropbox",
        description: "Drew shares his journey from solving his own problem to becoming essential tech infrastructure.",
        season: 4,
        image: "images/episodes/drew-houston.jpg",
        imagePosition: "center",
        seasonLabel: "Season 4",
        hasTranscript: true,
        hasAudio: true
    },
    {
        id: "sam-altman",
        name: "Sam Altman",
        title: "CEO of OpenAI",
        description: "From Stanford sophomore to one of the most influential figures in tech and AI.",
        season: 4,
        image: "images/episodes/sam-altman.jpg",
        imagePosition: "center",
        seasonLabel: "Season 4",
        hasTranscript: true,
        hasAudio: true
    },
    {
        id: "eric-migicovsky",
        name: "Eric Migicovsky",
        title: "Founder of Pebble & Beeper",
        description: "The journey of building one of the first smartwatches and Kickstarter's most-funded project.",
        season: 4,
        image: "images/episodes/eric-migicovsky.jpg",
        imagePosition: "top",
        seasonLabel: "Season 4",
        hasTranscript: true,
        hasAudio: true
    },
    {
        id: "alexandr-wang",
        name: "Alexandr Wang",
        title: "Founder & CEO of Scale AI",
        description: "Inside the engine room of the AI Revolution with the founder supplying training data to top AI models.",
        season: 4,
        image: "images/episodes/alexandr-wang.jpg",
        imagePosition: "top",
        seasonLabel: "Season 4",
        hasTranscript: true,
        hasAudio: true
    },
    {
        id: "harj-taggar",
        name: "Harj Taggar",
        title: "Y Combinator Partner",
        description: "From YC-funded founder to first partner hire, with a front-row seat to startup history.",
        season: 4,
        image: "images/episodes/harj-taggar.jpg",
        imagePosition: "center",
        seasonLabel: "Season 4",
        hasTranscript: true,
        hasAudio: true
    },
    {
        id: "gusto-founders",
        name: "Josh, Edward & Tomer",
        title: "Co-Founders of Gusto",
        description: "All three founders of the payroll company share their story of commitment and partnership.",
        season: 4,
        image: "images/episodes/gusto-founders.jpg",
        imagePosition: "center",
        seasonLabel: "Season 4",
        hasTranscript: true,
        hasAudio: true
    },
    {
        id: "surbhi-sarna",
        name: "Surbhi Sarna",
        title: "Founder & CEO of nVision Medical",
        description: "From personal health scare to pioneering women's health diagnostics, acquired for $275M.",
        season: 4,
        image: "images/episodes/surbhi-sarna.jpg",
        imagePosition: "center",
        seasonLabel: "Season 4",
        hasTranscript: true,
        hasAudio: true
    },
    {
        id: "tyler-shultz-part2",
        name: "Tyler Shultz",
        title: "Theranos Whistleblower (Part 2)",
        description: "The retaliation, legal threats, and nightmare of exposing Theranos fraud.",
        season: 4,
        image: "images/episodes/tyler-shultz.png",
        imagePosition: "center",
        seasonLabel: "Season 4",
        hasTranscript: true,
        hasAudio: true
    },
    {
        id: "tyler-shultz-part1",
        name: "Tyler Shultz",
        title: "Theranos Whistleblower (Part 1)",
        description: "What it takes to speak out against powerful people putting patients at risk.",
        season: 4,
        image: "images/episodes/tyler-shultz.png",
        imagePosition: "center",
        seasonLabel: "Season 4",
        hasTranscript: true,
        hasAudio: true
    },

    // Season 3 Episodes
    {
        id: "ron-conway-part1",
        name: "Ron Conway",
        title: "Angel Investor & Founder of SV Angel",
        description: "Ron shares stories from National Semiconductor to AI conferences.",
        season: 3,
        image: "images/episodes/ron-conway.webp",
        imagePosition: "top",
        seasonLabel: "Season 3",
        hasTranscript: true,
        hasAudio: true
    },
    {
        id: "ryan-petersen",
        name: "Ryan Petersen",
        title: "Founder & CEO of Flexport",
        description: "From importing motorcycles to transforming global logistics during the pandemic.",
        season: 3,
        image: "images/episodes/ryan-petersen.jpg",
        imagePosition: "center",
        seasonLabel: "Season 3",
        hasTranscript: true,
        hasAudio: true
    },
    {
        id: "david-rusenko",
        name: "David Rusenko",
        title: "Co-founder & Former CEO of Weebly",
        description: "From college student to $365M Square acquisition, now focused on climate change.",
        season: 3,
        image: "images/episodes/david-rusenko.png",
        imagePosition: "center",
        seasonLabel: "Season 3",
        hasTranscript: true,
        hasAudio: true
    },
    {
        id: "yin-wu",
        name: "Yin Wu",
        title: "Founder & CEO of Pulley",
        description: "Cap table management founder on persistence, determination, and having founders as users.",
        season: 3,
        image: "images/episodes/yin-wu.png",
        imagePosition: "center",
        seasonLabel: "Season 3",
        hasTranscript: true,
        hasAudio: true
    }

    // Add more episodes here as needed...
    // You can easily add 40+ more episodes by following the same structure
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = episodesData;
}
