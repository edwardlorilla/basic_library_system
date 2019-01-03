(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/book/create.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/book/create.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixin_search_author__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixin/search/author */ "./resources/js/components/mixin/search/author.js");
/* harmony import */ var _mixin_search_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixin/search/category */ "./resources/js/components/mixin/search/category.js");
/* harmony import */ var _upload_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../upload/index */ "./resources/js/components/upload/index.vue");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixin_search_author__WEBPACK_IMPORTED_MODULE_0__["default"], _mixin_search_category__WEBPACK_IMPORTED_MODULE_1__["default"]],
  components: {
    upload: _upload_index__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      form: {
        isbn: '',
        title: '',
        date_of_publication: '',
        category_id: '',
        author_id: '',
        file: '',
        photo: {
          url: ''
        }
      },
      errors: {},
      loading: false,
      disabled: false
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    if (to.params.id) {
      axios.get("/api/books/".concat(to.params.id)).then(function (response) {
        next(function (vm) {
          return vm.setData(response.data);
        });
      }).catch(function (error) {
        if (error.response.statusText) {
          next(function (vm) {
            return vm.$message({
              type: 'error',
              message: error.response.statusText
            });
          });
        }
      });
    } else {
      next();
    }
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var vm = this;

    if (to.params.id) {
      axios.get("/api/books/".concat(to.params.id)).then(function (response) {
        vm.setData(response.data);
        next();
      }).catch(function (error) {
        if (error.response.statusText) {
          vm.$message({
            type: 'error',
            message: error.response.statusText
          });
        }
      });
    } else {
      next();
    }
  },
  methods: {
    setData: function setData(response) {
      var vm = this;
      vm.authors = [];
      vm.categories = [];
      vm.authors = [{
        value: response.author.id,
        label: response.author.name
      }];
      vm.categories = [{
        value: response.category.id,
        label: response.category.name
      }];
      vm.form = response;
      vm.form.author_id = response.author.id;
      vm.form.category_id = response.category.id;
    },
    onCancel: function onCancel() {
      this.$router.push({
        name: 'view-book'
      });
    },
    objectToFormData: function objectToFormData(obj, form, namespace) {
      var vm = this,
          fd = form || new FormData();
      var formKey;

      for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
          if (namespace) {
            formKey = namespace + '[' + property + ']';
          } else {
            formKey = property;
          }

          if (_typeof(obj[property]) === 'object' && !(obj[property] instanceof File)) {
            vm.objectToFormData(obj[property], fd, property);
          } else {
            // if it's a string or a File object
            fd.append(formKey, obj[property]);
          }
        }
      }

      return fd;
    },
    onSubmit: function onSubmit() {
      var vm = this;
      this.$refs.form.validate(function (valid) {
        if (valid) {
          vm.disabled = true;
          vm.errors = {};
          var id = vm.$route.params.id;
          var formData = vm.objectToFormData(vm.form);
          formData.append('date_of_publication', vm.form.date_of_publication);
          axios.post("/api/books".concat(id ? "/".concat(id) : ''), formData).then(function () {
            vm.disabled = false;
            vm.$message({
              type: 'success',
              message: 'Book has been created'
            });
          }).catch(function (error) {
            vm.disabled = false;

            if (error.response.data.errors && error.response.data.message) {
              vm.errors = error.response.data.errors;
              vm.$message({
                message: error.response.data.message,
                type: 'error'
              });
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/upload/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/upload/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['image'],
  data: function data() {
    return {
      imageUrl: this.image ? '/upload/' + this.image : '',
      raw: ''
    };
  },
  methods: {
    handleRemove: function handleRemove(file, fileList) {
      axios.delete('/api/upload/' + file.uid);
    },
    handleChange: function handleChange(file, fileList) {
      var vm = this;
      vm.$emit('file', file.raw);
      vm.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeRemove: function beforeRemove(file, fileList) {
      return this.$confirm("do you really want to delete ".concat(file.name, "\uFF1F"));
    },
    beforeAvatarUpload: function beforeAvatarUpload(file) {
      var isJPG = file.type === 'image/jpeg';
      var isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('Uploading avatar images can only be in JPG format!');
      }

      if (!isLt2M) {
        this.$message.error("Upload avatar image size can't exceed 2MB!");
      }

      return isJPG && isLt2M;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/upload/index.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/upload/index.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.avatar-uploader .el-upload {\n    border: 1px dashed #d9d9d9;\n    border-radius: 6px;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n    border-color: #409EFF;\n}\n.avatar-uploader-icon {\n    font-size: 28px;\n    color: #8c939d;\n    width: 178px;\n    height: 178px;\n    line-height: 178px;\n    text-align: center;\n}\n.avatar {\n    width: 178px;\n    height: 178px;\n    display: block;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/upload/index.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/upload/index.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/upload/index.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/book/create.vue?vue&type=template&id=764a3e32&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/book/create.vue?vue&type=template&id=764a3e32& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-row",
        [
          _c(
            "el-col",
            { attrs: { span: 24 } },
            [
              _c(
                "el-card",
                { attrs: { shadow: "never" } },
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _c("span", [
                      _vm._v(
                        _vm._s(_vm.$route.params.id ? "Edit" : "Create") +
                          " Book"
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "el-form",
                    {
                      ref: "form",
                      attrs: { model: _vm.form, "label-width": "120px" },
                      nativeOn: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.onSubmit($event)
                        }
                      }
                    },
                    [
                      _c("upload", {
                        attrs: {
                          image: _vm.form.photo ? _vm.form.photo.url : ""
                        },
                        on: {
                          file: function($event) {
                            _vm.form.file = $event
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        { attrs: { prop: "category_id", label: "Category" } },
                        [
                          _c(
                            "el-select",
                            {
                              attrs: {
                                name: "category_id",
                                filterable: "",
                                remote: "",
                                "reserve-keyword": "",
                                placeholder: "Please enter a keyword",
                                "remote-method": _vm.search_category,
                                loading: _vm.loading
                              },
                              model: {
                                value: _vm.form.category_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "category_id", $$v)
                                },
                                expression: "form.category_id"
                              }
                            },
                            _vm._l(_vm.categories, function(item) {
                              return _c("el-option", {
                                key: item.value,
                                attrs: { label: item.label, value: item.value }
                              })
                            }),
                            1
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.errors.category_id, function(error) {
                            return _vm.errors.category_id
                              ? _c(
                                  "div",
                                  { staticClass: "el-form-item__error" },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(error) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              : _vm._e()
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        { attrs: { prop: "author_id", label: "Author" } },
                        [
                          _c(
                            "el-select",
                            {
                              attrs: {
                                filterable: "",
                                remote: "",
                                "reserve-keyword": "",
                                placeholder: "Please enter a keyword",
                                "remote-method": _vm.search_author,
                                loading: _vm.loading
                              },
                              model: {
                                value: _vm.form.author_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "author_id", $$v)
                                },
                                expression: "form.author_id"
                              }
                            },
                            _vm._l(_vm.authors, function(item) {
                              return _c("el-option", {
                                key: item.value,
                                attrs: { label: item.label, value: item.value }
                              })
                            }),
                            1
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.errors.author_id, function(error) {
                            return _vm.errors.author_id
                              ? _c(
                                  "div",
                                  { staticClass: "el-form-item__error" },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(error) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              : _vm._e()
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        { attrs: { prop: "isbn", label: "ISBN" } },
                        [
                          _c("el-input", {
                            attrs: {
                              placeholder: "Enter ISBN",
                              type: "text",
                              "auto-complete": "off"
                            },
                            model: {
                              value: _vm.form.isbn,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "isbn", $$v)
                              },
                              expression: "form.isbn"
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.isbn, function(error) {
                            return _vm.errors.isbn
                              ? _c(
                                  "div",
                                  { staticClass: "el-form-item__error" },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(error) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              : _vm._e()
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        { attrs: { prop: "title", label: "Title" } },
                        [
                          _c("el-input", {
                            attrs: {
                              placeholder: "Enter Title",
                              type: "text",
                              "auto-complete": "off"
                            },
                            model: {
                              value: _vm.form.title,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "title", $$v)
                              },
                              expression: "form.title"
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.title, function(error) {
                            return _vm.errors.title
                              ? _c(
                                  "div",
                                  { staticClass: "el-form-item__error" },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(error) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              : _vm._e()
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "date_of_publication",
                            rules: _vm.$root.validate.required,
                            label: "Date of Publication"
                          }
                        },
                        [
                          _c("el-date-picker", {
                            attrs: { type: "date", placeholder: "Pick a day" },
                            model: {
                              value: _vm.form.date_of_publication,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "date_of_publication", $$v)
                              },
                              expression: "form.date_of_publication"
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.date_of_publication, function(
                            error
                          ) {
                            return _vm.errors.date_of_publication
                              ? _c(
                                  "div",
                                  { staticClass: "el-form-item__error" },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(error) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              : _vm._e()
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        [
                          _c(
                            "el-button",
                            {
                              attrs: { loading: _vm.disabled, type: "primary" },
                              on: {
                                click: function($event) {
                                  _vm.onSubmit("form")
                                }
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$route.params.id ? "Edit" : "Create"
                                ) + " Book\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("el-button", { on: { click: _vm.onCancel } }, [
                            _vm._v("Cancel")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/upload/index.vue?vue&type=template&id=7610a50f&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/upload/index.vue?vue&type=template&id=7610a50f& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-form-item",
    { attrs: { label: "Photo" } },
    [
      _c(
        "el-upload",
        {
          staticClass: "avatar-uploader",
          attrs: {
            "auto-upload": false,
            action: "/api/books/upload",
            "show-file-list": false,
            "on-change": _vm.handleChange,
            name: "file",
            "on-remove": _vm.handleRemove,
            "before-remove": _vm.beforeRemove,
            "before-upload": _vm.beforeAvatarUpload
          }
        },
        [
          !_vm.imageUrl && _vm.image
            ? _c("img", {
                staticClass: "avatar",
                attrs: { src: "/upload/" + _vm.image }
              })
            : _vm.imageUrl || _vm.image
              ? _c("img", {
                  staticClass: "avatar",
                  attrs: { src: _vm.imageUrl }
                })
              : _c("i", { staticClass: "el-icon-plus avatar-uploader-icon" })
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/book/create.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/book/create.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_764a3e32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=764a3e32& */ "./resources/js/components/book/create.vue?vue&type=template&id=764a3e32&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/components/book/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_764a3e32___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_764a3e32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/book/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/book/create.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/book/create.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/book/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/book/create.vue?vue&type=template&id=764a3e32&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/book/create.vue?vue&type=template&id=764a3e32& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_764a3e32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=764a3e32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/book/create.vue?vue&type=template&id=764a3e32&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_764a3e32___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_764a3e32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/mixin/search/author.js":
/*!********************************************************!*\
  !*** ./resources/js/components/mixin/search/author.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      authors: []
    };
  },
  methods: {
    search_author: function search_author(query) {
      var vm = this;

      if (query !== '') {
        vm.onSearchAuthor(query, vm);
      } else {
        vm.loading = false;
        vm.authors = [];
      }
    },
    onSearchAuthor: _.debounce(function (query, vm) {
      vm.loading = true;
      axios.get('/api/authors/search?search=' + query).then(function (q) {
        vm.loading = false;
        vm.authors = q.data.data.map(function (item) {
          return {
            value: item.id,
            label: item.name
          };
        });
      }).catch(function () {
        vm.loading = false;
      });
    }, 350)
  }
});

/***/ }),

/***/ "./resources/js/components/mixin/search/category.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/mixin/search/category.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      categories: []
    };
  },
  methods: {
    search_category: function search_category(query) {
      var vm = this;

      if (query !== '') {
        vm.onSearchCategory(query, vm);
      } else {
        vm.loading = false;
        vm.categories = [];
      }
    },
    onSearchCategory: _.debounce(function (query, vm) {
      vm.loading = true;
      axios.get('/api/categories/search?search=' + query).then(function (q) {
        vm.loading = false;
        vm.categories = q.data.data.map(function (item) {
          return {
            value: item.id,
            label: item.name
          };
        });
      }).catch(function () {
        vm.loading = false;
      });
    }, 350)
  }
});

/***/ }),

/***/ "./resources/js/components/upload/index.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/upload/index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_7610a50f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7610a50f& */ "./resources/js/components/upload/index.vue?vue&type=template&id=7610a50f&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/upload/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/upload/index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_7610a50f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_7610a50f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/upload/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/upload/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/upload/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/upload/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/upload/index.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/upload/index.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/upload/index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/upload/index.vue?vue&type=template&id=7610a50f&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/upload/index.vue?vue&type=template&id=7610a50f& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7610a50f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=7610a50f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/upload/index.vue?vue&type=template&id=7610a50f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7610a50f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7610a50f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);