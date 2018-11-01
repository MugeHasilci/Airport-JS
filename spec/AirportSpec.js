'use strict';

describe('Airport', function(){

  var airport;
  var plane;


  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });

  describe('.planes', function() {
    describe("after a plane is landed", function() {
      it('returns an array of planes', function(){
        spyOn(airport, '_isStormy').and.returnValue(false);
        airport.land(plane);
        expect(airport.planes).toEqual([plane]);
      });
    });
  });
    describe('after plane takes off', function(){
      it('it returns and empty array', function() {
        spyOn(airport, '_isStormy').and.returnValue(false)
        airport.land(plane);
        airport.takeOff(plane);
        expect(airport.planes.length).toEqual(0);
      });
    });


    describe("._isStormy", function() {
      it('returns a weather condition', function() {
        spyOn(airport, '_isStormy').and.returnValue(true);
        expect(airport._isStormy()).toBe(true);
      });
    });

    describe('.takeoff', function() {
      describe('cannot take off when the weather is stormy', function(){
      it('throws an error if stormy', function(){
        spyOn(airport, '_isStormy').and.returnValue(false);
        airpot.land(plane);
        spyOn(airport, '_isStormy').and.returnValue('true');
        expect( function(){ airport.takeOff(); }).toThrowError('Weather is too stormy to take off');
      });
    });
  });

  describe(".land", function() {
   describe("when its stormy", function() {
     it('returns an error', function() {
       spyOn(airport, '_isStormy').and.returnValue(true);
       expect( function(){ airport.land(); } ).toThrowError('Weather is too stormy to land');
     });
   });
 });
});
