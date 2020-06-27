// SOUNDS
var sounda1 = new Howl({
    src: ['sounds/piston-1.mp3']
  });

  var sounda2 = new Howl({
    src: ['sounds/splits.mp3']
  });

  var sounda3 = new Howl({
    src: ['sounds/ufo.mp3']
  });

  var soundb1 = new Howl({
    src: ['sounds/wipe.mp3']
  });

  var soundb2 = new Howl({
    src: ['sounds/flash-1.mp3']
  });

  var soundb3 = new Howl({
    src: ['sounds/flash-2.mp3']
  });

  var soundc1 = new Howl({
    src: ['sounds/moon.mp3']
  });

  var soundc2 = new Howl({
    src: ['sounds/flash-3.mp3']
  });

  var soundc3 = new Howl({
    src: ['sounds/pinwheel.mp3']
  });




$(document).on("keydown",function(e){
    if(e.which===81){
        $("#a1").addClass("onPress");
        sounda1.play();
    } else if (e.which===87){
        $("#a2").addClass("onPress");
        sounda2.play();
    } else if (e.which===69){
        $("#a3").addClass("onPress");
        sounda3.play();
    } else if (e.which===65){
        $("#b1").addClass("onPress");
        soundb1.play();
    } else if (e.which===83){
        $("#b2").addClass("onPress");
        soundb2.play();
    } else if (e.which===68){
        $("#b3").addClass("onPress");
        soundb3.play();
    } else if (e.which===90){
        $("#c1").addClass("onPress");
        soundc1.play();
    } else if (e.which===88){
        $("#c2").addClass("onPress");
        soundc2.play();
    } else if (e.which===67){
        $("#c3").addClass("onPress");
        soundc3.play();
    }
});

$(document).on("keyup",function(e){
    if(e.which===81){
        $("#a1").removeClass("onPress")
        } else if (e.which===87){
            $("#a2").removeClass("onPress")
        } else if (e.which===69){
            $("#a3").removeClass("onPress")
        } else if (e.which===65){
            $("#b1").removeClass("onPress")
        } else if (e.which===83){
            $("#b2").removeClass("onPress")
        } else if (e.which===68){
            $("#b3").removeClass("onPress")
        } else if (e.which===90){
            $("#c1").removeClass("onPress")
        } else if (e.which===88){
            $("#c2").removeClass("onPress")
        } else if (e.which===67){
            $("#c3").removeClass("onPress")
        }
    });


    $("#a1").on("mousedown",function(){
            $("#a1").addClass("onPress");
            sounda1.play();
        });
    $("#a2").on("mousedown",function(){
        $("#a2").addClass("onPress");
        sounda2.play();
    });
    $("#a3").on("mousedown",function(){
        $("#a3").addClass("onPress");
        sounda3.play();
    });
    $("#b1").on("mousedown",function(){
        $("#b1").addClass("onPress");
        soundb1.play();
    });
    $("#b2").on("mousedown",function(){
        $("#b2").addClass("onPress");
        soundb2.play();
    });
    $("#b3").on("mousedown",function(){
        $("#b3").addClass("onPress");
        soundb3.play();
    });
    $("#c1").on("mousedown",function(){
        $("#c1").addClass("onPress");
        soundc1.play();
    });
    $("#c2").on("mousedown",function(){
        $("#c2").addClass("onPress");
        soundc2.play();
    });
    $("#c3").on("mousedown",function(){
        $("#c3").addClass("onPress");
        soundc3.play();
    });
    

$("#a1").on("mouseup",function(){
    $("#a1").removeClass("onPress");
});

$("#a2").on("mouseup",function(){
    $("#a2").removeClass("onPress");
});

$("#a3").on("mouseup",function(){
    $("#a3").removeClass("onPress");
});

$("#b1").on("mouseup",function(){
    $("#b1").removeClass("onPress");
});

$("#b2").on("mouseup",function(){
    $("#b2").removeClass("onPress");
});

$("#b3").on("mouseup",function(){
    $("#b3").removeClass("onPress");
});

$("#c1").on("mouseup",function(){
    $("#c1").removeClass("onPress");
});

$("#c2").on("mouseup",function(){
    $("#c2").removeClass("onPress");
});

$("#c3").on("mouseup",function(){
    $("#c3").removeClass("onPress");
});
