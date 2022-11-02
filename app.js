console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

/*const numbers = [2, 22, 12, 17, 18, 39, 129]; 

let sumOfValues = 0;
function arraySum(arrOfNum) {
    arrOfNum.foreach((number) => sumOfValues += number);
    return sumOfValues;
} 
    
console.log(arraySum(numbers));*/

      






//Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const book = {
  title: "",
  author: "",
  numPagesRead: null,
  isRead: false,
};

book.title = "Blue's Clues"
book.numPages = 15;
book.readCount = 1;

book.info = function(){
  return `${this.title}, ${this.numPages} pages, read ${this.readCount}`
};

console.log(book.title);
console.log(book.numPages);

console.log(book.info());


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");


let sentence = "The quick brown fox jumps over the lazy dog";

let splitUpWords = sentence.split(" ");
let result = "";
for (let word of splitUpWords){
    let myReversedWord = " ";
    for (let i = word.length - 1; i >= 0; i--){
    myReversedWord += word[i];
    }
    result += (myReversedWord + "");
}
console.log(result.trim());

/*let myWord = "something";

let myReversedWord = "";
for (let i = myWord.length - 1; i >= 0; i--){
  myReversedWord += myWord[i];
}

const charArr = myWord.split('');

let myReversedString = "";

for (let i = charArr.length - 1; i >= 0; i--){
  myReversedString += charArr[i];
}*/



// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

let dataSplit = csvData.split("\n");
const headers = dataSplit[0].split(",");
console.log(headers);
const resultObjects = [];

for (i = 1; i < dataSplit.length; i++){
  const values = dataSplit[i].split(",");
  let obj = {};
  for (let j = 0; j < headers.length; j++){
      obj[headers[j]] - values[j];
  }
  console.log(obj);
  resultObjects.push(obj);
}

console.log(resultObjects);