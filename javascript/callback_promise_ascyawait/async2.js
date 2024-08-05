//Async real time function setTimeout is calling the webapis from browser once done will be 
//waiting inside the callback queue and later pushed to callstack to get executed 

console.log("First output");
//using setTimeout which will be real time async call 

setTimeout(function(){
console.log("i will call web api and will be waiting in callback queue then once my turn came will get excecuted ");
},5000);


for(let i =0 ;i<10;i++){
    console.log(i);
}
