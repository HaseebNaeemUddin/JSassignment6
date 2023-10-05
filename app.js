// >>>>>>>>>>>>>>>>>>>>>>>>>>>Assignment 6>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Q1

// var currentDateTime = new Date ();
// alert(currentDateTime);

// Q2
// function Greet (firstname,Lastname){
//     var fullname = (firstname + " " + Lastname);
//      var greeting = ("Hello" + " " + fullname);
//       console.log(greeting);

// }

// var firstname = prompt("Enter your first name");
// var Lastname = prompt("Enter your last name");
// Greet(firstname,Lastname)



// Q3

// function Sum (num1,num2){

//     var total = num1 + num2;
//     console.log(total);

// }

// var num1 = +prompt("Enter your first value");
// var num2 = +prompt("Enter your second value");
// Sum(num1,num2);



// Q4

// function calc(num1,opr,num2)
// {
//     if(opr === "+"){
//        return num1 + num2;
//     }
//     else if (opr === "-"){
//         return num1 - num2;
//     }
//     else if (opr === "*"){
//         return num1 * num2;
//     }
//     else if (opr === "/"){
//         return num1 / num2;
//     }
// }

// var num1 = +prompt("Enter your first value");
// var operator = prompt("Enter operator");
// var num2 = +prompt("Enter your second value");

// calc(num1,operator,num2);
// var result = calc(num1,operator,num2);
// console.log(result);



// Q5

// function square (num) {
//     var square = num * num;
//     console.log(square);
// }

// var num = square(5);



// Q6

// let n = 5; 
// function factorial(n) { 
// 	if (n === 0) { 
// 		return 1; 
// 	} 
// 	else { 
// 		return n * factorial( n - 1 ); 
// 	} 
// } 

// console.log(factorial(n));


// Q7

// function countNumbers(start, end) {
//     for (let i = start; i <= end; i++) {
//         document.write(i + "<br>");
//     }
// }

// countNumbers(1, 10);



// // Q8


// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(number) {
//         return number * number;
//     }
    

//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);

//     var hypotenuseSquare = baseSquare + perpendicularSquare;
//     var hypotenuse = Math.sqrt(hypotenuseSquare);

//     return hypotenuse;
// }

// var base = 3;
// var perpendicular = 4;
// var hypotenuse = calculateHypotenuse(base, perpendicular);
// console.log("Hypotenuse:", hypotenuse);



// Q9(i)

// function calculateRectangleAreaByValue(width, height) {

//     var area = width * height;
//     return area;
// }

// var areaByValue = calculateRectangleAreaByValue(5, 8);
// console.log("Area (By Value):", areaByValue);

// Q9(ii)

// function calculateRectangleAreaByVariable(width, height) {
//     var area = width * height;
//     return area;
// }
// var width = 5;
// var height = 8;
// var areaByVariable = calculateRectangleAreaByVariable(width, height);
// console.log("Area (By Variable):", areaByVariable);

// Q10

// var word = prompt("Enter a word");
// var check = "";

// for(var i = word.length - 1; i >= 0; i--){
//     check += word[i];
// }
// if(word === check){
//     console.log(word + " is a Palindrome");
// }
// else{
//     console.log(word + " is not a Palindrome");
// }



// Q11


// function capitalizeWords(inputString) {
    
//     var words = inputString.split(" ");

//     for (var i = 0; i < words.length; i++) {
//         var word = words[i];
//         words[i] = word.charAt(0).toUpperCase() + word.slice(1);
//     }
//     var capitalizedString = words.join(" ");

//     return capitalizedString;
// }


// var inputString = 'the quick brown fox';
// var capitalizedOutput = capitalizeWords(inputString);
// console.log(capitalizedOutput); 



// Q12

// function findLongestWord(inputString) {
    
//     var words = inputString.split(" ");

//     var longestWord = "";

   
//     for (var i = 0; i < words.length; i++) {
//         var word = words[i];

      
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }

//     return longestWord;
// }
// var inputString = 'Web Development Tutorial';
// var longestWord = findLongestWord(inputString);
// console.log(longestWord); 


// Q13

function countOccurrences(inputString, letter) {
    
    var count = 0;
    for (var i = 0; i < inputString.length; i++) {
        var currentChar = inputString.charAt(i);

        
        if (currentChar === letter) {
            count++;
        }
    }

    return count;
}


var inputString = 'JSResourceS.com';
var letter = 'o';
var occurrenceCount = countOccurrences(inputString, letter);
console.log("Number of occurrences:", occurrenceCount); 
