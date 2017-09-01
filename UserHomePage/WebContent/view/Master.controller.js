sap.ui.define([ 'jquery.sap.global', 'sap/ui/core/mvc/Controller',
		'sap/m/Popover', 'sap/m/Button', 'sap/ui/core/Fragment' ], function(
		jQuery, Controller, Popover, Button, Fragment) {
	"use strict";
	return Controller.extend("UserHomePage.WebContent.view.Master", {
		onInit : function(oEvent) {

		},
		onAfterRendering : function() {

		},
		onSideNavButtonPress : function() {
			var viewId = this.getView().getId();
			var toolPage = sap.ui.getCore().byId(viewId + "--toolPage");
			var sideExpanded = toolPage.getSideExpanded();

			this._setToggleButtonTooltip(sideExpanded);

			toolPage.setSideExpanded(!toolPage.getSideExpanded());
		},
		_setToggleButtonTooltip : function(bLarge) {
			var toggleButton = this.getView()
					.byId('sideNavigationToggleButton');
			if (bLarge) {
				toggleButton.setTooltip('Large Size Navigation');
			} else {
				toggleButton.setTooltip('Small Size Navigation');
			}
		},
		onItemSelect : function(oEvent) {
			var item = oEvent.getParameter('item');
			var viewId = this.getView().getId();
			sap.ui.getCore().byId(viewId + "--pageContainer").to(
					viewId + "--" + item.getKey());
		},

		onMessagePopover : function(oEvent) {
			var viewId = this.getView()
			// create popover
			if (!this._oPopover) {
				this._oPopover = sap.ui.xmlfragment("popoverNavCon",
						"UserHomePage.WebContent.view.Popover", this);
				viewId.addDependent(this._oPopover);
			}
			var oButton = oEvent.getSource();
			jQuery.sap.delayedCall(0, this, function() {
				this._oPopover.openBy(oButton);
			});
		}

	});
});