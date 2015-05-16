'use strict';

angular.module('myCVApp.specialSkills', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/special-skills', {
    templateUrl: 'special-skills/special-skills.html',
    controller: 'SpecialSkillsCtrl'
  });
}])

.controller('SpecialSkillsCtrl', [function() {

}]);