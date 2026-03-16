export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  altImage?: string;
  video: string;
  stacks: string[];
  link?: string;
  isLive?: boolean;
  detailedDescription?: string;
  stackDetails?: {
    frontend?: string;
    backend?: string;
    infra?: string;
  };
};

export type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  stack: string[];
  description: string;
  details: string[];
};
