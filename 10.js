function checkAB(num) {
  let check=true;
  
  for (i=0;i<num.length;i++) {
    if (num[i]==='a') {
      
      if (num[i+4]==='b') {
        check=true;
        return check;
      }
      else {
        check=false;
      }
    }
  }

  for (j=0;j<num.length; j++) {
    if (num[j]==='b') {
      if (num[j+4]==='a') {
        check=true;
        return check;
        
      }
      else {
        check=false;
      }
    }
  }
  return check;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false