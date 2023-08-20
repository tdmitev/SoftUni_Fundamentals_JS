function hours(input){

    let employee1 = Number(input.shift());
    let employee2 = Number(input.shift());
    let employee3 = Number(input.shift());
    let people = Number(input.shift());

    let answerPerHour = employee2+employee1+employee3;

    let neededHours = 0;

    while (people > 0){
        neededHours++;
        people-=answerPerHour;

        if (neededHours%4===0){
            neededHours++;
        }
    }

    console.log(neededHours);
}

// hours(['5','6','4','20'] );


function arrMod(arr){

    let arrOfNUm = arr.shift().split(' ');

    console.log(arrOfNUm);

}


arrMod(['23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end']);