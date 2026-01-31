class BankAccount {
  constructor(accountNumber, accountHolder, balance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient balance");
    }
  }

  display() {
    console.log("Account Number:", this.accountNumber);
    console.log("Account Holder:", this.accountHolder);
    console.log("Balance:", this.balance);
  }
}

const account = new BankAccount(151, "user", 5000);

account.deposit(7000);
account.withdraw(600);
account.display();
