const hourE1=document.getElementById("hour");
const minuteE1=document.getElementById("minutes");
const secondE1=document.getElementById("seconds");
const ampmE1=document.getElementById("ampm");
function updateclock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s= new Date().getSeconds()
    let ampm= "AM";

    if (h >24) {
        h = h - 12;
        ampm= "PM";

    }
   h=h<10 ? "0"+h: h; /* to put 0 before hours*/ 
   m=m<10 ? "0"+m: m; /* to put 0 before minutes*/ 
   s=s<10 ? "0"+s: s; /* to put 0 before seconds*/ 
    hourE1.innerText= h;
    minuteE1.innerText= m;
    secondE1.innerText= s;
    ampmE1,(innerText= ampm);
    setTimeout(()=>{
    updateclock()
    },1000)


}
updateclock()