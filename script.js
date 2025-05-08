
function showLoginPopup() {
  document.getElementById("loginPopup").style.display = "block";
}

function closeLoginPopup() {
  document.getElementById("loginPopup").style.display = "none";
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  if(username && password) {
    alert("Pieslēgšanās veiksmīga!");
    closeLoginPopup();
  } else {
    alert("Lūdzu ievadiet lietotājvārdu un paroli!");
  }
}

// When user clicks outside of popup, close it
window.onclick = function(event) {
  const popup = document.getElementById("loginPopup");
  if (event.target == popup) {
    popup.style.display = "none";
  }
}
