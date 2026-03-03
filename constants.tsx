import { Creator, Job } from './types';

export const MOCK_CREATORS: Creator[] = [
  {
    id: '1',
    name: 'Elara V.',
    role: 'Model',
    location: 'New York, NY',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    tags: ['Fashion', 'Editorial', 'Runway'],
    bio: 'Experienced fashion model specializing in high-concept editorial and runway work.',
    rate: '$150/hr',
    verified: true,
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Photographer',
    location: 'Los Angeles, CA',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    tags: ['Portrait', 'Street', 'Neon'],
    bio: 'Visual storyteller capturing the raw energy of urban life through a cinematic lens.',
    rate: '$200/hr',
    verified: true,
  },
  {
    id: '3',
    name: 'Sasha Fox',
    role: 'Stylist',
    location: 'London, UK',
    imageUrl: 'https://images.unsplash.com/photo-1520024146169-3240400354ae?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1520024146169-3240400354ae?q=80&w=800&auto=format&fit=crop', // Stylist at work
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop', // Fashion Editorial
      'https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=800&auto=format&fit=crop', // High Fashion
      'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?q=80&w=800&auto=format&fit=crop', // Hair Styling
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop', // Menswear
    ],
    tags: ['Vintage', 'Avant-Garde', 'Commercial'],
    bio: 'Creative stylist with a passion for mixing eras and textures to create unique looks.',
    rate: '$1000/day',
    verified: false,
  },
  {
    id: '4',
    name: 'Julian B.',
    role: 'Model',
    location: 'Paris, FR',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
    tags: ['Commercial', 'Fitness', 'Lifestyle'],
    bio: 'Versatile model available for commercial print and fitness campaigns across Europe.',
    rate: '$500/day',
    verified: true,
  },
  {
    id: '5',
    name: 'Nina K.',
    role: 'Influencer',
    location: 'Berlin, DE',
    imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop',
    tags: ['Beauty', 'Travel', 'Video'],
    bio: 'Digital content creator focusing on sustainable beauty and slow travel.',
    rate: 'Contact for rates',
    verified: true,
  },
  {
    id: '6',
    name: 'Leo R.',
    role: 'Photographer',
    location: 'Tokyo, JP',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    tags: ['Architecture', 'Minimalist', 'Black & White'],
    bio: 'Architectural photographer obsession with lines, light, and shadows.',
    rate: '$250/hr',
    verified: false,
  },
  {
    id: '7',
    name: 'Chloe M.',
    role: 'Model',
    location: 'Miami, FL',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    tags: ['Swimwear', 'Lifestyle', 'Commercial'],
    bio: 'Sunshine state native bringing vibrant energy to swimwear and lifestyle shoots.',
    rate: '$175/hr',
    verified: true,
  },
  {
    id: '8',
    name: 'Alex D.',
    role: 'Makeup Artist',
    location: 'Toronto, CA',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
    tags: ['SFX', 'Bridal', 'Editorial'],
    bio: 'Certified MUA specializing in special effects and high-fashion editorial looks.',
    rate: '$120/hr',
    verified: true,
  },
];

export const MOCK_JOBS: Job[] = [
  {
    id: '101',
    title: 'Spring Collection Lookbook',
    company: 'Zara',
    location: 'Madrid, Spain',
    type: 'Contract',
    salary: '$2000/day',
    date: 'Oct 2023',
    description: 'Seeking diverse models for our upcoming Spring 2024 global campaign. Must be comfortable with outdoor shoots.',
  },
  {
    id: '102',
    title: 'Product Photographer Needed',
    company: 'Aesop',
    location: 'Melbourne, AU',
    type: 'Freelance',
    salary: '$5000 Project',
    date: 'Nov 2023',
    description: 'Looking for a minimalist photographer to capture our new skincare line. Studio provided.',
  },
  {
    id: '103',
    title: 'Music Video Stylist',
    company: 'Sony Music',
    location: 'Los Angeles, CA',
    type: 'Contract',
    salary: '$800/day',
    date: 'ASAP',
    description: 'Lead stylist needed for a pop artist music video. Theme is retro-futurism. Wardrobe budget provided.',
  },
  {
    id: '104',
    title: 'Fitness Campaign',
    company: 'Nike',
    location: 'Portland, OR',
    type: 'Full-time',
    salary: '$85k/yr',
    date: 'Dec 2023',
    description: 'Full-time in-house model for fitting and social media content creation at HQ.',
  },
];

export const AGENCIES = [
  { name: 'Vogue', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Vogue_logo_1.svg' },
  { name: 'Elite Model Management', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Elite_Model_Management_logo.svg' },
  { name: 'Ford Models', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Ford_Models_Logo.svg/800px-Ford_Models_Logo.svg.png' },
  { name: 'IMG', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/IMG_Worldwide_logo.svg/800px-IMG_Worldwide_logo.svg.png' },
  { name: 'Harper\'s Bazaar', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Harper%27s_Bazaar_logo.svg' },
  { name: 'Wilhelmina', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Wilhelmina_Models_logo.png' },
];

export const TESTIMONIALS = [
  {
    id: 1,
    text: "ModelsCasting changed my career trajectory. Within weeks of joining, I booked a campaign with a major sportswear brand.",
    author: "Sarah Jenkins",
    role: "Fitness Model",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    text: "As a casting director, the AI search saves me hours. I can find exactly the specific look I need instantly.",
    author: "David Ross",
    role: "Casting Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    text: "The verification process gave me peace of mind. I know I'm working with legitimate agencies.",
    author: "Priya Patel",
    role: "Influencer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  }
];