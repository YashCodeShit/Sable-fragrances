export interface Perfume {
  id: string;
  name: string;
  chapter: string;
  description: string;
  price: number;
  image: string;
  occasions: string[];
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
}

export interface CartItem {
  perfume: Perfume;
  quantity: number;
}
