$(document).ready(function(){
    
// valoare input search:



    // functie ce ruleaza cerere de pe firebase si deseneaza datele in html

    function ajaxReq(){
        
        // afisare loading screen
        $('.loading-screen').css('display','block');
        
        $.getJSON(`https://jquery-menu.firebaseio.com/.json`,function(data){
            
        var produse = "";

            console.log($('#input-search').val());
            
            console.log(data);
            
            $.each(data, function(key,val){
                
                const { imagine , denumire , ingrediente } = val;
                // cauta dupa search inputul ingredientele si le afiseaza;

                if($(ingrediente).filter($('#input-search').val()) > -1){

                    produse +=`
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
                `;

                }

                
            });

            $('.lista-produse').html(produse);

            $('.loading-screen').hide();
        })

        

    }



    $('#btn-admin').on('click',function(){
        window.location = 'static/admin.html';
    })

    $('#input-search').on('keypress',function(){ajaxReq()});

    $('body').on('load',ajaxReq());
})