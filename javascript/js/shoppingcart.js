let tblmenu = [
    {idmenu:28, idkategori:4, menu:"Apel Manalagi", gambar:"apel.jpg",harga:3000,},
    {idmenu:29, idkategori:4, menu:"Pisang Raja", gambar:"pisang.jpg",harga:4000,},
    {idmenu:34, idkategori:1, menu:"Nasi Padang", gambar:"nasipadang.jpg",harga:20000,},
    {idmenu:30, idkategori:1, menu:"Nasi Ayam", gambar:"nasiayam.jpg",harga:10000,},
    {idmenu:6 , idkategori:2, menu:"Es Jeruk", gambar:"esjeruk.jpg",harga:3000,},
    {idmenu:9, idkategori:2, menu:"Es Teh ", gambar:"esteh.jpg",harga:2000,},
    
];

let tampil = tblmenu.map(function (kolom) {
    return `
    <div class="produk-content">
    <div class="images">
      <img src="images/${kolom.gambar}" alt="" />
    </div>

    <div class="title">
      <h2>${kolom.menu}</h2>
    </div>

    <div class="harga">
      <h2>Rp.${kolom.harga}</h2>
    </div>

    <div class="btn-beli">
  <button data-idmenu=${kolom.idmenu}>Beli</button>
</div>

  </div>`;
});

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
  btnbeli[index].onclick = function () {
    //console.log(btnbeli[index].dataset["idmenu"]);
   // cart.push(btnbeli[index].dataset["idmenu"]);

    tblmenu.filter(function (a) {
      if (a.idmenu==btnbeli[index].dataset["idmenu"]) {
        cart.push(a);
        console.log(cart);
        
      }
    })
  };
}

//console.log(cart);



//console.log(tampil);