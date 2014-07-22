//  Add your code here
// $("#monkey").on("click", function() {
// 	$(this).toggleClass("active");
// 	$(".monkey").toggle();

// });

// $("#dog").on("click", function() {
// 	$(this).toggleClass("active");
// 	$(".dog").toggle();
// });

// $("#cat").on("click", function() {
// 	$(this).toggleClass("active");
// 	$(".cat").toggle();

// });

// $(".filter-button").on("click", function() {
// 	$(this).toggleClass("active");
// });

// $(document).ready(function(){

// var animals_ar = []; // array to hold all animal types to be displayed
//  var JSONobj; // object to hold the data returned from the data call 
 
//  // make a call to retrieve the data
//  $.getJSON('http://mks-frontend-gallery.herokuapp.com/', function(response) {
// 	 JSONobj = response; // set the JSONobj variable to the response of the data call
// 	 getAnimals(response);	//
//  });
 
//  //get a list of all the animals that will be filtered
//  function getAnimals(obj) { 
// 	for (i=0; i < obj.length; i++) {  // loop through the obj
// 		for (n=0; n < obj[i].animals.length; n++) { // loop through the animal array in each object
// 			hasElement(obj[i].animals[n], animals_ar);  // check to see if this animal is already in the animals_ar array
// 		}		
// 	}
// 	drawFilters(); // draw the filter buttons on the screen
// 	drawImages(); // draw the image on the screen
//  }
 
//  //checks to see if the array passed in has the element passed in
//  function hasElement(elem, array) {
// 	if ($.inArray(elem, array) === -1) {
// 		array.push(elem) // if the element isn't found in the array, add it to the array
// 	};
//  }
 
 
//  //draws the filter buttons on the screen
//  function drawFilters() {
// 		for (i=0; i < animals_ar.length; i++) { // lopp through the animals_ar array to determine what animals is on each button and draw that to the screen
// 			$('#filters').append('<div class="filter-button individual button active" id="'+animals_ar[i]+'">'+animals_ar[i]+'</div>'); //appends the appropriate button to the DOM
// 		}		
		
// 		//event handler for the buttons that were drawn to the screen
// 		$('.filter-button').on('click', function() {
// 				var fadeSpeed = 500;  // set a variable to adjust the fade speed
				
				
// 				if ( $(this).hasClass('active')) {
// 					$('.'+this.id).fadeOut(fadeSpeed);  // fades out the desired image based on the class of the button clicked
// 				} else {
// 					$('.'+this.id).fadeIn(fadeSpeed);  //fades in the desired images based on the class of the button clicked
// 				}					
// 				$(this).toggleClass('active');  // toggles the button class to active and inactive			
// 	}); 
//  } 
 
//  //draws the images on the screen
//  function drawImages() {
// 	 var className;  //set a className variable to hold the class to be added to the div
	 
// 	 for (i=0; i < JSONobj.length; i++) { //loop through the JSONobj in order to get the image URLs
// 		 for (n=0; n < JSONobj[i].animals.length; n++) { //loop through the animals array in each object to get the animal names that will be used as the class for each image
// 			if (n === 0) { // if n = 0 then make the className equal to the animal in the first array index
// 				className = JSONobj[i].animals[0];
// 			}else{ //for all other indexes append a space and the next class name
// 				className = className + " " + JSONobj[i].animals[n];
// 			}
// 		 }
// 		 $('#images').append('<div class="large-4 small-6 columns '+className+'"><img src="'+JSONobj[i].url+'"></div>') // append the className to the div and draw the images to the screen
// 	 }	 
//  }
// });

// flips way	

// $(document).on('click','.filter-button', function(e) {
// //once filter button is clicked, run command, if class active will run functions 
// //"Hid these Iamges" 
// 	var button = $(this).attr('id');

// 	if ( $(this).hasClass('active')) {

		
// 		hideTheseImages(button);

// 	} else {

// 		showTheseImages(button);

// 	}

// });

// $('#animals')
// $.getJSON( "http://mks-frontend-gallery.herokuapp.com/", function( json ) {
//     var animals = json;
//     for (var i = 0; i < animals.length; i++) {
//     	console.log(animals[i]);

//     	$("#animals").append('<div class="large-4 small-6 columns '+animals[i].animals.join(" ")+'"><img src="'+animals[i].url+'"></div>');
//     	for (var j = 0; j < animals[i].animals.length; j++) {
//     		if ($('.filter-button').filter('#' + animals[i].animals[j]).length==0) {
//     		$(".filters").append('<div class="filter-button individual button active" id="'+animals[i].animals[j]+'">'+animals[i].animals[j]+'</div>');
//     		}

//     	}
//     }
// });


// function hideTheseImages(imageClass) {
//   $('.' + imageClass).fadeOut();
//   $('#' + imageClass).removeClass('active');
// }

// function showTheseImages(imageClass) {
//   $('.' + imageClass).fadeIn();  
//   $('#' + imageClass).removeClass('active');

// }


$(document).ready(function(){
	var animals = [];
 
	$.getJSON( "https://mks-frontend-gallery.herokuapp.com/", function( json ) {
	  for (var i in json) {
	  	$(".gallery").append("<div class='large-4 small-6 columns " + json[i].animals.join(" ") + "'><img src=" + json[i].url + "></div>");
	  }
	  var ids = [];
	  $.each( json, function ( key, val ) {
	    
	    for (var x = 0; x < val.animals.length; x++) {
	    	ids.push(
	    		val.animals[x]
	    	);
	    }
 
	    $.unique(ids);
	  });
	  for (i in ids) {
	  	$(".filters").append("<div class='filter-button individual button active' id='" + ids[i] + "'>" + ids[i]+ "</div>");
	  }
	  console.log(ids);
	}).done(function(){
		console.log("done")
		$('.filter-button').click(function(){
			$(this).toggleClass("active");
			$("." + this.id).fadeToggle(1000, "swing", function(){console.log("fade is done")});
		});
	}).fail(function(){
		console.log("fail")
	});
 
	
});
