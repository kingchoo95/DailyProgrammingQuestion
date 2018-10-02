/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given a string of parentheses, write a function to compute the minimum number of parentheses to be removed to make the string valid (i.e. each open parenthesis is eventually closed).

For example, given the string "()())()", you should return 1. Given the string ")(", you should return 2, since we must remove all of them.

*/

parentthesesProblem();
function parentthesesProblem(){
  var string = ")(";
  var splitString = string.split("");
  var temp;
  var countValidParentheses = 0;
 
  for(var x = 0 ; x<splitString.length ; x++){
      temp=x;
    if(splitString[temp]=="(" && splitString[temp+1] == ")"){
          countValidParentheses= 1 +countValidParentheses;
        x+=1;
        
      }
    
  }
  console.log("valid = " +countValidParentheses);
  console.log("invalid =" + (splitString.length - (countValidParentheses*2)));
  
}