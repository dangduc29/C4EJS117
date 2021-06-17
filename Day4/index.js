// // Cau 1; 1,2
// const product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'white'
// };

// for (let x in product) {
//     console.log(x);
// }

// for (let x in product) {
//     console.log(x + ': ' + product[x]);
// }
// // Cau 2
// const task = {
//     subject: 'Implement login feature',
//     createdBy: 'Hoang Ngoc Duc',
//     assignTo: 'Nguyen Phuong Nam',
//     dueDate: '2019-10-08T18:00:24+0000',
//     expectedHours: 0.5,
// };
// let { subject, dueDate, assignTo } = task;
// console.log('subject' + ": " + subject);
// console.log('dueDate' + ": " + dueDate);
// console.log('assignTo' + ": " + assignTo);
// Cau 3
// 3.1 Data type of the outermost layer is Object
// 3.2 Hits property is Array
// 3.3 
// for(let item of jobSearch.hits) {
//     console.log(item);
// }
// Câu 4;
// alert("Hi there, this is dev dictionary");
// let a = prompt("Enter a keyword");
// let items;
// let b;
// while (true) {
//     if (a == '') alert("You cannot leave it blank");
//     else if (a == undefined) break;
//     else {
//         items = dictionary[a];
//         if (items != undefined) {
//             alert(`${a}\n` + items);
//             break;
//         }
//         else {
//             while (true) {
//                 b = prompt("Update your dictionary");
//                 if (b == '') alert("You must add dictionary");
//                 else if (b == null) {
//                 let x = confirm("Do you want exit?");
//                 if (x) break;
//                 }
//                 else {
//                 dictionary[p] = b;
//                 alert("Done");
//                 break;
//                 }
//             }
//         }
//     }
//     a = prompt("Enter a keyword");
// }
//Câu 5;
let products = [
    {
        name: 'Xiaomi portable charger 20000mah',
        brand: 'Xiaomi',
        price: 428,
        color: 'White',
        category: 'Charger',
        providers: 'Phukienzero Dientuccc',
    },
    {
        name: 'VSmart Active 1',
        brand: 'VSmart',
        price: 5487,
        color: 'Black',
        category: 'Phone',
        providers: 'Tgdd Ddghn VhStore',
    },
    {
        name: 'IPhone X',
        brand: 'Apple',
        price: 21490,
        color: 'Gray',
        category: 'Phone',
        providers: 'Tgdd',
    },
    {
        name: 'Samsung Galaxy A9',
        brand: 'Samsung',
        price: 8490,
        color: 'Blue',
        category: 'Phone',
        providers: 'Tgdd',
    },
];

for (let i = 0; i < products.length; i++) {
    console.log('-------------------------------------');
    console.log(`${i + 1}.`+' Name:'+products[i].name);
    console.log('Price:'+products[i].price);
}
for (let i = 0; i < products.length; i++) {
    let p = products[i];
    console.log(`#${Number(i) + 1}` + '. ' + p.name);
    console.log('Price: ' + p.price);
}
let n = prompt('Enter the position');
let x = products[n - 1];
console.clear();
for (let items in x) {
    console.log(items + ': ' + x[items]);
}
let a = prompt('Enter your category?');
let b = a.charAt(0).toUpperCase() + a.slice(1);
console.clear();
for(let items in product){
    if(product[items].category == word){
        console.log('------------------------------');
        console.log('Name: ' + product[items].name);
        console.log('Price: ' + product[items].price);
    }
}
console.clear();
for(let items of product){
    console.log("---------------------------------");
    console.log("Name: " + items.name);
    console.log("Price: " + items.price);
    console.log('Providers: ' + items.providers);
}
let a = prompt("Enter provider");
let b = init.charAt(0).toUpperCase() + init.slice(1);
console.clear();
for (let i = 0; i < product.length; i++) {
    let listProvider = product[i].providers.split(' ');
    if (listProvider.indexOf(b) != -1) {
        console.log('-----------------------------');
        console.log('Name: ' + product[i].name);
        console.log('Brand: ' + product[i].brand);
        console.log('Price: ' + product[i].price);
        console.log('Color: ' + product[i].color);
        console.log('Category: ' + product[i].category);
        console.log('Providers: ' + product[i].providers);
    }
}

