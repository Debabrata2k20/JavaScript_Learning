const indian_heros = ["sabarkar","godse","netaji bose"]
const odia_heros = ["gajapati","surenra sai","baxi jagabandhu"]
// indian_heros.push(odia_heros)
// console.log(indian_heros);
// console.log(indian_heros[3][0]);

const our_heros = indian_heros.concat(odia_heros)
console.log(our_heros);

const all_heros = [...indian_heros, ...odia_heros]
console.log(all_heros);


const Arr1 = [1,2,3,[4,5,6,],7,[6,7,8,9,[1,2,3,]]]
const Arr2 = Arr1.flat(Infinity)
console.log(Arr2);

console.log(Array.isArray("Debabrata"));
console.log(Array.from("Debabrata"));
console.log(Array.from({name: "Debabrata"}));
