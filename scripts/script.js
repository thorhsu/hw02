
function showMsg(msg1, msg2) {
    return msg1 + " " + msg2;    
}

var rangeRandom = function(start, end){
    var timesVar = end - start + 1;
    return Math.floor(Math.random() * timesVar + start);
}

function squareNum(numberInput){
  numberInput = parseFloat(numberInput);
  return numberInput * numberInput;
}
