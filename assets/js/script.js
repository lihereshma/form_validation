// Function to clear error message
var error = document.querySelectorAll('.error');
window.onload = clearMessage();
function clearMessage() {
	var errorArray = Array.from(error);
	for(var i=0; i<errorArray.length; i++){
		error[i].innerHTML = "";
	}
}

// Regular Expressions for Form Validation
var first_name = /^([a-zA-Z])+$/;
var last_name = /^([a-zA-Z])+$/;
var email_id = /^(([\-\w]+)\.?)+@(([\-\w]+)\.?)+\.[a-zA-Z]{2,4}$/;
var password = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
var phone_number = /^[0-9]{10}$/;

var regArray = [first_name,last_name,email_id,password,phone_number];


// Input values from the user
var fName = document.getElementById('fName');
var lName = document.getElementById('lName');
var email = document.getElementById('email');
var userPassword = document.getElementById('password');
var confirmPassword = document.getElementById('confirmPassword');
var phoneNumber = document.getElementById('phoneNumber');

// Function to check form after submit
var exit = true;
document.getElementById('submit').addEventListener('click',function() {
	checkEmpty();
	if(exit){
	checkFirstName();
	checkLastName();
	checkEmailId();
	checkPassword();
	checkConfirmPassword();
	checkPhoneNumber();
  }
  exit = true;
});

// Function to check Empty Fields
var inputElement = document.querySelectorAll('input');
var inputArray = Array.from(inputElement);
function checkEmpty() {
	for(var i=0; i<inputArray.length-2; i++) {
		if(!inputArray[i].value){
			error[i].innerHTML = "Error: Empty fields not allowed";
			exit = false;
		}
	}
};

// Function to check first name
function checkFirstName() {
	//fName.nextElementSibling.innerHTML = "";
	if(!first_name.test(fName.value)) {
		fName.nextElementSibling.innerHTML = "Error: First Name should contain uppercase or lowercase characters";
	}
};

// Function to check last name
function checkLastName() {
	//lName.nextElementSibling.innerHTML = "";
	if(!last_name.test(lName.value)) {
		lName.nextElementSibling.innerHTML = "Error: Last Name should contain uppercase or lowercase characters";
	}
};

// Function to check email
function checkEmailId() {
	//email.nextElementSibling.innerHTML = "";
	if(!email_id.test(email.value)) {
		email.nextElementSibling.innerHTML = "Error: Invalid Email Id";
	}
};

// Function to check password
function checkPassword() {
	//userPassword.nextElementSibling.innerHTML = "";
	if(!password.test(userPassword.value)) {
		userPassword.nextElementSibling.innerHTML = "Error: Passwords must contain atleast 8 characters, including uppercase, lowercase letters, numbers and special characters";
	}
}

// Function to check re-entered password
function checkConfirmPassword() {
	//confirmPassword.nextElementSibling.innerHTML = "";
	if(userPassword.value != confirmPassword.value) {
		confirmPassword.nextElementSibling.innerHTML = "Error: Password did not matched";
	}
}

// Function to check Phone Number
function checkPhoneNumber() {
	//phoneNumber.nextElementSibling.innerHTML = "";
	if(!phone_number.test(phoneNumber.value)) {
		phoneNumber.nextElementSibling.innerHTML = "Error: Phone number should be of 10 digits, charachers are not allowed";	
	
	}
}

// Function to reset form after click on Reset button
document.getElementById('reset').addEventListener('click',function() {
	clearMessage();
});

// Function to clear after focus
inputArray.forEach(function(element) {
	element.addEventListener("focus", function(){
		this.nextElementSibling.innerHTML = "";
	})
});