import { Tab } from '../components/ui/skills/types';

export const skillsTabs: Tab[] = [
  {
    id: 'education',
    label: 'Education',
    title: 'Training & Certifications',

    skills: [
      { label: 'Full Stack Dev', icon: '/icons/certificate-tab.svg' },
      { label: 'UX/UI Design', icon: '/icons/certificate-tab.svg' },
    ],
  },
  {
    id: 'web',
    label: 'Full-stack Development',
    title: 'Languages & Frameworks',

    skills: [
      { label: 'React', icon: '/icons/react.svg' },
      { label: 'Redux', icon: '/icons/redux.svg' },
      { label: 'Next.js', icon: '/icons/next-tab.svg' },
      { label: 'PostgreSQL', icon: '/icons/sql.svg' },
      { label: 'JavaScript', icon: '/icons/javascript.svg' },
      { label: 'CSS', icon: '/icons/css.svg' },
      { label: 'Git', icon: '/icons/git.svg' },
      { label: 'Tailwind', icon: '/icons/tailwind-css.svg' },
      { label: 'Typescript', icon: '/icons/ts-tab.svg' },
    ],
  },
  {
    id: 'design',
    label: 'Digital Design',
    title: 'Software & Tools',

    skills: [
      { label: 'Figma', icon: '/icons/figma.svg' },
      { label: 'Adobe Xd', icon: '/icons/adobe-xd.svg' },
      { label: 'Adobe Illustrator', icon: '/icons/illustrator.svg' },
      { label: 'Adobe Photoshop', icon: '/icons/photoshop.svg' },
      { label: 'Adobe Premiere Pro', icon: '/icons/premiere-tab.svg' },
    ],
  },
  {
    id: 'soft',
    label: 'Soft Skills',
    title: 'What I bring to a team',

    skills: [
      { label: 'Organization', icon: '/icons/organization-tab.svg' },
      { label: 'Teamwork', icon: '/icons/teamwork-tab.svg' },
      { label: 'Prioritization', icon: '/icons/time-tab.svg' },
      { label: 'Problem Solving', icon: '/icons/solving-tab.svg' },
      { label: 'Communication', icon: '/icons/communication-tab.svg' },
      { label: 'Detail Oriented', icon: '/icons/detail-tab.svg' },
    ],
  },
];
