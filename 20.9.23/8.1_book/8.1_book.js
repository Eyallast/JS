let myBook = {
Name: "Harry Potter",
NumbeOfPages:'345',
AuthorName: 'Rollings',
Price: "$39.99",
YearOfPublished: '2002',
};

function describeBook(book) {
  return `The book ${book.Name} was written by ${book.AuthorName} in the year ${book.YearOfPublished}`;
}

console.log(describeBook(myBook));