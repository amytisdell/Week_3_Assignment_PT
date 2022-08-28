// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
ages = [3, 9, 23, 64, 2, 8, 28, 93];

/* a.	Programmatically subtract the value of the first element in the array from the value in the last element 
of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). 
Print the result to the console.*/ 

console.log ((ages[ages.length-1])-ages[0]);
// expected output: 90, achieved 90

// b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
ages.push(29);
console.log ((ages[ages.length-1])-ages[0]);
//expected output: 26. acheived 26

// c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
let totalAge = 0;
for (let i=0; i < ages.length; i++) {
    totalAge = totalAge + ages[i];
} 
console.log (totalAge / ages.length)
//expected outcome: 28.77, actual outcome: 28.77





/*2. Create an array called names that contains the following values: 
‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.*/ 
names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
/* a. Use a loop to iterate through the array and calculate the average number of letters 
per name. Print the result to the console. */
let count = 0
for (let i=0; i < names.length; i++) {
       count = names[i].length + count
} 
let nameAverage = count / names.length
console.log (nameAverage)
// expected outcome: 3.8
// outcome: 3.8 

/* b.Use a loop to iterate through the array again and 
concatenate all the names together, separated by spaces,
and print the result to the console.*/
var allNames = ""
for (let i=0; i < names.length; i++) {
    allNames = (allNames + names[i] + " " ) 
}
console.log (allNames)






 //3. Question: How do you access the last element of any array?
 //3. Answer:   you can access the last element in an array by using the length of the array method and subtracting 1. Example: 
 console.log(names[names.length-1]); 
 //expected outcome: Bob, actual outcome: Bob





 //4.  Question: How do you access the first element of any array?
 /*4.  Answer:   you can access the first element of an array by calling the 0 place in the array. This is because the first
 element will always be in the 0 place no matter how long the array is.*/

 //Example: 
 console.log(names[0]);
 //expected outcome: Sam, actual outcome: Sam





 /* 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the 
 length of each name to the nameLengths array. For example: namesArray = ["Kelly", "Sam", "Kate"] given this array 
 nameLengths = [5, 3, 4] create this new array */ 

 let namesLength = [];
 for (let i=0; i <names.length; i++) {
     namesLength.push(names[i].length)
     }
 console.log(namesLength);
 //expected outcome: 3,5,3,5,4,3 actual outcome: 3,5,3,5,4,3





 /*6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
 Print the result to the console.*/ 

 let sum = 0;
 for (let i=0; i<namesLength.length; i++) {
     sum = sum + namesLength[i]
 } 
 console.log(sum)
 //expected outcome: 23, actual outcome 23





 /* 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n 
 number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’). */ 

 function Hello (word,n) {
     return word.repeat(n); 
 }

 //test
 console.log (Hello("Amy",4));
 // expected outcome: AmyAmyAmyAmy, actual outcome: AmyAmyAmyAmy 





 /* 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name 
 (the full name should be the first and the last name separated by a space).*/ 

 function fullName (firstName, lastName) {
     return (firstName + " " + lastName)
 }

 //test
 console.log (fullName ("John", "Doe"));
 // expected outcome: John Doe, actual outcome: John Doe





/*9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers 
in the array is greater than 100. */

 function sumArray(array) {
 let currentValue = 0;
 for (let i = 0; i < array.length; i++) {
     currentValue = currentValue + array[i]
 }  if (currentValue > 100) { 
    return true;}
    else return false;
 }

 //test
 let question9Array = [1,2,3,4,5];
 console.log (sumArray(question9Array)); 
 // expected outcome: false, actual outcome: false
 let question9Array2 = [100,10,15];
 console.log (sumArray(question9Array2)); 
 // expected outcome: true, actual outcome: true
 





/*10.	Write a function that takes an array of numbers and returns 
the average of all the elements in the array. */ 

 function findAverage (array) {
     let value = 0
     for (let i = 0; i < array.length; i++)
     value = value + array[i] 
     return value / array.length 
 }

 //test 
 let example10 = [1,2,3,4,5]
 console.log (findAverage(example10)) 
 //expected outcome: 3, actual outcome 3 





// /* 11.	Write a function that takes two arrays of numbers and 
// returns true if the average of the elements in the first array is 
// greater than the average of the elements in the second array. */ 

 function compareArrays (array1, array2) {
     let value1 = 0
     for (let i = 0; i < array1.length; i++)
     value1 = value1 + array1[i] 
     let avg1 = value1 / array1.length
    
     let value2 = 0
     for (let i = 0; i < array2.length; i++)
     value2 = value2 + array2[i] 
     let avg2 = value2 / array2.length 

     if (avg1 > avg2){
         return true
     } else return false 
 }

// //test
let testArray1 = [3,3,3,3,3]
let testArray2 = [4,4,4,4,4]
console.log (compareArrays(testArray1,testArray2))
//expected outcome: false, actual outcome: false 
console.log (compareArrays(testArray2,testArray1))
//expected outcome: true, actual outcome: true





/*12. Write a function called willBuyDrink that takes a boolean isHotOutside,
and a number moneyInPocket, and returns true if it is hot outside and 
if moneyInPocket is greater than 10.50. */ 

 function willBuyDrink (isHotOutside, moneyInPocket) {
     if (isHotOutside === true && moneyInPocket > 10.50)
     return true
     else return false 
  }
//test 
console.log (willBuyDrink(true, 11))
console.log (willBuyDrink(false, 11))
console.log (willBuyDrink(true, 10))
//expected outcome: true, false, false, actual outcome: true, false, false 





//13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

/*problem: Functions Viral Videos, Inc. has a target demographic age of 20-35 years old. 
To improve their marketing numbers, They would like to know the average age of their user 
to further target advertisements. They find, however,  that the average is much higher than
they expeted. They found that there is a pocket of users that are over the age of 80, which 
is skewing the average age higher. Functions Viral Videos, Inc. would like to know the average age of
their users with the removal of the outlier 80 years and older age group. */

function noOutlierAverage(array){
let under80 = array.filter(function(value) {
return value < 80})

let count = 0
for (let i=0; i < under80.length; i++) {
count = under80[i] + count
} 
let ageAverage = count / under80.length
return ageAverage
}

//test
var testQuestion13a = [3,3,3,34,35,3,90,95,99];
console.log (noOutlierAverage(testQuestion13a))
 //expected outcome: 13.5, actual outcome 13.5 
 var testQuestion13b = [14,24,18,22,17,17,16,84,90]
 console.log(noOutlierAverage(testQuestion13b))
//expected outcome: 18.2, actual outcome: 18.2