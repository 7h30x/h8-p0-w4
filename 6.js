function hitungHuruf(kata) {
    let words=kata.split(" "); //results in array of words in 'kata' sentence
  
    for (let k=0; k<words.length;k++) { 
        let word=words[k];              //k is the iteration variable for words in sentence
      
        let letterList=[word[0]]    //initiates to first letter in that word
        for (let i=1; i<word.length+1; i++) {   
            let repeatLetter=true;      //state variable 
            
            for (j=0; j<letterList.length; j++) { //cycle through the length of letterlist

                if (word[i]!==letterList[j]) {  //decision! if character EQUALS TO current char in letterlist
                    repeatLetter=false;         
                }
                else {
                   repeatLetter=true;
                   break;               //means the char (word[i]) exists! this satisfies criteria of the problem >> break program 
                }
            }
            if (repeatLetter===false) {     
                letterList.push(word[i]); //push new unique letters to letterlist for the duration of word.length          
            }
            else{
                return word             
            }    

        }

    }
}

  

  //input: string
  //output: first word with repeating letters
  //logic: split sentence into array of words; 
  //cycle thru array; for each char in word, place into empty array and check if that char exists already. 
  //if so, return the word 
  // TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau