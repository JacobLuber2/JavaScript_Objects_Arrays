// Exercise 1 Section

function arraySum(numbers) {
let sum = 0;
numbers.forEach((number) => { return sum += number
}); 
console.log(sum);
}
arraySum([1, 2, 3, 4, 5])
// Exercise 2 Section
let book = {
}
book.title = "Atomic Habits"
book.pages = 320
book.readCount = 1;
book.info = () => {
console.log(book)
}
book.info();

// Exercise 3 Section
let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWords(sentence) {
let result = [];
let words = sentence.split(" ");
for (let index = 0; index < words.length; index++) {
let letters = words[index].split("");
letters.reverse();
let reversedWords = letters.join("")
result.push(reversedWords);
}
return result.join(" ")
}
console.log(reverseWords(sentence));
// exercise 4 section
let array = [];
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
function CSVConversion(data) {
let rows = data.split("\n");
let firstHeader = data.slice(0, 8);
console.log(rows);
for (let i = 1; i < rows.length; i++) {
let parsedRows = rows[i].split(",");
let names = parsedRows[0];
let ages = parsedRows[1];
console.log(names)
console.log(parsedRows)
let object = {
name: names,
age: ages,
};
array.push(object);
}
console.log(array);
}
CSVConversion(csvData);