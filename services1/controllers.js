/**
 * Created with PyCharm.
 * User: Digao
 * Date: 10/08/13
 * Time: 17:38
 * To change this template use File | Settings | File Templates.
 */
var app = angular.module('app',[]);
app.factory('ItemService',function(){
    var service = {};
    service.list = [{description:'Description',done:false,dueDate:new Date()}];
    service.save = function(edit){
        if(service.list.indexOf(edit)<0)
            service.list.push(edit);
        service.editItem = null;
    }
    service.newItem = function(){
        service.editItem = {};
    }
    service.edit = function(item){
        service.editItem = item;
    }
    return service;
});
app.controller("ListController",function($scope,ItemService){
    $scope.items = ItemService.list;
    $scope.service = ItemService;

});
app.directive("gtacReplace",function(){
    return {
        template:'<h1>Texto substituido</h1>',
        replace:true,
        link: function(scope,iEle,iAttrs){

        }
    }
})