//var URL = "http://localhost/techwiz";
app.controller('MeasureController', function (sessionService, $scope, $interval, $http) {
    
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
    
    var audio = new Audio('assets/audio/health.mp3');
    $scope.play = function() {
        audio.play();
    }
    function getHealth() {
        $http({
            url: URL + '/JSON/healthplus.json',
            method: 'GET'
        }).then(function (res) {
            $scope.age = res.data.age;
            $scope.gender = res.data.gender;
            $scope.height = res.data.height;
            $scope.weight = res.data.weight;
            $scope.bmi = res.data.bmi;
            $scope.heartrate = res.data.heartrate;
            $scope.bp = res.data.bp;
            $scope.bs = res.data.bs;
        });
    }
    getHealth();
});