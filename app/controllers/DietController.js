var URL = "http://localhost/techwiz";
app.controller('DietController', function (sessionService, $scope, $interval, $http) {
    
    $interval(function () {
        $scope.theTime = new Date().toString();
    }, 1000);
    
    function getVisitorCounter() {
        $http({
            url: URL + '/JSON/healthplus.json',
            method: 'GET'
        }).then(function (res) {
            res.data.visitor++;
            $scope.vcounter = res.data.visitor;
        });
    }
    getVisitorCounter();

    $scope.name = sessionService.get('username');
    
    
    
});