//////////// Array Method //////////////
//LAB 5.1

// let fruits = ['Apples', 'Pear', 'Orange'];
// // push a new value into the "copy"
// let shoppingCart = fruits;
// shoppingCart.push('Banana');
// // what's in fruits?
// console.log(fruits.length); //4 because Banana is pushed to fuits.

//LAB 5.2
// let arr = ["a", "b"];
// const pp = function() {
//     alert(this);
//     };
// arr.push(pp);

// arr[2](); // a,b,function() {alert(this);} because function is called and this is entire arr.

// console.log(arr);

//LAB 5.3
// const animals = ['Dog', 'Cat', 'Rat']; //crete new array
// animals.push('Fish'); //add ending index
// animals.unshift('Horse'); //add firstly index
// // animals.push('Giraffe','Snake'); //add 2 value into ending index
// animals.splice(animals.length,0,'Giraffe','Snake'); //add 2 value into ending index
// animals.shift(); //remove firstly index
// animals.pop(); //remove lastly index
// animals.shift(); //remove firstly index

// console.log(animals);

// Solution from P'Earth //

//Lab 5.5
// const colne = arr => arr.slice();

//Lab 5.6
// const a = [1,5,7,11];
// const b = [2,3,6];
// const c = a.concat(b);
// console.log(c);

//LAB 5.7
// let fish = ['angel', 'clown', 'mandarin', 'sturgeon'];
// fish.splice(0);

//LAB 5.8
// const person = ['John', 'Jay', 'Jim', 'Jame'];
// person.splice(1,1,'Jack','Joe');

//LAB 5.9
// const sports = ['football', 'volleyball', 'tennis', 'basketball', 'judo'];
// const subSports = sports.slice(1,4);

//LAB 5.10
// const cars = ['volvo', 'toyota', 'honda', 'ford'];
// cars.splice(3,0,'mazda','bmw','nissan');

//LAB 5.11
// const array = []
// let sum = 0;
// array.forEach(item => (sum += item));

// console.log(sum);


//LAB 5.12

// names.forEach((item,index) => console.log(`${index+1}. ${item}`))


// Searching in array //

// const nums = [1, 3, 8, 11, -2];
// const even = nums.filter(function (item, index, arr) {
//     if(item % 2 === 0) {
//         return true;
//     }
// });

// LAB Array Method //

// LAB 5.13
// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// console.log(beasts.indexOf('bison')); // 1 because it found bison at index 2
// console.log(beasts.indexOf('bison', 2)); // 4 because it start by index 2 and found second bison at index 4
// console.log(beasts.indexOf('giraffe')); // -1 because it cannot find 'giraffe'

// LAB 5.14
// const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// expexted result: [0, 2, 4]
// console.log(alphabets.indexOf('a'));
// console.log(alphabets.indexOf('a',alphabets.indexOf('a')+1));
// console.log(alphabets.indexOf('a',alphabets.indexOf('a',alphabets.indexOf('a')+1)+1));

// LAB 5.15
// console.log([1, 2, 3].includes(2)); // true
// console.log([1, 2, 3].includes(4)); // false
// console.log([1, 2, 3].includes(3, 3)); // false
// console.log([1, 2, 3].includes(3, -1)); // true
// console.log([1, 2, NaN].includes(NaN)); // true
// console.log(['1', '2', '3'].includes(3)); // false

// LAB 5.16
// const nums = [7, 9, -5, -1, 0, 3];
// expexted result: -5

// console.log(nums.find ((item,index, array) => item < 0));
// console.log(nums.find (function (item, index, array){
//     if(item < 0) return true;
// }));

// LAB 5.17
// const inventory = [
//     { name: 'apples', quantity: 2 },
//     { name: 'bananas', quantity: 0 },
//     { name: 'cherries', quantity: 5 }
//   ];
//   // expected result: { name: 'cherries', quantity: 5 }

//  const result= inventory.find (function (item, index, array){
//       if(item.name==='cherries') return true;
//   })
// console.log(result);

// LAB 5.18
// const tasks = [
//     { id: 1, name: 'Fishing' },
//     { id: 2, name: 'Shopping' },
//     { id: 3, name: 'Swimming' }
//   ];
  // expexted result: 1

