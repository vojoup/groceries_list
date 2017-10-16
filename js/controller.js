var app3 = angular.module("app3", []);

app3.controller('gListCtrl', function($scope) {
    $scope.groceries = [
        {item: "Tomatoes", purchased: false, count: "12", metric: "pieces"},
        {item: "Potatoes", purchased: false, count: "1", metric: "kg"},
        {item: "Ham", purchased: false, count: "2", metric: "packages"},
        {item: "Eggs", purchased: false, count: "10", metric: "packages"}
    ];
    $scope.updateGrocCnt = function(){
        $scope.toBuy = [];
        for (var i = 0; i < $scope.groceries.length; i ++){
            if (!$scope.groceries[i].purchased) {
                $scope.toBuy.push($scope.groceries[i].purchased);
            }
        }
        return $scope.toBuy.length;
    };
    $scope.praise = function() {
        if ($scope.toBuy.length === 0) {
            return "Well done!";
        }
    };
    // console.log($scope.toBuy);
    $scope.getClass = function(index) {
        return $scope.groceries[index].purchased ? "blue" : "red";
    };
    $scope.addNewItem = function(newItemName, newItemCount, newItemMetric ) {
        console.log("Adding " + newItemName);
        if (!(newItemName === undefined || newItemName === "")) {
            $scope.groceries.push({
                item: newItemName, purchased: false, count: newItemCount, metric: newItemMetric
            });
            $scope.missingNewItemError = "";
            console.log(newItemName + " added to groceries list.");
        } else {
            $scope.missingNewItemError = "Enter an item.";
            console.log("Enter an item.");
        }
    };
});
