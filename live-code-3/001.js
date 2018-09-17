/**
Even Pairs Sum
--------------
Implementasikan function `evenPairsSum` yang akan menjumlahkan pasangan-pasangan angka genap yang
ada di dalam `str`.
Contoh
- input: '34102180'
  pasangan: 34, 10, 21, 80
  output: 124
  Karena ada pasangan genap (34, 10, 80) maka akan dijumlahkan
- input: '31913791'
  pasangan: 31, 91, 37, 91
  output: 0
  Karena tidak ada pasangan genap
- input: '2130113'
  pasangan: 21, 30, 11, 32
  output: 62

NOTE: Jika angka terakhir tidak memiliki pasangan, maka pasangkan dengan angka pertama seperti
      pada contoh terakhir

RULE:
  - WAJIB menyertakan algoritma / pseudocode
  - Dilarang menggunakan .filter, .map, .reduce
  
pseudocode:
DECLARE 'evens' as array;
DECLARE 'total' as 0;
IF string.length MOD 2 is not equal to 0
  CONCAT str[0] to str
FOR i=0; i<str.length; increment i by 2
  DECLARE 'pair' as str[i] CONCAT str[i+1]
  IF 'pair' is even
    PUSH 'pair' to 'evens' 
ENDFOR
IF length of 'evens' is undefined
  RETURN 0
FOR j=0; j<'evens'.length; increment j by 1 
  ADD 'evens'[j] to 'total' 
ENDFOR
RETURN 'total'

  */


function evenPairsSum (str) {
  var evens=[];
  var total=0;
  if(str.length%2!==0) {
    str+=str[0];
  }
  for(let i=0;i<str.length;i+=2) {
    var pair=str[i]+str[i+1];
    
    if (pair%2===0) {
      evens.push(pair)
    }
  }
  if(!evens.length) {
    return 0;
  }
  for(j=0;j<evens.length;j++) {
    total+=Number(evens[j]);
  }
 return total;
}

console.log(evenPairsSum('2044101211')); // 86
console.log(evenPairsSum('33791363')); // 0
console.log(evenPairsSum('23426766201')); // 140
console.log(evenPairsSum('2478201')); // 134
