'use strict';

/* Controllers */

var runecasterControllers = angular.module('runecasterControllers', []);

runecasterControllers.controller('SpreadListCtrl',
    function ($scope, $http, $location) {
        $http.get('./data/spreads.json').success(function (data) {
            $scope.spreads = data;
        });

        $scope.submitQuestionForm = function () {
            $location.path('/result/' + $scope.spreadName.spread_name);
        }
    });

runecasterControllers.controller('ResultCtrl', ['$scope', '$routeParams', '$http', '$q',
    function ($scope, $routeParams, $http, $q) {
        $http.get('./data/spreads.json').success(function (data) {
            angular.forEach(data, function (value) {
                if (value['spread_name'] == $routeParams.spreadName) {
                    $scope.spread = value;
                }
            });

            if (angular.isDefined($scope.spread)) {
                var runes = {};

                var randomIntFromInterval = function (min, max) {
                    return Math.floor(Math.random() * (max - min + 1) + min);
                };

                $http.get('./data/data.json').success(function (data) {
                    angular.forEach($scope.spread["spread_cells"], function (value) {
                        var index = randomIntFromInterval(0, data['rune'].length - 1);
                        runes[value] = data['rune'].splice(index, 1);
                    });
                });

                $scope.runes = runes;
            }
        });

        $scope.showDescription = function(description) {
            $scope.runeDescription = description;
        }
    }]);
