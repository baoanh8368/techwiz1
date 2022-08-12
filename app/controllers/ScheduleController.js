var URL = "http://localhost/techwiz";
app.controller('ScheduleController', function (sessionService, $scope, $interval, $http, $location) {
    
    $interval(function () {
        $scope.theTime = new Date().toString();
    }, 1000);
    
    function getVisitorCounter() {
        $http({
            url: URL + '/JSON/healthplus.json',
            method: 'GET'
        }).then(function (res) {
            res.data.visitor++;
            $scope.counts = res.data.visitor;
        });
    }
    getVisitorCounter();

    $scope.name = sessionService.get('username');
    
    
    $scope.submit = function() {
        sessionService.set('doctor', $scope.user.doc);
        sessionService.set('date', $scope.user.date);
        sessionService.set('phone', $scope.user.phone);
        sessionService.set('address', $scope.user.address);
        $location.path('/workout');
    };
});