import template from './message-input.pug';

export class MessageInput {
  constructor(el) {
    this.el = el;

    this.render();

    let form = this.el.querySelector('form');

    form.addEventListener('submit', event => {
      event.preventDefault();
    });
  }

  render() {
    this.el.innerHTML = template();
  }
}

