export class Button {
  constructor(symbol) {
    this.innerTextButton = symbol;
  }

  createButton(isFlag) {
    let div = document.createElement('div');
    div.className = 'button';
    if(this.innerTextButton.length > 1) {
      div.classList.add('button-dark');
    }

    if(this.innerTextButton === 'Space') {
      div.classList.remove('button-dark');
      div.classList.add('button-space');
    }

    const text = this.innerTextButton === "Space" ? '' : `${this.innerTextButton}`;

    div.innerText = text;

    return div;
  }
}