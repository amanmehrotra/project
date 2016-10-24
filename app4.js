(function(){
	//'use strict';
	/**
	*  Module
	*
	* Description
	*/
	angular.module('CustomServiceApp', [])
	.controller('CartAddController',CartAddController)
	.controller('ShowListController',ShowListController)
	.service('ShoppingListService',ShoppingListService);
	CartAddController.$inject=['ShoppingListService'];
	ShowListController.$inject=['ShoppingListService'];

	function CartAddController(ShoppingListService){
		var addcart=this;
		addcart.itemname="";
		addcart.quantity="";
		addcart.addItem=function(){
			ShoppingListService.addItem(addcart.itemname,addcart.quantity);
			addcart.itemname="";
		addcart.quantity="";
		}
		
	}

	function ShowListController(ShoppingListService){
		var showlist=this;
		showlist.items=ShoppingListService.showItems();
		showlist.removeItem=function(itemindex){
			ShoppingListService.removeItems(itemindex);
		}
	}
	
	function ShoppingListService(){
		var service=this;
		var items=[];
		service.addItem=function(item,quan){
			var item={
				itemname:item,
				quantity:quan
			};
			items.push(item);
		}
		service.showItems=function(){
			return items;
		}
		service.removeItems=function(itemindex){
			items.splice(itemindex,1);
		}
	}
})();