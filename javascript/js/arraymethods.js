// array -> string, number, objek, function, campuran

let nilai = [
    {nama:"Paijo", ipa:90, bahasa:70, matematika:70 },
    {nama:"Jeje", ipa:80, bahasa:90, matematika:60 },
    {nama:"Bobon", ipa:75, bahasa:70, matematika:90 },
    {nama:"Natnat", ipa:90, bahasa:80, matematika:90 },
];

let nama = [
    "paijo","jeje", "Bobon", "Natnat",
];
 //nama.push("rani","rona")

// console.log(nama.shift());

// nama.unshift("bobi", "roki");

// console.log(nama.slice(0,3));

let mapel = ['ipa','bahasa','matematika'];

//console.log(nama.concat(mapel));

//console.log(nama.concat(['ips','pkn','sejarah']));
//console.log(nama.splice(5,2)); 

// console.log(nama.pop());

//nama.splice(0,3);

// console.log(nilai[0].nama);
//console.log(nama);

// for (let index = 0; index < nama.length; index++) {
//         console.log(nama[index]);
//     }

// nama.forEach( function (a) {
//         console.log(a);
//     });

//nama.forEach(a => console.log(a));

// nilai.filter(function (a) {
//         if (a.ipa > 80) {
//             console.log(a.nama);
//         }
//     });

//console.log(nilai);

nilai.filter(a=>
    a.ipa > 80 && a.matematika > 80 ? console.log(a.nama) : null
    );