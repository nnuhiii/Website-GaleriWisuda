const btn = document.getElementById("btnLanjut");

btn.addEventListener("click",function(){

let nama=document.getElementById("nama").value;

let univ=document.getElementById("universitas").value;

let tanggal=document.getElementById("tanggal").value;

if(nama==""){

alert("Nama belum diisi");

return;

}

if(univ==""){

alert("Universitas belum diisi");

return;

}

if(tanggal==""){

alert("Tanggal wisuda belum dipilih");

return;

}

/* Tutup Popup */

bootstrap.Modal.getInstance(

document.getElementById("popupData")

).hide();

/* pindah halaman */

window.location.href="detailpaket.html";

});