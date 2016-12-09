//PEuler5

//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?



for (var r=20;r<300000000;r++){
    var isDiv = true;
    
    for (var d=2;d<21;d++) {
        if (r%d!==0) {
            isDiv = false;
            break
        }
    }
    if (isDiv) {
        console.log("DUDE THIS ONE: " + r);
        break
    }
}


// CHEATING:
//for (var d=1;d<5000;d++){
//      if (d%10===0&&
//       d%9===0&&
//       d%8===0&&
//       d%7===0&&
//       d%6===0&&
//       d%5===0&&
//       d%4===0&&
//       d%3===0&&
//       d%2===0){
//        console.log(d);
//        }
//} 

// I did the same thing for 20 -- just divided by 20,19,18,17,16,15,14,13,12,11.  Came out: 232,792,560