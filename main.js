import data from './components/Books.js';
import Book from './data/book-data.js'

const books = data.map(book => new Book(book));
const main = document.querySelector('.main');

books.forEach(book => {
  main.innerHTML += book.render();
})

window.books = books;