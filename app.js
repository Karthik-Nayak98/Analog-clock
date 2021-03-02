digitalTime = document.querySelector('.digital-time');
analogClock = document.querySelector('.analog-time');
secondHand = document.querySelector('.seconds');
minuteHand = document.querySelector('.minutes');
hourHand = document.querySelector('.hours');
toggleSwitch = document.querySelector('.toggle-switch');

toggleSwitch.addEventListener('click', function () {
  toggleSwitch.classList.toggle('dark-mode');
  const html = document.getElementsByTagName('html')[0];
  html.classList.toggle('dark');
});

function rotateSecondHand(second) {
  let rotation = second * 6;
  secondHand.style.transform = `rotate(${rotation}deg)`;
}

function rotateMinuteHand(minute, second) {
  let rotation = minute * 6 + second * 0.1;
  minuteHand.style.transform = `rotate(${rotation}deg)`;
}

function rotateHourHand(hour, minute, second) {
  let rotation = hour * 30 + minute * 0.5 + second / 120;
  hourHand.style.transform = `rotate(${rotation}deg)`;
}

setInterval(function () {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let meridiem;

  if (seconds < 10) seconds = `0${seconds}`;
  if (minutes < 10) minutes = `0${minutes}`;
  if (hours < 10) hours = `0${hours}`;

  if (hours < 12) meridiem = 'AM';
  else meridiem = 'PM';

  if (hours > 12) hours = hours - 12;

  rotateSecondHand(seconds);
  rotateMinuteHand(minutes, seconds);
  rotateHourHand(hours, minutes, seconds);

  digitalTime.textContent = `${hours}:${minutes}:${seconds} ${meridiem}`;
}, 1000);
