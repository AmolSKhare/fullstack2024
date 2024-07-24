//modified the promise1 as async await way


function elonCallback(){
    let p = new Promise(function(resolve){
        console.log("hi elon here!!");
    });
    return p;
    
    
}
async function main(){
    let value = await elonCallback()
        console.log(value);
    }


main();