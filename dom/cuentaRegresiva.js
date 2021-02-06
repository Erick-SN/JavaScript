const d = document;
export default function countDown(id, limitDate, message) {
  const $countDown = d.getElementById(id);
  const countDownDate = new Date(limitDate).getTime();
  const interval = setInterval(() => {
    let now = new Date().getTime();
    let limitTime = countDownDate - now;
    let days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      hours = (
        '0' + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(-2),
      minutes = (
        '0' + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2),
      seconds = ('0' + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);
    $countDown.innerHTML = `<h3>Faltan ${days}:${hours}:${minutes}:${seconds}</h3>`;
    if (limitTime < 0) {
      clearInterval(interval);
      $countDown.innerHTML = `<h3>${message}</h3>`;
    }
  }, 1000);
}
