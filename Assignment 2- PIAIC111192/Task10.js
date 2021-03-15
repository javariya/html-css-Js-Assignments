var correctPass = "mypass456";

var userPass = prompt ("Enter your password: ");

if (userPass == "" ) {

    console.log ("Please enter your password.")
} else if (userPass == correctPass) {

    console.log("Correct! the password you entered matches the original password.");
} else if (userPass != correctPass) {

    console.log("Incorrect Password")
}