
export interface ServiceCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  description: string;
  recommendFor: string[];
  benefits: string[];
  buttonText: string;
  highlight?: boolean;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  serviceType: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
}
