var URL = "http://localhost/techwiz";
app.controller('BasicController', function (sessionService, $scope, $interval, $http, $location) {
    
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
        sessionService.set('gender', $scope.user.gender);
        sessionService.set('age', $scope.user.age);
        sessionService.set('height', $scope.user.he);
        sessionService.set('weight', $scope.user.we);
        $location.path('/BMI');
    };
});