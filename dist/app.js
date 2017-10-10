(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var dom = require("./dom");

var dinosaurs = [];

	// The old way of calling - the pyramid of doom
// var dinoGetter = function() {
// 	$.get("./db/dinosaurs1.json").done(function(data1){
// 		console.log("data1", data1);
// 		data1.dinosaurs1.forEach(function(dino){
// 			dinosaurs.push(dino);
// 		}); //End 1
// 		$.get("./db/dinosaurs2.json").done(function(data2){
// 			console.log("data2", data2);
// 			data2.dinosaurs2.forEach(function(dino){
// 				dinosaurs.push(dino);
// 			}); // End 2
// 				$.get("./db/dinosaurs3.json").done(function(data3){
// 					console.log("data3", data3);
// 					data3.dinosaurs3.forEach(function(dino){
// 						dinosaurs.push(dino);
// 				}); // End 3
// 				console.log("dinosaurs array after for each", dinosaurs);
// 			});
// 		});
// 	});
// };

var firstDinosaurJSON = function(){
	return new Promise(function(resolve, reject){
		$.ajax("./db/dinosaurs1.json").done(function(data1){
			resolve(data1.dinosaurs1);
		}).fail(function(error1){
			reject(error1);
		});
	});
};


var secondDinosaurJSON = function(){
	return new Promise(function(resolve, reject){
		$.ajax("./db/dinosaurs2.json").done(function(data2){
			resolve(data2.dinosaurs2);
		}).fail(function(error2){
			reject(error2);
		});
	});
};

var thirdDinosaurJSON = function(){
	return new Promise(function(resolve, reject){
		$.ajax("./db/dinosaurs3.json").done(function(data3){
			resolve(data3.dinosaurs3);
		}).fail(function(error3){
			reject(error3);
		});
	});
};

// // The Promise pyramid of D00M

// var dinoGetter = function() {
// 	// .then for when it resolves,
// 	// .catch for when it rejects
// 	firstDinosaurJSON().then(function(results) {
// 		results.forEach(function(dino){
// 			dinosaurs.push(dino);
// 		}); // 1st foreach

// 		secondDinosaurJSON().then(function(results2){
// 			results2.forEach(function(dino){
// 			dinosaurs.push(dino);
// 			}); // 2nd foreach

// 			thirdDinosaurJSON().then(function(results3){
// 				results3.forEach(function(dino){
// 				dinosaurs.push(dino);
// 				}); // 3rd foreach

// 			}); // end 3rd .then()
// 		}); // end 2nd .then()
// 	console.log("results from dino1 into dinosaurs", dinosaurs);
// 	//end 1st .then()
// 	}).catch(function(error) {
// 		console.log("error from dino1", error);
// 	});
// }; // end dinoGetter()


// This is the way
var dinoGetter = function() {
	firstDinosaurJSON().then(function(results) {
		results.forEach(function(dino){
			dinosaurs.push(dino);
		});
		return secondDinosaurJSON();
		 // End 1st, begin second
	}).then(function(results2) {
		results2.forEach(function(dino){
			dinosaurs.push(dino);
		});
	return thirdDinosaurJSON();
	 // end 2nd, begin 3rd
	}).then(function(results3) {
		results3.forEach(function(dino){
			dinosaurs.push(dino);
		});
		makeDinos();
	});
	// end 3rd
};

var makeDinos = function() {
	dinosaurs.forEach(function(dino) {
		dom(dino);
	});
};






var initializer = function() {
	dinoGetter();
};

var getDinosaurs = function() {
	return dinosaurs;
};

module.exports = {initializer:initializer, getDinosaurs:dinosaurs};
},{"./dom":2}],2:[function(require,module,exports){
"use strict";

var outputDiv = $("#dinosaur");

var domString = function(dinosaur) {
	var dinoString = "";
	dinoString += `<div>`;
	dinoString += 	`<h1>${dinosaur.type}</h1>`;
	dinoString += `</div>`;
	printToDom(dinoString);
};

var printToDom = (string) => {
	outputDiv.append(string);
};

module.exports = domString;
},{}],3:[function(require,module,exports){
"use strict";

var data = require("./data");

$(document).ready(function() {
	data.initializer();
});

},{"./data":1}]},{},[3]);
