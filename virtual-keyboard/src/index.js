
import './style.scss';
import { Button } from './js/Button';
import {KEYBOARD_EN, KEYBOARD_EN_SHIFT, KEYBOARD_RU, KEYBOARD_RU_SHIFT} from './js/keyboards';
const img = require('./assets/imageSea.jpg');




const BODY = document.querySelector('body');
BODY.classList.add('container');
const h1 = document.createElement('h1');
h1.classList.add('title');
h1.innerText = 'Virtual keyboard';
BODY.appendChild(h1);




const TEXTAREA = document.createElement('textarea');
TEXTAREA.classList.add('textarea');
TEXTAREA.setAttribute('name', 'textarea-keyboard');
TEXTAREA.setAttribute('id', 'textarea');
TEXTAREA.setAttribute('cols', '50');
TEXTAREA.setAttribute('rows', '10');
TEXTAREA.setAttribute('placeholder', '11231231223');

BODY.appendChild(TEXTAREA);





const KEYBOARD_SECTION = document.createElement('div');
KEYBOARD_SECTION.classList.add('keyboard');
BODY.appendChild(KEYBOARD_SECTION);

/* const KEYBOARD = document.querySelector('.keyboard'); */

KEYBOARD_EN.forEach(keyboardLine => {
  let line = document.createElement('div');
  line.className = 'keyboard-line';

  keyboardLine.forEach(item => {
    let btn = new Button(item);
    let btnElement = btn.createButton();
    line.append(btnElement);
  });


  KEYBOARD_SECTION.appendChild(line);

})




