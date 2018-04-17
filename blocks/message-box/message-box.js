import template from './message-box.pug';

export class MessageBox {
  constructor(el, data) {
    this.el = el;
    this.data = data;

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

