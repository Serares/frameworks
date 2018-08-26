var vremeaActualaDiv = $('.vremea-actuala');
var prognozaDiv = $('.prognoza');
var footer = $('.footer');
var mainContainer = $('.main-container');
var inputCity = $('#input-city');
var submitBtn = $('input[value="Search"]');
var prognozaBtn = $('input[value="Forcast"]');

// pun toate datele de pe API in obiectul state (asemanator react) 
var state = {

    nume:'',
    icon: '',
    dataOra:'',
    description: '',
    temperatura: '',
    temperaturaMin: '',
    temperaturaMax: '',
    prognoza:[],
    // asta este indexul
    oraSelectata:null

};

// cererea ajax pentru vremea actuala event pe submit input 

var getAjaxVreme = function(){

    var numeOras = $(inputCity).val();
   $.get(`https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=${numeOras}`,function(data,status){
    //    folosesc varianta de jquery a lui JSON.parse()
       console.log(data,status);

        var dataCurenta = new Date();
           var ziua = dataCurenta.getDate();
           var luna = dataCurenta.getMonth()+1;
           var anul = dataCurenta.getFullYear();
           var ore = dataCurenta.getHours();
           var minute = dataCurenta.getMinutes();

           state.nume= data.name;
           state.icon= data.weather[0].icon;
           state.dataOra= ziua + '-'+ (luna < 10 ?'0'+luna:luna) + '-' + anul + '/'+ore+':'+(minute<10? '0'+minute: minute);
            state.description= data.weather[0].description;
            state.temperatura= data.main.temp;
            state.temperaturaMin= data.main.temp_min;
            state.temperaturaMax= data.main.temp_max;

       

    // toate datele pe care le pun in state le preiau si le pun intr-un string cu elemente html
       var continutVreme = `
       <div class="ziua-curenta">
       <div class="ziua-curenta-container">
       <div id="numeOras">${state.nume}</div>
       <div id="icon"><img alt="imagineZiCurenta" src="http://openweathermap.org/img/w/${state.icon}.png"}/></div>
       <div class="ora">Data ${state.dataOra}</div>
       <div id="descriere">${state.description}</div>
       <div id="temp"> Temp${state.temperatura} </div>
       <div id="tempMin">Min ${state.temperaturaMin} </div>
       <div id="tempMin"> Max ${state.temperaturaMax} </div>
       </div>
       </div>
       `;

    //    inserez datele in divul din dom
        vremeaActualaDiv.html(continutVreme);

       $(inputCity).val('');
   })

}

inputCity.keyup(function(e){

    if(e.which == 13){

        getAjaxVreme();

    }
})

submitBtn.click(getAjaxVreme)




// cerere pentru prognoza 


var cererePrognoza = function (){
    var numeOras = $(inputCity).val();

    $.get(`https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=${numeOras}`,function(data,status){

        console.log(data);
        state.prognoza = data.list;

        $.each(state.prognoza,function(index,value){
            prognozaDiv.append(`
            <div class="item-lista ${index}">
            <span id="icon"><img alt="imagine" src="http://openweathermap.org/img/w/${value.weather[0].icon}.png" /></span>
            <span id="description">${value.weather[0].description}</span>
            <span id="ora">${value.dt_txt}</span>
            <div id="temp">Temp${value.main.temp}</div>
            <span id="tempMin">Minn${value.main.temp_min}</span>
            <span id="tempMax">Max${value.main.temp_max}</span>
            </div>
            `)
            console.log(index,value.dt_txt);
        })
    })



    $(inputCity).val('');
}


$(prognozaBtn).click(cererePrognoza);







