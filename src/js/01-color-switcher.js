function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  const btnStart = document.querySelector('button[data-start]');
  const btnStop = document.querySelector('button[data-stop]');
  let timerId = null;
  btnStart.addEventListener('click', changeColor)
   function changeColor() {
    let hexcolor =[getRandomHexColor()];
    let timerId= setInterval(() => document.body.style.backgroundColor = hexcolor, 1000);
    // btnStart.setAttribute('disabled', 'disabled')
    // btnStart.disabled = true;
  };
  btnStop.addEventListener(click, onBtnStop) 
  function onBtnStop() {
    clearInterval(timerId);
    // btnStart.disabled = false;
  }
  