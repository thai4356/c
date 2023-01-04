let app = angular.module("myApp", []);


app.controller("secondController", secondController);
function secondController($scope){
    let products = [
        {name:"Lamborghini", price: Math.floor((Math.random() * 900000000) + 1000000),DOP: new Date('12/02/2000'),ED:new Date()},
        {name:"Ferrari", price: Math.floor((Math.random() * 900000000) + 1000000),DOP: new Date('12/03/2000'),ED:new Date()},
        {name:"Nissan", price: Math.floor((Math.random() * 900000000) + 1000000),DOP: new Date('12/04/2000'),ED:new Date()},
        {name:"Mc Lauren", price: Math.floor((Math.random() * 900000000) + 1000000),DOP: new Date('12/05/2000'),ED:new Date()},
        {name:"Lotus", price: Math.floor((Math.random() * 900000000) + 1000000),DOP: new Date('12/02/2000'),ED:new Date()},
        {name:"Mitsubishi", price: Math.floor((Math.random() * 900000000) + 1000000),DOP: new Date('12/03/2000'),ED:new Date()},
        {name:"Toyota", price: Math.floor((Math.random() * 900000000) + 1000000),DOP: new Date('12/04/2000'),ED:new Date()},
        {name:"Audi", price: Math.floor((Math.random() * 900000000) + 1000000),DOP: new Date('12/05/2000'),ED:new Date()},
        {name:"Mercedes", price: Math.floor((Math.random() * 900000000) + 1000000),DOP: new Date('12/02/2000'),ED:new Date()},
        {name:"Porshche", price: Math.floor((Math.random() * 900000000) + 1000000),DOP: new Date('12/03/2000'),ED:new Date()},
        {name:"Cadilac", price: Math.floor((Math.random() * 900000000) + 1000000),DOP: new Date('12/04/2000'),ED:new Date()},
        {name:"BMW", price: Math.floor((Math.random() * 900000000) + 1000000),DOP: new Date('12/05/2000'),ED:new Date()},
        {name:"Vins", price: Math.floor((Math.random() * 900000000) + 1000000),DOP: new Date('12/02/2000'),ED:new Date()},
        {name:"RollRoyce", price: Math.floor((Math.random() * 900000000) + 1000000),DOP: new Date('12/03/2000'),ED:new Date()},
        {name:"Tesla", price: Math.floor((Math.random() * 900000000) + 1000000),DOP: new Date('12/04/2000'),ED:new Date()},
        {name:"Lexus", price: Math.floor((Math.random() * 900000000) + 1000000),DOP: new Date('12/05/2000'),ED:new Date()},
        {name:"Honda", price: Math.floor((Math.random() * 900000000) + 1000000),DOP: new Date('12/02/2000'),ED:new Date()},
        {name:" Chevrolet", price: Math.floor((Math.random() * 900000000) + 1000000),DOP: new Date('12/03/2000'),ED:new Date()},
        {name:"Ford", price: Math.floor((Math.random() * 900000000) + 1000000),DOP: new Date('12/04/2000'),ED:new Date()},
        {name:"Volkswagen", price: Math.floor((Math.random() * 900000000) + 1000000),DOP: new Date('12/05/2000'),ED:new Date()},
    ];
    let limitRow = 10;
    let offsetRow = 0;
    $scope.products = products;
    $scope.nextPage = function (){
        offsetRow = limitRow + offsetRow ;
        $scope.offsetRow = offsetRow;
    }
    $scope.prevPage = function (){
        if(offsetRow > 0){
            offsetRow = offsetRow - limitRow;
        }else{
            offsetRow = offsetRow
        }
        $scope.offsetRow = offsetRow;
    }
    $scope.limitRow = limitRow;
    $scope.offsetRow = offsetRow;
}


app.controller('thirdController', function ($scope, $http){
    $http.get("./json.json").then(function (response){
        $scope.products = response.data;
    })
});
