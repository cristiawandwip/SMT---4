document.querySelector("#klik").addEventListener("click", tampil);

function tampil(params) {

  let url = "js/tblmenu.json";
  fetch(url)
  .then(
      function (res) {
          return res.json();
          
      }
  )
  .then(function (data) {
      let output= "<h1> DATA MENU </h1> <table> <th>Menu</th>  <th>Harga</th>  <th>Warna</th> ";
      data.forEach(element => {
          output += `<tr>
          <td>${element.menu}</td>
          <td>${element.harga}</td>
          <td>${element.warna[0]}</td>
          </tr>`;
      });

      output += "</table>";
      document.querySelector("#isi").innerHTML= output;
  })

   
}


// let tblmenu = [ 
// {

//     "idmenu" :28,
//     "idkategori" : 4,
//     "menu" : "Apel Manalagi",
//     "harga" : 3000,
//     "warna" : ["merah","kuning","hijau"],
//     "stok" : true,
//     "keterangan" : null

// },
// {
    
//     "idmenu" :29,
//     "idkategori" : 4,
//     "menu" : "Pisang Raja",
//     "harga" : 4000,
//     "warna" : ["merah","hijau"],
//     "stok" : false,
//     "keterangan" : null

// }

// ]

// console.log(tblmenu[0].menu);
