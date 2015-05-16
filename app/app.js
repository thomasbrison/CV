'use strict';

// Declare app level module which depends on views, and components
angular.module('myCVApp', [
  'ngRoute',
  'myCVApp.contact',
  'myCVApp.education',
  'myCVApp.languages',
  'myCVApp.miscellaneous',
  'myCVApp.specialSkills',
  'myCVApp.workExperience',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/education'});
}]);
