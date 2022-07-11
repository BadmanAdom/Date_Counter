function countDown() {
  const current = new Date();
  const birthDay = new Date("September 10 2022");
  const newYear = new Date("January 1, 2023");
  // Seconds
  var one_second = 1000;
  var totalseconds = Math.round((birthDay - current) / one_second);

  //   Days
  let days = Math.round(totalseconds / 3600 / 24);

  //Hours
  let hour = Math.round(totalseconds / 3600) % 24;
  //Minutes
  let minute = Math.round(totalseconds / 60) % 60;

  //One Second
  let second = Math.round(totalseconds % 60); //   console.log(hello);

  const one = document.getElementById("day");
  const two = document.getElementById("hour");
  const three = document.getElementById("minute");
  const four = document.getElementById("second");

  one.innerText = days;
  two.innerText = formatTime(hour);
  three.innerHTML = formatTime(minute);
  four.innerText = formatTime(second);

  // Calculations
  // hour = hour < 10 ? `0 ${hour}` : hour;
  // minute = minute < 10 ? `0 ${minute}` : minute;
  // second = second < 10 ? `0 ${second}` : second;

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
}
countDown();
setInterval(countDown, 1000);
