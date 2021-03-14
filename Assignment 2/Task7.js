var firstNum = parseInt (prompt("Enter your first number: "));
var secondNum = parseInt (prompt("Enter your second number: "));
var operation = prompt ("What operation would you like to perform: ");
var result;

if (operation == "+"){

    result = firstNum + secondNum;
    console.log(result);
} else if (operation == "-" ){

    result = firstNum - secondNum;
    console.log(result);
} else if (operation == "*" ){

    result = firstNum * secondNum;
    console.log(result);
} else if (operation == "/" ){

    result = firstNum / secondNum;
    console.log(result);
} else if (operation == "%" ){

    result = firstNum % secondNum;
    console.log(result);
}