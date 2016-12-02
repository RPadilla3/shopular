(function() {
  'use strict';


  var expect = chai.expect;

  describe('ProductService', function () {
    var ProductService;

    beforeEach(module('shop'));

    beforeEach(inject(function(_ProductService_){
      ProductService = _ProductService_;

    }));

    it('Should be able to get an Array of Items', function() {
      var result = ProductService.getAll();
      expect(result).to.be.an('array');

    });

  });



}());
