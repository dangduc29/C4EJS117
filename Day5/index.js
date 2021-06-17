// //Bài 1:
// // Câu 1
// let a = Math.random()
//     console.log(a)
// // Câu 2
// let x = [2,5,6,9,10];
// let show = x[Math.floor(Math.random() * x.length)];
// console.log (show);
// // Câu 3
// let a = {
//     1 : 'None',
//     2 : '4 legs',
//     3 : '8 legs',
//     4 : '12 legs',
// };
// while (true) {
//     let n = Number(prompt(`How many legs does a spider have?\n` + a ))
//     if (n == null || n == undefined) {
//         aler t('GoodBye!');
//         break;
//     }
//     else if(n==3){
//         alert('Bravo, you are correct');
//         break;
//     }
//     else{
//         alert('Good luck next time');
//     }
// }
// B4
// let x = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of',
//            'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team']
//            countData = {};
//            for (i=0; i < x.length; i++) {
//                c = x[i];
//                if(countData[c]){
//                    countData[c] ++;
//                }
//                else{
//                    countData[c] = 1;
//                }
//            }
// console.log(countData)
// B5
// const a = [
//     {
//         name: 'HP Envy 13aq',
//         price: 21000,
//         brand: 'HP',
//         quantity: 5,
//     },
//     {
//         name: 'Dell XPS 9370',
//         price: 30000,
//         brand: 'Dell',
//         quantity: 1,
//     },
//     {
//         name: 'Dell Inspiron 3567',
//         price: 9300,
//         brand: 'Dell',
//         quantity: 12,
//     },
//     {
//         name: 'Dell Latitude E5450',
//         price: 8600,
//         brand: 'Dell',
//         quantity: 2,
//     },

//     {
//         name: 'Asus Zenbook',
//         brand: 'Asus',
//         price: 20000,
//         quantity: 4,
//     },
//     {
//         name: 'HP Pavilion',
//         brand: 'HP',
//         price: 14000,
//         quantity: 7,
//     },
// ]

// let b = {
//     'HP': [],
//     'Dell':[],
//     'Asus':[],
// };
// for (i = 0; i < a.length; i++) {
//     let kml = a[i];
//     let brand = kml.brand;
//     b[brand].push(kml)
// }
// console.log(b)
