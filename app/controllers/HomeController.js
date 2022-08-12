var URL = "http://localhost/techwiz";
app.controller('HomeController', function (sessionService, $scope, $interval) {
    
    $interval(function () {
        $scope.theTime = new Date().toString();
    }, 1000);
    
    function getVisitorCounter() {
        $http({
            url: URL + '/JSON/healthplus.json',
            method: 'GET'
        }).then(function (res) {
            $scope.vcounter = res.data;
        });
    }
    getVisitorCounter();

});