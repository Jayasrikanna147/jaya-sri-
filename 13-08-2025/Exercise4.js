const charInput = document.getElementById("charInput");
const remaining = document.getElementById("remaining");
const maxLength = charInput.maxLength;

charInput.addEventListener("input", function () {
  const charsLeft = maxLength - charInput.value.length;
  remaining.textContent = `${charsLeft} characters remaining`;
});
