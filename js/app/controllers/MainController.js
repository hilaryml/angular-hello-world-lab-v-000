function MainController($scope) {
  $scope.name = 'Hilary';
  $scope.phone = '123-456-7890';
  $scope.email = 'email@email.com';
}

angular
  .module('app')
  .controller('MainController', MainController);
