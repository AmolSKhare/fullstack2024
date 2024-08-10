//let and const introduced in es6

//variable (function and global scope example )

var sayhi ="Hi there !!";//global scope 

function sayFunction (){
    var say = "i am in block scope , cant be accessible outside this function"; 
    console.log(say); //can use in block scope 
}

console.log(sayhi);//can access anywhere the global scope
sayFunction();
//console.log(say);//ReferenceError: say is not defined