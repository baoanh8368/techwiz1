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
    $scope.name = sessionService.get('username');

    $scope.index = 1;

    $scope.add = function() {
        sessionService.set('med'+index, $scope.user.med);
        sessionService.set('fd'+index, $scope.user.fd);
        sessionService.set('td'+index, $scope.user.td);
        sessionService.set('day'+index, $scope.user.day);
        sessionService.set('night'+index, $scope.user.night);
        $scope.user.med = "";
        $scope.user.fd = "";
        $scope.user.td = "";
        $scope.user.day = 0;
        $scope.user.night = 0;
        $scope.index++;
    }
    $scope.submit = function() {
        $location.path('/schedule');
    }
});