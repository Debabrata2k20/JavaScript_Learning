const name = "debab"
const repoCount = 22

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('debab-ps')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-5,2)
console.log(anotherString);

const newStringOne = "  debabrata   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://debab.com/debabrata%22sahu"
console.log(url.replace('%22','-'));

console.log(url.includes('papun'));

console.log(gameName.split('-'));
