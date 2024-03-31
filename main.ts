#! /usr/bin/env node
import inquirer from "inquirer"

let accountBalance = 15000;
let myPin = 90909;

let pinAns = await inquirer.prompt({
    name : "pin",
    type : "number",
    message : "Kindly enter your pin code."
});
if (pinAns.pin === myPin){
    console.log("Your pin is correct!")

    let myTask = await inquirer.prompt({
        name : "activity",
        type : "list",
        message : "Choose your task",
        choices : ["cashWithdrawl","balanceInquiry"]
    }) 
    if (myTask.activity === "cashWithdrawl") {
        let cash = await inquirer.prompt({
            name : "amount",
            type : "list",
            message : "Select your amount.",
            choices : ["1000","2000","5000","10000","Another"]
        })
        if(cash.amount == "Another"){
            let money = await inquirer.prompt({
                name : "amount1",
                type : "number",
                message : "Enter your amount."
            })
            if (money.amount1 <= accountBalance){
                accountBalance -= money.amount1;
                console.log(`Your remaining balance is: ${accountBalance} $`)
            }else{
                console.log("Sorry! you've insufficient balance.")
            }
        }else {
            accountBalance -= cash.amount;
            console.log(`Your remaining balance is: ${accountBalance} $`)
        }
    }else{
        console.log(`Your account balance is: ${accountBalance} $`)
    }
}else{
    console.log("Please enter a valid pin code.")
}
