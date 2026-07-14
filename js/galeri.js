function bukaFoto(src){

    document.getElementById("gambarPopup").src = src;

    let modal = new bootstrap.Modal(

        document.getElementById("popupGaleri")

    );

    modal.show();

}