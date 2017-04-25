$(document).ready(function() {

    // default animals
    var animals = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird",
        "ferret", "turtle", "sugar glider", "chinchilla", "hedgehog", "hermit crab", "gerbil",
        "pygmy goat", "chicken", "capybara", "teacup pig", "serval", "salamander", "frog"
    ];

    // create default animals buttons
    for (var i = 0; i < animals.length; i++) {

        var animalBtn = $("<button>");

        animalBtn.addClass("animal-btn");

        animalBtn.attr("data-animal", animals[i]);

        animalBtn.text(animals[i]);

        $("#animal-buttons").append(animalBtn);

    }

});
