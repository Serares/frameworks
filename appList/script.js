var journal = [];
var jurnalDB = [];
var divAlimente = document.querySelector('.alimente');
var divIndice03 = document.querySelector('.sortare-indice-peste03');
var divIndice05 = document.querySelector('.sortare-indice-peste05');
var butonAdaugare = document.querySelector('.btn1');
var inputMancare = document.querySelector('#input-mancare');
var inpTrue = document.querySelector('#adev');
var inpFalse = document.querySelector('#fals');



function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

// addEntry(["oua prajite","masline","cafea","legume","ceafa porc","paine","ciorba perisoare"],false);
// addEntry(["ceapa","penis","cafea","dovlecei"],false);


function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

console.log("phi",phi([76,9,8,10]));

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}


// console.log(journalEvents(journal));

// for (let event of journalEvents(journal)) {
//     console.log(event + ":", phi(tableFor(event, journal)));
//     }

// functie de desenare a datelor;



function trim(number, precision){
  var array = number.toString().split(".");
  array.push(array.pop().substring(0, precision));
  var trimmedNumber =  array.join(".");
  return trimmedNumber;
}

function dateInserare(info){

  var html = ``;
  var htmlInd03 = ``;
  var htmlInd05 = ``;

  for (let event of journalEvents(jurnalDB).sort()) {

    // inserez datele in html
    
    
    
    

     html += `
      <span>${event}  : ${trim((phi(tableFor(event, jurnalDB))),2)}</span>
    `;


    if(phi(tableFor(event, jurnalDB))>0.3){

      htmlInd03 += `<span>${event + " : "+ phi(tableFor(event, jurnalDB))}</span>`;
      

    }

    if(phi(tableFor(event, jurnalDB))>0.5){

      htmlInd05 += `<span>${event + " : "+ phi(tableFor(event, jurnalDB))}</span>`;
      

    }
    

    }
    

    divAlimente.innerHTML = html;
    divIndice03.innerHTML = htmlInd03;
    divIndice05.innerHTML = htmlInd05;

}


// cerere pentru a aduce datele din firebase

function cerereDB(){


  var req = new XMLHttpRequest;

req.onreadystatechange = function(){

  if(this.status == 200 && this.readyState == 4){

      var date = JSON.parse(this.responseText);
      
      console.log(date);

      for(let o in date){
        jurnalDB.push(date[o]);
      }

      // console.log(jurnalDB);

      dateInserare(date);
      
  }

}

req.open('get','https://lista-mancare.firebaseio.com/.json');
req.send();


}



// post catre baza de date;



var Obiect = {"events":[],"squirrel":true};
var squir;

function squirBool(elem,e){
  
  if(inpFalse.checked == true){
    squir = false;
  } else if(inpTrue.checked == true){
    squir = true;
  }
  
}



function trimitere(){

  var obiectDeTrimis = Object.create(Obiect);
  obiectDeTrimis.events = (inputMancare.value).split(",");
  obiectDeTrimis.squirrel = squir;

  // console.log(obiectDeTrimis);

  var req2 = new XMLHttpRequest;

  req2.open('POST','https://lista-mancare.firebaseio.com/.json');
  req2.send(JSON.stringify(obiectDeTrimis));

  cerereDB();

  inputMancare.value = "";
  inpTrue.checked = false;
  inpFalse.checked = false;

}



