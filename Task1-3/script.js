document
  .getElementById("convertButton")
  .addEventListener("click", convertTemperature);

function convertTemperature() {
  const tempInput = document.getElementById("tempInput").value;
  const fromUnit = document.getElementById("fromUnitSelect").value;
  const toUnit = document.getElementById("toUnitSelect").value;
  const resultDisplay = document.getElementById("resultDisplay");

  if (tempInput === "") {
    resultDisplay.textContent = "Please enter a temperature.";
    return;
  }

  const temp = parseFloat(tempInput);

  if (isNaN(temp)) {
    resultDisplay.textContent = "Please enter a valid number.";
    return;
  }

  let convertedTemp;

  // Convert from the selected input unit to the target unit
  if (fromUnit === "Celsius") {
    if (toUnit === "Fahrenheit") {
      convertedTemp = (temp * 9) / 5 + 32;
    } else if (toUnit === "Kelvin") {
      convertedTemp = temp + 273.15;
    } else {
      convertedTemp = temp; // Celsius to Celsius (no conversion)
    }
  } else if (fromUnit === "Fahrenheit") {
    if (toUnit === "Celsius") {
      convertedTemp = ((temp - 32) * 5) / 9;
    } else if (toUnit === "Kelvin") {
      convertedTemp = ((temp - 32) * 5) / 9 + 273.15;
    } else {
      convertedTemp = temp; // Fahrenheit to Fahrenheit (no conversion)
    }
  } else if (fromUnit === "Kelvin") {
    if (toUnit === "Celsius") {
      convertedTemp = temp - 273.15;
    } else if (toUnit === "Fahrenheit") {
      convertedTemp = ((temp - 273.15) * 9) / 5 + 32;
    } else {
      convertedTemp = temp; // Kelvin to Kelvin (no conversion)
    }
  }

  resultDisplay.textContent = `Converted Temperature: ${convertedTemp.toFixed(
    2
  )} °${toUnit}`;
}
