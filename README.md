# The Social Radars - React TypeScript Podcast Website

A modern, scalable React TypeScript application for The Social Radars podcast website featuring Jessica Livingston and Carolynn Levy.

## Features

- **React 18** with TypeScript for type safety
- **Component-based architecture** for easy maintenance
- **Dynamic episode management** - easily add 50-60+ episodes
- **Season filtering** with smooth animations
- **Responsive design** with Tailwind CSS
- **Modern build system** with Vite

## Project Structure

```
src/
├── components/          # React components
│   ├── EpisodeCard.tsx     # Individual episode card
│   ├── EpisodesGrid.tsx    # Episodes grid with filtering
│   ├── Navigation.tsx      # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Hosts.tsx           # Meet the hosts section
│   ├── About.tsx           # About section
│   ├── Quote.tsx           # Jessica's quote section
│   └── Footer.tsx          # Footer
├── types/
│   └── episodes.ts          # TypeScript interfaces and episode data
├── App.tsx                  # Main app component
├── main.tsx                 # React entry point
├── App.css                  # App-specific styles
└── index.css                # Global styles
```

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Adding New Episodes

To add new episodes, simply add objects to the `episodesData` array in `src/types/episodes.ts`:

```typescript
{
  id: "unique-episode-id",
  name: "Guest Name",
  title: "Their Title/Company",
  description: "Episode description...",
  season: 4,
  image: "images/episodes/guest-photo.jpg",
  imagePosition: "center", // or "top"
  seasonLabel: "Season 4", // or "Special Series"
  hasTranscript: true,
  hasAudio: true
}
```

## Key Benefits

- **Scalable**: Easy to manage 50-60+ episodes
- **Type Safe**: TypeScript prevents runtime errors
- **Maintainable**: Component-based architecture
- **Performance**: Vite for fast builds and hot reload
- **Modern**: Latest React patterns and hooks

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- ESLint
