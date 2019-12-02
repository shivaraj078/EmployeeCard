function Clock()
{
    setInterval(() => {
    var date = new Date();

    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    // var midday = "AM";

    var timeOfDay = ( hr < 12 ) ? "AM" : "PM";
    hr = ( hr > 12 ) ? hr - 12 : hr;
    hr = ( hr == 0 ) ? 12 : hr;


    min = ( min < 10 ? "0" : "" ) + min;
    sec = ( sec < 10 ? "0" : "" ) + sec;

    var time = `<h3>Vibgyor Clock</h3>
                <br>
                <h1>${hr} : ${min} : ${sec} - ${timeOfDay}</h1>`;

    

    document.getElementById("template").innerHTML = time ;
        
    }, 1000);
}
Clock();