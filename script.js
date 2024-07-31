function svgDraw() {
	let ganesh = document.querySelectorAll("#ganesh path");

	ganesh.forEach(i => {
		i.style.fill = "none";
	});

	ganesh.forEach((item, i) => {
		let pathLength = ganesh.item(i).getTotalLength();
		item.setAttribute("id", `p${i}`);
		let itemId = document.getElementById(`p${i}`);
		itemId.style.strokeDasharray = pathLength;
		itemId.style.strokeDashoffset = pathLength;
		itemId.style.animation = "line-anim 5s ease-in-out";
	});

	setTimeout(() => {
		ganesh.forEach((item, i) => {
			let pathLength = ganesh.item(i).getTotalLength();
			item.removeAttribute("style");
		});
		// Start fade-out animation
		document.body.classList.add('fade-out');
		// Redirect to index.html after the fade-out animation completes
		setTimeout(() => {
			window.location.href = 'test2.html';
		}, 1000); // Match the duration of the fade-out animation
	}, 5000);
}

// Play audio on page load
window.onload = function () {
	svgDraw();
	var audio = document.getElementById("audio");
	audio.play();
};