const name = "tejas"

const repoCount =50

// console.log(name + repoCount + "Value");

console.log(`hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName =new String(`tejas-tj-com`) 
//it will print sttring as an object like
/*
string {`tejas-tj-com}
0:"t"
1:"e"
2:"j"
3:"a"
4:"s"
and so on.....
but not like array but in a key value form
*/
console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,5);
console.log(newString);

const anotherString = gameName.slice(-11,4);
console.log(anotherString);

const newStringOne = "       tejas  "
console.log(newStringOne); 
console.log(newStringOne.trim());

const url ="https://tejas.com/tejas%20mete"

console.log(url.replace('%20','-' ));

console.log(url.includes('tejass')); 

console.log(gameName.split('-'));







