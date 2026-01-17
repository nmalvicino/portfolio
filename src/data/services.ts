import {
  IconWorld,
  IconPalette,
  IconCode,
  IconBrush,
  IconLayout,
} from '@tabler/icons-react';

export const services = [
  {
    id: 'front-end-dev',
    title: 'Front-end Development',
    description:
      'I turn your ideas into clean, responsive and fully functional interfaces.',
    details:
      'I use technologies like React, Next.js, Tailwind and TypeScript to build intuitive, fast and responsive interfaces. I focus on performance, accessibility and a visual experience aligned with your brand.',
    icon: IconCode,
    image: '/images/services/front-end-dev.jpg',
  },
  {
    id: 'website-design',
    title: 'Website Design',
    description: 'Modern and responsive designs tailored to your audience.',
    details:
      'I create visual designs that guide users with clarity, consistency and purpose. Every section is designed strategically to align with your goals, ensuring the experience remains impactful across all devices.',
    icon: IconWorld,
    image: '/images/services/website-design.jpg',
  },
  {
    id: 'ux-ui',
    title: 'UX/UI Improvement',
    description: 'Upgrade your current website with usability best practices.',
    details:
      'I analyze your current site and propose practical solutions to enhance navigation, visual hierarchy and the overall user experience. From redesigning pain points to polishing microinteractions, I help your site work better and feel smoother.',
    icon: IconLayout,
    image: '/images/services/ux-ui.jpg',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'I design visuals for social media, products and marketing.',
    details:
      'From social media posts to flyers, packaging, or presentations, I design visuals that communicate your message with clarity and style. I focus on creating a cohesive and attractive visual identity.',
    icon: IconBrush,
    image: '/images/services/graphic-design.jpg',
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'I build memorable brands with personality and strategy.',
    details:
      'I develop visual identities that express your brand’s essence. From logo design to color palettes, typography and visual tone, I help build a consistent and distinctive brand universe.',
    icon: IconPalette,
    image: '/images/services/branding.jpg',
  },
];
