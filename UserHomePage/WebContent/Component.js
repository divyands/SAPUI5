jQuery.sap.declare("UserHomePage.WebContent.Component");

sap.ui.core.UIComponent.extend("UserHomePage.WebContent.Component", {

	createContent : function() {

		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "UserHomePage.WebContent.view.app",
			type : "JS",
			viewData : {
				component : this
			}
		});
		// Using OData model to connect against a real service
		/*
		 * var url = "/sap/hc/hph/cdw/services/restServices.xsodata"; var oModel =
		 * new sap.ui.model.odata.ODataModel(url,true);
		 * oModel.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
		 * oView.setModel(oModel);
		 */
		// done
		return oView;
	}
});