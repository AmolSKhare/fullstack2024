//simple promise function 


function elonCallback(){
    let p = new Promise(function(resolve){
        console.log("hi elon here!!");
    });
    return p;
    
    
}
function main(){
    elonCallback().then(function(value){
        console.log(value);
    });
}

main();