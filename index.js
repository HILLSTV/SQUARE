function calculate() {
	var textbox = document.getElementById("textbox");
	var result = document.getElementById("result");

	// evaluate the expression in the textbox
	try {
		result.innerText = eval(textbox.value*textbox.value);
	} catch (err) {
		result.innerText = "Invalid expression";
	}
}
