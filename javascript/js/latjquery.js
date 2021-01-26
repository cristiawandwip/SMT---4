// $( document ).ready(function() {
//     console.log( "siap!" );
// });

$(function() {
    $("#isi").html("<h1>Belajar Jquery</h1>");

    $("#klik").click(function (e) { 
        e.preventDefault();
        alert("Belajar JavaScript");
    });

    // $("#isi").mouseleave(function () { 
    //     alert("Mouse Leave");
    //     console.log("Mouse");
    // });

    $("#klik").blur(function (e) { 
        e.preventDefault();
        alert("Blur belajar");
    });
});