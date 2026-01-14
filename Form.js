function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false; // Prevents the form from submitting
    }
    // If validation passes, the form will submit to the action URL
}