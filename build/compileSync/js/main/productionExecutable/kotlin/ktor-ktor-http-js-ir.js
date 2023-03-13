(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-utils-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-http-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-http-js-ir'.");
    }
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-js-ir'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'ktor-ktor-http-js-ir'.");
    }
    root['ktor-ktor-http-js-ir'] = factory(typeof this['ktor-ktor-http-js-ir'] === 'undefined' ? {} : this['ktor-ktor-http-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-utils-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_utils) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.o1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var encode$default = kotlin_io_ktor_ktor_io.$_$.e;
  var Unit_getInstance = kotlin_kotlin.$_$.b4;
  var charSequenceGet = kotlin_kotlin.$_$.x7;
  var Char = kotlin_kotlin.$_$.xa;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var equals = kotlin_kotlin.$_$.c8;
  var isSurrogate = kotlin_kotlin.$_$.da;
  var encode = kotlin_io_ktor_ktor_io.$_$.r;
  var prepareReadFirstHead = kotlin_io_ktor_ktor_io.$_$.u;
  var prepareReadNextHead = kotlin_io_ktor_ktor_io.$_$.v;
  var completeReadHead = kotlin_io_ktor_ktor_io.$_$.t;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.n1;
  var toString = kotlin_kotlin.$_$.h9;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.q2;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.p2;
  var charSequenceLength = kotlin_kotlin.$_$.y7;
  var charSequenceSubSequence = kotlin_kotlin.$_$.z7;
  var toByte = kotlin_kotlin.$_$.e9;
  var String_0 = kotlin_io_ktor_ktor_io.$_$.z;
  var Exception = kotlin_kotlin.$_$.db;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.s1;
  var captureStack = kotlin_kotlin.$_$.u7;
  var classMeta = kotlin_kotlin.$_$.a8;
  var setMetadataFor = kotlin_kotlin.$_$.d9;
  var Char__minus_impl_a2frrh_0 = kotlin_kotlin.$_$.o2;
  var numberToChar = kotlin_kotlin.$_$.z8;
  var Char__rangeTo_impl_tkncvp = kotlin_kotlin.$_$.r2;
  var plus = kotlin_kotlin.$_$.e6;
  var plus_0 = kotlin_kotlin.$_$.f6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.t4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.s2;
  var listOf = kotlin_kotlin.$_$.y5;
  var emptyList = kotlin_kotlin.$_$.h5;
  var equals_0 = kotlin_kotlin.$_$.x9;
  var Collection = kotlin_kotlin.$_$.d4;
  var isInterface = kotlin_kotlin.$_$.s8;
  var isBlank = kotlin_kotlin.$_$.z9;
  var last = kotlin_kotlin.$_$.w5;
  var indexOf$default = kotlin_kotlin.$_$.o;
  var THROW_CCE = kotlin_kotlin.$_$.kb;
  var isCharSequence = kotlin_kotlin.$_$.o8;
  var trim = kotlin_kotlin.$_$.wa;
  var contains$default = kotlin_kotlin.$_$.k;
  var objectMeta = kotlin_kotlin.$_$.c9;
  var plus_1 = kotlin_kotlin.$_$.g6;
  var getStringHashCode = kotlin_kotlin.$_$.h8;
  var hashCode = kotlin_kotlin.$_$.i8;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.n;
  var IllegalArgumentException = kotlin_kotlin.$_$.eb;
  var get_name = kotlin_io_ktor_ktor_io.$_$.s;
  var get_lastIndex = kotlin_kotlin.$_$.t5;
  var last_0 = kotlin_kotlin.$_$.ga;
  var first = kotlin_kotlin.$_$.y9;
  var get_lastIndex_0 = kotlin_kotlin.$_$.fa;
  var setOf = kotlin_kotlin.$_$.k6;
  var StringValuesBuilderImpl = kotlin_io_ktor_ktor_utils.$_$.o;
  var emptySet = kotlin_kotlin.$_$.j5;
  var get = kotlin_io_ktor_ktor_utils.$_$.n;
  var forEach = kotlin_io_ktor_ktor_utils.$_$.m;
  var StringValues = kotlin_io_ktor_ktor_utils.$_$.q;
  var StringValuesImpl = kotlin_io_ktor_ktor_utils.$_$.p;
  var toDoubleOrNull = kotlin_kotlin.$_$.ka;
  var rangeTo = kotlin_kotlin.$_$.o9;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.f;
  var lazy = kotlin_kotlin.$_$.cc;
  var to = kotlin_kotlin.$_$.ic;
  var sortedWith = kotlin_kotlin.$_$.n6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var compareValues = kotlin_kotlin.$_$.y6;
  var asList = kotlin_kotlin.$_$.s4;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.n2;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.w1;
  var toLong = kotlin_kotlin.$_$.pa;
  var mapCapacity = kotlin_kotlin.$_$.z5;
  var coerceAtLeast = kotlin_kotlin.$_$.j9;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e1;
  var interfaceMeta = kotlin_kotlin.$_$.j8;
  var isWhitespace = kotlin_kotlin.$_$.ea;
  var startsWith$default = kotlin_kotlin.$_$.t;
  var charArrayOf = kotlin_kotlin.$_$.v7;
  var split$default = kotlin_kotlin.$_$.r;
  var toMutableList = kotlin_kotlin.$_$.u6;
  var first_0 = kotlin_kotlin.$_$.o5;
  var joinToString$default = kotlin_kotlin.$_$.i;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var toCharArray = kotlin_io_ktor_ktor_utils.$_$.v;
  var indexOfAny$default = kotlin_kotlin.$_$.m;
  var dropLast = kotlin_kotlin.$_$.g5;
  var IllegalStateException = kotlin_kotlin.$_$.fb;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.c2;
  var indexOf$default_0 = kotlin_kotlin.$_$.n;
  var toInt = kotlin_kotlin.$_$.na;
  var listOf_0 = kotlin_kotlin.$_$.x5;
  var toLowerCasePreservingASCIIRules = kotlin_io_ktor_ktor_utils.$_$.w;
  var isLowerCase = kotlin_io_ktor_ktor_utils.$_$.t;
  var startsWith$default_0 = kotlin_kotlin.$_$.s;
  var addAll = kotlin_kotlin.$_$.q4;
  var joinTo$default = kotlin_kotlin.$_$.j;
  var toString_0 = kotlin_kotlin.$_$.hc;
  var lazy_0 = kotlin_kotlin.$_$.dc;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var KProperty1 = kotlin_kotlin.$_$.t9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.g8;
  var toSet = kotlin_kotlin.$_$.v6;
  var toLong_0 = kotlin_kotlin.$_$.f9;
  var encodeToByteArray = kotlin_kotlin.$_$.w9;
  var encodeToByteArray_0 = kotlin_io_ktor_ktor_io.$_$.q;
  var take = kotlin_kotlin.$_$.ia;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.d;
  //endregion
  //region block: pre-declaration
  setMetadataFor(URLDecodeException, 'URLDecodeException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Application, 'Application', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Text, 'Text', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HeaderValueWithParameters, 'HeaderValueWithParameters', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ContentType, 'ContentType', classMeta, HeaderValueWithParameters, undefined, undefined, undefined, []);
  setMetadataFor(BadContentTypeFormatException, 'BadContentTypeFormatException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HeadersBuilder, 'HeadersBuilder', classMeta, StringValuesBuilderImpl, undefined, undefined, undefined, []);
  setMetadataFor(EmptyHeaders, 'EmptyHeaders', objectMeta, undefined, [StringValues], undefined, undefined, []);
  setMetadataFor(HeadersImpl, 'HeadersImpl', classMeta, StringValuesImpl, [StringValues, StringValuesImpl], undefined, undefined, []);
  setMetadataFor(HeaderValueParam, 'HeaderValueParam', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HeaderValue, 'HeaderValue', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpHeaders, 'HttpHeaders', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(IllegalHeaderNameException, 'IllegalHeaderNameException', classMeta, IllegalArgumentException, undefined, undefined, undefined, []);
  setMetadataFor(IllegalHeaderValueException, 'IllegalHeaderValueException', classMeta, IllegalArgumentException, undefined, undefined, undefined, []);
  setMetadataFor(UnsafeHeaderException, 'UnsafeHeaderException', classMeta, IllegalArgumentException, undefined, undefined, undefined, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpMethod, 'HttpMethod', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_3, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpProtocolVersion, 'HttpProtocolVersion', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_4, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpStatusCode, 'HttpStatusCode', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_5, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Parameters, 'Parameters', interfaceMeta, undefined, [StringValues], undefined, undefined, []);
  setMetadataFor(EmptyParameters, 'EmptyParameters', objectMeta, undefined, [Parameters], undefined, undefined, []);
  setMetadataFor(ParametersBuilderImpl, 'ParametersBuilderImpl', classMeta, StringValuesBuilderImpl, undefined, undefined, undefined, []);
  setMetadataFor(ParametersImpl, 'ParametersImpl', classMeta, StringValuesImpl, [Parameters, StringValuesImpl], undefined, undefined, []);
  setMetadataFor(Companion_6, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(URLBuilder, 'URLBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(URLParserException, 'URLParserException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(Companion_7, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(URLProtocol, 'URLProtocol', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_8, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Url_0, 'Url', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(UrlDecodedParametersBuilder, 'UrlDecodedParametersBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(OutgoingContent, 'OutgoingContent', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ByteArrayContent_0, 'ByteArrayContent', classMeta, OutgoingContent, undefined, undefined, undefined, []);
  setMetadataFor(ByteArrayContent, 'ByteArrayContent', classMeta, ByteArrayContent_0, undefined, undefined, undefined, []);
  setMetadataFor(NoContent, 'NoContent', classMeta, OutgoingContent, undefined, undefined, undefined, []);
  setMetadataFor(ReadChannelContent, 'ReadChannelContent', classMeta, OutgoingContent, undefined, undefined, undefined, []);
  setMetadataFor(WriteChannelContent, 'WriteChannelContent', classMeta, OutgoingContent, undefined, undefined, undefined, [1]);
  setMetadataFor(ProtocolUpgrade, 'ProtocolUpgrade', classMeta, OutgoingContent, undefined, undefined, undefined, [4]);
  setMetadataFor(TextContent, 'TextContent', classMeta, ByteArrayContent_0, undefined, undefined, undefined, []);
  //endregion
  function get_URL_ALPHABET() {
    init_properties_Codecs_kt_hjkt7n();
    return URL_ALPHABET;
  }
  var URL_ALPHABET;
  function get_URL_ALPHABET_CHARS() {
    init_properties_Codecs_kt_hjkt7n();
    return URL_ALPHABET_CHARS;
  }
  var URL_ALPHABET_CHARS;
  function get_HEX_ALPHABET() {
    init_properties_Codecs_kt_hjkt7n();
    return HEX_ALPHABET;
  }
  var HEX_ALPHABET;
  function get_URL_PROTOCOL_PART() {
    init_properties_Codecs_kt_hjkt7n();
    return URL_PROTOCOL_PART;
  }
  var URL_PROTOCOL_PART;
  function get_VALID_PATH_PART() {
    init_properties_Codecs_kt_hjkt7n();
    return VALID_PATH_PART;
  }
  var VALID_PATH_PART;
  function get_OAUTH_SYMBOLS() {
    init_properties_Codecs_kt_hjkt7n();
    return OAUTH_SYMBOLS;
  }
  var OAUTH_SYMBOLS;
  function encodeURLParameter(_this__u8e3s4, spaceToPlus) {
    init_properties_Codecs_kt_hjkt7n();
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.encodeURLParameter.<anonymous>' call
    var tmp = Charsets_getInstance().d18_1.h18();
    var content = encode$default(tmp, _this__u8e3s4, 0, 0, 6, null);
    forEach_0(content, encodeURLParameter$lambda(tmp0_apply, spaceToPlus));
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function encodeURLParameter$default(_this__u8e3s4, spaceToPlus, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      spaceToPlus = false;
    return encodeURLParameter(_this__u8e3s4, spaceToPlus);
  }
  function decodeURLPart(_this__u8e3s4, start, end, charset) {
    init_properties_Codecs_kt_hjkt7n();
    return decodeScan(_this__u8e3s4, start, end, false, charset);
  }
  function decodeURLPart$default(_this__u8e3s4, start, end, charset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      start = 0;
    if (!(($mask0 & 2) === 0))
      end = _this__u8e3s4.length;
    if (!(($mask0 & 4) === 0))
      charset = Charsets_getInstance().d18_1;
    return decodeURLPart(_this__u8e3s4, start, end, charset);
  }
  function encodeURLQueryComponent(_this__u8e3s4, encodeFull, spaceToPlus, charset) {
    init_properties_Codecs_kt_hjkt7n();
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.encodeURLQueryComponent.<anonymous>' call
    var tmp = charset.h18();
    var content = encode$default(tmp, _this__u8e3s4, 0, 0, 6, null);
    forEach_0(content, encodeURLQueryComponent$lambda(spaceToPlus, tmp0_apply, encodeFull));
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function encodeURLQueryComponent$default(_this__u8e3s4, encodeFull, spaceToPlus, charset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      encodeFull = false;
    if (!(($mask0 & 2) === 0))
      spaceToPlus = false;
    if (!(($mask0 & 4) === 0))
      charset = Charsets_getInstance().d18_1;
    return encodeURLQueryComponent(_this__u8e3s4, encodeFull, spaceToPlus, charset);
  }
  function decodeURLQueryComponent(_this__u8e3s4, start, end, plusIsSpace, charset) {
    init_properties_Codecs_kt_hjkt7n();
    return decodeScan(_this__u8e3s4, start, end, plusIsSpace, charset);
  }
  function decodeURLQueryComponent$default(_this__u8e3s4, start, end, plusIsSpace, charset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      start = 0;
    if (!(($mask0 & 2) === 0))
      end = _this__u8e3s4.length;
    if (!(($mask0 & 4) === 0))
      plusIsSpace = false;
    if (!(($mask0 & 8) === 0))
      charset = Charsets_getInstance().d18_1;
    return decodeURLQueryComponent(_this__u8e3s4, start, end, plusIsSpace, charset);
  }
  function encodeURLPath(_this__u8e3s4) {
    init_properties_Codecs_kt_hjkt7n();
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.encodeURLPath.<anonymous>' call
    var charset = Charsets_getInstance().d18_1;
    var index = 0;
    $l$loop_0: while (index < _this__u8e3s4.length) {
      var current = charSequenceGet(_this__u8e3s4, index);
      if ((equals(new Char(current), new Char(_Char___init__impl__6a9atx(47))) ? true : get_URL_ALPHABET_CHARS().y(new Char(current))) ? true : get_VALID_PATH_PART().y(new Char(current))) {
        tmp0_apply.b5(current);
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        continue $l$loop_0;
      }
      if (((equals(new Char(current), new Char(_Char___init__impl__6a9atx(37))) ? (index + 2 | 0) < _this__u8e3s4.length : false) ? get_HEX_ALPHABET().y(new Char(charSequenceGet(_this__u8e3s4, index + 1 | 0))) : false) ? get_HEX_ALPHABET().y(new Char(charSequenceGet(_this__u8e3s4, index + 2 | 0))) : false) {
        tmp0_apply.b5(current);
        tmp0_apply.b5(charSequenceGet(_this__u8e3s4, index + 1 | 0));
        tmp0_apply.b5(charSequenceGet(_this__u8e3s4, index + 2 | 0));
        index = index + 3 | 0;
        continue $l$loop_0;
      }
      var symbolSize = isSurrogate(current) ? 2 : 1;
      var tmp = encode(charset.h18(), _this__u8e3s4, index, index + symbolSize | 0);
      forEach_0(tmp, encodeURLPath$lambda(tmp0_apply));
      index = index + symbolSize | 0;
    }
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function forEach_0(_this__u8e3s4, block) {
    init_properties_Codecs_kt_hjkt7n();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_1: do {
          var tmp$ret$2;
          // Inline function 'io.ktor.http.forEach.<anonymous>' call
          var tmp0__anonymous__q1qw7t = current;
          $l$loop: while (true) {
            var tmp$ret$1;
            // Inline function 'io.ktor.utils.io.core.canRead' call
            tmp$ret$1 = tmp0__anonymous__q1qw7t.rz_1 > tmp0__anonymous__q1qw7t.qz_1;
            if (!tmp$ret$1) {
              break $l$loop;
            }
            block(tmp0__anonymous__q1qw7t.t15());
          }
          tmp$ret$2 = true;
          if (!tmp$ret$2) {
            break $l$loop_1;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_1;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var next = tmp_0;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead(_this__u8e3s4, current);
        }
      }
    }
  }
  function percentEncode(_this__u8e3s4) {
    init_properties_Codecs_kt_hjkt7n();
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$_0(3);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.percentEncode.<anonymous>' call
    var code = _this__u8e3s4 & 255;
    tmp0_apply.b5(_Char___init__impl__6a9atx(37));
    tmp0_apply.b5(hexDigitToChar(code >> 4));
    tmp0_apply.b5(hexDigitToChar(code & 15));
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function decodeScan(_this__u8e3s4, start, end, plusIsSpace, charset) {
    init_properties_Codecs_kt_hjkt7n();
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ch = charSequenceGet(_this__u8e3s4, index);
        if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(37))) ? true : plusIsSpace ? equals(new Char(ch), new Char(_Char___init__impl__6a9atx(43))) : false) {
          return decodeImpl(_this__u8e3s4, start, end, index, plusIsSpace, charset);
        }
      }
       while (inductionVariable < end);
    var tmp;
    if (start === 0 ? end === _this__u8e3s4.length : false) {
      tmp = toString(_this__u8e3s4);
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = _this__u8e3s4;
      tmp$ret$1 = tmp$ret$0.substring(start, end);
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function hexDigitToChar(digit) {
    init_properties_Codecs_kt_hjkt7n();
    var tmp0_subject = digit;
    return (0 <= tmp0_subject ? tmp0_subject <= 9 : false) ? Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(48), digit) : Char__minus_impl_a2frrh(Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(65), digit), 10);
  }
  function decodeImpl(_this__u8e3s4, start, end, prefixEnd, plusIsSpace, charset) {
    init_properties_Codecs_kt_hjkt7n();
    var length = end - start | 0;
    var sbSize = length > 255 ? length / 3 | 0 : length;
    var sb = StringBuilder_init_$Create$_0(sbSize);
    if (prefixEnd > start) {
      sb.tc(_this__u8e3s4, start, prefixEnd);
    }
    var index = prefixEnd;
    var bytes = null;
    while (index < end) {
      var c = charSequenceGet(_this__u8e3s4, index);
      if (plusIsSpace ? equals(new Char(c), new Char(_Char___init__impl__6a9atx(43))) : false) {
        sb.b5(_Char___init__impl__6a9atx(32));
        var tmp0 = index;
        index = tmp0 + 1 | 0;
      } else if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(37)))) {
        if (bytes == null) {
          bytes = new Int8Array((end - index | 0) / 3 | 0);
        }
        var count = 0;
        while (index < end ? equals(new Char(charSequenceGet(_this__u8e3s4, index)), new Char(_Char___init__impl__6a9atx(37))) : false) {
          if ((index + 2 | 0) >= end) {
            var tmp$ret$0;
            // Inline function 'kotlin.text.substring' call
            var tmp0_substring = index;
            var tmp1_substring = charSequenceLength(_this__u8e3s4);
            tmp$ret$0 = toString(charSequenceSubSequence(_this__u8e3s4, tmp0_substring, tmp1_substring));
            throw new URLDecodeException('Incomplete trailing HEX escape: ' + tmp$ret$0 + ', in ' + _this__u8e3s4 + ' at ' + index);
          }
          var digit1 = charToHexDigit(charSequenceGet(_this__u8e3s4, index + 1 | 0));
          var digit2 = charToHexDigit(charSequenceGet(_this__u8e3s4, index + 2 | 0));
          if (digit1 === -1 ? true : digit2 === -1) {
            throw new URLDecodeException('Wrong HEX escape: %' + new Char(charSequenceGet(_this__u8e3s4, index + 1 | 0)) + new Char(charSequenceGet(_this__u8e3s4, index + 2 | 0)) + ', in ' + _this__u8e3s4 + ', at ' + index);
          }
          var tmp = bytes;
          var tmp1 = count;
          count = tmp1 + 1 | 0;
          tmp[tmp1] = toByte(imul(digit1, 16) + digit2 | 0);
          index = index + 3 | 0;
        }
        sb.wc(String_0(bytes, 0, count, charset));
      } else {
        sb.b5(c);
        var tmp2 = index;
        index = tmp2 + 1 | 0;
      }
    }
    return sb.toString();
  }
  function URLDecodeException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, URLDecodeException);
  }
  function charToHexDigit(c2) {
    init_properties_Codecs_kt_hjkt7n();
    var tmp0_subject = c2;
    return (_Char___init__impl__6a9atx(48) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(57) : false) ? Char__minus_impl_a2frrh_0(c2, _Char___init__impl__6a9atx(48)) : (_Char___init__impl__6a9atx(65) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(70) : false) ? Char__minus_impl_a2frrh_0(c2, _Char___init__impl__6a9atx(65)) + 10 | 0 : (_Char___init__impl__6a9atx(97) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(102) : false) ? Char__minus_impl_a2frrh_0(c2, _Char___init__impl__6a9atx(97)) + 10 | 0 : -1;
  }
  function encodeURLParameterValue(_this__u8e3s4) {
    init_properties_Codecs_kt_hjkt7n();
    return encodeURLParameter(_this__u8e3s4, true);
  }
  function encodeURLParameter$lambda($tmp0_apply, $spaceToPlus) {
    return function (it) {
      var tmp;
      if (get_URL_ALPHABET().y(it) ? true : get_OAUTH_SYMBOLS().y(it)) {
        $tmp0_apply.b5(numberToChar(it));
        tmp = Unit_getInstance();
      } else {
        var tmp_0;
        if ($spaceToPlus) {
          var tmp_1 = it;
          var tmp$ret$0;
          // Inline function 'kotlin.code' call
          tmp$ret$0 = 32;
          tmp_0 = tmp_1 === toByte(tmp$ret$0);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          $tmp0_apply.b5(_Char___init__impl__6a9atx(43));
          tmp = Unit_getInstance();
        } else {
          $tmp0_apply.wc(percentEncode(it));
          tmp = Unit_getInstance();
        }
      }
      return Unit_getInstance();
    };
  }
  function encodeURLQueryComponent$lambda($spaceToPlus, $tmp0_apply, $encodeFull) {
    return function (it) {
      var tmp;
      var tmp_0 = it;
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 32;
      if (tmp_0 === toByte(tmp$ret$0)) {
        var tmp_1;
        if ($spaceToPlus) {
          $tmp0_apply.b5(_Char___init__impl__6a9atx(43));
          tmp_1 = Unit_getInstance();
        } else {
          $tmp0_apply.wc('%20');
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      } else {
        if (get_URL_ALPHABET().y(it) ? true : !$encodeFull ? get_URL_PROTOCOL_PART().y(it) : false) {
          $tmp0_apply.b5(numberToChar(it));
          tmp = Unit_getInstance();
        } else {
          $tmp0_apply.wc(percentEncode(it));
          tmp = Unit_getInstance();
        }
      }
      return Unit_getInstance();
    };
  }
  function encodeURLPath$lambda($tmp0_apply) {
    return function (it) {
      $tmp0_apply.wc(percentEncode(it));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Codecs_kt_hkj9s1;
  function init_properties_Codecs_kt_hjkt7n() {
    if (properties_initialized_Codecs_kt_hkj9s1) {
    } else {
      properties_initialized_Codecs_kt_hkj9s1 = true;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57)));
      var tmp$ret$2;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
      var tmp0_iterator = tmp0_map.j();
      while (tmp0_iterator.k()) {
        var item = tmp0_iterator.l().a5_1;
        var tmp$ret$1;
        // Inline function 'io.ktor.http.URL_ALPHABET.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(item);
        tmp$ret$1 = toByte(tmp$ret$0);
        tmp0_mapTo.a(tmp$ret$1);
      }
      tmp$ret$2 = tmp0_mapTo;
      tmp$ret$3 = tmp$ret$2;
      URL_ALPHABET = tmp$ret$3;
      URL_ALPHABET_CHARS = plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57)));
      HEX_ALPHABET = plus_0(plus(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(102)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(70))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57)));
      var tmp$ret$3_0;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map_0 = listOf([new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(47)), new Char(_Char___init__impl__6a9atx(63)), new Char(_Char___init__impl__6a9atx(35)), new Char(_Char___init__impl__6a9atx(91)), new Char(_Char___init__impl__6a9atx(93)), new Char(_Char___init__impl__6a9atx(64)), new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(38)), new Char(_Char___init__impl__6a9atx(39)), new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(42)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(59)), new Char(_Char___init__impl__6a9atx(61)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(126)), new Char(_Char___init__impl__6a9atx(43))]);
      var tmp$ret$2_0;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map_0, 10));
      var tmp0_iterator_0 = tmp0_map_0.j();
      while (tmp0_iterator_0.k()) {
        var item_0 = tmp0_iterator_0.l().a5_1;
        var tmp$ret$1_0;
        // Inline function 'io.ktor.http.URL_PROTOCOL_PART.<anonymous>' call
        var tmp$ret$0_0;
        // Inline function 'kotlin.code' call
        tmp$ret$0_0 = Char__toInt_impl_vasixd(item_0);
        tmp$ret$1_0 = toByte(tmp$ret$0_0);
        tmp0_mapTo_0.a(tmp$ret$1_0);
      }
      tmp$ret$2_0 = tmp0_mapTo_0;
      tmp$ret$3_0 = tmp$ret$2_0;
      URL_PROTOCOL_PART = tmp$ret$3_0;
      VALID_PATH_PART = listOf([new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(64)), new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(36)), new Char(_Char___init__impl__6a9atx(38)), new Char(_Char___init__impl__6a9atx(39)), new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(42)), new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(59)), new Char(_Char___init__impl__6a9atx(61)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(126))]);
      var tmp$ret$3_1;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map_1 = listOf([new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(126))]);
      var tmp$ret$2_1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_1 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map_1, 10));
      var tmp0_iterator_1 = tmp0_map_1.j();
      while (tmp0_iterator_1.k()) {
        var item_1 = tmp0_iterator_1.l().a5_1;
        var tmp$ret$1_1;
        // Inline function 'io.ktor.http.OAUTH_SYMBOLS.<anonymous>' call
        var tmp$ret$0_1;
        // Inline function 'kotlin.code' call
        tmp$ret$0_1 = Char__toInt_impl_vasixd(item_1);
        tmp$ret$1_1 = toByte(tmp$ret$0_1);
        tmp0_mapTo_1.a(tmp$ret$1_1);
      }
      tmp$ret$2_1 = tmp0_mapTo_1;
      tmp$ret$3_1 = tmp$ret$2_1;
      OAUTH_SYMBOLS = tmp$ret$3_1;
    }
  }
  function ContentType_init_$Init$(contentType, contentSubtype, parameters, $this) {
    ContentType.call($this, contentType, contentSubtype, contentType + '/' + contentSubtype, parameters);
    return $this;
  }
  function ContentType_init_$Create$(contentType, contentSubtype, parameters) {
    return ContentType_init_$Init$(contentType, contentSubtype, parameters, Object.create(ContentType.prototype));
  }
  function ContentType_init_$Init$_0(contentType, contentSubtype, parameters, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      parameters = emptyList();
    ContentType_init_$Init$(contentType, contentSubtype, parameters, $this);
    return $this;
  }
  function ContentType_init_$Create$_0(contentType, contentSubtype, parameters, $mask0, $marker) {
    return ContentType_init_$Init$_0(contentType, contentSubtype, parameters, $mask0, $marker, Object.create(ContentType.prototype));
  }
  function hasParameter($this, name, value) {
    var tmp0_subject = $this.b1h_1.c();
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = false;
        break;
      case 1:
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        var tmp0_let = $this.b1h_1.h(0);
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$0;
        // Inline function 'io.ktor.http.ContentType.hasParameter.<anonymous>' call
        tmp$ret$0 = equals_0(tmp0_let.c1h_1, name, true) ? equals_0(tmp0_let.d1h_1, value, true) : false;
        tmp$ret$1 = tmp$ret$0;

        tmp = tmp$ret$1;
        break;
      default:
        var tmp$ret$2;
        $l$block_0: {
          // Inline function 'kotlin.collections.any' call
          var tmp1_any = $this.b1h_1;
          var tmp_0;
          if (isInterface(tmp1_any, Collection)) {
            tmp_0 = tmp1_any.i();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$2 = false;
            break $l$block_0;
          }
          var tmp0_iterator = tmp1_any.j();
          while (tmp0_iterator.k()) {
            var element = tmp0_iterator.l();
            var tmp$ret$3;
            // Inline function 'io.ktor.http.ContentType.hasParameter.<anonymous>' call
            tmp$ret$3 = equals_0(element.c1h_1, name, true) ? equals_0(element.d1h_1, value, true) : false;
            if (tmp$ret$3) {
              tmp$ret$2 = true;
              break $l$block_0;
            }
          }
          tmp$ret$2 = false;
        }

        tmp = tmp$ret$2;
        break;
    }
    return tmp;
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    tmp.e1h_1 = ContentType_init_$Create$_0('*', '*', null, 4, null);
  }
  Companion.prototype.f1h = function (value) {
    if (isBlank(value))
      return this.e1h_1;
    var tmp$ret$10;
    // Inline function 'io.ktor.http.Companion.parse' call
    var tmp0_parse = Companion_getInstance_1();
    var headerValue = last(parseHeaderValue(value));
    var tmp$ret$9;
    // Inline function 'io.ktor.http.Companion.parse.<anonymous>' call
    var tmp1__anonymous__uwfjfc = headerValue.g1h_1;
    var tmp2__anonymous__z9zvc9 = headerValue.h1h_1;
    var tmp = _Char___init__impl__6a9atx(47);
    var slash = indexOf$default(tmp1__anonymous__uwfjfc, tmp, 0, false, 6, null);
    if (slash === -1) {
      var tmp$ret$0;
      // Inline function 'kotlin.text.trim' call
      tmp$ret$0 = toString(trim(isCharSequence(tmp1__anonymous__uwfjfc) ? tmp1__anonymous__uwfjfc : THROW_CCE()));
      if (tmp$ret$0 === '*')
        return Companion_getInstance_0().e1h_1;
      throw new BadContentTypeFormatException(value);
    }
    var tmp$ret$3;
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$2;
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = tmp1__anonymous__uwfjfc;
    tmp$ret$2 = tmp$ret$1.substring(0, slash);
    var tmp0_trim = tmp$ret$2;
    tmp$ret$3 = toString(trim(isCharSequence(tmp0_trim) ? tmp0_trim : THROW_CCE()));
    var type = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$4 = charSequenceLength(type) === 0;
    if (tmp$ret$4) {
      throw new BadContentTypeFormatException(value);
    }
    var tmp$ret$7;
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$6;
    // Inline function 'kotlin.text.substring' call
    var tmp1_substring = slash + 1 | 0;
    var tmp$ret$5;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$5 = tmp1__anonymous__uwfjfc;
    tmp$ret$6 = tmp$ret$5.substring(tmp1_substring);
    var tmp2_trim = tmp$ret$6;
    tmp$ret$7 = toString(trim(isCharSequence(tmp2_trim) ? tmp2_trim : THROW_CCE()));
    var subtype = tmp$ret$7;
    var tmp_0;
    var tmp_1 = _Char___init__impl__6a9atx(32);
    if (contains$default(type, tmp_1, false, 2, null)) {
      tmp_0 = true;
    } else {
      var tmp_2 = _Char___init__impl__6a9atx(32);
      tmp_0 = contains$default(subtype, tmp_2, false, 2, null);
    }
    if (tmp_0) {
      throw new BadContentTypeFormatException(value);
    }
    var tmp_3;
    var tmp$ret$8;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$8 = charSequenceLength(subtype) === 0;
    if (tmp$ret$8) {
      tmp_3 = true;
    } else {
      var tmp_4 = _Char___init__impl__6a9atx(47);
      tmp_3 = contains$default(subtype, tmp_4, false, 2, null);
    }
    if (tmp_3) {
      throw new BadContentTypeFormatException(value);
    }
    tmp$ret$9 = ContentType_init_$Create$(type, subtype, tmp2__anonymous__z9zvc9);
    tmp$ret$10 = tmp$ret$9;
    return tmp$ret$10;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Application() {
    Application_instance = this;
    var tmp = this;
    tmp.j1h_1 = ContentType_init_$Create$_0('application', '*', null, 4, null);
    var tmp_0 = this;
    tmp_0.k1h_1 = ContentType_init_$Create$_0('application', 'atom+xml', null, 4, null);
    var tmp_1 = this;
    tmp_1.l1h_1 = ContentType_init_$Create$_0('application', 'cbor', null, 4, null);
    var tmp_2 = this;
    tmp_2.m1h_1 = ContentType_init_$Create$_0('application', 'json', null, 4, null);
    var tmp_3 = this;
    tmp_3.n1h_1 = ContentType_init_$Create$_0('application', 'hal+json', null, 4, null);
    var tmp_4 = this;
    tmp_4.o1h_1 = ContentType_init_$Create$_0('application', 'javascript', null, 4, null);
    var tmp_5 = this;
    tmp_5.p1h_1 = ContentType_init_$Create$_0('application', 'octet-stream', null, 4, null);
    var tmp_6 = this;
    tmp_6.q1h_1 = ContentType_init_$Create$_0('application', 'font-woff', null, 4, null);
    var tmp_7 = this;
    tmp_7.r1h_1 = ContentType_init_$Create$_0('application', 'rss+xml', null, 4, null);
    var tmp_8 = this;
    tmp_8.s1h_1 = ContentType_init_$Create$_0('application', 'xml', null, 4, null);
    var tmp_9 = this;
    tmp_9.t1h_1 = ContentType_init_$Create$_0('application', 'xml-dtd', null, 4, null);
    var tmp_10 = this;
    tmp_10.u1h_1 = ContentType_init_$Create$_0('application', 'zip', null, 4, null);
    var tmp_11 = this;
    tmp_11.v1h_1 = ContentType_init_$Create$_0('application', 'gzip', null, 4, null);
    var tmp_12 = this;
    tmp_12.w1h_1 = ContentType_init_$Create$_0('application', 'x-www-form-urlencoded', null, 4, null);
    var tmp_13 = this;
    tmp_13.x1h_1 = ContentType_init_$Create$_0('application', 'pdf', null, 4, null);
    var tmp_14 = this;
    tmp_14.y1h_1 = ContentType_init_$Create$_0('application', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', null, 4, null);
    var tmp_15 = this;
    tmp_15.z1h_1 = ContentType_init_$Create$_0('application', 'vnd.openxmlformats-officedocument.wordprocessingml.document', null, 4, null);
    var tmp_16 = this;
    tmp_16.a1i_1 = ContentType_init_$Create$_0('application', 'vnd.openxmlformats-officedocument.presentationml.presentation', null, 4, null);
    var tmp_17 = this;
    tmp_17.b1i_1 = ContentType_init_$Create$_0('application', 'protobuf', null, 4, null);
    var tmp_18 = this;
    tmp_18.c1i_1 = ContentType_init_$Create$_0('application', 'wasm', null, 4, null);
    var tmp_19 = this;
    tmp_19.d1i_1 = ContentType_init_$Create$_0('application', 'problem+json', null, 4, null);
    var tmp_20 = this;
    tmp_20.e1i_1 = ContentType_init_$Create$_0('application', 'problem+xml', null, 4, null);
  }
  var Application_instance;
  function Application_getInstance() {
    if (Application_instance == null)
      new Application();
    return Application_instance;
  }
  function Text() {
    Text_instance = this;
    var tmp = this;
    tmp.f1i_1 = ContentType_init_$Create$_0('text', '*', null, 4, null);
    var tmp_0 = this;
    tmp_0.g1i_1 = ContentType_init_$Create$_0('text', 'plain', null, 4, null);
    var tmp_1 = this;
    tmp_1.h1i_1 = ContentType_init_$Create$_0('text', 'css', null, 4, null);
    var tmp_2 = this;
    tmp_2.i1i_1 = ContentType_init_$Create$_0('text', 'csv', null, 4, null);
    var tmp_3 = this;
    tmp_3.j1i_1 = ContentType_init_$Create$_0('text', 'html', null, 4, null);
    var tmp_4 = this;
    tmp_4.k1i_1 = ContentType_init_$Create$_0('text', 'javascript', null, 4, null);
    var tmp_5 = this;
    tmp_5.l1i_1 = ContentType_init_$Create$_0('text', 'vcard', null, 4, null);
    var tmp_6 = this;
    tmp_6.m1i_1 = ContentType_init_$Create$_0('text', 'xml', null, 4, null);
    var tmp_7 = this;
    tmp_7.n1i_1 = ContentType_init_$Create$_0('text', 'event-stream', null, 4, null);
  }
  var Text_instance;
  function Text_getInstance() {
    if (Text_instance == null)
      new Text();
    return Text_instance;
  }
  function ContentType(contentType, contentSubtype, existingContent, parameters) {
    Companion_getInstance_0();
    HeaderValueWithParameters.call(this, existingContent, parameters);
    this.q1i_1 = contentType;
    this.r1i_1 = contentSubtype;
  }
  ContentType.prototype.s1i = function (name, value) {
    if (hasParameter(this, name, value))
      return this;
    return new ContentType(this.q1i_1, this.r1i_1, this.a1h_1, plus_1(this.b1h_1, new HeaderValueParam(name, value)));
  };
  ContentType.prototype.t1i = function () {
    var tmp;
    if (this.b1h_1.i()) {
      tmp = this;
    } else {
      tmp = ContentType_init_$Create$_0(this.q1i_1, this.r1i_1, null, 4, null);
    }
    return tmp;
  };
  ContentType.prototype.u1i = function (pattern) {
    if (!(pattern.q1i_1 === '*') ? !equals_0(pattern.q1i_1, this.q1i_1, true) : false) {
      return false;
    }
    if (!(pattern.r1i_1 === '*') ? !equals_0(pattern.r1i_1, this.r1i_1, true) : false) {
      return false;
    }
    var tmp0_iterator = pattern.b1h_1.j();
    while (tmp0_iterator.k()) {
      var tmp1_loop_parameter = tmp0_iterator.l();
      var patternName = tmp1_loop_parameter.s2();
      var patternValue = tmp1_loop_parameter.t2();
      var tmp2_subject = patternName;
      var tmp;
      if (tmp2_subject === '*') {
        var tmp3_subject = patternValue;
        var tmp_0;
        if (tmp3_subject === '*') {
          tmp_0 = true;
        } else {
          var tmp$ret$0;
          $l$block_0: {
            // Inline function 'kotlin.collections.any' call
            var tmp0_any = this.b1h_1;
            var tmp_1;
            if (isInterface(tmp0_any, Collection)) {
              tmp_1 = tmp0_any.i();
            } else {
              tmp_1 = false;
            }
            if (tmp_1) {
              tmp$ret$0 = false;
              break $l$block_0;
            }
            var tmp0_iterator_0 = tmp0_any.j();
            while (tmp0_iterator_0.k()) {
              var element = tmp0_iterator_0.l();
              var tmp$ret$1;
              // Inline function 'io.ktor.http.ContentType.match.<anonymous>' call
              tmp$ret$1 = equals_0(element.d1h_1, patternValue, true);
              if (tmp$ret$1) {
                tmp$ret$0 = true;
                break $l$block_0;
              }
            }
            tmp$ret$0 = false;
          }
          tmp_0 = tmp$ret$0;
        }
        tmp = tmp_0;
      } else {
        var value = this.v1i(patternName);
        var tmp4_subject = patternValue;
        tmp = tmp4_subject === '*' ? !(value == null) : equals_0(value, patternValue, true);
      }
      var matches = tmp;
      if (!matches) {
        return false;
      }
    }
    return true;
  };
  ContentType.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof ContentType) {
      tmp_1 = equals_0(this.q1i_1, other.q1i_1, true);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals_0(this.r1i_1, other.r1i_1, true);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.b1h_1, other.b1h_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  ContentType.prototype.hashCode = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.text.lowercase' call
    var tmp0_lowercase = this.q1i_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_lowercase;
    tmp$ret$1 = tmp$ret$0.toLowerCase();
    var result = getStringHashCode(tmp$ret$1);
    var tmp = result;
    var tmp_0 = imul(31, result);
    var tmp$ret$3;
    // Inline function 'kotlin.text.lowercase' call
    var tmp1_lowercase = this.r1i_1;
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp1_lowercase;
    tmp$ret$3 = tmp$ret$2.toLowerCase();
    result = tmp + (tmp_0 + getStringHashCode(tmp$ret$3) | 0) | 0;
    result = result + imul(31, hashCode(this.b1h_1)) | 0;
    return result;
  };
  function BadContentTypeFormatException(value) {
    Exception_init_$Init$('Bad Content-Type format: ' + value, this);
    captureStack(this, BadContentTypeFormatException);
  }
  function charset(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.v1i('charset');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'io.ktor.http.charset.<anonymous>' call
      var tmp_0;
      try {
        tmp_0 = Companion_getInstance().e1b(tmp0_safe_receiver);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof IllegalArgumentException) {
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function withCharset(_this__u8e3s4, charset) {
    return _this__u8e3s4.s1i('charset', get_name(charset));
  }
  function withCharsetIfNeeded(_this__u8e3s4, charset) {
    var tmp;
    var tmp_0;
    var tmp$ret$1;
    // Inline function 'kotlin.text.lowercase' call
    var tmp0_lowercase = _this__u8e3s4.q1i_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_lowercase;
    tmp$ret$1 = tmp$ret$0.toLowerCase();
    if (tmp$ret$1 === 'application') {
      var tmp$ret$3;
      // Inline function 'kotlin.text.lowercase' call
      var tmp1_lowercase = _this__u8e3s4.r1i_1;
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp1_lowercase;
      tmp$ret$3 = tmp$ret$2.toLowerCase();
      tmp_0 = tmp$ret$3 === 'json';
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = _this__u8e3s4;
    } else {
      tmp = _this__u8e3s4.s1i('charset', get_name(charset));
    }
    return tmp;
  }
  function get_HeaderFieldValueSeparators() {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    return HeaderFieldValueSeparators;
  }
  var HeaderFieldValueSeparators;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function HeaderValueWithParameters(content, parameters) {
    Companion_getInstance_1();
    this.a1h_1 = content;
    this.b1h_1 = parameters;
  }
  HeaderValueWithParameters.prototype.v1i = function (name) {
    var inductionVariable = 0;
    var last = get_lastIndex(this.b1h_1);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var parameter = this.b1h_1.h(index);
        if (equals_0(parameter.c1h_1, name, true)) {
          return parameter.d1h_1;
        }
      }
       while (!(index === last));
    return null;
  };
  HeaderValueWithParameters.prototype.toString = function () {
    var tmp;
    if (this.b1h_1.i()) {
      tmp = this.a1h_1;
    } else {
      var tmp_0 = this.a1h_1.length;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.sumOf' call
      var tmp0_sumOf = this.b1h_1;
      var sum = 0;
      var tmp0_iterator = tmp0_sumOf.j();
      while (tmp0_iterator.k()) {
        var element = tmp0_iterator.l();
        var tmp_1 = sum;
        var tmp$ret$0;
        // Inline function 'io.ktor.http.HeaderValueWithParameters.toString.<anonymous>' call
        tmp$ret$0 = (element.c1h_1.length + element.d1h_1.length | 0) + 3 | 0;
        sum = tmp_1 + tmp$ret$0 | 0;
      }
      tmp$ret$1 = sum;
      var size = tmp_0 + tmp$ret$1 | 0;
      var tmp$ret$2;
      // Inline function 'kotlin.apply' call
      var tmp1_apply = StringBuilder_init_$Create$_0(size);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.http.HeaderValueWithParameters.toString.<anonymous>' call
      tmp1_apply.wc(this.a1h_1);
      var inductionVariable = 0;
      var last = get_lastIndex(this.b1h_1);
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element_0 = this.b1h_1.h(index);
          tmp1_apply.wc('; ');
          tmp1_apply.wc(element_0.c1h_1);
          tmp1_apply.wc('=');
          // Inline function 'io.ktor.http.escapeIfNeededTo' call
          var tmp0_escapeIfNeededTo = element_0.d1h_1;
          if (checkNeedEscape$accessor$vynnj(tmp0_escapeIfNeededTo)) {
            tmp1_apply.wc(quote(tmp0_escapeIfNeededTo));
          } else {
            tmp1_apply.wc(tmp0_escapeIfNeededTo);
          }
        }
         while (!(index === last));
      tmp$ret$2 = tmp1_apply;
      tmp = tmp$ret$2.toString();
    }
    return tmp;
  };
  function checkNeedEscape(_this__u8e3s4) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$0 = charSequenceLength(_this__u8e3s4) === 0;
    if (tmp$ret$0)
      return true;
    if (isQuoted(_this__u8e3s4))
      return false;
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (get_HeaderFieldValueSeparators().y(new Char(charSequenceGet(_this__u8e3s4, index))))
          return true;
      }
       while (inductionVariable < last);
    return false;
  }
  function quote(_this__u8e3s4) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.quote.<anonymous>' call
    quoteTo(_this__u8e3s4, tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function isQuoted(_this__u8e3s4) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    if (_this__u8e3s4.length < 2) {
      return false;
    }
    if (!equals(new Char(first(_this__u8e3s4)), new Char(_Char___init__impl__6a9atx(34))) ? true : !equals(new Char(last_0(_this__u8e3s4)), new Char(_Char___init__impl__6a9atx(34)))) {
      return false;
    }
    var startIndex = 1;
    $l$loop: do {
      var tmp = _Char___init__impl__6a9atx(34);
      var tmp_0 = startIndex;
      var index = indexOf$default(_this__u8e3s4, tmp, tmp_0, false, 4, null);
      if (index === get_lastIndex_0(_this__u8e3s4)) {
        break $l$loop;
      }
      var slashesCount = 0;
      var slashIndex = index - 1 | 0;
      while (equals(new Char(charSequenceGet(_this__u8e3s4, slashIndex)), new Char(_Char___init__impl__6a9atx(92)))) {
        var tmp0 = slashesCount;
        slashesCount = tmp0 + 1 | 0;
        var tmp1 = slashIndex;
        slashIndex = tmp1 - 1 | 0;
      }
      if ((slashesCount % 2 | 0) === 0) {
        return false;
      }
      startIndex = index + 1 | 0;
    }
     while (startIndex < _this__u8e3s4.length);
    return true;
  }
  function quoteTo(_this__u8e3s4, out) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    out.wc('"');
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ch = charSequenceGet(_this__u8e3s4, i);
        if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(92)))) {
          out.wc('\\\\');
        } else if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(10)))) {
          out.wc('\\n');
        } else if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(13)))) {
          out.wc('\\r');
        } else if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(9)))) {
          out.wc('\\t');
        } else if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(34)))) {
          out.wc('\\"');
        } else {
          out.b5(ch);
        }
      }
       while (inductionVariable < last);
    out.wc('"');
  }
  function checkNeedEscape$accessor$vynnj(_this__u8e3s4) {
    init_properties_HeaderValueWithParameters_kt_2dfzmo();
    return checkNeedEscape(_this__u8e3s4);
  }
  var properties_initialized_HeaderValueWithParameters_kt_yu5xg;
  function init_properties_HeaderValueWithParameters_kt_2dfzmo() {
    if (properties_initialized_HeaderValueWithParameters_kt_yu5xg) {
    } else {
      properties_initialized_HeaderValueWithParameters_kt_yu5xg = true;
      HeaderFieldValueSeparators = setOf([new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(60)), new Char(_Char___init__impl__6a9atx(62)), new Char(_Char___init__impl__6a9atx(64)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(59)), new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(92)), new Char(_Char___init__impl__6a9atx(34)), new Char(_Char___init__impl__6a9atx(47)), new Char(_Char___init__impl__6a9atx(91)), new Char(_Char___init__impl__6a9atx(93)), new Char(_Char___init__impl__6a9atx(63)), new Char(_Char___init__impl__6a9atx(61)), new Char(_Char___init__impl__6a9atx(123)), new Char(_Char___init__impl__6a9atx(125)), new Char(_Char___init__impl__6a9atx(32)), new Char(_Char___init__impl__6a9atx(9)), new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(13))]);
    }
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.w1i_1 = EmptyHeaders_getInstance();
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function HeadersBuilder_init_$Init$(size, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      size = 8;
    HeadersBuilder.call($this, size);
    return $this;
  }
  function HeadersBuilder_init_$Create$(size, $mask0, $marker) {
    return HeadersBuilder_init_$Init$(size, $mask0, $marker, Object.create(HeadersBuilder.prototype));
  }
  function HeadersBuilder(size) {
    StringValuesBuilderImpl.call(this, true, size);
  }
  HeadersBuilder.prototype.i11 = function () {
    return new HeadersImpl(this.h1d_1);
  };
  HeadersBuilder.prototype.i1d = function (name) {
    StringValuesBuilderImpl.prototype.i1d.call(this, name);
    HttpHeaders_getInstance().v1m(name);
  };
  HeadersBuilder.prototype.l1d = function (value) {
    StringValuesBuilderImpl.prototype.l1d.call(this, value);
    HttpHeaders_getInstance().w1m(value);
  };
  function EmptyHeaders() {
    EmptyHeaders_instance = this;
  }
  EmptyHeaders.prototype.b1d = function () {
    return true;
  };
  EmptyHeaders.prototype.c1d = function (name) {
    return null;
  };
  EmptyHeaders.prototype.d1d = function () {
    return emptySet();
  };
  EmptyHeaders.prototype.e1d = function () {
    return emptySet();
  };
  EmptyHeaders.prototype.toString = function () {
    return 'Headers ' + this.e1d();
  };
  var EmptyHeaders_instance;
  function EmptyHeaders_getInstance() {
    if (EmptyHeaders_instance == null)
      new EmptyHeaders();
    return EmptyHeaders_instance;
  }
  function HeadersImpl(values) {
    StringValuesImpl.call(this, true, values);
  }
  HeadersImpl.prototype.toString = function () {
    return 'Headers ' + this.e1d();
  };
  function HeaderValueParam(name, value) {
    this.c1h_1 = name;
    this.d1h_1 = value;
  }
  HeaderValueParam.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof HeaderValueParam) {
      tmp_0 = equals_0(other.c1h_1, this.c1h_1, true);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals_0(other.d1h_1, this.d1h_1, true);
    } else {
      tmp = false;
    }
    return tmp;
  };
  HeaderValueParam.prototype.hashCode = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.text.lowercase' call
    var tmp0_lowercase = this.c1h_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_lowercase;
    tmp$ret$1 = tmp$ret$0.toLowerCase();
    var result = getStringHashCode(tmp$ret$1);
    var tmp = result;
    var tmp_0 = imul(31, result);
    var tmp$ret$3;
    // Inline function 'kotlin.text.lowercase' call
    var tmp1_lowercase = this.d1h_1;
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp1_lowercase;
    tmp$ret$3 = tmp$ret$2.toLowerCase();
    result = tmp + (tmp_0 + getStringHashCode(tmp$ret$3) | 0) | 0;
    return result;
  };
  HeaderValueParam.prototype.s2 = function () {
    return this.c1h_1;
  };
  HeaderValueParam.prototype.t2 = function () {
    return this.d1h_1;
  };
  HeaderValueParam.prototype.toString = function () {
    return 'HeaderValueParam(name=' + this.c1h_1 + ', value=' + this.d1h_1 + ')';
  };
  function HeaderValue(value, params) {
    this.g1h_1 = value;
    this.h1h_1 = params;
    var tmp = this;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_firstOrNull = this.h1h_1;
      var tmp0_iterator = tmp0_firstOrNull.j();
      while (tmp0_iterator.k()) {
        var element = tmp0_iterator.l();
        var tmp$ret$0;
        // Inline function 'io.ktor.http.HeaderValue.quality.<anonymous>' call
        tmp$ret$0 = element.c1h_1 === 'q';
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d1h_1;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : toDoubleOrNull(tmp1_safe_receiver);
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_1;
      var tmp$ret$2;
      // Inline function 'io.ktor.http.HeaderValue.quality.<anonymous>' call
      tmp$ret$2 = rangeTo(0.0, 1.0).f2(tmp2_safe_receiver);
      if (tmp$ret$2) {
        tmp_1 = tmp2_safe_receiver;
      } else {
        tmp_1 = null;
      }
      tmp$ret$3 = tmp_1;
      tmp_0 = tmp$ret$3;
    }
    var tmp3_elvis_lhs = tmp_0;
    tmp.i1h_1 = tmp3_elvis_lhs == null ? 1.0 : tmp3_elvis_lhs;
  }
  HeaderValue.prototype.s2 = function () {
    return this.g1h_1;
  };
  HeaderValue.prototype.toString = function () {
    return 'HeaderValue(value=' + this.g1h_1 + ', params=' + this.h1h_1 + ')';
  };
  HeaderValue.prototype.hashCode = function () {
    var result = getStringHashCode(this.g1h_1);
    result = imul(result, 31) + hashCode(this.h1h_1) | 0;
    return result;
  };
  HeaderValue.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HeaderValue))
      return false;
    var tmp0_other_with_cast = other instanceof HeaderValue ? other : THROW_CCE();
    if (!(this.g1h_1 === tmp0_other_with_cast.g1h_1))
      return false;
    if (!equals(this.h1h_1, tmp0_other_with_cast.h1h_1))
      return false;
    return true;
  };
  function parseHeaderValue(text) {
    return parseHeaderValue_0(text, false);
  }
  function parseHeaderValue_0(text, parametersOnly) {
    if (text == null) {
      return emptyList();
    }
    var position = 0;
    var tmp = LazyThreadSafetyMode_NONE_getInstance();
    var items = lazy(tmp, parseHeaderValue$lambda);
    while (position <= get_lastIndex_0(text)) {
      position = parseHeaderValueItem(text, position, items, parametersOnly);
    }
    return valueOrEmpty(items);
  }
  function parseHeaderValueItem(text, start, items, parametersOnly) {
    var position = start;
    var tmp = LazyThreadSafetyMode_NONE_getInstance();
    var parameters = lazy(tmp, parseHeaderValueItem$lambda);
    var valueEnd = parametersOnly ? position : null;
    while (position <= get_lastIndex_0(text)) {
      var tmp0_subject = charSequenceGet(text, position);
      if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44)))) {
        var tmp_0 = items.o();
        var tmp1_elvis_lhs = valueEnd;
        tmp_0.a(new HeaderValue(subtrim(text, start, tmp1_elvis_lhs == null ? position : tmp1_elvis_lhs), valueOrEmpty(parameters)));
        return position + 1 | 0;
      } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(59)))) {
        if (valueEnd == null)
          valueEnd = position;
        position = parseHeaderValueParameter(text, position + 1 | 0, parameters);
      } else {
        var tmp_1;
        if (parametersOnly) {
          tmp_1 = parseHeaderValueParameter(text, position, parameters);
        } else {
          tmp_1 = position + 1 | 0;
        }
        position = tmp_1;
      }
    }
    var tmp_2 = items.o();
    var tmp2_elvis_lhs = valueEnd;
    tmp_2.a(new HeaderValue(subtrim(text, start, tmp2_elvis_lhs == null ? position : tmp2_elvis_lhs), valueOrEmpty(parameters)));
    return position;
  }
  function valueOrEmpty(_this__u8e3s4) {
    return _this__u8e3s4.c6() ? _this__u8e3s4.o() : emptyList();
  }
  function subtrim(_this__u8e3s4, start, end) {
    var tmp$ret$2;
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    tmp$ret$1 = tmp$ret$0.substring(start, end);
    var tmp0_trim = tmp$ret$1;
    tmp$ret$2 = toString(trim(isCharSequence(tmp0_trim) ? tmp0_trim : THROW_CCE()));
    return tmp$ret$2;
  }
  function parseHeaderValueParameter(text, start, parameters) {
    var position = start;
    while (position <= get_lastIndex_0(text)) {
      var tmp0_subject = charSequenceGet(text, position);
      if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(61)))) {
        var tmp1_container = parseHeaderValueParameterValue(text, position + 1 | 0);
        var paramEnd = tmp1_container.s2();
        var paramValue = tmp1_container.t2();
        parseHeaderValueParameter$addParam(parameters, text, start, position, paramValue);
        return paramEnd;
      } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(59))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44)))) {
        parseHeaderValueParameter$addParam(parameters, text, start, position, '');
        return position;
      } else {
        var tmp2 = position;
        position = tmp2 + 1 | 0;
      }
    }
    parseHeaderValueParameter$addParam(parameters, text, start, position, '');
    return position;
  }
  function parseHeaderValueParameterValue(value, start) {
    if (value.length === start) {
      return to(start, '');
    }
    var position = start;
    if (equals(new Char(charSequenceGet(value, start)), new Char(_Char___init__impl__6a9atx(34)))) {
      return parseHeaderValueParameterValueQuoted(value, position + 1 | 0);
    }
    while (position <= get_lastIndex_0(value)) {
      var tmp0_subject = charSequenceGet(value, position);
      if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(59))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44))))
        return to(position, subtrim(value, start, position));
      else {
        var tmp1 = position;
        position = tmp1 + 1 | 0;
      }
    }
    return to(position, subtrim(value, start, position));
  }
  function parseHeaderValueParameterValueQuoted(value, start) {
    var position = start;
    var builder = StringBuilder_init_$Create$();
    loop: while (position <= get_lastIndex_0(value)) {
      var currentChar = charSequenceGet(value, position);
      if (equals(new Char(currentChar), new Char(_Char___init__impl__6a9atx(34))) ? nextIsSemicolonOrEnd(value, position) : false) {
        return to(position + 1 | 0, builder.toString());
      } else if (equals(new Char(currentChar), new Char(_Char___init__impl__6a9atx(92))) ? position < (get_lastIndex_0(value) - 2 | 0) : false) {
        builder.b5(charSequenceGet(value, position + 1 | 0));
        position = position + 2 | 0;
        continue loop;
      }
      builder.b5(currentChar);
      var tmp0 = position;
      position = tmp0 + 1 | 0;
    }
    var tmp = position;
    var tmp$ret$0;
    // Inline function 'kotlin.text.plus' call
    var tmp0_plus = builder.toString();
    tmp$ret$0 = '"' + tmp0_plus;
    return to(tmp, tmp$ret$0);
  }
  function nextIsSemicolonOrEnd(_this__u8e3s4, start) {
    var position = start + 1 | 0;
    loop: while (position < _this__u8e3s4.length ? equals(new Char(charSequenceGet(_this__u8e3s4, position)), new Char(_Char___init__impl__6a9atx(32))) : false) {
      position = position + 1 | 0;
    }
    return position === _this__u8e3s4.length ? true : equals(new Char(charSequenceGet(_this__u8e3s4, position)), new Char(_Char___init__impl__6a9atx(59)));
  }
  function parseAndSortHeader(header) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.sortedByDescending' call
    var tmp0_sortedByDescending = parseHeaderValue(header);
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = parseAndSortHeader$lambda;
    tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
    tmp$ret$1 = sortedWith(tmp0_sortedByDescending, tmp$ret$0);
    return tmp$ret$1;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.x1m_1 = function_0;
  }
  sam$kotlin_Comparator$0.prototype.dd = function (a, b) {
    return this.x1m_1(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.dd(a, b);
  };
  function parseHeaderValueParameter$addParam($parameters, text, start, end, value) {
    var name = subtrim(text, start, end);
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$0 = charSequenceLength(name) === 0;
    if (tmp$ret$0) {
      return Unit_getInstance();
    }
    $parameters.o().a(new HeaderValueParam(name, value));
  }
  function parseHeaderValue$lambda() {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    return tmp$ret$0;
  }
  function parseHeaderValueItem$lambda() {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    return tmp$ret$0;
  }
  function parseAndSortHeader$lambda(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'io.ktor.http.parseAndSortHeader.<anonymous>' call
    tmp$ret$0 = b.i1h_1;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.http.parseAndSortHeader.<anonymous>' call
    tmp$ret$1 = a.i1h_1;
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function HttpHeaders() {
    HttpHeaders_instance = this;
    this.z1i_1 = 'Accept';
    this.a1j_1 = 'Accept-Charset';
    this.b1j_1 = 'Accept-Encoding';
    this.c1j_1 = 'Accept-Language';
    this.d1j_1 = 'Accept-Ranges';
    this.e1j_1 = 'Age';
    this.f1j_1 = 'Allow';
    this.g1j_1 = 'ALPN';
    this.h1j_1 = 'Authentication-Info';
    this.i1j_1 = 'Authorization';
    this.j1j_1 = 'Cache-Control';
    this.k1j_1 = 'Connection';
    this.l1j_1 = 'Content-Disposition';
    this.m1j_1 = 'Content-Encoding';
    this.n1j_1 = 'Content-Language';
    this.o1j_1 = 'Content-Length';
    this.p1j_1 = 'Content-Location';
    this.q1j_1 = 'Content-Range';
    this.r1j_1 = 'Content-Type';
    this.s1j_1 = 'Cookie';
    this.t1j_1 = 'DASL';
    this.u1j_1 = 'Date';
    this.v1j_1 = 'DAV';
    this.w1j_1 = 'Depth';
    this.x1j_1 = 'Destination';
    this.y1j_1 = 'ETag';
    this.z1j_1 = 'Expect';
    this.a1k_1 = 'Expires';
    this.b1k_1 = 'From';
    this.c1k_1 = 'Forwarded';
    this.d1k_1 = 'Host';
    this.e1k_1 = 'HTTP2-Settings';
    this.f1k_1 = 'If';
    this.g1k_1 = 'If-Match';
    this.h1k_1 = 'If-Modified-Since';
    this.i1k_1 = 'If-None-Match';
    this.j1k_1 = 'If-Range';
    this.k1k_1 = 'If-Schedule-Tag-Match';
    this.l1k_1 = 'If-Unmodified-Since';
    this.m1k_1 = 'Last-Modified';
    this.n1k_1 = 'Location';
    this.o1k_1 = 'Lock-Token';
    this.p1k_1 = 'Link';
    this.q1k_1 = 'Max-Forwards';
    this.r1k_1 = 'MIME-Version';
    this.s1k_1 = 'Ordering-Type';
    this.t1k_1 = 'Origin';
    this.u1k_1 = 'Overwrite';
    this.v1k_1 = 'Position';
    this.w1k_1 = 'Pragma';
    this.x1k_1 = 'Prefer';
    this.y1k_1 = 'Preference-Applied';
    this.z1k_1 = 'Proxy-Authenticate';
    this.a1l_1 = 'Proxy-Authentication-Info';
    this.b1l_1 = 'Proxy-Authorization';
    this.c1l_1 = 'Public-Key-Pins';
    this.d1l_1 = 'Public-Key-Pins-Report-Only';
    this.e1l_1 = 'Range';
    this.f1l_1 = 'Referer';
    this.g1l_1 = 'Retry-After';
    this.h1l_1 = 'Schedule-Reply';
    this.i1l_1 = 'Schedule-Tag';
    this.j1l_1 = 'Sec-WebSocket-Accept';
    this.k1l_1 = 'Sec-WebSocket-Extensions';
    this.l1l_1 = 'Sec-WebSocket-Key';
    this.m1l_1 = 'Sec-WebSocket-Protocol';
    this.n1l_1 = 'Sec-WebSocket-Version';
    this.o1l_1 = 'Server';
    this.p1l_1 = 'Set-Cookie';
    this.q1l_1 = 'SLUG';
    this.r1l_1 = 'Strict-Transport-Security';
    this.s1l_1 = 'TE';
    this.t1l_1 = 'Timeout';
    this.u1l_1 = 'Trailer';
    this.v1l_1 = 'Transfer-Encoding';
    this.w1l_1 = 'Upgrade';
    this.x1l_1 = 'User-Agent';
    this.y1l_1 = 'Vary';
    this.z1l_1 = 'Via';
    this.a1m_1 = 'Warning';
    this.b1m_1 = 'WWW-Authenticate';
    this.c1m_1 = 'Access-Control-Allow-Origin';
    this.d1m_1 = 'Access-Control-Allow-Methods';
    this.e1m_1 = 'Access-Control-Allow-Credentials';
    this.f1m_1 = 'Access-Control-Allow-Headers';
    this.g1m_1 = 'Access-Control-Request-Method';
    this.h1m_1 = 'Access-Control-Request-Headers';
    this.i1m_1 = 'Access-Control-Expose-Headers';
    this.j1m_1 = 'Access-Control-Max-Age';
    this.k1m_1 = 'X-Http-Method-Override';
    this.l1m_1 = 'X-Forwarded-Host';
    this.m1m_1 = 'X-Forwarded-Server';
    this.n1m_1 = 'X-Forwarded-Proto';
    this.o1m_1 = 'X-Forwarded-For';
    this.p1m_1 = 'X-Forwarded-Port';
    this.q1m_1 = 'X-Request-ID';
    this.r1m_1 = 'X-Correlation-ID';
    this.s1m_1 = 'X-Total-Count';
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [this.v1l_1, this.w1l_1];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp.t1m_1 = tmp$ret$2;
    this.u1m_1 = asList(this.t1m_1);
  }
  HttpHeaders.prototype.v1m = function (name) {
    // Inline function 'kotlin.text.forEachIndexed' call
    var index = 0;
    var indexedObject = name;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'io.ktor.http.HttpHeaders.checkHeaderName.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp0__anonymous__q1qw7t = tmp1;
      if (Char__compareTo_impl_ypi4mb(item, _Char___init__impl__6a9atx(32)) <= 0 ? true : isDelimiter(item)) {
        throw new IllegalHeaderNameException(name, tmp0__anonymous__q1qw7t);
      }
    }
  };
  HttpHeaders.prototype.w1m = function (value) {
    // Inline function 'kotlin.text.forEachIndexed' call
    var index = 0;
    var indexedObject = value;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      $l$block: {
        // Inline function 'io.ktor.http.HttpHeaders.checkHeaderValue.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var tmp0__anonymous__q1qw7t = tmp1;
        if (equals(new Char(item), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(item), new Char(_Char___init__impl__6a9atx(9)))) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }
        if (Char__compareTo_impl_ypi4mb(item, _Char___init__impl__6a9atx(32)) < 0) {
          throw new IllegalHeaderValueException(value, tmp0__anonymous__q1qw7t);
        }
      }
    }
  };
  var HttpHeaders_instance;
  function HttpHeaders_getInstance() {
    if (HttpHeaders_instance == null)
      new HttpHeaders();
    return HttpHeaders_instance;
  }
  function isDelimiter(ch) {
    return contains$default('"(),/:;<=>?@[\\]{}', ch, false, 2, null);
  }
  function IllegalHeaderNameException(headerName, position) {
    var tmp = "Header name '" + headerName + "' contains illegal character '" + new Char(charSequenceGet(headerName, position)) + "'";
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    var tmp0__get_code__88qj9g = charSequenceGet(headerName, position);
    tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
    IllegalArgumentException_init_$Init$(tmp + (' (code ' + (tmp$ret$0 & 255) + ')'), this);
    this.y1m_1 = headerName;
    this.z1m_1 = position;
    captureStack(this, IllegalHeaderNameException);
  }
  function IllegalHeaderValueException(headerValue, position) {
    var tmp = "Header value '" + headerValue + "' contains illegal character '" + new Char(charSequenceGet(headerValue, position)) + "'";
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    var tmp0__get_code__88qj9g = charSequenceGet(headerValue, position);
    tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
    IllegalArgumentException_init_$Init$(tmp + (' (code ' + (tmp$ret$0 & 255) + ')'), this);
    this.a1n_1 = headerValue;
    this.b1n_1 = position;
    captureStack(this, IllegalHeaderValueException);
  }
  function UnsafeHeaderException(header) {
    IllegalArgumentException_init_$Init$('Header(s) ' + header + ' are controlled by the engine and ' + 'cannot be set explicitly', this);
    captureStack(this, UnsafeHeaderException);
  }
  function contentType(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.c1n().h1c(HttpHeaders_getInstance().r1j_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'io.ktor.http.contentType.<anonymous>' call
      tmp$ret$0 = Companion_getInstance_0().f1h(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function contentLength(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.c1n().h1c(HttpHeaders_getInstance().o1j_1);
    return tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
  }
  function charset_0(_this__u8e3s4) {
    var tmp0_safe_receiver = contentType_1(_this__u8e3s4);
    return tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
  }
  function contentType_0(_this__u8e3s4, type) {
    return _this__u8e3s4.c1n().k1d(HttpHeaders_getInstance().r1j_1, type.toString());
  }
  function contentType_1(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.c1n().h1c(HttpHeaders_getInstance().r1j_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'io.ktor.http.contentType.<anonymous>' call
      tmp$ret$0 = Companion_getInstance_0().f1h(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.d1n_1 = new HttpMethod('GET');
    this.e1n_1 = new HttpMethod('POST');
    this.f1n_1 = new HttpMethod('PUT');
    this.g1n_1 = new HttpMethod('PATCH');
    this.h1n_1 = new HttpMethod('DELETE');
    this.i1n_1 = new HttpMethod('HEAD');
    this.j1n_1 = new HttpMethod('OPTIONS');
    this.k1n_1 = listOf([this.d1n_1, this.e1n_1, this.f1n_1, this.g1n_1, this.h1n_1, this.i1n_1, this.j1n_1]);
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function HttpMethod(value) {
    Companion_getInstance_3();
    this.l1n_1 = value;
  }
  HttpMethod.prototype.toString = function () {
    return 'HttpMethod(value=' + this.l1n_1 + ')';
  };
  HttpMethod.prototype.hashCode = function () {
    return getStringHashCode(this.l1n_1);
  };
  HttpMethod.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpMethod))
      return false;
    var tmp0_other_with_cast = other instanceof HttpMethod ? other : THROW_CCE();
    if (!(this.l1n_1 === tmp0_other_with_cast.l1n_1))
      return false;
    return true;
  };
  function Companion_3() {
    Companion_instance_3 = this;
    this.m1n_1 = new HttpProtocolVersion('HTTP', 2, 0);
    this.n1n_1 = new HttpProtocolVersion('HTTP', 1, 1);
    this.o1n_1 = new HttpProtocolVersion('HTTP', 1, 0);
    this.p1n_1 = new HttpProtocolVersion('SPDY', 3, 0);
    this.q1n_1 = new HttpProtocolVersion('QUIC', 1, 0);
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function HttpProtocolVersion(name, major, minor) {
    Companion_getInstance_4();
    this.r1n_1 = name;
    this.s1n_1 = major;
    this.t1n_1 = minor;
  }
  HttpProtocolVersion.prototype.toString = function () {
    return this.r1n_1 + '/' + this.s1n_1 + '.' + this.t1n_1;
  };
  HttpProtocolVersion.prototype.hashCode = function () {
    var result = getStringHashCode(this.r1n_1);
    result = imul(result, 31) + this.s1n_1 | 0;
    result = imul(result, 31) + this.t1n_1 | 0;
    return result;
  };
  HttpProtocolVersion.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpProtocolVersion))
      return false;
    var tmp0_other_with_cast = other instanceof HttpProtocolVersion ? other : THROW_CCE();
    if (!(this.r1n_1 === tmp0_other_with_cast.r1n_1))
      return false;
    if (!(this.s1n_1 === tmp0_other_with_cast.s1n_1))
      return false;
    if (!(this.t1n_1 === tmp0_other_with_cast.t1n_1))
      return false;
    return true;
  };
  function Companion_4() {
    Companion_instance_4 = this;
    this.u1n_1 = new HttpStatusCode(100, 'Continue');
    this.v1n_1 = new HttpStatusCode(101, 'Switching Protocols');
    this.w1n_1 = new HttpStatusCode(102, 'Processing');
    this.x1n_1 = new HttpStatusCode(200, 'OK');
    this.y1n_1 = new HttpStatusCode(201, 'Created');
    this.z1n_1 = new HttpStatusCode(202, 'Accepted');
    this.a1o_1 = new HttpStatusCode(203, 'Non-Authoritative Information');
    this.b1o_1 = new HttpStatusCode(204, 'No Content');
    this.c1o_1 = new HttpStatusCode(205, 'Reset Content');
    this.d1o_1 = new HttpStatusCode(206, 'Partial Content');
    this.e1o_1 = new HttpStatusCode(207, 'Multi-Status');
    this.f1o_1 = new HttpStatusCode(300, 'Multiple Choices');
    this.g1o_1 = new HttpStatusCode(301, 'Moved Permanently');
    this.h1o_1 = new HttpStatusCode(302, 'Found');
    this.i1o_1 = new HttpStatusCode(303, 'See Other');
    this.j1o_1 = new HttpStatusCode(304, 'Not Modified');
    this.k1o_1 = new HttpStatusCode(305, 'Use Proxy');
    this.l1o_1 = new HttpStatusCode(306, 'Switch Proxy');
    this.m1o_1 = new HttpStatusCode(307, 'Temporary Redirect');
    this.n1o_1 = new HttpStatusCode(308, 'Permanent Redirect');
    this.o1o_1 = new HttpStatusCode(400, 'Bad Request');
    this.p1o_1 = new HttpStatusCode(401, 'Unauthorized');
    this.q1o_1 = new HttpStatusCode(402, 'Payment Required');
    this.r1o_1 = new HttpStatusCode(403, 'Forbidden');
    this.s1o_1 = new HttpStatusCode(404, 'Not Found');
    this.t1o_1 = new HttpStatusCode(405, 'Method Not Allowed');
    this.u1o_1 = new HttpStatusCode(406, 'Not Acceptable');
    this.v1o_1 = new HttpStatusCode(407, 'Proxy Authentication Required');
    this.w1o_1 = new HttpStatusCode(408, 'Request Timeout');
    this.x1o_1 = new HttpStatusCode(409, 'Conflict');
    this.y1o_1 = new HttpStatusCode(410, 'Gone');
    this.z1o_1 = new HttpStatusCode(411, 'Length Required');
    this.a1p_1 = new HttpStatusCode(412, 'Precondition Failed');
    this.b1p_1 = new HttpStatusCode(413, 'Payload Too Large');
    this.c1p_1 = new HttpStatusCode(414, 'Request-URI Too Long');
    this.d1p_1 = new HttpStatusCode(415, 'Unsupported Media Type');
    this.e1p_1 = new HttpStatusCode(416, 'Requested Range Not Satisfiable');
    this.f1p_1 = new HttpStatusCode(417, 'Expectation Failed');
    this.g1p_1 = new HttpStatusCode(422, 'Unprocessable Entity');
    this.h1p_1 = new HttpStatusCode(423, 'Locked');
    this.i1p_1 = new HttpStatusCode(424, 'Failed Dependency');
    this.j1p_1 = new HttpStatusCode(426, 'Upgrade Required');
    this.k1p_1 = new HttpStatusCode(429, 'Too Many Requests');
    this.l1p_1 = new HttpStatusCode(431, 'Request Header Fields Too Large');
    this.m1p_1 = new HttpStatusCode(500, 'Internal Server Error');
    this.n1p_1 = new HttpStatusCode(501, 'Not Implemented');
    this.o1p_1 = new HttpStatusCode(502, 'Bad Gateway');
    this.p1p_1 = new HttpStatusCode(503, 'Service Unavailable');
    this.q1p_1 = new HttpStatusCode(504, 'Gateway Timeout');
    this.r1p_1 = new HttpStatusCode(505, 'HTTP Version Not Supported');
    this.s1p_1 = new HttpStatusCode(506, 'Variant Also Negotiates');
    this.t1p_1 = new HttpStatusCode(507, 'Insufficient Storage');
    this.u1p_1 = allStatusCodes();
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.associateBy' call
    var tmp0_associateBy = this.u1p_1;
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp0_associateBy, 10)), 16);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = LinkedHashMap_init_$Create$(capacity);
    var tmp0_iterator = tmp0_associateBy.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      var tmp$ret$0;
      // Inline function 'io.ktor.http.Companion.statusCodesMap.<anonymous>' call
      tmp$ret$0 = element.w1p_1;
      tmp0_associateByTo.u2(tmp$ret$0, element);
    }
    tmp$ret$1 = tmp0_associateByTo;
    tmp$ret$2 = tmp$ret$1;
    tmp.v1p_1 = tmp$ret$2;
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function HttpStatusCode(value, description) {
    Companion_getInstance_5();
    this.w1p_1 = value;
    this.x1p_1 = description;
  }
  HttpStatusCode.prototype.toString = function () {
    return '' + this.w1p_1 + ' ' + this.x1p_1;
  };
  HttpStatusCode.prototype.equals = function (other) {
    var tmp;
    if (other instanceof HttpStatusCode) {
      tmp = other.w1p_1 === this.w1p_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  HttpStatusCode.prototype.hashCode = function () {
    return this.w1p_1;
  };
  function allStatusCodes() {
    return listOf([Companion_getInstance_5().u1n_1, Companion_getInstance_5().v1n_1, Companion_getInstance_5().w1n_1, Companion_getInstance_5().x1n_1, Companion_getInstance_5().y1n_1, Companion_getInstance_5().z1n_1, Companion_getInstance_5().a1o_1, Companion_getInstance_5().b1o_1, Companion_getInstance_5().c1o_1, Companion_getInstance_5().d1o_1, Companion_getInstance_5().e1o_1, Companion_getInstance_5().f1o_1, Companion_getInstance_5().g1o_1, Companion_getInstance_5().h1o_1, Companion_getInstance_5().i1o_1, Companion_getInstance_5().j1o_1, Companion_getInstance_5().k1o_1, Companion_getInstance_5().l1o_1, Companion_getInstance_5().m1o_1, Companion_getInstance_5().n1o_1, Companion_getInstance_5().o1o_1, Companion_getInstance_5().p1o_1, Companion_getInstance_5().q1o_1, Companion_getInstance_5().r1o_1, Companion_getInstance_5().s1o_1, Companion_getInstance_5().t1o_1, Companion_getInstance_5().u1o_1, Companion_getInstance_5().v1o_1, Companion_getInstance_5().w1o_1, Companion_getInstance_5().x1o_1, Companion_getInstance_5().y1o_1, Companion_getInstance_5().z1o_1, Companion_getInstance_5().a1p_1, Companion_getInstance_5().b1p_1, Companion_getInstance_5().c1p_1, Companion_getInstance_5().d1p_1, Companion_getInstance_5().e1p_1, Companion_getInstance_5().f1p_1, Companion_getInstance_5().g1p_1, Companion_getInstance_5().h1p_1, Companion_getInstance_5().i1p_1, Companion_getInstance_5().j1p_1, Companion_getInstance_5().k1p_1, Companion_getInstance_5().l1p_1, Companion_getInstance_5().m1p_1, Companion_getInstance_5().n1p_1, Companion_getInstance_5().o1p_1, Companion_getInstance_5().p1p_1, Companion_getInstance_5().q1p_1, Companion_getInstance_5().r1p_1, Companion_getInstance_5().s1p_1, Companion_getInstance_5().t1p_1]);
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.y1p_1 = EmptyParameters_getInstance();
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Parameters() {
  }
  function EmptyParameters() {
    EmptyParameters_instance = this;
  }
  EmptyParameters.prototype.b1d = function () {
    return true;
  };
  EmptyParameters.prototype.c1d = function (name) {
    return null;
  };
  EmptyParameters.prototype.d1d = function () {
    return emptySet();
  };
  EmptyParameters.prototype.e1d = function () {
    return emptySet();
  };
  EmptyParameters.prototype.i = function () {
    return true;
  };
  EmptyParameters.prototype.toString = function () {
    return 'Parameters ' + this.e1d();
  };
  EmptyParameters.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Parameters) : false) {
      tmp = other.i();
    } else {
      tmp = false;
    }
    return tmp;
  };
  var EmptyParameters_instance;
  function EmptyParameters_getInstance() {
    if (EmptyParameters_instance == null)
      new EmptyParameters();
    return EmptyParameters_instance;
  }
  function ParametersBuilder(size) {
    return new ParametersBuilderImpl(size);
  }
  function ParametersBuilder$default(size, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      size = 8;
    return ParametersBuilder(size);
  }
  function ParametersBuilderImpl(size) {
    StringValuesBuilderImpl.call(this, true, size);
  }
  ParametersBuilderImpl.prototype.i11 = function () {
    return new ParametersImpl(this.h1d_1);
  };
  function ParametersImpl(values) {
    StringValuesImpl.call(this, true, values);
  }
  ParametersImpl.prototype.toString = function () {
    return 'Parameters ' + this.e1d();
  };
  function parseQueryString(query, startIndex, limit, decode) {
    var tmp;
    if (startIndex > get_lastIndex_0(query)) {
      tmp = Companion_getInstance_6().y1p_1;
    } else {
      var tmp$ret$1;
      // Inline function 'io.ktor.http.Companion.build' call
      var tmp0_build = Companion_getInstance_6();
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = ParametersBuilder$default(0, 1, null);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.http.parseQueryString.<anonymous>' call
      parse(tmp0_apply, query, startIndex, limit, decode);
      tmp$ret$0 = tmp0_apply;
      tmp$ret$1 = tmp$ret$0.i11();
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function parseQueryString$default(query, startIndex, limit, decode, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      limit = 1000;
    if (!(($mask0 & 8) === 0))
      decode = true;
    return parseQueryString(query, startIndex, limit, decode);
  }
  function parse(_this__u8e3s4, query, startIndex, limit, decode) {
    var count = 0;
    var nameIndex = startIndex;
    var equalIndex = -1;
    var inductionVariable = startIndex;
    var last = get_lastIndex_0(query);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (count === limit) {
          return Unit_getInstance();
        }
        var tmp1_subject = charSequenceGet(query, index);
        if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(38)))) {
          appendParam(_this__u8e3s4, query, nameIndex, equalIndex, index, decode);
          nameIndex = index + 1 | 0;
          equalIndex = -1;
          var tmp2 = count;
          count = tmp2 + 1 | 0;
        } else if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(61)))) {
          if (equalIndex === -1) {
            equalIndex = index;
          }
        }
      }
       while (!(index === last));
    if (count === limit) {
      return Unit_getInstance();
    }
    appendParam(_this__u8e3s4, query, nameIndex, equalIndex, query.length, decode);
  }
  function appendParam(_this__u8e3s4, query, nameIndex, equalIndex, endIndex, decode) {
    if (equalIndex === -1) {
      var spaceNameIndex = trimStart(nameIndex, endIndex, query);
      var spaceEndIndex = trimEnd(spaceNameIndex, endIndex, query);
      if (spaceEndIndex > spaceNameIndex) {
        var tmp;
        if (decode) {
          tmp = decodeURLQueryComponent$default(query, spaceNameIndex, spaceEndIndex, false, null, 12, null);
        } else {
          var tmp$ret$1;
          // Inline function 'kotlin.text.substring' call
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = query;
          tmp$ret$1 = tmp$ret$0.substring(spaceNameIndex, spaceEndIndex);
          tmp = tmp$ret$1;
        }
        var name = tmp;
        _this__u8e3s4.j1d(name, emptyList());
      }
      return Unit_getInstance();
    }
    var spaceNameIndex_0 = trimStart(nameIndex, equalIndex, query);
    var spaceEqualIndex = trimEnd(spaceNameIndex_0, equalIndex, query);
    if (spaceEqualIndex > spaceNameIndex_0) {
      var tmp_0;
      if (decode) {
        tmp_0 = decodeURLQueryComponent$default(query, spaceNameIndex_0, spaceEqualIndex, false, null, 12, null);
      } else {
        var tmp$ret$3;
        // Inline function 'kotlin.text.substring' call
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = query;
        tmp$ret$3 = tmp$ret$2.substring(spaceNameIndex_0, spaceEqualIndex);
        tmp_0 = tmp$ret$3;
      }
      var name_0 = tmp_0;
      var spaceValueIndex = trimStart(equalIndex + 1 | 0, endIndex, query);
      var spaceEndIndex_0 = trimEnd(spaceValueIndex, endIndex, query);
      var tmp_1;
      if (decode) {
        tmp_1 = decodeURLQueryComponent$default(query, spaceValueIndex, spaceEndIndex_0, true, null, 8, null);
      } else {
        var tmp$ret$5;
        // Inline function 'kotlin.text.substring' call
        var tmp$ret$4;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = query;
        tmp$ret$5 = tmp$ret$4.substring(spaceValueIndex, spaceEndIndex_0);
        tmp_1 = tmp$ret$5;
      }
      var value = tmp_1;
      _this__u8e3s4.m1d(name_0, value);
    }
  }
  function trimStart(start, end, query) {
    var spaceIndex = start;
    while (spaceIndex < end ? isWhitespace(charSequenceGet(query, spaceIndex)) : false) {
      var tmp0 = spaceIndex;
      spaceIndex = tmp0 + 1 | 0;
    }
    return spaceIndex;
  }
  function trimEnd(start, end, text) {
    var spaceIndex = end;
    while (spaceIndex > start ? isWhitespace(charSequenceGet(text, spaceIndex - 1 | 0)) : false) {
      var tmp0 = spaceIndex;
      spaceIndex = tmp0 - 1 | 0;
    }
    return spaceIndex;
  }
  function URLBuilder_init_$Init$(protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      protocol = Companion_getInstance_8().b1q_1;
    if (!(($mask0 & 2) === 0))
      host = '';
    if (!(($mask0 & 4) === 0))
      port = 0;
    if (!(($mask0 & 8) === 0))
      user = null;
    if (!(($mask0 & 16) === 0))
      password = null;
    if (!(($mask0 & 32) === 0))
      pathSegments = emptyList();
    if (!(($mask0 & 64) === 0))
      parameters = Companion_getInstance_6().y1p_1;
    if (!(($mask0 & 128) === 0))
      fragment = '';
    if (!(($mask0 & 256) === 0))
      trailingQuery = false;
    URLBuilder.call($this, protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery);
    return $this;
  }
  function URLBuilder_init_$Create$(protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery, $mask0, $marker) {
    return URLBuilder_init_$Init$(protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery, $mask0, $marker, Object.create(URLBuilder.prototype));
  }
  function applyOrigin($this) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotEmpty' call
    var tmp0_isNotEmpty = $this.i1q_1;
    tmp$ret$0 = charSequenceLength(tmp0_isNotEmpty) > 0;
    if (tmp$ret$0) {
      tmp = true;
    } else {
      tmp = $this.h1q_1.r1q_1 === 'file';
    }
    if (tmp)
      return Unit_getInstance();
    $this.i1q_1 = Companion_getInstance_7().j1r_1.u1q_1;
    if ($this.h1q_1.equals(Companion_getInstance_8().b1q_1))
      $this.h1q_1 = Companion_getInstance_7().j1r_1.t1q_1;
    if ($this.j1q_1 === 0)
      $this.j1q_1 = Companion_getInstance_7().j1r_1.v1q_1;
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.j1r_1 = Url(get_origin(this));
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function URLBuilder(protocol, host, port, user, password, pathSegments, parameters, fragment, trailingQuery) {
    Companion_getInstance_7();
    this.h1q_1 = protocol;
    this.i1q_1 = host;
    this.j1q_1 = port;
    this.k1q_1 = trailingQuery;
    var tmp = this;
    var tmp0_safe_receiver = user;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      tmp_0 = encodeURLParameter$default(tmp0_safe_receiver, false, 1, null);
    }
    tmp.l1q_1 = tmp_0;
    var tmp_1 = this;
    var tmp0_safe_receiver_0 = password;
    var tmp_2;
    if (tmp0_safe_receiver_0 == null) {
      tmp_2 = null;
    } else {
      tmp_2 = encodeURLParameter$default(tmp0_safe_receiver_0, false, 1, null);
    }
    tmp_1.m1q_1 = tmp_2;
    var tmp_3 = this;
    tmp_3.n1q_1 = encodeURLQueryComponent$default(fragment, false, false, null, 7, null);
    var tmp_4 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(pathSegments, 10));
    var tmp0_iterator = pathSegments.j();
    while (tmp0_iterator.k()) {
      var item = tmp0_iterator.l();
      var tmp$ret$0;
      // Inline function 'io.ktor.http.URLBuilder.encodedPathSegments.<anonymous>' call
      tmp$ret$0 = encodeURLPath(item);
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    tmp_4.o1q_1 = tmp$ret$2;
    this.p1q_1 = encodeParameters(parameters);
    this.q1q_1 = new UrlDecodedParametersBuilder(this.p1q_1);
  }
  URLBuilder.prototype.k1r = function (value) {
    var tmp = this;
    var tmp0_safe_receiver = value;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      tmp_0 = encodeURLParameter$default(tmp0_safe_receiver, false, 1, null);
    }
    tmp.l1q_1 = tmp_0;
  };
  URLBuilder.prototype.l1r = function () {
    var tmp0_safe_receiver = this.l1q_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = decodeURLPart$default(tmp0_safe_receiver, 0, 0, null, 7, null);
    }
    return tmp;
  };
  URLBuilder.prototype.m1r = function () {
    var tmp0_safe_receiver = this.m1q_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = decodeURLPart$default(tmp0_safe_receiver, 0, 0, null, 7, null);
    }
    return tmp;
  };
  URLBuilder.prototype.n1r = function () {
    var tmp = this.n1q_1;
    return decodeURLQueryComponent$default(tmp, 0, 0, false, null, 15, null);
  };
  URLBuilder.prototype.o1r = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = this.o1q_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.j();
    while (tmp0_iterator.k()) {
      var item = tmp0_iterator.l();
      var tmp$ret$0;
      // Inline function 'io.ktor.http.URLBuilder.<get-pathSegments>.<anonymous>' call
      tmp$ret$0 = decodeURLPart$default(item, 0, 0, null, 7, null);
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  URLBuilder.prototype.p1r = function (value) {
    this.p1q_1 = value;
    this.q1q_1 = new UrlDecodedParametersBuilder(value);
  };
  URLBuilder.prototype.q1r = function () {
    applyOrigin(this);
    return appendTo(this, StringBuilder_init_$Create$_0(256)).toString();
  };
  URLBuilder.prototype.i11 = function () {
    applyOrigin(this);
    return new Url_0(this.h1q_1, this.i1q_1, this.j1q_1, this.o1r(), this.q1q_1.i11(), this.n1r(), this.l1r(), this.m1r(), this.k1q_1, this.q1r());
  };
  function get_authority(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.<get-authority>.<anonymous>' call
    tmp0_apply.wc(get_encodedUserAndPassword(_this__u8e3s4));
    tmp0_apply.wc(_this__u8e3s4.i1q_1);
    if (!(_this__u8e3s4.j1q_1 === 0) ? !(_this__u8e3s4.j1q_1 === _this__u8e3s4.h1q_1.s1q_1) : false) {
      tmp0_apply.wc(':');
      tmp0_apply.wc(_this__u8e3s4.j1q_1.toString());
    }
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function get_DEFAULT_PORT() {
    return DEFAULT_PORT;
  }
  var DEFAULT_PORT;
  function appendTo(_this__u8e3s4, out) {
    out.b(_this__u8e3s4.h1q_1.r1q_1);
    var tmp0_subject = _this__u8e3s4.h1q_1.r1q_1;
    if (tmp0_subject === 'file') {
      appendFile(out, _this__u8e3s4.i1q_1, get_encodedPath(_this__u8e3s4));
      return out;
    } else if (tmp0_subject === 'mailto') {
      appendMailto(out, get_encodedUserAndPassword(_this__u8e3s4), _this__u8e3s4.i1q_1);
      return out;
    }
    out.b('://');
    out.b(get_authority(_this__u8e3s4));
    appendUrlFullPath(out, get_encodedPath(_this__u8e3s4), _this__u8e3s4.p1q_1, _this__u8e3s4.k1q_1);
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotEmpty' call
    var tmp0_isNotEmpty = _this__u8e3s4.n1q_1;
    tmp$ret$0 = charSequenceLength(tmp0_isNotEmpty) > 0;
    if (tmp$ret$0) {
      out.b5(_Char___init__impl__6a9atx(35));
      out.b(_this__u8e3s4.n1q_1);
    }
    return out;
  }
  function get_encodedUserAndPassword(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.<get-encodedUserAndPassword>.<anonymous>' call
    appendUserAndPassword(tmp0_apply, _this__u8e3s4.l1q_1, _this__u8e3s4.m1q_1);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function appendFile(_this__u8e3s4, host, encodedPath) {
    _this__u8e3s4.b('://');
    _this__u8e3s4.b(host);
    var tmp = _Char___init__impl__6a9atx(47);
    if (!startsWith$default(encodedPath, tmp, false, 2, null)) {
      _this__u8e3s4.b5(_Char___init__impl__6a9atx(47));
    }
    _this__u8e3s4.b(encodedPath);
  }
  function set_encodedPath(_this__u8e3s4, value) {
    var tmp = _this__u8e3s4;
    var tmp_0;
    if (isBlank(value)) {
      tmp_0 = emptyList();
    } else if (value === '/') {
      tmp_0 = get_ROOT_PATH();
    } else {
      var tmp_1 = charArrayOf([_Char___init__impl__6a9atx(47)]);
      tmp_0 = toMutableList(split$default(value, tmp_1, false, 0, 6, null));
    }
    tmp.o1q_1 = tmp_0;
  }
  function get_encodedPath(_this__u8e3s4) {
    return joinPath(_this__u8e3s4.o1q_1);
  }
  function appendMailto(_this__u8e3s4, encodedUser, host) {
    _this__u8e3s4.b(':');
    _this__u8e3s4.b(encodedUser);
    _this__u8e3s4.b(host);
  }
  function joinPath(_this__u8e3s4) {
    if (_this__u8e3s4.i())
      return '';
    if (_this__u8e3s4.c() === 1) {
      var tmp$ret$0;
      // Inline function 'kotlin.text.isEmpty' call
      var tmp0_isEmpty = first_0(_this__u8e3s4);
      tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
      if (tmp$ret$0)
        return '/';
      return first_0(_this__u8e3s4);
    }
    return joinToString$default(_this__u8e3s4, '/', null, null, 0, null, null, 62, null);
  }
  function get_ROOT_PATH() {
    init_properties_URLParser_kt_jyldy();
    return ROOT_PATH;
  }
  var ROOT_PATH;
  function takeFrom(_this__u8e3s4, urlString) {
    init_properties_URLParser_kt_jyldy();
    if (isBlank(urlString))
      return _this__u8e3s4;
    var tmp;
    try {
      tmp = takeFromUnsafe(_this__u8e3s4, urlString);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        throw new URLParserException(urlString, $p);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function takeFromUnsafe(_this__u8e3s4, urlString) {
    init_properties_URLParser_kt_jyldy();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.indexOfFirst' call
      var inductionVariable = 0;
      var last = charSequenceLength(urlString) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          // Inline function 'io.ktor.http.takeFromUnsafe.<anonymous>' call
          var tmp0__anonymous__q1qw7t = charSequenceGet(urlString, index);
          tmp$ret$0 = !isWhitespace(tmp0__anonymous__q1qw7t);
          if (tmp$ret$0) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = -1;
    }
    var startIndex = tmp$ret$1;
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.text.indexOfLast' call
      var inductionVariable_0 = charSequenceLength(urlString) - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          var tmp$ret$2;
          // Inline function 'io.ktor.http.takeFromUnsafe.<anonymous>' call
          var tmp1__anonymous__uwfjfc = charSequenceGet(urlString, index_0);
          tmp$ret$2 = !isWhitespace(tmp1__anonymous__uwfjfc);
          if (tmp$ret$2) {
            tmp$ret$3 = index_0;
            break $l$block_0;
          }
        }
         while (0 <= inductionVariable_0);
      tmp$ret$3 = -1;
    }
    var endIndex = tmp$ret$3 + 1 | 0;
    var schemeLength = findScheme(urlString, startIndex, endIndex);
    if (schemeLength > 0) {
      var tmp$ret$5;
      // Inline function 'kotlin.text.substring' call
      var tmp2_substring = startIndex;
      var tmp3_substring = startIndex + schemeLength | 0;
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = urlString;
      tmp$ret$5 = tmp$ret$4.substring(tmp2_substring, tmp3_substring);
      var scheme = tmp$ret$5;
      _this__u8e3s4.h1q_1 = Companion_getInstance_8().r1r(scheme);
      startIndex = startIndex + (schemeLength + 1 | 0) | 0;
    }
    var slashCount = count(urlString, startIndex, endIndex, _Char___init__impl__6a9atx(47));
    startIndex = startIndex + slashCount | 0;
    if (_this__u8e3s4.h1q_1.r1q_1 === 'file') {
      parseFile(_this__u8e3s4, urlString, startIndex, endIndex, slashCount);
      return _this__u8e3s4;
    }
    if (_this__u8e3s4.h1q_1.r1q_1 === 'mailto') {
      // Inline function 'kotlin.require' call
      var tmp4_require = slashCount === 0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp4_require) {
        var tmp$ret$6;
        // Inline function 'kotlin.require.<anonymous>' call
        tmp$ret$6 = 'Failed requirement.';
        var message = tmp$ret$6;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      parseMailto(_this__u8e3s4, urlString, startIndex, endIndex);
      return _this__u8e3s4;
    }
    if (slashCount >= 2) {
      loop: while (true) {
        var tmp$ret$8;
        // Inline function 'kotlin.takeIf' call
        var tmp = toCharArray('@/\\?#');
        var tmp_0 = startIndex;
        var tmp5_takeIf = indexOfAny$default(urlString, tmp, tmp_0, false, 4, null);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_1;
        var tmp$ret$7;
        // Inline function 'io.ktor.http.takeFromUnsafe.<anonymous>' call
        tmp$ret$7 = tmp5_takeIf > 0;
        if (tmp$ret$7) {
          tmp_1 = tmp5_takeIf;
        } else {
          tmp_1 = null;
        }
        tmp$ret$8 = tmp_1;
        var tmp0_elvis_lhs = tmp$ret$8;
        var delimiter = tmp0_elvis_lhs == null ? endIndex : tmp0_elvis_lhs;
        if (delimiter < endIndex ? equals(new Char(charSequenceGet(urlString, delimiter)), new Char(_Char___init__impl__6a9atx(64))) : false) {
          var passwordIndex = indexOfColonInHostPort(urlString, startIndex, delimiter);
          if (!(passwordIndex === -1)) {
            var tmp_2 = _this__u8e3s4;
            var tmp$ret$10;
            // Inline function 'kotlin.text.substring' call
            var tmp6_substring = startIndex;
            var tmp$ret$9;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$9 = urlString;
            tmp$ret$10 = tmp$ret$9.substring(tmp6_substring, passwordIndex);
            tmp_2.l1q_1 = tmp$ret$10;
            var tmp_3 = _this__u8e3s4;
            var tmp$ret$12;
            // Inline function 'kotlin.text.substring' call
            var tmp7_substring = passwordIndex + 1 | 0;
            var tmp$ret$11;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$11 = urlString;
            tmp$ret$12 = tmp$ret$11.substring(tmp7_substring, delimiter);
            tmp_3.m1q_1 = tmp$ret$12;
          } else {
            var tmp_4 = _this__u8e3s4;
            var tmp$ret$14;
            // Inline function 'kotlin.text.substring' call
            var tmp8_substring = startIndex;
            var tmp$ret$13;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$13 = urlString;
            tmp$ret$14 = tmp$ret$13.substring(tmp8_substring, delimiter);
            tmp_4.l1q_1 = tmp$ret$14;
          }
          startIndex = delimiter + 1 | 0;
        } else {
          fillHost(_this__u8e3s4, urlString, startIndex, delimiter);
          startIndex = delimiter;
          break loop;
        }
      }
    }
    if (startIndex >= endIndex) {
      _this__u8e3s4.o1q_1 = equals(new Char(charSequenceGet(urlString, endIndex - 1 | 0)), new Char(_Char___init__impl__6a9atx(47))) ? get_ROOT_PATH() : emptyList();
      return _this__u8e3s4;
    }
    var tmp_5 = _this__u8e3s4;
    var tmp_6;
    if (slashCount === 0) {
      tmp_6 = dropLast(_this__u8e3s4.o1q_1, 1);
    } else {
      tmp_6 = emptyList();
    }
    tmp_5.o1q_1 = tmp_6;
    var tmp$ret$16;
    // Inline function 'kotlin.takeIf' call
    var tmp_7 = toCharArray('?#');
    var tmp_8 = startIndex;
    var tmp9_takeIf = indexOfAny$default(urlString, tmp_7, tmp_8, false, 4, null);
    // Inline function 'kotlin.contracts.contract' call
    var tmp_9;
    var tmp$ret$15;
    // Inline function 'io.ktor.http.takeFromUnsafe.<anonymous>' call
    tmp$ret$15 = tmp9_takeIf > 0;
    if (tmp$ret$15) {
      tmp_9 = tmp9_takeIf;
    } else {
      tmp_9 = null;
    }
    tmp$ret$16 = tmp_9;
    var tmp1_elvis_lhs = tmp$ret$16;
    var pathEnd = tmp1_elvis_lhs == null ? endIndex : tmp1_elvis_lhs;
    if (pathEnd > startIndex) {
      var tmp$ret$18;
      // Inline function 'kotlin.text.substring' call
      var tmp10_substring = startIndex;
      var tmp$ret$17;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$17 = urlString;
      tmp$ret$18 = tmp$ret$17.substring(tmp10_substring, pathEnd);
      var rawPath = tmp$ret$18;
      var tmp_10;
      var tmp_11;
      if (_this__u8e3s4.o1q_1.c() === 1) {
        var tmp$ret$19;
        // Inline function 'kotlin.text.isEmpty' call
        var tmp11_isEmpty = first_0(_this__u8e3s4.o1q_1);
        tmp$ret$19 = charSequenceLength(tmp11_isEmpty) === 0;
        tmp_11 = tmp$ret$19;
      } else {
        tmp_11 = false;
      }
      if (tmp_11) {
        tmp_10 = emptyList();
      } else {
        tmp_10 = _this__u8e3s4.o1q_1;
      }
      var basePath = tmp_10;
      var tmp_12;
      if (rawPath === '/') {
        tmp_12 = get_ROOT_PATH();
      } else {
        var tmp_13 = charArrayOf([_Char___init__impl__6a9atx(47)]);
        tmp_12 = split$default(rawPath, tmp_13, false, 0, 6, null);
      }
      var rawChunks = tmp_12;
      var tmp2_subject = slashCount;
      var relativePath = plus_0(tmp2_subject === 1 ? get_ROOT_PATH() : emptyList(), rawChunks);
      _this__u8e3s4.o1q_1 = plus_0(basePath, relativePath);
      startIndex = pathEnd;
    }
    if (startIndex < endIndex ? equals(new Char(charSequenceGet(urlString, startIndex)), new Char(_Char___init__impl__6a9atx(63))) : false) {
      startIndex = parseQuery(_this__u8e3s4, urlString, startIndex, endIndex);
    }
    parseFragment(_this__u8e3s4, urlString, startIndex, endIndex);
    return _this__u8e3s4;
  }
  function URLParserException(urlString, cause) {
    IllegalStateException_init_$Init$('Fail to parse url: ' + urlString, cause, this);
    captureStack(this, URLParserException);
  }
  function findScheme(urlString, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    var current = startIndex;
    var incorrectSchemePosition = -1;
    var firstChar = charSequenceGet(urlString, current);
    if (!(_Char___init__impl__6a9atx(97) <= firstChar ? firstChar <= _Char___init__impl__6a9atx(122) : false) ? !(_Char___init__impl__6a9atx(65) <= firstChar ? firstChar <= _Char___init__impl__6a9atx(90) : false) : false) {
      incorrectSchemePosition = current;
    }
    while (current < endIndex) {
      var char = charSequenceGet(urlString, current);
      if (equals(new Char(char), new Char(_Char___init__impl__6a9atx(58)))) {
        if (!(incorrectSchemePosition === -1)) {
          throw IllegalArgumentException_init_$Create$('Illegal character in scheme at position ' + incorrectSchemePosition);
        }
        return current - startIndex | 0;
      }
      if ((equals(new Char(char), new Char(_Char___init__impl__6a9atx(47))) ? true : equals(new Char(char), new Char(_Char___init__impl__6a9atx(63)))) ? true : equals(new Char(char), new Char(_Char___init__impl__6a9atx(35))))
        return -1;
      if ((((((incorrectSchemePosition === -1 ? !(_Char___init__impl__6a9atx(97) <= char ? char <= _Char___init__impl__6a9atx(122) : false) : false) ? !(_Char___init__impl__6a9atx(65) <= char ? char <= _Char___init__impl__6a9atx(90) : false) : false) ? !(_Char___init__impl__6a9atx(48) <= char ? char <= _Char___init__impl__6a9atx(57) : false) : false) ? !equals(new Char(char), new Char(_Char___init__impl__6a9atx(46))) : false) ? !equals(new Char(char), new Char(_Char___init__impl__6a9atx(43))) : false) ? !equals(new Char(char), new Char(_Char___init__impl__6a9atx(45))) : false) {
        incorrectSchemePosition = current;
      }
      current = current + 1 | 0;
    }
    return -1;
  }
  function count(urlString, startIndex, endIndex, char) {
    init_properties_URLParser_kt_jyldy();
    var result = 0;
    $l$loop: while ((startIndex + result | 0) < endIndex) {
      if (!equals(new Char(charSequenceGet(urlString, startIndex + result | 0)), new Char(char)))
        break $l$loop;
      var tmp0 = result;
      result = tmp0 + 1 | 0;
    }
    return result;
  }
  function parseFile(_this__u8e3s4, urlString, startIndex, endIndex, slashCount) {
    init_properties_URLParser_kt_jyldy();
    var tmp0_subject = slashCount;
    switch (tmp0_subject) {
      case 2:
        var tmp = _Char___init__impl__6a9atx(47);
        var nextSlash = indexOf$default(urlString, tmp, startIndex, false, 4, null);
        if (nextSlash === -1 ? true : nextSlash === endIndex) {
          var tmp_0 = _this__u8e3s4;
          var tmp$ret$1;
          // Inline function 'kotlin.text.substring' call
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = urlString;
          tmp$ret$1 = tmp$ret$0.substring(startIndex, endIndex);
          tmp_0.i1q_1 = tmp$ret$1;
          return Unit_getInstance();
        }

        var tmp_1 = _this__u8e3s4;
        var tmp$ret$3;
        // Inline function 'kotlin.text.substring' call
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = urlString;
        tmp$ret$3 = tmp$ret$2.substring(startIndex, nextSlash);

        tmp_1.i1q_1 = tmp$ret$3;
        var tmp$ret$5;
        // Inline function 'kotlin.text.substring' call
        var tmp$ret$4;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = urlString;
        tmp$ret$5 = tmp$ret$4.substring(nextSlash, endIndex);

        set_encodedPath(_this__u8e3s4, tmp$ret$5);
        ;
        break;
      case 3:
        _this__u8e3s4.i1q_1 = '';
        var tmp$ret$7;
        // Inline function 'kotlin.text.substring' call
        var tmp$ret$6;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$6 = urlString;
        tmp$ret$7 = tmp$ret$6.substring(startIndex, endIndex);

        set_encodedPath(_this__u8e3s4, '/' + tmp$ret$7);
        ;
        break;
      default:
        throw IllegalArgumentException_init_$Create$('Invalid file url: ' + urlString);
    }
  }
  function parseMailto(_this__u8e3s4, urlString, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    var delimiter = indexOf$default_0(urlString, '@', startIndex, false, 4, null);
    if (delimiter === -1) {
      throw IllegalArgumentException_init_$Create$('Invalid mailto url: ' + urlString + ", it should contain '@'.");
    }
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = urlString;
    tmp$ret$1 = tmp$ret$0.substring(startIndex, delimiter);
    var tmp = tmp$ret$1;
    _this__u8e3s4.k1r(decodeURLPart$default(tmp, 0, 0, null, 7, null));
    var tmp_0 = _this__u8e3s4;
    var tmp$ret$3;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = delimiter + 1 | 0;
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = urlString;
    tmp$ret$3 = tmp$ret$2.substring(tmp0_substring, endIndex);
    tmp_0.i1q_1 = tmp$ret$3;
  }
  function indexOfColonInHostPort(_this__u8e3s4, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    var skip = false;
    var inductionVariable = startIndex;
    if (inductionVariable < endIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_subject = charSequenceGet(_this__u8e3s4, index);
        if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(91))))
          skip = true;
        else if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(93))))
          skip = false;
        else if (equals(new Char(tmp1_subject), new Char(_Char___init__impl__6a9atx(58))))
          if (!skip)
            return index;
      }
       while (inductionVariable < endIndex);
    return -1;
  }
  function fillHost(_this__u8e3s4, urlString, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    var tmp$ret$1;
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = indexOfColonInHostPort(urlString, startIndex, endIndex);
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'io.ktor.http.fillHost.<anonymous>' call
    tmp$ret$0 = tmp0_takeIf > 0;
    if (tmp$ret$0) {
      tmp = tmp0_takeIf;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_elvis_lhs = tmp$ret$1;
    var colonIndex = tmp0_elvis_lhs == null ? endIndex : tmp0_elvis_lhs;
    var tmp_0 = _this__u8e3s4;
    var tmp$ret$3;
    // Inline function 'kotlin.text.substring' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = urlString;
    tmp$ret$3 = tmp$ret$2.substring(startIndex, colonIndex);
    tmp_0.i1q_1 = tmp$ret$3;
    if ((colonIndex + 1 | 0) < endIndex) {
      var tmp_1 = _this__u8e3s4;
      var tmp$ret$5;
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = colonIndex + 1 | 0;
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = urlString;
      tmp$ret$5 = tmp$ret$4.substring(tmp1_substring, endIndex);
      tmp_1.j1q_1 = toInt(tmp$ret$5);
    } else {
      _this__u8e3s4.j1q_1 = get_DEFAULT_PORT();
    }
  }
  function parseQuery(_this__u8e3s4, urlString, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    if ((startIndex + 1 | 0) === endIndex) {
      _this__u8e3s4.k1q_1 = true;
      return endIndex;
    }
    var tmp$ret$1;
    // Inline function 'kotlin.takeIf' call
    var tmp = _Char___init__impl__6a9atx(35);
    var tmp_0 = startIndex + 1 | 0;
    var tmp0_takeIf = indexOf$default(urlString, tmp, tmp_0, false, 4, null);
    // Inline function 'kotlin.contracts.contract' call
    var tmp_1;
    var tmp$ret$0;
    // Inline function 'io.ktor.http.parseQuery.<anonymous>' call
    tmp$ret$0 = tmp0_takeIf > 0;
    if (tmp$ret$0) {
      tmp_1 = tmp0_takeIf;
    } else {
      tmp_1 = null;
    }
    tmp$ret$1 = tmp_1;
    var tmp0_elvis_lhs = tmp$ret$1;
    var fragmentStart = tmp0_elvis_lhs == null ? endIndex : tmp0_elvis_lhs;
    var tmp$ret$3;
    // Inline function 'kotlin.text.substring' call
    var tmp1_substring = startIndex + 1 | 0;
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = urlString;
    tmp$ret$3 = tmp$ret$2.substring(tmp1_substring, fragmentStart);
    var tmp_2 = tmp$ret$3;
    var rawParameters = parseQueryString$default(tmp_2, 0, 0, false, 6, null);
    rawParameters.f1d(parseQuery$lambda(_this__u8e3s4));
    return fragmentStart;
  }
  function parseFragment(_this__u8e3s4, urlString, startIndex, endIndex) {
    init_properties_URLParser_kt_jyldy();
    if (startIndex < endIndex ? equals(new Char(charSequenceGet(urlString, startIndex)), new Char(_Char___init__impl__6a9atx(35))) : false) {
      var tmp = _this__u8e3s4;
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = startIndex + 1 | 0;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = urlString;
      tmp$ret$1 = tmp$ret$0.substring(tmp0_substring, endIndex);
      tmp.n1q_1 = tmp$ret$1;
    }
  }
  function parseQuery$lambda($this_parseQuery) {
    return function (key, values) {
      $this_parseQuery.p1q_1.j1d(key, values);
      return Unit_getInstance();
    };
  }
  var properties_initialized_URLParser_kt_hd1g6a;
  function init_properties_URLParser_kt_jyldy() {
    if (properties_initialized_URLParser_kt_hd1g6a) {
    } else {
      properties_initialized_URLParser_kt_hd1g6a = true;
      ROOT_PATH = listOf_0('');
    }
  }
  function isWebsocket(_this__u8e3s4) {
    return _this__u8e3s4.r1q_1 === 'ws' ? true : _this__u8e3s4.r1q_1 === 'wss';
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.b1q_1 = new URLProtocol('http', 80);
    this.c1q_1 = new URLProtocol('https', 443);
    this.d1q_1 = new URLProtocol('ws', 80);
    this.e1q_1 = new URLProtocol('wss', 443);
    this.f1q_1 = new URLProtocol('socks', 1080);
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.associateBy' call
    var tmp0_associateBy = listOf([this.b1q_1, this.c1q_1, this.d1q_1, this.e1q_1, this.f1q_1]);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp0_associateBy, 10)), 16);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = LinkedHashMap_init_$Create$(capacity);
    var tmp0_iterator = tmp0_associateBy.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      var tmp$ret$0;
      // Inline function 'io.ktor.http.Companion.byName.<anonymous>' call
      tmp$ret$0 = element.r1q_1;
      tmp0_associateByTo.u2(tmp$ret$0, element);
    }
    tmp$ret$1 = tmp0_associateByTo;
    tmp$ret$2 = tmp$ret$1;
    tmp.g1q_1 = tmp$ret$2;
  }
  Companion_7.prototype.r1r = function (name) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = toLowerCasePreservingASCIIRules(name);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.http.Companion.createOrDefault.<anonymous>' call
    var tmp0_elvis_lhs = Companion_getInstance_8().g1q_1.v1(tmp0_let);
    tmp$ret$0 = tmp0_elvis_lhs == null ? new URLProtocol(tmp0_let, get_DEFAULT_PORT()) : tmp0_elvis_lhs;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function URLProtocol(name, defaultPort) {
    Companion_getInstance_8();
    this.r1q_1 = name;
    this.s1q_1 = defaultPort;
    // Inline function 'kotlin.require' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.all' call
      var tmp0_all = this.r1q_1;
      var indexedObject = tmp0_all;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = charSequenceGet(indexedObject, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'io.ktor.http.URLProtocol.<anonymous>' call
        tmp$ret$0 = isLowerCase(element);
        if (!tmp$ret$0) {
          tmp$ret$1 = false;
          break $l$block;
        }
      }
      tmp$ret$1 = true;
    }
    var tmp1_require = tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$2;
      // Inline function 'io.ktor.http.URLProtocol.<anonymous>' call
      tmp$ret$2 = 'All characters should be lower case';
      var message = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  URLProtocol.prototype.toString = function () {
    return 'URLProtocol(name=' + this.r1q_1 + ', defaultPort=' + this.s1q_1 + ')';
  };
  URLProtocol.prototype.hashCode = function () {
    var result = getStringHashCode(this.r1q_1);
    result = imul(result, 31) + this.s1q_1 | 0;
    return result;
  };
  URLProtocol.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof URLProtocol))
      return false;
    var tmp0_other_with_cast = other instanceof URLProtocol ? other : THROW_CCE();
    if (!(this.r1q_1 === tmp0_other_with_cast.r1q_1))
      return false;
    if (!(this.s1q_1 === tmp0_other_with_cast.s1q_1))
      return false;
    return true;
  };
  function isSecure(_this__u8e3s4) {
    return _this__u8e3s4.r1q_1 === 'https' ? true : _this__u8e3s4.r1q_1 === 'wss';
  }
  function takeFrom_0(_this__u8e3s4, url) {
    _this__u8e3s4.h1q_1 = url.h1q_1;
    _this__u8e3s4.i1q_1 = url.i1q_1;
    _this__u8e3s4.j1q_1 = url.j1q_1;
    _this__u8e3s4.o1q_1 = url.o1q_1;
    _this__u8e3s4.l1q_1 = url.l1q_1;
    _this__u8e3s4.m1q_1 = url.m1q_1;
    _this__u8e3s4.p1r(url.p1q_1);
    _this__u8e3s4.n1q_1 = url.n1q_1;
    _this__u8e3s4.k1q_1 = url.k1q_1;
    return _this__u8e3s4;
  }
  function Url(urlString) {
    return URLBuilder_0(urlString).i11();
  }
  function appendUrlFullPath(_this__u8e3s4, encodedPath, encodedQueryParameters, trailingQuery) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(encodedPath);
    if (tmp$ret$0) {
      tmp = !startsWith$default_0(encodedPath, '/', false, 2, null);
    } else {
      tmp = false;
    }
    if (tmp) {
      _this__u8e3s4.b5(_Char___init__impl__6a9atx(47));
    }
    _this__u8e3s4.b(encodedPath);
    if (!encodedQueryParameters.i() ? true : trailingQuery) {
      _this__u8e3s4.b('?');
    }
    var tmp$ret$8;
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0_flatMap = encodedQueryParameters.e1d();
    var tmp$ret$7;
    // Inline function 'kotlin.collections.flatMapTo' call
    var tmp0_flatMapTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp0_flatMap.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      var tmp$ret$6;
      // Inline function 'io.ktor.http.appendUrlFullPath.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.n();
      var key = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.o();
      var value = tmp$ret$2;
      var tmp_0;
      if (value.i()) {
        tmp_0 = listOf_0(to(key, null));
      } else {
        var tmp$ret$5;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$4;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(value, 10));
        var tmp0_iterator_0 = value.j();
        while (tmp0_iterator_0.k()) {
          var item = tmp0_iterator_0.l();
          var tmp$ret$3;
          // Inline function 'io.ktor.http.appendUrlFullPath.<anonymous>.<anonymous>' call
          tmp$ret$3 = to(key, item);
          tmp0_mapTo.a(tmp$ret$3);
        }
        tmp$ret$4 = tmp0_mapTo;
        tmp$ret$5 = tmp$ret$4;
        tmp_0 = tmp$ret$5;
      }
      tmp$ret$6 = tmp_0;
      var list = tmp$ret$6;
      addAll(tmp0_flatMapTo, list);
    }
    tmp$ret$7 = tmp0_flatMapTo;
    tmp$ret$8 = tmp$ret$7;
    var tmp_1 = tmp$ret$8;
    joinTo$default(tmp_1, _this__u8e3s4, '&', null, null, 0, null, appendUrlFullPath$lambda, 60, null);
  }
  function appendUserAndPassword(_this__u8e3s4, encodedUser, encodedPassword) {
    if (encodedUser == null) {
      return Unit_getInstance();
    }
    _this__u8e3s4.wc(encodedUser);
    if (!(encodedPassword == null)) {
      _this__u8e3s4.b5(_Char___init__impl__6a9atx(58));
      _this__u8e3s4.wc(encodedPassword);
    }
    _this__u8e3s4.wc('@');
  }
  function get_hostWithPort(_this__u8e3s4) {
    return _this__u8e3s4.u1q_1 + ':' + _this__u8e3s4.s1r();
  }
  function URLBuilder_0(urlString) {
    return takeFrom(URLBuilder_init_$Create$(null, null, 0, null, null, null, null, null, false, 511, null), urlString);
  }
  function appendUrlFullPath$lambda(it) {
    var key = it.q2_1;
    var tmp;
    if (it.r2_1 == null) {
      tmp = key;
    } else {
      var value = toString_0(it.r2_1);
      tmp = key + '=' + value;
    }
    return tmp;
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Url$encodedPath$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.w1q_1.i()) {
        return '';
      }
      var tmp_0 = _Char___init__impl__6a9atx(47);
      var tmp_1 = this$0.t1q_1.r1q_1.length + 3 | 0;
      var pathStartIndex = indexOf$default(this$0.c1r_1, tmp_0, tmp_1, false, 4, null);
      var tmp_2;
      if (pathStartIndex === -1) {
        return '';
      }
      var tmp$ret$0;
      // Inline function 'kotlin.charArrayOf' call
      tmp$ret$0 = charArrayOf([_Char___init__impl__6a9atx(63), _Char___init__impl__6a9atx(35)]);
      var tmp_3 = tmp$ret$0;
      var pathEndIndex = indexOfAny$default(this$0.c1r_1, tmp_3, pathStartIndex, false, 4, null);
      var tmp_4;
      if (pathEndIndex === -1) {
        var tmp$ret$2;
        // Inline function 'kotlin.text.substring' call
        var tmp0_substring = this$0.c1r_1;
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = tmp0_substring;
        tmp$ret$2 = tmp$ret$1.substring(pathStartIndex);
        return tmp$ret$2;
      }
      var tmp$ret$4;
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = this$0.c1r_1;
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = tmp1_substring;
      tmp$ret$4 = tmp$ret$3.substring(pathStartIndex, pathEndIndex);
      return tmp$ret$4;
    };
  }
  function Url$encodedQuery$delegate$lambda(this$0) {
    return function () {
      var tmp = _Char___init__impl__6a9atx(63);
      var queryStart = indexOf$default(this$0.c1r_1, tmp, 0, false, 6, null) + 1 | 0;
      var tmp_0;
      if (queryStart === 0) {
        return '';
      }
      var tmp_1 = _Char___init__impl__6a9atx(35);
      var queryEnd = indexOf$default(this$0.c1r_1, tmp_1, queryStart, false, 4, null);
      var tmp_2;
      if (queryEnd === -1) {
        var tmp$ret$1;
        // Inline function 'kotlin.text.substring' call
        var tmp0_substring = this$0.c1r_1;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_substring;
        tmp$ret$1 = tmp$ret$0.substring(queryStart);
        return tmp$ret$1;
      }
      var tmp$ret$3;
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = this$0.c1r_1;
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp1_substring;
      tmp$ret$3 = tmp$ret$2.substring(queryStart, queryEnd);
      return tmp$ret$3;
    };
  }
  function Url$encodedPathAndQuery$delegate$lambda(this$0) {
    return function () {
      var tmp = _Char___init__impl__6a9atx(47);
      var tmp_0 = this$0.t1q_1.r1q_1.length + 3 | 0;
      var pathStart = indexOf$default(this$0.c1r_1, tmp, tmp_0, false, 4, null);
      var tmp_1;
      if (pathStart === -1) {
        return '';
      }
      var tmp_2 = _Char___init__impl__6a9atx(35);
      var queryEnd = indexOf$default(this$0.c1r_1, tmp_2, pathStart, false, 4, null);
      var tmp_3;
      if (queryEnd === -1) {
        var tmp$ret$1;
        // Inline function 'kotlin.text.substring' call
        var tmp0_substring = this$0.c1r_1;
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_substring;
        tmp$ret$1 = tmp$ret$0.substring(pathStart);
        return tmp$ret$1;
      }
      var tmp$ret$3;
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = this$0.c1r_1;
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp1_substring;
      tmp$ret$3 = tmp$ret$2.substring(pathStart, queryEnd);
      return tmp$ret$3;
    };
  }
  function Url$encodedUser$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.z1q_1 == null) {
        return null;
      }
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'kotlin.text.isEmpty' call
      var tmp0_isEmpty = this$0.z1q_1;
      tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
      if (tmp$ret$0) {
        return '';
      }
      var usernameStart = this$0.t1q_1.r1q_1.length + 3 | 0;
      var tmp$ret$1;
      // Inline function 'kotlin.charArrayOf' call
      tmp$ret$1 = charArrayOf([_Char___init__impl__6a9atx(58), _Char___init__impl__6a9atx(64)]);
      var tmp_1 = tmp$ret$1;
      var usernameEnd = indexOfAny$default(this$0.c1r_1, tmp_1, usernameStart, false, 4, null);
      var tmp$ret$3;
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = this$0.c1r_1;
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = tmp1_substring;
      tmp$ret$3 = tmp$ret$2.substring(usernameStart, usernameEnd);
      return tmp$ret$3;
    };
  }
  function Url$encodedPassword$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.a1r_1 == null) {
        return null;
      }
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'kotlin.text.isEmpty' call
      var tmp0_isEmpty = this$0.a1r_1;
      tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
      if (tmp$ret$0) {
        return '';
      }
      var tmp_1 = _Char___init__impl__6a9atx(58);
      var tmp_2 = this$0.t1q_1.r1q_1.length + 3 | 0;
      var passwordStart = indexOf$default(this$0.c1r_1, tmp_1, tmp_2, false, 4, null) + 1 | 0;
      var tmp_3 = _Char___init__impl__6a9atx(64);
      var passwordEnd = indexOf$default(this$0.c1r_1, tmp_3, 0, false, 6, null);
      var tmp$ret$2;
      // Inline function 'kotlin.text.substring' call
      var tmp1_substring = this$0.c1r_1;
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = tmp1_substring;
      tmp$ret$2 = tmp$ret$1.substring(passwordStart, passwordEnd);
      return tmp$ret$2;
    };
  }
  function Url$encodedFragment$delegate$lambda(this$0) {
    return function () {
      var tmp = _Char___init__impl__6a9atx(35);
      var fragmentStart = indexOf$default(this$0.c1r_1, tmp, 0, false, 6, null) + 1 | 0;
      var tmp_0;
      if (fragmentStart === 0) {
        return '';
      }
      var tmp$ret$1;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = this$0.c1r_1;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_substring;
      tmp$ret$1 = tmp$ret$0.substring(fragmentStart);
      return tmp$ret$1;
    };
  }
  function Url_0(protocol, host, specifiedPort, pathSegments, parameters, fragment, user, password, trailingQuery, urlString) {
    Companion_getInstance_9();
    this.t1q_1 = protocol;
    this.u1q_1 = host;
    this.v1q_1 = specifiedPort;
    this.w1q_1 = pathSegments;
    this.x1q_1 = parameters;
    this.y1q_1 = fragment;
    this.z1q_1 = user;
    this.a1r_1 = password;
    this.b1r_1 = trailingQuery;
    this.c1r_1 = urlString;
    // Inline function 'kotlin.require' call
    var tmp;
    var containsArg = this.v1q_1;
    if (0 <= containsArg ? containsArg <= 65535 : false) {
      tmp = true;
    } else {
      tmp = this.v1q_1 === get_DEFAULT_PORT();
    }
    var tmp0_require = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.http.Url.<anonymous>' call
      tmp$ret$0 = 'port must be between 0 and 65535, or ' + get_DEFAULT_PORT() + ' if not set';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp_0 = this;
    tmp_0.d1r_1 = lazy_0(Url$encodedPath$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.e1r_1 = lazy_0(Url$encodedQuery$delegate$lambda(this));
    var tmp_2 = this;
    tmp_2.f1r_1 = lazy_0(Url$encodedPathAndQuery$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.g1r_1 = lazy_0(Url$encodedUser$delegate$lambda(this));
    var tmp_4 = this;
    tmp_4.h1r_1 = lazy_0(Url$encodedPassword$delegate$lambda(this));
    var tmp_5 = this;
    tmp_5.i1r_1 = lazy_0(Url$encodedFragment$delegate$lambda(this));
  }
  Url_0.prototype.s1r = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.takeUnless' call
    var tmp0_takeUnless = this.v1q_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'io.ktor.http.Url.<get-port>.<anonymous>' call
    tmp$ret$0 = tmp0_takeUnless === get_DEFAULT_PORT();
    if (!tmp$ret$0) {
      tmp = tmp0_takeUnless;
    } else {
      tmp = null;
    }
    tmp$ret$1 = tmp;
    var tmp0_elvis_lhs = tmp$ret$1;
    return tmp0_elvis_lhs == null ? this.t1q_1.s1q_1 : tmp0_elvis_lhs;
  };
  Url_0.prototype.t1r = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = encodedUser$factory();
    tmp$ret$0 = this.g1r_1.o();
    return tmp$ret$0;
  };
  Url_0.prototype.u1r = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = encodedPassword$factory();
    tmp$ret$0 = this.h1r_1.o();
    return tmp$ret$0;
  };
  Url_0.prototype.toString = function () {
    return this.c1r_1;
  };
  Url_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof Url_0)
      other;
    else
      THROW_CCE();
    if (!(this.c1r_1 === other.c1r_1))
      return false;
    return true;
  };
  Url_0.prototype.hashCode = function () {
    return getStringHashCode(this.c1r_1);
  };
  function get_authority_0(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.<get-authority>.<anonymous>' call
    tmp0_apply.wc(get_encodedUserAndPassword_0(_this__u8e3s4));
    if (_this__u8e3s4.v1q_1 === get_DEFAULT_PORT() ? true : _this__u8e3s4.v1q_1 === _this__u8e3s4.t1q_1.s1q_1) {
      tmp0_apply.wc(_this__u8e3s4.u1q_1);
    } else {
      tmp0_apply.wc(get_hostWithPort(_this__u8e3s4));
    }
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function get_encodedUserAndPassword_0(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.<get-encodedUserAndPassword>.<anonymous>' call
    appendUserAndPassword(tmp0_apply, _this__u8e3s4.t1r(), _this__u8e3s4.u1r());
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function encodedUser$factory() {
    return getPropertyCallableRef('encodedUser', 1, KProperty1, function (receiver) {
      return receiver.t1r();
    }, null);
  }
  function encodedPassword$factory() {
    return getPropertyCallableRef('encodedPassword', 1, KProperty1, function (receiver) {
      return receiver.u1r();
    }, null);
  }
  function UrlDecodedParametersBuilder(encodedParametersBuilder) {
    this.v1r_1 = encodedParametersBuilder;
    this.w1r_1 = this.v1r_1.b1d();
  }
  UrlDecodedParametersBuilder.prototype.i11 = function () {
    return decodeParameters(this.v1r_1);
  };
  UrlDecodedParametersBuilder.prototype.b1d = function () {
    return this.w1r_1;
  };
  UrlDecodedParametersBuilder.prototype.c1d = function (name) {
    var tmp0_safe_receiver = this.v1r_1.c1d(encodeURLParameter$default(name, false, 1, null));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_safe_receiver, 10));
      var tmp0_iterator = tmp0_safe_receiver.j();
      while (tmp0_iterator.k()) {
        var item = tmp0_iterator.l();
        var tmp$ret$0;
        // Inline function 'io.ktor.http.UrlDecodedParametersBuilder.getAll.<anonymous>' call
        tmp$ret$0 = decodeURLQueryComponent$default(item, 0, 0, true, null, 11, null);
        tmp0_mapTo.a(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    }
    return tmp;
  };
  UrlDecodedParametersBuilder.prototype.d1d = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = this.v1r_1.d1d();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.j();
    while (tmp0_iterator.k()) {
      var item = tmp0_iterator.l();
      var tmp$ret$0;
      // Inline function 'io.ktor.http.UrlDecodedParametersBuilder.names.<anonymous>' call
      tmp$ret$0 = decodeURLQueryComponent$default(item, 0, 0, false, null, 15, null);
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return toSet(tmp$ret$2);
  };
  UrlDecodedParametersBuilder.prototype.i = function () {
    return this.v1r_1.i();
  };
  UrlDecodedParametersBuilder.prototype.e1d = function () {
    return decodeParameters(this.v1r_1).e1d();
  };
  UrlDecodedParametersBuilder.prototype.m1d = function (name, value) {
    return this.v1r_1.m1d(encodeURLParameter$default(name, false, 1, null), encodeURLParameterValue(value));
  };
  UrlDecodedParametersBuilder.prototype.j1d = function (name, values) {
    var tmp = encodeURLParameter$default(name, false, 1, null);
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
    var tmp0_iterator = values.j();
    while (tmp0_iterator.k()) {
      var item = tmp0_iterator.l();
      var tmp$ret$0;
      // Inline function 'io.ktor.http.UrlDecodedParametersBuilder.appendAll.<anonymous>' call
      tmp$ret$0 = encodeURLParameterValue(item);
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return this.v1r_1.j1d(tmp, tmp$ret$2);
  };
  UrlDecodedParametersBuilder.prototype.a8 = function () {
    return this.v1r_1.a8();
  };
  function encodeParameters(parameters) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ParametersBuilder$default(0, 1, null);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.encodeParameters.<anonymous>' call
    appendAllEncoded(tmp0_apply, parameters);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function decodeParameters(parameters) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ParametersBuilder$default(0, 1, null);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.http.decodeParameters.<anonymous>' call
    appendAllDecoded(tmp0_apply, parameters);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.i11();
  }
  function appendAllEncoded(_this__u8e3s4, parameters) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = parameters.d1d();
    var tmp0_iterator = tmp0_forEach.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'io.ktor.http.appendAllEncoded.<anonymous>' call
      var tmp0_elvis_lhs = parameters.c1d(element);
      var values = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
      var tmp = encodeURLParameter$default(element, false, 1, null);
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
      var tmp0_iterator_0 = values.j();
      while (tmp0_iterator_0.k()) {
        var item = tmp0_iterator_0.l();
        var tmp$ret$0;
        // Inline function 'io.ktor.http.appendAllEncoded.<anonymous>.<anonymous>' call
        tmp$ret$0 = encodeURLParameterValue(item);
        tmp0_mapTo.a(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      _this__u8e3s4.j1d(tmp, tmp$ret$2);
    }
  }
  function appendAllDecoded(_this__u8e3s4, parameters) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = parameters.d1d();
    var tmp0_iterator = tmp0_forEach.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'io.ktor.http.appendAllDecoded.<anonymous>' call
      var tmp0_elvis_lhs = parameters.c1d(element);
      var values = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
      var tmp = decodeURLQueryComponent$default(element, 0, 0, false, null, 15, null);
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
      var tmp0_iterator_0 = values.j();
      while (tmp0_iterator_0.k()) {
        var item = tmp0_iterator_0.l();
        var tmp$ret$0;
        // Inline function 'io.ktor.http.appendAllDecoded.<anonymous>.<anonymous>' call
        tmp$ret$0 = decodeURLQueryComponent$default(item, 0, 0, true, null, 11, null);
        tmp0_mapTo.a(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      _this__u8e3s4.j1d(tmp, tmp$ret$2);
    }
  }
  function ByteArrayContent_init_$Init$(bytes, contentType, status, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      contentType = null;
    if (!(($mask0 & 4) === 0))
      status = null;
    ByteArrayContent.call($this, bytes, contentType, status);
    return $this;
  }
  function ByteArrayContent_init_$Create$(bytes, contentType, status, $mask0, $marker) {
    return ByteArrayContent_init_$Init$(bytes, contentType, status, $mask0, $marker, Object.create(ByteArrayContent.prototype));
  }
  function ByteArrayContent(bytes, contentType, status) {
    ByteArrayContent_0.call(this);
    this.y1r_1 = bytes;
    this.z1r_1 = contentType;
    this.a1s_1 = status;
  }
  ByteArrayContent.prototype.b1s = function () {
    return this.z1r_1;
  };
  ByteArrayContent.prototype.c1s = function () {
    return toLong_0(this.y1r_1.length);
  };
  ByteArrayContent.prototype.d1s = function () {
    return this.y1r_1;
  };
  function NoContent() {
    OutgoingContent.call(this);
  }
  function ReadChannelContent() {
    OutgoingContent.call(this);
  }
  function WriteChannelContent() {
  }
  function ByteArrayContent_0() {
    OutgoingContent.call(this);
  }
  function ProtocolUpgrade() {
  }
  function OutgoingContent() {
    this.e1s_1 = null;
  }
  OutgoingContent.prototype.b1s = function () {
    return null;
  };
  OutgoingContent.prototype.c1s = function () {
    return null;
  };
  OutgoingContent.prototype.c1n = function () {
    return Companion_getInstance_2().w1i_1;
  };
  function TextContent_init_$Init$(text, contentType, status, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      status = null;
    TextContent.call($this, text, contentType, status);
    return $this;
  }
  function TextContent_init_$Create$(text, contentType, status, $mask0, $marker) {
    return TextContent_init_$Init$(text, contentType, status, $mask0, $marker, Object.create(TextContent.prototype));
  }
  function TextContent(text, contentType, status) {
    ByteArrayContent_0.call(this);
    this.l1s_1 = text;
    this.m1s_1 = contentType;
    this.n1s_1 = status;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.toByteArray' call
      var tmp0_toByteArray = this.l1s_1;
      var tmp0_elvis_lhs = charset(this.m1s_1);
      var tmp1_toByteArray = tmp0_elvis_lhs == null ? Charsets_getInstance().d18_1 : tmp0_elvis_lhs;
      if (tmp1_toByteArray.equals(Charsets_getInstance().d18_1)) {
        tmp$ret$0 = encodeToByteArray(tmp0_toByteArray);
        break $l$block;
      }
      tmp$ret$0 = encodeToByteArray_0(tmp1_toByteArray.h18(), tmp0_toByteArray, 0, tmp0_toByteArray.length);
    }
    tmp.o1s_1 = tmp$ret$0;
  }
  TextContent.prototype.b1s = function () {
    return this.m1s_1;
  };
  TextContent.prototype.c1s = function () {
    return toLong_0(this.o1s_1.length);
  };
  TextContent.prototype.d1s = function () {
    return this.o1s_1;
  };
  TextContent.prototype.toString = function () {
    return 'TextContent[' + this.m1s_1 + '] "' + take(this.l1s_1, 30) + '"';
  };
  function get_origin(_this__u8e3s4) {
    var tmp;
    if (PlatformUtils_getInstance().u1g_1) {
      var tmp_0;
      if (!(window === undefined)) {
        tmp_0 = window.location.origin;
      } else {
        var tmp_1 = self.location.origin;
        tmp_0 = (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE();
      }
      tmp = tmp_0;
    } else {
      tmp = 'http://localhost';
    }
    return tmp;
  }
  //region block: post-declaration
  EmptyHeaders.prototype.h1c = get;
  EmptyHeaders.prototype.f1d = forEach;
  EmptyParameters.prototype.f1d = forEach;
  //endregion
  //region block: init
  DEFAULT_PORT = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ByteArrayContent_init_$Create$;
  _.$_$.b = TextContent_init_$Create$;
  _.$_$.c = HeadersBuilder_init_$Create$;
  _.$_$.d = URLBuilder_init_$Create$;
  _.$_$.e = Application_getInstance;
  _.$_$.f = Text_getInstance;
  _.$_$.g = Companion_getInstance_2;
  _.$_$.h = HttpHeaders_getInstance;
  _.$_$.i = Companion_getInstance_3;
  _.$_$.j = Companion_getInstance_4;
  _.$_$.k = Companion_getInstance_5;
  _.$_$.l = ByteArrayContent_0;
  _.$_$.m = NoContent;
  _.$_$.n = ProtocolUpgrade;
  _.$_$.o = ReadChannelContent;
  _.$_$.p = WriteChannelContent;
  _.$_$.q = OutgoingContent;
  _.$_$.r = HttpStatusCode;
  _.$_$.s = UnsafeHeaderException;
  _.$_$.t = get_authority;
  _.$_$.u = get_authority_0;
  _.$_$.v = charset_0;
  _.$_$.w = charset;
  _.$_$.x = contentLength;
  _.$_$.y = contentType;
  _.$_$.z = contentType_0;
  _.$_$.a1 = contentType_1;
  _.$_$.b1 = isSecure;
  _.$_$.c1 = isWebsocket;
  _.$_$.d1 = parseAndSortHeader;
  _.$_$.e1 = takeFrom_0;
  _.$_$.f1 = takeFrom;
  _.$_$.g1 = withCharsetIfNeeded;
  _.$_$.h1 = withCharset;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-http-js-ir.js.map
