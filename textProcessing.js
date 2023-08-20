function revealWords(words, text){

    let wordsArr = words.split(', ')

    for(const word of wordsArr){
        let wordsStars = '*'.repeat(word.length);
        text = text.replace(wordsStars, word);
    }
    console.log(text);
}

// revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');

function hash(str){

    let input = str.split(' ');

    for (const word of input){
        if (word[0]==='#' && word.length>1){
           let wordArr = word.split('');
           wordArr.shift();
         let wordToPrint = '';
            for (const char of wordArr) {
                if (!isNaN(char)){
                    wordToPrint = '';
                    break;
                }else{
                    wordToPrint += char;
                }
            }
            if (wordToPrint.length > 0){
                console.log(wordToPrint);
            }
        }
    }

}

// hash('Nowadays everyone uses # to tag a #special word in #socialMedia');

function pptx(path){

    let lastSlashIndex = path.lastIndexOf('\\');
    let dot = path.lastIndexOf('.')
    let path2 = path.substring(lastSlashIndex+1, dot);
    let ext = path.substring(dot+1);
    console.log(`File name: ${path2}`);
    console.log(`File extension: ${ext}`);
}

// pptx('C:\\Projects\\Data-Structures\\LinkedList.cs' );

function substr(word, sentence){

    let sentenceArr = sentence.split(' ');

    let isNotFound = true;

    for (const element of sentenceArr){
        if (element.toLowerCase() === word.toLowerCase()){
           console.log(word);
           isNotFound = false;
           break;
        }
    }

    if(isNotFound){
        console.log(`${word} not found!`);
    }
}

// substr('javascript', 'JavaScript is the best programming language');


function replace(text){

    let output = text[0];
    let textLength = text.length;

    for (let i = 1; i < textLength; i++) {
        let currEl = text[i];
        let prevEl = text[i-1];

        if (currEl!==prevEl){
            output+=currEl;
        }
    }
    console.log(output);
}

// replace('aaaaabbbbbcdddeeeedssaa');


function pascal(input){

    let words = [];
    let index = 0;

    for (let i = 1; i < input.length; i++) {
        if(input.charCodeAt(i)>=65 && input.charCodeAt(i)<=90){
            words.push(input.substring(index, i));
            index = i;
        }
    }

    words.push(input.substring(index, input.length));
    console.log(words.join(', '));
}

// pascal('SplitMeIfYouCanHaHaYouCantOrYouCan');


function cut(str){

    let firstHalf = str.split('').slice(0, str.length/2).reverse().join('');

    let secondHalf = str.split('').slice(str.length/2).reverse().join('');

    console.log(firstHalf);
    console.log(secondHalf);
}

cut('tluciffiDsIsihTgnizamAoSsIsihT' );
