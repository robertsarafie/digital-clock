function getDate() {
  var date = new Date();
  var day = date.getDate();
  var dayName = date.getDay();
  var dayList = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednseday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  var monthList = [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  document.getElementById(
    'date',
  ).innerHTML = `${dayList[dayName]}, ${monthList[month]} ${day}, ${year}`;
}
setInterval(getDate, 10);

function getTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var session = document.getElementById('session');

  if (hours >= 12) {
    session.innerHTML = 'PM';
  } else {
    session.innerHTML = 'AM';
  }

  if (hours > 12) {
    hours = hours - 12;
  }

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;
}
setInterval(getTime, 10);

const analog = document.getElementById('analog');
const digitalTime = document.getElementById('time');
const toggle = document.getElementById('toggle');

toggle.onclick = function () {
  toggle.classList.toggle('active');
  analog.classList.toggle('active');
  digitalTime.classList.toggle('active');

  if (analog.classList.contains('active')) {
    digitalTime.classList.remove('active');
  }

  if (digitalTime.classList.contains('active')) {
    analog.classList.remove('active');
  }
};

function getAnalog() {
  const deg = 6;
  // time interval 360deg / 60min
  const hr = document.getElementById('hr');
  const mn = document.getElementById('mn');
  const sc = document.getElementById('sc');

  const day = new Date();
  const hh = day.getHours() * 30;
  // 12 * 30 = 360deg
  const mm = day.getMinutes() * deg;
  const ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  // For example, if we look at the clock at 03:30,
  // we can see that the hand indicating the time of the hour is between 3 and 4.
  // This means that the hand of the clock determines its position depending on
  // the time of the minute. So here we have divided the time of the minute
  // by 12 and added the hour hand.
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
}
setInterval(getAnalog, 10);
