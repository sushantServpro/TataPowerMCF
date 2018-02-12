sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/demo/nav/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"

], function(Controller, MessageToast, BaseController, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.demo.nav.controller.QuickPayment", {
		onDisplayNotFound: function(oEvent) {
			// display the "notFound" target without changing the hash
			this.getRouter().getTargets().display("notFound", {
				fromTarget: "home"
			});
		},
		getRouter: function() {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		mobileDropdown: function() {
			var oFrametest = this.getView().byId("pnl_toggletab");
			$("#" + oFrametest.sId + "").hide();
		},
		onInit: function(evt) {
			this.mobileDropdown();
			// set explored app's demo model on this sample
			var oModel = new sap.ui.model.json.JSONModel("json/Tree.json");
			this.getView().setModel(oModel);
			this.clear();
		},

		handleButtonPress: function(evt) {

			var oFrame1 = this.getView().byId("pnl_01");
			var oFrame2 = this.getView().byId("pnl_02");
			var oFrame3 = this.getView().byId("pnl_03");
			var oFrame4 = this.getView().byId("pnl_04");
			var oFrame5 = this.getView().byId("pnl_05");
			var oFrame6 = this.getView().byId("pnl_06");
			var oFrame7 = this.getView().byId("pnl_07");
			var oFrame8 = this.getView().byId("pnl_08");
			var oFrame9 = this.getView().byId("pnl_09");
			var oFrame10 = this.getView().byId("pnl_10");
			var oFrame11 = this.getView().byId("pnl_11");
			var oFrame12 = this.getView().byId("pnl_12");
			var oFrame13 = this.getView().byId("pnl_13");
			var oFrame14 = this.getView().byId("pnl_14");
			var oFrame15 = this.getView().byId("pnl_15");
			var oFrame16 = this.getView().byId("pnl_16");
			var oFrame17 = this.getView().byId("pnl_17");
			var oFrame18 = this.getView().byId("pnl_18");
			var oFrame19 = this.getView().byId("pnl_19");
			var oFrame20 = this.getView().byId("pnl_20");
			var oFrame21 = this.getView().byId("pnl_21");

			if ("Procedure and Guidelines" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").show();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").hide();
				$("#" + oFrame10.sId + "").hide();
				$("#" + oFrame11.sId + "").hide();
				$("#" + oFrame12.sId + "").hide();
				$("#" + oFrame13.sId + "").hide();
				$("#" + oFrame14.sId + "").hide();
				$("#" + oFrame15.sId + "").hide();
				$("#" + oFrame16.sId + "").hide();
				$("#" + oFrame17.sId + "").hide();
				$("#" + oFrame18.sId + "").hide();
				$("#" + oFrame19.sId + "").hide();
				$("#" + oFrame20.sId + "").hide();
				$("#" + oFrame21.sId + "").hide();
			}
			if ("Estimation of Security Deposit" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").show();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").hide();
				$("#" + oFrame10.sId + "").hide();
				$("#" + oFrame11.sId + "").hide();
				$("#" + oFrame12.sId + "").hide();
				$("#" + oFrame13.sId + "").hide();
				$("#" + oFrame14.sId + "").hide();
				$("#" + oFrame15.sId + "").hide();
				$("#" + oFrame16.sId + "").hide();
				$("#" + oFrame17.sId + "").hide();
				$("#" + oFrame18.sId + "").hide();
				$("#" + oFrame19.sId + "").hide();
				$("#" + oFrame20.sId + "").hide();
				$("#" + oFrame21.sId + "").hide();

			}
			if ("Application Forms (3)" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").show();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").hide();
				$("#" + oFrame10.sId + "").hide();
				$("#" + oFrame11.sId + "").hide();
				$("#" + oFrame12.sId + "").hide();
				$("#" + oFrame13.sId + "").hide();
				$("#" + oFrame14.sId + "").hide();
				$("#" + oFrame15.sId + "").hide();
				$("#" + oFrame16.sId + "").hide();
				$("#" + oFrame17.sId + "").hide();
				$("#" + oFrame18.sId + "").hide();
				$("#" + oFrame19.sId + "").hide();
				$("#" + oFrame20.sId + "").hide();
				$("#" + oFrame21.sId + "").hide();

			}
			if ("FAQs" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").show();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").hide();
				$("#" + oFrame10.sId + "").hide();
				$("#" + oFrame11.sId + "").hide();
				$("#" + oFrame12.sId + "").hide();
				$("#" + oFrame13.sId + "").hide();
				$("#" + oFrame14.sId + "").hide();
				$("#" + oFrame15.sId + "").hide();
				$("#" + oFrame16.sId + "").hide();
				$("#" + oFrame17.sId + "").hide();
				$("#" + oFrame18.sId + "").hide();
				$("#" + oFrame19.sId + "").hide();
				$("#" + oFrame20.sId + "").hide();
				$("#" + oFrame21.sId + "").hide();

			}
			if ("Standard Drawings" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").show();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").hide();
				$("#" + oFrame10.sId + "").hide();
				$("#" + oFrame11.sId + "").hide();
				$("#" + oFrame12.sId + "").hide();
				$("#" + oFrame13.sId + "").hide();
				$("#" + oFrame14.sId + "").hide();
				$("#" + oFrame15.sId + "").hide();
				$("#" + oFrame16.sId + "").hide();
				$("#" + oFrame17.sId + "").hide();
				$("#" + oFrame18.sId + "").hide();
				$("#" + oFrame19.sId + "").hide();
				$("#" + oFrame20.sId + "").hide();
				$("#" + oFrame21.sId + "").hide();
			}
			if ("Apply Online" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").show();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").hide();
				$("#" + oFrame10.sId + "").hide();
				$("#" + oFrame11.sId + "").hide();
				$("#" + oFrame12.sId + "").hide();
				$("#" + oFrame13.sId + "").hide();
				$("#" + oFrame14.sId + "").hide();
				$("#" + oFrame15.sId + "").hide();
				$("#" + oFrame16.sId + "").hide();
				$("#" + oFrame17.sId + "").hide();
				$("#" + oFrame18.sId + "").hide();
				$("#" + oFrame19.sId + "").hide();
				$("#" + oFrame20.sId + "").hide();
				$("#" + oFrame21.sId + "").hide();

			}
			if ("Apply Online - 100kW" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").show();
				$("#" + oFrame8.sId + "").hide();
				$("#" + oFrame10.sId + "").hide();
				$("#" + oFrame11.sId + "").hide();
				$("#" + oFrame12.sId + "").hide();
				$("#" + oFrame13.sId + "").hide();
				$("#" + oFrame14.sId + "").hide();
				$("#" + oFrame15.sId + "").hide();
				$("#" + oFrame16.sId + "").hide();
				$("#" + oFrame17.sId + "").hide();
				$("#" + oFrame18.sId + "").hide();
				$("#" + oFrame19.sId + "").hide();
				$("#" + oFrame20.sId + "").hide();
				$("#" + oFrame21.sId + "").hide();
			}
			if ("Check your online reference number" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").show();
				$("#" + oFrame10.sId + "").hide();
				$("#" + oFrame11.sId + "").hide();
				$("#" + oFrame12.sId + "").hide();
				$("#" + oFrame13.sId + "").hide();
				$("#" + oFrame14.sId + "").hide();
				$("#" + oFrame15.sId + "").hide();
				$("#" + oFrame16.sId + "").hide();
				$("#" + oFrame17.sId + "").hide();
				$("#" + oFrame18.sId + "").hide();
				$("#" + oFrame19.sId + "").hide();
				$("#" + oFrame20.sId + "").hide();
				$("#" + oFrame21.sId + "").hide();

			}
			if ("Changeover Connection" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").show();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").hide();
				$("#" + oFrame10.sId + "").hide();
				$("#" + oFrame11.sId + "").hide();
				$("#" + oFrame12.sId + "").hide();
				$("#" + oFrame13.sId + "").hide();
				$("#" + oFrame14.sId + "").hide();
				$("#" + oFrame15.sId + "").hide();
				$("#" + oFrame16.sId + "").hide();
				$("#" + oFrame17.sId + "").hide();
				$("#" + oFrame18.sId + "").hide();
				$("#" + oFrame19.sId + "").hide();
				$("#" + oFrame20.sId + "").hide();
				$("#" + oFrame21.sId + "").hide();
			}
			if ("form1" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").hide();
				$("#" + oFrame10.sId + "").show();
				$("#" + oFrame11.sId + "").hide();
				$("#" + oFrame12.sId + "").hide();
				$("#" + oFrame13.sId + "").hide();
				$("#" + oFrame14.sId + "").hide();
				$("#" + oFrame15.sId + "").hide();
				$("#" + oFrame16.sId + "").hide();
				$("#" + oFrame17.sId + "").hide();
				$("#" + oFrame18.sId + "").hide();
				$("#" + oFrame19.sId + "").hide();
				$("#" + oFrame20.sId + "").hide();
				$("#" + oFrame21.sId + "").hide();

			}
			if ("form2" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").hide();
				$("#" + oFrame10.sId + "").hide();
				$("#" + oFrame11.sId + "").show();
				$("#" + oFrame12.sId + "").hide();
				$("#" + oFrame13.sId + "").hide();
				$("#" + oFrame14.sId + "").hide();
				$("#" + oFrame15.sId + "").hide();
				$("#" + oFrame16.sId + "").hide();
				$("#" + oFrame17.sId + "").hide();
				$("#" + oFrame18.sId + "").hide();
				$("#" + oFrame19.sId + "").hide();
				$("#" + oFrame20.sId + "").hide();
				$("#" + oFrame21.sId + "").hide();

			}
			if ("form3" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").hide();
				$("#" + oFrame10.sId + "").hide();
				$("#" + oFrame11.sId + "").hide();
				$("#" + oFrame12.sId + "").show();
				$("#" + oFrame13.sId + "").hide();
				$("#" + oFrame14.sId + "").hide();
				$("#" + oFrame15.sId + "").hide();
				$("#" + oFrame16.sId + "").hide();
				$("#" + oFrame17.sId + "").hide();
				$("#" + oFrame18.sId + "").hide();
				$("#" + oFrame19.sId + "").hide();
				$("#" + oFrame20.sId + "").hide();
				$("#" + oFrame21.sId + "").hide();

			}
			if ("form4" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").hide();
				$("#" + oFrame10.sId + "").hide();
				$("#" + oFrame11.sId + "").hide();
				$("#" + oFrame12.sId + "").hide();
				$("#" + oFrame13.sId + "").show();
				$("#" + oFrame14.sId + "").hide();
				$("#" + oFrame15.sId + "").hide();
				$("#" + oFrame16.sId + "").hide();
				$("#" + oFrame17.sId + "").hide();
				$("#" + oFrame18.sId + "").hide();
				$("#" + oFrame19.sId + "").hide();
				$("#" + oFrame20.sId + "").hide();
				$("#" + oFrame21.sId + "").hide();

			}
			if ("form5" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").hide();
				$("#" + oFrame10.sId + "").hide();
				$("#" + oFrame11.sId + "").hide();
				$("#" + oFrame12.sId + "").hide();
				$("#" + oFrame13.sId + "").hide();
				$("#" + oFrame14.sId + "").show();
				$("#" + oFrame15.sId + "").hide();
				$("#" + oFrame16.sId + "").hide();
				$("#" + oFrame17.sId + "").hide();
				$("#" + oFrame18.sId + "").hide();
				$("#" + oFrame19.sId + "").hide();
				$("#" + oFrame20.sId + "").hide();
				$("#" + oFrame21.sId + "").hide();

			}
			if ("form6" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").hide();
				$("#" + oFrame10.sId + "").hide();
				$("#" + oFrame11.sId + "").hide();
				$("#" + oFrame12.sId + "").hide();
				$("#" + oFrame13.sId + "").hide();
				$("#" + oFrame14.sId + "").hide();
				$("#" + oFrame15.sId + "").show();
				$("#" + oFrame16.sId + "").hide();
				$("#" + oFrame17.sId + "").hide();
				$("#" + oFrame18.sId + "").hide();
				$("#" + oFrame19.sId + "").hide();
				$("#" + oFrame20.sId + "").hide();
				$("#" + oFrame21.sId + "").hide();

			}
			if ("form7" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").hide();
				$("#" + oFrame10.sId + "").hide();
				$("#" + oFrame11.sId + "").hide();
				$("#" + oFrame12.sId + "").hide();
				$("#" + oFrame13.sId + "").hide();
				$("#" + oFrame14.sId + "").hide();
				$("#" + oFrame15.sId + "").hide();
				$("#" + oFrame16.sId + "").show();
				$("#" + oFrame17.sId + "").hide();
				$("#" + oFrame18.sId + "").hide();
				$("#" + oFrame19.sId + "").hide();
				$("#" + oFrame20.sId + "").hide();
				$("#" + oFrame21.sId + "").hide();

			}
			if ("form8" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").hide();
				$("#" + oFrame10.sId + "").hide();
				$("#" + oFrame11.sId + "").hide();
				$("#" + oFrame12.sId + "").hide();
				$("#" + oFrame13.sId + "").hide();
				$("#" + oFrame14.sId + "").hide();
				$("#" + oFrame15.sId + "").hide();
				$("#" + oFrame16.sId + "").hide();
				$("#" + oFrame17.sId + "").show();
				$("#" + oFrame18.sId + "").hide();
				$("#" + oFrame19.sId + "").hide();
				$("#" + oFrame20.sId + "").hide();
				$("#" + oFrame21.sId + "").hide();

			}
			if ("about" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").hide();
				$("#" + oFrame10.sId + "").hide();
				$("#" + oFrame11.sId + "").hide();
				$("#" + oFrame12.sId + "").hide();
				$("#" + oFrame13.sId + "").hide();
				$("#" + oFrame14.sId + "").hide();
				$("#" + oFrame15.sId + "").hide();
				$("#" + oFrame16.sId + "").hide();
				$("#" + oFrame17.sId + "").hide();
				$("#" + oFrame18.sId + "").show();
				$("#" + oFrame19.sId + "").hide();
				$("#" + oFrame20.sId + "").hide();
				$("#" + oFrame21.sId + "").hide();

			}

			if ("track_request_status" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").hide();
				$("#" + oFrame10.sId + "").hide();
				$("#" + oFrame11.sId + "").hide();
				$("#" + oFrame12.sId + "").hide();
				$("#" + oFrame13.sId + "").hide();
				$("#" + oFrame14.sId + "").hide();
				$("#" + oFrame15.sId + "").hide();
				$("#" + oFrame16.sId + "").hide();
				$("#" + oFrame17.sId + "").hide();
				$("#" + oFrame18.sId + "").hide();
				$("#" + oFrame19.sId + "").show();
				$("#" + oFrame20.sId + "").hide();
				$("#" + oFrame21.sId + "").hide();
			}

			if ("eob_apply_online" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").hide();
				$("#" + oFrame10.sId + "").hide();
				$("#" + oFrame11.sId + "").hide();
				$("#" + oFrame12.sId + "").hide();
				$("#" + oFrame13.sId + "").hide();
				$("#" + oFrame14.sId + "").hide();
				$("#" + oFrame15.sId + "").hide();
				$("#" + oFrame16.sId + "").hide();
				$("#" + oFrame17.sId + "").hide();
				$("#" + oFrame18.sId + "").hide();
				$("#" + oFrame19.sId + "").hide();
				$("#" + oFrame20.sId + "").show();
				$("#" + oFrame21.sId + "").hide();
			}
			
			if ("check_distribution_transfer" == evt.oSource.mProperties.text) {

				$("#" + oFrame1.sId + "").hide();
				$("#" + oFrame2.sId + "").hide();
				$("#" + oFrame3.sId + "").hide();
				$("#" + oFrame9.sId + "").hide();
				$("#" + oFrame4.sId + "").hide();
				$("#" + oFrame5.sId + "").hide();
				$("#" + oFrame6.sId + "").hide();
				$("#" + oFrame7.sId + "").hide();
				$("#" + oFrame8.sId + "").hide();
				$("#" + oFrame10.sId + "").hide();
				$("#" + oFrame11.sId + "").hide();
				$("#" + oFrame12.sId + "").hide();
				$("#" + oFrame13.sId + "").hide();
				$("#" + oFrame14.sId + "").hide();
				$("#" + oFrame15.sId + "").hide();
				$("#" + oFrame16.sId + "").hide();
				$("#" + oFrame17.sId + "").hide();
				$("#" + oFrame18.sId + "").hide();
				$("#" + oFrame19.sId + "").hide();
				$("#" + oFrame20.sId + "").hide();
				$("#" + oFrame21.sId + "").show();
			}

		},

		clear: function() {
			//	alert();
			var oFrame1 = this.getView().byId("pnl_01");
			var oFrame2 = this.getView().byId("pnl_02");
			var oFrame3 = this.getView().byId("pnl_03");
			var oFrame4 = this.getView().byId("pnl_04");
			var oFrame5 = this.getView().byId("pnl_05");
			var oFrame6 = this.getView().byId("pnl_06");
			var oFrame7 = this.getView().byId("pnl_07");
			var oFrame8 = this.getView().byId("pnl_08");
			var oFrame9 = this.getView().byId("pnl_09");
			var oFrame10 = this.getView().byId("pnl_10");
			var oFrame11 = this.getView().byId("pnl_11");
			var oFrame12 = this.getView().byId("pnl_12");
			var oFrame13 = this.getView().byId("pnl_13");
			var oFrame14 = this.getView().byId("pnl_14");
			var oFrame15 = this.getView().byId("pnl_15");
			var oFrame16 = this.getView().byId("pnl_16");
			var oFrame17 = this.getView().byId("pnl_17");
			var oFrame18 = this.getView().byId("pnl_18");
			var oFrame19 = this.getView().byId("pnl_19");
			var oFrame20 = this.getView().byId("pnl_20");
			var oFrame21 = this.getView().byId("pnl_21");

			$("#" + oFrame1.sId + "").hide();
			$("#" + oFrame2.sId + "").hide();
			$("#" + oFrame3.sId + "").hide();
			$("#" + oFrame9.sId + "").hide();
			$("#" + oFrame4.sId + "").hide();
			$("#" + oFrame5.sId + "").hide();
			$("#" + oFrame6.sId + "").hide();
			$("#" + oFrame7.sId + "").hide();
			$("#" + oFrame8.sId + "").hide();
			$("#" + oFrame10.sId + "").hide();
			$("#" + oFrame11.sId + "").hide();
			$("#" + oFrame12.sId + "").hide();
			$("#" + oFrame13.sId + "").hide();
			$("#" + oFrame14.sId + "").hide();
			$("#" + oFrame15.sId + "").hide();
			$("#" + oFrame16.sId + "").hide();
			$("#" + oFrame17.sId + "").hide();
			$("#" + oFrame18.sId + "").hide();
			$("#" + oFrame19.sId + "").hide();
			$("#" + oFrame20.sId + "").hide();
			$("#" + oFrame21.sId + "").hide();
		},
		onBeforeRendering: function() {
			this.mobileDropdown();
			this.clear();
		},
		onHomePress: function(oEvent) {
			this.getRouter().navTo("home");
		},
		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.ui.core.demo.nav.view.PaymentHistory
		 */
		onAfterRendering: function() {
			this.mobileDropdown();
			this.clear();
		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.ui.core.demo.nav.view.PaymentHistory
		 */
		onExit: function() {
			this.mobileDropdown();
			this.clear();
		},
		goDown: function() {
			var oFrametest = this.getView().byId("pnl_toggletab");
			$("#" + oFrametest.sId + "").slideToggle("slow");
		}

	});

});