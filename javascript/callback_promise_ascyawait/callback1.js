//simple callback function 

function elonCallback(callback){
    callback("hi elon here!!")
}

function main(){
    elonCallback(function(value){
        console.log(value);
    })
}

main();