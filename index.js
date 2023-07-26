const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    const timerId = setInterval(updateCountDown, 1000);
    function updateCountDown() {
      let hour = Math.floor((seconds / 60 / 60) % 24);
      let min = Math.floor((seconds / 60) % 60);
      let sec = seconds % 60;

      hour = hour < 10 ? '0' + hour : hour;
      min = min < 10 ? '0' + min : min;
      sec = sec < 10 ? '0' + sec : sec;

      timerEl.innerHTML = `${hour}:${min}:${sec}`;
      seconds--;

      if (seconds < 0) {
        clearInterval(timerId);
        timerEl.innerHTML = 'hh:mm:ss';
      }
    }
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/\D/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
