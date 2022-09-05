var URL = "/techwiz";
app.controller('ContactController', function ($http, $scope, $interval) {
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
    $interval(function () {
        $scope.theTime = new Date().toString();
    }, 1000);
    
    

});