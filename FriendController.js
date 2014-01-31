 


 app.controller('FriendController', function($scope, friendService){
    $scope.test = "Hey my angular is working"; 
     
    	friendService.getFriends().success(function(data) {
      		$scope.friends = data.results;
      		angular.forEach($scope.friends, function (friend) {
      			friend.friend_count = parseInt(friend.friend_count, 10);
      		})
      		$scope.sortOrder = false;
      		
		});

		$scope.searchText = '';

		


  });
 