'use strict';

describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport;
  });

  describe('.land', function(){
    it('instructs a plane to land at an airport', function(){
      plane = jasmine.createSpy('plane');
      expect(airport.land(plane)).toEqual(plane);
    });
  });
});
