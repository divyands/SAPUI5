sap.ui.controller("UserHomePage.WebContent.view.app", {
	to : function(pageId, context) {

		/**
		 * Navigates back to a previous page
		 * 
		 * @param {string}
		 *            pageId The id of the next page
		 */
		var app = this.getView().app;
		// load page on demand
		var test = ("master" === pageId);
		if (app.getPage(pageId, test) === null) {
			var page = sap.ui.view({
				id : pageId,
				viewName : "UserHomePage.WebContent.view." + pageId,
				type : "XML"
			});
			page.getController().nav = this;
			app.addPage(page, test);
			jQuery.sap.log.info("app controller > loaded page: " + pageId);
		}
		// show the page
		app.to(pageId);
		// set data context on the page
		if (context) {
			var page = app.getPage(pageId);
			page.setBindingContext(context);
		}
	},
	back : function(pageId) {
		this.getView().app.backToPage(pageId);
		/*
		 * <tnt:fixedItem> <tnt:NavigationList> <tnt:NavigationListItem
		 * text="Help" icon="sap-icon://sys-help"/> </tnt:NavigationList>
		 * </tnt:fixedItem>
		 * 
		 */
	}

});