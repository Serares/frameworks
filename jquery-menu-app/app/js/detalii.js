

$(document).ready(function(){

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }



    // functie de stergere :
    function stergere(numar){

        // creez un rand pentru lista:
        

        // mai intai trebuie sa fac un get pentru ca sa aduc datele de la produsul respectiv si apoi sa le trimit modificate;
        $.getJSON(`https://jquery-menu.firebaseio.com/${numar}.json`,function(data){
                console.log(data);
                const {imagine , denumire , ingrediente , detalii} = data;

                // creez inputuri pentru date
                var inputImagine = $('<img>', {id:'delete-imagine',src:`${imagine}`});
                var inputDenumire = $('<span>', {id:'delete-denumire'}).html(denumire);
                var inputIngrediente = $('<span>', {id:'delete-ingrediente'}).html(ingrediente);
                var inputDetalii = $('<span>', {id:'delete-detalii'}).html(detalii);
                // un meniu care popeaza sa intrebe daca chiar vrei sa stergi produsul:
                // adaugare butoanele de stergere si delete
               
                var btnRefuse = ('<div class="btn-refuse">Back</div>');
                var divButoane = $('<div>',{class:'btns-stergere'}).append(btnRefuse);
        
                // creez un div pentru inputuri
                var divInputuri = $('<div>', {class:'div-delete-inputuri'}).append(inputImagine,inputDenumire,inputIngrediente,inputDetalii,divButoane);
    
                $('.meniu-detalii').html(divInputuri);

                // pentru cazul de No ca sa inchida popup-ul:
        $('.btn-refuse').on('click',function(){
            // goleste elementul meniu stergere de butoane ca sa nu se stacheze butoanele cand se reaprinde;
            $('.meniu-stergere').empty();
            window.location = `/jquery-menu-app/app/index.html`; 
        });

        
                
            })
        
        console.log(numar);

        
        
        } // se inchide functia stergere aici;

        $('body').on('load',stergere(getParameterByName('id')));

})