
import './style.scss';

import {KEYBOARD_EN, KEYBOARD_EN_SHIFT, KEYBOARD_RU, KEYBOARD_RU_SHIFT} from './js/keyboards';
import { createKeyboardLines } from './js/createKeyboard';
import { createPage } from './js/createPage';
const img = require('./assets/imageSea.jpg');

let langKeyboard = 'EN';
let sizeLetter = 'small';


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


  if(targetContent !== "Caps Lock") {
    addInteractiveForButton(e);
  }

  if(targetContent === 'Shift') {
    changeSizeButtonInKeyboard(targetContent);
  }




})

function addInteractiveForButton(e) {
  const target = e.target;
  console.log(123)
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
  } else if(letter === 'Caps Lock') {
      changeSizeButtonInKeyboard(letter);
  } else if(letter === 'Enter') {
    //change Big or Small Letters
  } else if(letter === 'Shift') {
    changeSizeButtonInKeyboard(letter);
    //change Big or Small Letters
  } else if(letter === 'Enter') {
    //change Big or Small Letters
  } else if(letter === 'Ctrl') {
    //change Big or Small Letters
  } else if(letter === 'Win') {
    //change Big or Small Letters
  } else if(letter === 'Space') {
    addSymbolInTextarea = ' ';
  } else {
    addSymbolInTextarea = letter;
  }

  TEXTAREA.value = content + addSymbolInTextarea;
}


function changeSizeButtonInKeyboard(btnText) {
  console.log('hello');
  let alphabet = '';
  if(langKeyboard === 'EN') {
    sizeLetter === 'small' ? alphabet = KEYBOARD_EN_SHIFT : alphabet = KEYBOARD_EN;
  } else {
    sizeLetter === 'small' ? alphabet = KEYBOARD_RU_SHIFT : alphabet = KEYBOARD_RU;
  }

  sizeLetter === 'small' ? sizeLetter = 'big' : sizeLetter = 'small';
  createKeyboardLines(alphabet, btnText);

}












export { sizeLetter }




/* const KEYBOARD = document.querySelector('.keyboard'); */









