//write wrapper function for the setTimeout using promises 

//function 

function MySettimeOutfunction(duration){
    let p = new Promise (function (resolve){
        setTimeout(resolve,1000);
    });
    return p;
}

//function call
MySettimeOutfunction(1000).then(function(){
    console.log("will print after 1 second and called using promise")
})