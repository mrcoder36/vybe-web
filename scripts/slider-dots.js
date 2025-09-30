// Dot slider functionality - Shows 3 cards at a time
document.addEventListener("DOMContentLoaded", function () {
	const dots = document.querySelectorAll(".dot");
	const cards = document.querySelectorAll(".lt-card");
	let currentSlide = 0;

	// Initialize - show first set of cards
	showSlide(0);

	// Add click event to each dot
	dots.forEach((dot, index) => {
		dot.addEventListener("click", () => {
			showSlide(index);
		});
	});

	function showSlide(slideIndex) {
		// Hide all cards
		cards.forEach((card) => {
			card.classList.remove("active");
		});

		// Remove active class from all dots
		dots.forEach((dot) => {
			dot.classList.remove("active");
		});

		// Show cards that belong to the selected slide (3 cards per slide)
		cards.forEach((card) => {
			const cardSlide = parseInt(card.getAttribute("data-slide"));
			if (cardSlide === slideIndex) {
				card.classList.add("active");
			}
		});

		// Activate corresponding dot
		if (dots[slideIndex]) {
			dots[slideIndex].classList.add("active");
		}

		currentSlide = slideIndex;
	}

	// Optional: Auto-play functionality (uncomment if needed)
	/*
    setInterval(() => {
        const nextSlide = (currentSlide + 1) % dots.length;
        showSlide(nextSlide);
    }, 5000); // Change slide every 5 seconds
    */
});
