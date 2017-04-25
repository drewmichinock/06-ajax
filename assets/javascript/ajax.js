$(document).ready(function() {

    // default animal button labels
    var animals = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird",
        "ferret", "turtle", "sugar glider", "chinchilla", "hedgehog", "hermit crab", "gerbil",
        "pygmy goat", "chicken", "capybara", "teacup pig", "guinea pig", "lizard", "frog"
    ];

    // creating buttons from default animal button labels array
    for (var i = 0; i < animals.length; i++) {

        // create button
        var animalBtn = $("<button>");

        // add animal-btn class
        animalBtn.addClass("animal-btn");

        // add data-animal attribute with animal name
        animalBtn.attr("data-animal", animals[i]);

        // add animal name as button label
        animalBtn.text(animals[i]);

        // add button to #animal-buttons panel
        $("#animal-buttons").append(animalBtn);

    }

    // when animal button is clicked
    $(".animal-btn").on("click", function() {

        // clear gif results panel
        $("#animal-img").empty();

        // select attribute value of clicked button ...
        var animals = $(this).attr("data-animal");

        // ... place in API URL and initiate search query
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animals + "&api_key=dc6zaTOxFJmzC&limit=3&rating=g";

        // get search query results
        $.ajax({

            url: queryURL,
            method: "GET"

        })

        // after getting search query results (response), pass through function
        .done(function(response) {

            // access data of response
            var results = response.data;

            // for each result (limit: 3)...
            for (var i = 0; i < results.length; i++) {

                // ... create div tag
                var animalDiv = $("<div>");

                // ... create img tag
                var animalImg = $("<img>");

                // ... assign src attribute to img tag with its url
                animalImg.attr("src", results[i].images.fixed_height.url);

                // ... place img tag inside div
                animalDiv.append(animalImg);

                // ... and insert them at beginning of #animal-img div tag
                $("#animal-img").prepend(animalDiv);

            }
        })

    });

});
