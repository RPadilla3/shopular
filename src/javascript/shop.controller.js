(function() {
  'use strict';

  angular.module('shop')
    .controller('ShopController', ShopController);
    // .controller('FormController', FormController);

    ShopController.$inject = ['ProductService'];

  // ShopController Constructor
  function ShopController(ProductService){
    this.sortOrder = 'price';
    this.newItem = {};
    this.tax = 1.0575;
    this.items = ProductService.getAll();
    this.addProduct = function addProduct(product){
          ProductService.addNew(product);
    };
    this.sortCategory = function sortCategory(sortOrder){
        this.sortOrder = sortOrder;
    };
  }

}());
