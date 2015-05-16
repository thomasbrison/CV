'use strict';

angular.module('myCVApp.workExperience', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/work-experience', {
    templateUrl: 'work-experience/work-experience.html',
    controller: 'WorkExperienceCtrl'
  });
}])

.controller('WorkExperienceCtrl', [function() {

}]);