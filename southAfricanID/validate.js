function validateID(idNumber) {
	idNumber = idNumber.toString();
	if (idNumber.length < 13 || idNumber.length > 13) {
		console.log("Invalid ID Number");
		return false;
	} else {
		console.log("Valid ID");
	}
}
validateID(8803016519182);
