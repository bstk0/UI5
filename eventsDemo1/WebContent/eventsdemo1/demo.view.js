sap.ui.jsview("eventsdemo1.demo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf eventsdemo1.demo
	*/ 
	getControllerName : function() {
		return "eventsdemo1.demo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf eventsdemo1.demo
	*/ 
	createContent : function(oController) {
		
        var oList = new sap.m.List({
            headerText: "..Animals..",
			itemPress:[oController.selectEventHad,oController]

        });

		// bind the oList items to the oData collection
		oList.bindItems({
			path: "list>/names",
			template: new sap.m.StandardListItem({
				title: "{list>Name}",
				description: "{list>Place}",
				type:sap.m.ListType.Navigation
				//press:[oController.goToNextPage,oController],
	            //selectionChange:[oController.selectEventHad,oController]
			
			})
		});

        
 		return new sap.m.Page({
			title: "Title",
			content: [
			          oList
				]
		});
	}

});