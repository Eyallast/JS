// 1.create 2 book objects with properties: name, author, year.
let myBook1 = {
  name: 'Hasamba',
  author: 'Y.Zehavi',
  year: 1952
};
let myBook2 = {
  name: 'Harry Potter',
  author: 'Rollings',
  year: 2002
};
// 2. create an empty object bookUtils (utils = short for utilities).
// 3. add to the bookUtils object a function getFirstPublished,that receives 2 books and returns the book with the smaller year.
// 4. add to the bookUtils object a function setNewEdition, that receives a book and an edition year and sets a new
// property latestEdition with the edition year, or updates an existing one.
// 5. add to the bookUtils object a setLanguage function, that
// receives a book and a language and sets a new property
// language with the languahe, or updates an existing one.
// 6. add to the bookUtils object a setTranslation function, that
// receives a book a language and a translator, and sets a
// new property of translation, which is an object that
// contains the translator and the language.
// 7. add to the bookUtils object a setPublisher function, that
// receives a book a name and location, and sets a new
// property named publisher, which is an object that contains
// the name and location.
// 8. add to the bookUtils object a function isSamePublisher,
// which receives 2 books and checks if the publisher name
// and location are identical in the 2 books

let bookUtils = {
  getFirstPublished: function (myBook1, myBook2) {
    return myBook1.year > myBook2.year ? myBook2 : myBook1;
  },
  setNewEdition: function (book, editionYear) {
    return book.latestEdition = editionYear;
  },
  setLanguage: function (book, language) {
    return book.language = language;
  },
  setTranslation: function (book, language, translator) {
    book.translation = {
      language: language,
      translator: translator
    };
  },
  setPublisher: function (book, name, location) {
    book.publisher = {
      name: name,
      location: location
    };
  },
  isSamePublisher: function (myBook1, myBook2) {
    return (myBook1.publisher.name === myBook2.publisher.name && myBook1.publisher.location === myBook2.publisher.location);
  },
};


let firstPublishedBook = bookUtils.getFirstPublished(myBook1, myBook2);
console.log(firstPublishedBook); 

bookUtils.setNewEdition(myBook1, 2000);
console.log(myBook1); 

bookUtils.setLanguage(myBook2, 'Spanish');
console.log(myBook2); 

bookUtils.setTranslation(myBook1, 'French', 'Frank');
console.log(myBook1); 

bookUtils.setPublisher(myBook2, 'albert', 'Italy');
console.log(myBook2); 

bookUtils.isSamePublisher(myBook1, myBook2);
console.log(isSamePublisher);