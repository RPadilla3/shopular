(function() {
  'use strict';

    angular.module('shop')
      .factory('UserService', UserService);

    function UserService(){

      var userInfo = [];

      return {
        userLogin: userLogin,
        returnAll: returnAll
      };

      function userLogin(login) {
        userInfo.push({
          user: userLogin.username,
          time: Date.now()
        });
      }

      function returnAll() {
        return userInfo;
      }
    }

}());
