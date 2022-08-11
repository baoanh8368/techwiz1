var URL = "http://localhost/techwiz";
app.controller('DosageController', function (sessionService, $scope, $interval, $http, $location) {
    
    $interval(function () {
        $scope.theTime = new Date().toString();
    }, 1000);
    
    function getVisitorCounter() {
        $http({
            url: URL + '/api/visitor/visitor.php',
            method: 'GET'
        }).then(function (res) {
            $scope.vcounter = res.data;
        });
    }
    getVisitorCounter();
    
    $scope.submit = function() {
        
        $location.path('/consultant');
    }
});