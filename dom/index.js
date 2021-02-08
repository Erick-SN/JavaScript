import hamburgerMenu from './menu.js';
import countDown from './cuentaRegresiva.js';
import scrollTop from './scroll.js';
import darkTheme from './darkTheme.js';
import responsiveMedia from './responsive.js';
import testerResponsive from './tester.js';
import { digitalClock, alarm } from './reloj.js';
import { shortCuts, moveBall } from './teclado.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
  hamburgerMenu('.panel-btn', '.panel', '.menu a');
  digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');
  alarm('./assets/ara.mp3', '#activar-alarma', '#desactivar-alarma');
  countDown('countDown', 'May 23,2021 03:23:19', 'Fin');
  scrollTop('.scroll-top-button');
  responsiveMedia(
    'youtube',
    '(min-width: 1024px)',
    `<a href='https://www.youtube.com/embed/h9IK0mtfBLA' target='_blank'>Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/h9IK0mtfBLA" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>`
  );
  testerResponsive('responsive-tester');
});

d.addEventListener('keydown', (e) => {
  shortCuts(e);
  moveBall(e, '.ball', '.stage');
});

darkTheme('.dark-theme-btn', 'dark-mode');
