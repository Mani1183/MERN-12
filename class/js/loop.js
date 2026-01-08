// let obj1 = {
//     name: " Manish",
//     age: 22,
//     address: {
//         city: "New Delhi",
//         country: "India"
//     }    
// };

// // let obj2 = obj1;
// // let obj2 = { ...obj1 };
// let obj2 = structuredClone(obj1);
// // let obj2 = JSON.parse(JSON.stringify(obj1));
// obj2.name = "Aman";
// obj2.age = 23;
// obj2.address.city = "Mumbai";
// console.log(obj1);
// console.log(obj2);
    


//rest operator .sum

// function sum(... args) {
//     // console.log(args);
//     let sum =0;
//     console.log(a * b);
//     for (let i=0; i< args.length; i++) {
//         sum = sum + args[i];
//     }
//     return sum;
// }
// let res = sum (1,2,3,4,5,6,7,8,9,10,11,12,13,14,15);
// // console.log(res);

function sum(a, b, ...args) {
 console.log(args);
let sum = 0;
console.log(a * b);
for (let i = 0; i < args.length; i++) {
sum = sum + args[i];
 }
return sum;
}
let res = sum(1, 2, 4, 67, 8, 89, 9, 5, 43, 5, 78, 54, 33, 6, 78, 4, 34, 78);
// console.log(res);


