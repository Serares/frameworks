import React from 'react';
import './css/calendar.css';



// trebuie sa afiseze saptamanile de la data introdusa:
// nu trebuie sa mai afiseze peste 42 de saptamani
const Calendar = ({saptamani,zile}) => {
   
        return(
            <div className="calendar-div">
                <span>Saptamani: {saptamani}</span>
                <div>Zile: {zile}</div>
            </div>
        )

    }






export default Calendar;