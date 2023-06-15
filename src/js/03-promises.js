const form =document.querySelector('.form'); 
console.log(form);

form.addEventListener('submit', createPromise);


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => { if (shouldResolve) {
    resolve("Success! Value passed to resolve function");
  } else {
    reject("Error! Error passed to reject function");
  }
}, ${delay});
}



createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });