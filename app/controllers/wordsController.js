/**
 * MadLibs Words
*/
(function() {
  angular.module('app').controller('wordsController', wordsController);
  
  function wordsController ($scope) {
    $scope.male_name      = 'male name'
    $scope.dirty_task     = 'Dirty task';
    $scope.obn_celeb      = 'Obnoxious celebrity';
    $scope.job_title      = 'Job title';
    $scope.celeb          = 'Celebrity';
    $scope.huge_number    = 'Huge number';
    $scope.tedious_task   = 'Tedious task';
    $scope.useless_skill  = 'Useless skill';
    $scope.adjective      = 'Adjective';
  }
})();
