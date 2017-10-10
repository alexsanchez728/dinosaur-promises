"use strict";

var outputDiv = $("#dinosaur");

var domString = function(dinosaur) {
	var dinoString = "";
	dinoString += `<div>`;
	dinoString += 	`<h1>${dinosaur.name}</h1>`;
	dinoString += `</div>`;
	printToDom(dinoString);
};

var printToDom = (string) => {
	outputDiv.append(string);
};

module.exports = domString;