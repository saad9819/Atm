// atm.ts
const validUserId = '123456';
const validPin = '7890';
let balance = 1000;
export function withdrawCash(userId, pin, amount) {
    if (userId === validUserId && pin === validPin) {
        if (amount <= balance) {
            balance -= amount;
            console.log(`Withdrawal successful. Remaining balance: ${balance}`);
        }
        else {
            console.log('Insufficient funds');
        }
    }
    else {
        console.log('Invalid user ID or PIN');
    }
}
export function checkBalance(userId, pin) {
    if (userId === validUserId && pin === validPin) {
        console.log(`Your balance is: ${balance}`);
    }
    else {
        console.log('Invalid user ID or PIN');
    }
}
