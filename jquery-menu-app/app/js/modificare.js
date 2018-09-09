
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
    
    // functia de modificare ..
                
    function modificare(numar){
    
        $('.meniu-modificare').show();
        var numeProdus ="";
        // mai intai trebuie sa fac un get pentru ca sa aduc datele de la produsul respectiv si apoi sa le trimit modificate;
        $.getJSON(`https://jquery-menu.firebaseio.com/${numar}.json`,function(data){
        
                const {imagine , denumire , ingrediente , detalii} = data;
                numeProdus = denumire;
                // creez inputuri pentru date
                var inputImagine = $('<input>', {id:'modificare-imagine',val:`${imagine}`,type:'text',placeholder:'URL Imagine'});
                var inputDenumire = $('<input>', {id:'modificare-denumire',val:`${denumire}`,type:'text',placeholder:'Denumire'});
                var inputIngrediente = $('<input>', {id:'modificare-ingrediente',val:`${ingrediente}`,type:'text',placeholder:'Ingrediente'});
                var inputDetalii = $('<input>', {id:'modificare-detalii',val:`${detalii}`,type:'text',placeholder:'Detalii'});
                // creez butoane de postare modificari sau anulare;
                var btnAccept = $('<button id="btn-modificare-produs">Modifica</button>');
                var btnAnulare = $('<button id="btn-anulare-modificare">Anuleaza</button>');
                var divButoane = $('<div>',{class:'butoane-modificare'}).append(btnAccept,btnAnulare);
                
                // creez un div pentru inputuri
                var divInputuri = $('<div>', {class:'div-modificare-inputuri'}).append(inputImagine,inputDenumire,inputIngrediente,inputDetalii,divButoane);
    
                $('.meniu-modificare').html(divInputuri);
    
                // functia pentru anularea modificarii
    
            $('.meniu-modificare').on('click','#btn-anulare-modificare',function(){
                $('.meniu-modificare').empty();
                window.location = `admin.html`;
            });
    
            //adaug functia pe butonul accept
            $('.meniu-modificare').on('click','#btn-modificare-produs',function(){
                change();
            })
    
            })
    
    
            // functie pentru modificarea produsului:
            function change(){
                // selectez valoare inputurilor ;
                var inpDetaliiVal = $('#modificare-detalii').val();
                var inpDenumireVal = $('#modificare-denumire').val();
                var inpIngredienteVal = $('#modificare-ingrediente').val();
                var inpImagineVal = $('#modificare-imagine').val();
    
                var produsModificare ={
                    denumire:"",
                    imagine:"",
                    ingrediente:"",
                    detalii:""
                };
    
                produsModificare.denumire= inpDenumireVal;
                produsModificare.imagine= inpImagineVal;
                produsModificare.ingrediente= inpIngredienteVal;
                produsModificare.detalii= inpDetaliiVal;
    
                // ajax PUT pentru modificarea produsului
                $.ajax({
                    
                    url:`https://jquery-menu.firebaseio.com/${numar}.json`,
                    method:'PUT',
                    data: JSON.stringify(produsModificare),
                    success:function(){
    
                        $('.meniu-modificare').empty();
                        window.location = `admin.html`
                        alert('Produsul a fost modificat ' + numeProdus);
                    }
    
                })
    
                
            } // aici se termina functia change()
    
            
            
    
    } // aici se inchide functia modificare();
    
    
    
    $('body').on('load',modificare(getParameterByName('id')));







})
