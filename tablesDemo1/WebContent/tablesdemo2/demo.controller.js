sap.ui.controller("tablesdemo2.demo", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf tabledemo2.demo
*/
	onInit: function() {
		
		//var app = new sap.m.App({initialPage:"idtableSimple1"});
		var page2 = sap.ui.view({id:"idnextpage", viewName:"tablesdemo2.nextPage", type:sap.ui.core.mvc.ViewType.JS});
		app.addPage(page2);
		
        var oData = {
                "names": [{
                    id: 1,
                    Name: "Dinosaurs",
                    Place: "Mountain"
                }, {
                    id: 2,
                    Name: "Elephant",
                    Place: "Forest"
                }, {
                    id: 3,
                    Name: "Whale",
                    Place: "Sea"
                }, {
                    id: 4,
                    Name: "Duck",
                    Place: "Water"
                }, {
                    id: 5,
                    Name: "Monkey",
                    Place: "Tree"
                }]
            };
            var oModel = new sap.ui.model.json.JSONModel(oData);
            //sap.ui.getCore().setModel(oModel);
            sap.ui.getCore().setModel(oModel,"table");

	},
	
	goToNextPage : function(oEvt) {
		//debugger;
		var context = oEvt.getParameters().rowBindingContext;
		console.log(context.getObject());
		var oData = context.getObject();
		if (oData !== undefined) {
			//yourModel.setData(context.getObject());
			//yourNewPage.setModel(yourModel);
			sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(oData),"label");
			//page.setModel(new sap.ui.model.json.JSONModel(oData));
			
		}
		app.to("idnextpage");
		//No Udemy ele pega somente o nome
		//var sVal = oEvt.getParameters().rowBindingContext.getProperty("Name");
		// montou o JSON via código
		
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf tabledemo2.demo
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf tabledemo2.demo
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf tabledemo2.demo
*/
//	onExit: function() {
//
//	}

});