const taim = document.querySelector(".taim");
const btn = document.querySelector(".btn");

let m = 25;
let s = 0;
let countdownInterval;

btn.addEventListener("click", () => {
  startCountdown();
});

const startCountdown = () => {
  if (!countdownInterval) {
    countdownInterval = setInterval(() => {
      taim.innerText = `${timetoString(m)}:${timetoString(s)}`;

      if (m === 0 && s === 0) {
        clearInterval(countdownInterval);
        taim.innerText = "00:00";
        return;
      }

      if (s === 0) {
        s = 59;
        m--;
      } else {
        s--;
      }
    }, 1000);
  }
};

const timetoString = (num) => (num < 10 ? "0" + num : num);
