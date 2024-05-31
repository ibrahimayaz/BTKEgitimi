$(function () {
    $("#btn-tikla1").click(function () {
        $("p").hide();
    });

    $("#btn-tikla2").hover(
    function () {
        $("p").fadeOut(1000);//mouseenter
    },
    function(){
        $("p").fadeIn(1000);//mouseleave
    });
    
    $("#btn-tikla3").hover(
        function () {
            $("p").fadeToggle(1000);
        });

    $("input").focus(
        function(){
            $(this).css({
                backgroundColor:"#ccc",
                color:"#000",
                fontSize:"25px"
            });
        }
    );

    $("input[type='text']").keydown(
        function(){
            $(this).css("background-color","red");
        }
    );
    $("input[type='text']").keyup(
        function(){
            $(this).css("background-color","yellow");
            $("p.x").css(
                {
                    backgroundColor:"black",
                    color:"white",
                    fontSize:"+=25px"
                }
            );
        }
    );

    

    $("input[type='text']").change(Efekt1);

    $("#kaydir").click(Animasyon1);

    KarsilamaMesajiGoster();

    setInterval(KarsilamaMesajiGizle,5000);
});

function Efekt1(){
    $(".kutu").fadeTo(500,"0.5");
}

function Efekt2(){
    $(".kutu").slideToggle();
}

function Animasyon1(){
    $(".kutu2").animate({
        top:"0",
        zIndex:"-9999999",
        height:"+=150px",
        opacity:".1",
        width:"+=150px"
    });
}

function KarsilamaMesajiGoster(){
    $(".karsilama-mesaji").animate({
        right:0,
    });

}

function KarsilamaMesajiGizle(){
    $(".karsilama-mesaji").animate({
        right:"-154px"
    });
}