// LAB 9.6
// let str='';

// for (let i=0; i<4; i++){
//     for (let j=0; j<4; j++){
//         str +=''+ i + j;
//     }
//     str +='\n';
// }

// for (let i=0; i<4; i++){
//     for (let j=0; j<4; j++){
//         str +=' '+ i + j;
//     }
//     str +='\n';
// }

// console.log(str)

//LAB 9.7
// let str = '';
// for(let i=2; i<=12; i++){
//     for(let j=1; j<=12; j++){
//         str +=`${i} x ${j} = ${i*j}\n`;
//         // str += '\n';
//     }
//         str += '\n';
// }

// console.log(str);

//LAB 9.8
// let sum=0;
// let count=0;
// while(1){
//     let number = prompt('Please Enter number');
//     // if(number <= 0 || number.trim() === '' || number === null || !+number) break;
//     // if(number <= 0 || number.trim() === '' || !number || !+number) break;
//     if(number <= 0 || !+number) break;
//     sum += +number;
//     count++;
// }

// console.log(`sum = ${sum}`);
// console.log(`average = ${sum/count}`);

// //LAB 9.9
// const correctNumber = prompt('Enter correct number');
// // if(!correctNumber || correctNumber.trim==='' || !+correctNumber){
// if(!isNumeric(+correctNumber)){
//     alert('You don\'t enter number');
//     continue;
// }


// while(1){
//     const guessNumber = +prompt('Guess My Number');}
//     if(!isNumeric(guessNumber)) {
//         alert('You don\'t enter number');
//         continue;   
//     }
//     if (+correctNumber === guessNumber){ //don't + because of constant
//         // if(!guessNumber || guessNumber.trim==='' || !+guessNumber){
//         alert(`Congratulation, Your number of turn is ${count}`);
//         break;
//     else if (+correctNumber < +guessNumber){
//         alert('too more');
//     }
//     else {
//         alert('too less');
//     }
    
//     }

// function isNumeric (number){
//     return !(!number || number.trim()==='' || !+number);
    
// }

//LAB 9.10

// for(let i=1; i<=100; i++){
//     // let isDivide = false;
//     let isPrime = true;
//     for(let j=2; j<i; j++){
//         if(i % j === 0) {
//             // isDivide = true;
//             isPrime = false;
//             break;
//         }
//     }
//     // if (!isDivide) console.log(i);
//     if (!isPrime) console.log(i);
// }










