/*



Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.

Given the string  "((()", you should return false.

******OPEN BRACKET MATCH IN PAIR ALSO CONSITER TRUE, eg "([)]" return TRUE*******

*/
console.log(wellFormed());
function wellFormed(){
  //only three types of bracket -> () [] {}
  var string = "([)]";
  var splitString = string.split("");

  
  var tempNum=0; 
  var count = 1;
  
  // for of -> array // for in -> obj
  
  for(var x of splitString){
    
    for(var y = count; y < splitString.length; y++){
        
       if(x != splitString[y]){
         
         if(splitString[y]==")" && x=="("){ 
           tempNum +=1;  
           break;
         }
         
         if(splitString[y]=="}" && x=="{"){   
           tempNum +=1;   
           break;
         }
         
         if(splitString[y]=="]" && x=="["){  
           tempNum +=1;
           break;
         }    
           
       }
    
    }
    count +=1;
  }
  if(tempNum*2 == splitString.length){
    return true;
  }else{
    return false;
  }
}