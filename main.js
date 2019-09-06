var balloon = $(".balloon");
var counter = 0;
var colors = ['#ff0080', '#80ff00', '#ff7f00', '#ffff1c', '#00c3ff', '#005ab3']

for (var i = 0; i < 12; i++) {
  var balloonCopy = balloon.clone();
  var balloon_color;
  balloonCopy.appendTo(".container");
  balloonCopy.css({
    left: i * 100
  })
  var inflatable = balloonCopy.find(".inflatable");
  balloon_color = colors[Math.floor(Math.random() * colors.length)];

  var randomDestination = 60 * Math.random();
  var randomSpeed = 4000 + Math.random() * 6000;

  inflatable.css({
    "background-color": balloon_color
  });

  balloonCopy.click(function() {
    preloadPopSound();
    // pop_sound.play();

    console.log('hi')
    $(this).remove();
    counter = counter + 1;

    $('.counter').html(counter);


    $('.counter').css({
      color: '#f8f8f8',
      fontSize: "3em"
    })
  });

  balloonCopy.animate({
    bottom: "100%",
    left: randomDestination + "%"
  }, randomSpeed);
}

balloon.remove();
// function start() {
// }

function preloadPopSound() {
  console.log('hey');
  var audio = new Audio('sound.mp3');
  audio.preload = "auto";
  // $(audio).on("loadeddata", start);
  // return audio;
  audio.play();
}
var pop_sound = preloadPopSound();
// start();
