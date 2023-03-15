// Користувач буде вводити першу затримку в мілісекундах, крок збільшення затримки для кожного промісу 
// після першого і кількість промісів, яку необхідно створити.

// Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay)
// стільки разів, скільки ввели в поле amount. Під час кожного виклику передай їй номер промісу
// (position), що створюється, і затримку, враховуючи першу затримку (delay), введену користувачем, і крок (step).

// Доповни код функції createPromise таким чином, щоб вона повертала один проміс, який виконується або
// відхиляється через delay часу. Значенням промісу повинен бути об'єкт, в якому будуть властивості position
// і delay зі значеннями однойменних параметрів. Використовуй початковий код функції для вибору того, що
// потрібно зробити з промісом - виконати або відхилити.

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', (event) => {
  const {
    elements: { delay, step, amount }
  } = event.currentTarget;

  let position = 0;
  

  for(let i = 0; i <= amount; i += 1) {
    position += i;
    


    createPromise(position, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }
});


function createPromise(position, delay) {
  return new Promis((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    

    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } 
      else {
        reject("error");
      }
    }, delay);
  });
}


