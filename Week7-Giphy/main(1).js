$(document).ready(function () {

	// var Sports = "";
	// params = {
	// 	q: Sports,
	// 	api_key: "NysUg8JwRfN3uPOviALTF2aDvZo762Wh"
	// }
	$(document.body).on("click", "button", function () {
		var api_key = "NysUg8JwRfN3uPOviALTF2aDvZo762Wh"
		var Sports = $(this).data("name");

		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + Sports + "&api_key=" + api_key + "&limit=10"
		// $.param(params)

		//TRIED MULTIPLE WAYS TO LINK API TO MY WORK. THANKS TO PATRICK FOR HELPING ME FIGURE THIS OUT.
		//var queryURL = "https://api.giphy.com/v1/gifs/search?" + "https://api.giphy.com/v1/gifs/search?api_key=&q=Sports&limit=10&offset=0&rating=G&lang=en"

		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function (response) {

			console.log(response)
			var results = response.data;

			for (var i = 0; i < results.length; i++) {
				var SportsDiv = $("<div/>");
				var p = $("<p/>");
				p.text(results[i].rating);
				var SportsImage = $("<img/>");
				SportsImage.addClass("SportsImg")
				SportsImage.attr("src", results[i].images.fixed_height.url);
				SportsImage.attr("data-still", results[i].images.fixed_height_still.url)
				SportsImage.attr("data-animate", results[i].images.fixed_height.url)
					.attr("data-state", "still");
				SportsDiv.append(p);
				SportsDiv.append(SportsImage);
				SportsDiv.prependTo($("#gifs"));
			}

			// $(".SportsImg").on("click", function () {

			// 	//var state = $(this).attr("data-state");
			// 	// If the clicked image's state is still, update its src attribute to what its data-animate value is.
			// 	// Then, set the image's data-state to animate
			// 	// Else set src to the data-still value
			// 	// if (state === "still") {
			// 	//$(this).attr("src", $(this).attr("data-animate"));
			// 	//$(this).attr("data-state", "animate");
			// 	//} else {
			// 	//$(this).attr("src", $(this).attr("data-still"));
			// 	//$(this).attr("data-state", "still");
			// 	//}



			// 	var state = $(this).attr("data-state");
			// 	if (state === "still") {
			// 		$(this).attr("src", $(this).data("animate"));
			// 		$(this).attr("data-state", "animate");
			// 	} else {
			// 		$(this).attr("src", $(this).data("still"));
			// 		$(this).attr("data-state", "still");
			// 	}
			// });
		});
	});

	$(".SportsImg").on("click", function () {

		//var state = $(this).attr("data-state");
		// If the clicked image's state is still, update its src attribute to what its data-animate value is.
		// Then, set the image's data-state to animate
		// Else set src to the data-still value
		// if (state === "still") {
		//$(this).attr("src", $(this).attr("data-animate"));
		//$(this).attr("data-state", "animate");
		//} else {
		//$(this).attr("src", $(this).attr("data-still"));
		//$(this).attr("data-state", "still");
		//}



		var state = $(this).attr("data-state");
		if (state === "still") {
			$(this).attr("src", $(this).data("animate"));
			$(this).attr("data-state", "animate");
		} else {
			$(this).attr("src", $(this).data("still"));
			$(this).attr("data-state", "still");
		}
	});

	$("#theButton").on("click", function () {
		event.preventDefault()

		var SportsButton = $("#gif-input").val();
		var newButton = $("<button/>").addClass("Sports").attr("data-name", SportsButton).html(SportsButton);
		$("#SportsButtons").append(newButton);
		console.log("work");


		//var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=&q=Sports&limit=10&offset=0&rating=G&lang=en" + $.param(params)
		console.log(SportsButton)

		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $.param(params);
		console.log(SportsButton)

		//var queryURL = "https://api.giphy.com/v1/gifs/search?" + "https://api.giphy.com/v1/gifs/search?api_key=&q=Sports&limit=10&offset=0&rating=G&lang=en"
		console.log(SportsButton)

		//var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=&q=Sports&limit=10&offset=0&rating=G&lang=en" + $.param(params);
		console.log(SportsButton);

		// $.ajax({
		// 	url: queryURL,
		// 	method: "GET"
		// }).done(function (response) {

		// 	var results = response.data;

		// 	for (var i = 0; i < results.length; i++) {

		// 		var SportsDiv = $("<div/>");

		// 		var p = $("<p/>");
		// 		p.text(results[i].rating);

		// 		var SportsImage = $("SportsImg")

		// 		SportsImage.addClass("SportsImg")
		// 		SportsImage.attr("src", results[i].images.fixed_height_still.url);

		// 		//SportsImage.attr("data-still", results[i].images.fixed_height_still.url);

		// 		//SportsImage.attr("data-animate", results[i].images.fixed_height.url);

		// 		SportsImage.attr("data-animate", results[i].images.fixed_height.url);

		// 		SportsImage.attr("data-still", results[i].images.fixed_height_still.url);

		// 		SportsImage.attr("still", results[i].images.fixed_height_still.url);



		// 		SportsImage.attr("data-state", "still");

		// 		SportsDiv.append(p);
		// 		SportsDiv.append(SportsImage);
		// 		$("#gifs").prepend(SportsDiv);

		// 	}

		// });
	});

		$(document.body).on("click", ".SportsImg", function () {
			//var state = $(this).attr("data-state");
			// If the clicked image's state is still, update its src attribute to what its data-animate value is.
			// Then, set the image's data-state to animate
			// Else set src to the data-still value
			if (state === "still") {
				//$(this).attr("src", $(this).attr("data-animate"));
				//$(this).attr("data-state", "animate");
				//} else {
				//$(this).attr("src", $(this).attr("data-still"));
				//$(this).attr("data-state", "still");
				//}

				var state = $(this).attr("data-state");
				if (state === "still") {
					$(this).attr("src", $(this).data("animate"));
					$(this).attr("data-state", "animate");
				} else {
					$(this).attr("src", $(this).data("still"));
					$(this).attr("data-state", "still");
				}


			};
		});
});
