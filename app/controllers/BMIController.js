var URL = "http://localhost/techwiz";
app.controller('BMIController', function (sessionService, $scope, $interval, $http) {

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

    $scope.test = sessionService.get('gender');

    $scope.name = sessionService.get('username');

    height = sessionService.get('height') / 100;
    weight = sessionService.get('weight');
    gender = sessionService.get('gender');
    function getBMI(a, b) {
        return a / (b * b);
    }
    $scope.bmi = getBMI(weight, height);
    $scope.bmi = $scope.bmi.toFixed(2);

    if ($scope.bmi <= 18.5 && gender == "Male") {
        $scope.content = "maleobese1.png";
        $scope.bodytype = "Under Weight";
        $scope.status = "You are considered underweight if you have a BMI below 18,5.";
        $scope.risk = "Studies show that people who are underweight are at a higher risk of malnutrition, reduced immunity, infertility, osteoporosis, long-healing wounds, and complications after surgery";
    }
    else if ($scope.bmi <= 24.9 && gender == "Male") {
        $scope.content = "maleobese2.png";
        $scope.bodytype = "Normal";
        $scope.status = "You are considered to have an ideal body weight if your BMI is between 18,5 and 24,9. Keep it going !";
        $scope.risk = "Even people with a healthy BMI may be at risk for a number of health conditions. Therefore, it is important to build a healthy lifestyle through proper diet, proper exercise, and regular physicals to maintain the best possible health.";
    }
    else if ($scope.bmi <= 29.9 && gender == "Male") {
        $scope.content = "maleobese3.png";
        $scope.bodytype = "Slightly Overweight";
        $scope.status = "You are considered overweight if you have a BMI between 25 and 29,9.";
        $scope.risk = "Being overweight can increase your risk of developing type 2 diabetes, high blood pressure, cardiovascular disease, stroke, osteoarthritis, fatty liver disease, kidney disease and some cancers.";
    }
    else if ($scope.bmi <= 34.9 && gender == "Male") {
        $scope.content = "maleobese4.png";
        $scope.bodytype = "Overweight";
        $scope.status = "You are considered to be level 1 obese if you have a BMI of between 30 and 34,9.";
        $scope.risk = "Obesity can increase your risk of developing type 2 diabetes, high blood pressure, cardiovascular disease, stroke, osteoarthritis, fatty liver disease, kidney disease and some cancers.";
    }
    else if ($scope.bmi > 34.9 && gender == "Male") {
        $scope.content = "maleobese5.png";
        $scope.content = "Extremely Overweight";
        $scope.status = "You are considered to be level 2 obese if you have a BMI of 35 or higher.";
        $scope.risk = "Obesity can increase your risk of developing type 2 diabetes, high blood pressure, cardiovascular disease, stroke, osteoarthritis, fatty liver disease, kidney disease and some cancers.";
    }
    else if ($scope.bmi <= 18.5 && gender == "Female") {
        $scope.content = "femaleobese1.png";
        $scope.bodytype = "Under Weight";
        $scope.status = "You are considered underweight if you have a BMI below 18,5.";
        $scope.risk = "Studies show that people who are underweight are at a higher risk of malnutrition, reduced immunity, infertility, osteoporosis, long-healing wounds, and complications after surgery";
    }
    else if ($scope.bmi <= 24.9 && gender == "Female") {
        $scope.content = "femaleobese2.png";
        $scope.bodytype = "Normal";
        $scope.status = "You are considered to have an ideal body weight if your BMI is between 18,5 and 24,9. Keep it going !";
        $scope.risk = "Even people with a healthy BMI may be at risk for a number of health conditions. Therefore, it is important to build a healthy lifestyle through proper diet, proper exercise, and regular physicals to maintain the best possible health.";
    }
    else if ($scope.bmi <= 29.9 && gender == "Female") {
        $scope.content = "femaleobese3.png";
        $scope.bodytype = "Slightly Overweight";
        $scope.status = "You are considered overweight if you have a BMI between 25 and 29,9.";
        $scope.risk = "Being overweight can increase your risk of developing type 2 diabetes, high blood pressure, cardiovascular disease, stroke, osteoarthritis, fatty liver disease, kidney disease and some cancers.";
    }
    else if ($scope.bmi <= 34.9 && gender == "Female") {
        $scope.content = "femaleobese4.png";
        $scope.bodytype = "Overweight";
        $scope.status = "You are considered to be level 1 obese if you have a BMI of between 30 and 34,9.";
        $scope.risk = "Obesity can increase your risk of developing type 2 diabetes, high blood pressure, cardiovascular disease, stroke, osteoarthritis, fatty liver disease, kidney disease and some cancers.";
    }
    else if ($scope.bmi > 34.9 && gender == "Female") {
        $scope.content = "femaleobese5.png";
        $scope.bodytype = "Extremely Overweight";
        $scope.status = "You are considered to be level 2 obese if you have a BMI of 35 or higher.";
        $scope.risk = "Obesity can increase your risk of developing type 2 diabetes, high blood pressure, cardiovascular disease, stroke, osteoarthritis, fatty liver disease, kidney disease and some cancers.";
    }
});
