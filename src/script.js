// Flash Card Starter
(function () {
	"use strict";
	var cards = [
		{
			//0
			front: "How do I log text into the console?",
			back: "console.log()",
		},
		{
			//1
			front: "What does DOM stand for?",
			back: "Document Object Model",
		},
		{
			//2
			front: "Select a single element?",
			back: "document.querySelector",
		},
		{
			//3
			front: "What's the difference between undefined and not defined in JS?",
			back: "Undefined = declared, but not set. Not defined = never declared.",
		},
		{
			//4
			front: "What does delete do to an element of an array?",
			back: "Sets that element to undefined rather than removing it. (Use splice to remove it.)",
		},
		{
			//5
			front: "What is a memory leak?",
			back: "When a program keeps using memory without releasing it, even after it's no longer needed.",
		},
		{
			//6
			front: "What is a proxy server?",
			back: "A secondary server you can send your internet traffic through before sending it to the actual server where you send/receive data.",
		},
		{
			//7
			front: "How would I add a click listener?",
			back: "element.addEventListener ('click', handler)",
		},
	];

	var current = 0;
	var showingFront = true;
	var myStorage = window.localStorage;

	// card number counter
	var app = document.getElementById("app");
	var cNumber = document.createElement("div");
	cNumber.id = "counter";
	app.appendChild(cNumber);

	var card = document.createElement("div");
	card.id = "card";
	card.className = "card";
	app.appendChild(card);

	var controls = document.createElement("div");
	controls.className = "row controls";
	var nuBtn = document.createElement("button");
	var nextBtn = document.createElement("button");
	nuBtn.textContent = "By Geo .w.";
	nextBtn.textContent = "Next";
	controls.appendChild(nuBtn);
	controls.appendChild(nextBtn);
	app.appendChild(controls);

	function render() {
		var c = cards[current];
		card.textContent = showingFront ? c.front : c.back;
		myStorage.setItem("currentIndex", current);
		cNumber.textContent =
			"You're on number " + (current + 1) + " of " + cards.length;
		console.log(current); // tell me what card i have
	}
	// flips cards to back and front view
	card.addEventListener("click", function () {
		showingFront = !showingFront;
		render();
	});
	// advance to next card
	nextBtn.addEventListener("click", function () {
		current = (current + 1) % cards.length;
		showingFront = true;
		render();
	});

	window.addEventListener("load", function () {
		// don't need init render by itself if we're using localStorage
		let savedIndex = myStorage.getItem("currentIndex");

		if (savedIndex !== null) {
			current = parseInt(savedIndex); // sets the current card to last open
			showingFront = true;
			render();
		} else {
			// if there's nothing there, resets
			current = 0;
			showingFront = true;
			render();
		}
	});
})();
