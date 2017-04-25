$(document).ready(function() {

    // default animals
    var animals = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird",
        "ferret", "turtle", "sugar glider", "chinchilla", "hedgehog", "hermit crab", "gerbil",
        "pygmy goat", "chicken", "capybara", "teacup pig", "serval", "salamander", "frog"
    ];

    // for each item in animals array
    for (var i = 0; i < animals.length; i++) {

    	// create button
        var animalBtn = $("<button>");

        // add class "animal-btn"
        animalBtn.addClass("animal-btn");

        // add attribute "data-animal" with animal name
        animalBtn.attr("data-animal", animals[i]);

        // use animal name for button label
        animalBtn.text(animals[i]);

        // add to panel with "animal-buttons" id
        $("#animal-buttons").append(animalBtn);

    }

});
