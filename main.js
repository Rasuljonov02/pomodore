const taim = document.querySelector(".taim");
const btn = document.querySelector("button");

let m = 25;

let S = 0;
let n = 0;
let Color;
let Sec;
btn.addEventListener("click", (e) => {
	startCountdown(); // Start the countdown timer
	console.log("5");
});


const TimetoString = (num) => (num < 10 ? "0" + num : num); // bu faqat 0 qoshish uchun

const Timer = () => {
	Sec = setInterval(() => {
		taim.innertText = `${TimetoString(m)}:${TimetoString(S)}`;
		if (m == 0 && S == 0) {
			clearInterval(Sec);
			m;
		}
		if (S == 0) {
			S = 60;
			m--;
		}
		S--;
	}, 100);
};
