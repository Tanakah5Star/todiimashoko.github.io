let theme = localStorage.getItem("theme");

if (theme == null) {
	setTheme("light");
} else {
	setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
	themeDots[i].addEventListener("click", function () {
		let mode = this.dataset.mode;
		console.log("Option clicked:", mode);
		setTheme(mode);
	});
}

function setTheme(mode) {
	if (mode == "light") {
		document.getElementById("theme-style").href = "main.css";
	}

	if (mode == "blue") {
		document.getElementById("theme-style").href = "blueTheme.css";
	}

	if (mode == "green") {
		document.getElementById("theme-style").href = "greenTheme.css";
	}

	if (mode == "purple") {
		document.getElementById("theme-style").href = "purpleTheme.css";
	}

	localStorage.setItem("theme", mode);
}

const btn = document.querySelector('input[type="submit"]');
const inputs = document.querySelector("form");
btn.addEventListener("click", () => {
	Email.send({
		SecureToken: "35f09a9d-fc22-4c5c-bc42-221ad7aded4d",
		To: "mashokotanakah@gmail.com",
		From: inputs.elements["email"].value.trim(),
		Subject: inputs.elements["subject"].value.trim(),
		Body: `${inputs.elements["message"].value.trim()}<br>${inputs.elements[
			"name"
		].value.trim()}`,
	}).then(() => {
		if (
			document.getElementById("email").value.length == 0 ||
			document.getElementById("name").value.length == 0
		) {
			//alert("Please fill in all required Fields!");
		} else {
			alert("Thank You. I will be in touch soon.");
			setTimeout(function () {
				window.location.reload();
			}, 50);
		}
	});
});
