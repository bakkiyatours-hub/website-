export type PackageSummary = {
  id: number;
  title: string;
  location: string;
  destination: string;
  days: string;
  price: string;
  image: string;
  type: string;
  budget: string;
  link?: string;
};

const tajMahalImage =
  'https://images.unsplash.com/photo-1623811852177-611cda0b372f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB0YWolMjBtYWhhbCUyMGluZGlhJTIwdHJhdmVsfGVufDF8fHx8MTc3MjQ1OTg0NHww&ixlib=rb-4.1.0&q=80&w=1080';
const singaporeImage =
  'https://images.unsplash.com/photo-1727880676753-9ba90268d3ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nYXBvcmUlMjBza3lsaW5lJTIwbWFyaW5hJTIwYmF5fGVufDF8fHx8MTc3MjQ1OTg0NHww&ixlib=rb-4.1.0&q=80&w=1080';
const dubaiImage =
  'https://images.unsplash.com/photo-1735320864933-601d2cac9371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMGJ1cmolMjBraGFsaWZhJTIwY2l0eXNjYXBlfGVufDF8fHx8MTc3MjQ1OTg0NXww&ixlib=rb-4.1.0&q=80&w=1080';
const thailandImage =
  'https://images.unsplash.com/photo-1663899755806-fec4cf21ec62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGFpbGFuZCUyMGJlYWNoJTIwdHJvcGljYWwlMjBwYXJhZGlzZXxlbnwxfHx8fDE3NzI0NTk4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080';
const sriLankaImage =
  'https://images.unsplash.com/photo-1707324021005-a3d0c48cfcbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMGthbmR5JTIwdGVtcGxlfGVufDF8fHx8MTc3MjQ1OTg0NXww&ixlib=rb-4.1.0&q=80&w=1080';
const malaysiaImage =
  'https://images.unsplash.com/photo-1553383398-c40c57291c60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxheXNpYSUyMHBldHJvbmFzJTIwdG93ZXJzfGVufDF8fHx8MTc3MjQ0NDE4MHww&ixlib=rb-4.1.0&q=80&w=1080';
const muruganTempleImage =
  'https://images.unsplash.com/photo-1615196451843-54c40a46d1e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtdXJ1Z2FuJTIwdGVtcGxlJTIwdGFtaWwlMjBuYWR1JTIwaW5kaWF8ZW58MXx8fHwxNzcyODE0ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080';
const kodaikanalImage =
  'https://images.unsplash.com/photo-1624981756765-af4114965bf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxrb2RhaWthbmFsJTIwaGlsbHMlMjBtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzI4MTQ4Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080';
const unescoHeritageImage =
  'https://images.unsplash.com/photo-1712954115679-7cf0f4af29d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxVTkVTQ08lMjB3b3JsZCUyMGhlcml0YWdlJTIwc2l0ZSUyMGluZGlhfGVufDF8fHx8MTc3MjgxNDgzNXww&ixlib=rb-4.1.0&q=80&w=1080';

export const allPackages: PackageSummary[] = [
  {
    id: 1,
    title: 'Golden Triangle Tour',
    location: 'India',
    destination: 'Delhi, Agra, Jaipur',
    days: '7 Days',
    price: 'â‚¹45,000',
    image: tajMahalImage,
    type: 'Group',
    budget: 'Mid Range',
  },
  {
    id: 2,
    title: 'Singapore Delight',
    location: 'Singapore',
    destination: 'Marina Bay, Sentosa',
    days: '5 Days',
    price: 'â‚¹75,000',
    image: singaporeImage,
    type: 'Family',
    budget: 'Luxury',
  },
  {
    id: 3,
    title: 'Magical Thailand',
    location: 'Thailand',
    destination: 'Bangkok, Pattaya',
    days: '6 Days',
    price: 'â‚¹55,000',
    image: thailandImage,
    type: 'Group',
    budget: 'Mid Range',
  },
  {
    id: 4,
    title: 'Sri Lanka Heritage',
    location: 'Sri Lanka',
    destination: 'Colombo, Kandy, Galle',
    days: '8 Days',
    price: 'â‚¹50,000',
    image: sriLankaImage,
    type: 'Cultural',
    budget: 'Mid Range',
  },
  {
    id: 5,
    title: 'Malaysia Explorer',
    location: 'Malaysia',
    destination: 'KL, Genting, Malacca',
    days: '6 Days',
    price: 'â‚¹60,000',
    image: malaysiaImage,
    type: 'Family',
    budget: 'Mid Range',
  },
  {
    id: 6,
    title: 'Dubai Luxury',
    location: 'UAE',
    destination: 'Dubai, Abu Dhabi',
    days: '5 Days',
    price: 'â‚¹85,000',
    image: dubaiImage,
    type: 'Luxury',
    budget: 'Luxury',
  },
  {
    id: 7,
    title: 'Kerala Backwaters',
    location: 'India',
    destination: 'Kochi, Munnar, Alleppey',
    days: '8 Days',
    price: 'â‚¹52,000',
    image: tajMahalImage,
    type: 'Nature',
    budget: 'Mid Range',
  },
  {
    id: 8,
    title: 'Phuket Paradise',
    location: 'Thailand',
    destination: 'Phuket, Phi Phi Island',
    days: '5 Days',
    price: 'â‚¹62,000',
    image: thailandImage,
    type: 'Beach',
    budget: 'Luxury',
  },
  {
    id: 9,
    title: 'Rajasthan Royal',
    location: 'India',
    destination: 'Jaipur, Jodhpur, Udaipur',
    days: '9 Days',
    price: 'â‚¹65,000',
    image: muruganTempleImage,
    type: 'Heritage',
    budget: 'Luxury',
  },
  {
    id: 10,
    title: 'Tamil Nadu Temple Tour',
    location: 'India',
    destination: 'Madurai, Rameshwaram, Kanyakumari',
    days: '6 Days',
    price: 'â‚¹42,000',
    image: muruganTempleImage,
    type: 'Cultural',
    budget: 'Mid Range',
  },
  {
    id: 11,
    title: 'Kodaikanal Hill Escape',
    location: 'India',
    destination: 'Kodaikanal, Coakerâ€™s Walk, Lake',
    days: '4 Days',
    price: 'â‚¹28,000',
    image: kodaikanalImage,
    type: 'Nature',
    budget: 'Mid Range',
  },
  {
    id: 12,
    title: 'Tamil Nadu UNESCO Heritage Tour',
    location: 'India',
    destination: 'Mahabalipuram, Thanjavur, Darasuram, Chennai',
    days: '5 Days',
    price: 'â‚¹52,000',
    image: unescoHeritageImage,
    type: 'Heritage',
    budget: 'Mid Range',
    link: '/tamil-nadu-unesco',
  },
];

