const d = document;
let x = 0,
  y = 0;

export const shortCuts = (e) => {
  if (e.key === 'a' && e.altKey) alert('Holi crayoli');
  if (e.key === 'c' && e.altKey) confirm('Holi crayoli x2');
};

export const moveBall = (e, ball, stage) => {
  const $ball = d.querySelector(ball);
  const $stage = d.querySelector(stage);
  const limitBall = $ball.getBoundingClientRect();
  const limitStage = $stage.getBoundingClientRect();

  switch (e.keyCode) {
    case 37:
      e.preventDefault();
      if (limitBall.left > limitStage.left) x--;
      break;
    case 38:
      e.preventDefault();
      if (limitBall.top > limitStage.top) y--;
      break;
    case 39:
      e.preventDefault();
      if (limitBall.right < limitStage.right) x++;
      break;
    case 40:
      e.preventDefault();
      if (limitBall.bottom < limitStage.bottom) y++;
      break;
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
};
