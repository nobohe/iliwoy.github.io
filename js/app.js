angular.module('iliwoy', ['ui.bootstrap']);
var CaculatorCtrl = function ($scope) {
    $scope.displayModel = 10;
    $scope.calcInput = '0';

    $scope.doCalc = function() {
        var result;
        try {
            result = eval($scope.calcInput)
            var prefix = '';
            if($scope.displayModel == 16) {
                prefix = '0x';
            } else if($scope.displayModel == 2) {
                prefix = 'b';
            }
            result = result.toString($scope.displayModel);
        } catch(ex) {
            result = ex.message;
        }
        var history = $scope.calcResult;
        if(history == null) {
            history = '';
        }
        $scope.calcResult = $scope.calcInput + prefix + result + '\r\n' + history;
    };

    $scope.keyPress = function(ev) {
        if(ev.which == 13) {
            $scope.doCalc();
        }
    };

    $scope.clear = function() {
        $scope.calcResult = '';
    }
};
