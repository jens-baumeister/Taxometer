function calculate() {

    let kilometers = document.getElementById('distance').value;
    let DriveTime = document.getElementById('time').value;


    let x = kilometers * 1.95;
    let y = DriveTime * 0.0166;
    let sum = x + y;

    let outPutRef = document.getElementById('output');
    outPutRef.innerHTML = "Die Fahrt kostet: " + sum.toFixed(2) + " €";

}

