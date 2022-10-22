function showTime() {
  let d = new Date();
  let time = d.toLocaleTimeString();

  console.log(time);
}

let display = setInterval(showTime, 1000);
