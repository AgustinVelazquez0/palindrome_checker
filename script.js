document.getElementById("check-btn").addEventListener("click", function () {
  const input = document.getElementById("text-input").value.trim();
  const resultElement = document.getElementById("result");

  // Clear previous result
  resultElement.textContent = "";

  // Step 4: Check for empty input
  if (!input) {
    alert("Please input a value");
    return;
  }

  // Normalize the input: remove non-alphanumeric characters, convert to lowercase
  const normalized = input.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = normalized.split("").reverse().join("");

  // Step 5-19: Check if the normalized input is a palindrome
  if (normalized === reversed) {
    resultElement.textContent = `${input} is a palindrome`;
  } else {
    resultElement.textContent = `${input} is not a palindrome`;
  }
});
