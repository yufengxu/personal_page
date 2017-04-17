app.controller("homeController", function ($scope, $mdDialog) {
    $scope.showAboutDialog = function ($event) {
        $mdDialog.show({
            templateUrl: "partial/home/aboutDialog.html",
            clickOutsideToClose: true
        });
    };
});