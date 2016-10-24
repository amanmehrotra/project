(function(){
	/**
	*  Module
	*
	* Description
	*/
	angular.module('ng_repeat_app', []).
	controller('ngrepeatController',ngrepeatController);
	ngrepeatController.$inject=['$scope'];
	
	function ngrepeatController($scope){
		/*var shoppingList=[
						{
							name:'milk',
							quantity:2
						},
						{
							name:'burger',
							quantity:4
						},
						{
							name:'pizza',
							quantity:5
						},
						{
							name:'apple',
							quantity:1
						},
						{
							name:'egg',
							quantity:12
						}
					];
		$scope.shoppingList=shoppingList;

	$scope.addItem=function(){
		 if($scope.itemname.trim()!='' && $scope.quantity!=undefined){
			var item={
				name:$scope.itemname,
				quantity:$scope.quantity
			};
			$scope.shoppingList.push(item);
		}
		}*/

		var details=[
						{
							name:'aman',
							email:'amanmehrotra112@gmail.com',
							phone:8009614823
						},
						{
							name:'aman',
							email:'amanmehrotra56@rediffmail.com',
							phone:8765508149
						},
						{
							name:'utsav',
							email:'utsav.meharotra@gmail.com',
							phone:9051998686
						},
						{
							name:'rohit',
							email:'rohit_chandra@gmail.com',
							phone:9369455951
						},
						{
							name:'sohan',
							email:'sohan420@hotmail.com',
							phone:9765145245
						}
					];
			$scope.details=details;
			
			$scope.searchfunc=function(detail){
				if($scope.search==undefined)
					return true;
				if(((detail.name.toLowerCase()).indexOf($scope.search.toLowerCase())!=-1)||((detail.phone.toString()).indexOf($scope.search.toString())!=-1))
					return true;
				return false;
			};
	}
	 
})();