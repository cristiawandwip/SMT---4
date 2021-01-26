$(document).ready(function () {

    let id="";
    let pelanggan="";
    let alamat="";
    let telp="";

    $("#submit").click(function (e) { 
        
        e.preventDefault();
        id=$("#id").val();
        pelanggan= $("#pelanggan").val();
        alamat= $("#alamat").val();
        telp= $("#telp").val();

        if (id == "") {
            insertdata();
        } else {
            updatedata();
        }

        $("#id").val("");
        $("#pelanggan").val("");
        $("#alamat").val("");
        $("#telp").val("");
    });

    $("#btn-tambah").click(function (e) {
        e.preventDefault();
    
        $("#title").html("<p>Tambah Data</p>");
    
        $("#id").val("");
        $("#pelanggan").val("");
        $("#alamat").val("");
        $("#telp").val("");
        
      });


    $("tbody").on("click",".btn-del", function () {
        let id = $(this).attr("data-id");
        if (confirm("Yakin akan menghapus ?")) {
            deletedata(id);
        }
        
    });

    $("tbody").on("click", ".btn-ubah", function () {
        let id = $(this).attr("data-id");
        $("#title").html("<p> Ubah Data </p>");
        selectupdate(id);
      });

    function selectupdate(id) {
        let idpelanggan = {
            idpelanggan : id,
         }
  
         $.ajax({
             type: "pos",
             url: "php/selectupdate.php",
             cache:false,
             data: JSON.stringify(idpelanggan),
             //dataType: "dataType",
             success: function (response) {
                 let data = JSON.parse(response);

                 $("#id").val(data.idpelanggan);
                 $("#pelanggan").val(data.pelanggan);
                 $("#alamat").val(data.alamat);
                 $("#telp").val(data.telp);

             }
         });
  
    }
    
    function selectdata() {
       $.ajax({
           type: "get",
           url: "php/select.php",
           cache:false,
           dataType: "json",
           success: function (response) {
               let out ="";
               let No=1;
              $.each(response, function (key, val) { 
                  out += `<tr>
                  <td>${No++}</td>
                  <td>${val.pelanggan}</td>
                  <td>${val.alamat}</td>
                  <td>${val.telp}</td>
                  <td><button type="button" class="btn btn-danger btn-del" data-id=${val.idpelanggan} >DEL</button></td>
                  <td><button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-warning btn-ubah" data-id=${val.idpelanggan}>
                  UBAH</></td>
                  </tr>`;
              });

              $("#isidata").html(out);
           }
       });
    }
    

    function insertdata() {
       let datapelanggan = {
           pelanggan : pelanggan,
           alamat : alamat,
           telp : telp
       }

       $.ajax({
           type: "pos",
           url: "php/insert.php",
           cache:false,
           data: JSON.stringify(datapelanggan),
           //dataType: "dataType",
           success: function (response) {
               let out = `<p>${response}</p>`
            $("#msg").html(out);
           }
       });

       selectdata();

    }

    function deletedata(id) {
        let idpelanggan = {
           idpelanggan : id
        }
 
        $.ajax({
            type: "pos",
            url: "php/delete.php",
            cache:false,
            data: JSON.stringify(idpelanggan),
            //dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`
             $("#msg").html(out);
            }
        });
 
        selectdata();
 
    }

    function updatedata() {
        let datapelanggan = {
            idpelanggan : id,
            pelanggan : pelanggan,
            alamat : alamat,
            telp : telp
        }
 
        $.ajax({
            type: "pos",
            url: "php/update.php",
            cache:false,
            data: JSON.stringify(datapelanggan),
            //dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`
             $("#msg").html(out);
            }
        });
 
        selectdata();
    }

    selectdata();
});