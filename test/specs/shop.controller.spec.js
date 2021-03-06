(function() {
  'use strict';

  var expect = chai.expect;


  describe('ShopController', function() {
    var ShopController;
    var mockProductService = {};

    beforeEach(module('shop'));
    beforeEach(module(function($provide) {
      $provide.value('ProductService', mockProductService);
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
      expect(ShopController.items).to.be.an('array');
      expect(ShopController.items.length).to.equal(1);
    });

    it('Should add items into the array of items, from the service function', function() {
      var addedNewItem = {};
      ShopController.newItem.cat = 'pet';

      ShopController.addProduct(addedNewItem);
      expect(ShopController.newItem.cat).to.equal('pet');
    });

    it('Should require proper DataType value for Each Property', function() {
      expect(typeof(ShopController.newItem.name)).to.be.a('string');
      expect(ShopController.items[0].price).to.equal(5);

    });


  })

}());
