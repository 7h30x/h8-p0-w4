function cariModus(arr) {
    var modus={};   //object untuk hold key:pair angka:freq

    
    for (let i=0;i<arr.length; i++) { 
        if (arr[i] in modus) {
          modus[arr[i]]+=1;
        }
        else{
          modus[arr[i]]=1;
        }
    }

    var keys = Object.keys(modus)  //binding ke array berisi keys of modus
//proses mencari key dari value terbesar
    var largest = modus[keys[0]] 
    var largestNum = keys[0]
    for (let i = 0 ; i < keys.length; i++) {
      if (modus[keys[i]]>largest) {
        largest=modus[keys[i]];
        largestNum=keys[i];
      } 
     if (largest===1 || largest/arr.length===1) { //exception for if the whole array is comprised of the same number or if there is no modus
       largestNum=-1
     }

    }


    // modus.sort()
    return largestNum
    
}





  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1