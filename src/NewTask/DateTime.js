import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }

    });

    var time = date.toLocaleTimeString();
    let weekday = date.toLocaleString(window.navigator.language,{weekday: 'long'});
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthName = monthNames[date.getMonth()];

    let dateNum = date.getDate();
    let dateEndOptions = ['th ', 'st ', 'nd ']

    if (dateNum%10 === 1) {
        var dateEnd = dateEndOptions[1];
    }
    else if (dateNum%10 === 2) {
        dateEnd = dateEndOptions[2];
    }
    else {
        dateEnd = dateEndOptions[0];
    }

    var dateFormatted = weekday + ', ' + dateNum + dateEnd + monthName

    return(
        <div style={{float:"right"}}>
            <p> </p>
            <h4 style={{fontWeight: "bold", fontSize: "16px"}}> {dateFormatted}</h4>
            <h4 style={{float:"right", fontWeight: "bold", fontSize: "16px"}}> {time.slice(0,-3)}</h4>

        </div>
    )
}

export default DateTime