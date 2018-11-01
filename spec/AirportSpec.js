'use strict';

describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport;
    plane = jasmine.createSpy('plane');
  });

  describe('.planes', function(){
    it('returns an array of planes', function(){
      airport.land(plane);
      expect(airport.planes).toEqual([plane]);
    });
  });
});
