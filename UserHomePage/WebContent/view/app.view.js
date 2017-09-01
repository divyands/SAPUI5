sap.ui.jsview("UserHomePage.WebContent.view.app", {
	getControllerName : function() {
		return "UserHomePage.WebContent.view.app";
	},
	createContent : function(oController) {

		this.app = new sap.m.App();
		var master = sap.ui.xmlview("master",
				"UserHomePage.WebContent.view.Master");
		// var Detail = sap.ui.xmlview("Detail", "Demo.WebContent.view.Detail");
		master.getController().nav = this.getController();
		// Detail.getController().nav = this.getController();
		this.app.addPage(master, true);
		// this.app.addPage(Detail, false);
		return this.app;
	}

});
