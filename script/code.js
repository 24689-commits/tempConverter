function convertToCelsius() {
    let fahrenheit = document.getElementById("fahrenheit").value;
    
    if (fahrenheit === "") {
      document.getElementById("result").innerHTML = "Please enter a value for Fahrenheit.";
    } else {
      let celsius = (fahrenheit - 32) * (5 / 9);
      document.getElementById("result").innerHTML = fahrenheit + "°F is equal to " + celsius.toFixed(2) + "°C";
    }
  }
  
  function convertToFahrenheit() {
    let celsius = document.getElementById("celsius").value;
    
    if (celsius === "") {
      document.getElementById("result").innerHTML = "Please enter a value for Celsius.";
    } else {
      let fahrenheit = (celsius * (9 / 5)) + 32;
      document.getElementById("result").innerHTML = celsius + "°C is equal to " + fahrenheit.toFixed(2) + "°F";
    }
}

function clearInput() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("result").innerHTML = "";
}