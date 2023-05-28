interface Autor {
    nome: string;
  }
  
  interface Livro {
    titulo: string;
    autor: Autor;
  }
  
  const biblioteca1: Map<Autor | string, Livro[]> = new Map();
  const biblioteca2: Map<Autor | string, Livro[]> = new Map();
  
  const autor1: Autor = { nome: 'Autor 1' };
  const autor2: Autor = { nome: 'Autor 2' };
  
  const livrosBiblioteca1: Livro[] = [
    { titulo: 'Livro 1', autor: autor1 },
    { titulo: 'Livro 2', autor: autor1 },
  ];
  const livrosBiblioteca2: Livro[] = [
    { titulo: 'Livro 3', autor: autor2 },
    { titulo: 'Livro 4', autor: autor2 },
  ];
  
  biblioteca1.set(autor1, livrosBiblioteca1);
  biblioteca2.set(autor2, livrosBiblioteca2);
  
  biblioteca1.forEach((livros, chave) => {
    if (typeof chave === 'string') {
      console.log(`Livros da biblioteca '${chave}':`);
    } else {
      console.log(`Livros do autor '${chave.nome}':`);
    }
    
    livros.forEach((livro) => {
      console.log(`- Título: ${livro.titulo}`);
      console.log(`- Autor: ${livro.autor.nome}`);
      console.log('---------------------');
    });
  });
  
  biblioteca2.forEach((livros, chave) => {
    if (typeof chave === 'string') {
      console.log(`Livros da biblioteca '${chave}':`);
    } else {
      console.log(`Livros do autor '${chave.nome}':`);
    }
    
    livros.forEach((livro) => {
      console.log(`- Título: ${livro.titulo}`);
      console.log(`- Autor: ${livro.autor.nome}`);
      console.log('---------------------');
    });
  });