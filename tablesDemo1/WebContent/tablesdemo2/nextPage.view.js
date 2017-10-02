sap.ui.jsview("tablesdemo2.nextPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf tablesdemo2.nextPage
	*/ 
	getControllerName : function() {
		return "tablesdemo2.nextPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf tablesdemo2.nextPage
	*/ 
	createContent : function(oController) {
		console.log("nextPage...");
		var oLabel = new sap.m.Label({
			text:"{label>/Name}"
		});
		
		var oPage = new sap.m.Page({
			title: "Second Page",
			showNavButton:true,
			navButtonPress:function() {
				app.back();
			},
			content: [
			          oLabel      	
			]
		});
		
		return oPage;
	}

});