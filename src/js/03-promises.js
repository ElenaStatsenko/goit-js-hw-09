
import Notiflix from 'notiflix';
const form = document.querySelector('.form'); 

// console.log(form);

form.addEventListener('submit', onFormSubmit);


 const button = document.querySelector('button[type=submit]');
 

function onFormSubmit(e) {
  e.preventDefault();
  const delayLink = document.querySelector('input[name="delay"]');
const delay = Number(delayLink.value)
console.log(delay);

const stepDelayLink = document.querySelector('input[name="step"]');
const stepDelay = Number(stepDelayLink.value)
console.log(stepDelay);

const intervalCountLink = document.querySelector('input[name="amount"]');
const intervalCount = Number(intervalCountLink.value);
console.log(intervalCount);
  for (i = 0; i <= intervalCount; i++) {
    createPromise(i + 1, delay + stepDelay * i)
    .then(({ position, delay }) => onSuccess({ position, delay })) 
    .catch(({ position, delay }) => onFailure({ position, delay }))
    }
  
  
function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {

    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
} 

  function onSuccess({ position, delay }){
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  }

  function onFailure({ position, delay }) {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}
