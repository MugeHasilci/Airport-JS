'use strict';

function Airport(){
  this.planes = [];
}

Airport.prototype.land = function(plane) {
  if (this._isStormy()) {
    throw new Error('Weather is too stormy to land');
  } else {
  this.planes.push(plane);
}
};

Airport.prototype.takeOff = function() {
  if (this._isStormy()) {
    throw new Error('Weather is too stormy to take off');
  } else {
    this.planes.pop();
  }
};

Airport.prototype._isStormy = function() {
  (Math.random(1) < 0.5);
};
