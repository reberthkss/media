$(document).ready(function () {
    var scrnWth = $(window).width();
    var scrnHth = $(window).height();
    var current = false; 
    
    $("#content").css('margin-top', scrnHth);
    
    if (scrnWth > 768) {
        $("#mVideo").show();
        $("#mImg").hide();
    }
    if (scrnWth <= 768) {
        $("#mVideo").hide();
        $("#mVideo").attr('src', '');
        $("#mImg").show();
    }

    $(window).resize(function () { 
        scrnWth = $(window).width();
        scrnHth = $(window).height();
            
        $("#content").css('margin-top', scrnHth);
        

        if (scrnWth > 768 && current == false) { 
            $("#mVideo").show();
            $("#mVideo").attr('src', 'images/mainVideo.mp4');
            $("#mImg").hide();
            current = true;
        }
        if (scrnWth <= 768) {
            $("#mVideo").hide();
            $("#mVideo").attr('src', '');
            $("#mImg").show();
            current = false;
        }
    });

    $('.scrollDown').click(function (e) {
        e.preventDefault();
        
        scrnHth = $(window).height();

        $('html,body').stop().animate({'scrollTop': scrnHth}, 1000);
    });
    
    

});
