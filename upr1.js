function age(age){

    let result = "";

    if (age>=0){
       if(age<=2){
            result = "baby";
       }else if(age<=13){
           result = "child";
       }else if(age<=19){
           result = "teenager";
       }else if(age<=65){
           result = "adult";
       }else if(age>65){
           result = "elder";
       }
    }else{
        result= "out of bounds";
    }


    console.log(result);
}

// age(-10)

function number(num1, prescription){

    if (prescription>15){
        prescription=15;
    }
    let result = parseFloat(num1.toFixed(prescription));
    console.log(result);
}

// number(3.14000, 4 )

function division(num){

    let result;

    if(num%10===0){
        result=10;
    }else if(num%7===0){
        result=7;
    }else if(num%6===0){
        result=6;
    }else if(num%3===0){
        result=3;
    }else if(num%2===0){
        result=2;
    }

    if (result === undefined){
        console.log("Not divisible");
    }else {
        console.log(`The number is divisible by ${result}`);
    }
}

// division(10);

function num(start, end){
    let sum=0;
    let numRow= "";

    for (let number=start; number<=end; number++){
        sum+=number;
        numRow+=` ${number}`;
    }

    console.log(`${numRow}`);
    console.log(`Sum: ${sum}`);
}

 // num(5,10);

function mulTable(num){

    for(let i=0; i<=10; i++){
        console.log(`${num} * ${i} = ${num*i}`);
    }
}

// mulTable(5);

function triangle(num){

    for(let rows=1; rows<=num; rows++){
        let res = "";
        for(let cols=1; cols<=rows; cols++){
            res+= rows + " ";
        }
        console.log(res);
    }
}

// triangle(4);

function vacation(groupOfPeople, typeGroup, dayOfWeek){

    let price = 0;

    switch (typeGroup){
        case "Students":
            if(dayOfWeek === "Friday"){
                price=8.45*groupOfPeople;
            }else if(dayOfWeek === "Saturday"){
                price=9.80*groupOfPeople;
            }else if(dayOfWeek === "Sunday"){
                price=10.46*groupOfPeople;
            }

            if (groupOfPeople>=30){
                console.log(`Total price: ${(price-price*(15/100)).toFixed(2)}`);
            }else {
                console.log(`Total price: ${price.toFixed(2)}`);
            }
            break;

        case "Business":
            if (groupOfPeople>=100){
                groupOfPeople-=10;
            }
            if(dayOfWeek === "Friday"){
                price=10.90*groupOfPeople;
            }else if(dayOfWeek === "Saturday"){
                price=15.60*groupOfPeople;
            }else if(dayOfWeek === "Sunday"){
                price=16*groupOfPeople;
            }
                console.log(`Total price: ${price.toFixed(2)}`);
            break;

        case "Regular":
            if(dayOfWeek === "Friday"){
                price=15*groupOfPeople;
            }else if(dayOfWeek === "Saturday"){
                price=20*groupOfPeople;
            }else if(dayOfWeek === "Sunday"){
                price=22.50*groupOfPeople;
            }

            if (groupOfPeople>=10 && groupOfPeople<=20){
                console.log(`Total price: ${(price-price*(5/100)).toFixed(2)}`);
            }else {
                console.log(`Total price: ${price.toFixed(2)}`);
            }
            break;
    }

}

// vacation(40, "Regular", "Saturday")

function gapYear(year){

    if(year%4===0 && !(year%100===0) || year%400===0){
        console.log("yes");
    }else {
        console.log("no");
    }
}

// gapYear(2003)

