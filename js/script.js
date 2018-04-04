/*eslint-env browser*/

function getWords(text) {
    "use strict";
    var words;
    // remove all characters
    text = text.replace(/\./g, "");
    text = text.replace(/:/g, "");
    text = text.replace(/,/g, "");
    text = text.toLowerCase();
    //convert text to an array
    words = text.split(" ");
    words = words.sort();
    return words;
}

function getUniqueWords(words){
    "use strict";
    var i, uniqueWords = [];
    uniqueWords.push(words[0]);
    for (i = 0; i < words.length; i += 1) {
        if (words[i] !== words[i - 1]) {
            uniqueWords.push(words[i]);
        }
    }
    return uniqueWords;
}

function main(){
    "use strict";
    var text, words, uniqueWords, i;
    text = "With innovative approaches and advanced methodologies, Vecta Corporation provides scalable business solutions to help companies achieve success through revenue increase, cost management, and user satisfaction. Our approach stems from the three most important business growth aspects: helping companies reach prospects, assist in converting prospects to customers, and assist in retaining those customers. This is accomplished through our interactive solutions and expertise in providing a memorable and positive user experience.";
    
    words = getWords(text);
    uniqueWords = getUniqueWords(words);
    window.console.log("the wordlist application\n\n");
    window.console.log("number of words: " + words.length);
    window.console.log("number of  unique words: " + uniqueWords.length);
    window.console.log("unique words: ");
     for (i = 0; i< words.length; i +=1 ){
         window.console.log(words[i] + "\n");
     }
    
}
main();