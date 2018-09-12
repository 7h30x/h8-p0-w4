/*
Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string.
 Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z.
  Contohnya, halo akan menjadi ahlo. 
  Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.

input: string
output: string; characters reordered in alphabetical order
logic: recursion across input; logic gate deciding where to place the character in relation to input[0] in results string
*/

function urutkanAbjad(str) {
  var results=[str[0]];

  for (let i=1; i< str.length; i++) {
    let j=0;
    while (str[i]>results[j] && j<results.length) {
      j++;
    }
    results.splice(j,0,str[i]);
  }


  return results.join('');
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'