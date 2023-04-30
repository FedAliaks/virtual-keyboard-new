
import './style.scss';

import {KEYBOARD_EN, KEYBOARD_EN_SHIFT, KEYBOARD_RU, KEYBOARD_RU_SHIFT} from './js/keyboards';
import { createKeyboardLines } from './js/createKeyboard';
import { createPage } from './js/createPage';
const img = require('./assets/imageSea.jpg');

let langKeyboard = 'EN';
let sizeLetter = 'small';


window.addEventListener('unload', (e) => {
  localStorage.setItem('langKey', langKeyboard);
})

window.addEventListener('load', (e) => {
  let lang = localStorage.getItem('langKey') || 'EN';
  console.log(lang);
  langKeyboard = lang;
  if(langKeyboard === 'EN') {
    console.log('english');
    createKeyboardLines(KEYBOARD_EN);
  } else {
    console.log('russian');
    createKeyboardLines(KEYBOARD_RU);
  }
})


createPage();





const KEYBOARD = document.querySelector('.keyboard');


KEYBOARD.addEventListener('mousedown', (e) => {
  const target = e.target;

  if(e.target.classList.contains('button')) {
    addInteractiveForButton(e);
    addLetterInTextareaField(target.innerText);

  }


/*   console.log(123); */

})

KEYBOARD.addEventListener('mouseup', (e) => {
  const targetContent = e.target.innerText;


  if(targetContent !== "CapsLock") {
    addInteractiveForButton(e);
  }

  if(targetContent === 'Shift') {
    changeSizeButtonInKeyboard(targetContent);
  }




})

function addInteractiveForButton(e) {
  const target = e.target;

  if(target.classList.contains('button')) {
    target.classList.toggle('button_active');
  }
}


function addLetterInTextareaField(letter) {
  const TEXTAREA = document.querySelector('.textarea');
  let content = TEXTAREA.value;
  let addSymbolInTextarea = '';

  if(letter === 'Tab') {
    addSymbolInTextarea  = '    ';
  } else if(letter === 'Backspace') {
    content = content.slice(0, content.length - 1);
  } else if(letter === 'CapsLock') {
      changeSizeButtonInKeyboard(letter);
  } else if(letter === 'Control'
                || letter === 'Meta'
                || letter === 'Alt' ) {

  } else if(letter === 'Enter') {
    addSymbolInTextarea = '\r\n';
    //change Big or Small Letters
  } else if(letter === 'Shift') {
    changeSizeButtonInKeyboard(letter);
    //change Big or Small Letters
  } else if(letter === 'Ctrl') {
    //change Big or Small Letters
  } else if(letter === 'ArrowUp') {
    addSymbolInTextarea = '\u25B2';
  } else if(letter === 'ArrowDown') {
    addSymbolInTextarea = '\u25B2';
  } else if(letter === 'ArrowLeft') {
    addSymbolInTextarea = '\u25C0';
  } else if(letter === 'ArrowRight') {
    addSymbolInTextarea = '\u25B6';
  } else if(letter === 'Win') {
    //change Big or Small Letters
  } else if(letter === 'Space') {
    addSymbolInTextarea = ' ';
  } else if(letter === "Del") {
    deleteNextLetter();
  } else {
    addSymbolInTextarea = letter;
  }

  TEXTAREA.value = content + addSymbolInTextarea;
}


function changeSizeButtonInKeyboard(btnText) {
/*   console.log('hello'); */
  let alphabet = '';
  if(langKeyboard === 'EN') {
    sizeLetter === 'small' ? alphabet = KEYBOARD_EN_SHIFT : alphabet = KEYBOARD_EN;
  } else {
    sizeLetter === 'small' ? alphabet = KEYBOARD_RU_SHIFT : alphabet = KEYBOARD_RU;
  }

  sizeLetter === 'small' ? sizeLetter = 'big' : sizeLetter = 'small';
  createKeyboardLines(alphabet, btnText);

}

function deleteNextLetter() {
  console.log(123);

}




//keyboard event

const changeLanguage = ['Shift', 'Alt'];
const pressed= new Set();


document.addEventListener('keydown', (e) => {
  pressed.add(e.key);
/*   console.log('pressed');
  console.log(pressed); */
  
  const btn = e.key === 'Control' ? 'Ctrl' : e.key;
  console.log(btn)
  addInteractiveAfterKeyboardPress(btn);
  addLetterInTextareaField(btn);

  checkChangeLanguage();




});

document.addEventListener('keyup', (e) => {
  const btn = e.key === 'Control' ? 'Ctrl' : e.key;

  if(btn !== "CapsLock") {
    removeInteractiveAfterKeyboardPress(btn);
  }

  if(btn === 'Shift') {
    changeSizeButtonInKeyboard(btn);
  }

  pressed.delete(e.key);
/*   console.log(pressed); */
  
});


function addInteractiveAfterKeyboardPress(button) {
  console.log('addInteractiveAfterKeyboardPress');
  
  const BUTTONS_ON_VIRTUAL_KEYBOARD = document.querySelectorAll('.button');

  BUTTONS_ON_VIRTUAL_KEYBOARD.forEach(item => {
    if(item.innerText === button) {
      if(button === 'CapsLock') {
        item.classList.toggle('button_active');
      } else {
        item.classList.add('button_active');
      }
/*       console.log(5) */


      
    }
  })

}


function removeInteractiveAfterKeyboardPress(button) {
  /*   console.log(1234); */
    const BUTTONS_ON_VIRTUAL_KEYBOARD = document.querySelectorAll('.button');
  
    BUTTONS_ON_VIRTUAL_KEYBOARD.forEach(item => {
      if(item.innerText === button) {
  /*       console.log(5) */
        item.classList.remove('button_active');
      }
    })
  
  }






function checkChangeLanguage() {
  for(let pressKey of changeLanguage) {
    if(!pressed.has(pressKey)) {
      return;
    }
  }


  langKeyboard === "EN" ? langKeyboard = 'RU' : langKeyboard = 'EN';

}


/* checkChangeLanguage();

function checkChangeLanguage() {
  console.log(123123);

  const pressed = new Set();

  document.querySelector('keydown', (e) => {
    console.log(e.key);
  })
} */

/* checkChangeLanguage();

function checkChangeLanguage() {
  console.log(9);
  const pressed = new Set();
  document.querySelector('keydown', (e) => {
    pressed.add(e.key);

    console.log(pressed);

    for(let code of changeLanguage) {
      if(!pressed.has(code)) {
        return;
      }
    }
    console.log('OK');
  });

  document.querySelector('keyup', (e) => {
    pressed.delete(e.key);
  })
} */












export { sizeLetter }














