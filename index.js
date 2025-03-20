let colourDiv = document.querySelector(".show-colour");

let changeColourButton = document.querySelector("#change");

changeColourButton.addEventListener("click", changeColour);

function changeColour() {
	colourDiv.style.backgroundColor =
		document.querySelector("#colour-choice").value;
}

let resetColourButton = document.querySelector("#reset");

resetColourButton.addEventListener("click", resetColour);

function resetColour() {
	colourDiv.style.backgroundColor = "white";
}
