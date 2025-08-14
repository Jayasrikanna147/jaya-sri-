function login() {
  const userId = document.getElementById("userId").value;
  const password = document.getElementById("password").value;

  if (!userId || !password) {
    alert("Please enter both User ID and Password.");
    return;
  }
  localStorage.setItem("userId", userId);
  updateStatus();
}
function logout() {
  localStorage.removeItem("userId");
  updateStatus();
}
function updateStatus() {
  const statusElement = document.getElementById("status");
  const userId = localStorage.getItem("userId");

  if (userId) {
    statusElement.innerHTML = `✅ Logged in as <strong>${userId}</strong>`;
  } else {
    statusElement.textContent = "❌ Not logged in.";
  }
}
updateStatus();
