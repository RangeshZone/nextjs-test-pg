// Type declarations for server components
declare module './ServerOnlyComponent' {
  export default function ServerOnlyComponent(): Promise<JSX.Element>;
}

declare module './ClientOnlyComponent' {
  export default function ClientOnlyComponent(): JSX.Element;
}

declare module './InteractiveClientComponent' {
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
  
  export default function InteractiveClientComponent(props: InteractiveClientComponentProps): JSX.Element;
}
