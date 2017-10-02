sap.ui.jsview("tablesdemo2.demo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf tabledemo2.demo
	*/ 
	getControllerName : function() {
		return "tablesdemo2.demo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf tabledemo2.demo
	*/ 
	createContent : function(oController) {
		
        var oPlace = new sap.m.Text({
            text: "{table>Place}"
        });
        var oId = new sap.m.Text({
            text: "{table>id}"
        });

        var oCol1 = new sap.ui.table.Column({
            label: new sap.m.Label({
                text: "Name"
            }),
            template: new sap.m.Text({
                text: "{table>Name}"
            })
        });
        var oCol2 = new sap.ui.table.Column({
            label: new sap.m.Label({
                text: "Place"
            }),
            template: new sap.m.Text({
                text: "{table>Place}"
            })
        });
        var oCol3 = new sap.ui.table.Column({
            label: new sap.m.Label({
                text: "Id"
            }),
            template: new sap.m.Text({
                text: "{table>Place}"
            })
        });




        var oTable = new sap.ui.table.Table({
            title: "Simple Table",
            columns: [
                oCol1,
                oCol2,
                oCol3
            ],
            cellClick:[oController.goToNextPage,oController]

        });


        /*        oTable.bindAggregation("items", "/names", oTableItems);*/
        oTable.bindRows("table>/names");
        //oTable.setModel(oModel);
        //oTable.placeAt('content');
        
 		return new sap.m.Page({
			title: "Table",
			content: [
			          oTable
				]
		});

	}

});