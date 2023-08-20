
function minNum(num1, num2, num3){
    function sum(num1, num2){
        return num1+num2;
    }
    let res = sum(num1,num2);

    function substr(sum,num3){
        return sum-num3;
    }
    return substr(res, num3);

}

// console.log(minNum(5,3,2));

function range(char1, char2){

    let startChar = Math.min(char1.charCodeAt(), char2.charCodeAt());
    let endChar = Math.max(char1.charCodeAt(), char2.charCodeAt());

    let charArr = [];

    for (let currChar=startChar+1; currChar<endChar; currChar++){
       charArr.push(String.fromCharCode(currChar));
    }

   return charArr.join(' ');
}

// console.log(range('a', 'd'));


function polindrom(arr){

    for (let i=0; i<arr.length; i++){

         let numAsStr = arr[i].toString();
         let reversedNum = numAsStr.split('').reverse().join('');

         if (numAsStr===reversedNum){
             console.log(true);
         }else{
             console.log(false);
         }

    }

    return 0;
}

// console.log(polindrom([123,323,421,121]));

function passVal(password){

    let isValid = true;
    let isInvalidLength = password.length < 6 || password.length > 10;

    if (isInvalidLength){
        isValid = false;
        console.log(`Password must be between 6 and 10 characters`);
    }

    let isOnlyLettersAndDigits = true;
    let digitCounter = 0;

    for (let i=0; i<password.length; i++){

        let currCode = password.charCodeAt(i);
        let isNum = currCode >= 48 && currCode > 57;
        let isNotNum = currCode < 48 || currCode <= 57;
        let isNotSmallerLetter = currCode < 97 || currCode > 122;
        let isNotBigLetter = currCode < 65 || currCode > 90;

        if (isNum){
            digitCounter++;
        }

        if (isNotNum && isNotBigLetter && isNotSmallerLetter){
            isValid = false;
            isOnlyLettersAndDigits = false;
        }

        if (!(digitCounter>=2)){
            console.log(`Password must have at least 2 digits`);
        }
    }

    if(!isOnlyLettersAndDigits){
        console.log(`Password must consist only of letters and digits`);
    }

}

// console.log(passVal('logIn'));

function smallest(num1, num2, num3){

    function sum(num1, num2){
        return num1+num2;
    }

    function substract(sum, num3){
        return sum-num3;
    }

    return substract(sum(num1,num2), num3);
}

// console.log(smallest(23,6,10));

function OeSum(num){

    let number = num.toString();
    let sumOdd=0;
    let sumEven=0;

    for (let i=0; i<number.length; i++){

        let currNum = Number(number[i]);

        if (currNum%2===0){
            sumEven+=currNum;
        }else{
            sumOdd+=currNum;
        }
    }

    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;

}

// console.log(OeSum(1000435));


function paw(arr){


    for (let i=0; i<arr.length; i++){

        let normalNum = arr[i].toString();
        let reversedNun = normalNum.split('').reverse().join('');

        if (normalNum===reversedNun){
           console.log(true);
        }else{
            console.log(false);
        }
    }
}

// paw([123,323,421,121]);

function printMatrix(n) {
    
    // Check if input is a valid integer
    if (typeof n !== "number" || !Number.isInteger(n)) {
        console.log("Input must be an integer.");
        return;
    }

    // Fill matrix with input number
    for (let i = 0; i < n; i++) {
        let row = new Array(n).fill(n);
        console.log(row.join(' '));
    }
}

// printMatrix(5);

function matr(n){
    function rowGenerator(){
        let row = '';
        for (let j=1; j<=n; j++){
            row+=`${n}`;
        }
        return row;
    }

    for (let i=1; i<=n; i++){
        console.log(rowGenerator());
    }
}

// console.log(matr(3));


function demo(number){

    let sum =0;
    for (let i=1; i<=number/2; i++){
        if (number%i===0){
            sum+=i;
        }
    }

    if (sum === number && number!==1){
        console.log(`We have a perfect number!`);
    }else{
        console.log(`It's not so perfect.`);
    }
}

// demo(6)

function loadBar(number){

    let num = number/10;
    let dots = 10 - num;

    if (num===10 && num!==1){
        console.log(`${number}% Complete!`);
        console.log('['+'%'.repeat(num)+']');
    }else{
        console.log(`${number}% [${'%'.repeat(num)}${'.'.repeat(dots)}]`);
        console.log(`Still loading...`);
    }
}

// loadBar(100)


function factorialDiv(num1, num2){

    function fact(num){
      if (num===0){
          return 1;
      }else {
          return num*fact(num-1);
      }
    }

    let firstNUm = fact(num1);
    let secondNum = fact(num2);
    let res = firstNUm/secondNum;
    console.log(res.toFixed(2));
}

factorialDiv(4,4)
