const svg = Snap("#test");
const bigCircle = svg.circle(150, 150, 100);

const loop = function(r) {
  const newR = r===50 ? 100 : 50;
  bigCircle.animate({r:r}, 1500, function() {
    loop(newR);
  });
};

loop(50);

bigCircle.drag();

//cogwheelMachine
const cogwheelMachine = Snap("#cogwheelMachine");

const greenSwitch = cogwheelMachine.select("#greenSwitch");
greenSwitch.animate({
    cx: 38
}, 1000);

const redSwitch = cogwheelMachine.select("#redSwitch");
redSwitch.animate({
    cx: 55
}, 1000);

cogwheelMachine.drag();



//First robot
const displayMachine = Snap("#displayMachine");
const button = displayMachine.select("#button");
const upperbar = displayMachine.select("#upperbar");

upperbar.attr({
  fill: "red"
});

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
