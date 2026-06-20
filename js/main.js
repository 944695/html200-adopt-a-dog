"use strict";

let adoptionTotal = 0;

function showDogInfo(name, breed, fee) {
  alert(name + "\nBreed: " + breed + "\nAdoption Fee: $" + fee);
}

function addAdoptionTotal(event, name, breed, fee) {
  if (event) {
    event.preventDefault();
  }

  adoptionTotal += Number(fee) || 0;

  alert(
    name +
      " added to your adoption list.\nBreed: " +
      breed +
      "\nRunning Total: $" +
      adoptionTotal
  );
}

window.showDogInfo = showDogInfo;
window.addAdoptionTotal = addAdoptionTotal;
