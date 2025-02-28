$('.tombol').click(function() {
    // animate content
    $('.spidey').addClass('animate_content');
    $('.dalemnya_halaman').fadeOut(100).delay(2800).fadeIn();

    setTimeout(function() {
        $('.spidey').removeClass('animate_content');
    }, 3200);

    //remove fadeIn class after 1500ms
    setTimeout(function() {
        $('.spidey').removeClass('fadeIn');
    }, 1100);

});


$('.tombol2').click(function() {
    // animate content
    $('.spidey').addClass('animate_content');
    $('.dalemnya_halaman').fadeOut(100).delay(2800).fadeIn();

    setTimeout(function() {
        $('.spidey').removeClass('animate_content');
    }, 3200);

    //remove fadeIn class after 1500ms
    setTimeout(function() {
        $('.spidey').removeClass('fadeIn');
    }, 1100);

});


$('.kehome').click(function() {
    setTimeout(function() {
        $('.home').addClass('fadeIn');
    }, 1100);

    PuterLagu();
});


$('.kehalaman2').click(function() {
    setTimeout(function() {
        $('.spidey2').addClass('fadeIn');
    }, 1100);

    JalaninTeks();
    PuterLagu();
    Ambilnama();
});

var i = 0;
var txt = "I spent thousands of nights dreaming alone, Waiting for someone to hug me, Passing through hundreds of dreams stored in my heart, Alone in the middle of the fake darkness. Thank you for being there for me, accompanying my loneliness and being a light in my darkness, I Love You";
var speed = 50;

function JalaninTeks() {
    if (i < txt.length) {
        document.getElementById("tekss").innerHTML += txt.charAt(i);
        i++;
        setTimeout(JalaninTeks, speed);
    }
};


function PuterLagu() {
    var lagu = document.getElementById("lagu");
    return lagu.paused ? lagu.play() : lagu.pause();
};

function Ambilnama() {
    var x = document.getElementById("nama").value;
    document.getElementById("tampilnama").innerHTML = x;
};