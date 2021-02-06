import hamburgerMenu from './menu.js';
import { digitalClock, alarm } from './reloj.js';
import { shortCuts } from './teclado.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
  hamburgerMenu('.panel-btn', '.panel', '.menu a');
  digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');
  alarm('./assets/ara.mp3', '#activar-alarma', '#desactivar-alarma');
});

d.addEventListener('keydown', (e) => {
  shortCuts(e);
});
