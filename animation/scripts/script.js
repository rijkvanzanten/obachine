const svg = Snap("#test");
const bigCircle = svg.circle(150, 150, 100);

const loop = function(r) {
  const newR = r === 50 ? 100 : 50;
  bigCircle.animate({
    r:r
  }, 1500,
  function() {
    loop(newR);
  });
};

loop(50);

bigCircle.drag();

//cogwheelMachine
const cogwheelMachine = Snap("#cogwheelMachine");
const greenSwitch = cogwheelMachine.select("#greenSwitch");

const switchLoop = function(cx) {
  const newPosition = cx === 55 ? 38 : 55;

  greenSwitch.animate({
      cx:cx
  }, 1000,
  function() {
    switchLoop(newPosition);
  });
};

switchLoop(38);

const redSwitch = cogwheelMachine.select("#redSwitch");
redSwitch.animate({
    cx: 55
}, 1000);

const firstControl = cogwheelMachine.select("#firstControl");
firstControl.animate({
    cy: 5
}, 1000);

const thirdControl = cogwheelMachine.select("#thirdControl");
thirdControl.animate({
    cy: 20
}, 1000);

const topCogwheel = cogwheelMachine.select("#topCogwheel");

// topCogwheel.translate(0, 18);
// topCogwheel.transform(topCog);

topCogwheel.animate({
  transform: "r0 100 100"
  }, 1000);

cogwheelMachine.drag();



//First robot
const displayMachine = Snap("#displayMachine");
const button = displayMachine.select("#button");
const upperbar = displayMachine.select("#upperbar");


const blink = function(fill) {
  const newColor= fill === ("#f00") ? ("#fb0") : ("#f00");

  upperbar.animate({
      fill:fill
  }, 1000,
  function() {
    blink(newColor);
  });
};

blink();

// upperbar.attr({
//   fill: "red"
// });

// upperbar.animate({
//       x: 50,
//       y: 50
//   }, 1000);
//

//Make the SVG dragable
displayMachine.drag();

//Second robot
const secondRobot = Snap("#bookRobot2");

//Make the SVG dragable
// secondRobot.drag();
