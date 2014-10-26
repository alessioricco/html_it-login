var args = arguments[0] || {};
var password = args.password;

$.password.text = "The password is " + password;

function doClose(){
	$.forgotpassword.close();
}
