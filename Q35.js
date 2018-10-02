/*
This problem was asked by Google.

Given an array of strictly the characters 'R', 'G', and 'B', segregate the values 
of the array so that all the Rs come first, the Gs come second, and the Bs come last.
You can only swap elements of the array.

Do this in linear time and in-place.

For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], 
it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].

*/

function swap(arrayRGB){
  
  var temp;
  for(var x = 0; x < arrayRGB.length ; x++){
    
     if(x !== 0){
         for(var y = x; y >= 0 ; y--){
           
           if(arrayRGB[y]>arrayRGB[y-1]){
             
             temp = arrayRGB[y];
             arrayRGB[y] = arrayRGB[y-1]
             arrayRGB[y-1] = temp;
             
           }
           
         }
     }
    
  
  }
 console.log(arrayRGB);
}

swap(['G', 'B', 'R', 'R', 'B', 'R', 'G']);