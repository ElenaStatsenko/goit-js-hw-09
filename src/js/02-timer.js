

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


    const inputDate = refs.datePiker.value;
    console.log(refs.datePiker.value);


    const dateForHTML = inputDate - currentDate;
    console.log(dateForHTML);
    

   }

// const timer ={
//     start() {
//         const startTime = Date.now();
//         console.log(startTime);

//         setInterval(() =>{
//             const currentTime = Date.now();
            

//         }

//         )
//     }
// }

