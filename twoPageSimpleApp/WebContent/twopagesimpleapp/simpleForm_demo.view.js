sap.ui.jsview("twopagesimpleapp.simpleForm_demo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf twopagesimpleapp.simpleForm_demo
	*/ 
	getControllerName : function() {
		return "twopagesimpleapp.simpleForm_demo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf twopagesimpleapp.simpleForm_demo
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Title",
			content: [
			
			]
		});
	}

});