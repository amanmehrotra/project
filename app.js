angular.module('my-app',[]).
	controller('mycontroller',function($scope){
		$scope.message="wassup how r u";

		$scope.showMessage=function(num){
			return num+10;
		}

		$scope.value="aman";
		$scope.namevalue="";
		$scope.totvalue=0;
		
		$scope.showvalue=function(text){
			var sum=0,i;

			for(i=0;i<text.length;i++)
		       sum+=text.charCodeAt(i);

			$scope.totvalue=sum;
		}
	});