'use strict';

angular.module('myCVApp.contact', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/contact', {
                    templateUrl: 'contact/contact.html',
                    controller: 'ContactCtrl'
                });
            }])

        .controller('ContactCtrl', ['$scope', function ($scope) {
                $scope.mobilePhone = "06.78.72.26.24";
                $scope.email = "thomas@brison.me";
                $scope.address = {
                    number: 269,
                    streetType: "rue",
                    streetName: "André Philip",
                    postalCode: "69003",
                    city: "Lyon"
                };
            }]);