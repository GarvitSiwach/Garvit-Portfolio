import { FooterLink } from "../types";

export const FOOTER_LINKS: FooterLink[] = [
  {
    name: 'LinkedIn',
    hoverText: 'linkedin.com/in/garvit-siwach',
    icon: 'icons/linkedin.svg',
    url: 'https://www.linkedin.com/in/garvit-siwach/',
  },
  {
    name: 'GitHub',
    hoverText: 'github.com/GarvitSiwach',
    icon: 'icons/github.svg',
    url: 'https://github.com/GarvitSiwach',
  },
  {
    name: 'Email',
    hoverText: 'siwach.garvit10@gmail.com',
    icon: 'icons/file.svg',
    url: 'mailto:siwach.garvit10@gmail.com',
  },
  {
    name: 'Phone',
    hoverText: '+91 8527503955',
    icon: 'icons/spotify.svg',
    url: 'tel:+918527503955',
  },
  {
    name: 'Resume',
    hoverText: 'Download Resume',
    icon: 'icons/instagram.svg',
    url: '/Garvit_Fullstack.pdf',
    download: true,
  }
];
