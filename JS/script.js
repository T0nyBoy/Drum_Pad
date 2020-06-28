// SOUNDS
var sounda1 = new Howl({
    src: ['sounds/CYCdh_ElecK03-Clap02.mp3']
  });

  var sounda2 = new Howl({
    src: ['sounds/CYCdh_ElecK03-ClHat.mp3']
  });

  var sounda3 = new Howl({
    src: ['sounds/CYCdh_ElecK03-Snr01.mp3']
  });

  var soundb1 = new Howl({
    src: ['sounds/CYCdh_ElecK03-Kick01.mp3']
  });

  var soundb2 = new Howl({
    src: ['sounds/CYCdh_ElecK03-OpHat.mp3']
  });

  var soundb3 = new Howl({
    src: ['sounds/CYCdh_ElecK03-Tom02.mp3']
  });

  var soundc1 = new Howl({
    src: ['sounds/CYCdh_ElecK03-Tom03.mp3']
  });

  var soundc2 = new Howl({
    src: ['sounds/CYCdh_ElecK03-PdHat.mp3']
  });

  var soundc3 = new Howl({
    src: ['sounds/pinwheel.mp3']
  });


//Dicitonaries for each letter and ids
keypressSound={"q":sounda1,"w":sounda2,"e":sounda3,
                "a":soundb1, "s":soundb2, "d":soundb3,
                "z":soundc1, "x":soundc2, "c":soundc3};

pressMouse={"a1":sounda1,"a2":sounda2,"a3":sounda3,
                "b1":soundb1, "b2":soundb2, "b3":soundb3,
                "c1":soundc1, "c2":soundc2, "c3":soundc3};

keypressId={"q":"#a1","w":"#a2","e":"#a3",
            "a":"#b1","s":"#b2","d":"#b3",
            "z":"#c1","x":"#c2","c":"#c3"};

mouseId={"a1":"#a1","a2":"#a2","a3":"#a3",
        "b1":"#b1", "b2":"#b2", "b3":"#b3",
        "c1":"#c1", "c2":"#c2", "c3":"#c3"};


//On key press (down) event (play the sound, change colour and give outer glow)
//select from document a keydown as there is no specific entry for this
$(document).on("keydown",function(e){
    keypressSound[e.key].play();
    $(keypressId[e.key]).addClass("onPress");
});

//On key release (up) remoce the given styling
$(document).on("keyup",function(e){
    $(keypressId[e.key]).removeClass("onPress");
});


//Same code as key pressing but for mouse and touch screens
//touch start is same as mouse down or key down 
//(bit disfuncitonal as it get more than one clicks per touch with slight finger movement)
//Class is used to select item as we are targeting specific elements of DOM for inputs and not the whole document
$(".square").on("mousedown touchstart",function(){
    pressMouse[this.id].play();
    $(mouseId[this.id]).addClass("onPress");
});


//On moure/touch release we remove the assignes styling class
$(".square").on("mouseup touchend",function(){
    $(mouseId[this.id]).removeClass("onPress");
});


