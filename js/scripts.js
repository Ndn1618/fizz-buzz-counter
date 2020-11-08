// Arrays
var threeAndFiveDividings = [];
var threeDividings = [];
var fiveDividings = [];

// Choosing elements
var elNumberForm = document.querySelector('.number-form');
var elNumberInput = elNumberForm.querySelector('.number-input');
var elThreeDividingsHeading = document.querySelector('.three-dividings');
var elThreeDividingsNumber = document.querySelector('.three-dividings-number');
var elThreeFiveDividingsHeading = document.querySelector('.three-five-dividings');
var elThreeFiveDividingsNumber = document.querySelector('.three-five-dividings-number');
var elFiveDividingsHeading = document.querySelector('.five-dividings');
var elFiveDividingsNumber = document.querySelector('.five-dividings-number');

var elThreeDividingsResult = document.querySelector('.three-dividings-result');
var elFiveDividingsResult = document.querySelector('.five-dividings-result');
var elThreeFiveDividingsResult = document.querySelector('.three-five-dividings-result');

elNumberForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  threeDividings = [];
  fiveDividings = [];
  threeAndFiveDividings = [];

  elThreeDividingsResult.textContent = threeDividings;
  elFiveDividingsResult.textContent = fiveDividings;
  elThreeFiveDividingsResult.textContent = threeAndFiveDividings;

  var number = parseFloat(elNumberInput.value.trim(), 10);

  if (isNaN(number) || number < 0) {
    alert('Qoidalarga rioya qiling: sonlarni harflarda yozmang hamda manfiy son kiritmang!');
  } else {
    for (var i = 1; i <= number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        threeAndFiveDividings.push(i);
      }
      if (i % 3 === 0) {
        threeDividings.push(i);
      }
      if (i % 5 === 0) {
        fiveDividings.push(i);
      }
    }

    elThreeDividingsResult.textContent = threeDividings.join(', ');
    elThreeDividingsHeading.appendChild(elThreeDividingsResult);
    elThreeDividingsNumber.textContent = threeDividings.length;

    elFiveDividingsResult.textContent = fiveDividings.join(', ');
    elFiveDividingsHeading.appendChild(elFiveDividingsResult);
    elFiveDividingsNumber.textContent = fiveDividings.length;

    elThreeFiveDividingsResult.textContent = threeAndFiveDividings.join(', ');
    elThreeFiveDividingsHeading.appendChild(elThreeFiveDividingsResult);
    elThreeFiveDividingsNumber.textContent = threeAndFiveDividings.length;
  }
});
