//var URL = "http://localhost/techwiz";
app.controller('DosageController', function (sessionService, $scope, $interval, $http, $location) {
    
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

    $scope.number = 1;

    $scope.add = function() {

        $scope.user.med = "";
        $scope.user.fd = "";
        $scope.user.td = "";
        $scope.user.day = 0;
        $scope.user.night = 0;
        $scope.number = $scope.number + 1;
    }
    $scope.submit = function() {
        $location.path('/schedule');
    }
});