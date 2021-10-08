import menu from '../menu.json';
import markupRender from '../templates/cards.hbs';

const listRef = document.querySelector('.js-menu');

// console.log(menu);
// console.log(markupRender);
// console.log(listRef);

listRef.insertAdjacentHTML('beforeend', markupRender(menu));
