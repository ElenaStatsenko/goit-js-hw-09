

import flatpickr from "flatpickr";

import { Notify } from 'notiflix/build/notiflix-notify-aio';
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
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
  };
  
  // window.addEventListener('keydown', e => {
  //   if(finishDate < currentDate) {
  //     alert('Please choose a date in the future');
  //   };
  //     refs.days.textContent = '00';
  //     refs.hours.textContent = '00';
  //     refs.minutes.textContent = '00';
  //     refs.seconds.textContent = '00';
  //   }
  // );

   refs.btnStart.addEventListener('click', onBtnStart);

   function onBtnStart() {
    setInterval(() => {
    difference().convertMs();
   }, 10000)
   }
   function difference() {
    const currentDate = new Date();
    const finishDate = Date.parse(refs.datePiker.value);
    const deltaTime = finishDate - currentDate;
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
      
  };
  // function addZero(number) {
  //   return String(number).padStart(2, 0);
  // };
  
  // refs.timer.textContent = `${convertMs.addZero(convertMs.days)}:${convertMs.addZero(convertMs.hours)}:${convertMs.addZero(convertMs.minutes)}:${convertMs.addZero(convertMs.seconds)}`;