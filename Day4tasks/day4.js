
//Q.NO 1:Do the below programs in anonymous function & IIFE
//Q.NO 1:(a)Print odd numbers in an array

//anonymous function

var odd=function(arr){
    var result=[];
    for(var i=0;i<arr.length;i++)
    {if(arr[i]%2!=0){
        result.push(arr[i]);
    }
    }
    return result;
}
console.log(odd([1,2,3,4,5,6,7,8]));

//OUTPUT:[1, 3, 5, 7]

//IIFE

(function (arr){
    var result=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            result.push(arr[i]);
    }}
    console.log(result);
})([1,2,3,4,5,6,7,8,9,10])

//OUTPUT:[1, 3, 5, 7, 9]

//-------------------------------------------------------------------------------------------------------
//Q.NO 1:(b)Convert all the strings to title caps in a string array

//anonymous function:

var a=function(arr){
    var result=[];
  arr=arr.toString().split(" ")
  for(var i=0;i<arr.length;i++){
    result.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
  }
  return result.join(" ");
}
console.log(a(["we are the boys"]));

//OUTPUT:We Are The Boys

//IIFE

(function(arr){
    var result=[];
  arr=arr.toString().split(" ")
  for(var i=0;i<arr.length;i++){
    result.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
  }
  console.log(result.join(" "));
}
)(["we are the boys"]);

//OUTPUT:We Are The Boys

//--------------------------------------------------------------------------------------
//Q.NO 1:(c)Sum of all numbers in an array

//anonymous function:
var sum=function(arr){
    var result=0;
    for(var i=0;i<arr.length;i++){
        result=result+arr[i];
    }
   
    return result;
}
console.log(sum([1,2,3,4,5,6,7,8]));

//OUTPUT:36
//IIFE

(function(arr){
    var result=0;
    for(var i=0;i<arr.length;i++){
        result=result+arr[i];
    }
   
    console.log(result);
}
)([1,2,3,4,5,6,7,8]);

//OUTPUT:36
//--------------------------------------------------------------------------------------------

//Q.NO 1:(d)Return all the prime numbers in an array
//anonymous function:
var a=function(numArray){
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
   return numArray;
}
 console.log(a([4,5,6,7,8,9,10,11]));

//OUTPUT:[5, 7, 11]
//IIFE

(function(numArray){
       numArray = numArray.filter((number) => {
         for (var i = 2; i <= Math.sqrt(number); i++) {
           if (number % i === 0) return false;
         }
         return true;
       });
       console.log(numArray);
   })([4,5,6,7,8,9,10,11]);

   //OUTPUT:[5, 7, 11]
//---------------------------------------------------------------------------------------------------------
   //Q.NO 1:(e)Return all the palindromes in an array

   //anonymous function:
   var a = function (b) {
    return b.filter(function (b) {
        var c= b.split("").reverse().join("") ===b;
        return c;
     });
   };
   
   console.log(a(["hello", "noon","12321","122"]));

   //OUTPUT:['noon', '12321']

   //IIFE:
   ( function (b) {
    return b.filter(function (b) {
       var c= b.split("").reverse().join("") ===b;
       console.log(c);
     });
    
   }
   
    )(["hello", "noon","122","12321"]);

//OUTPUT:false,true,false,true

//------------------------------------------------------------------------------------------------
//Q.NO 1:(f)Return median of two sorted arrays of the same size.


//anonymous function:

var c = function(a,b) {
    var arr=a.concat(b);
    var result=[];
    var a=arr.sort(function(a,b){return a-b;})
    for(i=(arr.length-2)/2;i<=(arr.length)/2;i++){
        result.push(arr[i]);
    }
    result1=parseInt(result[0]+result[1])/2
return result1;
}
console.log(c([7,9,10,8,11,12],[1,3,5,4,2,6]));

//OUTPUT:6.5

//IIFE:

(function(a,b) {
    var arr=a.concat(b);
    var result=[];
    var a=arr.sort(function(a,b){return a-b;})
    for(i=(arr.length-2)/2;i<=(arr.length)/2;i++){
        result.push(arr[i]);
    }
    result1=parseInt(result[0]+result[1])/2
console.log(result1);
})
([7,9,10,8,11,12],[1,3,5,4,2,6]);

//OUTPUT:6.5
//--------------------------------------------------------------------------------------------

//Q.NO 1:(g)Remove duplicates from an array
var a=function(array){
    let a = [...new Set(array)];
    return a;
  }
  console.log(a([1,2,3,5,5,2,7]));

  //OUTPUT: [1, 2, 3, 5, 5, 7]

//IIFE:
(function(array){
    let a = [...new Set(array)];
     console.log(a);
  }
)([1,2,3,5,5,2,7]);

//OUTPUT:[1, 2, 3, 5, 7]

//--------------------------------------------------------------------------------------------
//Q.NO 1:(h)Rotate an array by k times

//anonymous function:
var a=function(b,c){
    var r=[];
   for(var i=b.length-c;i<b.length;i++){
         r.push(b[i]);
   }
   for(var j=0;j<b.length-c;j++){
         r.push(b[j]);

   }
   return r;
    }
console.log(a([1,2,3,4,5,6],2));

//OUTPUT:[5, 6, 1, 2, 3, 4]

//IIFE:
(function(b,c){
    var r=[];
   for(var i=b.length-c;i<b.length;i++){
         r.push(b[i]);
   }
   for(var j=0;j<b.length-c;j++){
         r.push(b[j]);

   }
   console.log(r);
    })
([1,2,3,4,5,6],3);

//OUTPUT:[4, 5, 6, 1, 2, 3]

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

//Q.NO:2--Do the below programs in arrow functions.

//Q.NO:2(a)-Print odd numbers in an array

var odd=(arr)=>{
    var result=[];
    for(var i=0;i<arr.length;i++)
    {if(arr[i]%2!=0){
        result.push(arr[i]);
    }
    }
    return result;
}
console.log(odd([1,2,3,4,5,6,7,8]));

//OUTPUT:[1, 3, 5, 7]

//----------------------------------------------------------------
//Q.NO:2(b)-Convert all the strings to title caps in a string array

var a=(arr)=>{
    var result=[];
  arr=arr.toString().split(" ")
  for(var i=0;i<arr.length;i++){
    result.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
  }
  return result.join(" ");
}
console.log(a(["we are the boys"]));

//OUTPUT:We Are The Boys

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
//Q.NO:2(c)-Sum of all numbers in an array
var sum=(arr)=>{
    var result=0;
    for(var i=0;i<arr.length;i++){
        result=result+arr[i];
    }
   
    return result;
}
console.log(sum([1,2,3,4,5,6,7,8]));

//OUTPUT:36
//----------------------------------------------------------------
//Q.NO:2(d)-Return all the prime numbers in an array
var a=(numArray)=>{
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
   return numArray;
}
 console.log(a([4,5,6,7,8,9,10,11]));

//OUTPUT: [5, 7, 11]
//------------------------------------------------------------------------------------------------
 //Q.NO:2(e)-Return all the palindromes in an array

 var a =  (b)=>{
    return b.filter(function (b) {
        var c= b.split("").reverse().join("") ===b;
        return c;
     });
   };
   
   console.log(a(["hello", "noon","12321","122"]));

//OUTPUT:['noon', '12321']