// import

import refs from './refs';

// themes

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// operations

loadTheme();
refs.checkbox.addEventListener('change', togglePageTheme);

// functions

function togglePageTheme() {
  if (refs.checkbox.checked) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
  } else {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
  }

  saveTheme();
}

function saveTheme() {
  localStorage.setItem('dark-theme', refs.checkbox.checked);
}

function loadTheme() {
  const savedValue = localStorage.getItem('dark-theme');

  if (savedValue) {
    refs.checkbox.checked = JSON.parse(savedValue);
  }

  refs.checkbox.checked
    ? refs.body.classList.add(Theme.DARK)
    : refs.body.classList.add(Theme.LIGHT);
}
