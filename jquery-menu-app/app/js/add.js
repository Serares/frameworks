$(document).ready(function(){

    // buton Anulare:
    $('.btn-anulare').on('click',function(){
        window.location.pathname = '/jquery-menu-app/app/index.html';
    })
    

    // buton adaugare produs pot sa fac un fetch pentru POSTul acesta;

    var produs= {
        denumire:"",
        imagine:"",
        ingrediente:""
    }

    $('.btn-produs').on('click',function(){
        produs.denumire = $('#input-denumire').val();
        produs.imagine = $('#input-img').val();
        produs.ingrediente = $('#input-ingrediente').val();
       
        $.post('https://jquery-menu.firebaseio.com/.json',JSON.stringify(produs),function(){
            console.log('Success trimis date');
            console.log(JSON.stringify(produs));
        })

        $('#input-denumire').val('');
        $('#input-img').val('');
        $('#input-ingrediente').val('');
    })



})


// trebuie sa ii fac conditiile de postare a produsului 