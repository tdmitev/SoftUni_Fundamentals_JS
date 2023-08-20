function solve(arr){

    if (arr.length === 1){
        return console.log(Number(arr.toString()), 3);
    }else{
        console.log(34);
    }
    let sum = Number(arr.shift()) + Number(arr.pop());
    console.log(sum);

}

// solve(['20']);

function solve2(arr){

    let myArr = [];

    for (let el of arr){
        el = Number(el);
        if(el<0){
            myArr.unshift(el);
        }else {
            myArr.push(el);
        }
    }

    console.log(myArr.join("\n"));

}

// solve2(4);


function solve3(n, k){

    let arr = [1];

    while (n>arr.length){
        let kArr = arr.splice(-k);
        let sum = 0;
        for (let i=0; i<kArr.length; i++){
            sum+=kArr[i];
        }
        arr.push(sum);
    }
}

// solve3(6,3);

function train(input){

    let wagons = input[0].split(' ').map(Number);
    let maxCapacity = Number(input[1]);

    for (let index=2; index<input.length; index++){

        let command = input[index].split(' ');

        if (command[0]==='Add'){
            wagons.push(Number(command[1]));
        }else{
            let passengers = Number(command[0]);

            for (let currWagon=0; currWagon<wagons.length; currWagon++){
                if (maxCapacity - wagons[currWagon] >= passengers){
                    wagons[currWagon]+=passengers;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));

}

// train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);

function distArr(arr){

    let uniqueEl = [];

    for (let number of arr){

        if(!uniqueEl.includes(number)){
            uniqueEl.push(number);
        }
    }
    console.log(uniqueEl.join(' '));
}

// distArr([1,1,4,4,4,4,2,2,3]);

function houseParty(input){

    let guestList = [];

    for (const person of input) {
        let details = person.split(' ');
        let personName = details[0];

        if (details.includes('not')){
            if (guestList.includes(personName)){
                let nameIndex = guestList.indexOf(personName);
                if (nameIndex!==-1){
                    guestList.splice(nameIndex, 1);
                }
            }else {
                console.log(`${personName} is not in the list!`);
            }
        }else {
            if (guestList.includes(personName)){
                console.log(`${personName} is already in the list!`)
            }else {
                guestList.push(personName);
            }
        }
    }
    guestList.forEach(person=>console.log(person));
}

// houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);

function sort(arr){

    let sortedArr = arr.sort((a,b) => b-a);
    let res =[];
    let sortedLength = sortedArr.length;

    for (let index=0; index<sortedLength/2; index++){
        let currNum = sortedArr.shift();
        let lastNum = sortedArr.pop();

        res.push(currNum);
        res.push(lastNum);
    }
    console.log(res.join(' '));
}

// sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])


function sort2way(input){

  // let sorted = input.sort((a,b)=> {
  //     if (a.length !== b.length) {
  //         return a.length - b.length;
  //     }
  //     return a.localeCompare(b);
  // });

    let sortedArr = input.sort((a,b)=>{
       return a.length - b.length || a.localeCompare(b);
    });

    console.log(sortedArr.join("\n"));

}

// sort2way(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);


function numberSearch(numberArr, commandsArr){

    let numbersToTake = commandsArr[0];
    let numDel = commandsArr[1];
    let searchedNum = commandsArr[2];

    let newArr = numberArr.slice(0, numbersToTake);
    newArr.splice(0, numDel);

    let numCount = newArr.filter(e=>e===searchedNum).length;

    console.log(`Number ${searchedNum} occurs ${numCount} times.`)

}

// numberSearch([5, 2, 3, 4, 1, 6], [5, 2, 3]);



function bomb(){

    

}


