const d = document;
const local = localStorage;
export default function darkTheme(btn, classDark) {
  const $selector = d.querySelectorAll('[data-dark]');
  const $themeBtn = d.querySelector(btn);
  let moon = '🌙',
    sun = '☀️';

  const lightMode = () => {
    $selector.forEach((el) => el.classList.remove(classDark));
    $themeBtn.textContent = moon;
    local.setItem('theme', 'light');
  };

  const darkMode = () => {
    $selector.forEach((el) => el.classList.add(classDark));
    $themeBtn.textContent = sun;
    local.setItem('theme', 'dark');
  };

  d.addEventListener('click', (e) => {
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  d.addEventListener('DOMContentLoaded', (e) => {
    if (local.getItem('theme') === null) local.setItem('theme', 'light');
    if (local.getItem('theme') === 'light') lightMode();
    if (local.getItem('theme') === 'dark') darkMode();
  });
}
