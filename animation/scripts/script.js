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

//SVG robots
const firstRobot = Snap("#bookRobot");
const secondRobot = Snap("#bookRobot2");
const thirdRobot = Snap("#bookRobot3");

//First robot
const button = firstRobot.select("#button");
const upperbar = firstRobot.select("#upperbar");

upperbar.attr({
  fill: "red",
  r: 50
});

// button.animate({
//
// });

//Make the SVG dragable
firstRobot.drag();











//Second robot

//Make the SVG dragable
secondRobot.drag();

//Third robot

//Make the SVG dragable
thirdRobot.drag();
