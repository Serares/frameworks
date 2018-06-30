var journal = [];
var jurnalDB = [];
var divAlimente = document.querySelector('.alimente');
var butonAdaugare = document.querySelector('.btn1');
var inputMancare = document.querySelector('#input-mancare');



function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

addEntry(["oua prajite","masline","cafea","legume","ceafa porc","paine","ciorba perisoare"],false);
addEntry(["ceapa","penis","cafea","dovlecei"],false);
console.log(journal);

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

console.log(phi([76,9,8,10]));

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


console.log(journalEvents(journal));

// for (let event of journalEvents(journal)) {
//     console.log(event + ":", phi(tableFor(event, journal)));
//     }



// cerere pentru a aduce datele din firebase


var req = new XMLHttpRequest;

req.onreadystatechange = function(){
  if(this.status == 200 && this.readyState == 4){
      var date = JSON.parse(this.responseText);
      var html = ``;
      console.log(date);

      for(let o of date){
        jurnalDB.push(o);
      }

      console.log(jurnalDB);

      for (let event of journalEvents(jurnalDB)) {

        // inserez datele in html
         html += `
          <span>${event}  : ${phi(tableFor(event, jurnalDB))}</span>
        `;

        console.log(event + ":", phi(tableFor(event, jurnalDB)));

        }
        divAlimente.innerHTML = html;
  }
}

req.open('get','https://lista-mancare.firebaseio.com/.json');
req.send();


// post catre baza de date;

var Obiect = {"events":[],"squirrel":true};

function trimitere(){

  var obiectDeTrimis = new Obiect;
  obiectDeTrimis.events.push(String(inputMancare.value));
  


  var req2 = new XMLHttpRequest;

  req2.open('POST','https://lista-mancare.firebaseio.com/.json');
  req.send(JSON.stringify(obiect));

  

}



