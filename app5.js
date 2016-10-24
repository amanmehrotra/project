(function(){
	'use strict';
	/**
	*  Module
	*
	* Description
	*/
	angular.module('my-app', [])
		   .controller('shoppingList1Controller',shoppingList1Controller)
		   .controller('shoppingList2Controller',shoppingList2Controller)
		   .factory('ShoppingListFactory',ShoppingListFactory);

		   shoppingList1Controller.$inject=['ShoppingListFactory'];
		   shoppingList2Controller.$inject=['ShoppingListFactory'];

		   function shoppingList1Controller(ShoppingListFactory){
		   		var list1=this;
		   		list1.name="";
		   		list1.quantity="";
		   		var shoppingList=ShoppingListFactory();
		   		list1.addItem=function(){
		   			shoppingList.addItem(list1.name,list1.quantity);
		   			list1.name="";
		   		list1.quantity="";
		   		}
		   		list1.items=shoppingList.showItem();
		   		list1.removeItem=function(itemIndex){
		   			shoppingList.removeItem(itemIndex);

		   		}


		   }

		   function shoppingList2Controller(ShoppingListFactory){
		   		var list2=this;
		   		list2.name="";
		   		list2.quantity="";
		   		var shoppingList=ShoppingListFactory(3);
		   	
		   		list2.addItem=function(){
		   			try{
		   			shoppingList.addItem(list2.name,list2.quantity);
		   		list2.name="";
		   		list2.quantity="";
			   }
			   catch(e) {
			   	// statements
			   	list2.message=e.message;
			   	console.log(e);
			   }
			}
		   		list2.items=shoppingList.showItem();
		   		list2.removeItem=function(itemIndex){
		   			shoppingList.removeItem(itemIndex);
		   			list2.message=shoppingList.setErrorMessage();
		   		}


		   }
		   function ShoppingService(maxItem){
		   	var shoppingList=this;
		   	var items=[];
		   	shoppingList.addItem=function(item_name,item_quantity){
		   		if((maxItem===undefined) ||(maxItem!==undefined && maxItem>items.length)){
		   		var item={
		   			name:item_name,
		   			quantity:item_quantity
		   		};
		   		items.push(item);
		   	}
		   	else
		   	{
		   		throw new Error("Maximum Limit "+ maxItem+ " reached!!!");
		   	}
		   }
		   
		   
		   	shoppingList.showItem=function(){
		   		return items;
		   	}
		   	shoppingList.removeItem=function(itemIndex){
		   		items.splice(itemIndex,1);
		   		

		   	}
		   	shoppingList.setErrorMessage=function(){
		   	if(items.length<=maxItem){
		   		return "";
		   	}
		   }
		}

		   function ShoppingListFactory(){
		   	var factory=function(maxItem){
		   			return new ShoppingService(maxItem);
		   		
		   	}
		   	return factory;
		   }

})();