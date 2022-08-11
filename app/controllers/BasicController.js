var URL = "http://localhost/techwiz";
app.controller('BasicController', function (sessionService, $scope, $interval, $http, $location) {
    
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
    
    $scope.test1 = "Xin Chao";

    $scope.submit = function() {
        sessionService.set('gender', $scope.user.gender);
        sessionService.set('age', $scope.user.age);
        sessionService.set('height', $scope.user.he);
        sessionService.set('weight', $scope.user.we);
        $location.path('/BMI');
    };
});