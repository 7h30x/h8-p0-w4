/*
Problem
Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string. 
Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang paling besar.
 Contoh: "Today, is the greatest day ever!" akan me-return "greatest" karena kata "greatest" memiliki 2 huruf e dan 2 huruf t, 
 dan muncul lebih dulu. Jika tidak ditemukan kalimat dengan kata yang memiliki huruf berulang, return -1.

logic: 



 */


function totalizer (obj) {              //calculates score of each word 
  var wordScore=0;
  var arr=Object.values(obj);

  for (n=0;n<arr.length; n++) {
   
    if (arr[n]>1) {
      wordScore+=arr[n]; 
    }
  }
  return wordScore;
}

function hitungHuruf(kata) {
    let sentence=kata.split(" "); //results in array of words in 'kata' sentence
    let max=0;
    let maxWord;
    for (let k=0; k<sentence.length;k++) { //loop over sentence  
        let word=sentence[k];              //k is the iteration variable 
        var letterList={}
        letterList[word[0]]=1  
        var repeatLetter=true;     //initiates object
            for (let i=1; i<word.length; i++) {                    //loop over chars in word             
                        if (letterList.hasOwnProperty(word[i])=== false) { 
                            repeatLetter=false;          
                        }
                        else {
                        repeatLetter=true;                       //means the char (word[i]) exists! 
                        }
                        if (repeatLetter===false) {     
                            letterList[word[i]] = 1; //add new unique letters as object keys           
                        }
                        else{
                            letterList[word[i]]+= 1; //increase value of existing letters in object
                        }    
            }
        if (max<totalizer(letterList)) {
            max=totalizer(letterList);
            maxWord=word;
        } 
    }
    return maxWord
}
  

  //input: string
  //output: first word with repeating letters
  //logic: split sentence into array of words; 
  //cycle thru array; for each char in word, place into empty array and check if that char exists already. 
  //if so, add the counter for that char +1
   //return the word with the highest char counter
  // TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau