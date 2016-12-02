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

    it('Should have the right scope variables', function() {
      expect(ShopController.newItem).to.be.an('object');
      expect(ShopController.items).to.be.an('array');
      expect(ShopController.items.length).to.equal(12);
    });

    it('Should add items into the array of items, from the service function', function() {
      ShopController.newItem.cat = 'pet';
      var addedNewItem = {};

      ShopController.addProduct(addedNewItem);
      expect(ShopController.newItem.cat).to.equal.undefined;
    })


  })

}());
