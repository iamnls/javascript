//synchronous
// console.log("this is first");



//asychronous
// -setTimeout
// -Promise

// console.log("this is first");

// setTimeout(() => {
//     console.log("this is set time out");
    
// }, 1000);

// console.log("this is second last");
// console.log("this is last");

// for (let index = 0; index < 100; index++) {
//     console.log("time consuming task",index);
    
    
// // }
// // console.log("im bottm text");

// setTimeout(() => {
//     console.log("do someting");
    
// }, 1000);
// try {
//     let firstName = "ram"
//     let lastName="magar"
//     let fullName=firstName + lastName
//     console.log(fullName);
    
// } catch (error) {
//     console.log(err.message);   
    
// }
//promise=> reslove and reject
let promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
    //     reject("internal server error")
    resolve({
        data:{
            name : "umesh",
            email: "umesh@gmail.com"
        }
    })
        
    }, 3000);
   
    
})

promise.then((response)=>{
    console.log("response", response);
        
})
.catch((err)=>{
    console.log("error",err);
        
})
console.log(promise);


    


