function sum(num){

    let numToStr=num.toString();
    let sum=0;

    for (let i=0; i<numToStr.length; i++){
        let currDigit=Number(numToStr[i]);
        sum+=currDigit;
    }

    console.log(sum);
}

// sum(32423442);


function chToStr(par1, par2, par3){

    let str="";
   str=par1.toString() +par2.toString() +par3.toString();
   console.log(str);
}

// chToStr("s", "4", "v")

function townPop(town, population, area){

    console.log(`Town ${town.toString()} has population of ${Number(population)} and area ${Number(area)} square km."`);
}

function km(num){

    let res= num/1000;

    console.log(res.toFixed(2));
}

//km(798);

function pound(num){

    let res=num*1.31;

    console.log(res.toFixed(3));
}

function chToStr2(par1, par2, par3){

    let str="";
    str=par3.toString() + " "+par2.toString() +" "+par1.toString();
    console.log(str);
}

function lowCase(letter){
    if (letter===letter.toLowerCase()){
        console.log(`lower-case`);
    }else {
        console.log(`upper-case`);
    }
}

lowCase("T")



