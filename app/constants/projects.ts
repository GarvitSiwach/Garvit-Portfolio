import { Project } from "../types";

// TODO: Move this to API
export const PROJECTS: Project[] = [
  {
    title: 'TruthLens AI',
    date: 'AI TOOL',
    subtext: 'AI-powered resume analyzer that detects inconsistencies using interview-style question generation. Implements ATS scoring and smart parsing to enhance hiring accuracy.',
    urls: [
      { text: 'GitHub', url: 'https://github.com/GarvitSiwach/ai-resumereviewer' },
    ],
  },
  {
    title: 'YĀTRA',
    date: 'FULL-STACK APP',
    subtext: 'Built a full-stack social travel platform with itinerary sharing, follow system, likes/comments, and real-time notifications, designed with scalable architecture and modern UI/UX.',
    urls: [
      { text: 'LIVE', url: 'https://yatra-three.vercel.app' },
    ],
  },
  {
    title: 'Neon Arc Star',
    date: 'INTERACTIVE GAME',
    subtext: 'Interactive math-graph game built using HTML5 Canvas and JavaScript with real-time equation parsing and neon visual effects.',
    urls: [
      { text: 'LIVE', url: 'https://garvitsiwach.github.io/Neon-Arc-Star/' },
    ],
  },
  {
    title: 'Death Clock',
    date: 'PRODUCTIVITY TIMER',
    subtext: 'Horror-themed productivity timer that visualizes life countdown and task urgency with animated circular arcs and gamified focus mechanics.',
    urls: [
      { text: 'LIVE', url: 'https://garvitsiwach.github.io/death-clock/' },
    ],
  },
  {
    title: 'AutoSnap Engine',
    date: 'PYTHON AUTOMATION',
    subtext: 'Python-based automation tool that captures screenshots at scheduled intervals, improving productivity tracking and workflow monitoring.',
    urls: [
      { text: 'GitHub', url: 'https://github.com/GarvitSiwach/Automated-Screen-Capturing-Tool' },
    ],
  },
  {
    title: 'Catalyst',
    date: 'TEAM PRODUCTIVITY',
    subtext: 'Gamified team management platform with task deadlines, EXP rewards, and leaderboards. Built with React, Node.js, Express, and MySQL.',
    urls: [
      { text: 'LIVE', url: 'https://gamified-team-produc-ihvw.bolt.host' },
    ],
  },
  {
    title: 'RateWise',
    date: 'RATING PLATFORM',
    subtext: 'Role-based full-stack rating platform where users can review stores, manage authentication, and track ratings with structured backend APIs.',
    urls: [
      { text: 'GitHub', url: 'https://github.com/GarvitSiwach/Store-rating-webapp' },
    ],
  },
];
