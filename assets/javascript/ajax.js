$(document).ready(function() {

    // default animal button labels
    var animals = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish",
        "bird", "ferret", "turtle", "sugar glider", "chinchilla", "hedgehog",
        "hermit crab", "gerbil", "pygmy goat", "chicken", "capybara",
        "teacup pig", "guinea pig", "lizard", "frog"
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

    //when submit button is clicked
    $("#add-animal").on("click", function(event) {

        // prevent form submission
        event.preventDefault();

        // get input and store in variable
        var animalNew = $("#animal-input").val().trim();

        animals.push(animalNew);

        // create new variable for button
        var animalNewBtn = $("<button>");

        // add animal-btn class
        animalNewBtn.addClass("animal-btn");

        // add data-animal attribute with animal name
        animalNewBtn.attr("data-animal", animalNew);

        // add animal name as button label
        animalNewBtn.text(animalNew);

        // add button to #animal-buttons panel
        $("#animal-buttons").append(animalNewBtn);

    })

    // when animal button is clicked
    $(".animal-btn").on("click", function() {

        // clear gif results panel
        $("#animal-img").empty();

        // select attribute value of clicked button ...
        var animals = $(this).attr("data-animal");

        // ... place in API URL and initiate search query
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animals + "&api_key=dc6zaTOxFJmzC&limit=10&rating=g";

        // get search query results
        $.ajax({

            url: queryURL,
            method: "GET"

        })

        // after getting search query results (response), pass through function
        .done(function(response) {

            // access data of response
            var results = response.data;

            // for each result (limit: 10)...
            for (var i = 0; i < results.length; i++) {

                // ... create div tag
                var animalDiv = $("<div>");

                // ... create p tag for rating 
                var p = $("<p>").text("rating: " + results[i].rating);

                // ... create img tag
                var animalImg = $("<img>");

                // ... assign the following attributes and values
                animalImg.attr("src", results[i].images.fixed_height_still.url);

                animalImg.attr("data-still", results[i].images.fixed_height_still.url);

                animalImg.attr("data-animate", results[i].images.fixed_height.url);

                animalImg.attr("data-state", "still");

                animalImg.attr("class", "gif");

                // ... place p and img tag inside div
                animalDiv.append(p);

                animalDiv.append(animalImg);

                // ... and insert them at beginning of #animal-img div tag
                $("#animal-img").prepend(animalDiv);

            }

            // when gif is clicked
            $(".gif").on("click", function() {

                // create variable for if/else statement
                var state = $(this).attr("data-state");

                // if data-state value is still
                if (state === "still") {

                    // change src value to data-animate value ...
                    $(this).attr("src", $(this).attr("data-animate"));

                    // change data-state value to animate
                    $(this).attr("data-state", "animate");

                    // if data-state value is animate
                } else {

                    // change src value to data-still value
                    $(this).attr("src", $(this).attr("data-still"));

                    // change data-state value to still
                    $(this).attr("data-state", "still");

                }

            });

        })

    });

});
