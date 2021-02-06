const d = document;
export default function darkTheme(btn, classDark) {
  const $selector = d.querySelectorAll('[data-dark]');
  const $themeBtn = d.querySelector(btn);
  let moon = '🌙',
    sun = '☀️';
  d.addEventListener('click', (e) => {
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === moon) {
        $selector.forEach((el) => el.classList.add(classDark));
        $themeBtn.textContent = sun;
      } else {
        $selector.forEach((el) => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
      }
    }
  });
}
