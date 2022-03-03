let name=prompt("Name ? ")
qs=document.getElementById("myName")
qs.innerHTML=name 
showTime()
function showTime(){

    var dt=new Date()
    var hr=dt.getHours()
    var mn=dt.getMinutes()
    var sc=dt.getSeconds()
    var dy=dt.getDay()

    if(mn<10){
        mn="0"+mn
    }
    if(sc<10){
        sc="0"+sc
    }

    var days=["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

    

    let time=document.getElementById("myClock")
    time.innerHTML=`${hr}:${mn}:${sc} ${days[dy]}`

    var renew
    renew = setInterval('showTime()', 1000);
}


    
