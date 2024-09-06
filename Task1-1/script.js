document.getElementById("sampleButton").addEventListener("click", function () {
  document.getElementById("inputText").value =
    "This is a sample text for testing purposes.";
});

document.getElementById("pasteButton").addEventListener("click", function () {
  navigator.clipboard.readText().then((text) => {
    document.getElementById("inputText").value = text;
  });
});

document.getElementById("bypassButton").addEventListener("click", function () {
  const inputText = document.getElementById("inputText").value;
  const outputText = jumbleWords(inputText);
  document.getElementById("outputText").innerText = outputText;
});

document
  .getElementById("copyOutputButton")
  .addEventListener("click", function () {
    const outputText = document.getElementById("outputText").innerText;
    navigator.clipboard.writeText(outputText).then(() => {
      alert("Output copied to clipboard!");
    });
  });

function jumbleWords(text) {
  return text
    .split(" ")
    .sort(() => Math.random() - 0.5)
    .join(" ");
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form Submitted");
    document.getElementById("contactForm").reset();
  });
