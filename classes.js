
function objectDemo(namesArr){

     let obj = {};

     for (const name of namesArr){
        obj[name] = name.length;
     }

     for(const name in obj){
         console.log(`Name: ${name} -- Personal Number: ${obj[name]}`);
     }

}

// objectDemo(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);

function town(stringArr){
    
    for (const townInfo of stringArr) {
        let [townName, latitude, longitude] = townInfo.split(' | ');
        let currTown = {
            town: townName,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };
        console.log(currTown);
    }
}

// town(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);

function store(arr1, arr2){

    let localStoreStorage = {};

    for (let index = 0; index<arr1.length; index+=2){
        let product = arr1[index];
        let quantity = Number(arr1[index+1]);

        localStoreStorage[product] = quantity;
    }
    for (let index = 0; index<arr2.length; index+=2){
        let product = arr2[index];

        if(!localStoreStorage.hasOwnProperty(product)){
            localStoreStorage[product] = 0;
        }

        localStoreStorage[product]+=Number(arr2[index+1]);

    }

    for (const productKey in localStoreStorage) {
        console.log(`${productKey} -> ${localStoreStorage[productKey]}`);
    }

}

// store(['Chips', '5', 'CocaCola', '9', 'Bananas',  '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);


function movies(input){

    let movieList = [];

    input.forEach(line=> {
        if (line.includes('addMovie ')) {
            let name = line.split('addMovie ')[1];
            movieList.push({name});

        } else if (line.includes('directedBy')) {
            let [name, director] = line.split(' directedBy ');
            let movie = movieList.find(m => m.name === name);

            if (movie) {
                movie.director = director;

            }
        } else if (line.includes('onDate')) {
            let [name, date] = line.split(' onDate ');
            let movie = movieList.find(m => m.name === name);

            if (movie) {
                movie.date = date;
            }

    }
    });

    movieList.forEach(movie => {
        if (movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie));
        }
    });

}

// movies(['addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford', 'Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen']);


function sorty(input){

    let res = [];
    for (const line of input) {
        let [name, level, items] = line.split(' / ');

        let hero = {
            name: name,
            level: Number(level),
            items: items
        };

        res.push(hero);
    }
    res.sort((a,b) => a.level - b.level);

    for (const heroObj of res) {
        console.log(`Hero: ${heroObj.name}`);
        console.log(`level => ${heroObj.level}`);
        console.log(`items => ${heroObj.items}`);
    }

}

// sorty(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);


class Vehicle{

    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel;
        this.parts.quality = parts.engine*parts.power;
    }

    drive(fuelLoss){
        this.fuel-=fuelLoss;
    }
}

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('myType', 'myModel', parts, 200);
vehicle.drive(100);
//console.log(vehicle.fuel);
//console.log(vehicle.parts.quality);

class Car{
    constructor(model, color, owner) {
        this.model = model;
        this.color = color;
        this.owner = owner;
    }

    run(){
        console.log(this.model + " drive");
    }
}
let obj = {
    run: function(){
        console.log("run");
    }
}

let myCar = new Car("Skoda", null, "Todor");
let anotherCar = new Car("Mazda", "Orange", "Pesho")
console.log(obj);
