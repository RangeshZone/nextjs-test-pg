import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  inStock: boolean;
  imageUrl: string;
}

interface InteractiveClientComponentProps {
  products: Product[];
}

declare const InteractiveClientComponent: (props: InteractiveClientComponentProps) => React.ReactElement;
export default InteractiveClientComponent;
