(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+2Ah":
    /*!************************************!*\
      !*** ./src/app/login/login-2FA.ts ***!
      \************************************/

    /*! exports provided: TwoFactorDialog */

    /***/
    function Ah(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TwoFactorDialog", function () {
        return TwoFactorDialog;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var TwoFactorDialog = /*#__PURE__*/function () {
        function TwoFactorDialog(dialogRef) {
          _classCallCheck(this, TwoFactorDialog);

          this.dialogRef = dialogRef;
        }

        _createClass(TwoFactorDialog, [{
          key: "close2FA",
          value: function close2FA() {
            this.dialogRef.close(this.twoFactor);
          }
        }, {
          key: "cancel2FA",
          value: function cancel2FA() {
            this.dialogRef.close();
          }
        }]);

        return TwoFactorDialog;
      }();

      TwoFactorDialog.ɵfac = function TwoFactorDialog_Factory(t) {
        return new (t || TwoFactorDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
      };

      TwoFactorDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TwoFactorDialog,
        selectors: [["login-2fa"]],
        decls: 12,
        vars: 2,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["appearance", "outline"], ["matInput", "", "type", "number", 3, "ngModel", "ngModelChange", "keydown.enter"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", "cdkFocusInitial", "", "type", "submit", 3, "mat-dialog-close"]],
        template: function TwoFactorDialog_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "2FA Code Required");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TwoFactorDialog_Template_input_ngModelChange_6_listener($event) {
              return ctx.twoFactor = $event;
            })("keydown.enter", function TwoFactorDialog_Template_input_keydown_enter_6_listener() {
              return ctx.close2FA();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TwoFactorDialog_Template_button_click_8_listener() {
              return ctx.cancel2FA();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Verify");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.twoFactor);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.twoFactor);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
        styles: ["input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n    }\n    \n    \n    input[type=number][_ngcontent-%COMP%] {\n        -moz-appearance: textfield;\n    }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TwoFactorDialog, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'login-2fa',
            templateUrl: 'login-2fa.html'
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/tmunzer/4_dev/Mist/mist_claim_web_ui/src_angular/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "8Gtv":
    /*!******************************************************!*\
      !*** ./src/app/dashboard/dashboard-claim-details.ts ***!
      \******************************************************/

    /*! exports provided: ClaimDetailsDialog */

    /***/
    function Gtv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClaimDetailsDialog", function () {
        return ClaimDetailsDialog;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var ClaimDetailsDialog = /*#__PURE__*/function () {
        function ClaimDetailsDialog(dialogRef, data) {
          _classCallCheck(this, ClaimDetailsDialog);

          this.dialogRef = dialogRef;
          this.data = data;
          this.details = this.data;
        }

        _createClass(ClaimDetailsDialog, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.details);
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          }
        }]);

        return ClaimDetailsDialog;
      }();

      ClaimDetailsDialog.ɵfac = function ClaimDetailsDialog_Factory(t) {
        return new (t || ClaimDetailsDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      ClaimDetailsDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ClaimDetailsDialog,
        selectors: [["dashboard-claim-details"]],
        decls: 9,
        vars: 3,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "fxLayout", "row", 2, "justify-content", "space-around"], ["mat-raised-button", "", "color", "accent", "cdkFocusInitial", "", 3, "click"]],
        template: function ClaimDetailsDialog_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Claim Result Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "json");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClaimDetailsDialog_Template_button_click_7_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx.details));
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClaimDetailsDialog, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dashboard-claim-details',
            templateUrl: 'dashboard-claim-details.html'
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "9GOe":
    /*!************************************************!*\
      !*** ./src/app/dashboard/dashboard-warning.ts ***!
      \************************************************/

    /*! exports provided: WarningDialog */

    /***/
    function GOe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WarningDialog", function () {
        return WarningDialog;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function WarningDialog_li_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r2.reason);
        }
      }

      function WarningDialog_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Warning:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Changes may have impact on existing users, especially for users using PSK without VLAN. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var WarningDialog = /*#__PURE__*/function () {
        function WarningDialog(dialogRef, data) {
          _classCallCheck(this, WarningDialog);

          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(WarningDialog, [{
          key: "ok",
          value: function ok() {
            this.dialogRef.close(true);
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          }
        }]);

        return WarningDialog;
      }();

      WarningDialog.ɵfac = function WarningDialog_Factory(t) {
        return new (t || WarningDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      WarningDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WarningDialog,
        selectors: [["dashboard-warning"]],
        decls: 16,
        vars: 3,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [2, "margin", "2em 0em 0", "font-weight", "bold"], [2, "list-style", "none", "padding", "0"], [4, "ngFor", "ngForOf"], ["fxLayout", "column", "style", "color: red;justify-content: center;margin: 2em 0 0;", 4, "ngIf"], ["mat-dialog-actions", "", "fxLayout", "row", 2, "justify-content", "space-around"], ["mat-raised-button", "", 3, "click"], ["mat-button", "", "color", "accent", 3, "click"], ["fxLayout", "column", 2, "color", "red", "justify-content", "center", "margin", "2em 0 0"], [2, "font-weight", "bold", "margin", "auto"], [2, "margin", "auto"]],
        template: function WarningDialog_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Be careful");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Details:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WarningDialog_li_9_Template, 2, 1, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WarningDialog_div_10_Template, 5, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WarningDialog_Template_button_click_12_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "I Don't Care");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WarningDialog_Template_button_click_14_listener() {
              return ctx.ok();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Fix It");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.text, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.vlan_check);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.bigWarning == true);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WarningDialog, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dashboard-warning',
            templateUrl: 'dashboard-warning.html'
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "C9WT":
    /*!************************************************!*\
      !*** ./src/app/dashboard/dashboard-unclaim.ts ***!
      \************************************************/

    /*! exports provided: UnclaimDialog */

    /***/
    function C9WT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnclaimDialog", function () {
        return UnclaimDialog;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var UnclaimDialog = /*#__PURE__*/function () {
        function UnclaimDialog(dialogRef, data) {
          _classCallCheck(this, UnclaimDialog);

          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(UnclaimDialog, [{
          key: "confirm",
          value: function confirm(device_mac) {
            this.dialogRef.close(device_mac);
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          }
        }]);

        return UnclaimDialog;
      }();

      UnclaimDialog.ɵfac = function UnclaimDialog_Factory(t) {
        return new (t || UnclaimDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      UnclaimDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UnclaimDialog,
        selectors: [["dashboard-unclaim"]],
        decls: 10,
        vars: 1,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "fxLayout", "row", 2, "justify-content", "space-around"], ["mat-raised-button", "", 3, "click"], ["mat-button", "", 2, "color", "red !important", 3, "click"]],
        template: function UnclaimDialog_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unclaim Device");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnclaimDialog_Template_button_click_6_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnclaimDialog_Template_button_click_8_listener() {
              return ctx.confirm(ctx.data.mac);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Confirm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" This will unclail the Device ", ctx.data.mac, ". Do you confirm?");
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnclaimDialog, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dashboard-unclaim',
            templateUrl: 'dashboard-unclaim.html'
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "GZXf":
    /*!**********************************************!*\
      !*** ./src/app/dashboard/dashboard-error.ts ***!
      \**********************************************/

    /*! exports provided: ErrorDialog */

    /***/
    function GZXf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorDialog", function () {
        return ErrorDialog;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var ErrorDialog = /*#__PURE__*/function () {
        function ErrorDialog(dialogRef, data) {
          _classCallCheck(this, ErrorDialog);

          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(ErrorDialog, [{
          key: "ok",
          value: function ok() {
            this.dialogRef.close();
          }
        }]);

        return ErrorDialog;
      }();

      ErrorDialog.ɵfac = function ErrorDialog_Factory(t) {
        return new (t || ErrorDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      ErrorDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ErrorDialog,
        selectors: [["dashboard-error"]],
        decls: 8,
        vars: 1,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "fxLayout", "row", 2, "justify-content", "space-around"], ["mat-raised-button", "", "color", "accent", 3, "click"]],
        template: function ErrorDialog_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Oops...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorDialog_Template_button_click_6_listener() {
              return ctx.ok();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ok");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data, "");
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorDialog, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dashboard-error',
            templateUrl: 'dashboard-error.html'
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "IMNj":
    /*!**************************************!*\
      !*** ./src/app/org/org.component.ts ***!
      \**************************************/

    /*! exports provided: OrgComponent */

    /***/
    function IMNj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrgComponent", function () {
        return OrgComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _dashboard_dashboard_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../dashboard/dashboard-error */
      "GZXf");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _connector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../connector.service */
      "l5d9");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_google_maps__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/google-maps */
      "3sZV");

      function OrgComponent_mat_option_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var org_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", org_r4.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", org_r4.name, " ");
        }
      }

      function OrgComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 13);
        }
      }

      function OrgComponent_mat_progress_bar_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 14);
        }
      }

      function OrgComponent_mat_card_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrgComponent_mat_card_16_Template_mat_card_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var site_r5 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.setSite(site_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "google-map", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "map-marker", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "map-info-window");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var site_r5 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](site_r5.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](site_r5.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("center", site_r5.latlng)("zoom", ctx_r3.map.zoom)("options", ctx_r3.map.options);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", site_r5.latlng);
        }
      }

      var OrgComponent = /*#__PURE__*/function () {
        function OrgComponent(_http, _appService, _dialog, _router) {
          _classCallCheck(this, OrgComponent);

          this._http = _http;
          this._appService = _appService;
          this._dialog = _dialog;
          this._router = _router;
          this.headers = {};
          this.cookies = {};
          this.host = '';
          this.self = {};
          this.search = "";
          this.orgs = [];
          this.sites = [];
          this.org_id = "";
          this.site_name = "";
          this.me = "";
          this.map = {
            options: {
              scrollwheel: false,
              disableDefaultUI: true,
              draggable: false,
              draggableCursor: "pointer",
              clickableIcons: false
            },
            zoom: 12
          };
          this.claimDisabled = true;
          this.topBarLoading = false;
        }

        _createClass(OrgComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this._appService.headers.subscribe(function (headers) {
              return _this.headers = headers;
            });

            this._appService.cookies.subscribe(function (cookies) {
              return _this.cookies = cookies;
            });

            this._appService.host.subscribe(function (host) {
              return _this.host = host;
            });

            this._appService.self.subscribe(function (self) {
              return _this.self = self || {};
            });

            this._appService.org_id.subscribe(function (org_id) {
              return _this.org_id = org_id;
            });

            this._appService.site_name.subscribe(function (site_name) {
              return _this.site_name = site_name;
            });

            this.me = this.self["email"] || null;

            if (this.self != {} && this.self["privileges"]) {
              this.self["privileges"].forEach(function (element) {
                if (element["scope"] == "org") {
                  if (_this.orgs.indexOf({
                    id: element["org_id"],
                    name: element["name"]
                  }) < 0) {
                    _this.orgs.push({
                      id: element["org_id"],
                      name: element["name"]
                    });
                  }
                } else if (element["scope"] == "site") {
                  if (_this.orgs.indexOf({
                    id: element["org_id"],
                    name: element["org_name"]
                  }) < 0) {
                    _this.orgs.push({
                      id: element["org_id"],
                      name: element["org_name"]
                    });
                  }
                }
              });
              this.orgs = this.sortList(this.orgs, "name");

              if (this.orgs.length == 1) {
                this.org_id = this.orgs[1]["id"];
              }
            }
          }
        }, {
          key: "changeOrg",
          value: function changeOrg() {
            var _this2 = this;

            this.topBarLoading = true;
            this.claimDisabled = false;

            this._http.post('/api/sites/', {
              host: this.host,
              cookies: this.cookies,
              headers: this.headers,
              org_id: this.org_id
            }).subscribe({
              next: function next(data) {
                return _this2.parseSites(data);
              },
              error: function error(_error) {
                var message = "There was an error... ";

                if ("error" in _error) {
                  message += _error["error"]["message"];
                }

                _this2.topBarLoading = false;

                _this2.openError(message);
              }
            });
          }
        }, {
          key: "parseSites",
          value: function parseSites(data) {
            if (data.sites.length > 0) {
              this.sites = this.sortList(data.sites, "name");
            } // this.sites.forEach(element => {
            //   center: google.maps.LatLng = element.latlng;
            //   zoom: 4
            //   element.
            // })


            this.topBarLoading = false;
          } // ROUTING FUNCTION

        }, {
          key: "setSite",
          value: function setSite(site) {
            if (site != null) {
              this.site_name = site.name;
            } else {
              this.site_name = "";
            }

            this._appService.siteNameSet(this.site_name);

            this.gotoDash();
          }
        }, {
          key: "gotoDash",
          value: function gotoDash() {
            this._appService.orgIdSet(this.org_id);

            this._router.navigate(["/dashboard"]);
          } // COMMON

        }, {
          key: "sortList",
          value: function sortList(data, attribute) {
            return data.sort(function (a, b) {
              var nameA = a[attribute].toUpperCase(); // ignore upper and lowercase

              var nameB = b[attribute].toUpperCase(); // ignore upper and lowercase

              if (nameA < nameB) {
                return -1;
              }

              if (nameA > nameB) {
                return 1;
              }

              return 0;
            });
          } // DIALOG BOXES
          // ERROR

        }, {
          key: "openError",
          value: function openError(message) {
            var dialogRef = this._dialog.open(_dashboard_dashboard_error__WEBPACK_IMPORTED_MODULE_1__["ErrorDialog"], {
              data: message
            });
          }
        }]);

        return OrgComponent;
      }();

      OrgComponent.ɵfac = function OrgComponent_Factory(t) {
        return new (t || OrgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_connector_service__WEBPACK_IMPORTED_MODULE_3__["ConnectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      OrgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OrgComponent,
        selectors: [["app-org"]],
        decls: 17,
        vars: 6,
        consts: [[1, "card-outer"], ["fxLayout", "column", 1, "top-bar-container"], ["fxLayout", "row wrap", 1, "top-bar", "mat-elevation-z8"], ["appearance", "outline", 1, "list"], [3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "accent", 1, "create", 2, "margin", "auto 20px auto auto", 3, "disabled", "click"], [1, "material-icons", 2, "margin", "auto 10px auto auto"], ["style", "width: 100%; height: 4px; background-color: rgb(111 157 43);", 4, "ngIf"], ["mode", "indeterminate", "color", "accent", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "start stretch"], ["class", "mat-elevation-z2", "fxLayout", "column", "fxLayoutAlign", "space-between stretch", "style", "cursor: pointer;margin: 10px; padding: 0px; width: 300px;", 3, "click", 4, "ngFor", "ngForOf"], [3, "value"], [2, "width", "100%", "height", "4px", "background-color", "rgb(111 157 43)"], ["mode", "indeterminate", "color", "accent"], ["fxLayout", "column", "fxLayoutAlign", "space-between stretch", 1, "mat-elevation-z2", 2, "cursor", "pointer", "margin", "10px", "padding", "0px", "width", "300px", 3, "click"], [2, "margin", "10px"], [2, "width", "100%"], [2, "margin", "0px"], ["height", "300px", "width", "300px", 3, "center", "zoom", "options"], [3, "position"]],
        template: function OrgComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Organization");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function OrgComponent_Template_mat_select_valueChange_6_listener($event) {
              return ctx.org_id = $event;
            })("selectionChange", function OrgComponent_Template_mat_select_selectionChange_6_listener() {
              return ctx.changeOrg();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OrgComponent_mat_option_7_Template, 2, 2, "mat-option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrgComponent_Template_button_click_8_listener() {
              return ctx.gotoDash();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Claim Device to Org");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OrgComponent_div_13_Template, 1, 0, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OrgComponent_mat_progress_bar_14_Template, 1, 0, "mat-progress-bar", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, OrgComponent_mat_card_16_Template, 13, 6, "mat-card", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.org_id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orgs);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.claimDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.topBarLoading == false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.topBarLoading == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sites);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_15__["GoogleMap"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_15__["MapMarker"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_15__["MapInfoWindow"]],
        styles: [".card-outer[_ngcontent-%COMP%] {\n    background-color: unset;\n    max-width: 1900px;\n    margin: auto;\n}\n\n.top-bar-container[_ngcontent-%COMP%] {\n    margin: 1em 0;\n}\n\n.top-bar[_ngcontent-%COMP%] {\n    background-color: white;\n    border-radius: 5px 5px 0 0;\n}\n\n.list[_ngcontent-%COMP%] {\n    margin: 1.34375em 1em 0;\n}\n\n.loading[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff9c;\n    border-radius: 5px;\n    z-index: 1000;\n}\n\n.loading[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin: auto;\n    align-self: center;\n}\n\n.button-container[_ngcontent-%COMP%] {\n    display: flex;\n    width: 300px;\n    justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDhCQUE4QjtBQUNsQyIsImZpbGUiOiJvcmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLW91dGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgICBtYXgtd2lkdGg6IDE5MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi50b3AtYmFyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAxZW0gMDtcbn1cblxuLnRvcC1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xufVxuXG4ubGlzdCB7XG4gICAgbWFyZ2luOiAxLjM0Mzc1ZW0gMWVtIDA7XG59XG5cbi5sb2FkaW5nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY5YztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgei1pbmRleDogMTAwMDtcbn1cblxuLmxvYWRpbmcgZGl2IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrgComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-org',
            templateUrl: './org.component.html',
            styleUrls: ['./org.component.css']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _connector_service__WEBPACK_IMPORTED_MODULE_3__["ConnectorService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "QX6l":
    /*!**************************************************!*\
      !*** ./src/app/dashboard/dashboard.component.ts ***!
      \**************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function QX6l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _dashboard_claim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard-claim */
      "c2k7");
      /* harmony import */


      var _dashboard_unclaim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard-unclaim */
      "C9WT");
      /* harmony import */


      var _dashboard_device__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./dashboard-device */
      "Y3sW");
      /* harmony import */


      var _dashboard_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dashboard-error */
      "GZXf");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _connector_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../connector.service */
      "l5d9");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function DashboardComponent_mat_option_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var map_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", map_r23.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", map_r23.name, " ");
        }
      }

      function DashboardComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 37);
        }
      }

      function DashboardComponent_mat_progress_bar_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 38);
        }
      }

      function DashboardComponent_th_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " MAC ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_td_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_td_35_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var element_r24 = ctx.$implicit;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.openEdit(element_r24);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r24.mac);
        }
      }

      function DashboardComponent_th_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " NAME ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_td_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r27.name, " ");
        }
      }

      function DashboardComponent_th_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " TYPE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_td_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r28.type, " ");
        }
      }

      function DashboardComponent_th_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " MODEL ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_td_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r29.model, " ");
        }
      }

      function DashboardComponent_th_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " SERIAL ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_td_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r30.serial, " ");
        }
      }

      function DashboardComponent_th_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " CONNECTED ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_td_50_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " check_circle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_td_50_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_td_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_td_50_mat_icon_1_Template, 2, 0, "mat-icon", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_td_50_mat_icon_2_Template, 2, 0, "mat-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r31.connected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !element_r31.connected);
        }
      }

      function DashboardComponent_th_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " SITE NAME ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_td_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r34 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r34.site_name, " ");
        }
      }

      function DashboardComponent_th_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 39);
        }
      }

      function DashboardComponent_td_56_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_td_56_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

            var element_r35 = ctx.$implicit;

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r36.locate(element_r35);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "location_on");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DashboardComponent_tr_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 50);
        }
      }

      function DashboardComponent_tr_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 51);
        }
      }

      function DashboardComponent_div_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return [10, 25, 50, 100];
      };

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(_http, _appService, _dialog, _snackBar) {
          _classCallCheck(this, DashboardComponent);

          this._http = _http;
          this._appService = _appService;
          this._dialog = _dialog;
          this._snackBar = _snackBar;
          this.headers = {};
          this.cookies = {};
          this.host = '';
          this.self = {};
          this.search = "";
          this.orgs = [];
          this.sites = [];
          this.maps = [];
          this.org_id = "";
          this.site_name = "__any__";
          this.map_id = "__any__";
          this.device_type = "";
          this.me = "";
          this.claimButton = "To Site";
          this.topBarLoading = false;
          this.loading = false;
          this.devices = [];
          this.resultsLength = 0;
          this.displayedColumns = ['mac', 'name', 'type', 'model', 'serial', 'connected', 'site_name', 'action'];
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this._appService.headers.subscribe(function (headers) {
              return _this3.headers = headers;
            });

            this._appService.cookies.subscribe(function (cookies) {
              return _this3.cookies = cookies;
            });

            this._appService.host.subscribe(function (host) {
              return _this3.host = host;
            });

            this._appService.self.subscribe(function (self) {
              return _this3.self = self || {};
            });

            this._appService.org_id.subscribe(function (org_id) {
              return _this3.org_id = org_id;
            });

            this._appService.site_name.subscribe(function (site_name) {
              return _this3.site_name = site_name;
            });

            this.getMaps();
            this.getDevices();
          }
        }, {
          key: "getDevices",
          value: function getDevices() {
            var _this4 = this;

            var body = null;

            if (this.site_name == "__any__") {
              body = {
                host: this.host,
                cookies: this.cookies,
                headers: this.headers,
                org_id: this.org_id,
                full: true,
                type: this.device_type
              };
            } else if (this.site_name) {
              body = {
                host: this.host,
                cookies: this.cookies,
                headers: this.headers,
                org_id: this.org_id,
                site_name: this.site_name,
                full: true,
                type: this.device_type
              };
            }

            if (body) {
              this.loading = true;

              this._http.post('/api/devices/', body).subscribe({
                next: function next(data) {
                  console.log(data);
                  var tmp = [];
                  data["results"].forEach(function (element) {
                    if (element.site_name == _this4.site_name && (_this4.map_id == "__any__" || element.map_id == _this4.map_id)) {
                      tmp.push(element);
                    }
                  });
                  _this4.filteredDevicesDatase = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](tmp);
                  _this4.filteredDevicesDatase.paginator = _this4.paginator;
                  _this4.loading = false;
                },
                error: function error(_error2) {
                  var message = "There was an error... ";

                  if ("error" in _error2) {
                    message += _error2["error"]["message"];
                  }

                  _this4.openError(message);
                }
              });
            }
          }
        }, {
          key: "getMaps",
          value: function getMaps() {
            var _this5 = this;

            this.topBarLoading = true;

            this._http.post('/api/maps/', {
              host: this.host,
              cookies: this.cookies,
              headers: this.headers,
              org_id: this.org_id,
              site_name: this.site_name
            }).subscribe({
              next: function next(data) {
                return _this5.parseMap(data);
              },
              error: function error(_error3) {
                var message = "There was an error... ";

                if ("error" in _error3) {
                  message += _error3["error"]["message"];
                }

                _this5.topBarLoading = false;

                _this5.openError(message);
              }
            });
          }
        }, {
          key: "parseMap",
          value: function parseMap(data) {
            if (data.maps.length > 0) {
              this.maps = this.sortList(data.maps, "name");
            }

            this.topBarLoading = false;
            this.map_id = "__any__";
          }
        }, {
          key: "changeMap",
          value: function changeMap() {
            if (this.map_id == "__any__") {
              this.claimButton = "To Site";
            } else {
              this.claimButton = "To Map";
            }

            this.getDevices();
          }
        }, {
          key: "locate",
          value: function locate(device) {
            var _this6 = this;

            if (device.isLocating == true) {
              this._http.post('/api/devices/unlocate/', {
                host: this.host,
                cookies: this.cookies,
                headers: this.headers,
                org_id: this.org_id,
                device_mac: device.mac
              }).subscribe({
                next: function next(data) {
                  return device.isLocating = false;
                },
                error: function error(_error4) {
                  var message = "There was an error... ";

                  if ("error" in _error4) {
                    message += _error4["error"]["message"];
                  }

                  _this6.openError(message);
                }
              });
            } else {
              this._http.post('/api/devices/locate/', {
                host: this.host,
                cookies: this.cookies,
                headers: this.headers,
                org_id: this.org_id,
                device_mac: device.mac
              }).subscribe({
                next: function next(data) {
                  return device.isLocating = true;
                },
                error: function error(_error5) {
                  var message = "There was an error... ";

                  if ("error" in _error5) {
                    message += _error5["error"]["message"];
                  }

                  _this6.openError(message);
                }
              });
            }
          } // COMMON

        }, {
          key: "sortList",
          value: function sortList(data, attribute) {
            return data.sort(function (a, b) {
              var nameA = a[attribute].toUpperCase(); // ignore upper and lowercase

              var nameB = b[attribute].toUpperCase(); // ignore upper and lowercase

              if (nameA < nameB) {
                return -1;
              }

              if (nameA > nameB) {
                return 1;
              }

              return 0;
            });
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(event) {
            var filterValue = event.target.value.trim().toLowerCase();
            this.filteredDevicesDatase.filter = filterValue.trim().toLowerCase();

            if (this.filteredDevicesDatase.paginator) {
              this.filteredDevicesDatase.paginator.firstPage();
            }
          } // DIALOG BOXES
          // ERROR

        }, {
          key: "openError",
          value: function openError(message) {
            var dialogRef = this._dialog.open(_dashboard_error__WEBPACK_IMPORTED_MODULE_5__["ErrorDialog"], {
              data: message
            });
          } // CREATE DIALOG

        }, {
          key: "openClaim",
          value: function openClaim() {
            var _this7 = this;

            var body = {
              host: this.host,
              cookies: this.cookies,
              headers: this.headers,
              org_id: this.org_id,
              site_name: this.site_name,
              map_id: this.map_id,
              claim_codes: null
            };

            var dialogRef = this._dialog.open(_dashboard_claim__WEBPACK_IMPORTED_MODULE_2__["ClaimDialog"], {
              data: {
                body: body
              }
            });

            dialogRef.afterClosed().subscribe(function (result) {
              console.log(result);
              console.log(_this7.site_name);

              _this7.getDevices();
            });
          } // EDIT DEVICE

        }, {
          key: "openEdit",
          value: function openEdit(device) {
            var _this8 = this;

            console.log(device);
            var body = {
              host: this.host,
              cookies: this.cookies,
              headers: this.headers,
              org_id: this.org_id,
              site_name: this.site_name,
              map_id: this.map_id
            };

            var dialogRef = this._dialog.open(_dashboard_device__WEBPACK_IMPORTED_MODULE_4__["DeviceDialog"], {
              data: {
                sites: this.sites,
                body: body,
                device: device,
                editing: true
              }
            });

            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                console.log(result);
                var body = {
                  host: _this8.host,
                  cookies: _this8.cookies,
                  headers: _this8.headers,
                  org_id: _this8.org_id,
                  device: result.device,
                  device_mac: result.device_mac
                };

                _this8._http.post('/api/devices/provision/', body).subscribe({
                  next: function next(data) {
                    _this8.getDevices();

                    _this8.openSnackBar("Device " + result.mac + " successfully provisioned", "Done");
                  },
                  error: function error(_error6) {
                    var message = "Unable to save changes to Device " + device.mac + "... ";

                    if ("error" in _error6) {
                      message += _error6["error"]["message"];
                    }

                    _this8.openError(message);
                  }
                });
              }
            });
          } // DELETE DIALOG

        }, {
          key: "openDelete",
          value: function openDelete(device) {
            var _this9 = this;

            var dialogRef = this._dialog.open(_dashboard_unclaim__WEBPACK_IMPORTED_MODULE_3__["UnclaimDialog"], {
              data: device
            });

            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                var body = {
                  host: _this9.host,
                  cookies: _this9.cookies,
                  headers: _this9.headers,
                  org_id: _this9.org_id,
                  site_name: _this9.site_name,
                  map_id: _this9.map_id,
                  device_mac: device.mac
                };

                _this9._http.post('/api/devices/unclaim/', body).subscribe({
                  next: function next(data) {
                    _this9.getDevices();

                    _this9.openSnackBar("Device " + device.mac + " successfully unclaimed", "Done");
                  },
                  error: function error(_error7) {
                    var message = "Unable to unclaim the device " + device.mac + "... ";

                    if ("error" in _error7) {
                      message += _error7["error"]["message"];
                    }

                    _this9.openError(message);
                  }
                });
              }
            });
          } // SNACK BAR

        }, {
          key: "openSnackBar",
          value: function openSnackBar(message, action) {
            this._snackBar.open(message, action, {
              duration: 5000,
              horizontalPosition: "center",
              verticalPosition: "top"
            });
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_connector_service__WEBPACK_IMPORTED_MODULE_8__["ConnectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]));
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        viewQuery: function DashboardComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 61,
        vars: 11,
        consts: [[1, "card-outer"], ["fxLayout", "column"], ["fxLayout", "column", 1, "top-bar-container"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", 1, "top-bar", "mat-elevation-z8"], ["appearance", "outline", 1, "list"], [3, "value", "valueChange", "selectionChange"], ["value", "__any__"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "accent", 1, "create", 2, "margin", "auto", 3, "click"], [1, "material-icons", 2, "margin", "auto 10px auto auto"], ["mat-button", "", 2, "height", "100%", "margin", "auto", 3, "click"], ["matTooltip", "Refresh list", "aria-label", "Refresh list"], ["style", "width: 100%; height: 4px; background-color: rgb(111 157 43);", 4, "ngIf"], ["mode", "indeterminate", "color", "accent", 4, "ngIf"], ["fxLayout", "row", 1, "top-bar", "mat-elevation-z8"], [2, "margin", "0 1em", "width", "100%"], ["matInput", "", "placeholder", "Ex. device name", 3, "keyup"], ["input", ""], ["fxLayout", "column", 1, "psk-container", "mat-elevation-z8", 2, "background-color", "white"], ["fxLayout", "column", 1, "psk-table-container"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "mac"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "type"], ["matColumnDef", "model"], ["matColumnDef", "serial"], ["matColumnDef", "connected"], ["matColumnDef", "site_name"], ["matColumnDef", "action"], ["mat-cell", "", "fxLayout", "row", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["class", "loading", "fxLayout", "row", 4, "ngIf"], [3, "value"], [2, "width", "100%", "height", "4px", "background-color", "rgb(111 157 43)"], ["mode", "indeterminate", "color", "accent"], ["mat-header-cell", ""], ["mat-cell", ""], ["role", "button", 1, "mac", 3, "click"], ["class", "material-icons", "style", "color: green;", 4, "ngIf"], ["class", "material-icons", "style", "color: red;", 4, "ngIf"], [1, "material-icons", 2, "color", "green"], [1, "material-icons", 2, "color", "red"], ["mat-cell", "", "fxLayout", "row"], [1, "button-container"], ["mat-mini-fab", "", "matTooltip", "Delete", 1, "delete", 3, "click"], [1, "material-icons"], ["mat-header-row", ""], ["mat-row", ""], ["fxLayout", "row", 1, "loading"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Map");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DashboardComponent_Template_mat_select_valueChange_7_listener($event) {
              return ctx.map_id = $event;
            })("selectionChange", function DashboardComponent_Template_mat_select_selectionChange_7_listener() {
              return ctx.changeMap();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "All Devices");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DashboardComponent_mat_option_10_Template, 2, 2, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_12_listener() {
              return ctx.openClaim();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_17_listener() {
              return ctx.getDevices();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "refresh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Refresh List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DashboardComponent_div_22_Template, 1, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DashboardComponent_mat_progress_bar_23_Template, 1, 0, "mat-progress-bar", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function DashboardComponent_Template_input_keyup_28_listener($event) {
              return ctx.applyFilter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](33, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, DashboardComponent_th_34_Template, 2, 0, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, DashboardComponent_td_35_Template, 3, 1, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](36, 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, DashboardComponent_th_37_Template, 2, 0, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, DashboardComponent_td_38_Template, 2, 1, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](39, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, DashboardComponent_th_40_Template, 2, 0, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, DashboardComponent_td_41_Template, 2, 1, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](42, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, DashboardComponent_th_43_Template, 2, 0, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, DashboardComponent_td_44_Template, 2, 1, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](45, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, DashboardComponent_th_46_Template, 2, 0, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, DashboardComponent_td_47_Template, 2, 1, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](48, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, DashboardComponent_th_49_Template, 2, 0, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, DashboardComponent_td_50_Template, 3, 2, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](51, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, DashboardComponent_th_52_Template, 2, 0, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, DashboardComponent_td_53_Template, 2, 1, "td", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](54, 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, DashboardComponent_th_55_Template, 1, 0, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, DashboardComponent_td_56_Template, 5, 0, "td", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, DashboardComponent_tr_57_Template, 1, 0, "tr", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, DashboardComponent_tr_58_Template, 1, 0, "tr", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "mat-paginator", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, DashboardComponent_div_60_Template, 3, 0, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.map_id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.maps);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Claim Devices ", ctx.claimButton, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.topBarLoading == false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.topBarLoading == true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.filteredDevicesDatase);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBar"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatSpinner"]],
        styles: [".card-outer[_ngcontent-%COMP%] {\n    background-color: unset;\n    max-width: 1900px;\n    margin: auto;\n}\n\n.top-bar-container[_ngcontent-%COMP%] {\n    margin: 1em 0;\n}\n\n.top-bar[_ngcontent-%COMP%] {\n    background-color: white;\n    border-radius: 5px 5px 0 0;\n}\n\n.list[_ngcontent-%COMP%] {\n    margin: 1.34375em 1em 0;\n}\n\n.loading[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff9c;\n    border-radius: 5px;\n    z-index: 1000;\n}\n\n.loading[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin: auto;\n    align-self: center;\n}\n\n.button-container[_ngcontent-%COMP%] {\n    display: flex;\n    width: 300px;\n    justify-content: space-between;\n}\n\n.end[_ngcontent-%COMP%] {\n    justify-content: space-around !important;\n}\n\n.tooltip[_ngcontent-%COMP%] {\n    color: gray;\n}\n\n.tooltip[_ngcontent-%COMP%]:hover {\n    color: black;\n}\n\n\n\ntr.mat-row[_ngcontent-%COMP%], tr.mat-footer-row[_ngcontent-%COMP%] {\n    height: 2em;\n}\n\n.psk-table-container[_ngcontent-%COMP%] {\n    \n    \n    overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.psk-container[_ngcontent-%COMP%] {\n    border: none;\n    width: 100%;\n    min-width: 20em;\n    position: relative;\n    margin: auto;\n    border-radius: 0.3em;\n    max-width: 150em;\n}\n\n.psk-table-loading-shade[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 56px;\n    right: 0;\n    background: rgba(0, 0, 0, 0.15);\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n\n\n.mat-column-action[_ngcontent-%COMP%] {\n    width: 150px !important;\n}\n\n.edit[_ngcontent-%COMP%] {\n    background-color: #0d60aa !important;\n}\n\n.delete[_ngcontent-%COMP%] {\n    background-color: #f44336 !important;\n}\n\na.mac[_ngcontent-%COMP%] {\n    color: #6f9d2b !important;\n    cursor: pointer;\n}\n\n.location_on[_ngcontent-%COMP%] {\n    background-color: purple !important;\n}\n\n.location_off[_ngcontent-%COMP%] {\n    background-color: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBR0EsY0FBYzs7QUFFZDs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osUUFBUTtJQUNSLCtCQUErQjtJQUMvQixVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBR0Esa0JBQWtCOztBQUVsQjtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtb3V0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICAgIG1heC13aWR0aDogMTkwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLnRvcC1iYXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDFlbSAwO1xufVxuXG4udG9wLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG59XG5cbi5saXN0IHtcbiAgICBtYXJnaW46IDEuMzQzNzVlbSAxZW0gMDtcbn1cblxuLmxvYWRpbmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjljO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuXG4ubG9hZGluZyBkaXYge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5lbmQge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG59XG5cbi50b29sdGlwIHtcbiAgICBjb2xvcjogZ3JheTtcbn1cblxuLnRvb2x0aXA6aG92ZXIge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuXG4vKiBTdHJ1Y3R1cmUgKi9cblxudHIubWF0LXJvdyxcbnRyLm1hdC1mb290ZXItcm93IHtcbiAgICBoZWlnaHQ6IDJlbTtcbn1cblxuLnBzay10YWJsZS1jb250YWluZXIge1xuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbiAgICAvKiBtYXgtaGVpZ2h0OiA0MDBweDsgKi9cbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucHNrLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMjBlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xuICAgIG1heC13aWR0aDogMTUwZW07XG59XG5cbi5wc2stdGFibGUtbG9hZGluZy1zaGFkZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogNTZweDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5cbi8qIENvbHVtbiBXaWR0aHMgKi9cblxuLm1hdC1jb2x1bW4tYWN0aW9uIHtcbiAgICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcbn1cblxuLmVkaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDYwYWEgIWltcG9ydGFudDtcbn1cblxuLmRlbGV0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNiAhaW1wb3J0YW50O1xufVxuXG5hLm1hYyB7XG4gICAgY29sb3I6ICM2ZjlkMmIgIWltcG9ydGFudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb2NhdGlvbl9vbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlICFpbXBvcnRhbnQ7XG59XG5cbi5sb2NhdGlvbl9vZmYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
          }, {
            type: _connector_service__WEBPACK_IMPORTED_MODULE_8__["ConnectorService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Mist Installer';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 6,
        vars: 0,
        consts: [["role", "banner", 1, "toolbar"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyBpZD0iTG9nbyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTUwMCAxNTAwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPk1pc3QgSnVuaXBlciBMb2dvIFdoaXRlIEV4dHJhIExpZ2h0PC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yMjUuMTQsMTEwMi44MiwxNDIuMTksNzczLjE1djM1Ny4ycTAsMjkuNjUtMTMuMjMsNDQuNDh0LTM1LjEyLDE0LjgycS0yMS4xOCwwLTM0LjU5LTE0LjY1dC0xMy40Mi00NC42NVY3MjAuOTFxMC0zMy44OCwxNy42NS00NS43MXQ0Ny42NS0xMS44MmgzMi40OHEyOS4yOCwwLDQyLjUzLDUuMjl0MTkuNTksMTkuMDZxNi4zNSwxMy43NywxNC40Nyw0NC44M0wyOTUuMzgsMTAxNmw3NS4xOC0yODMuNDNxOC4xMi0zMS4wNiwxNC40Ny00NC44M3QxOS41OS0xOS4wNnExMy4yNS01LjI5LDQyLjU0LTUuMjloMzIuNDdxMzAsMCw0Ny42NSwxMS44MnQxNy42NSw0NS43MXY0MDkuNDRxMCwyOS42NS0xMy4yNCw0NC40OHQtMzUuNDcsMTQuODJxLTIwLjg0LDAtMzQuMjQtMTQuODJ0LTEzLjQxLTQ0LjQ4Vjc3My4xNWwtODIuOTUsMzI5LjY3cS04LjEyLDMyLjEyLTEzLjIzLDQ3LjEyVDMzMy41LDExNzcuM3EtMTMuNzcsMTIuMzUtMzguMTIsMTIuMzUtMTguMzYsMC0zMS4wNi03Ljk0YTU3LjI5LDU3LjI5LDAsMCwxLTE5Ljc3LTIwLjMsMTE1Ljc0LDExNS43NCwwLDAsMS0xMS4xMi0yNy4zNVEyMjkuMzgsMTExOS4wNiwyMjUuMTQsMTEwMi44MloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03NDIuMjMsODUyLjU3djI3OC40OXEwLDI4LjkzLTEzLjc2LDQzLjc3dC0zNC45NCwxNC44MnEtMjEuMTgsMC0zNC40Mi0xNS4xOHQtMTMuMjMtNDMuNDFWODU1LjM5cTAtMjguNTksMTMuMjMtNDMuMDZ0MzQuNDItMTQuNDdxMjEuMTYsMCwzNC45NCwxNC40N1Q3NDIuMjMsODUyLjU3WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTExNTIsMTA2My42NHEwLDM5Ljg4LTE5LjQyLDY4LjNUMTA3NS4yNiwxMTc1cS0zOCwxNC42NC05Mi4zLDE0LjY1LTUxLjg4LDAtODktMTUuODh0LTU0LjcxLTM5LjcxcS0xNy42NS0yMy44My0xNy42NS00Ny44M2EzNywzNywwLDAsMSwxMS4zLTI3LjE4cTExLjI4LTExLjI5LDI4LjU5LTExLjI5LDE1LjE2LDAsMjMuMjksNy40MVQ5MDAuMzYsMTA3NnExNC44MywyNS43NiwzNS40OCwzOC40N3Q1Ni4zLDEyLjdxMjguOTIsMCw0Ny40Ny0xMi44OHQxOC41My0yOS40N3EwLTI1LjQxLTE5LjI0LTM3LjA2dC02My4zNi0yMi4yNHEtNDkuNzUtMTIuMzUtODEtMjUuOTR0LTQ5Ljk1LTM1LjgzcS0xOC43MS0yMi4yMy0xOC43LTU0LjcxLDAtMjguOTMsMTcuMjktNTQuNzF0NTEtNDEuMTJxMzMuNjktMTUuMzUsODEuMzUtMTUuMzUsMzcuNDEsMCw2Ny4yNCw3Ljc2dDQ5Ljc3LDIwLjgzcTE5LjkzLDEzLjA2LDMwLjM2LDI4Ljk0dDEwLjQxLDMxLjA2cTAsMTYuNTktMTEuMTIsMjcuMTh0LTMxLjU5LDEwLjU5cS0xNC44MiwwLTI1LjI0LTguNDd0LTIzLjgyLTI1LjQyYTg3LjMxLDg3LjMxLDAsMCwwLTI1Ljc3LTIyLjU5cS0xNC44Mi04LjQ2LTQwLjI0LTguNDctMjYuMTIsMC00My40MSwxMS4xMnQtMTcuMywyNy43MXEwLDE1LjE4LDEyLjcxLDI0Ljg4dDM0LjI0LDE2LjA3cTIxLjUzLDYuMzUsNTkuMywxNS41Myw0NC44MiwxMC45Myw3My4yNCwyNi4xMXQ0My4wNiwzNS44M1ExMTUyLDEwMzcuMTgsMTE1MiwxMDYzLjY0WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEyMzguODYsODA2LjMzaDEwLjU5Vjc0OC40NHEwLTIzLjMsMS4yMy0zNi41M3Q2Ljg4LTIyLjc3YTQzLjM4LDQzLjM4LDAsMCwxLDE2LjI0LTE2LDQ2LDQ2LDAsMCwxLDIzLjY1LTYuMThxMTguMzUsMCwzMy4xOCwxMy43NmE0MC44Niw0MC44NiwwLDAsMSwxMi41MywyMi40MnEyLjY0LDEzLjIzLDIuNjUsMzcuNTl2NjUuNjVoMzUuMjlxMjAuNDgsMCwzMS4yNCw5Ljd0MTAuNzYsMjQuODlxMCwxOS40MS0xNS4zNSwyNy4xOHQtNDMuOTQsNy43NmgtMTh2MTc3LjE5cTAsMjIuNTksMS41OCwzNC43N3Q4LjQ4LDE5Ljc2cTYuODcsNy42MSwyMi40MSw3LjU5LDguNDgsMCwyMi45NC0zdDIyLjU5LTNxMTEuNjUsMCwyMSw5LjM2YTMxLjQxLDMxLjQxLDAsMCwxLDkuMzYsMjMuMTFxMCwyMy4yOS0yNS40MiwzNS42NnQtNzMuMDYsMTIuMzVxLTQ1LjIsMC02OC40OC0xNS4xOGE3MC40LDcwLjQsMCwwLDEtMzAuNTMtNDJxLTcuMjMtMjYuODItNy4yMy03MS42NXYtMTg1aC0xMi43MXEtMjAuODQsMC0zMS43Ny05Ljg4VDExOTQsODQwLjkyQTMxLjE2LDMxLjE2LDAsMCwxLDEyMDUuNSw4MTZRMTIxNyw4MDYuMzQsMTIzOC44Niw4MDYuMzNaIi8+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSIxMjQzLjMyIiB5PSI2NC4wMSIgd2lkdGg9IjEyMS41NSIgaGVpZ2h0PSIxMjEuNTUiIHJ4PSIxMi44NSIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMTI0My4zMiIgeT0iMjQ0Ljk5IiB3aWR0aD0iMTIxLjU1IiBoZWlnaHQ9IjEyMS41NSIgcng9IjEyLjg1Ii8+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSIxMjQzLjMyIiB5PSI0MjUuOTgiIHdpZHRoPSIxMjEuNTUiIGhlaWdodD0iMTIxLjU1IiByeD0iMTIuODUiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjEwNDAuOTIiIHk9IjI0NC45OSIgd2lkdGg9IjEyMS41NSIgaGVpZ2h0PSIxMjEuNTUiIHJ4PSIxMi44NSIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMTA0MC45MiIgeT0iNDI1Ljk4IiB3aWR0aD0iMTIxLjU1IiBoZWlnaHQ9IjEyMS41NSIgcng9IjEyLjg1Ii8+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSI4MzguNTEiIHk9IjQyNS45OCIgd2lkdGg9IjEyMS41NSIgaGVpZ2h0PSIxMjEuNTUiIHJ4PSIxMi44NSIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMTA0MC45MiIgeT0iNjA2Ljk2IiB3aWR0aD0iMTIxLjU1IiBoZWlnaHQ9IjEyMS41NSIgcng9IjEyLjg1Ii8+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSI4MzguNTEiIHk9IjYwNi45NiIgd2lkdGg9IjEyMS41NSIgaGVpZ2h0PSIxMjEuNTUiIHJ4PSIxMi44NSIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iNjM2LjExIiB5PSI2MDYuOTYiIHdpZHRoPSIxMjEuNTUiIGhlaWdodD0iMTIxLjU1IiByeD0iMTIuODUiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik05OC4wOCwxMjk5LjMzaDcuNzVMMTUxLDE0MTEuMTJoLThMMTMxLjUyLDEzODNINzIuMDhsLTExLjI1LDI4LjE3SDUyLjkyWm0zMC43MSw3Ni40Mi0yNi45MS02Ni42OC0yNy4wNiw2Ni42OFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xOTcuMiwxNDExLjEydi03LjJoOS4xM2MxNi44NywwLDIzLjEtNy4xOSwyMy4xLTIzLjA3di04MC43N2g3LjkxVjEzODFjMCwyMS05LjQzLDMwLjI3LTMwLjQxLDMwLjI3QzIwMywxNDExLjI3LDIwMS4xNiwxNDExLjI3LDE5Ny4yLDE0MTEuMTJaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjYyLjEyLDEzNzkuMDV2LTQ5LjloNy43NnY1MGMwLDE0LjM5LS4xNiwyNi41MiwyNi42LDI2LjUyLDI2LjYxLDAsMjYtMTIuMTMsMjYtMjcuMjd2LTQ5LjNoNy42djQ5LjNjMCwyMC4wOC0xLjM3LDM0LjMyLTMzLjYsMzQuMzJDMjY0LjEsMTQxMi43NywyNjIuMTIsMTM5OC41MywyNjIuMTIsMTM3OS4wNVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zNTQuMSwxMzI5LjQ1bDYuMDgtLjMuOTIsMTEuNTRjMy4zNC03LjIsMTEuMjUtMTMuNDksMzEtMTMuNDksMjcuNTIsMCwzMC4xLDEzLjQ5LDMwLjEsMzMuNzJ2NTAuMmgtNy43NXYtNDkuM2MwLTE2LjE5LTEuMzctMjcuMjgtMjQtMjcuMjgtMjQsMC0yOC41OCwxMi43NC0yOC41OCwyOS44MnY0Ni43NkgzNTQuMVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00NDYuODQsMTMwMi42Mmg3Ljc2djE0LjU0aC03Ljc2Wm0wLDI2LjUzaDcuNzZ2ODJoLTcuNzZaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDc5LjgzLDEzMjkuNDVsNi4wOS0uMy45MSwxMy4zM2M0LjU2LTEwLjQ5LDE0LjI5LTE1LjI4LDMzLjktMTUuMjgsMjcuMzcsMCwzNS40MiwxNi4xOCwzNS40Miw0Mi43MSwwLDI2LjM3LTgsNDIuNTYtMzUuNzIsNDIuNTYtMTksMC0yOC4yOC00LjM1LTMyLjg0LTE0LjY5djM4LjA2aC03Ljc2Wm02OC41Nyw0MC42MWMwLTIyLjQ4LTYuMzktMzUuNjctMjguODktMzUuNjdzLTMxLjkyLDguMjQtMzEuOTIsMzUuNjdjMCwyNy4yNyw5LjI3LDM1LjM2LDMxLjkyLDM1LjM2QzU0MS44NiwxNDA1LjQyLDU0OC40LDEzOTIuNTQsNTQ4LjQsMTM3MC4wNloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01NzIuNTgsMTM2OS45MWMwLTI0LjEzLDctNDIuNzEsMzguMzEtNDIuNzEsMzIuMzgsMCwzMy40NCwyMS41OCwzMy4yOSw0NC4yMUg1ODBjLjE2LDE5LjkzLDUuMzMsMzQuNjEsMzEuNDcsMzQuNjEsMTQsMCwyMC4zOC0zLjc0LDI3LjIyLTguNjlsNC4yNSw1LjU1Yy03LjYsNS41NC0xNi41Nyw5Ljg5LTMxLjQ3LDkuODlDNTc4LjY2LDE0MTIuNzcsNTcyLjU4LDEzOTQsNTcyLjU4LDEzNjkuOTFabTcuNi01LjU1aDU2LjU1Yy0uNzYtMTYuMzMtMS44Mi0zMC4yNy0yNi0zMC4yN0M1ODcuNDcsMTMzNC4wOSw1ODEuMDksMTM0Ni41Myw1ODAuMTgsMTM2NC4zNloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02NjUuNjIsMTMyOS40NWw2LjA4LS4zLjkxLDE0LjA4YzMtOC4wOSwxMy4zOC0xNS4xMywyOS41LTE1LjEzdjcuNDljLTIwLjY4LDAtMjguNzQsMTIuNzQtMjguNzQsMzB2NDUuNTZoLTcuNzVaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNzQ5LjU0LDEzNTUuNTJjMC0zOC41MSwxOS45Mi01Ny4yNCw1NS01Ny4yNCwxNC41OSwwLDI4LjI3LDQuMzQsMzgsMTMuMThsLTUuNDcsNS41NWMtOC41MS03LjQ5LTIwLjIyLTExLjM5LTMyLjUzLTExLjM5LTMwLjcxLDAtNDcsMTYuNjMtNDcsNDkuOXMxNS42Niw0OS45LDQ3LDQ5LjljMTcuNjMsMCwyNi42LTUuNTQsMzMuMjktMTEuNjlsNS40Nyw1LjRjLTcuNDQsNy0xOC4yNCwxMy42NC0zOS4wNywxMy42NEM3NjcuNzksMTQxMi43Nyw3NDkuNTQsMTM5My40NCw3NDkuNTQsMTM1NS41MloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik04NTUuNTEsMTM2OS45MWMwLTI4LjMzLDExLTQyLjcxLDM4LjkyLTQyLjcxczM5LjIzLDE0LjM4LDM5LjIzLDQyLjcxLTExLjI1LDQyLjg2LTM5LjIzLDQyLjg2Uzg1NS41MSwxMzk4LjM4LDg1NS41MSwxMzY5LjkxWm03MC4zOS4xNWMwLTIzLjUzLTguODItMzUuNjctMzEuNDctMzUuNjctMjIuNSwwLTMxLjE2LDEyLjE0LTMxLjE2LDM1LjY3czguNjYsMzUuNjYsMzEuMTYsMzUuNjZDOTE3LjA4LDE0MDUuNzIsOTI1LjksMTM5My41OSw5MjUuOSwxMzcwLjA2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTk1NC4xOCwxMzI5LjQ1bDYuMDgtLjMuOTIsMTEuNTRjMy03LjIsMTAuNzktMTMuNDksMzAuMjUtMTMuNDlzMjQuOTMsNS44NCwyNi45MSwxNC4zOGMzLjY1LTguMjQsMTIuMzEtMTQuMzgsMzEuOTItMTQuMzgsMjcuNTIsMCwyOS4zNSwxMy40OSwyOS4zNSwzMy43MnY1MC4yaC03Ljc2di00OS4zYzAtMTYuMTktLjYxLTI3LjI4LTIzLjI2LTI3LjI4LTI0LDAtMjcuODIsMTIuNzQtMjcuODIsMjkuODJ2NDYuNzZIMTAxM3YtNDkuM2MwLTE2LjE5LS42MS0yNy4yOC0yMy4yNi0yNy4yOC0yNCwwLTI3LjgzLDEyLjc0LTI3LjgzLDI5LjgydjQ2Ljc2aC03Ljc1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTExMDMuNjMsMTMyOS40NWw2LjA4LS4zLjkyLDEzLjMzYzQuNTYtMTAuNDksMTQuMjktMTUuMjgsMzMuOS0xNS4yOCwyNy4zNiwwLDM1LjQyLDE2LjE4LDM1LjQyLDQyLjcxLDAsMjYuMzctOC4wNiw0Mi41Ni0zNS43Myw0Mi41Ni0xOSwwLTI4LjI3LTQuMzUtMzIuODMtMTQuNjl2MzguMDZoLTcuNzZabTY4LjU3LDQwLjYxYzAtMjIuNDgtNi4zOS0zNS42Ny0yOC44OS0zNS42N3MtMzEuOTIsOC4yNC0zMS45MiwzNS42N2MwLDI3LjI3LDkuMjcsMzUuMzYsMzEuOTIsMzUuMzZDMTE2NS42NiwxNDA1LjQyLDExNzIuMiwxMzkyLjU0LDExNzIuMiwxMzcwLjA2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTExOTUuMTYsMTM4OC42NGMwLTIzLjM4LDE1LTI5LjY3LDU2LjEtMjkuNjdoNS40N2MtLjE1LTE3LjM5LTMuMTktMjQuNzMtMjQuMzMtMjQuNzNhNDcsNDcsMCwwLDAtMjUuMjMsNy4zNGwtNC4xMS02YzUuMzItMy42LDE3LTguMzksMjkuOC04LjM5LDI3LjM3LDAsMzEuNDcsOS43NCwzMS40NywzMy4yN3YzM2MwLDkuNTkuNjEsMTAuNzgsOS4xMiwxMC43OFYxNDExYTguMTQsOC4xNCwwLDAsMS0zLC4zYy0xMCwwLTEyLjkyLTQuNS0xMi45Mi0xMy43OS01LjMyLDEwLjE5LTE0LjE0LDE1LjI5LTMzLjc1LDE1LjI5QzEyMDEuMDksMTQxMi43NywxMTk1LjE2LDE0MDIuNDMsMTE5NS4xNiwxMzg4LjY0Wm02MS41Ny0xNS41OXYtN2gtNS4xN2MtMzguMzEsMC00OC44LDQuNS00OC44LDIyLjE4LDAsMTEuMjQsNSwxNy44MywyMS44OSwxNy44M0MxMjQ3LjQ2LDE0MDYsMTI1Ni43MywxMzk1LjgzLDEyNTYuNzMsMTM3My4wNVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMjkzLjA3LDEzMjkuNDVsNi4wOC0uMy45MSwxMS41NGMzLjM0LTcuMiwxMS4yNS0xMy40OSwzMS0xMy40OSwyNy41MSwwLDMwLjEsMTMuNDksMzAuMSwzMy43MnY1MC4yaC03Ljc2di00OS4zYzAtMTYuMTktMS4zNy0yNy4yOC0yNC0yNy4yOC0yNCwwLTI4LjU4LDEyLjc0LTI4LjU4LDI5LjgydjQ2Ljc2aC03Ljc1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEzODMuMzcsMTQzNnYtNi40NGg2LjU0YzcuMTUsMCwxMC40OS0yLjcsMTMuMDgtOS41OWwzLjQ5LTktMzIuNjgtODEuODJoOGwyOC43NCw3Mi42OCwyOC43My03Mi42OGg3Ljc2bC0zNi42NCw5MS43MWMtNC4xMSwxMC40OS05LjQzLDE1LjEzLTIwLjA3LDE1LjEzWiIvPjwvc3ZnPg=="], ["role", "main", 1, "content"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mist Installer UI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */", "[_nghost-%COMP%] {\n        font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-size: 14px;\n        color: #333;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n    \n    h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n        margin: 8px 0;\n    }\n    \n    p[_ngcontent-%COMP%] {\n        margin: 0;\n    }\n    \n    .spacer[_ngcontent-%COMP%] {\n        flex: 1;\n    }\n    \n    .toolbar[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        height: 40px;\n        display: flex;\n        align-items: center;\n        background-color: #0e62ad;\n        \n        color: white;\n        font-weight: 600;\n    }\n    \n    .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        margin: 0 16px;\n    }\n    \n    .content[_ngcontent-%COMP%] {\n        display: flex;\n        margin: 82px auto 32px;\n        padding: 0 16px;\n        max-width: 960px;\n        flex-direction: column;\n        align-items: center;\n    }\n    \n    svg.material-icons[_ngcontent-%COMP%] {\n        height: 24px;\n        width: auto;\n    }\n    \n    svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n        margin-right: 8px;\n    }\n    \n    .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n        fill: #888;\n    }\n    \n    .card-container[_ngcontent-%COMP%] {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        margin-top: 16px;\n    }\n    \n    .card[_ngcontent-%COMP%] {\n        border-radius: 4px;\n        border: 1px solid #eee;\n        background-color: #fafafa;\n        height: 40px;\n        width: 200px;\n        margin: 0 8px 16px;\n        padding: 16px;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        transition: all 0.2s ease-in-out;\n        line-height: 24px;\n    }\n    \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n        margin-right: 0;\n    }\n    \n    .card.card-small[_ngcontent-%COMP%] {\n        height: 16px;\n        width: 168px;\n    }\n    \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n        cursor: pointer;\n    }\n    \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n        transform: translateY(-3px);\n        box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n    }\n    \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n        fill: rgb(105, 103, 103);\n    }\n    \n    .card.highlight-card[_ngcontent-%COMP%] {\n        background-color: #1976d2;\n        color: white;\n        font-weight: 600;\n        border: none;\n        width: auto;\n        min-width: 30%;\n        position: relative;\n    }\n    \n    .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        margin-left: 60px;\n    }\n    \n    svg#rocket[_ngcontent-%COMP%] {\n        width: 80px;\n        position: absolute;\n        left: -10px;\n        top: -24px;\n    }\n    \n    svg#rocket-smoke[_ngcontent-%COMP%] {\n        height: calc(100vh - 95px);\n        position: absolute;\n        top: 10px;\n        right: 180px;\n        z-index: -10;\n    }\n    \n    a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n        color: #1976d2;\n        text-decoration: none;\n    }\n    \n    a[_ngcontent-%COMP%]:hover {\n        color: #125699;\n    }\n    \n    .terminal[_ngcontent-%COMP%] {\n        position: relative;\n        width: 80%;\n        max-width: 600px;\n        border-radius: 6px;\n        padding-top: 45px;\n        margin-top: 8px;\n        overflow: hidden;\n        background-color: rgb(15, 15, 16);\n    }\n    \n    .terminal[_ngcontent-%COMP%]::before {\n        content: \"\\2022 \\2022 \\2022\";\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 4px;\n        background: rgb(58, 58, 58);\n        color: #c2c3c4;\n        width: 100%;\n        font-size: 2rem;\n        line-height: 0;\n        padding: 14px 0;\n        text-indent: 4px;\n    }\n    \n    .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n        font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n        color: white;\n        padding: 0 1rem 1rem;\n        margin: 0;\n    }\n    \n    .circle-link[_ngcontent-%COMP%] {\n        height: 40px;\n        width: 40px;\n        border-radius: 40px;\n        margin: 8px;\n        background-color: white;\n        border: 1px solid #eeeeee;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        cursor: pointer;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n        transition: 1s ease-out;\n    }\n    \n    .circle-link[_ngcontent-%COMP%]:hover {\n        transform: translateY(-0.25rem);\n        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n    }\n    \n    footer[_ngcontent-%COMP%] {\n        margin-top: 8px;\n        display: flex;\n        align-items: center;\n        line-height: 20px;\n    }\n    \n    footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: center;\n    }\n    \n    .github-star-badge[_ngcontent-%COMP%] {\n        color: #24292e;\n        display: flex;\n        align-items: center;\n        font-size: 12px;\n        padding: 3px 10px;\n        border: 1px solid rgba(27, 31, 35, .2);\n        border-radius: 3px;\n        background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n        margin-left: 4px;\n        font-weight: 600;\n        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n    }\n    \n    .github-star-badge[_ngcontent-%COMP%]:hover {\n        background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n        border-color: rgba(27, 31, 35, .35);\n        background-position: -.5em;\n    }\n    \n    .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n        height: 16px;\n        width: 16px;\n        margin-right: 4px;\n    }\n    \n    svg#clouds[_ngcontent-%COMP%] {\n        position: fixed;\n        bottom: -160px;\n        left: -230px;\n        z-index: -10;\n        width: 1920px;\n    }\n    \n    \n    @media screen and (max-width: 767px) {\n        .card-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n            width: 100%;\n        }\n        .card[_ngcontent-%COMP%]:not(.highlight-card) {\n            height: 16px;\n            margin: 8px 0;\n        }\n        .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n            margin-left: 72px;\n        }\n        svg#rocket-smoke[_ngcontent-%COMP%] {\n            right: 120px;\n            transform: rotate(-5deg);\n        }\n    }\n    \n    @media screen and (max-width: 575px) {\n        svg#rocket-smoke[_ngcontent-%COMP%] {\n            display: none;\n            visibility: hidden;\n        }\n    }\n    \n    footer[_ngcontent-%COMP%] {\n        position: absolute;\n        bottom: 0px;\n        right: 0px\n    }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Y3sW":
    /*!***********************************************!*\
      !*** ./src/app/dashboard/dashboard-device.ts ***!
      \***********************************************/

    /*! exports provided: DeviceDialog */

    /***/
    function Y3sW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeviceDialog", function () {
        return DeviceDialog;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _dashboard_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard-error */
      "GZXf");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function DeviceDialog_mat_option_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var site_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", site_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", site_r2.name, " ");
        }
      }

      function DeviceDialog_mat_option_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var map_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", map_r3.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", map_r3.name, " ");
        }
      }

      var DeviceDialog = /*#__PURE__*/function () {
        function DeviceDialog(_http, _dialog, dialogRef, data, formBuilder) {
          _classCallCheck(this, DeviceDialog);

          this._http = _http;
          this._dialog = _dialog;
          this.dialogRef = dialogRef;
          this.data = data;
          this.formBuilder = formBuilder;
          this.frmDevice = this.formBuilder.group({
            height: [this.data.device.height, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)],
            map_id: [this.data.device.map_id],
            name: [this.data.device.name],
            orientation: [this.data.device.orientation],
            site_name: [this.data.device.site_name],
            x: [this.data.device.x],
            y: [this.data.device.y]
          });
          this.topBarLoading = false;
          this.maps = [];
        }

        _createClass(DeviceDialog, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadMaps();
          }
        }, {
          key: "changeSite",
          value: function changeSite() {
            this.frmDevice.patchValue({
              map_id: ""
            });
            this.loadMaps();
          }
        }, {
          key: "loadMaps",
          value: function loadMaps() {
            var _this10 = this;

            if (this.frmDevice.value.site_name == "") {
              this.frmDevice.get("map_id").disable();
              this.maps = [];
            } else {
              this.frmDevice.get("map_id").enable();
              this.topBarLoading = true;

              this._http.post('/api/maps/', {
                host: this.data.body.host,
                cookies: this.data.body.cookies,
                headers: this.data.body.headers,
                org_id: this.data.body.org_id,
                site_name: this.frmDevice.value.site_name
              }).subscribe({
                next: function next(data) {
                  return _this10.parseMap(data);
                },
                error: function error(_error8) {
                  var message = "There was an error... ";

                  if ("error" in _error8) {
                    message += _error8["error"]["message"];
                  }

                  _this10.topBarLoading = false;

                  _this10.openError(message);
                }
              });
            }
          }
        }, {
          key: "parseMap",
          value: function parseMap(data) {
            if (data.maps.length > 0) {
              this.maps = this.sortList(data.maps, "name");
            }

            this.topBarLoading = false;
          }
        }, {
          key: "confirm",
          value: function confirm() {
            this.dialogRef.close({
              device: this.frmDevice.getRawValue(),
              device_mac: this.data.device.mac
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          } // COMMON

        }, {
          key: "sortList",
          value: function sortList(data, attribute) {
            return data.sort(function (a, b) {
              var nameA = a[attribute].toUpperCase(); // ignore upper and lowercase

              var nameB = b[attribute].toUpperCase(); // ignore upper and lowercase

              if (nameA < nameB) {
                return -1;
              }

              if (nameA > nameB) {
                return 1;
              }

              return 0;
            });
          } // DIALOG BOXES
          // ERROR

        }, {
          key: "openError",
          value: function openError(message) {
            var dialogRef = this._dialog.open(_dashboard_error__WEBPACK_IMPORTED_MODULE_3__["ErrorDialog"], {
              data: message
            });
          }
        }]);

        return DeviceDialog;
      }();

      DeviceDialog.ɵfac = function DeviceDialog_Factory(t) {
        return new (t || DeviceDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
      };

      DeviceDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DeviceDialog,
        selectors: [["dashboard-device"]],
        decls: 44,
        vars: 8,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", "fxLayout", "column"], ["fxLayout", "row"], ["appearance", "outline"], ["matInput", "", "disabled", "", 3, "ngModel"], ["fxLayout", "column", 1, "create-form", 3, "formGroup"], ["matInput", "", "formControlName", "name"], ["formControlName", "site_name", 3, "selectionChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "map_id"], ["mat-dialog-actions", "", "fxLayout", "row", 2, "justify-content", "space-around"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "accent", "cdkFocusInitial", "", 3, "disabled", "click"], [3, "value"]],
        template: function DeviceDialog_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Provision Device");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "MAC ADDRESS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "SERIAL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "TYPE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "MODEL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "NAME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "SITE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-select", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function DeviceDialog_Template_mat_select_selectionChange_28_listener() {
              return ctx.changeSite();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "No Site");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, DeviceDialog_mat_option_31_Template, 2, 2, "mat-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "FLOORPLAN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "No FloorPlan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, DeviceDialog_mat_option_38_Template, 2, 2, "mat-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeviceDialog_Template_button_click_40_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeviceDialog_Template_button_click_42_listener() {
              return ctx.confirm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.device.mac);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.device.serial);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.device.type);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.device.model);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.frmDevice);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.sites);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.maps);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.frmDevice.invalid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]],
        styles: ["input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n    }\n    \n    \n    input[type=number][_ngcontent-%COMP%] {\n        -moz-appearance: textfield;\n    }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeviceDialog, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dashboard-device',
            templateUrl: 'dashboard-device.html'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_google_maps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/google-maps */
      "3sZV");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/chips */
      "f44v");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _login_login_2FA__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./login/login-2FA */
      "+2Ah");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "QX6l");
      /* harmony import */


      var _dashboard_dashboard_claim__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./dashboard/dashboard-claim */
      "c2k7");
      /* harmony import */


      var _dashboard_dashboard_unclaim__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./dashboard/dashboard-unclaim */
      "C9WT");
      /* harmony import */


      var _dashboard_dashboard_device__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./dashboard/dashboard-device */
      "Y3sW");
      /* harmony import */


      var _dashboard_dashboard_error__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./dashboard/dashboard-error */
      "GZXf");
      /* harmony import */


      var _dashboard_dashboard_warning__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./dashboard/dashboard-warning */
      "9GOe");
      /* harmony import */


      var _dashboard_dashboard_claim_details__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./dashboard/dashboard-claim-details */
      "8Gtv");
      /* harmony import */


      var _org_org_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./org/org.component */
      "IMNj");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppModule = // Diagnostic only: inspect router configuration
      function AppModule(router) {
        _classCallCheck(this, AppModule);

        // Use a custom replacer to display function names in the route configs
        var replacer = function replacer(key, value) {
          return typeof value === 'function' ? value.name : value;
        };
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_25__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_36__["Router"]));
        },
        providers: [{
          provide: _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
          useValue: {
            color: 'accent'
          }
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_24__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_5__["GoogleMapsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientJsonpModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_25__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"], _login_login_2FA__WEBPACK_IMPORTED_MODULE_27__["TwoFactorDialog"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_28__["DashboardComponent"], _dashboard_dashboard_claim__WEBPACK_IMPORTED_MODULE_29__["ClaimDialog"], _dashboard_dashboard_unclaim__WEBPACK_IMPORTED_MODULE_30__["UnclaimDialog"], _dashboard_dashboard_device__WEBPACK_IMPORTED_MODULE_31__["DeviceDialog"], _dashboard_dashboard_error__WEBPACK_IMPORTED_MODULE_32__["ErrorDialog"], _dashboard_dashboard_warning__WEBPACK_IMPORTED_MODULE_33__["WarningDialog"], _dashboard_dashboard_claim_details__WEBPACK_IMPORTED_MODULE_34__["ClaimDetailsDialog"], _org_org_component__WEBPACK_IMPORTED_MODULE_35__["OrgComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_24__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_5__["GoogleMapsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientJsonpModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_25__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"], _login_login_2FA__WEBPACK_IMPORTED_MODULE_27__["TwoFactorDialog"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_28__["DashboardComponent"], _dashboard_dashboard_claim__WEBPACK_IMPORTED_MODULE_29__["ClaimDialog"], _dashboard_dashboard_unclaim__WEBPACK_IMPORTED_MODULE_30__["UnclaimDialog"], _dashboard_dashboard_device__WEBPACK_IMPORTED_MODULE_31__["DeviceDialog"], _dashboard_dashboard_error__WEBPACK_IMPORTED_MODULE_32__["ErrorDialog"], _dashboard_dashboard_warning__WEBPACK_IMPORTED_MODULE_33__["WarningDialog"], _dashboard_dashboard_claim_details__WEBPACK_IMPORTED_MODULE_34__["ClaimDetailsDialog"], _org_org_component__WEBPACK_IMPORTED_MODULE_35__["OrgComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_24__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_5__["GoogleMapsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientJsonpModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"]],
            providers: [{
              provide: _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
              useValue: {
                color: 'accent'
              }
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_25__["AppComponent"]]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_36__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "c2k7":
    /*!**********************************************!*\
      !*** ./src/app/dashboard/dashboard-claim.ts ***!
      \**********************************************/

    /*! exports provided: ClaimDialog */

    /***/
    function c2k7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClaimDialog", function () {
        return ClaimDialog;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _dashboard_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard-error */
      "GZXf");
      /* harmony import */


      var _dashboard_claim_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard-claim-details */
      "8Gtv");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");

      function ClaimDialog_div_14_mat_card_1_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClaimDialog_div_14_mat_card_1_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var claimCode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", claimCode_r5.reason)("aria-label", claimCode_r5.reason);
        }
      }

      function ClaimDialog_div_14_mat_card_1_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClaimDialog_div_14_mat_card_1_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "content_copy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClaimDialog_div_14_mat_card_1_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClaimDialog_div_14_mat_card_1_button_8_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var claimCode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.remove(claimCode_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ClaimDialog_div_14_mat_card_1_button_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClaimDialog_div_14_mat_card_1_button_9_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var claimCode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r16.edit(claimCode_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          error: a0,
          warning: a1
        };
      };

      function ClaimDialog_div_14_mat_card_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClaimDialog_div_14_mat_card_1_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var claimCode_r5 = ctx.$implicit;
            return claimCode_r5.code = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ClaimDialog_div_14_mat_card_1_div_4_Template, 3, 0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ClaimDialog_div_14_mat_card_1_div_5_Template, 3, 2, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ClaimDialog_div_14_mat_card_1_div_6_Template, 3, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ClaimDialog_div_14_mat_card_1_div_7_Template, 3, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ClaimDialog_div_14_mat_card_1_button_8_Template, 3, 0, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ClaimDialog_div_14_mat_card_1_button_9_Template, 3, 0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var claimCode_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, !claimCode_r5.valid, claimCode_r5.duplicated));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", claimCode_r5.code)("readonly", claimCode_r5.readonly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", claimCode_r5.processed && claimCode_r5.success);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", claimCode_r5.processed && !claimCode_r5.success && claimCode_r5.reason);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !claimCode_r5.processed && !claimCode_r5.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !claimCode_r5.processed && claimCode_r5.duplicated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !claimCode_r5.processed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !claimCode_r5.processed);
        }
      }

      function ClaimDialog_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClaimDialog_div_14_mat_card_1_Template, 10, 12, "mat-card", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.claimCodes);
        }
      }

      function ClaimDialog_button_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClaimDialog_button_18_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.confirm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Claim");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.claimButtonDisabled);
        }
      }

      function ClaimDialog_button_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClaimDialog_button_19_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.details();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.isWorking);
        }
      }

      function ClaimDialog_button_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClaimDialog_button_20_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Done");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.isWorking);
        }
      }

      var ClaimDialog = /*#__PURE__*/function () {
        function ClaimDialog(dialogRef, _http, _dialog, data) {
          _classCallCheck(this, ClaimDialog);

          this.dialogRef = dialogRef;
          this._http = _http;
          this._dialog = _dialog;
          this.data = data;
          this.claimCodes = [];
          this.claimButtonDisabled = true;
          this.inputClaimCodes = "";
          this.body = this.data.body;
          this.isDone = false;
          this.claimResult = {};
          this.isWorking = false;
        }

        _createClass(ClaimDialog, [{
          key: "add",
          value: function add() {
            var _this11 = this;

            var regex = /^[0-9a-zA-Z]{5}-?[0-9a-zA-Z]{5}-?[0-9a-zA-Z]{5}$/i;
            this.inputClaimCodes.split(/[\s,; ]+/).forEach(function (element) {
              var claim = element.replace(";", "").replace(",", "").trim().toUpperCase();

              if (claim.length > 0) {
                var newClaim = {
                  code: claim,
                  success: null,
                  reason: null,
                  duplicated: false,
                  valid: false,
                  processed: false
                };

                if (newClaim.code.match(regex)) {
                  newClaim.valid = true;
                }

                _this11.claimCodes.forEach(function (element) {
                  if (element.code == newClaim.code) {
                    element.duplicated = true;
                    newClaim.duplicated = true;
                  }
                });

                _this11.claimCodes.push(newClaim);
              }
            });
            this.check_issues();
            this.inputClaimCodes = "";
          }
        }, {
          key: "edit",
          value: function edit(claimCode) {
            this.inputClaimCodes = claimCode.code;
            var index = this.claimCodes.indexOf(claimCode);
            this.claimCodes.splice(index, 1);
          }
        }, {
          key: "check_issues",
          value: function check_issues() {
            var issues = {
              invalid: [],
              duplicated: []
            };
            this.claimCodes.forEach(function (element) {
              if (element.valid == false) {
                issues.invalid.push(element.code);
              }

              if (element.duplicated == true) {
                issues.duplicated.push(element.code);
              }
            });

            if (this.claimCodes.length > 0 && issues.duplicated.length == 0 && issues.invalid.length == 0) {
              this.claimButtonDisabled = false;
            } else {
              this.claimButtonDisabled = true;
            }
          }
        }, {
          key: "remove",
          value: function remove(claimCode) {
            var duplicated_codes = [];
            var index = -1; // remove the claim code

            index = this.claimCodes.indexOf(claimCode);

            if (index >= 0) {
              this.claimCodes.splice(index, 1);
            } // if the removed claim code has the duplicated flag


            if (claimCode.duplicated) {
              // find other same codes
              this.claimCodes.forEach(function (element) {
                if (element.code == claimCode.code) {
                  duplicated_codes.push(element);
                }
              }); // if only one other same code, remove the duplicated flash

              if (duplicated_codes.length == 1) {
                index = this.claimCodes.indexOf(duplicated_codes[0]);
                this.claimCodes[index].duplicated = false;
              }
            } // check issues for "claim" button


            this.check_issues();
          } // CLAIM NEW CODES

        }, {
          key: "confirm",
          value: function confirm() {
            var _this12 = this;

            this.isWorking = true;
            this.isDone = true; // Add claim codes to request body

            this.body.claim_codes = [];
            this.claimCodes.forEach(function (element) {
              _this12.body.claim_codes.push(element.code);
            }); // Send request to server

            this._http.post('/api/devices/claim/', this.body).subscribe({
              next: function next(data) {
                // retrieve result data
                _this12.claimResult = data.results;

                _this12.claimCodes.forEach(function (element) {
                  element.processed = true;
                  var index = -1; // if code added to account

                  if (_this12.claimResult["added"].indexOf(element.code) >= 0) {
                    element.success = true; // if error when adding the code
                  } else if (_this12.claimResult["error"].indexOf(element.code) >= 0) {
                    index = _this12.claimResult["error"].indexOf(element.code);
                    element.success = false;
                    element.reason = _this12.claimResult["reason"][index]; // if code already claimed somewhere
                  } else if (_this12.claimResult["duplicated"].indexOf(element.code) >= 0) {
                    element.success = false;
                    element.reason = "Already Claimed";
                  }
                });

                _this12.isWorking = false;
              },
              error: function error(_error9) {
                var message = "Unable to create claim the devices... ";

                if ("error" in _error9) {
                  message += _error9["error"]["message"];
                }

                _this12.openError(message);

                _this12.isWorking = false;
              }
            });
          } // EXIT

        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          } // DIALOG BOXES
          // DETAILS

        }, {
          key: "details",
          value: function details() {
            console.log(this.claimResult);

            var dialogRef = this._dialog.open(_dashboard_claim_details__WEBPACK_IMPORTED_MODULE_3__["ClaimDetailsDialog"], {
              data: this.claimResult
            });
          } // ERROR

        }, {
          key: "openError",
          value: function openError(message) {
            var dialogRef = this._dialog.open(_dashboard_error__WEBPACK_IMPORTED_MODULE_2__["ErrorDialog"], {
              data: message
            });
          }
        }]);

        return ClaimDialog;
      }();

      ClaimDialog.ɵfac = function ClaimDialog_Factory(t) {
        return new (t || ClaimDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      ClaimDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ClaimDialog,
        selectors: [["dashboard-claim"]],
        decls: 21,
        vars: 5,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", "fxLayout", "column"], [2, "margin", "0 1em 1em", "color", "gray", "font-size", "small"], ["fxLayout", "row", "fxFill", "", 2, "padding", "0 2em"], ["fxFill", ""], ["matInput", "", "placeholder", "ABCDE-12345-F6G7H", "cdkFocusInitial", "", 3, "ngModel", "keydown.enter", "ngModelChange"], ["mat-icon-button", "", 1, "add-icon", 2, "height", "100%", 3, "click"], ["matTooltip", "Add Claim Codes", "aria-label", "Add Claim Codes"], [2, "max-width", "80em", "min-width", "20em"], ["fxFlex", "1 1 0", "fxLayout", "row wrap", "style", "width: 100%;", 4, "ngIf"], ["mat-dialog-actions", "", "fxLayout", "row", 2, "justify-content", "space-around"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "accent", "cdkFocusInitial", "", 3, "disabled", "click", 4, "ngIf"], ["fxFlex", "1 1 0", "fxLayout", "row wrap", 2, "width", "100%"], ["fxLayout", "row", "style", "background-color: #eeeeee; margin:5px; border-radius: 1.7em; padding: 0; height: 4em;", 4, "ngFor", "ngForOf"], ["fxLayout", "row", 2, "background-color", "#eeeeee", "margin", "5px", "border-radius", "1.7em", "padding", "0", "height", "4em"], [1, "claim-code", 2, "margin", "0 1em", "width", "11em", 3, "ngClass"], ["matInput", "", 3, "ngModel", "readonly", "ngModelChange"], ["fxLayout", "row", 2, "padding-bottom", "0.5em", "margin-right", "1em"], ["style", "height: 100%;", "class", "success icon-text", 4, "ngIf"], ["style", "height: 100%;", "class", "error icon-text", 4, "ngIf"], ["style", "height: 100%;", "class", "warning icon-text", 4, "ngIf"], ["mat-icon-button", "", "style", "height: 100%;", "class", "delete-icon", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "style", "height: 100%;", "class", "add-icon", 3, "click", 4, "ngIf"], [1, "success", "icon-text", 2, "height", "100%"], ["matTooltip", "Claim Code Added", "aria-label", "Claim Code Added"], [1, "error", "icon-text", 2, "height", "100%"], [3, "matTooltip", "aria-label"], ["matTooltip", "Invalid Format", "aria-label", "Invalid Format"], [1, "warning", "icon-text", 2, "height", "100%"], ["matTooltip", "Duplicated Claim Code", "aria-label", "Duplicated Claim Code"], ["mat-icon-button", "", 1, "delete-icon", 2, "height", "100%", 3, "click"], ["matTooltip", "Delete Claim Code", "aria-label", "Delete Claim Code"], ["matTooltip", "Edit Claim Code", "aria-label", "Edit Claim Code"], ["mat-raised-button", "", "color", "accent", "cdkFocusInitial", "", 3, "disabled", "click"]],
        template: function ClaimDialog_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Claim new devices");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "HINT: you can paste mutliple claim codes separated by a SPACE, a COMMA or a SEMICOLUMN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Claim Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function ClaimDialog_Template_input_keydown_enter_9_listener() {
              return ctx.add();
            })("ngModelChange", function ClaimDialog_Template_input_ngModelChange_9_listener($event) {
              return ctx.inputClaimCodes = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClaimDialog_Template_button_click_10_listener() {
              return ctx.add();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "done");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ClaimDialog_div_14_Template, 2, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClaimDialog_Template_button_click_16_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ClaimDialog_button_18_Template, 2, 1, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ClaimDialog_button_19_Template, 2, 1, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ClaimDialog_button_20_Template, 2, 1, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputClaimCodes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.claimCodes.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isDone);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDone);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDone);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexFillDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__["DefaultClassDirective"]],
        styles: ["input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n    }\n    \n    \n    .icon-text[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: center;\n        cursor: default;\n    }\n    \n    input[type=number][_ngcontent-%COMP%] {\n        -moz-appearance: textfield;\n    }\n    \n    .delete-icon[_ngcontent-%COMP%] {\n        color: #333;\n        transition: color 250ms ease-in-out;\n    }\n    \n    .delete-icon[_ngcontent-%COMP%]:hover {\n        color: red;\n    }\n    \n    .add-icon[_ngcontent-%COMP%] {\n        color: #333;\n        transition: color 250ms ease-in-out;\n    }\n    \n    .add-icon[_ngcontent-%COMP%]:hover {\n        color: green;\n    }\n    \n    .claim-code-input[_ngcontent-%COMP%] {\n        background-color: white;\n        transition: color 250ms ease-in-out;\n    }\n    \n    .claim-code[_ngcontent-%COMP%] {\n        color: black;\n        transition: color 250ms ease-in-out;\n    }\n    \n    .success[_ngcontent-%COMP%] {\n        color: green;\n    }\n    \n    .warning[_ngcontent-%COMP%] {\n        color: coral;\n    }\n    \n    .error[_ngcontent-%COMP%] {\n        color: red;\n    }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClaimDialog, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dashboard-claim',
            templateUrl: 'dashboard-claim.html'
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "l5d9":
    /*!**************************************!*\
      !*** ./src/app/connector.service.ts ***!
      \**************************************/

    /*! exports provided: ConnectorService */

    /***/
    function l5d9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectorService", function () {
        return ConnectorService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ConnectorService = /*#__PURE__*/function () {
        function ConnectorService() {
          _classCallCheck(this, ConnectorService);

          this.headersSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.cookiesSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.hostSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
          this.selfSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.orgIdSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
          this.siteNameSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
          this.googleApiKey = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
          this.headers = this.headersSource.asObservable();
          this.host = this.hostSource.asObservable();
          this.cookies = this.cookiesSource.asObservable();
          this.self = this.selfSource.asObservable();
          this.org_id = this.orgIdSource.asObservable();
          this.site_name = this.siteNameSource.asObservable();
          this.google_api_key = this.googleApiKey.asObservable();
        }

        _createClass(ConnectorService, [{
          key: "headersSet",
          value: function headersSet(data) {
            this.headersSource.next(data);
          }
        }, {
          key: "cookiesSet",
          value: function cookiesSet(data) {
            this.cookiesSource.next(data);
          }
        }, {
          key: "hostSet",
          value: function hostSet(data) {
            this.hostSource.next(data);
          }
        }, {
          key: "selfSet",
          value: function selfSet(data) {
            this.selfSource.next(data);
          }
        }, {
          key: "orgIdSet",
          value: function orgIdSet(data) {
            this.orgIdSource.next(data);
          }
        }, {
          key: "siteNameSet",
          value: function siteNameSet(data) {
            this.siteNameSource.next(data);
          }
        }, {
          key: "googleApiKeySet",
          value: function googleApiKeySet(data) {
            this.googleApiKey.next(data);
          }
        }]);

        return ConnectorService;
      }();

      ConnectorService.ɵfac = function ConnectorService_Factory(t) {
        return new (t || ConnectorService)();
      };

      ConnectorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ConnectorService,
        factory: ConnectorService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConnectorService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "QX6l");
      /* harmony import */


      var _org_org_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./org/org.component */
      "IMNj");

      var routes = [{
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, {
        path: 'select',
        component: _org_org_component__WEBPACK_IMPORTED_MODULE_4__["OrgComponent"]
      }, {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
      }, {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }, {
        path: '**',
        redirectTo: '/login'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _login_2FA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login-2FA */
      "+2Ah");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _connector_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../connector.service */
      "l5d9");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function LoginComponent_mat_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var host_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", host_r3.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", host_r3.viewValue, " ");
        }
      }

      function LoginComponent_div_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(_formBuilder, _http, _router, _appService, _dialog, _platformLocation) {
          _classCallCheck(this, LoginComponent);

          this._formBuilder = _formBuilder;
          this._http = _http;
          this._router = _router;
          this._appService = _appService;
          this._dialog = _dialog;
          this._platformLocation = _platformLocation;
          this.host = null;
          this.headers = {};
          this.cookies = {};
          this.self = {};
          this.show_github_fork_me = false;
          this.hostnames_to_show_github_fork_me = ["localhost", "127.0.0.1", "installer.mist-lab.fr"];
          this.hosts = [{
            value: 'api.mist.com',
            viewValue: 'US - manage.mist.com'
          }, {
            value: 'api.eu.mist.com',
            viewValue: 'EU - manage.eu.mist.com'
          }, {
            value: 'api.gc1.mist.com',
            viewValue: 'GCP - manage.gc1.mist.com'
          }]; // LOGIN FORM

          this.frmStepLogin = this._formBuilder.group({
            host: [''],
            credentials: this._formBuilder.group({
              email: [''],
              password: ['']
            }),
            token: ['']
          });
          this.error_mess = {
            "credentials": "",
            "token": ""
          };
        } //// INIT ////


        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            if (this.hostnames_to_show_github_fork_me.indexOf(this._platformLocation.hostname) >= 0) {
              this.show_github_fork_me = true;
            }

            this.frmStepLogin = this._formBuilder.group({
              host: ['api.mist.com'],
              credentials: this._formBuilder.group({
                email: [''],
                password: ['']
              }),
              token: [""]
            });

            this._http.get('/api/gap').subscribe({
              next: function next(data) {
                return _this13._appService.googleApiKeySet(data.gap);
              },
              error: function error(_error10) {
                return console.error("Unable to load the Google API Key... Maps won't be available...");
              }
            });
          } //// COMMON ////

        }, {
          key: "check_host",
          value: function check_host() {
            if (this.frmStepLogin.value.host != '') {
              return true;
            } else {
              return false;
            }
          } // RESET AUTHENTICATION FORM

        }, {
          key: "reset_response",
          value: function reset_response() {
            this.host = null;

            this._appService.headersSet({});

            this._appService.cookiesSet({});

            this._appService.selfSet({});

            this._appService.hostSet(this.host);

            this.reset_error_mess();
          }
        }, {
          key: "reset_error_mess",
          value: function reset_error_mess() {
            this.error_mess = {
              "credentials": "",
              "token": ""
            };
          } // PARSE AUTHENTICATION RESPONSE FROM SERVER

        }, {
          key: "parse_response",
          value: function parse_response(data) {
            if ("error" in data) {
              this.loading = false;
              this.error_mess["username"] = data.error;
            } else if ("data" in data) {
              if ("detail" in data.data) {
                this.error_message(data["method"], data.data.detail);
              } else if ("two_factor_required" in data.data && "two_factor_passed" in data.data) {
                if (data.data["two_factor_required"] == false) {
                  this.authenticated(data);
                } else if (data.data["two_factor_passed"] == true) {
                  this.authenticated(data);
                } else {
                  this.open2FA();
                }
              } else {
                this.authenticated(data);
              }
            }
          } // WHEN AUTHENTICATION IS NOT OK

        }, {
          key: "error_message",
          value: function error_message(method, message) {
            this.loading = false;
            this.error_mess[method] = message;
          } // WHEN AUTHENTICATION IS OK

        }, {
          key: "authenticated",
          value: function authenticated(data) {
            this._appService.headersSet(data.headers);

            this._appService.cookiesSet(data.cookies);

            this._appService.hostSet(data.host);

            this._appService.selfSet(data.data);

            this.loading = false;

            this._router.navigate(['/select']);
          } //// AUTHENTICATION ////

        }, {
          key: "submitCredentials",
          value: function submitCredentials() {
            var _this14 = this;

            this.reset_response();

            if (this.check_host()) {
              this.loading = true;

              this._http.post('/api/login/', {
                host: this.frmStepLogin.value.host,
                email: this.frmStepLogin.value.credentials.email,
                password: this.frmStepLogin.value.credentials.password
              }).subscribe({
                next: function next(data) {
                  return _this14.parse_response(data);
                },
                error: function error(_error11) {
                  return _this14.error_message("credentials", _error11.error.message);
                }
              });
            }
          }
        }, {
          key: "submitToken",
          value: function submitToken() {
            var _this15 = this;

            this.reset_response();

            if (this.check_host()) {
              this.loading = true;

              this._http.post('/api/login/', {
                host: this.frmStepLogin.value.host,
                token: this.frmStepLogin.value.token
              }).subscribe({
                next: function next(data) {
                  return _this15.parse_response(data);
                },
                error: function error(_error12) {
                  return _this15.error_message("credentials", _error12.error.message);
                }
              });
            }
          }
        }, {
          key: "submit2FA",
          value: function submit2FA(twoFactor) {
            var _this16 = this;

            if (this.check_host()) {
              this.loading = true;

              this._http.post('/api/login/', {
                host: this.frmStepLogin.value.host,
                email: this.frmStepLogin.value.credentials.email,
                password: this.frmStepLogin.value.credentials.password,
                two_factor: twoFactor
              }).subscribe({
                next: function next(data) {
                  return _this16.parse_response(data);
                },
                error: function error(_error13) {
                  return _this16.error_message("credentials", _error13.error.message);
                }
              });
            }
          } //// DIALOG BOX ////

        }, {
          key: "open2FA",
          value: function open2FA() {
            var _this17 = this;

            var dialogRef = this._dialog.open(_login_2FA__WEBPACK_IMPORTED_MODULE_1__["TwoFactorDialog"], {});

            dialogRef.afterClosed().subscribe(function (result) {
              _this17.submit2FA(result);
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_connector_service__WEBPACK_IMPORTED_MODULE_5__["ConnectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 53,
        vars: 9,
        consts: [[1, "card-outer"], [1, "login-form", 3, "formGroup"], ["fxLayout", "column", 1, "login-form-outer", 3, "formGroup"], [1, "login-form-inner"], ["fxLayout", "column", 1, "login-step"], ["appearance", "outline"], ["formControlName", "host"], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayout", "row", 1, "login-form-or"], ["mat-fab", "", "color", "accent", "aria-label", "AND", 1, "disable-click"], ["fxLayout", "row", 1, "login-step"], ["formGroupName", "credentials", "fxLayout", "column", 1, "login-form-inputs"], ["matInput", "", "formControlName", "email", "type", "email"], ["matInput", "", "type", "password", "formControlName", "password", 3, "keydown.enter"], [2, "margin-bottom", "1em", "min-height", "20px"], [2, "color", "red", "font-weight", "normal"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["fxLayout", "column", 1, "login-form-or"], [3, "vertical"], ["mat-fab", "", "color", "accent", "aria-label", "OR", 1, "disable-click"], ["fxLayout", "column", 1, "login-form-inputs"], ["type", "text", "matInput", "", "formControlName", "token", 3, "keydown.enter"], ["class", "loading", "fxLayout", "row", 4, "ngIf"], ["class", "github-fork-me", 4, "ngIf"], [3, "value"], ["fxLayout", "row", 1, "loading"], ["fxLayout", "column"], [1, "github-fork-me"], ["href", "https://github.com/tmunzer/mist_claim_web_ui", "target", "_blank", 1, "github-fork-me"], ["loading", "lazy", "width", "149", "height", "149", "src", "https://github.blog/wp-content/uploads/2008/12/forkme_right_red_aa0000.png?resize=149%2C149", "alt", "Fork me on GitHub", "data-recalc-dims", "1", 1, "attachment-full", "size-full"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Mist Cloud");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_mat_option_9_Template, 2, 2, "mat-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " AND ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Access with Login/Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function LoginComponent_Template_input_keydown_enter_26_listener() {
              return ctx.submitCredentials();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_31_listener() {
              return ctx.submitCredentials();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Continue with credentials");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-divider", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " OR ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-divider", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Access with API Token");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "API Token");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function LoginComponent_Template_input_keydown_enter_44_listener() {
              return ctx.submitToken();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_49_listener() {
              return ctx.submitToken();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Continue with API Token");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, LoginComponent_div_51_Template, 3, 0, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, LoginComponent_div_52_Template, 3, 0, "div", 23);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.frmStepLogin);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.frmStepLogin);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hosts);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.error_mess.credentials);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vertical", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vertical", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.error_mess.token);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show_github_fork_me);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatSpinner"]],
        styles: ["mat-card[_ngcontent-%COMP%] {\n    background-color: #0e62ad;\n}\n\n.login-form[_ngcontent-%COMP%] {\n    background-color: #0e62ad;\n}\n\n.login-form-inner[_ngcontent-%COMP%] {\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 50em;\n    position: relative;\n    margin: auto;\n    padding: 2em;\n    border-radius: 0.3em;\n}\n\n.login-form-outer[_ngcontent-%COMP%] {\n    width: 100%;\n    background-color: #0e62ad;\n}\n\n.login-form-inputs[_ngcontent-%COMP%] {\n    padding: 10px;\n    width: 25em;\n    text-align: center;\n    justify-content: space-between;\n}\n\n.login-form-or[_ngcontent-%COMP%] {\n    padding: 10px;\n    text-align: center;\n    justify-content: space-between;\n}\n\n.disable-click[_ngcontent-%COMP%] {\n    pointer-events: none;\n    cursor: default;\n}\n\n.login-step[_ngcontent-%COMP%] {\n    border: solid 1px lightgray;\n    background-color: white;\n    border-radius: 5px;\n    margin: -2em;\n    padding: 2em;\n}\n\n.loading[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff9c;\n    border-radius: 5px;\n}\n\n.loading[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin: auto;\n    align-self: center;\n}\n\n.github-fork-me[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 0;\n    z-index: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixhQUFhO0FBQ2pCIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBlNjJhZDtcbn1cblxuLmxvZ2luLWZvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTYyYWQ7XG59XG5cbi5sb2dpbi1mb3JtLWlubmVyIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtaW4td2lkdGg6IDUwZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG59XG5cbi5sb2dpbi1mb3JtLW91dGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU2MmFkO1xufVxuXG4ubG9naW4tZm9ybS1pbnB1dHMge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDI1ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmxvZ2luLWZvcm0tb3Ige1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmRpc2FibGUtY2xpY2sge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmxvZ2luLXN0ZXAge1xuICAgIGJvcmRlcjogc29saWQgMXB4IGxpZ2h0Z3JheTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luOiAtMmVtO1xuICAgIHBhZGRpbmc6IDJlbTtcbn1cblxuLmxvYWRpbmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjljO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmxvYWRpbmcgZGl2IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uZ2l0aHViLWZvcmstbWUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTAwMDtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _connector_service__WEBPACK_IMPORTED_MODULE_5__["ConnectorService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map