/* ==========================
POPUP KONFIRMASI
========================== */

document.getElementById("btnYa").onclick = function(){

    bootstrap.Modal
    .getInstance(
        document.getElementById("modalKonfirmasi")
    )
    .hide();

    setTimeout(() => {

        new bootstrap.Modal(
            document.getElementById("modalBerhasil")
        ).show();

    }, 300);

};


/* ==========================
HALAMAN KONFIRMASI PEMBAYARAN
========================== */

document.getElementById("btnTutup").onclick = function(){

    let nama = document.getElementById("nama").value;

    localStorage.setItem(
        "namaCustomer",
        nama
    );

    window.location.href = "konfirmasi.html";

};