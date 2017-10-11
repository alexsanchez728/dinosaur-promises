"use strict";

const outputDiv = $("#dinosaur");

const domString = (dinosaur) => {
	let dinoString = "";
	dinoString += `<div>`;
	dinoString += 	`<h1>${dinosaur.type}</h1>`;
	dinoString += 	`<h3>${dinosaur.bio}</h3>`;
	dinoString += 	`<h3>${dinosaur.info}</h3>`;
	dinoString += `</div>`;
	printToDom(dinoString);
};

const printToDom = (string) => {
	outputDiv.append(string);
};

module.exports = domString;