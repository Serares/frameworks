$(document).ready(function(){
    


    // functie ce ruleaza cerere de pe firebase si deseneaza datele in html

    function ajaxReq(){

        $.getJSON(`https://jquery-menu.firebaseio.com/.json`,function(data){
            

            console.log(data);

            $.each(data, function(key,val){
                
                const { imagine , denumire , ingrediente } = val;

                $('.lista-produse').append (`
                <div class="produs" id="${key}">
                <div class="imagine-produs">
                    <img src="${imagine}" alt="imagine" />
                </div>
                <div class="continut-produs">
                    <div class="titlu-produs"><span>${denumire}</span></div>
                    <div class="ingrediente"><span>${ingrediente}</span></div>
                </div>
                <div class="butoane-produs">
                    <div class="btn-detalii">Detalii</div>
                </div>
            </div>
                `);
            })


        })

    }

    $('#btn-admin').on('click',function(){
        window.location = 'static/admin.html';
    })


    $('body').on('load',ajaxReq());
})