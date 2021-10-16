var firstNumber = null;
var secondNumber =null;
var totalOutput = "";
var operator = null;
// var first="",second="";
var output="";

// not working for input 2*2*  as we wanted.


var one = document.querySelector(".one");
one.addEventListener("click",()=>{
    output=output+"1";
    document.querySelector(".output").innerHTML = output;
})

var two = document.querySelector(".two");
two.addEventListener("click",()=>{
    output=output+"2";
    document.querySelector(".output").innerHTML = output;
})

var three = document.querySelector(".three");
three.addEventListener("click",()=>{
    output=output+"3";
    document.querySelector(".output").innerHTML = output;
})

var four = document.querySelector(".four");
four.addEventListener("click",()=>{
    output=output+"4";
    document.querySelector(".output").innerHTML = output;
})

var five = document.querySelector(".five");
five.addEventListener("click",()=>{
    output+=5;
    document.querySelector(".output").innerHTML = output;
})

var six = document.querySelector(".six");
six.addEventListener("click",()=>{
    output+=6;
    document.querySelector(".output").innerHTML = output;
})

var seven = document.querySelector(".seven");
seven.addEventListener("click",()=>{
    output+=7;
    document.querySelector(".output").innerHTML = output;
})

var eight = document.querySelector(".eight");
eight.addEventListener("click",()=>{
    output+=8;
    document.querySelector(".output").innerHTML = output;
})

var nine = document.querySelector(".nine");
nine.addEventListener("click",()=>{
    output+=9;
    document.querySelector(".output").innerHTML = output;
})

var zero = document.querySelector(".zero");
zero.addEventListener("click",()=>{
    output+=0;
    document.querySelector(".output").innerHTML = output;
})

// special character

var clear = document.querySelector("#clc");
clear.addEventListener("click",()=>{
    output=""
    firstNumber = null;
    secondNumber =null;
    totalOutput = "";
    operator = null;
    output="";
    document.querySelector(".history").innerHTML = output;
    document.querySelector(".output").innerHTML = output;
})

// operator work.

var plus = document.querySelector(".plus");
plus.addEventListener("click",()=>{
    if(firstNumber==null){
        firstNumber = output;
    }else if(operator==null) {
        operator = '+';
    }else if(secondNumber==null){
        secondNumber = output.split(operator)[1];
    }else{
        calculate_value();
    }
    operator="+";
    output= output+"+";
    document.querySelector(".output").innerHTML = output;
})

var minus = document.querySelector(".minus");
minus.addEventListener("click",()=>{
    if(firstNumber==null){
        firstNumber = output;
    }else if(operator==null) {
        operator = '-';
    }
    else if(secondNumber==null){
        secondNumber = output.split(operator)[1];
    }else{
        calculate_value();
    }
    operator = '-';
    output= output+"-";
    document.querySelector(".output").innerHTML = output;
})

var multiply = document.querySelector(".multiply");
multiply.addEventListener("click",()=>{
    if(firstNumber==null){
        firstNumber = output;
    }else if(operator==null) {
        operator = '*';
    }
    else if(secondNumber==null){
        secondNumber = output.split(operator)[1];
    }else{
        calculate_value();
    }
    operator='*';
    output= output+"*";
    document.querySelector(".output").innerHTML = output;
})

var divide = document.querySelector(".divide");
divide.addEventListener("click",()=>{
    
    if(firstNumber==null){
        firstNumber = output;
    }else if(operator==null) {
        operator = '/';
    }else if(secondNumber==null){
        secondNumber = output.split(operator)[1];
    }else{
        calculate_value();
    }
    operator='/';
    output= output+"/";
    document.querySelector(".output").innerHTML = output;
})

var modulo = document.querySelector(".modulo");
modulo.addEventListener("click",()=>{
    if(firstNumber==null){
        firstNumber = output;
    }
    else if(operator==null) {
        operator = '%';
    }else if(secondNumber==null){
        secondNumber = output.split(operator)[1];
    }else{
        alert("hii");
        calculate_value();
    }
    operator='%';
    output= output+"%";
    document.querySelector(".output").innerHTML = output;
})

var equal = document.querySelector(".equal");
equal.addEventListener("click",()=>{
    if(secondNumber==null) secondNumber = output.split(operator)[1];
    if(firstNumber ==null && secondNumber==null) alert("please select some number first.");
    else if(secondNumber==null) {
        document.querySelector(".output").innerHTML = output;
    }
    else{
        calculate_value();
    }
})


// function for value calculation

function calculate_value(){
    if(operator=='+') totalOutput = firstNumber + secondNumber;
    else if(operator=='-') totalOutput = firstNumber - secondNumber;
    else if(operator=='*') totalOutput = firstNumber * secondNumber;
    else if(operator=='/') totalOutput = firstNumber /secondNumber;
    else if(operator=='%') totalOutput = firstNumber % secondNumber;
    // var a=totalOutput.fixed(2);
    operator=null;
    output=totalOutput;
    firstNumber=totalOutput;
    secondNumber=null;
    document.querySelector(".output").innerHTML = output;

}

