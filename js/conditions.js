// // let willRain= true
// // let probablity = true
// // let scorchinSun = false
// //     if (willRain || scorchinSun){
// //         console.log("take umbrella");
        
// // //     }else {
// // //         console.log("no no need to take umbrella");
        
// // //     }
// // //     let conditions = [true, false];

// // //     conditions.forEach(condition => {
// // //         if (condition) {
// // //             console.log("take umbrella");
// // //         } else {
// // //             console.log("no need to take umbrella");
// // //         }
// // //     });


// // let willRain= false
// // let probablity = true
// // let scorchinSun = false
// //     if (willRain && scorchinSun){
// //         console.log("take umbrella");
        
// //     }else if (probablity){
// //         console.log("you might to take umbrella");
        
// //     }
// //     else {
// //             console.log("no need to take umbrella");
// //         }
// // // ternary operator aka shortcut of if else conditions
// // const age = 20
// // const canVote = (age >-18)?" you can vote": "you cannote voate this time"
// // console.log(canVote);

// let numbers= [1, 2 ,3, 4, 5, 6, 7, 8, 9, 10]
// let oddNumbers = []
// let evenNumbers =[]

// numbers.forEach((number)=>{
//     if (number %2 ==0){
//         evenNumbers.push(number)

//     }else{
//         oddNumbers.push(number)
//     }
// })
// console.log(oddNumbers);
// console.log(evenNumbers);


let cartItems = [
    {
        name:"ramesh",
        products:[
            {title:"watch", price:1000},
            {title:"earpod", price:500}
        ]

    },
    {
        name:"dinesh",
        products:[
            {title:"watch", price:1000},
            {title:"earpod", price:1000},
            {title:"keyboard", price:1500}
        ]
    },
    {
        name:"jenny",
        products:[
            {title:"ear-ring", price: 1000}
                   
        ]
    }
]
cartItems.forEach(person => {
    let total = person.products.reduce((acc, product) => acc + product.price, 0);
    console.log(`${person.name}'s total: ${total}`);
});


// ramesh has ordered of Rs 1500
// dinesh has ordered of Rs 3500
// jenny has ordered of Rs 1000

