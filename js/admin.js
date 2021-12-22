const getCurrentTimeDate = () => {
    let currentTimeDate = new Date();

    var weekday = new Array(7);
    weekday[0] = "SUN";
    weekday[1] = "MON";
    weekday[2] = "TUE";
    weekday[3] = "WED";
    weekday[4] = "THU";
    weekday[5] = "FRI";
    weekday[6] = "SAT";
    
    var month = new Array();
    month[0] = "JAN";
    month[1] = "FEB";
    month[2] = "MAR";
    month[3] = "APR";
    month[4] = "May";
    month[5] = "JUN";
    month[6] = "JUL";
    month[7] = "AUG";
    month[8] = "SEP";
    month[9] = "OCT";
    month[10] = "NOV";
    month[11] = "DEC";
    
    var hours   =  currentTimeDate.getHours();

    var minutes =  currentTimeDate.getMinutes();
    minutes = minutes < 10 ? '0'+minutes : minutes;

     var AMPM = hours >= 12 ? 'PM' : 'AM';

    if(hours === 12){
        hours=12;

    }else{

        hours = hours%12;

    }

    var currentTime = `${hours}:${minutes}${AMPM}`;
    var currentDay = weekday[currentTimeDate.getDay()];

    var currentDate  = currentTimeDate.getDate();
    var currentMonth = month[currentTimeDate.getMonth()];
    var CurrentYear = currentTimeDate.getFullYear();

    var fullDate = `${currentDate} ${currentMonth} ${CurrentYear}`;

    document.getElementById("time").innerHTML = currentTime;
    document.getElementById("day").innerHTML = currentDay;
    document.getElementById("date").innerHTML = fullDate;
   
    setTimeout(getCurrentTimeDate, 500);
}
getCurrentTimeDate();