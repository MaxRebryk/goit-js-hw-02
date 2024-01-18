"use strict";

function studyCheck (a, b){
    if (a > b){
        return console.log(`First number ${a} > second number ${b}`);
    }
    if (a < b){
        return console.log(`First number ${a} < second number ${b}`);
    }
    if (a === b){
        return console.log(`First number ${a} = second number ${b}`);

    }
    
}

function studyChecked (a, b){
    const bigger = a > b ? console.log("a>b") : console.log("a<b");
   
    
}

let consoleText
function checkPassword(password) {
    const correctPassword = password === "jqueryismyjam" ? console.log("Access granted") : console.log("Access denied, wrong password!");
    
  }

  function gate (bearNumbers){
    switch (bearNumbers){
        case bearNumbers = 5 :
            console.log(`Number is "5"`);
            break;

        case bearNumbers = 6 :
            console.log(`Number is "6`);
            break;
        
        default: 
            console.log(`Number is None`);
            break;
    }

  }

  gate(0);

  function getSubscriptionPrice(type) {
    switch (type){
      case ("starter"):
        console.log("0");
        break;
       case ("professional"):
            console.log("20");
            break;
        case ("organization"):
        console.log("50");
        break; 
      default:
        console.log("Invalid subscription type!");
        break;
    }
  }

  getSubscriptionPrice("premium");

  const alpha = 5
  const beta = 10

  console.log( alpha > 1 && alpha > beta );
  console.log(3 && 5);

  function isNumberInRange(start, end, number) {
    const a = (number >= start && number <= end);
    return a;
}

isNumberInRange(20,50,24);

function normalizeInput(input, to) {
    switch(to){
      case ("upper"):
      return (input.toUpperCase());
      break;
      default:
      return (input.toLowerCase());
      break;
    }
}

normalizeInput("This ISN'T SpaM", "lower");

function checkForName(fullName, firstName) {
    const name = fullName.toLowerCase();
    const copyname = firstName.toLowerCase();
    return (name.includes(copyname));
}

checkForName("Caty Stars", "Andromeda");

function checkFileExtension(fileName, ext) {
    const a = fileName.endsWith(ext) ?  ("File extension matches") :  ("File extension does not match");
    return a;
    }

function getFileName(file) {
    const get = file.indexOf(".");

    if (get === -1){
        return file;
    }

    else{
        return (file.slice(0, get));
    }
        
}

console.log(getFileName("app.js"));


function createFileName(name, ext) {
    const a = name.trim() + "." + ext;
    return a;
}

console.log(createFileName(" order ", "txt"));

function calculateTota(number) {
    let sum = 0;
    let i = 1;
    while (i <= number) {
      sum = sum + i;
      i++;
    }
    return sum;
  }
  
console.log(calculateTota(10));

function calculateTotal(number) {
    let sum = 0;

  for(let i = 1; i <= number; i++){
    sum += i;
    
  }

  return sum;
}
      

console.log(calculateTotal(3));

function calculateEvenTotal(number) {
    let sum = 0;
    for (let i = 2; i <= number; i++){
        if (i % 2 == 0){
        sum = sum + i;
        }
    }
    return sum;
}

console.log(calculateEvenTotal(18));

let number = 0;
function calculateNumber(start,end){
  for(let i = start; i <= end; i++){
    if(i % 5 == 0){
        return i;

    }
  }   
}

console.log(calculateNumber(17,25));

function findNumber(start, end, divisor) {
    for (let i = start; i<= end; i++){
      if (i % divisor == 0){
      return i;
    }
    }
    }

console.log(findNumber(6, 9, 4));