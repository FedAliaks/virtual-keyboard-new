
import './style.scss';

import {KEYBOARD_EN, KEYBOARD_EN_SHIFT, KEYBOARD_RU, KEYBOARD_RU_SHIFT} from './js/keyboards';
import { createKeyboardLines } from './js/createKeyboard';
import { createPage } from './js/createPage';
const img = require('./assets/imageSea.jpg');

let langKeyboard = 'EN';


createPage();



const KEYBOARD = document.querySelector('.keyboard');
KEYBOARD.addEventListener('mousedown', (e) => {
  addInteractiveForButton(e);
  addLetterInTextareaField(e.target.innerText);
})

KEYBOARD.addEventListener('mouseup', (e) => {
  if(e.target.innerText !== "Caps Lock") {
    addInteractiveForButton(e);
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
  } else if(letter === 'Caps Lock') {
    //change Big or Small Letters
  } else if(letter === 'Enter') {
    //change Big or Small Letters
  } else if(letter === 'Shift') {
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


function changeSizeButtonInKeyboard() {

}

















/* const KEYBOARD = document.querySelector('.keyboard'); */









