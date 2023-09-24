const taim = document.querySelector(".taim");
const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");

const title = document.querySelector("title");
const pomodoro = document.getElementById("pomodoro");
const shortBreak = document.getElementById("shortBreak");
const longBreak = document.getElementById("longBreak");

let m = 25;
let s = 0;
let countdownInterval;
let audio;

btn.addEventListener("click", () => {
	startCountdown();
	btn1.style.display = "flex";
	btn.style.display = "none";
});

btn1.addEventListener("click", () => {
	startCountdown();
	pauseCountdown();
	btn.style.display = "flex";
	btn1.style.display = "none";
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
			title.innerText = `${timetoString(m)}:${timetoString(s)} Time`;

			if (m === 0 && s === 0) {
				clearInterval(countdownInterval);
				taim.innerText = "00:00";
				title.innerText = "00:00";

				audio = new Audio("2.mp3");
				audio.play();
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
// pauza qiladi
const pauseCountdown = () => {
	clearInterval(countdownInterval);
	countdownInterval = null;
};

const timetoString = (num) => (num < 10 ? "0" + num : num);

const resetTimer = () => {
	clearInterval(countdownInterval);
	s = 0;
	taim.innerText = `${timetoString(m)}:${timetoString(s)}`;
	title.innerText = `${timetoString(m)}:${timetoString(s)} Time`;
	countdownInterval = null;
};
