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

    });

    describe('Saves array of items to localStorage', function(){

      it("Should save to local storage an array of forsale items", function(){
        var standardItems = JSON.parse(localStorage.getItem("items"));
        var newItem = { 'id': 333, 'name': 'dog', 'price': 1000, 'quantity': 1, 'color': 'brown', 'discount': 0 };
        ProductService.addNew(newItem);
        var newLocalStorage = JSON.parse(localStorage.getItem('items'));
        expect(newLocalStorage.length).to.equal(13);
        expect(newLocalStorage).to.be.an('Array');
        expect(newLocalStorage[12].name).to.equal('dog');

      });

    });


  });



}());
