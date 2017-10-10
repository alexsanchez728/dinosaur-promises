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

// The Promise pyramid of D00M
var thirdDinosaurJSON = function(){
	return new Promise(function(resolve, reject){
		$.ajax("./db/dinosaurs3.json").done(function(data3){
			resolve(data3.dinosaurs3);
		}).fail(function(error3){
			reject(error3);
		});
	});
};


var dinoGetter = function() {
	// .then for when it resolves,
	// .catch for when it rejects
	firstDinosaurJSON().then(function(results) {
		results.forEach(function(dino){
			dinosaurs.push(dino);
		}); // 1st foreach

		secondDinosaurJSON().then(function(results2){
			results2.forEach(function(dino){
			dinosaurs.push(dino);
			}); // 2nd foreach

			thirdDinosaurJSON().then(function(results3){
				results3.forEach(function(dino){
				dinosaurs.push(dino);
				}); // 3rd foreach

			}); // end 3rd .then()
		}); // end 2nd .then()
	console.log("results from dino1 into dinosaurs", dinosaurs);
	//end 1st .then()
	}).catch(function(error) {
		console.log("error from dino1", error);
	});
}; // end dinoGetter()






var initializer = function() {
	dinoGetter();
};

var getDinosaurs = function() {
	return dinosaurs;
};

module.exports = {initializer:initializer, getDinosaurs:dinosaurs};