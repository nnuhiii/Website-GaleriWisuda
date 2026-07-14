// =====================================
// DATA PAKET
// =====================================

const paket = [

{
    judul: "PAKET FOTO ONLY",

    harga: "Rp 350.000",

    foto: "assets/Daftar Paket/DaftarPaket1.jpeg",

    deskripsi: [

        "Didampingi fotografer profesional selama sesi pemotretan.",

        "Pengambilan foto dilakukan di 1 lokasi pilihan sesuai kebutuhan klien.",

        "Durasi foto selama 60 menit.",

        "Sudah termasuk foto sendiri dan grup (keluarga, teman, dan pasangan).",

        "Mendapatkan 30 foto pilihan hasil editing.",

        "File dikirim melalui Google Drive."

    ],

},

{
    judul: "PAKET VIDEO ONLY",

    harga: "Rp 450.000",

    foto: "assets/Daftar Paket/DaftarPaket2.jpeg",

    deskripsi: [

        "Didampingi videografer profesional.",

        "Durasi pengambilan video 60 menit.",

        "Video cinematic Full HD.",

        "Editing profesional.",

        "File dikirim melalui Google Drive."

    ],


},

{
    judul: "PAKET FOTO DAN VIDEO",

    harga: "Rp 700.000",

    foto: "assets/Daftar Paket/DaftarPaket3.jpeg",

    deskripsi: [

        "1 fotografer dan 1 videografer.",

        "Durasi sesi 90 menit.",

        "30 foto hasil editing.",

        "Video cinematic Full HD.",

        "Seluruh file dikirim melalui Google Drive."

    ],

}

];

// =====================================
// VARIABEL
// =====================================

let index = 0;

// =====================================
// MENAMPILKAN PAKET
// =====================================

function tampilkanPaket(){

    document.getElementById("judulPaket").innerHTML =
    paket[index].judul;

    document.getElementById("hargaPaket").innerHTML =
    paket[index].harga;

    document.getElementById("fotoUtama").src =
    paket[index].foto;

    // ======================
    // DESKRIPSI
    // ======================

    let isi = "";

    paket[index].deskripsi.forEach(function(item){

        isi += `<li>${item}</li>`;

    });

    document.getElementById("listPaket").innerHTML = isi;


}

// =====================================
// GANTI FOTO
// =====================================

function gantiFoto(foto){

    document.getElementById("fotoUtama").src = foto;

}

// =====================================
// NEXT PAKET
// =====================================

document.addEventListener("DOMContentLoaded", function(){

    tampilkanPaket();

    document
    .getElementById("nextPaket")
    .addEventListener("click", function(){

        index++;

        if(index >= paket.length){

            index = 0;

        }

        tampilkanPaket();

    });

});