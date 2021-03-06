import template from './auth.pug';

export class Auth {
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

