'use strict';

angular.module('myCVApp.languages', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/languages', {
    templateUrl: 'languages/languages.html',
    controller: 'LanguagesCtrl'
  });
}])

.controller('LanguagesCtrl', [function() {

}]);