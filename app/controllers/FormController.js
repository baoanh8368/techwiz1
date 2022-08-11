var URL = "http://localhost/techwiz";
app.controller('FormController', function (sessionService, $scope, $interval, $http) {
    
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
        sessionService.set('username', $scope.user.fn);
    }
});