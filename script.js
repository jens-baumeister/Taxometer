let kilometers = document.getElementById("distance").innerHTML;
let DriveTime = document.getElementById("time").innerHTML;


console.log(kilometers);
console.log(DriveTime);




function calculate(){
   let x = kilometers.value * 1.95;
   let y = DriveTime.value * 0.0166;
   let sum = x + y;
    console.log(sum);
    
}

