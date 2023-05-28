enum BookCategory {
    Fiction = 'Ficção',
    Fantasy = 'Fantasia',
    Romance = 'Romance',
    Suspense = 'Suspense',
  }
  
  interface Book {
    name: string;
    price: number;
    category?: BookCategory;
  }
  
  const library: Book[] = [
    { name: 'Livro 1', price: 29.99, category: BookCategory.Fiction },
    { name: 'Livro 2', price: 39.99, category: BookCategory.Fantasy },
    { name: 'Livro 3', price: 24.99, category: BookCategory.Romance },
    { name: 'Livro 4', price: 49.99 },
  ];
  
  library.forEach((book) => {
    console.log(`Livro: ${book.name}`);
    console.log(`Preço: R$ ${book.price.toFixed(2)}`);
    console.log(`Categoria: ${book.category || 'Não informada'}`);
    console.log('---------------------');
  });