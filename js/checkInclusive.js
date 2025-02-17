//Submit Button
let btnCheck = document.getElementById("btnCheck");
let result = document.getElementById("result");

function checkInclusive(numberData, lowerBound, upperBound) {
  var lowerBound = 1;
  var upperBound = 10;

  var result =
    numberData >= lowerBound && numberData <= upperBound
      ? "Yes, It lies within the range"
      : "No, It does not lie within the range";
  alert(result);
}

btnCheck.addEventListener("click", () => {
  let numberData = parseInt(document.getElementById("numberData").value, 10);
  let lowerBound = parseInt(document.getElementById("lowerBound").value, 10);
  let upperBound = parseInt(document.getElementById("upperBound").value, 10);

  checkInclusive(numberData, lowerBound, upperBound);
  console.log("nice:");
});
