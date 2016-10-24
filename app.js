angular.module('my-app',[]).
	controller('mycontroller',mycontroller)
	.filter('custom',customFilterFactory)
	.filter('textChange',textChangeFactory);
	mycontroller.$inject=['$scope','$filter','customFilter'];
	function mycontroller($scope,$filter,customFilter){
		$scope.message="wassup how r u";

			//$scope.msg='how are you doing?';
		 
		    	//$scope.msg=customFilter($scope.msg);
		  $scope.message=function(){
		  	var msg="My name is Aman Mehrotra!!!";
		  	return msg;
		  }  	
		 $scope.changeMsg=function(){
		 	var msg="My name is Aman Mehrotra!!!";
		 	msg=customFilter(msg);
		 	return msg;
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
	};
	function customFilterFactory(){
		return function(input){
			
			input=input.replace('Aman','Utsav');
			return input;
		}
	}
	function textChangeFactory(){
		return function(input,target,replace){
			input =input || "";
			input=input.replace(target,replace);
			return input;
		}
	}