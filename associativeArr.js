function solve(data){

    let phoneBook = {};
    for (let el of data){
        let [name, number] = el.split(" ");
        if (phoneBook.hasOwnProperty(name)){
            delete phoneBook[name];
        }else{
            phoneBook[name] =number;
        }
        phoneBook[name] = number;
    }

    console.log(phoneBook);
    for(let key in phoneBook){
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

// solve(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);

//' Shift се използва за да премахне последният елемент от масив
//' ако го присвоим към променлива, тя ще приеме стойността на премахнатия последен елемент
function wordTracker(input){

    let map = new Map;
    let wordsToCheck = input.shift().split(' ');

    wordsToCheck.forEach(word => {
        map.set(word, 0);
    });

    for (const line of input) {
        for (const word of wordsToCheck) {
            if(line === word){
                let currentQuantity = map.get(line);
                map.set(line, currentQuantity+1);
            }
        }
    }

    let sortWords = Array.from(map.entries())
        .sort((a,b) => b[1]-a[1]);

    sortWords.forEach(element => {
        console.log(element.join(' - '));
    });
}

// wordTracker(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);

//' Split методът превръща стринг в масив, като разделя елементите по зададено нещо
//' като ' ' или ', ' и др.


function odd(input){

    let inputArr = input.split(' ').map(e=>e.toLowerCase());

    let wordsObj = {};

    for (const word of inputArr) {
        if (!wordsObj.hasOwnProperty(word)){
            wordsObj[word] = 0;
        }
        wordsObj[word]++;
    }

    let arrOfElements = Object.entries(wordsObj).filter(double => double[1] % 2 !== 0).sort((a,b) => b[1]-a[1]);

    let res = '';

    for (const arr of arrOfElements) {
        res+= ` ${arr[0]}`;
    }
    console.log(res);

}

// odd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');


function piccolo(input){

    let parking = new Set();

    for (const entry of input) {
        let [direction, carNumber] = entry.split(', ');

        if (direction === 'IN'){
            parking.add(carNumber);
        }else if(direction === 'OUT'){
            parking.delete(carNumber);
        }
    }

    if (parking.size === 0){
        console.log(`Parking Lot is Empty`);
    }else{
        let sortedCarNUm = Array.from(parking).sort((a,b) => a.localeCompare(b));

        sortedCarNUm.forEach(carNumber => console.log(carNumber));
    }

}

// piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA']);


function party(input){

    let vipListArr = [];
    let regularListArr = [];

    let command = input.shift();

    while (command!=='PARTY'){

        let firstChar = command[0];

        if (isNaN(firstChar)){
            regularListArr.push(command);
        }else{
            vipListArr.push(command);
        }
        command = input.shift();
    }

    let allGuests = vipListArr.concat(regularListArr);

    for (const guest of input) {
        if(allGuests.includes(guest)){
            allGuests.splice(allGuests.indexOf(guest),1);
        }
    }
    console.log(allGuests.length);
    allGuests.forEach(guest => console.log(guest));
}

// party(['7IK9Yo0h','9NoBUajQ','Ce8vwPmE','SVQXQCbc','tSzE5t0p','PARTY','9NoBUajQ','Ce8vwPmE','SVQXQCbc']);

//' Set() използваме, когато искаме да имаме само уникални елементи - неповтарящи се - трябват ни всички елементи, но само по един път да присъстват.
//' Map() когато ни е важен редът на вкарването. Ако получаваме някакви записи.
//' Object() Използваме в 90% от случаите. Най-лесен начин за записване на данни.

function compUsers(input){

    let companies ={};

    input.forEach(pair => {
       let [company, id] = pair.split(' -> ');

       if (!companies.hasOwnProperty(company)){
           companies[company]=[];
       }
       companies[company].push(id);
    });

    let sortedComp = Object.entries(companies);

    sortedComp.sort((a,b)=> a[0].localeCompare(b[0]));

    for (const element of sortedComp) {
        let companyName = element[0];
        console.log(companyName);
        let set = new Set(element[1]);
        for (const number of set) {
            console.log(`--${number}`)
        }
    }
}

// compUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345']);


function minorTask(input){

    let resources = {};

    for (let i = 0; i < input.length; i+=2) {
        let resource = input[i];
        let quantity = Number(input[i+1]);

        if(resources[resource]){
            resources[resource]+=quantity;
        }else {
            resources[resource]=quantity;
        }
    }
    for (const recource in resources) {
        console.log(`${recource} -> ${resources[recource]}`);
    }

}

minorTask(['Gold', '155', 'Silver', '10', 'Copper', '17']);