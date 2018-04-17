import { Auth } from './auth/auth';
import { MessageInput } from './message-input/message-input';
import { MessageBox } from './message-box/message-box';

window.addEventListener('DOMContentLoaded', () => {
  const auth = new Auth(document.querySelector('.js-auth'));
  const messageInput = new MessageInput(document.querySelector('.js-message-input'));
  const messageBox = new MessageBox(document.querySelector('.js-message-box'));

  console.log(auth, messageInput, messageBox);
});
