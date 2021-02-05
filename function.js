var Zeit;
var Rekord;
var buttonActive = false;

$("#Spielobjekt").click(function () {
  if (buttonActive == true) {
    var end = new Date().getTime();
    var dauer = end - Zeit;
    ResetPos();
    checkHighScore(dauer, Rekord);
  }
});

$("#Move").click(function () {
  console.log("clicked");
  StartTimer();
  animateDiv();
  buttonActive = true;
});

$("#Stop").click(function () {
  ResetPos();
});

$("#Reset").click(function () {
  $("#highscore").text("Highscore: ");
  Rekord = undefined;
  ResetPos();
  buttonActive = false;
});

function ResetPos() {
  var Objekt = $("#Spielobjekt");
  Objekt.stop();
  Objekt.css({
    top: "50%",
    left: "50%",
    "-ms-transform": "initial",
    transform: "initial",
  });
}

function checkHighScore(number, HighscoreZeit) {
  if (number < HighscoreZeit || HighscoreZeit == undefined) {
    $("#highscore").text("Highscore: " + number / 1000 + " Sekunden");
    Rekord = number;
  }
}
function StartTimer() {
  Zeit = new Date().getTime();
}

function makeNewPosition() {
  var h = $("#Spielfeld").height() - 50;
  var w = $("#Spielfeld").width() - 50;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];
}

function animateDiv() {
  // buttonActive = true;
  var newq = makeNewPosition();
  $("#Spielobjekt").animate({ top: newq[0], left: newq[1] }, 750, function () {
    animateDiv();
  });
}
