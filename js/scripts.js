function toggleTopnav() {
  var topnav = document.getElementById("topnav");
  var dropdownContent = document.getElementsByClassName("dropdown-content")[0];
  if (topnav.classList.contains("responsive")) {
    topnav.classList.remove("responsive");
    dropdownContent.classList.remove("responsive");
  } else {
    topnav.classList.add("responsive");
  }
}

function toggleDropdown() {
  var dropdownContent = document.getElementsByClassName("dropdown-content")[0];
  if (dropdownContent.classList.contains("responsive")) {
    dropdownContent.classList.remove("responsive");
  } else {
    dropdownContent.classList.add("responsive");
  }
}
