(function(){
	/**
	*  Module
	*
	* Description
	*/
	angular.module('LunchCheck', []).
			controller('LunchCheckController',LunchCheckController);
	LunchCheckController.$inject=['$scope'];
	function LunchCheckController($scope){
		$scope.data="";
		$scope.message="";
		$scope.class="";
		$scope.checkValue=function(){
			var text=$scope.data;
			var array_string=text.split(',');
			if(text==""){
				$scope.message='Please enter details first';
				$scope.class="red";
				$scope.border='red-border';
			}
			else {
				var i,sum=0;
				for(i=0;i<array_string.length;i++)
					if(array_string[i].trim()!='')
						sum++;
				if(sum<=3){
					$scope.message='Enjoy!';
					$scope.class='green';
					$scope.border='green-border';
				}
				
				else{
					$scope.message='Too much!';
					$scope.class='green';
					$scope.border='green-border';
				}
			}
		}
		
	};

})();