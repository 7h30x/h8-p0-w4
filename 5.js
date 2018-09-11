function ubahHuruf(kata) {
    var alfabet= "abcdefghijklmnopqrstuvwxyz";
    var baru="";
    for(i=0;i<kata.length; i++) {
        baru+=alfabet[alfabet.indexOf(kata[i])+1];
    }
    return baru;




  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu