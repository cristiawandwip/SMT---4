function coba() {
    a=document.querySelector(".isi");
    a.innerHTML = "Belajar eventlistener";
    console.log("coba eventlistener");
}

//judul.addEventListener("click", coba);

// judul.onmouseover = coba;

judul.onmouseover = function () {
    console.log("Coba function anonymous");
};