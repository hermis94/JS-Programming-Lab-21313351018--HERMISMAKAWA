// ================================================
// JAVASCRIPT PROGRAMMING LABORATORY
// VERIFICATION HEADER - DO NOT REMOVE OR MODIFY
// ================================================
// STUDENT FULL NAME: Hermis Makawa
// STUDENT ID NUMBER: 21313351018
// PROGRAM NUMBER: 40 - Advanced getters, setters, and computed properties
// EXECUTION DATE: [Will be auto-generated]
// SESSION TOKEN: [Will be auto-generated]
// ================================================

console.log("=".repeat(55));
console.log("JAVASCRIPT PROGRAMMING LABORATORY - VERIFIED EXECUTION");
console.log("STUDENT: Hermis Makawa");
console.log("ID: 21313351018");
console.log("PROGRAM: Advanced getters, setters, and computed properties");
console.log("EXECUTION DATE: " + new Date().toLocaleString());
console.log("SESSION TOKEN: " + Math.random().toString(36).substring(2, 15).toUpperCase());
console.log("VERIFICATION HASH: " + btoa("21313351018" + Date.now()).substring(0, 12));
console.log("=".repeat(55));
console.log("");
// ================================================
// PROGRAM CODE BEGINS BELOW
// ================================================


class BankAccount {
    #balance = 0;
    #transactions = [];
    #accountNumber;
    constructor(accountHolder, initialDeposit = 0) {
        this.accountHolder = accountHolder;
        this.#accountNumber = this.#generateAccountNumber();
        this.createdAt = new Date();
        if (initialDeposit > 0) this.deposit(initialDeposit);
    }
    #generateAccountNumber() {
        return 'ACC-' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    }
    get accountNumber() {
        return this.#accountNumber;
    }
    get balance() {
        return this.#balance;
    }
    get formattedBalance() {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.#balance);
    }
    get status() {
        if (this.#balance < 0) return 'Overdrawn';
        if (this.#balance === 0) return 'Empty';
        if (this.#balance < 100) return 'Low Balance';
        return 'Active';
    }
    get recentTransactions() {
        return this.#transactions.slice(-5).reverse();
    }
    get totalDeposits() {
        return this.#transactions.filter(t => t.type === 'deposit').reduce((sum, t) => sum + t.amount, 0);
    }
    get totalWithdrawals() {
        return this.#transactions.filter(t => t.type === 'withdrawal').reduce((sum, t) => sum + t.amount, 0);
    }
    deposit(amount) {
        if (!this.#validateAmount(amount)) return false;
        this.#balance += amount;
        this.#addTransaction('deposit', amount);
        console.log(`Deposited ${this.formatCurrency(amount)}. New balance: ${this.formattedBalance}`);
        return true;
    }
    withdraw(amount) {
        if (!this.#validateAmount(amount)) return false;
        if (this.#balance - amount < -500) {
            console.log('Withdrawal denied: Would exceed overdraft limit of $500');
            return false;
        }
        this.#balance -= amount;
        this.#addTransaction('withdrawal', amount);
        console.log(`Withdrew ${this.formatCurrency(amount)}. New balance: ${this.formattedBalance}`);
        if (this.#balance < 0) console.log('Warning: Account is overdrawn!');
        return true;
    }
    #validateAmount(amount) {
        if (typeof amount !== 'number' || isNaN(amount)) {
            console.log('Error: Amount must be a number');
            return false;
        }
        if (amount <= 0) {
            console.log('Error: Amount must be positive');
            return false;
        }
        if (amount > 10000) {
            console.log('Error: Amount exceeds transaction limit of $10,000');
            return false;
        }
        return true;
    }
    #addTransaction(type, amount) {
        this.#transactions.push({ type, amount, date: new Date(), balance: this.#balance });
    }
    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
    }
    get summary() {
        return {
            holder: this.accountHolder,
            number: this.accountNumber,
            balance: this.formattedBalance,
            status: this.status,
            created: this.createdAt.toLocaleDateString(),
            totalDeposits: this.formatCurrency(this.totalDeposits),
            totalWithdrawals: this.formatCurrency(this.totalWithdrawals),
            transactionCount: this.#transactions.length
        };
    }
}

console.log('--- Creating Bank Account ---');
const account = new BankAccount('Viktor Petrov', 500);
console.log('Account holder:', account.accountHolder);
console.log('Account number:', account.accountNumber);
console.log('Initial balance:', account.formattedBalance);
console.log('\n--- Making Transactions ---');
account.deposit(300);
account.withdraw(150);
account.withdraw(700);
account.deposit(1000);
console.log('\n--- Account Status ---');
console.log('Current balance:', account.formattedBalance);
console.log('Account status:', account.status);
console.log('\n--- Recent Transactions ---');
account.recentTransactions.forEach(t => {
    console.log(`${t.date.toLocaleTimeString()}: ${t.type} of ${account.formatCurrency(t.amount)}`);
});
console.log('\n--- Account Summary ---');
const summary = account.summary;
Object.entries(summary).forEach(([key, value]) => console.log(`${key}: ${value}`));
console.log('\n--- Testing validation ---');
account.deposit(-25);
account.deposit(12000);
account.withdraw('100');

class Temperature {
    #celsius = 0;
    constructor(value, unit = 'C') {
        this.setTemperature(value, unit);
    }
    setTemperature(value, unit) {
        if (typeof value !== 'number' || isNaN(value)) {
            throw new Error('Temperature must be a number');
        }
        switch (unit.toUpperCase()) {
            case 'C':
                this.#celsius = value;
                break;
            case 'F':
                this.#celsius = (value - 32) * 5/9;
                break;
            case 'K':
                this.#celsius = value - 273.15;
                break;
            default:
                throw new Error('Unknown temperature unit');
        }
    }
    get celsius() {
        return this.#celsius;
    }
    get fahrenheit() {
        return this.#celsius * 9/5 + 32;
    }
    get kelvin() {
        return this.#celsius + 273.15;
    }
    set celsius(value) {
        this.setTemperature(value, 'C');
    }
    set fahrenheit(value) {
        this.setTemperature(value, 'F');
    }
    set kelvin(value) {
        this.setTemperature(value, 'K');
    }
    get description() {
        if (this.#celsius < 0) return 'Freezing';
        if (this.#celsius < 10) return 'Cold';
        if (this.#celsius < 20) return 'Cool';
        if (this.#celsius < 30) return 'Warm';
        return 'Hot';
    }
    toString() {
        return `${this.#celsius.toFixed(1)}\u00B0C / ${this.fahrenheit.toFixed(1)}\u00B0F / ${this.kelvin.toFixed(1)}K (${this.description})`;
    }
}

console.log("\n--- Temperature Converter ---"); 
const temp = new Temperature(22, 'C');
console.log('Initial:', temp.toString());
temp.fahrenheit = 86;
console.log('After setting to 86\u00B0F:', temp.toString());
temp.kelvin = 295;
console.log('After setting to 295K:', temp.toString());
