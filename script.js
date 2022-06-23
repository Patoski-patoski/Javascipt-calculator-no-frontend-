let count = (firstNumber, SecondNumber, myFunction) => {
  switch (myFunction) {
    case '+':
      return Number(firstNumber) + Number(SecondNumber);
    
    case '-':
      return Number(firstNumber) - Number(SecondNumber);
  
    case '*':
      return Number(firstNumber) * Number(SecondNumber);
  
    case '/':
      return Number(firstNumber) / Number(SecondNumber);
  
    case '%':
      return Number(firstNumber) % Number(SecondNumber);

    default:
      return 'Invalid Inputs'
  }
}


let myResult = () => {
  let firstInput = prompt("Input first Number: ");
  let operation = prompt("Enter the operation: ");
  let secondInput = prompt("Input the second number: ");
  let myResult = count(firstInput, secondInput, operation);
  alert("Your answer is " + myResult);
}

const myButton = document.querySelector('button');
myButton.addEventListener('click', () => {
  myResult();
})

myResult()













































// //calculation functions
// let calculate = (first, second, func) => {
//   switch (func) {
//     case "+":
//       return Number(first) + Number(second);

//     case "-":
//       return Number(first) - Number(second);

//     case "*":
//       return Number(first) * Number(second);

//     case "/":
//       return Number(first) / Number(second);

//     case "%":
//       return Number(first) % Number(second);
//     default:
//       return "Invalid operation";
//   }
// };

// //get user input
// const myResult = () => {
//   let firstNumber = prompt(" Input a number: ");
//   let operation = prompt(
//     'Please select an operation, "+", "-" "*", "/", "%", '
//   );
//   let secondNumber = prompt("Input another number: ");
//   let result = calculate(firstNumber, secondNumber, operation);
//   alert(result);
// };

// //Add event to button
// const button = document.querySelector("button");
// button.addEventListener("click", (e) => {
//   myResult();
// });

// //call function
// myResult();
