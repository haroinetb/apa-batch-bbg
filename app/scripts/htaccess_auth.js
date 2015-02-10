/*global define*/

define([], function() {
  'use strict';


      var sendAuthentication = function(xhr) {
        var user = ''; // your actual username
        var pass = ''; // your actual password
        var token = user.concat(":", pass);
        xhr.setRequestHeader('Authorization', ("Basic ".concat(btoa(token))));
      }

      return sendAuthentication;


});
