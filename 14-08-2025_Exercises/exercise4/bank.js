class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      return `Deposited $${amount}`;
    } else {
      return "Deposit amount must be positive.";
    }
  }

  withdraw(amount) {
    if (amount <= 0) {
      return "Withdrawal amount must be positive.";
    }

    if (amount > this.balance) {
      return "Insufficient balance.";
    }

    this.balance -= amount;
    return `Withdrew $${amount}`;
  }
}


const myAccount = new BankAccount("ACC12345", 1000);
document.getElementById('accountNumber').textContent = myAccount.accountNumber;
document.getElementById('balance').textContent = myAccount.balance;
function depositMoney() {
  const amount = parseFloat(document.getElementById('depositAmount').value);
  const message = myAccount.deposit(amount);
  updateUI(message);
}
function withdrawMoney() {
  const amount = parseFloat(document.getElementById('withdrawAmount').value);
  const message = myAccount.withdraw(amount);
  updateUI(message);
}
function updateUI(message) {
  document.getElementById('balance').textContent = myAccount.balance.toFixed(2);
  document.getElementById('message').textContent = message;
}
