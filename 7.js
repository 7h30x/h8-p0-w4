function digitPerkalianMinimum(angka) {
  var factors=[];           //init factor array
  var min="";
  for (let i=1; i<angka+1; i++) {
    if (angka%i===0) {
       var neww= true;
       for (let j=0; j<factors.length; j++) {
         if (factors[j]===i) {
           neww = false;
           break;
           }
       }
       if (neww=== true) {factors.push(i, angka/i)
         }
     }
  
 
   }
 
   for (let k=0; k<factors.length; k+=2) {      //loop across pairs of factors in the factor array
     var lengthOfFactors=(String(factors[k])+String(factors[k+1])).length;
     if (lengthOfFactors<min || min==0) {
       min=lengthOfFactors;
     }
   }
    return min;
 }
 
 
 // TEST CASES
 console.log(digitPerkalianMinimum(24)); // 2
 console.log(digitPerkalianMinimum(90)); // 3
 console.log(digitPerkalianMinimum(20)); // 2
 console.log(digitPerkalianMinimum(179)); // 4
 console.log(digitPerkalianMinimum(1)); // 2