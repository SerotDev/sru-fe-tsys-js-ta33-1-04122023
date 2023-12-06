//function to get the actual time and print it
let printActualTime = () => {
  const now = new Date();
  const hours = formatTime(now.getHours().toString());
  const minutes = formatTime(now.getMinutes().toString());
  const seconds = formatTime(now.getSeconds().toString());
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
};

// Function to format time to 2 digits
let formatTime = (time) => {
  return parseInt(time) < 10 ? "0" + time : time.toString();
};

// It prints the time refreshed each second
setInterval(printActualTime, 1000);
printActualTime();
