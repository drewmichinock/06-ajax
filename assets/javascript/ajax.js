$(document).ready(function() {

    // default animals
    var animals = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird",
        "ferret", "turtle", "sugar glider", "chinchilla", "hedgehog", "hermit crab", "gerbil",
        "pygmy goat", "chicken", "capybara", "teacup pig", "serval", "salamander", "frog"
    ];

    // creating buttons for each item in animals array
    for (var i = 0; i < animals.length; i++) {

        // create button
        var animalBtn = $("<button>");

        // add class .animal-btn
        animalBtn.addClass("animal-btn");

        // add attribute "data-animal" with animal name
        animalBtn.attr("data-animal", animals[i]);

        // use animal name for button label
        animalBtn.text(animals[i]);

        // add to panel with #animal-buttons
        $("#animal-buttons").append(animalBtn);

    }

    $(".animal-btn").on("click", function() {

    	$("#animal-img").empty();

        var animals = $(this).attr("data-animal");

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animals + "&api_key=dc6zaTOxFJmzC&limit=10&rating=g";

        $.ajax({

            url: queryURL,
            method: "GET"

        })

        .done(function(response) {

        	console.log(queryURL);
        	console.log(response);

        	var results = response.data;

        	for (var i = 0; i < results.length; i++) {

        		var animalDiv = $("<div>");

        		var animalImg = $("<img>");

        		animalImg.attr("src", results[i].images.fixed_height.url);

        		animalDiv.append(animalImg);

        		$("#animal-img").prepend(animalDiv);

        	}
        })

    });


});
