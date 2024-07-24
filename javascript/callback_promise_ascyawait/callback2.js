//writing the square and cube of two numbers using the callback approach .

function square(n){
    return n*n ;
}

function cube(n){
    return n*n*n;
}

//simple function
// function sumofSquares(a,b){
//     let square1 = square(a);
//     let square2 = square(b);
//     return square1 + square2;
// }

function sumofSquares(a,b,callback){  //callback function 
    let square1 = callback(a);
    let square2 = callback(b);
    return square1+square2;
}
let ans = sumofSquares(2,3,square);
let ans2 = sumofSquares(2,3,cube);
console.log("sum of squares = ",ans);
console.log("sum of squares = ",ans2);