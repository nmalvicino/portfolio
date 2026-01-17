export type Skill = {
  label: string;
  icon: string;
};

export type Tab = {
  id: string;
  label: string;
  skills: Skill[];
};
