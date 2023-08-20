function questCalculations(inputArray) {
    const numbers = inputArray.map(item => parseFloat(item.trim()));

    const [days, players, initialEnergy, waterPerDay, foodPerDay, ...energyLossPerDay] = numbers;

    let totalWater = days * players * waterPerDay;
    let totalFood = days * players * foodPerDay;
    let energy = initialEnergy;

    for (let currentDay = 1; currentDay <= days; currentDay++) {
        energy -= energyLossPerDay[currentDay - 1];

        if (energy <= 0) {
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            return;
        }

        if (currentDay % 2 === 0) {
            energy += 0.05 * energy;
            totalWater -= 0.3 * totalWater;
        }

        if (currentDay % 3 === 0) {
            totalFood -= totalFood / players;
            energy += 0.1 * energy;
        }
    }

    console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
}

// questCalculations();

function friendsList(input) {
    let friendsList = input[0].split(', ');
    let blacklistedCount = 0;
    let lostCount = 0;

    for (let i = 1; i < input.length; i++) {
        let commandParts = input[i].split(' ');

        if (commandParts[0] === 'Report') {
            break;
        }

        switch (commandParts[0]) {
            case 'Blacklist':
                let name = commandParts[1];
                let index = friendsList.indexOf(name);

                if (index === -1) {
                    console.log(`${name} was not found.`);
                } else {
                    friendsList[index] = 'Blacklisted';
                    console.log(`${name} was blacklisted.`);
                    blacklistedCount++;
                }
                break;

            case 'Error':
                let errorIndex = Number(commandParts[1]);

                if (errorIndex >= 0 && errorIndex < friendsList.length) {
                    let nameToCheck = friendsList[errorIndex];

                    if (nameToCheck !== 'Blacklisted' && nameToCheck !== 'Lost') {
                        friendsList[errorIndex] = 'Lost';
                        console.log(`${nameToCheck} was lost due to an error.`);
                        lostCount++;
                    }
                }
                break;

            case 'Change':
                let changeIndex = Number(commandParts[1]);
                let newName = commandParts[2];

                if (changeIndex >= 0 && changeIndex < friendsList.length) {
                    let currentName = friendsList[changeIndex];
                    friendsList[changeIndex] = newName;
                    console.log(`${currentName} changed his username to ${newName}.`);
                }
                break;
        }
    }

    console.log(`Blacklisted names: ${blacklistedCount}`);
    console.log(`Lost names: ${lostCount}`);
    console.log(friendsList.join(' '));
}

// processFriendsList(input);


function bookLibrary(input) {
    let shelf = input[0].split('&');

    for (let i = 1; i < input.length; i++) {
        let commands = input[i].split(' | ');

        if (commands[0] === 'Done') {
            break;
        }

        switch (commands[0]) {
            case 'Add Book':
                let bookName = commands[1];
                if (!shelf.includes(bookName)) {
                    shelf.unshift(bookName);
                }
                break;

            case 'Take Book':
                let bookToRemove = commands[1];
                let indexToRemove = shelf.indexOf(bookToRemove);
                if (indexToRemove !== -1) {
                    shelf.splice(indexToRemove, 1);
                }
                break;

            case 'Swap Books':
                let book1 = commands[1];
                let book2 = commands[2];
                let index1 = shelf.indexOf(book1);
                let index2 = shelf.indexOf(book2);

                if (index1 !== -1 && index2 !== -1) {
                    let temp = shelf[index1];
                    shelf[index1] = shelf[index2];
                    shelf[index2] = temp;
                }
                break;

            case 'Insert Book':
                let bookToInsert = commands[1];
                if (!shelf.includes(bookToInsert)) {
                    shelf.push(bookToInsert);
                }
                break;

            case 'Check Book':
                let indexToCheck = Number(commands[1]);
                if (indexToCheck >= 0 && indexToCheck < shelf.length) {
                    console.log(shelf[indexToCheck]);
                }
                break;
        }
    }

    console.log(shelf.join(', '));
}

// Example usage:
const input = [
    "War and Peace&Hamlet&Ulysses&Madame Bovary",
    "Check Book | 2",
    "Swap Books | Don Quixote | Ulysses",
    "Done"
];

bookLibrary(input);