$(document).ready(function(){
        
    $(document).load(function() {
        $("#ionisation").attr('disabled', 'disabled');
        $("#acceleration").off();    
        $("#deflection").off();
        $("#evaluation").off();
    });
        
    // $('#load').click(function(){
    //    onclick = $(this).attr('onclick');
    //    $(this).attr('onclick','');
    //    showConfirm(onclick);
    //         return false;
    // });


    $("#load").click(function(){
        $("#step1").delay(10).fadeIn();
        $("#syringe").animate({left: '345px'});
        $("#square").delay(10).fadeIn();  
        $("#arrow").animate({top: '1px'});
        $("#arrow").delay(10).fadeIn();
        $("#molecule").delay(500).fadeIn();
        $("#molecule").fadeOut(6000);
        // $("#moving-molecules").delay(5500).fadeIn();
        $("#moving-molecules-1").delay(5500).fadeIn();
        $("#moving-molecules-2").delay(5500).fadeIn();
        $("#moving-molecules-3").delay(5500).fadeIn();
        $("#moving-molecules-4").delay(5500).fadeIn();
        $("#moving-molecules-5").delay(5500).fadeIn();
        $("#moving-molecules-6").delay(5500).fadeIn();
        $("#moving-molecules-7").delay(5500).fadeIn();
        $("#moving-molecules-8").delay(5500).fadeIn();
        $("#moving-molecules-9").delay(5500).fadeIn();
      
});

    $("#ionisation").click(function(){
        $("#syringe").hide();
        $("#square").hide(10);
        $("#arrow").hide(10);
        $("#molecule").fadeOut(10);
        $("#tube").hide(10);
        $("#step1").hide(10);
        $("#step2").delay(10).fadeIn();
        $("#circle").delay(10).fadeIn();
        $("#curve").delay(10).fadeIn();
        $("#ions-group").delay(10).fadeIn();
       $("#moving-molecules-1").fadeOut(10);
        $("#moving-molecules-2").fadeOut(10);
        $("#moving-molecules-3").fadeOut(10);
        $("#moving-molecules-4").fadeOut(10);
        $("#moving-molecules-5").fadeOut(10);
        $("#moving-molecules-6").fadeOut(10);
        $("#moving-molecules-7").fadeOut(10);
        $("#moving-molecules-8").fadeOut(10);
        $("#moving-molecules-9").fadeOut(10);
    });

    $("#acceleration").click(function() {
        $("#step2").hide();
        $("#circle").hide();
        $("#curve").hide();
        $("#ions-group").hide();
        $("#left-ions-group").hide();
        // $("#left-ions-group").delay(100).fadeIn();
        // $("#double-molecules-1").delay(10).hide();
        $("#double-molecules-2").hide();
        $("#double-molecules-3").hide();
        $("#double-molecules-4").hide();
        $("#double-molecules-5").hide();
        $("#double-molecules-6").hide();
        $("#double-molecules-7").hide();
        $("#double-molecules-8").hide();
        $("#double-molecules-9").hide();
        $("#molecules-group").hide();
        $("#step3").delay(10).fadeIn();
        $("#electrode").delay(10).fadeIn();
        $("#arrow-2").delay(10).fadeIn();
        $("#square-2").delay(10).fadeIn();
        });
    

    $("#deflection").click(function(){
    // $("#molecules-group").hide();
        $("#step3").hide();
        $("#electrode").hide();
        $("#arrow-2").hide();
        $("#square-2").hide();
        $("#color-lines").delay(10).fadeIn()
        $("#step4").delay(10).fadeIn();
        $("#northpole").delay(10).fadeIn();
        $("#southpole").delay(10).fadeIn();
        // $("#color_lines").delay(10).fadeIn();
    });

    $("#evaluation").click(function(){
    $("#graph").load("graph/aspirin_MS_exp9.html");
});
});


function evaluate() {
    document.getElementByElement("evaluate").style.visibility="visible";
}