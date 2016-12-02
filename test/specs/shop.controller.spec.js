(function() {
  'use strict';

  var expect = chai.expect;


  describe('ShopController', function() {
    var ShopController;
    var mockProductService = {};

    beforeEach(module('shop'));
    beforeEach(module(function($provide) {
      $provide.value('StudentService', mockProductService);
    }));

    beforeEach(inject(function($controller) {
      mockProductService.getAll = function() {
        return [
          {name: 'rodolfo', price: 5, color: 'blue'}
        ];
      }

      mockProductService.addNew = function(product) {
        mockProductService.addNew.timesCalled++;
        mockProductService.addNew.lastArgument = product;
      };
      mockProductService.addNew.timesCalled = 0;

      ShopController = $controller('ShopController')
    }));

    it('Should use the services function to add a new item', function() {
      expect(ShopController.newItem).to.be.an('object');
    });


  })

}());
