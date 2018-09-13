/*Logic Challenge - Password Generator
Problem
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti 
akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:
Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga
*/
function changeVocals (str) {
  var changed="";
  var vokal="aeiouAEIOU"
  var alpha="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
  for (i=0; i< str.length; i++) {
    var isVokal;
    for (j in vokal) {
      if (str[i] === vokal[j]) {
      isVokal=true;
      break;
      }
      else {
        isVokal=false;
      }
    }
    if(isVokal===true) {
      var char=str[i];
      var charIndex=alpha.indexOf(char)
      changed+=alpha[charIndex+1];
    }
    else {
      char=str[i];
      changed+=char;
    }

  }
 
  return changed;
}

function reverseWord (str) {
  var reversed="";
  for (i=str.length; i>0; i--) {
    reversed+=str[i-1];
  }
  return reversed;
}

function setLowerUpperCase (str) {
  var switched="";
  for (i=0; i<str.length; i++) {

    if (str[i].toUpperCase()==str[i]) {
      switched+=str[i].toLowerCase();
    }
    else {
      switched+=str[i].toUpperCase();
    }
  }
  return switched;
}

function removeSpaces (str) {
  var cleaned= str.replace(" ","")
  return cleaned;
  
}

function passwordGenerator (name) {
  if (name.length<5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }
  else{
      return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))

  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'