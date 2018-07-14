// A $( document ).ready() block.
//$( document ).ready(function() {
//    console.log( "ready!" );
//});

angular.module('app', [])
	.controller('myController', function($scope, $http){
		console.log("$http",$http);
		//Levanta los datos cuando se refresca la pagina
		var refresh = function(){
		$http.get('/employees')
			.then(function(response) {
				console.log("hola, todo ok", response);
				$scope.employees = response.data;
				$scope.employee = ({});
			}, function errorCallback(response) {
				console.log("hola, todo mal!!", response);
				// called asynchronously if an error occurs
				// or server returns response with an error status.
			});
		};
		refresh();
		$scope.propertyName = 'name';
		$scope.reverse = true;

		$scope.sortBy = function(propertyName) {
    		$scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
	        $scope.propertyName = propertyName;
	  };

		//Add Employee
		$scope.addEmployee = function () {
			console.log($scope.employee);
			$http.post('/employees',$scope.employee)
			.then(function(response) {
				refresh();
				console.log("Ok ADD", response);
			}, function errorCallback(response) {
				console.log("Bad ADD", response);
				// called asynchronously if an error occurs
				// or server returns response with an error status.
			});
		}
		//Remove
		$scope.remove = function(id){
			console.log("Remove: ", id);
			$http.delete('/employees/' + id)
			.then(function(response) {
				refresh();
				console.log("Ok delete", response);
			}, function errorCallback(response) {
				console.log("BAD delete!!", response);
				// called asynchronously if an error occurs
				// or server returns response with an error status.
			});
		}
		$scope.edit = function(id){
			console.log("Edit: ", id);
			$http.get('/employees/' + id)
			.then(function(response) {
				$scope.employee = response.data;
				console.log("OK Edit RD: ", response.data);
			}, function errorCallback(response) {
				console.log("Bad edit!!", response);
				// called asynchronously if an error occurs
				// or server returns response with an error status.
			});
		}

		$scope.update = function(){
			console.log("UPDATE: ", $scope.employee);
			$http.put('/employees/' + $scope.employee._id, $scope.employee)
			.then(function(response) {
				refresh();
				console.log("OK Update", response);
			}, function errorCallback(response) {
				refresh();
				console.log("BAD Update!!", response);
				// called asynchronously if an error occurs
				// or server returns response with an error status.
			});
		}
		$scope.deselect = function(){
			$scope.employee = ({});
		}
		});
