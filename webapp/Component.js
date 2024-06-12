// sap.ui.define([
// 	"sap/ui/core/UIComponent",
// 	"sap/ui/model/json/JSONModel",
// 	"sap/ui/Device"
// ], (UIComponent, JSONModel, Device) => {
// 	"use strict";

// 	return UIComponent.extend("projectusersadm.Component", {
// 		metadata: {
// 			interfaces: ["sap.ui.core.IAsyncContentCreation"],
// 			manifest: "json"
// 		},

// 		init() {
// 			// call the init function of the parent
// 			UIComponent.prototype.init.apply(this, arguments);

// 			// set data model
// 			const oData = {
// 				recipient: {
// 					name: "World"
// 				}
// 			};
// 			const oModel = new JSONModel(oData);
// 			this.setModel(oModel);

// 			// set device model
// 			const oDeviceModel = new JSONModel(Device);
// 			oDeviceModel.setDefaultBindingMode("OneWay");
// 			this.setModel(oDeviceModel, "device");

// 			// create the views based on the url/hash
// 			this.getRouter().initialize();
// 		},
// 		getContentDensityClass() {
// 			return Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact";
// 		}
// 	});
// });

/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"projectusersadm/model/models"
],
function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("projectusersadm.Component", {
		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
}
);
