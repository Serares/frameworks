$(document).ready(function(){
    
//  input search:
$(document)
    .on('focus', '.minimal-input', function (event) {
    $(this).removeClass('required');
    $(this).addClass('filled');
})
    .on('blur', '.minimal-input', function (event) {
    if ($(this).val() === "") {
        $(this).addClass('required');
    }
});


    // functie ce ruleaza cerere de pe firebase si deseneaza datele in html

    function ajaxReq(){
        
        // afisare loading screen
        $('.loading-screen').css('display','block');
        var inpVal = $('#input-search').val();
        $.getJSON(`https://jquery-menu.firebaseio.com/.json`,function(data){
            
        var html = "";

            
            
            $.each(data, function(key,val){
                
                const { imagine , denumire , ingrediente } = val;
                // cauta dupa search inputul ingredientele si le afiseaza;
                console.log(ingrediente);

                if(ingrediente.indexOf(inpVal) > -1){
                    
                    var produse =`
                <div class="produs" id="${key}">
                <div class="imagine-produs">
                    <img src="${imagine}" alt="imagine" />
                </div>
                <div class="continut-produs">
                    <div class="titlu-produs"><span>Denumire: ${denumire}</span></div>
                    <div class="ingrediente"><span>Ingrediente: ${ingrediente}</span></div>
                </div>
                <div class="butoane-produs">
                <div class="container-detalii">
                    <div class="btn-detalii" data-id=${key}>Detalii</div>
                </div>
                </div>
            </div>
                `;
                    html+= produse;
                }

                
            });
           
            $('.lista-produse').html(html);

            $('.loading-screen').hide();
        })

        

    }

    $('.lista-produse').on('click','.btn-detalii',function(){
        event.stopPropagation();
        console.log(event.target);
        console.log($(this).attr('data-id'));
        var ident = $(this).attr('data-id');
        window.location = `static/detalii.html?id=${ident}`;
    })

    $('#btn-admin').on('click',function(){
        window.location = 'static/admin.html';
    })

    $('#btn-contact').on('click',function(){
        window.location = 'static/contact.html';
    })

    $('#input-search').on('keyup',function(){ajaxReq()});

    $('body').on('load',ajaxReq());
})