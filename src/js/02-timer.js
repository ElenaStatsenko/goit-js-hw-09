

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      if(selectedDates[0] < new Date()) {
        window.alert('Please choose a date in the future');
        refs.btnStart.disabled = true;
      } else {
        refs.btnStart.disabled = false;
      }
    },
  };  

flatpickr("input#datetime-picker", options);
   console.log(options); 

  const refs = {
    datePiker: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('button[data-start]'),
    timer: document.querySelector('.timer'),
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
  };
  
   timerId = null;

   refs.btnStart.addEventListener('click', onBtnStart);


   function onBtnStart() {


    timerId = setInterval(() => {

    const finishDate = refs.datePiker.value;
    
    const currentDate = new Date();
 
    const finishParseDate = Date.parse(finishDate);
   
    const deltaTime = finishParseDate - currentDate;

    convertMs(deltaTime);

    console.log(convertMs(deltaTime));

    const object = convertMs(deltaTime);

    renderMarkup (object);

    }, 1000)
    
    }

   


   function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
 
  function renderMarkup ({ days, hours, minutes, seconds }) {
    refs.days.textContent = addZero(days);
    refs.hours.textContent =addZero(hours);
    refs.minutes.textContent = addZero(minutes);
    refs.seconds.textContent = addZero(seconds);
    
  }
    
  function addZero(number) {
    return String(number).padStart(2, 0);
  };
  
