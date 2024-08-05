const fs = require('fs');

let a =1000;
console.log(a);   //first this will run 

//control comes here but as it is asnyc function it will go to next call and will run in background
fs.readFile('file1.txt',"utf-8",(err,data)=>{
    console.log("Reading from the file1 =>");  //third output
    console.log(data);//fourth output
});

let ans =0;
for (let i =0;ans<100;i++){
    ans =ans +i;
}
console.log(ans); //this will print as second output 