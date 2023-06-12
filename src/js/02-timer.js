

import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };  
flatpickr("input#datetime-picker", options);
   console.log(options);    
const refs = {
    datePiker: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('button[data-start]'),
    timer: document.querySelector('.timer'),
};

   refs.btnStart.addEventListener('click', onClick);

   function onClick(){
    const currentDate = new Date();
    console.log(currentDate);

    const selectedDate = refs.datePiker.value;
    console.log(refs.datePiker.value);

    // const dateForHTML = selectedDate - currentDate;
    // console.log(dateForHTML);
   
   }

  //  function convertMs(ms) {
  //   // Number of milliseconds per unit of time
  //   const second = 1000;
  //   const minute = second * 60;
  //   const hour = minute * 60;
  //   const day = hour * 24;
  
  //   // Remaining days
  //   const days = Math.floor(ms / day);
  //   // Remaining hours
  //   const hours = Math.floor((ms % day) / hour);
  //   // Remaining minutes
  //   const minutes = Math.floor(((ms % day) % hour) / minute);
  //   // Remaining seconds
  //   const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
  //   return { days, hours, minutes, seconds };
  // }
  
//  refs.timer.textContent = `${convertMs.days}:${convertMs.hours}:${convertMs.minutes}:${convertMs.seconds}`;