(function(){
	document.getElementById("moviesCounterAll").innerHTML = moviesData.length;

	let moviesSeen = moviesData.filter((movie) => {
		return movie.seen === "T";
	});

	document.getElementById("moviesCounterSeen").innerHTML = moviesSeen.length;

	let moviesList = document.getElementById("moviesList");

	function updateSeen (seen, e) {
		document.getElementById("seen_" + e.currentTarget.id).textContent=", seen: " + seen;
		movieData = moviesData.map((movie) => {
			if (parseInt(e.currentTarget.id) === movie.id) {
				movie.seen = seen;
			}
			return movie;
		});
	}

	function markSeen (e) {
		if (e.currentTarget.checked) {
			updateSeen("T", e);
		} else {
			updateSeen("F", e);
		}

		let moviesSeen = moviesData.filter((movie) => {
			return movie.seen === "T";
		});

		document.getElementById("moviesCounterSeen").innerHTML = moviesSeen.length;
	}

	moviesData.forEach((movie) => {
		let li = document.createElement("li");

		let span = document.createElement("span");
		span.setAttribute("id", "movieItem_" + movie.id);

		let text = document.createTextNode("id: " + movie.id + ", titile: " + movie.title + ", year: " + movie.year + ", genre: " + movie.genre + ", summary: " + movie.summary);
		span.appendChild(text);

		let spanSeen = document.createElement("span");
		spanSeen.setAttribute("id", "seen_" + movie.id);

		let textSeen = document.createTextNode(", seen: " + movie.seen);
		spanSeen.appendChild(textSeen);

		let input = document.createElement("input");
		input.setAttribute("type", "checkbox");
		input.setAttribute("id", movie.id);
		if (movie.seen === "T") {
			input.setAttribute("checked", true);
		}else {
			input.setAttribute("notChecked", false);
		}
		input.addEventListener("click", markSeen);
		

		li.appendChild(span);
		li.appendChild(spanSeen);
		li.appendChild(input);

		moviesList.appendChild(li);
	});

	document.getElementById("moviesCountersContainer").setAttribute("class", "moviesCountersContainer");
	document.getElementById("moviesListContainer").setAttribute("class", "moviesListContainer");
	document.getElementById("moviesList").setAttribute("class", "moviesList");
})();





