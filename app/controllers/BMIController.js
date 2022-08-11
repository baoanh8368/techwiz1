var URL = "http://localhost/techwiz";
app.controller('BMIController', function (sessionService, $scope, $interval, $http) {
    
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

    
    $scope.name = sessionService.get('username');
    
    
});