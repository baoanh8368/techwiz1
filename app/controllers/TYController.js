
app.controller('TYController', function ($timeout, $location, $interval, $scope) {
    $scope.time = 5;
    $timeout(function () {
        $location.path('/');
    }, 5000);
    $interval(function () {
        $scope.time = $scope.time - 1;
    }, 1000);

});
