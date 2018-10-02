/*
 this problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

I don't understand this question? Someone explain to me. I'm sorry for having to bother with something simple. 

*/
//Daily Programming question
UberQ2Question();
function UberQ2Question(){
  var numbers = prompt("enter a number you want to convert to array");
  var arrayNumber =  numbers.split("");
  var newArrayNumber = [];
  var num2=1;
  
  for(var num of arrayNumber){
     
    for(var x = 0 ; x < arrayNumber.length; x++){
      
        if(arrayNumber[x] != num){
          
            num2 = arrayNumber[x] *num2 ;
        }
        if(x == arrayNumber.length-1){
          
         newArrayNumber.push(num2);
         num2 = 1; 
          
        }
      
      }     
  }
  console.log(newArrayNumber);
  
}