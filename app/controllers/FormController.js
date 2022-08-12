var URL = "http://localhost/techwiz";
app.controller('FormController', function (sessionService, $scope, $interval, $http, $location) {
    
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
    
    $scope.submit = function() {
        sessionService.set('username', $scope.user.fn);
        $location.path('/basic');
    }
});