//   const result = tasks.findIndex(item => item.id === 2);
// const result =[];
// tasks.forEach(function (item, index, array){
//     if(item.id === 2) result.push(index);
// })
  
//   console.log(result);

// // LAB 5.19
// const tasks = [
//     { id: 1, name: 'Fishing' },
//     { id: 2, name: 'Shopping' },
//     { id: 3, name: 'Swimming' }
//   ];

//   function updateTask(id, newName) {
//   tasks.forEach(function (item, index, array){
//       if (item.id === id) tasks[id-1].name = newName;
//   })
//   }

// updateTask(2,'Travelling');

// console.log(tasks);

// Solution from P'Earth //

// LAB 5.14 
// const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// expexted result: [0, 2, 4]

// sol 1
// const indexes = [];
// for (let i=0; i<alphabets.length; i++){
//     if(alphabets[i] === 'a') indexes.push(i);
// }

// sol 2
// const indexes = [];

// let idx = alphabets.indexOf('a');

// while(idx !== -1){
//     indexes.push(idx);
//     idx = alphabeys.indexOf('a',idx+1); 
// }

// LAB 5.16
// const nums = [7, 9, -5, -1, 0, 3];
// const fisrtNegativeNum = nums.find(item => item<0);

// LAB 5.17
// const inventory = [
//     { name: 'apples', quantity: 2 },
//     { name: 'bananas', quantity: 0 },
//     { name: 'cherries', quantity: 5 }
//   ];
  // expected result: { name: 'cherries', quantity: 5 }

//   const result = inventory.find(item => item.name === 'cherries');

// LAB 5.18
// const tasks = [
//     { id: 1, name: 'Fishing' },
//     { id: 2, name: 'Shopping' },
//     { id: 3, name: 'Swimming' }
//   ];
  // expexted result: 1

// const idx = tasks.findIndex(item => item.id === 2);


// LAB 5.19
// const tasks = [
//     { id: 1, name: 'Fishing' },
//     { id: 2, name: 'Shopping' },
//     { id: 3, name: 'Swimming' }
//   ];

// function updateTask (id, newName){
//     const idx = tasks.findIndex (item => item.id === id); //not found,it will be turned -1 = true
//     if(idx !== -1) tasks[idx].name = newName;

// }

// updateTask(10,'Playing');
// console.log(tasks);

// LAB 5.20
// const tasks = [
//     { id: 1, name: 'Fishing' },
//     { id: 2, name: 'Shopping' },
//     { id: 3, name: 'Swimming' }
//   ];

  
//   function deleteTask(id){
//       const idx = task.findIndex(item => item.id === id)
//       if(idx !== -1) tasks.splice(idx,1);
//   }


// LAB 23.1
// const array = [1, 2, 30, 400];

// let result = array.map(function (item, index, array) {
//         return item*2;
//     });

// console.log(result);

// LAB 23.2
// const array = [1, 2, 3, 4];
// let result = array.map(function (item, index, array){
//         return ''+item;
// });

// console.log(result);

// LAB 23.3
// const array = [1, '1', 2, {}];
// // result: ["number", "string", "number", "object"]

// console.log(array.map(item => typeof(item)));
// console.log(array.map(item => typeof item));

// LAB 23.4
// const array = ['apple', 'banana', 'orange'];
// // result: ["APPLE", "BANANA", "ORANGE"]
// console.log(array.map(item => item.toUpperCase()));

// LAB 23.5
// const array = [1, 3, 4, 5, 6, 7, 8];
// // result: ["odd", "odd", "even", "odd", "even", "odd", "even"]

// const result = array.map(item => item%2===0 ? 'even' : 'odd');

// console.log(result);

// LAB 23.6
// const array = [1, -3, 2, 8, -4, 5];
// // result: [1, 3, 2, 8, 4, 5]

// const result = array.map(item => {
//     if (item<0) item * -1;
    
// }
//     );

// console.log(result);

// LAB 23.

const array = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' }
];
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]

const arr = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
// const array = [0, 5, 10, 7, 6, 5, 0];
// console.log(array.map(function(item){
//     return arr[item];
// }));
  


const result = array.map(function (item, index, array){
    return `<tr><td>${item.name}</td><td>${item.birth.slice(8)}-${arr[item.birth.slice(5,7)-1]}-${item.birth.slice(0,5)}</td></tr>`;
})

console.log(result);








