import hamburgerMenu from './menu.js';
import countDown from './cuentaRegresiva.js';
import scrollTop from './scroll.js';
import darkTheme from './darkTheme.js';
import { digitalClock, alarm } from './reloj.js';
import { shortCuts, moveBall } from './teclado.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
  hamburgerMenu('.panel-btn', '.panel', '.menu a');
  digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');
  alarm('./assets/ara.mp3', '#activar-alarma', '#desactivar-alarma');
  countDown('countDown', 'May 23,2021 03:23:19', 'Fin');
  scrollTop('.scroll-top-button');
  darkTheme('.dark-theme-btn', 'dark-mode');
});

d.addEventListener('keydown', (e) => {
  shortCuts(e);
  moveBall(e, '.ball', '.stage');
});
