import './style.scss';
import {
  KEYBOARD_EN, KEYBOARD_EN_SHIFT, KEYBOARD_RU, KEYBOARD_RU_SHIFT,
} from './js/keyboards';
import { createKeyboardLines } from './js/createKeyboard';
import createPage from './js/createPage';

let langKeyboard = 'EN';
let sizeLetter = 'small';

window.addEventListener('unload', () => {
  localStorage.setItem('langKey', langKeyboard);
});

window.addEventListener('load', () => {
  const lang = localStorage.getItem('langKey') || 'EN';
  langKeyboard = lang;
  if (langKeyboard === 'EN') {
    createKeyboardLines(KEYBOARD_EN);
  } else {
    createKeyboardLines(KEYBOARD_RU);
  }
});

createPage();

function addInteractiveForButton(e) {
  if (e.target.classList.contains('button')) {
    e.target.classList.toggle('button_active');
  }
}

function changeSizeButtonInKeyboard(btnText) {
  let alphabet = '';
  if (langKeyboard === 'EN') {
    if (sizeLetter === 'small') {
      alphabet = KEYBOARD_EN_SHIFT;
    } else {
      alphabet = KEYBOARD_EN;
    }
  } else if (sizeLetter === 'small') {
    alphabet = KEYBOARD_RU_SHIFT;
  } else {
    alphabet = KEYBOARD_RU;
  }

  if (sizeLetter === 'small') {
    sizeLetter = 'big';
  } else {
    sizeLetter = 'small';
  }

  createKeyboardLines(alphabet, btnText);
}

function deleteNextLetter() {
  const TEXTAREA = document.querySelector('.textarea');

  const stringInTextarea = TEXTAREA.value;
  const position = TEXTAREA.selectionStart;

  const content = stringInTextarea.slice(0, position) + stringInTextarea.slice(position + 1);
  TEXTAREA.value = content;
}

function addLetterInTextareaField(letter) {
  const TEXTAREA = document.querySelector('.textarea');
  let content = TEXTAREA.value;
  let addSymbolInTextarea = '';

  if (letter === 'Tab') {
    addSymbolInTextarea = '    ';
  } else if (letter === 'Backspace') {
    content = content.slice(0, content.length - 1);
  } else if (letter === 'CapsLock') {
    changeSizeButtonInKeyboard(letter);
  } else if (letter === 'Control'
                || letter === 'Meta'
                || letter === 'Alt') {
    // comment empty

  } else if (letter === 'Enter') {
    addSymbolInTextarea = '\r\n';
    // change Big or Small Letters
  } else if (letter === 'Shift') {
    changeSizeButtonInKeyboard(letter);
    // change Big or Small Letters
  } else if (letter === 'Ctrl') {
    // change Big or Small Letters
  } else if (letter === 'ArrowUp') {
    addSymbolInTextarea = '\u25B2';
  } else if (letter === 'ArrowDown') {
    addSymbolInTextarea = '\u25B2';
  } else if (letter === 'ArrowLeft') {
    addSymbolInTextarea = '\u25C0';
  } else if (letter === 'ArrowRight') {
    addSymbolInTextarea = '\u25B6';
  } else if (letter === 'Win') {
    // change Big or Small Letters
  } else if (letter === 'Space') {
    addSymbolInTextarea = ' ';
  } else if (letter === 'Del') {
    deleteNextLetter();
  } else {
    addSymbolInTextarea = letter;
  }

  TEXTAREA.value = content + addSymbolInTextarea;
}

const KEYBOARD = document.querySelector('.keyboard');

KEYBOARD.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('button')) {
    addInteractiveForButton(e);
    addLetterInTextareaField(e.target.innerText);
  }
});

KEYBOARD.addEventListener('mouseup', (e) => {
  const targetContent = e.target.innerText;

  if (targetContent !== 'CapsLock') {
    addInteractiveForButton(e);
  }

  if (targetContent === 'Shift') {
    changeSizeButtonInKeyboard(targetContent);
  }
});

// keyboard event
const changeLanguage = ['Shift', 'Alt'];
const pressed = new Set();

function addInteractiveAfterKeyboardPress(button) {
  let temp = button;

  if (button === 'Meta') {
    temp = 'Win';
  } else if (button === ' ') {
    temp = 'Space';
  } else if (button === 'ArrowLeft') {
    temp = '\u25C0';
  } else if (button === 'ArrowUp') {
    temp = '\u25B2';
  } else if (button === 'ArrowDown') {
    temp = '\u25BC';
  } else if (button === 'ArrowRight') {
    temp = '\u25B6';
  }

  const BUTTONS_ON_VIRTUAL_KEYBOARD = document.querySelectorAll('.button');

  BUTTONS_ON_VIRTUAL_KEYBOARD.forEach((item) => {
    if (item.innerText === temp) {
      if (button === 'CapsLock') {
        item.classList.toggle('button_active');
      } else {
        item.classList.add('button_active');
      }
    }
  });
}

function removeInteractiveAfterKeyboardPress(button) {
  let temp = button;

  if (button === 'Meta') {
    temp = 'Win';
  } else if (button === ' ') {
    temp = 'Space';
  } else if (button === 'ArrowLeft') {
    temp = '\u25C0';
  } else if (button === 'ArrowUp') {
    temp = '\u25B2';
  } else if (button === 'ArrowDown') {
    temp = '\u25BC';
  } else if (button === 'ArrowRight') {
    temp = '\u25B6';
  }

  const BUTTONS_ON_VIRTUAL_KEYBOARD = document.querySelectorAll('.button');

  BUTTONS_ON_VIRTUAL_KEYBOARD.forEach((item) => {
    if (item.innerText === temp) {
      item.classList.remove('button_active');
    }
  });
}

function checkChangeLanguage() {
  for (let i = 0; i < changeLanguage.length; i += 1) {
    if (!pressed.has(changeLanguage[i])) {
      return;
    }
  }

  if (langKeyboard === 'EN') {
    langKeyboard = 'RU';
  } else {
    langKeyboard = 'EN';
  }
}

document.addEventListener('keydown', (e) => {
  pressed.add(e.key);

  const btn = e.key === 'Control' ? 'Ctrl' : e.key;

  addInteractiveAfterKeyboardPress(btn);
  addLetterInTextareaField(btn);

  checkChangeLanguage();
});

document.addEventListener('keyup', (e) => {
  const btn = e.key === 'Control' ? 'Ctrl' : e.key;

  if (btn !== 'CapsLock') {
    removeInteractiveAfterKeyboardPress(btn);
  }

  if (btn === 'Shift') {
    changeSizeButtonInKeyboard(btn);
  }

  pressed.delete(e.key);
});

export default { sizeLetter };
