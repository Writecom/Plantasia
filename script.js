/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon og 
dette er javascript er taget fra https://www.w3schools.com/howto/howto_js_mobile_navbar.asp*/
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }