let numberToBeGuessed = null;
let playerName;
let currentGuess;
let numberOfGuesses = 5;
let minNum = 0;
let maxNum = 25;

// raam1: invullen van de naam
while (
	playerName === undefined ||
	playerName === null ||
	playerName.length === 0
) {
	playerName = prompt("Hoe heet je?");
}

//raam2: welkom bericht
alert("Welkom bij Guess the Number " + playerName + "!!");

//raam3: het minimale nummer opgeven
let selectedMinNum = parseInt(
	prompt("Vanaf welk nummer mag er geraden worden? (standaard: 0)")
);
if (!isNaN(selectedMinNum) && selectedMinNum >= 0) {
	minNum = selectedMinNum;
}

//raam4: het maximale nummer opgeven
let selectedMaxNum = parseInt(
	prompt(
		"Tot welk nummer mag er geraden worden? (standaard: 25, hoger dan " +
			minNum +
			")"
	)
);
if (!isNaN(selectedMaxNum)) {
	maxNum = selectedMaxNum;
}

while (maxNum <= minNum) {
	let selectedMaxNum = parseInt(
		prompt("Tot welk nummer mag er geraden worden? (hoger dan " + minNum + ")")
	);
	if (!isNaN(selectedMaxNum)) {
		maxNum = selectedMaxNum;
	}
}
//raam5: geeft aan tussen welke nummers je mag raden
alert(
	"Je hebt nu 5 pogingen om het getal te raden. Het getal ligt tussen " +
		minNum +
		" en " +
		maxNum +
		". Heel veel succes!"
);

// het nummer wordt door de pc/laptop gekozen
numberToBeGuessed = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
console.log("Pssst het nummer is: " + numberToBeGuessed);

//raam6: elke keer als je fot hebt gegokt krijg je het volgende te zien
while (currentGuess !== numberToBeGuessed) {
	if (numberOfGuesses < 1) {
		alert(
			"Helaas, je pogingen zijn op. Je hebt verloren. We beginnen weer opnieuw met een nieuw nummer! Het nummer ligt nog steeds tussen " +
				minNum +
				" en " +
				maxNum +
				"."
		);
		numberOfGuesses = 5;
		numberToBeGuessed = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
	}
	currentGuess = parseInt(prompt("Voer een nummer in.."));

	//raam7: als je een letter invult in plaats van een getal
	while (isNaN(currentGuess)) {
		currentGuess = parseInt(
			prompt(
				"Je invoer was geen nummer. Voer alleen nummers in! Probeer het nogmaals"
			)
		);
	}

	//raam8: wat je gekozen hebt en het gevolg van die keuze
	alert("Je gok is: " + currentGuess);

	if (currentGuess > numberToBeGuessed) {
		numberOfGuesses--;
		if (numberOfGuesses < 1) {
			alert("Dit was je laatste poging.");
		} else {
			alert(
				"Helaas, je gok was te hoog. Je hebt nog: " +
					numberOfGuesses +
					" keuze(s) over. Probeer het opnieuw:"
			);
		}
	} else if (currentGuess < numberToBeGuessed) {
		numberOfGuesses--;
		if (numberOfGuesses < 1) {
			alert("Dit was je laatste poging.");
		} else {
			alert(
				"Helaaaas, je gok was te laag. Je hebt nog: " +
					numberOfGuesses +
					" keuze(s) over. Probeer het opnieuw:"
			);
		}
	} else {
		alert("Goed geraden, het nummer was inderdaad: " + currentGuess);
		alert(
			"We sluiten de game af. Bedankt voor het spelen " +
				playerName +
				", tot de volgende keer!"
		);
	}
}
