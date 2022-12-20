// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var lname = document.contactForm.lname.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var cnic = document.contactForm.cnic.value;

    // Defining error variables with a default value
    var nameErr = lnameErr = emailErr = mobileErr = cnicErr = true;

    // Validate first name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // validate last name

    if (lname == "") {
        printError("lnameErr", "Please enter your Last name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(lname) === false) {
            printError("lnameErr", "Please enter a valid name");
        } else {
            printError("lnameErr", "");
            lnameErr = false;
        }
    }
    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate mobile number
    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    //validate cnic
    if (cnic == "") {
        printError("cnicErr", "Please enter your cnic");
    } else {
        var regex = /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/;
        if (regex.test(cnic) === false) {
            printError("cnicErr", "Please enter a valid 13 digit cnic");
        } else {
            printError("cnicErr", "");
            cnicErr = false;
        }
    }



    // Prevent the form from being submitted if there are any errors
    if ((nameErr || lnameErr || emailErr || mobileErr || cnicErr) == true) {
        return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
            " Name: " + name + "\n" +
            "Last Name: " + lname + "\n" +
            "Email Address: " + email + "\n" +
            "Mobile Number: " + mobile + "\n" +
            "Cnic Number: " + cnic + "\n"

        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};
