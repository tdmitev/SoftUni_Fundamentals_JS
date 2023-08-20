function solve(){

    let arr = [1,2,3,4];
    arr[4]= arr[0]+arr[1];
    console.table(arr);
}
// solve();

function sumArrElements(data){

    let first = data[0];
    let lastIndex = data.length-1;
    let last = data[lastIndex];
    let sum = first+last;
    console.table(sum);

}

// sumArrElements([20, 30, 40]);

function days(day){

    let dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    let result= dayOfWeek-1;

    if(result){
        console.log(result);
    }else{
        console.log("Invalid day!");
    }

}
// days(15);

function days2(day){

    let dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    let currDay = dayOfWeek[day-1];
    let nextDay = dayOfWeek[day];
    let dayAfterTomorrow= dayOfWeek[day+1];

}

function smt(day){

    let arr = [10,20,30];
    arr.push(40);
    console.log(arr.length);

    console.table(arr);

}

// smt();

function arrays(input){

    let sumOldArr = 0;
    let sumNewArr= 0;
    let arrLength =input.length;

    for (let index=0; index<arrLength; index++){
        let currNum = Number(input[index]);

        sumOldArr+=currNum;

        if (currNum%2===0){
            currNum+=index;
        }else {
            currNum-=index;
        }

        input[index] = currNum;
        sumNewArr+=currNum;
    }

    console.log(input);
    console.log(sumOldArr);
    console.log(sumNewArr);

}

// arrays([5,15,23,56,35]);


function common(input1, input2){

    for (let index=0; index<input1.length; index++){

        let currElement = input1[index];
        if (input2.includes(currElement)){
            console.log(currElement);
        }
    }

    for (const currElement of input1){
        if (input2.includes(currElement)){
            console.log(currElement);
        }
    }

}

// common(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);


function merge(arr1, arr2){

    let resultArr = [];
    let arrLength = arr1.length;
    for (let index=0; index<arrLength; index++){

        if (index%2===0){
            resultArr[index]= Number(arr1[index]) + Number(arr2[index])
        }else{
            resultArr[index]=arr1[index]+arr2[index];
        }
    }
    console.log(resultArr.join(` - `));

}

// merge(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);

function arrw(arr){

    let sequence = 1;
    let maxSequence=0;
    let maxSequenceNum=0;

    for (let index=0; index<arr.length; index++){

        if(index!==0){
            let currNum = Number(arr[index]);
            let prevNum = Number(arr[index-1]);

            if (currNum === prevNum){
                sequence++;

                if(sequence>maxSequence){
                    maxSequence=sequence;
                    maxSequenceNum=currNum;
                }
            }else{
                sequence=1;
            }
        }
    }

    console.log(`${(maxSequenceNum + ' ').repeat(maxSequence)}`);
}

arrw([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);


function magicSum(arr, magNum){

    for (let i=0; i<arr.length; i++){

        if (i!==0){
            let prevNum = Number(arr[i-1]);

            for (let j=i; j<arr.length; j++){
                let currNum = Number(arr[j]);
                let sum = currNum+prevNum;
                if (sum===magNum){
                    console.log(`${prevNum} ${currNum}`);
                }
            }
        }

    }
}

// magicSum([1, 7, 6, 2, 19, 23], 8);


function AS(arr, rotations){

    for (let i=1; i<rotations; i++){

        let firstElement = arr.shift();
        arr.push(firstElement);

    }

    console.log(arr.join(` `));

}

// AS([51, 47, 32, 61, 21], 2);

function max(arr){

    let result = ``;
    let arrLength = arr.length;


    for (let i=1; i<=arrLength; i++){
        let isMax = true;
        let currNum = Number(arr[i-1]);

     for (let j=i; j<arrLength; j++){

         let nextNum = Number(arr[j]);

         if (nextNum>=currNum){
             isMax=false;
             break;
         }
        }
        if (isMax){
            result+=`${currNum} `;
        }
    }

    console.log(result);
}

// max([1, 4, 3, 2]);

function equalSum(arr){

    let length = arr.length;
    let leftSum = 0;
    let rightSum = 0;
    let isEqual = false;

        for (let currI=0; currI<length; currI++){
            for (let j=0; j<length; j++){
                if (j!==currI) {
                    let num = Number(arr[j]);
                    if (j < currI) {
                        leftSum += num;
                    } else if (j >= currI) {
                        rightSum += num;
                    }
                }

                if (currI===0){
                    leftSum=0;
                }else if(currI===length-1){
                    rightSum=0;
                }
            }

            if (leftSum===rightSum){
                console.log(currI);
                isEqual =true;
            }else{
                leftSum=0;
                rightSum=0;
            }
        }

        if (!isEqual){
            console.log(`no`);
        }
}

// equalSum([1,2,3,3]);

function sum2(arr) {

}



// sum2([2,1,1,2,3,3,2,2,2,1]);




