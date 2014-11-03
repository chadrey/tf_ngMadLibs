/**
 * MadLibs Words
*/
(function () {
  'use strict';
  
  angular.module('app').controller('wordsController', wordsController);
  
  function wordsController($scope) {

    $scope.page = "input";

    
    /* Submit user input.
    ------------------------------*/
    $scope.submit = function() {
      if($scope.myForm.$valid) {
        $scope.page = "output";
      }
    }

    /* Reset user input.
    ------------------------------*/
    $scope.reset = function() {
        $scope.male_name      = "";
        $scope.dirty_task     = "";
        $scope.obn_celeb      = "";
        $scope.job_title      = "";
        $scope.celeb          = "";
        $scope.huge_number    = "";
        $scope.tedious_task   = "";
        $scope.useless_skill  = "";
        $scope.adjective      = "";
      
        $scope.page = "input";
        $scope.submitted = false;
    }
  }

  
})();
