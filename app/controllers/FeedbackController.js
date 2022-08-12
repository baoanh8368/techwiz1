var URL = "http://localhost/techwiz";
app.controller('FeedbackController', function (sessionService, $scope, $interval, $http, $location) {

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
    if (sessionService.get('username')) {
        $scope.name = sessionService.get('username');
    }
    else $scope.name = "";



    $scope.submit = function () {
        $location.path('/user');
    }
});