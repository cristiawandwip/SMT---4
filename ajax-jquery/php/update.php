<?php

require_once "koneksi.php";

$data = stripslashes(file_get_contents("php://input"));
$datapelanggan = json_decode($data, true);

$idpelanggan = $datapelanggan['idpelanggan'];
$pelanggan = $datapelanggan['pelanggan'];
$alamat = $datapelanggan['alamat'];
$telp = $datapelanggan['telp'];

if (!empty($pelanggan) and !empty($alamat) and !empty($telp)) {
    $sql = "UPDATE tblpelanggan
    SET pelanggan = '$pelanggan',
     alamat = '$alamat', 
     telp = '$telp'
    WHERE idpelanggan = $idpelanggan ";

    if ($result = mysqli_query($con, $sql)) {
        echo "Data sudah di ubah !!";
    } else {
        echo "Data gagal di ubah !!";
    }
} else {
    echo "Data kosong";
}
