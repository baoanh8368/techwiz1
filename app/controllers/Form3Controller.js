var URL = "http://localhost/techwiz";
app.controller('Form3Controller', function (sessionService, $scope, $interval, $http, $location) {
    
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
    
    $scope.submit = function() {
        sessionService.set('bp', $scope.user.bp);
        sessionService.set('bs', $scope.user.bs);
       
        $location.path('/dosage');
    };
});