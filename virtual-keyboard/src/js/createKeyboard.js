import Button from './Button';

function createKeyboardLines(language, btnText, sizeLetter) {
  const KEYBOARD_SECTION = document.querySelector('.keyboard');
  KEYBOARD_SECTION.innerHTML = '';

  language.forEach((keyboardLine) => {
    const line = document.createElement('div');
    line.className = 'keyboard-line';
    keyboardLine.forEach((item) => {
      const btn = new Button(item, sizeLetter);
      const btnElement = btn.createButton(btnText);
      line.append(btnElement);
    });

    KEYBOARD_SECTION.appendChild(line);
  });
}

export { createKeyboardLines };
