const scrolBtn=document.getElementById("top");
window.onscroll=function(){
    scrollControl();
}

function scrollControl(){
    //document.body.scrollTop>0 safari için
    if(document.body.scrollTop>50 || document.documentElement.scrollTop>30)
    {
        scrolBtn.style.display="block";
    }else{
        scrolBtn.style.display="none";
    }
}


function scrolBtnControl(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}
