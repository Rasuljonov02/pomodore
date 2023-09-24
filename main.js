const taim = document.querySelector(".taim");
const btn = document.querySelector(".btn");
const pomodoro = document.getElementById("pomodoro");
const shortBreak = document.getElementById("shortBreak");
const longBreak = document.getElementById("longBreak");

let m = 0;
let s = 0;
let countdownInterval;

btn.addEventListener("click", () => {
	startCountdown();
});

pomodoro.addEventListener("click", () => {
	longBreak.classList.remove("activ");
	shortBreak.classList.remove("activ");
	pomodoro.classList.add("activ");
	m = 25;
	resetTimer();
});

shortBreak.addEventListener("click", () => {
	pomodoro.classList.remove("activ");
	longBreak.classList.remove("activ");
	shortBreak.classList.add("activ");
	m = 5;
	taim.innerText = "05:00";
	resetTimer();
});

longBreak.addEventListener("click", () => {
	pomodoro.classList.remove("activ");
	shortBreak.classList.remove("activ");
	longBreak.classList.add("activ");
	m = 15;
	taim.innerText = "15:00";
	resetTimer();
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

const resetTimer = () => {
	clearInterval(countdownInterval);
	s = 0;
	taim.innerText = `${timetoString(m)}:${timetoString(s)}`;
	countdownInterval = null;
};
