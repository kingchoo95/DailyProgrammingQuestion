/*
This problem was asked by Amazon.

Run-length encoding is a fast and simple method of encoding strings. 
The basic idea is to represent repeated successive characters as a single count and character. 
For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

Implement run-length encoding and decoding. 
You can assume the string to be encoded have no digits and consists solely of alphabetic characters. 
You can assume the string to be decoded is valid.


*/

//find the number of alpha with alpha
function encoded(){
  var string ="AAAABBBCCDAA";
  var splitString = string.split("");
  var countSameAlpha = 0;
  var tempAlpha;
  var encodedString = [];
  
  
  for(var x = 0 ; x <= splitString.length ; x++){
     
    if(tempAlpha == splitString[x] || x === 0){
      countSameAlpha += 1;
      tempAlpha = splitString[x];
    }else{
      encodedString.push(countSameAlpha +""+ tempAlpha);
      countSameAlpha = 1;
      tempAlpha = splitString[x];
      
    }
  }
  
  console.log(encodedString.join(""));
}


//convert to alpha only
function decoded(){
  var string ="4A3B2C1D2A";
  var splitString = string.split("");
  var totalNeedToIterate;
  var dencodedString = [];
  
  for(var x of splitString){
    if(!(x.match(/[a-z]/i))){
      
        totalNeedToIterate = x;
        
      
    }else{
      for(var y = 0 ; y < totalNeedToIterate ; y++){
        dencodedString.push(x);
      }
    }
  }
  console.log(dencodedString.join(""));
    
}
decoded();
encoded();
