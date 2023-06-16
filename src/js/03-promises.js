const form =document.querySelector('.form'); 
// console.log(form);

form.addEventListener('submit', onFormSubmit);
//  const button = document.querySelector('button[type=submit]');
//  console.log(button);

const intervalCount = Number(document.querySelector('input[name="amount"]'));
const firstDelay = Number(document.querySelector('input[name="delay"]')); 
const stepDelay = Number(document.querySelector('input[name="step"]'));

function onFormSubmit(e) {
  e.preventDefault();
 
 let callCount = 0;
 let intervalID = setInterval(() => {
  createPromise();
  callCount ++;
  if (callCount === intervalCount) {
    clearInterval(intervalID);
  }
  }, );
}
 



function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
  });
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve (setTimeout((position, delay) => {

    }, firstDelay));
    
  } else {
    reject(setTimeout((position, delay) => {

    }, firstDelay));
  }
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
