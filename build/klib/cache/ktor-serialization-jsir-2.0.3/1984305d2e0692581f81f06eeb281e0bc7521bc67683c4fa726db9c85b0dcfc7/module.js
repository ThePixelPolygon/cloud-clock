(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-http-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-http-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-serialization-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-serialization-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-serialization-js-ir'.");
    }
    root['ktor-ktor-serialization-js-ir'] = factory(typeof this['ktor-ktor-serialization-js-ir'] === 'undefined' ? {} : this['ktor-ktor-serialization-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-http-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.p4;
  var interfaceMeta = kotlin_kotlin.$_$.h9;
  var setMetadataFor = kotlin_kotlin.$_$.ca;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.q;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.h;
  var parseAndSortHeader = kotlin_io_ktor_ktor_http.$_$.g1;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.p;
  //endregion
  //region block: pre-declaration
  function register$default(contentType, converter, configuration, $mask0, $handler) {
    if (!(($mask0 & 4) === 0)) {
      configuration = Configuration$register$lambda;
    }
    var tmp;
    if ($handler == null) {
      this.register_2n0nvi_k$(contentType, converter, configuration);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(contentType, converter, configuration);
    }
    return tmp;
  }
  setMetadataFor(Configuration, 'Configuration', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ContentConverter, 'ContentConverter', interfaceMeta, undefined, undefined, undefined, undefined, [4, 3]);
  //endregion
  function Configuration$register$lambda($this$null) {
    return Unit_getInstance();
  }
  function Configuration() {
  }
  function ContentConverter() {
  }
  function suitableCharset(_this__u8e3s4, defaultCharset) {
    var tmp0_elvis_lhs = suitableCharsetOrNull(_this__u8e3s4, defaultCharset);
    return tmp0_elvis_lhs == null ? defaultCharset : tmp0_elvis_lhs;
  }
  function suitableCharset$default(_this__u8e3s4, defaultCharset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      defaultCharset = Charsets_getInstance().get_UTF_8_ihn39z_k$();
    return suitableCharset(_this__u8e3s4, defaultCharset);
  }
  function suitableCharsetOrNull(_this__u8e3s4, defaultCharset) {
    var tmp0_iterator = parseAndSortHeader(_this__u8e3s4.get_4u8u51_k$(HttpHeaders_getInstance().get_AcceptCharset_1vf6lh_k$())).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var tmp1_loop_parameter = tmp0_iterator.next_20eer_k$();
      var charset = tmp1_loop_parameter.component1_7eebsc_k$();
      if (charset === '*')
        return defaultCharset;
      else if (Companion_getInstance().isSupported_4w3rs3_k$(charset))
        return Companion_getInstance().forName_7lnpzh_k$(charset);
    }
    return null;
  }
  function suitableCharsetOrNull$default(_this__u8e3s4, defaultCharset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      defaultCharset = Charsets_getInstance().get_UTF_8_ihn39z_k$();
    return suitableCharsetOrNull(_this__u8e3s4, defaultCharset);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = register$default;
  _.$_$.b = suitableCharset$default;
  _.$_$.c = Configuration;
  _.$_$.d = ContentConverter;
  //endregion
  return _;
}));
