(function() {
  'use strict';

    angular.module('shop')
      .controller('UserController', UserController);

    UserController.$inject = ['UserService']



    function UserController(UserService){

      this.newUser = {};
      
      function callService() {
        UserService.userLogin(login);
      }
    };

}());
