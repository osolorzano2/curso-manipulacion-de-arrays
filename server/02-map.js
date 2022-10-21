const letters = ["a", "b", "c"];

const newArray = letters.map(item => item + "++");
// const newArray = [];
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     newArray.push(element + "++")
// }

console.log("Original", letters);
console.log("New", newArray);


const array = [{age: 1}, {age:2}]; 
const rta = array.map(item => {   
  item.name = 'My name';
  return item; 
})
console.log("array", array);
console.log("rta", rta);

const array2 = ['a', 'bb', 'ccc']; 
const rta2 = array2.map(item => item.length);
console.log("rta2", rta2);