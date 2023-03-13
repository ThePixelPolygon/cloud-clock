(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-js-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-wrappers-kotlin-js-js-ir'.");
    }
    root['kotlin-wrappers-kotlin-js-js-ir'] = factory(typeof this['kotlin-wrappers-kotlin-js-js-ir'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-js-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.p4;
  var classMeta = kotlin_kotlin.$_$.y8;
  var setMetadataFor = kotlin_kotlin.$_$.ca;
  var THROW_CCE = kotlin_kotlin.$_$.ad;
  var Annotation = kotlin_kotlin.$_$.jc;
  var interfaceMeta = kotlin_kotlin.$_$.h9;
  //endregion
  //region block: pre-declaration
  setMetadataFor(JsPair, 'JsPair', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsoDsl, 'JsoDsl', classMeta, undefined, [Annotation], undefined, undefined, []);
  function get(key) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    return tmp$ret$0[key];
  }
  function set(key, value) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    tmp$ret$0[key] = value;
  }
  setMetadataFor(Record, 'Record', interfaceMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function JsPair() {
  }
  JsPair.prototype.component1_7eebsc_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    return tmp$ret$0[0];
  };
  JsPair.prototype.component2_7eebsb_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = this;
    return tmp$ret$0[1];
  };
  function JsoDsl() {
  }
  JsoDsl.prototype.equals = function (other) {
    if (!(other instanceof JsoDsl))
      return false;
    var tmp0_other_with_cast = other instanceof JsoDsl ? other : THROW_CCE();
    return true;
  };
  JsoDsl.prototype.hashCode = function () {
    return 0;
  };
  JsoDsl.prototype.toString = function () {
    return '@kotlinx.js.JsoDsl()';
  };
  function Record() {
  }
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-js-js-ir.js.map
