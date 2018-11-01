'use strict';

function Airport(){
  this.planes = [];
};

Airport.prototype.land = function(plane) {
  this.planes.push(plane);
};

Airport.prototype.takeOff = function() {
  this.planes.pop();
};
