var tl = new TimelineLite();
var toggle = true; 


const cursor = document.querySelector(".cursor");

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY -10)+"px; left: "+(e.pageX -10)+"px;")
})






function darkMode() {

    var moonIcn = document.getElementById('moonIcn');
    var sunIcn = document.getElementById('sunIcn');
    var back = document.getElementById('body');
    var text = document.getElementById('text');
    
 if(toggle){
     toggle=false;
     sunIcn.style.display ="none";
     back.style.backgroundColor="black";
     text.style.color="white";
     moonIcn.style.display ="block";
     tl.from(".moon",{
         duration:2.5,
         y:-250,
         ease:"elastic",
     })

 }else {
     toggle=true;
     moonIcn.style.display ="none";
     sunIcn.style.display ="block";
     text.style.color="black";
     back.style.backgroundColor="white";
     tl.from(".sun",{
         duration:2.5,
         y:-250,
         ease:"elastic",
     })
}
    
     
    
    
    
}

