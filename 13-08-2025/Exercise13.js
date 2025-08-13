function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
  document.getElementById("email").addEventListener("blur", function () {
    const email = this.value.trim();
    const emailError = document.getElementById("emailError");
  
    if (email === "") {
      emailError.textContent = "Email is required";
    } else if (!validateEmail(email)) {
      emailError.textContent = "Invalid email format";
    } else {
      emailError.textContent = "";
    }
  });
  
  document.getElementById("password").addEventListener("blur", function () {
    const password = this.value.trim();
    const passwordError = document.getElementById("passwordError");
  
    if (password === "") {
      passwordError.textContent = "Password is required";
    } else {
      passwordError.textContent = "";
    }
  });
  
  document.getElementById("loginBtn").addEventListener("click", function () {
    document.getElementById("email").dispatchEvent(new Event("blur"));
    document.getElementById("password").dispatchEvent(new Event("blur"));
  
    if (
      document.getElementById("emailError").textContent === "" &&
      document.getElementById("passwordError").textContent === ""
    ) {
      console.log("Login Successful!");
    } else {
      console.log("Validation Failed.");
    }
  });
  