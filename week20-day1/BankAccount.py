class BankAccount:

    def __init__(self, account_number, balance=0):
        self.account_number = account_number
        self.balance = balance
        self.transactions = []

    def view_balance(self):
        self.transactions.append("View Balance")
        print(f"Balance for account {self.account_number}: {self.balance}")

    def deposit(self, amount):
        if amount <= 0:
            print("Invalid amount")
        elif amount < 100:
            print("Minimum deposit is 100")
        else:
            self.balance += amount
            self.transactions.append(f"Deposit: {amount}")
            print("Deposit Succcessful")

    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient Funds")
        else:
            self.balance -= amount
            self.transactions.append(f"Withdraw: {amount}")
            print("Withdraw Approved")
            return amount

    def view_transactions(self):
        print("-------------")
        print(f"Transactions of account {self.account_number}:")
        for transaction in self.transactions:
            print(' - ',transaction)
        


acc1 = BankAccount(1)
acc2 = BankAccount(2)

acc1.view_balance()
acc2.view_balance()

acc1.deposit(200)
acc2.deposit(300)

acc1.view_balance()
acc2.view_balance()

acc1.withdraw(350)
acc1.withdraw(100)

acc2.withdraw(50)

acc1.view_transactions()
acc2.view_transactions()
