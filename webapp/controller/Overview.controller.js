// sap.ui.define(
//     [
//         "./BaseController"
//     ],
//     function(BaseController) {
//       "use strict";
  
//       return BaseController.extend("projectusersadm.controller.App", {
//         onInit: function() {
//         }
//       });

      
//     }
//   );


sap.ui.define([
  "./BaseController",
  "sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
  "use strict";

  return BaseController.extend("projectusersadm.controller.Overview", {

      onInit: function() {
          // créer un modèle de données pour stocker les informations sur les onglets
          var oTabModel = new JSONModel({
              selectedKey: "users",
              tabs: [
                  { key: "users", text: "Users Management", icon: "sap-icon://group" },
                  { key: "roles", text: "Roles Management", icon: "sap-icon://role" },
                  { key: "parameters", text: "Parameters Management", icon: "sap-icon://settings" }
              ]
          });
          this.setModel(oTabModel, "tabModel");
      },

      onTabSelect: function(oEvent) {
          // récupérer la clé de l'onglet sélectionné
          var sSelectedKey = oEvent.getParameter("selectedKey");
          // mettre à jour le modèle de données avec la clé sélectionnée
          this.getModel("tabModel").setProperty("/selectedKey", sSelectedKey);
      }

  });

});
  