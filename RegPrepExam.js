function limitationGame(data){

//! Взимаме текста от масива(първият елемент).
//! Същото е като data[0], но променя масива за постоянно.
//! Shift (реже и запазва първия елемент на масива)л
    let text = data.shift();

    for (const line of data) {

        if(line === "Decode"){
            break;
        }

//! Split() взима масив и по зададен елемент го раздела на съставни части
//! Например ['kon | Todor | 12'] това вътре е 1 елемент стринг
//! Split(' | ') => ['kon', 'Todor', '12'] вътре вече са 3 елемента стринг
        let token = line.split("|");
        let action = token[0];

        switch (action){
            case 'Move':
                let n = Number(token[1]);

                for (let i = 0; i < n; i++) {
                    let firstLetter = text.substring(0, 1);
                    let anotherText = text.substring(1);
                    text = anotherText + firstLetter;
                }
                break;
            case 'Insert':
                let index = Number(token[1]);
                let value = token[2];
                text = text.substring(0, index) + value + text.substring(index);
                break;
            case 'ChangeAll':
                let substr = token[1];
                let repl = token[2];
                while (text.includes(substr)){
                  text = text.replace(substr, repl);
                }
                break;
        }
    }
    console.log(text);
}

// limitationGame(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']);


function password(input){

    let password = input.shift(); // Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr

    let commandParser = {
        'TakeOdd': (password) => { //! Това са функции
            //! Трите точки (...) разделят елементите на стринга. Разбиват съставните части
            return [...password].filter((symbol, index)=>{
                return index%2 !==0
            }).join('');
        },
        'Cut': (password,index,length) => {
              index = Number(index);
              length = Number(length);

              let substr = password.substring(index, length);

              return password.replace(substr, '');
        },
        'Substitute': (password, substring, substitute) => {
            if(password.includes(substring)) {
                return password.replace(new RegExp(substring, 'g'), substitute);
            }
                console.log("Nothing to replace");
                return password;
        }
    };

    input.forEach(line => {
        if(line!=='Done'){
            let [command, ...tokens] = line.split(' ');
            let oldPassword = password;

            password = commandParser[command](password, ...tokens);

            if (oldPassword!==password){
                console.log(password);
            }
        }
    });
    console.log(`Your password is: ${password}`);
}

password(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);