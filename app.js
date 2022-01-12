function GEEKFORGEEKS() {
  var name = document.forms["RegForm"]["Name"];
  var email = document.forms["RegForm"]["EMail"];
  var phone = document.forms["RegForm"]["Telephone"];
  var age = document.forms["RegForm"]["Age"];
  var password = document.forms["RegForm"]["Password"];
  var comment = document.forms["RegForm"]["Comment"];

  if (name.value.length < 3) {
    window.alert("Your Name Is Not Valid");
    name.focus();
    return false;
  }
  if (name.value.length > 10) {
    window.alert("Your Name Is Not Valid");
    name.focus();
    return false;
  }
  if (email.value == "") {
    window.alert("Your email Is Not Valid");
    email.focus();
    return false;
  }
  if (comment.value.legth <= 20) {
    window.alert("Your text Is Not Valid");
    email.focus();
    return false;
  }
  if (password.value == "") {
    window.alert("Please enter your password");
    password.focus();
    return false;
  }
  if (age.value <= 18) {
    window.alert("Your Age Is Not Valid");
    password.focus();
    return false;
  }
  if (phone.value.length != "9") {
    window.alert("Your phone number Is Not Valid");
    phone.focus();
    return false;
  }
  if (!phone.value.startWith("777")) {
    window.alert("Your phone number Is Not Valid");
    phone.focus();
    return false;
  }
  return true;
}
