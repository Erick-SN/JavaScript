const d = document;
const w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
  let brakPoint = w.matchMedia(mq);

  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = desktopContent;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    }
  };
  brakPoint.addListener(responsive);
  responsive(brakPoint);
}
