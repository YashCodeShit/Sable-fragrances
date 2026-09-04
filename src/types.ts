export interface PerfumeSizeOption {
  size: '30ml' | '100ml';
  label: string;
  price: number;
}

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
  story?: string[];
  olfactoryProfile?: string;
  itemsInside?: string[];
  isDiscoverySet?: boolean;
  size?: string;
  availableSizes?: PerfumeSizeOption[];
}

export interface CartItem {
  perfume: Perfume;
  quantity: number;
}
