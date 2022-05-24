//1
 
function isMozartHere(str) {
    let lowerStr = str.toLowerCase().trim();
    return lowerStr.includes('mozart');
}

console.log( isMozartHere('Mozart') );

//2
 
function showUppercaseFirstLetter(str) {
    if (!str) return str;
 
    return str[0].toUpperCase() + str.slice(1);
}
 
console.log(showUppercaseFirstLetter("буква"));
 
//3
 
let books = [
    "ЯсноПонятно",
    "Маленький принц",
    "Марсианин",
    "Инферно",
];
 
console.log(books.length);
console.log(books.at(-1));
console.log(books.at(-2));


//4
 
let javaScriptTypes = [
    "number",
    "null",
    "undefined",
    "string"
];
 
javaScriptTypes[4] = 'bigInt';
javaScriptTypes[5] = 'boolean';
javaScriptTypes[6] = 'object';
 
console.log(javaScriptTypes);
 
//5
 
let bookStr = "Роман «1984» наряду с такими произведениями, как «Мы» Евгения Замятина (1920), «О дивный новый мир» Олдоса Хаксли (1932) и «451 градус по Фаренгейту» Рэя Брэдбери (1953) считается одним из образцов антиутопии.";
let strSearch = " 451 градус по Фаренгейту ";
let result = bookStr.includes("451 градус по Фаренгейту");
console.log(result);
 
//6

function randomNumber(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
 
console.log(randomNumber(1, 100));
 
//7
 
let strLearn = "Я учу JavaScript очень мало";
 
strLearn = strLearn.replace("мало", "много")
 
console.log(strLearn);

//8

function searchWord() {
    let firstWord = "Дорогой, а вдруг он потеряется?";
    if (firstWord.includes("вдруг")) {
        console.log("Слово найдено");
    } else  if (firstWord.includes("рассвет")) {
        console.log("Слово найдено");
    }
};

searchWord();



//9
 
let color = [
    "black",
    "yellow",
    "blue",
    "red",
]
 
color.shift();
color.unshift('purple');
color.pop();
color.push("white");
 
console.log(color);