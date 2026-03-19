import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: 'Education',
    title: 'Computer Science Undergraduate',
    subtitle: 'Continuously learning and evolving — always building, always improving.',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: 'Jul 2025 - Dec 2025',
    title: 'Software Engineer Intern',
    subtitle: 'Strawberry Infot',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2025',
    title: 'React, Vite, Node.js, Express, MySQL',
    subtitle: 'Developed and optimized full-stack features.',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2025',
    title: 'Production APIs and Performance',
    subtitle: 'Built production-ready APIs and improved performance.',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: '2025',
    title: 'Collaboration and Delivery',
    subtitle: 'Implemented new modules, fixed bugs, and enhanced UI/UX.',
    position: 'right',
  }
]
