
import './style.scss';

import {KEYBOARD_EN, KEYBOARD_EN_SHIFT, KEYBOARD_RU, KEYBOARD_RU_SHIFT} from './js/keyboards';
import { createKeyboardLines } from './js/createKeyboard';
import { createPage } from './js/createPage';
const img = require('./assets/imageSea.jpg');


createPage();



const KEYBOARD = document.querySelector('.keyboard');
KEYBOARD.addEventListener('mousedown', (e) => {
  addInteractiveForButton(e);
})

KEYBOARD.addEventListener('mouseup', (e) => {
  addInteractiveForButton(e);
})

function addInteractiveForButton(e) {
  const target = e.target;
  if(target.classList.contains('button')) {
    target.classList.toggle('button_active');
  }
}

















/* const KEYBOARD = document.querySelector('.keyboard'); */









