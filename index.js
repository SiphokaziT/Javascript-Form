function myfunction() {

    let FirstName = document.getElementById('name');
    let LastName = document.getElementById('pass');
    let Email = document.getElementById('pass');
    let password = document.getElementById('pass');

    if (FirstName.value == "" || LastName.value == "") {
        alert("no blank values allowed");
        return false;
    }
    else {
        true;
    }
}