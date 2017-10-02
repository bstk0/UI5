sap.ui.jsview("eventsdemo1.secondPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf eventsdemo1.secondPage
	*/ 
	getControllerName : function() {
		return "eventsdemo1.secondPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf eventsdemo1.secondPage
	*/ 
	createContent : function(oController) {
		
		var oLabel = new sap.m.Label({
			text:"{label>/data}"
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