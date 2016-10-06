angular.module('my-app',[]).
	controller('mycontroller',function($scope,$filter){
		$scope.message="wassup how r u";

		$scope.showMessage=function(num){
			return num+10;
		}

		$scope.value="aman";
		$scope.namevalue="";
		$scope.totvalue=0;
		
		$scope.showvalue=function(){
			var sum=0,i;
			var text=$scope.namevalue;
			for(i=0;i<text.length;i++)
		       sum+=text.charCodeAt(i);

			$scope.totvalue=sum;
		}
		$scope.val="aman";
		$scope.upper=function(){
			var upcase=$filter('uppercase');
			$scope.val=upcase($scope.val);
		}
	});