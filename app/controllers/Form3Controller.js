var URL = "http://localhost/techwiz";
app.controller('Form3Controller', function (sessionService, $scope, $interval, $http, $location) {
    
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
    
    $scope.submit = function() {
        sessionService.set('bp', $scope.user.bp);
        sessionService.set('bs', $scope.user.bs);
       
        $location.path('/dosage');
    };
});