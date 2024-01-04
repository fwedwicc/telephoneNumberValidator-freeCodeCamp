function telephoneCheck(str) {
  const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

  return phoneRegex.test(str);
}

function validatePhoneNumber() {
  const userInput = document.getElementById("user-input").value;
  const resultDiv = document.getElementById("results-div");

  if (telephoneCheck(userInput)) {
    resultDiv.innerText = `Valid US number: ${userInput}`;
  } else if (userInput === '') {
    alert("Please provide a phone number");
  } else {
    resultDiv.innerText = `Invalid US number: ${userInput}`;
  }
}

function clearResults() {
  document.getElementById("user-input").value = "";
  document.getElementById("results-div").innerText = "";
}
