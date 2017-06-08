/* global Snap */
const svg = Snap('#test');
const bigCircle = svg.circle(150, 150, 100);

const loop = function (r) {
  const newR = r === 50 ? 100 : 50;
  bigCircle.animate({
    r
  }, 1500,
  () => {
    loop(newR);
  });
};

loop(50);

bigCircle.drag();

// CogwheelMachine
const cogwheelMachine = Snap('#cogwheelMachine');
const greenSwitch = cogwheelMachine.select('#greenSwitch');

const switchLoop = function (cx) {
  const newPosition = cx === 55 ? 38 : 55;

  greenSwitch.animate({
    cx
  }, 1000,
  () => {
    switchLoop(newPosition);
  });
};

switchLoop(38);

const redSwitch = cogwheelMachine.select('#redSwitch');
redSwitch.animate({
  cx: 55
}, 1000);

const firstControl = cogwheelMachine.select('#firstControl');
firstControl.animate({
  cy: 5
}, 1000);

const thirdControl = cogwheelMachine.select('#thirdControl');
thirdControl.animate({
  cy: 20
}, 1000);

const topCogwheel = cogwheelMachine.select('#topCogwheel');
// topCogwheel.attr({
//   cx: 0,
//   cy: 0
// });

const looping = function looping() {
  const bbox = topCogwheel.getBBox();
  topCogwheel.stop().animate({
    transform: 'r25'
  }, 1000,
  () => {
    looping(bbox);
  });
};

looping();
//
// function rotating() {
//   const bbox = topCogwheel.getBBox(); // Bounding box, get coords and centre
//
//   topCogwheel.animate({
//     transform: 'r10,' + bbox.cx + ',' + bbox.cy
//   }, 1000);
// };
//
// rotating();

cogwheelMachine.drag();

// First robot
const displayMachine = Snap('#displayMachine');
// const button = displayMachine.select('#button');
const upperbar = displayMachine.select('#upperbar');

// const turn = function () {
//   const newT = r === 50 ? 100 : 50;
//   bigCircle.animate({
//     r
//   }, 1500,
//   () => {
//     loop(newR);
//   });
// }
// button.rotate(0);
// button.rotate(360);
//
// eve.on('snap.rotated.*', function() {
//     console.log(this, 'was rotated');
// });

const blink = function (fill) {
  const newColor = fill === ('#f00') ? ('#fb0') : ('#f00');

  upperbar.animate({
    fill
  }, 1000,
  () => {
    blink(newColor);
  });
};

blink();

// Upperbar.attr({
//   fill: "red"
// });

// upperbar.animate({
//       x: 50,
//       y: 50
//   }, 1000);
//

// Make the SVG dragable
displayMachine.drag();



// Snippets
// TopCogwheel.translate(0, 18);
// topCogwheel.transform(topCog);
// topCogwheel.attr({
//   cx: 123,
//   cy: 60,
// });

// topCogwheel.transform('r10');

// topCogwheel.animate({
//   transform: ('r360')
// }, 5000);

// const cogLoop = function (cx) {
//   const newTurn = cx === 55 ? 38 : 55;
//
//   greenSwitch.animate({
//     cx
//   }, 1000,
//   () => {
//     switchLoop(newPosition);
//   });
// };
//
// switchLoop(38);
