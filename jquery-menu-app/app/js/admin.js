$(document).ready(function(){
    // routing pe pagina principala
    $('#home-btn').on('click',function(){

        window.location.pathname = '/jquery-menu-app/app/index.html'

    })


    // leg un buton care face legatura cu ADD ;
    var buttonAdd = $('<button class="btn-add">Add Product</button>');

    $('header').append(buttonAdd);

    // routing catre pagina de adaugare
    $('.btn-add').on('click',function(){
        window.location.pathname = '/jquery-menu-app/app/static/add.html'
    })  

    // un ajax de get :

    function getAjax(){

        $.getJSON(`https://jquery-menu.firebaseio.com/.json`,function(data){
            $('.lista-produse').empty();
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
                            <div class="btn-stergere">Sterge</div>
                            <div class="btn-modificare">Modifica</div>
                        </div>
            </div>
                `);
            });
        })
    }

    // afisare produsele in admin ;
    function ajaxReq(){

        $.getJSON(`https://jquery-menu.firebaseio.com/.json`,function(data){
            
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
                            <div class="btn-stergere">Sterge</div>
                            <div class="btn-modificare">Modifica</div>
                        </div>
            </div>
                `);
            })


             // functie de stergere :
             function stergere(numar){

                $('.meniu-stergere').show();
                console.log(numar);

                // un meniu care popeaza sa intrebe daca chiar vrei sa stergi produsul:
                // adaugare butoanele de stergere si delete
                $('.meniu-stergere').append('<button class="btn-accept">Yes</button>',
                                            '<button class="btn-refuse">No</button>');

                // ajax pentru delete:

                function deleteData(){

                    $.ajax({
                        url: `https://jquery-menu.firebaseio.com/${numar}.json`,
                        type: 'DELETE',
                        success: function() {
                            // functie ajax de GET pentru ca tot codul asta este scris intr-o functie care face ajax 
                            getAjax()
                            console.log('A fost sters produsul'+numar);
                            $('.meniu-stergere').hide();
                        }
                    });

                }



                // pentru cazul de No ca sa inchida popup-ul:
                $('.btn-refuse').on('click',function(){
                    // goleste elementul meniu stergere de butoane ca sa nu se stacheze butoanele cand se reaprinde;
                    $('.meniu-stergere').empty();
                    $('.meniu-stergere').hide()
                });

                //adauga functia de stergere:
                $('.btn-accept').on('click',function(){deleteData()});
                
                } // se inchide functia stergere aici;

                // trebuie sa scriu codul aici pentru ca nu poate selecta .produs inainte sa fie creat.

            $('.produs').each(function(){
                var key = this.id;
                console.log(this)
                $(this).find('.btn-stergere').on('click',function(){stergere(key)});
            })

            // trebuie sa adaug si functia de modificare ..

            

        }) // aici se inchide getJSON pentru ajax get;

    } // aici se inchide ajaxReq()


   

    

    // onload pentru aducere date;
    $('body').on('load',ajaxReq());

})