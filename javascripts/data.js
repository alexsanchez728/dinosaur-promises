"use strict";

const dom = require("./dom");

let dinosaurs = [];

const firstDinosaurJSON = () => {
	return new Promise((resolve, reject) => {
		$.ajax("./db/dinosaurs1.json").done((data1) => {
			resolve(data1.dinosaurs1);
		}).fail((error1) => {
			reject(error1);
		});
	});
};


const secondDinosaurJSON = () => {
	return new Promise((resolve, reject) => {
		$.ajax("./db/dinosaurs2.json").done((data2) => {
			resolve(data2.dinosaurs2);
		}).fail((error2) => {
			reject(error2);
		});
	});
};

const thirdDinosaurJSON = () => {
	return new Promise((resolve, reject) => {
		$.ajax("./db/dinosaurs3.json").done((data3) => {
			resolve(data3.dinosaurs3);
		}).fail((error3) => {
			reject(error3);
		});
	});
};

const allTheCats = () => {
	return new Promise((resolve, reject) => {
		$.ajax("./db/cats.json").done((data4) => {
			resolve(data4.cats);
		}).fail((error4) => {
			reject(error4);
		});
	});
};

// The fun and easy but not-to-common way
const dinoGetter = () => {
	Promise.all([firstDinosaurJSON(), secondDinosaurJSON(), thirdDinosaurJSON()]).then((results) => {
		// format all the data how we need it to be before it is sent to be displayed
		allTheCats().then((catResult) => {
			results.forEach((result) => {
				result.forEach((dino) => {
					dino.cats = [];
					dino.catIds.forEach((catId) => {
						catResult.forEach((cat) => {
							if(cat.id === catId){
								dino.cats.push(cat);
							}
						});
					});
					dinosaurs.push(dino);
				}); // loop through once
			}); // loop-d-loop
		console.log("dino", dinosaurs);
		makeDinos();
		});
	}).catch((error) => {
		console.log("Error from Promise.all", error);
	});
};

var makeDinos = () => {
	dinosaurs.forEach((dino) => {
		dom(dino);
	});
};

var initializer = () => {
	dinoGetter();
};

var getDinosaurs = () => {
	return dinosaurs;
};

module.exports = {initializer:initializer, getDinosaurs:dinosaurs};