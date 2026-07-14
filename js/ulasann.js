

/* ==========================
RATING
========================== */

document.addEventListener("DOMContentLoaded", function(){

    let rating = 0;

    const stars = document.querySelectorAll(".rating-input i");

    stars.forEach((star)=>{

        star.onclick = function(){

            rating = Number(this.dataset.value);

            stars.forEach((item)=>{

                item.classList.remove("bi-star-fill","active");
                item.classList.add("bi-star");

            });

            for(let i=0;i<rating;i++){

                stars[i].classList.remove("bi-star");
                stars[i].classList.add("bi-star-fill");
                stars[i].classList.add("active");

            }

        }

    });

    const btn = document.getElementById("btnSimpan");

    btn.onclick=function(){

        let nama=document.getElementById("nama").value.trim();
        let ulasan=document.getElementById("ulasan").value.trim();

        if(nama==""){
            alert("Nama belum diisi");
            return;
        }

        if(rating==0){
            alert("Silakan berikan rating");
            return;
        }

        if(ulasan==""){
            alert("Ulasan belum diisi");
            return;
        }

        bootstrap.Modal.getInstance(
            document.getElementById("modalUlasan")
        ).hide();

        setTimeout(function(){

            const sukses = new bootstrap.Modal(
                document.getElementById("modalBerhasil")
            );

            sukses.show();

        },300);

    }

});
