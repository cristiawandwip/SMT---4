import { useState } from 'react';
 import Tabel from './Tabel';

function Menu() {
  const titel = "Daftar Menu Restoran Sukses";
    const [menus] = useState(
        [
            {idmenu:28, idkategori:4, menu:"Apel Manalagi", gambar:"apel.jpg",harga:3000,},
            {idmenu:29, idkategori:4, menu:"Pisang Raja", gambar:"pisang.jpg",harga:4000,},
            {idmenu:34, idkategori:1, menu:"Nasi Padang", gambar:"nasipadang.jpg",harga:20000,},
            {idmenu:30, idkategori:1, menu:"Nasi Ayam", gambar:"nasiayam.jpg",harga:10000,},
            {idmenu:6 , idkategori:2, menu:"Es Jeruk Manis", gambar:"esjeruk.jpg",harga:3000,},
            {idmenu:9, idkategori:2, menu:"Es Teh ", gambar:"esteh.jpg",harga:2000,},
        ]
    );
    return (

      <div className="App">
        <Tabel menu={menus} titel = {titel} />
         <Tabel menu={menus.filter((data)=>(data.idkategori===4))} titel = "MENU BUAH" />
      </div>

    );
  }
  
  export default Menu;
