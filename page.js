function validate() {
    var firstname = document.forms["myForm"]["fname"].value;
    var lastname = document.forms["myForm"]["lname"].value;
    var letters = /^[A-Za-z]+$/;
    
    if (firstname == " ") {
        document.getElementById("error").innerHTML =" Give your first name";
        document.myForm.fname.style.borderColor = "red";
        return false;
    } else if (!firstname.match(letters)){
        document.getElementById("error").innerHTML = "First name should contain only Alphabets";
        document.myForm.fname.style.borderColor = "red";
        return false;
    }
}


