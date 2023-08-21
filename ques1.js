console.log('Hello world')

//Write an arrow function which returns the product of two numbers
// let myproduct = function(a, b){
//     return a*b;
// }
// console.log(myproduct(2, 3));

// let product = (a, b) =>  a*b;

// console.log(product(3, 4));

//Object
// const Student = {
//     name: "Kaushal",
//     Course: "Backend Development",
//     about() {
//         console.log("Hello, My name is and " + this.name + " I am learning " + this.Course)

//     }

// }
// Student.about();


// Take an array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon]. 
//Transform it into ['apple', 'oranges' , 'empty string', 'mango', 'empty string', 'lemon] using array maps

// const fruits = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
// const transArr = fruits.map(item =>{
//     if(item === ' '){
//         return 'empty string'
//     }
//     return item
// } )
// console.log(transArr)

//Async await
function delayLog(message, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(message);
        resolve();
      }, delay);
    });
  }
  
  async function printSequence() {
    console.log('a');
    console.log('b');
    
  
    await delayLog('c', 3000);
  
    await delayLog('d', 0);
  
    await console.log('e');
  }
  
  printSequence();
  