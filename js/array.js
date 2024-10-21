// // // // let students=[ "ram ", "shyam", "hari" ] //this is array
// // // // console.log( students);


// // // // let student=[
// // // //     {
// // // //         name: "ramesh",
// // // //         roll: 20
// // // //     },
// // // //     {
// // // //         name: "ram",
// // // //         roll: 10
// // // //     },
// // // //     {
// // // //         name: "shyam",
// // // //         roll: 5
// // // //     }
// // // // ]
// // // // console.log(students);
// // // // console.log(student);

// // // // let cart=[
// // // //     {
// // // //         price: 20,
// // // //         qty:3
// // // //     },
// // // //     {
// // // //         price: 30,
// // // //         qty:4
// // // //     },
// // // //     {
// // // //         price: 40,
// // // //         qty:5
// // // //     }
// // // // ]
// // // //  const total= cart.reduce((acc, curr)=>
// // // // acc + curr.price * curr.qty, 0
// // // //  )
// // // //  console.log("your total is: ", total);
// // // //  let value= cart.slice(0, 3).map(e=>{
// // // //     return e.qty
// // // //  })
// // // //  console.log("this is all prices:", value);

// // // //  let courses= [
// // // //     {
// // // //         class: "mern",
// // // //         status: true
// // // //     },
// // // //     {
// // // //         class: "python",
// // // //         status: false
// // // //     },
// // // //     {
// // // //         class: "php",
// // // //         status: true
// // // //     },
// // // //     {
// // // //         class: "c++",
// // // //         status: false
// // // //     }
// // // //  ]
// // // //   let completed=[]
// // // //   let inComplete=[]
// // // //    for (let index = 0; index < courses.length; index++) {
// // // //     const element = courses[index];
// // // //     if (element.status==true) {
// // // //         completed.push(element)
// // // //         console.log(completed);
        
// // // //     } else {
        
// // // //     }
    
// // // //    }

// // // // let  fruits =["apple", "mango", "orange", "grapes"]
// // // // //  const popedFruit = fruits.pop()
// // // // //  console.log(popedFruit);
// // // // //  console.log(fruits);
// // // // const fruit1= fruits.forEach(function (fruit , index) {
// // // //     console.log(fruit, index);
    
    
// // // // })

// // // // let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// // // //  const filterNumber= numbers.filter(function (num) {
// // // //     return num> 3
    
// // // //  })
// // // //  console.log( filterNumber);

// // // //  let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8]
// // // //  const foundNumber= numbers1.find(function (num) {
// // // //     return num>2
// // // //  })
// // // //  console.log(foundNumber);

// // // //  let sentence ="there/is/elephant."
// // // //  const splitSentence= sentence.split("/")
// // // //  console.log(splitSentence);
 
 

// // // let button = document.getElementById("button")
// // // button.addEventListener("click", function () {
// // // let conf=  confirm("are you sure?")
// // // console.log(conf);

// // // })
// // let x=5;
// // let y= x++;
// // console.log(x,y);

// // let num = [1,  2,3,4]
// // let newNum= num.push(5)
// // console.log(newNum);
// // console.log(num);

// // let popNum = num.pop()
// // console.log(popNum);
// // console.log(num);

// // let str= "1,2,3,4,5"
// // let newStrt=str.split(',')
// // console.log(str);

// // let str1="6 7 8 9 10"
// // let newStrt1=str.split(',')
// // console.log(str1);

// // // loplice 
// // // splice
// // // shift

// // let countries =[
// //     {
// //         countryName: "Nepal",
// //         code :"np"
// //     },
// //     {
// //         countryName: "India",
// //         code :"in"
// //     },
// //     {
// //         countryName: "Qatra",
// //         code :"qr"
// //     },
// //     {
// //     countryName: "Qatra",
// //         code :"qr"
// //     }
// // ]

// // function findCountryCode(countryName){
// //     for (let index = 0; index < countries.length; index++) {
// //         let element = countries[index];        
// //         countryName= countryName.tolowercase().trim()
// //         if (element.countryName.tolowercase()==countryName) {
// //             console.log('country code for $(countryName)', element.code);
// //             return
// //         }

        
// //     }

// // }

// // let num2 = [1,2,3,4]
// // for (let index = 0; index < num.length; index++){
// //     const element=num[index];
// //     console.log(element);
    
// // // }
// // // //assigment theme forest for category design
// // // const students =[
// // //     {
// // //         name1 : "Ram",
// // //         paidStatus: true,
// // //         hasScholarship :false
// // //     },
// // //     {
// // //         name1 : "Shyam",
// // //         paidStatus: false,
// // //         hasScholarship :true
// // //     },
// // //     {
// // //         name1 : "Hari",
// // //         paidStatus: true,
// // //         hasScholarship :false
// // //     },
// // //     {
// // //         name1 : "Michelle",
// // //         paidStatus: false,
// // //         hasScholarship :false
        
// // //     },
// // // ]

// // // students.forEach(student=>{
// // //     if (student.paidStatus=true){
// // //         console.log('${student.name} can give exam');
        
// // //     }else{

// // //     }

// // // })

// // // const paidStudents = students.filter(student => student.paidStatus);
// // // console.log(paidStudents);


// // // student2.forEach(student=>{
// // //     if (student.paidStatus || student.hasScholarship){
// // //         console.log('${studnet.name}can give exam');
        
// // //     }else {
// // //         console.log('${student.name} cannot give exam');
        
// // //     }
// // // })

// const data=[
//     {
//         name2 : "orange",
//         scientificName : "xyz",
//         prices: [
//             {
//                 country: "nepal",
//                 price :100
//             },
//             {
//                 country: "usa",
//                 price :2
//             },
//             {
//                 country: "canada",
//                 price : 3
//             }
//         ]
//     },
//     {
//     name2 : "grapes",
//         scientificName : "xyz",
//         prices: [
//             {
//                 country: "nepal",
//                 price :200
//             },
//             {
//                 country: "usa",
//                 price :4
//             },
//             {
//                 country: "canada",
//                 price : 6
//             }
//         ]
//     }
// ]

// // data[1].prices.forEach((p)=>{
// //     console.log('price of orange is ${p.price} in ${p.country}');
    
// // })
// data[1].prices.forEach((element)=>{
//     console.log('price of orange is $(element.price) in 
// })    
 
let willRain= true
let probablity = true
let scorchinSun = false
    if (willRain || scorchinSun){
        console.log("take umbrella");
        
    }else {
        console.log("no no need to take umbrella");
        
    }
    let conditions = [true, false];

    conditions.forEach(condition => {
        if (condition) {
            console.log("take umbrella");
        } else {
            console.log("no need to take umbrella");
        }
    });
    
 


