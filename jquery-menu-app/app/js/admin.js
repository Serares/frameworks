$(document).ready(function(){
    // routing pe pagina principala
    $('#home-btn').on('click',function(){

        window.location.href = '/jquery-menu-app/app/index.html';

    });

    


    // leg un buton care face legatura cu ADD ;
    var buttonAdd = $('<button class="btn-add">Add Product</button>');

    $('header').append(buttonAdd);

    // routing catre pagina de adaugare
    $('.btn-add').on('click',function(){
        window.location.pathname = '/jquery-menu-app/app/static/add.html'
    })  



    // afisare produsele in admin ;
    function ajaxReq(){

        //$('.lista-produse').empty();
        $.getJSON(`https://jquery-menu.firebaseio.com/.json`,function(data){
            // poate gasesc o modalitate mai buna decat sa fac empty():
            var produse = "";

            $.each(data, function(key,val){
                
                const { imagine , denumire , ingrediente , detalii} = val;

                produse += `
                <div class="produs" id="${key}">
                <div class="imagine-produs">
                    <img src="${imagine}" alt="imagine" />
                </div>
                <div class="continut-produs">
                    <div class="titlu-produs"><span>${denumire}</span></div>
                    <div class="ingrediente"><span>${ingrediente}</span></div>
                    <div class="detalii"><span>${detalii}</span></div>
                </div>
                <div class="butoane-produs">
                            <div class="btn-stergere" data-id="${key}">Sterge</div>
                            <div class="btn-modificare" data-id=${key}>Modifica</div>
                        </div>
            </div>
                `;
            })

            
            console.log(produse);
            $('.lista-produse').html(produse);

            

        }) // aici se inchide getJSON pentru ajax get;

    } // aici se inchide ajaxReq()

    
    $('.lista-produse').on('click','.btn-modificare',function(event){
        event.stopPropagation();
        console.log(event.target);
        console.log($(this).attr('data-id'));
        var ident = $(this).attr('data-id');
        
        window.location = `modificare.html?id=${ident}`;

    })


    $('.lista-produse').on('click','.btn-stergere',function(){
        event.stopPropagation();
        console.log(event.target);
        console.log($(this).attr('data-id'));
        var ident = $(this).attr('data-id');
        window.location = `stergere.html?id=${ident}`;
    })
    

    // onload pentru aducere date;
    $('body').on('load',ajaxReq());

})