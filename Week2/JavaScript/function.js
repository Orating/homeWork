// // LAB 1.8
// function login(username, password){
//     if(username === 'admin' && password === 'p@ssw0rd') return true;
//     return false;
// }

// function login(username, password){
//     return username === 'admin' && password === 'p@ssw0rd';
// }

// // LAB 1.9
// function isPrime(number){
//     for(let i=2; i<number; i++){
//         if (number % i === 0) return false;
//     }
//     return true;
// }

// function logPrimeNumber(number){
//     for(let i=2; i<=number; i++){
//         if(isPrime(i)) console.log(i);
//     }
// }

// LAB 1.12
// function getLongText() {
//     return //add ; automatic
//       'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
//   }
  
//   console.log(getLongText()); // 

// LAB 1.13
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     }
//     return confirm('Did parents allow you?');
    
// }

// function checkAge(age) {
//     return age > 18 ? true : confirm('Did parents allow you?');
// }

// function checkAge(age) {
//     return age > 18 || confirm('Did parents allow you?');
// }

//LAB 1.14
// function max(a, b, c, d){
//     if(a === undefined) {
//         return;
//     } else {
//         if(b === undefined){
//             return isNumeric(a) ? +a : NaN;
//         } else {
//             if ( c === undefined) {
//                 return isNumeric(a) && isNumeric(b) ? (a > b ? a : b) : NaN;
//             } else {
//                 if (d === undefined) {
//                     if(isNumeric(a) && isNumeric(b) && isNumeric(c)){
//                         if(a > b && a>c) return a;
//                         return b > c ? b : c;
//                     }
//                 } else {
//                     if(isNumeric(a) && isNumeric(b) && isNumeric(c) && isNumeric(d)){
//                         if(a > b && a>c && a>d) return a;
//                         if(b>c && b>d) return b;
//                         return c>d ? c:d;
//                     }
//                 }
//             }
//         }
//     } 
// }

//LAB 2.3 **

// const checkPermission = function(role, success, reject) {
//     if (role === 'ADMIN') return success();
//     return reject();
// };

// checkPermission('ADMIN',function()){
//     alert('ACCESS GRANTED');
// },
// function(){
//     alert('ACCESS DENIED');
// }
// );

//LAB 2.4
// function magic() {
//     return function (x) {
//       return x * 42;
//     };
//   }
//   const answer = magic();
// //   answer = function(x){
// //       return x * 42 ;
// //   }
//   console.log(answer); // *
//   console.log(answer(1337)); // answer is the function 
//   console.log(magic(1337)(42)); // magic(1337) >> magic's function doesn't have parameter = function(x){...}

//LAB 3.8
// const calcFootballPoint = (win, draw) => win*3+draw;

//LAB 3.9
// const isLeapYear = year => {
//     if(year%100 === 0){
//         return year % 400 === 0;
//     }
//     return year % 4 === 0;
    
// }

//LAB 3.10
// const calcAge = birthYear => {
//     let day = 0;
//     for(let i=birthYear; i<=2020; i++){
//         day += isLeapYear(i) ? 366 : 365;
//     }
//     return day;
// };

// console.log(calcAge(2000));

//LAB 3.11
// const convertToCelsius = fah => (fah-32)*5/9;

//LAB 3.12
// const factorial = number => {
//     let result =1;
//     for(let i=number; i>=1; i--){
//         result *= i; 
//     }
//     return result;
// }

// console.log(factorial(4));

//recursive
// const factorial = n => {
//     if (n===1 || n===0) return 1;
//     return n * factorial(n-1)
// }
// console.log(factorial(5));
