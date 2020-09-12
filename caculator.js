function getSum() {
    let x = +document.getElementById("Text1").value;
    let y = +document.getElementById("Text2").value;
    sum = x + y;
    document.getElementById("final").innerHTML = ('Result Division: ' + sum);
}
function getDiff() {
    let x = +document.getElementById("Text1").value;
    let y = +document.getElementById("Text2").value;
    diff = x -y;
    document.getElementById("final").innerHTML = ('Result Divison: ' + diff);
}
function getProduct() {
    let x = +document.getElementById("Text1").value;
    let y = +document.getElementById("Text2").value;
    product = x * y;
    document.getElementById("final").innerHTML = ('Result Divison: ' + product);
}
function getquotient() {
    let x = +document.getElementById("Text1").value;
    let y = +document.getElementById("Text2").value;
    quotient = x / y;
    document.getElementById("final").innerHTML = ('Result Divison: ' + quotient);
}