export interface Creator {
  id: string;
  name: string;
  role: 'Model' | 'Photographer' | 'Stylist' | 'Makeup Artist' | 'Influencer';
  location: string;
  imageUrl: string;
  gallery?: string[];
  tags: string[];
  bio: string;
  rate: string;
  verified: boolean;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Freelance';
  salary: string;
  date: string;
  description: string;
}

export interface SearchFilters {
  role?: string;
  location?: string;
  keywords?: string[];
}

export type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};