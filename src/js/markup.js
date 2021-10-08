// imports

import refs from './refs';
import menu from '../menu.json';
import markupRender from '../templates/cards.hbs';

// operation

refs.list.insertAdjacentHTML('beforeend', markupRender(menu));
