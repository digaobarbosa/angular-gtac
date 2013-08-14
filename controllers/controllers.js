/**
 * Created with PyCharm.
 * User: Digao
 * Date: 10/08/13
 * Time: 17:38
 * To change this template use File | Settings | File Templates.
 */
var app = angular.module('app',[]);
app.controller("ListController",['$scope',function($scope){
    $scope.items = [{description:'Description',done:false,dueDate:new Date()}];
}]);


