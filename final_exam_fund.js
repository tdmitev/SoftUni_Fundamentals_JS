function strGame(data) {
    let string = data[0];

    for (let i = 1; i < data.length; i++) {
        let [command, ...args] = data[i].split(' ');

        switch (command) {
            case 'Change':
                string = string.replace(new RegExp(args[0], 'g'), args[1]);
                console.log(string);
                break;
            case 'Includes':
                console.log(string.includes(args.join(' ')) ? "True" : "False");
                break;
            case 'End':
                console.log(string.endsWith(args.join(' ')) ? "True" : "False");
                break;
            case 'Uppercase':
                string = string.toUpperCase();
                console.log(string);
                break;
            case 'FindIndex':
                console.log(string.toUpperCase().indexOf(args[0].toUpperCase()));
                break;
            case 'Cut':
                let startIndex = Number(args[0]);
                let endIndex = startIndex + Number(args[1]);
                string = string.substring(startIndex, endIndex);
                console.log(string);
                break;
            case 'Done':
                return;
            default:
                console.log('Invalid Command');
        }
    }
}


// strGame(["*S0ftUni is the B3St Plac3**", "Change 2 o", "Includes best", "End is", "Uppercase", "FindIndex P", "Cut 3 7", "Done"]);


function bossRush(data) {
    const count = Number(data[0]);

    for (let i = 1; i <= count; i++) {
        let input = data[i];
        let parts = input.split(":");

        if (parts.length !== 2) {
            console.log("Access denied!");
            continue;
        }

        let boss = parts[0];
        let title = parts[1];

        let bossMatch = boss.match(/^\|([A-Z]{4,})\|$/);
        let titleMatch = title.match(/^#([A-Za-z]+\s[A-Za-z]+)#$/);

        if (bossMatch && titleMatch) {
            let bossName = bossMatch[1];
            let bossTitle = titleMatch[1];
            console.log(`${bossName}, The ${bossTitle}`);
            console.log(`>> Strength: ${bossName.length}`);
            console.log(`>> Armor: ${bossTitle.split(' ').join('').length+1}`);
        } else {
            console.log("Access denied!");
        }
    }
}

 // bossRush(['3', '|STEFAN|:#H1gh Overseer#', '|IVAN|:#Master detective#', '|KARL|: #Marketing lead#']);


function messageManager(data){

    let capacity = Number(data.shift());
    let users = {};

    while (true) {
        let line = data.shift();
        if (line === "Statistics") {
            break;
        }

        let parts = line.split('=');
        let command = parts[0];

        switch(command){
            case "Add":

                let username = parts[1];
                let sent = Number(parts[2]);
                let received = Number(parts[3]);

                if (!users[username]) {
                    users[username] = {
                        sent: sent,
                        received: received
                    };
                }
                break;
            case "Message":
                let sender = parts[1];
                let receiver = parts[2];

                if (users[sender] || users[receiver]) {
                    users[sender].sent++;
                    users[receiver].received++;

                    if (users[sender].sent + users[sender].received >= capacity) {
                        console.log(`${sender} reached the capacity!`);
                        delete users[sender];
                    }

                    if (users[receiver] && users[receiver].sent + users[receiver].received >= capacity) {
                        console.log(`${receiver} reached the capacity!`);
                        delete users[receiver];
                    }
                }
                break;

            case "Empty":
                let username1 = parts[1];
                if (username1 === "All") {
                    users = {};
                } else if (users[username1]) {
                    delete users[username1];
                }

                break;
        }
    }

    let sortedUsers = Object.entries(users)
        .sort((a, b) => (b[1].sent + b[1].received) + (a[1].sent + a[1].received) || a[0].localeCompare(b[0]));

    console.log(`Users count: ${sortedUsers.length}`);
    for (let user of sortedUsers) {
        console.log(`${user[0]} - ${user[1].sent + user[1].received}`);
    }
    }

messageManager(["12",

    "Add=Bonnie=3=5",

    "Add=Johny=4=4",

    "Empty=All",

    "Add=Bonnie=3=3",
    "Statistics"])