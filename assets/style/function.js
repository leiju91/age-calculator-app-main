// Variables et const
let inputDay = document.querySelector("#day");
let inputMonth = document.querySelector("#month");
let inputYear = document.querySelector("#year");
const btnOnClick = document.querySelector(".mySvg");
let allInput = document.querySelectorAll("input");


btnOnClick.addEventListener("click", function () {
	const dayValue = inputDay.value;
	const monthValue = inputMonth.value;
	const yearValue = inputYear.value;

	if (
		!isNaN(dayValue) &&
		dayValue.length > 0 &&
		!isNaN(monthValue) &&
		monthValue.length > 0 &&
		!isNaN(yearValue) &&
		yearValue.length > 0
	) {
		let result = calcVeryDifficult(dayValue, monthValue, yearValue);

		resetInput();
		displayResult(result);

		for (const input of allInput) {
			input.classList.remove("error-border");
		}
	} else {
		for (const input of allInput) {
			input.classList.add("error-border");
		}
	}
});

allInput.forEach(function (input) {
	input.addEventListener("focus", function (event) {
		for (const input of allInput) {
			input.classList.remove("error-border");
		}
		resetResult();
	});
});

function resetResult() {
	document.getElementById("result-year").textContent = "--";
	document.getElementById("result-month").textContent = "--";
	document.getElementById("result-day").textContent = "--";
}

function calcVeryDifficult(day, month, year) {
	let today = new Date(); // Recuperation de la date d'ajd

	let dateNaissance = new Date(year, month - 1, day);

	// Calculer la différence en millisecondes entre les deux dates
	let difference = today - dateNaissance;

	// Calculer le nombre d'années
	let annees = Math.floor(difference / (365.25 * 24 * 60 * 60 * 1000));
	let mois = Math.floor(
		(difference % (365.25 * 24 * 60 * 60 * 1000)) /
			(30.44 * 24 * 60 * 60 * 1000)
	);
	let jours = Math.floor(
		(difference % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
	);
	// Retourner un objet contenant les années, mois et jours
	return {
		ans: annees,
		mois: mois,
		jours: jours,
	};
}

function resetInput() {
	inputDay.value = "";
	inputMonth.value = "";
	inputYear.value = "";
}

function displayResult(result) {
	document.getElementById("result-year").innerHTML = result.ans;
	document.getElementById("result-month").innerHTML = result.mois;
	document.getElementById("result-day").innerHTML = result.jours;
}
