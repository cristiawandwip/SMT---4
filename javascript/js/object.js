const objek = {
    nama : "Orang sukses",
    telp : 160603,

    buah : ["apel","jeruk","mangga"],

    coba : function () {
        return "coba function dalam objek";
    },

    boleh : true,
    "Tulis aja" : 1234,
}

console.log(objek.nama);
console.log(objek.telp);
console.log(objek.boleh);
console.log(objek.coba());
console.log(objek.buah[1]);
console.log(objek["Tulis aja"]);