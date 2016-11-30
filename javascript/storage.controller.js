(function() {
  'use strict';

  angular.module('shop')
    .controller('StorageController', StorageController);


    StorageController.$inject = ['ProductService'];

    console.log('hello');

  function StorageController() {

  }
}());
