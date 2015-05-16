'use strict';

angular.module('myCVApp.miscellaneous', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/miscellaneous', {
    templateUrl: 'miscellaneous/miscellaneous.html',
    controller: 'MiscellaneousCtrl'
  });
}])

.controller('MiscellaneousCtrl', [function() {

}]);