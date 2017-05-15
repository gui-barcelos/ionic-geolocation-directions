angular.module('app').controller('AppCtrl', ['$scope', appController]);
function appController($scope) {
    var vm = this;

    $scope.map = { center: { latitude: -22.901302, longitude: -43.130975 }, zoom: 12 };

    vm.marker = {
        idKey: 1,
        latitude: -22.950711,
        longitude: -43.210659,
        options: { 
            labelContent: 'Home <br/> (Tap for directions)',
            labelClass: 'marker-label'
        },
        showWindow: true
     };

     vm.goToDirection = function(marker) {
         window.location = 'geo:' + marker.latitude + ',' + marker.longitude + ';u=35'
     };
}