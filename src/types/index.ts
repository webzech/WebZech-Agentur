export type Language = 'de' | 'en' | 'ru' | 'uk';

export interface NavLink {
  label: string;
  path: string;
  badge?: string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  heroIntro: string;
  problem: {
    title: string;
    points: string[];
  };
  solution: {
    title: string;
    text: string;
  };
  features: {
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    desc: string;
  }[];
  forWhom: string[];
  deliverables: string[];
  faqs: { q: string; a: string }[];
}

export interface LocationItem {
  slug: string;
  city: string;
  state: string;
  h1: string;
  titleTag: string;
  metaDesc: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  heroText: string;
  regionalContext: string;
  whyNeeded: string[];
  servicesOffered: string[];
  localBusinessesTarget: string[];
  faqs: { q: string; a: string }[];
}

export interface IndustryItem {
  slug: string;
  name: string;
  h1: string;
  primaryKeyword: string;
  tagline: string;
  specificChallenges: string[];
  mustHaveFeatures: string[];
  solutionText: string;
  resultsExpected: string;
  faqs: { q: string; a: string }[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  clientType: string;
  industry: string;
  location: string;
  service: string;
  objective: string;
  challenge: string;
  strategy: string;
  techStack: string[];
  results: string[];
  image: string;
  summary: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  excerpt: string;
  primaryKeyword: string;
  relatedServiceSlug: string;
  relatedServiceTitle: string;
  content: {
    h2: string;
    paragraphs: string[];
  }[];
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  responsibilities: string[];
  photo: string;
  location: string;
  quote: string;
}
