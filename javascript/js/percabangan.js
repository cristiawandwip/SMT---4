if (true) {
    console.log("Di jalankan jika benar");
}else{
    console.log("di jalankan jika salah");
}

let nilai = 100;
let standar =60;
let baik= "LULUS";
let gagal = "TIDAK LULUS";
let batasatas=100;
let batasbawah=0;
let peringatan="Nilai salah";

if (nilai <=batasatas && nilai >= batasbawah) {
    if (nilai >=standar) {
        console.log(baik);
        
    } else {
        console.log(gagal);
        
    }
    
} else {
    console.log(peringatan);
    
}


