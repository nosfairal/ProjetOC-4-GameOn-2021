function editNav() {
  var topNav = document.getElementById("myTopnav");
  if (topNav.className === "topnav") {
    topNav.className += " responsive";
  } else {
    topNav.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
function closeModal() {
  modalbg.style.display = "none";
}

// close form windows
const closeBtn = document.getElementsByClassName('close');
const closeBtnOk = document.getElementsByClassName('button-ok');

closeBtn[0].addEventListener('click', closeModal);
closeBtnOk[0].addEventListener('click', closeModal);

// Regex email 
function validateEmail (emailAdress)
{
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true; 
  } else {
    return false; 
  }
}


// Form listener
const formulaire = document.getElementById('formulaire');
const confirmMessage = document.querySelector('.confirm-message');
const cityButtons = document.querySelectorAll('input[type="radio"]');
let radioVerif = false

function validate(){
  let condition = true
  let verification = true
  const errorFirst = document.querySelector('#error-first');
  const errorLast = document.querySelector('#error-last');
  const errorEmail = document.querySelector('#error-email');
  const errorBirthdate = document.querySelector('#error-birthdate');
  const errorQuantity = document.querySelector('#error-quantity');
  const errorCity = document.querySelector('#error-city');
  const errorCondition = document.querySelector('#error-condition');
  const first = document.querySelector('#first');
  const last = document.querySelector('#last');
  const email = document.querySelector('#email');
  const birthdate = document.querySelector('#birthdate');
  const quantity = document.querySelector('#quantity');
  const location1 = document.querySelector('#location1');
  const location2 = document.querySelector('#location2');
  const location3 = document.querySelector('#location3');
  const location4 = document.querySelector('#location4');
  const location5 = document.querySelector('#location5');
  const location6 = document.querySelector('#location6');
  const checkbox1 = document.querySelector('#checkbox1');
  const checkbox2 = document.querySelector('#checkbox2');
  const conditions = document.getElementById("conditions");
  
  

  if (first.value == 0 || first.length <= 2 ) {
    first.style.border = "red 3px solid";
    errorFirst.style.display = "initial"
    errorFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    errorFirst.style.color = "red";
    errorFirst.style.fontSize = "small"
    verification = false
  } else {
    first.style.border = "green 3px solid"
    errorFirst.style.display = "none"
  }

  if (last.value == 0 || last.length <= 2 ) {
    last.style.border = "red 3px solid"
    errorLast.style.display = "initial"
    errorLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    errorLast.style.color = "red";
    errorLast.style.fontSize = "small"
    verification = false
  } else {
    last.style.border = "green 3px solid"
    errorLast.style.display = "none"
  }

  if (validateEmail(email.value) === false || email.value == 0) {
    email.style.border = "red 3px solid"
    errorEmail.style.display = "initial"
    errorEmail.innerHTML = "Veuillez entrer une adresse email valide.";
    errorEmail.style.color = "red";
    errorEmail.style.fontSize = "small"
    verification = false
  } else {
    email.style.border = "green 3px solid"
    errorEmail.style.display = "none"
  }

  if (birthdate.value == 0) {
    birthdate.style.border = "red 3px solid"
    errorBirthdate.style.display = "initial"
    errorBirthdate.innerHTML = "Vous devez entrer votre date de naissance.";
    errorBirthdate.style.color = "red";
    errorBirthdate.style.fontSize = "small"
    verification = false
  } else {
    birthdate.style.border = "green 3px solid"
    errorBirthdate.style.display = "none"
  }

  if (quantity.value === "" || typeof parseFloat(quantity.value) !== "number" ) {
    quantity.style.border = "red 3px solid"
    errorQuantity.style.display = "initial"
    errorQuantity.innerHTML = "Vous devez indiquer un nombre (0-99)";
    errorQuantity.style.color = "red";
    errorQuantity.style.fontSize = "small"
    verification = false
  } else {
    quantity.style.border = "green 3px solid"
    errorQuantity.style.display = "none"
  }

cityButtons.forEach(function(city){
  if (city.checked === true) {
    radioVerif = true
  }
})
  if (radioVerif === false) {
      errorCity.style.display = "initial";
      errorCity.innerHTML = "✘ Vous devez choisir une option";
      errorCity.style.color = "red";
      errorCity.style.fontSize = "small";
      verification = false;
  } else {
    errorCity.style.display = "none";
    
  }
  if (!checkbox1.checked) {
    errorCondition.style.display = "initial";
    errorCondition.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
    errorCondition.style.color = "red";
    errorCondition.style.fontSize = "small";
    verification = false
  } else {
    errorCondition.style.display = "none"
  }
  
  condition =  confirm('Voulez-vous envoyer le formulaire ?');
   if (condition === false || verification === false) {
    return verification
   } else  {
    formulaire.classList.add("hide");
    confirmMessage.classList.remove("hide");
    event.preventDefault();
   }
    
       
  
}




