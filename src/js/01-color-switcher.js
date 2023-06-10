function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

  const btnStart = document.querySelector('button[data-start]');
  const btnStop = document.querySelector('button[data-stop]');
  let timerID = null;

  btnStart.addEventListener('click', onBtnStart);
  btnStop.addEventListener('click', onBtnStop);

  function onBtnStart () {
    timerID = setInterval(changeColor, 1000);
    btnStart.disabled = true;    
  }
  function changeColor() {
    let hexcolor = getRandomHexColor();
    document.body.style.backgroundColor = hexcolor;
    };

  function onBtnStop() {
    clearInterval(timerID);
    btnStart.disabled = false;
  }
  