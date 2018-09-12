// FIND MIN DIGIT IN A NUMBER
var num=7589;
var arr=String(num).split("");
/*
var tampung=arr[0];
for (num in arr) {

    if (arr[num]<tampung) {
        tampung=arr[num];
    }
}
console.log(tampung)
/*

/*
input=array
outpute: string dependent on values of the array
*/

var tampung="";
var posisi= [" ratus ", " puluh ", " comma ",""];
for (i in arr) {
    if (arr[i]==="7") {
        arr[i]="tujuh";
    }
    if (arr[i]==="5") {
        arr[i]="lima";
    }
    if (arr[i]==="8") {
        arr[i]="delapan";
    }
    if (arr[i]==="9") {
        arr[i]="sembilan";
    }
   
    tampung+=arr[i]+posisi[i]


}
console.log(tampung)

