function tampil(b) {
    a= document.querySelector("p").innerText="Belajar event Js" + b;
   // a.innerText = "Belajar event Js";
    console.log("Belajar Event Js");
    
};

judul.onclick = function () {
    //console.log("Belajar event Js menggunakan id");
    document.querySelector(".isi").innerHTML = "Belajar event Js menggunakan id";
    
};