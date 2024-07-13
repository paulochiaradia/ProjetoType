
interface ExternalBook {
    title: string;
    author: string;
    quantity: number;
    category: number;  // This is a string, not a CategoryInterface
  }

  export default ExternalBook;