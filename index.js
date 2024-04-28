// index.ts
import inquirer from 'inquirer';
import { withdrawCash, checkBalance } from './atm.js';
async function main() {
    // Prompt user for user id and pin
    const credentials = await inquirer.prompt([
        {
            type: 'input',
            name: 'userId',
            message: 'Enter your user ID:',
        },
        {
            type: 'password',
            name: 'pin',
            message: 'Enter your PIN:',
            mask: '*',
        },
    ]);
    // Perform action based on user input
    const action = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'Choose an option:',
        choices: ['Cash Withdrawal', 'Balance Inquiry'],
    });
    // Perform selected action
    if (action.action === 'Cash Withdrawal') {
        const amountResponse = await inquirer.prompt({
            type: 'input',
            name: 'amount',
            message: 'Enter the amount to withdraw:',
            validate: (value) => {
                const valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a valid number';
            },
            filter: (value) => parseFloat(value),
        });
        const amount = amountResponse.amount;
        withdrawCash(credentials.userId, credentials.pin, amount);
    }
    else if (action.action === 'Balance Inquiry') {
        checkBalance(credentials.userId, credentials.pin);
    }
}
main();
