console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

/*const number = new Array(7);

number[0] = 2;
number[1] = 22;
number[2] = 12;
number[3] = 17;
number[4] = 18;
number[5] = 39;
number[6] = 129;*/


let num = [2, 22, 12, 17, 18, 39, 129]; 

let arraySum = 0;
  function arraySum(arrOfNum){
      console.log("arrrOfNum", arrOfNum);
      arrOfNum.foreach((number, index) => sumOfValues += num, {
        sumOfValues = sumOfValues + number,
     };
      console.log("sumOfValues:", sumOfValues);
     return sumOfValues;
    } 
    
    console.log(arraySum(num));

      






//Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

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

console.log(book.info)

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");


let sentence = "The quick brown fox jumps over the lazy dog";

const myWord = "something";

const charArr = myWord.split('')

console.log(charArr);

let reversedWord = "";

for (let i = 0; i < charArr.length; i++){
  console.log(charArr[i], i);
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");





