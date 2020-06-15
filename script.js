let form = document.querySelector("#parking-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let name = document.querySelector("#name")
let nameField = document.querySelector("#name-field")
  console.log(nameField.classList);
  if (name.value === '' || name.value == null) {
    alert("name is required")
    nameField.classList.add("input-invalid") 
  }
else {
      nameField.classList.remove("input-invalid")
      nameField.classList.add("input-valid")
    }

    //alert("field is required");

    console.log(nameField.value);
})

 //function validation() 

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let carField = document.querySelector("#car-field")
let carYear = document.querySelector("#car-year")
  console.log(carYear.classList);
  if (carYear.value === '' || carYear.value == null) {
    alert("car year is required")
    carField.classList.add("input-invalid") 
  }
else {
      carField.classList.remove("input-invalid")
      carField.classList.add("input-valid")
    }
    //(document.querySelector("input-field")
    // if (document.getElementById('name')value)
    //alert('field is required');

    //alert("field is required");



    console.log(carYear.value);
})

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let carField = document.querySelector("#car-field")
let carMake = document.querySelector("#car-make")
  console.log(carMake.classList);
  if (carMake.value === '' || carMake.value == null) {
    alert("car make is required")
    carField.classList.add("input-invalid") 
  }
else {
      carField.classList.remove("input-invalid")
      carField.classList.add("input-valid")
    }
    //(document.querySelector("input-field")
    // if (document.getElementById('name')value)
    //alert('field is required');

    //alert("field is required");



    console.log(carYear.value);
})

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let carField = document.querySelector("#car-field")
let carModel = document.querySelector("#car-model")
  console.log(carModel.classList);
  if (carModel.value === '' || carModel.value == null) {
    alert("car model is required")
    carField.classList.add("input-invalid") 
  }
else {
      carField.classList.remove("input-invalid")
      carField.classList.add("input-valid")
    }
    //(document.querySelector("input-field")
    // if (document.getElementById('name')value)
    //alert('field is required');

    //alert("field is required");



    console.log(carYear.value);
})

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let startDateField = document.querySelector("#start-date-field")
let startDate = document.querySelector("#start-date")
  console.log(startDate.classList);
  if (startDate.value === '' || startDate.value == null) {
    alert("start date is required")
    startDateField.classList.add("input-invalid") 
  }
else {
      startDateField.classList.remove("input-invalid")
      startDateField.classList.add("input-valid")
    }
    //(document.querySelector("input-field")
    // if (document.getElementById('name')value)
    //alert('field is required');

    //alert("field is required");



    console.log(carYear.value);
})

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let daysField = document.querySelector("#days-field")
let days = document.querySelector("#days")
  console.log(days.classList);
  if (days.value === '' || days.value == null) {
    alert("Number of days are required")
    daysField.classList.add("input-invalid") 
  }
else {
      daysField.classList.remove("input-invalid")
      daysField.classList.add("input-valid")
    }
    //(document.querySelector("input-field")
    // if (document.getElementById('name')value)
    //alert('field is required');

    //alert("field is required");



    console.log(daysField.value);
})

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let creditCardField = document.querySelector("#credit-card-field")
let creditCard = document.querySelector("#credit-card")
  console.log(creditCard.classList);
  if (creditCard.value === '' || creditCard.value == null) {
    alert("Credit card number required")
    creditCardField.classList.add("input-invalid") 
  }
else {
      creditCardField.classList.remove("input-invalid")
      creditCardField.classList.add("input-valid")
    }
    //(document.querySelector("input-field")
    // if (document.getElementById('name')value)
    //alert('field is required');

    //alert("field is required");



    console.log(daysField.value);
})

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let cvvField = document.querySelector("#cvv-field")
let cvv = document.querySelector("#cvv")
  console.log(cvv.classList);
  if (cvv.value === '' || cvv.value == null) {
    alert("CVV is required")
    cvvField.classList.add("input-invalid") 
  }
else {
      cvvField.classList.remove("input-invalid")
      cvvField.classList.add("input-valid")
    }
    //(document.querySelector("input-field")
    // if (document.getElementById('name')value)
    //alert('field is required');

    //alert("field is required");



    console.log(daysField.value);
})

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let expirationField = document.querySelector("#expiration-field")
let expiration = document.querySelector("#expiration")
  console.log(expiration.classList);
  if (expiration.value === '' || expiration.value == null) {
    alert("Expiration date is required")
    expirationField.classList.add("input-invalid") 
  }
else {
      expirationField.classList.remove("input-invalid")
      expirationField.classList.add("input-valid")
    }
    //(document.querySelector("input-field")
    // if (document.getElementById('name')value)
    //alert('field is required');

    //alert("field is required");



    console.log(daysField.value);
})