export default class Book {
  constructor(props = {
    title :'No Title',
    authors : [],
    rating : 0,
    image : 'https://picsim.photos/300/300'
  }) {
    Object.assign(this, props);
  }

  render() {
    return `<article>
              <h2 class="book__title">${this.title}</h2>
              <h3 class="book__authors">${this.authors.map(name => name).join(', ')}</h3>
              <h4 class="book__rating">Rating: ${this.rating}</h4>
              <figure class="book__image">
                <img src="${this.image}">
              </figure>
            </article>`;
  }
}
