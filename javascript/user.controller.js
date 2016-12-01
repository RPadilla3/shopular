(function() {
  'use strict';

    angular.module('shop')
      .controller('UserController', UserController);

    UserController.$inject = ['UserService']

    function UserController(UserService){

      this.newUser = {};
      this.all = UserService.returnAll();

      function callService(login) {
        UserService.userLogin(login);
      }
    };

}());
