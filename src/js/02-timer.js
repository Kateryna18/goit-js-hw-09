// Напиши скрипт таймера, який здійснює зворотний відлік до певної дати.
// 2. Додай мінімальне оформлення елементів інтерфейсу.

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const COUNT_DELAY = 1000;

const valueDays = document.querySelector('.value[data-days]');
const valueHours = document.querySelector('.value[data-hours]');
const valueMinutes = document.querySelector('.value[data-minutes]');
const valueSeconds = document.querySelector('.value[data-seconds]');

const startBtn = document.querySelector('button[data-start]');
startBtn.setAttribute('disabled', '');

const options = {
  // Вмикає засіб вибору часу
  enableTime: true,
  // Відображає засіб вибору часу в 24-годинному режимі без вибору AM/PM, якщо ввімкнено.
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  // Функції, які запускаються щоразу, коли календар закривається.
  onClose(selectedDates) {
    const currentDate = Date.now();
    let chooseDate = selectedDates[0].getTime();

    if (chooseDate < currentDate) {
      alert('Please choose a date in the future');
    }

    startBtn.removeAttribute('disabled');
    startBtn.addEventListener('click', () => {
      setInterval(() => {
        const currentDate = Date.now();
        const differenceTime = chooseDate - currentDate;
        const timeToSelectedDate = convertMs(differenceTime);

        updateTimer(timeToSelectedDate);
      }, COUNT_DELAY);
    });
  },
};

flatpickr('#datetime-picker', options);

function updateTimer({ days, hours, minutes, seconds }) {
  valueDays.textContent = `${days}`;
  valueHours.textContent = `${hours}`;
  valueMinutes.textContent = `${minutes}`;
  valueSeconds.textContent = `${seconds}`;
}

function addLeadingZero(value) {
  const formattedValue = value.toString().padStart(2, '0');

  return formattedValue;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };

  // {days: 0, hours: 0, minutes: 0, seconds: 2}
}
