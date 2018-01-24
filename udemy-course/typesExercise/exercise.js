"use strict";
// Exercise is to set all types on the code below
// let bankAccount = {
//     money: 2000,
//     deposit(value) {
//         this.money += value;
//     }
// };
//
// let myself = {
//     name: "Max",
//     bankAccount: bankAccount,
//     hobbies: ["Sports", "Cooking"]
// };
//
// myself.bankAccount.deposit(3000);
//
// console.log(myself);
//
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        // smarter to set type here as well
        this.money += value;
    }
};
var myself = {
    name: 'Max',
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Cooking']
};
myself.bankAccount.deposit(3000);
console.log(myself);
//# sourceMappingURL=exercise.js.map