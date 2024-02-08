async function getAllData() {
  const [booksRes, authorsRes, publishersRes] = await Promise.all([
    fetch("./books.json"),
    fetch("./authors.json"),
    fetch("./publishers.json"),
  ]);

  const books = await booksRes.json();
  const authors = await authorsRes.json();
  const publishers = await publishersRes.json();

  console.log(books, authors, publishers);
}

getAllData();
