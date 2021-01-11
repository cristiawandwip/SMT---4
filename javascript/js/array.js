let coba = function () {
    return "coba function";
}

let buah =["apel","mangga","jeruk",16,coba(),
(tes = () => "Hasil return arrow function"),
function nama() {
    return "Serta mulia";
}
];
console.log(buah);
console.log(buah[2]);

for (let i in buah) {
    console.log(buah[i]);
    
}

console.log(buah[5]());
console.log(buah[6]());