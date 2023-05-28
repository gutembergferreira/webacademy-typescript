interface Book {
    name: string;
    price: number;
    category: string;
  }
  
  const library: Book[] = [
    { name: 'Livro 1', price: 29.99, category: 'Ficção' },
    { name: 'Livro 2', price: 39.99, category: 'Fantasia' },
    { name: 'Livro 3', price: 24.99, category: 'Romance' },
    { name: 'Livro 4', price: 49.99, category: 'Suspense' },
  ];
  
  library.forEach((book) => {
    console.log(`Livro: ${book.name}`);
    console.log(`Preço: R$ ${book.price.toFixed(2)}`);
    console.log(`Categoria: ${book.category}`);
    console.log('---------------------');
  });