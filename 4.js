/*
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. 
Function akan me-return modus dari array atau deret angka tersebut.
 Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. 
 Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. 
 Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). 
Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/

function cariModus(arr) {
  var modus={};   //object untuk hold angka:freq

  
  for (let i=0;i<arr.length; i++) { 
      if (arr[i] in modus) {        //if the number is alredy in modus add 1
        modus[arr[i]]+=1;
      }
      else{
        modus[arr[i]]=1;
      }
  }

  var values = Object.entries(modus).sort((a,b)=>b[1]-a[1])  // array berisi values of modus
  //proses mencari key dari value terbesar

  var largest = values[0][1] 
  var largestNum = values[0][0]

    if (largest===1 || largest/arr.length===1) { //exception for if the whole array is comprised of the same number or if there is no modus
     largestNum=-1
    }



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