(function() {
  'use strict';


  var expect = chai.expect;

  describe('ProductService', function () {
    var ProductService;
    var items = [];

    console.log('service test');

    beforeEach(module('shop'));

    beforeEach(inject(function(_ProductService_){
      ProductService = _ProductService_;

    }));

    it('Should be able to get an Array of Items', function() {
      var result = ProductService.getAll();
      expect(result).to.be.an('array');
      expect(result.length).to.equal(12);
      expect(result[0].name).to.equal('widget');
      console.log(ProductService.update());

    });

    describe('Saves array of items to localStorage', function(){
      var items = [{}];


      it('Should save an array to the localStorage', function(){
        expect(JSON.parse(localStorage.getItems(items)).length).to.equal(1);
          ProductService.update();
      })
    });


  });



}());
