var validUser = {
	username : "admin",
	password : "admin"
};

function doLogin(e) {

	if ($.username.value && $.password.value) {
		if (($.username.value === validUser.username) && ($.password.value === validUser.password)) {
			alert("Login effettuato con successo");
		} else {
			alert("Username e password non corrispondono");
		}
	} else {
		alert("Username o password mancanti");
	}

	$.username.blur();
	$.password.blur();
}

function doShowPassword() {
	var controller = Alloy.createController('forgotpassword',validUser);
	var win = controller.getView();
	win.open();
}

$.index.open();
