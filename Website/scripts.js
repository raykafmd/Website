function Multiply() {
    var Num1 = document.getElementById('number1').value;
    var Num2 = document.getElementById('number2').value;
    console.log(Num1)
    console.log(Num2)
    var answer = Num1 * Num2
    document.getElementById('answertext').innerHTML = answer
}