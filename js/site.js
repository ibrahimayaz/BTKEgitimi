document.getElementById("mesaj").innerHTML = "Hello World!";



function Yaz() {
    document.getElementById("demo").innerHTML = "Merhaba BİTLİS !";
}
function ButtonControl(resim_yol) {
    document.getElementById('ampul').src = resim_yol;

    if(resim_yol=="img/acik_ampul.gif"){
        document.getElementById("mesaj").innerHTML = "AMPUL AÇIK";
    }else{
        document.getElementById("mesaj").innerHTML = "AMPUL KAPALI";
        console.log("KAPALI");
    }

    console.log("BUTONA TIKLANDI");

}

function Yazdir(){
    window.print();
}