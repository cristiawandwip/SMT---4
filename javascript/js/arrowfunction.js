let fungsi = function (nama) {
    console.log("Belajar Function " + nama);
  };
  fungsi("Rere");

let contoh = (nama) => {
    console.log("belajar function " + nama);
};
contoh("Natnat");

let tambah = function (a, b) {
    return a + b;
}
console.log(tambah(6, 6));

let plus = (a, b) => a + b;
console.log(plus(6, 6));

let hasil = (a) => a * 2;
console.log(hasil(8));

let lagi = () => console.log("coba lagi");
lagi();

let belajar = () => {
    console.log("Baris Satu");
    console.log("Baris Dua");
    console.log("Baris Tiga");
    console.log("Baris Selanjutnya");
};
belajar();

let nilai = 10;
let uji = (nilai < 7) ? ()=>predikat="gagal":()=>predikat="LULUS";
console.log(uji());