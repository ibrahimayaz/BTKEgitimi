const btn_kaydet=document.getElementById("btn-kaydet");
const mesaj=document.getElementById("mesaj");

btn_kaydet.addEventListener("click",function(){
    mesaj.innerHTML="Merhaba Bitlis !";
    // mesaj.classList.add("mystyle");
    // mesaj.classList.remove("mystyle");
    mesaj.classList.toggle("mystyle");
});

btn_kaydet.addEventListener("mouseover",function(){
    mesaj.innerHTML="Merhaba Tatvan !";
});

btn_kaydet.addEventListener("mouseout",function(){
    mesaj.innerHTML="Merhaba Bitlis !";
    mesaj.style.fontSize="25px";
    mesaj.style.background="red";
    mesaj.style.color="black";
});

    
