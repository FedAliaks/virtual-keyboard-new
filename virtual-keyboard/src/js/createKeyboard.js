import { Button } from './Button';


function createKeyboardLines(language) {
  const KEYBOARD_SECTION = document.querySelector('.keyboard')

  language.forEach(keyboardLine => {
    let line = document.createElement('div');
    line.className = 'keyboard-line';
    keyboardLine.forEach(item => {
      let btn = new Button(item);
      let btnElement = btn.createButton();
      line.append(btnElement);
    });

    KEYBOARD_SECTION.appendChild(line);

  })

}

export { createKeyboardLines }