"use strict";

var outputDiv = $("#dinosaur");

var domString = function(dinosaur) {
	var dinoString = "";
	dinoString += `<div>`;
	dinoString += 	`<h1>${dinosaur.type}</h1>`;
	dinoString += 	`<h3>${dinosaur.bio}</h3>`;
	dinoString += 	`<h3>${dinosaur.info}</h3>`;
	dinoString += `</div>`;
	printToDom(dinoString);
};

var printToDom = (string) => {
	outputDiv.append(string);
};

module.exports = domString;