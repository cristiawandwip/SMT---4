import {link} from './link.js';

export function ubah() {
    let id = 14;
    let data = {
      pelanggan: "update pelanggan export2",
      alamat: "update alamat export2",
      telp: '777888778228',
    };

    link.put("/pelanggan/" + id, data).then((res) => {
      console.log(res);
      let tampil = `<h1>${res.data.pesan}</h1>`;
      document.querySelector("#out").innerHTML = tampil;
    });
  }