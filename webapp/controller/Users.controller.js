sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/unified/FileUploader"
], function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("projectusersadm.controller.Users", {
        onInit: function () {
            // Initialize the model
            var oModel = new JSONModel({
                selectedFile: null,
                action: null
            });
            this.getView().setModel(oModel);
        },

        onFileChange: function (oEvent) {
            // var oFileUploader = oEvent.getSource();
            var oFile = oEvent.getParameter("files") && oEvent.getParameter("files")[0];
            
            if (oFile) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var sContent = e.target.result;
                    this.getView().getModel().setProperty("/selectedFile", sContent);
                    MessageToast.show("File uploaded successfully");
                }.bind(this);
                reader.readAsText(oFile);
            }
        },

        // onCreate: function () {
        //     this.getView().getModel().setProperty("/action", "create");
        //     MessageToast.show("Create action selected");
        // },

        // onSubmit: function () {
        //     var oModel = this.getView().getModel();
        //     var sFileContent = oModel.getProperty("/selectedFile");
        //     var sAction = oModel.getProperty("/action");

        //     if (!sFileContent || !sAction) {
        //         MessageToast.show("Please select a file and an action before submitting");
        //         return;
        //     }

        //     var aUsers = this._parseCSV(sFileContent);
            
        //     // Appeler le service OData pour créer des utilisateurs
        //     var oModelOData = this.getOwnerComponent().getModel("odataModel"); // Assurez-vous que le modèle OData est configuré
        //     aUsers.forEach(function (oUser) {
        //         oModelOData.create("/UsersSet", oUser, {
        //             success: function () {
        //                 MessageToast.show("User created successfully");
        //             },
        //             error: function () {
        //                 MessageToast.show("Error creating user");
        //             }
        //         });
        //     });
        // },

        // _parseCSV: function (sCSV) {
        //     var aLines = sCSV.split("\n");
        //     var aUsers = [];

        //     for (var i = 1; i < aLines.length; i++) { // Start from 1 to skip header row
        //         var aFields = aLines[i].split(",");
        //         var oUser = {
        //             userid: aFields[0],
        //             address: {
        //                 firstname: aFields[1],
        //                 lastname: aFields[2],
        //                 e_mail: aFields[3]
        //             },
        //             initpwd: aFields[4],
        //             logondata: {
        //                 gltgv: aFields[5],
        //                 gltgb: aFields[6],
        //                 class: aFields[7]
        //             },
        //             defaults: {
        //                 spld: aFields[8],
        //                 dcpfm: aFields[9]
        //             },
        //             company: {
        //                 company: aFields[10]
        //             }
        //         };
        //         aUsers.push(oUser);
        //     }

        //     return aUsers;
        // }
    });
});
