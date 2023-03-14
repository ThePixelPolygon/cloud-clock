(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@js-joda/core', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@js-joda/core'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'));
  else {
    if (typeof this['@js-joda/core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'. Its dependency '@js-joda/core' was not found. Please, check whether '@js-joda/core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime-js-ir'.");
    }
    root['Kotlin-DateTime-library-kotlinx-datetime-js-ir'] = factory(typeof this['Kotlin-DateTime-library-kotlinx-datetime-js-ir'] === 'undefined' ? {} : this['Kotlin-DateTime-library-kotlinx-datetime-js-ir'], this['@js-joda/core'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir']);
  }
}(this, function (_, $module$_js_joda_core_gcv2k, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var Instant = $module$_js_joda_core_gcv2k.Instant;
  var Clock = $module$_js_joda_core_gcv2k.Clock;
  var OffsetDateTime = $module$_js_joda_core_gcv2k.OffsetDateTime;
  var objectMeta = kotlin_kotlin.$_$.c9;
  var setMetadataFor = kotlin_kotlin.$_$.d9;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.u1;
  var captureStack = kotlin_kotlin.$_$.u7;
  var IllegalArgumentException = kotlin_kotlin.$_$.eb;
  var classMeta = kotlin_kotlin.$_$.a8;
  var Long = kotlin_kotlin.$_$.gb;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var THROW_CCE = kotlin_kotlin.$_$.kb;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var indexOf$default = kotlin_kotlin.$_$.o;
  var charSequenceLength = kotlin_kotlin.$_$.y7;
  var charSequenceGet = kotlin_kotlin.$_$.x7;
  var Char = kotlin_kotlin.$_$.xa;
  var equals = kotlin_kotlin.$_$.c8;
  var Unit_getInstance = kotlin_kotlin.$_$.b4;
  var numberToInt = kotlin_kotlin.$_$.a9;
  var Comparable = kotlin_kotlin.$_$.ya;
  //endregion
  //region block: pre-declaration
  setMetadataFor(System, 'System', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DateTimeFormatException, 'DateTimeFormatException', classMeta, IllegalArgumentException, undefined, undefined, undefined, []);
  setMetadataFor(InstantIso8601Serializer, 'InstantIso8601Serializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Instant_0, 'Instant', classMeta, undefined, [Comparable], undefined, {0: InstantIso8601Serializer_getInstance}, []);
  //endregion
  function System() {
    System_instance = this;
  }
  System.prototype.y3k = function () {
    return Companion_getInstance().y3k();
  };
  var System_instance;
  function System_getInstance() {
    if (System_instance == null)
      new System();
    return System_instance;
  }
  function DateTimeFormatException_init_$Init$(cause, $this) {
    IllegalArgumentException_init_$Init$(cause, $this);
    DateTimeFormatException.call($this);
    return $this;
  }
  function DateTimeFormatException_init_$Create$(cause) {
    var tmp = DateTimeFormatException_init_$Init$(cause, Object.create(DateTimeFormatException.prototype));
    captureStack(tmp, DateTimeFormatException_init_$Create$);
    return tmp;
  }
  function DateTimeFormatException() {
    captureStack(this, DateTimeFormatException);
  }
  function get_DISTANT_PAST_SECONDS() {
    return DISTANT_PAST_SECONDS;
  }
  var DISTANT_PAST_SECONDS;
  function get_DISTANT_FUTURE_SECONDS() {
    return DISTANT_FUTURE_SECONDS;
  }
  var DISTANT_FUTURE_SECONDS;
  function InstantIso8601Serializer() {
    InstantIso8601Serializer_instance = this;
    this.d3l_1 = PrimitiveSerialDescriptor('Instant', STRING_getInstance());
  }
  InstantIso8601Serializer.prototype.o1t = function () {
    return this.d3l_1;
  };
  InstantIso8601Serializer.prototype.q1t = function (decoder) {
    return Companion_getInstance().f1h(decoder.f1w());
  };
  InstantIso8601Serializer.prototype.e3l = function (encoder, value) {
    encoder.l1x(value.toString());
  };
  InstantIso8601Serializer.prototype.p1t = function (encoder, value) {
    return this.e3l(encoder, value instanceof Instant_0 ? value : THROW_CCE());
  };
  var InstantIso8601Serializer_instance;
  function InstantIso8601Serializer_getInstance() {
    if (InstantIso8601Serializer_instance == null)
      new InstantIso8601Serializer();
    return InstantIso8601Serializer_instance;
  }
  function fixOffsetRepresentation($this, isoString) {
    var tmp = _Char___init__impl__6a9atx(84);
    var time = indexOf$default(isoString, tmp, 0, true, 2, null);
    if (time === -1)
      return isoString;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.indexOfLast' call
      var inductionVariable = charSequenceLength(isoString) - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp$ret$0;
          // Inline function 'kotlinx.datetime.Companion.fixOffsetRepresentation.<anonymous>' call
          var tmp0__anonymous__q1qw7t = charSequenceGet(isoString, index);
          tmp$ret$0 = equals(new Char(tmp0__anonymous__q1qw7t), new Char(_Char___init__impl__6a9atx(43))) ? true : equals(new Char(tmp0__anonymous__q1qw7t), new Char(_Char___init__impl__6a9atx(45)));
          if (tmp$ret$0) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (0 <= inductionVariable);
      tmp$ret$1 = -1;
    }
    var offset = tmp$ret$1;
    if (offset < time)
      return isoString;
    var tmp_0 = _Char___init__impl__6a9atx(58);
    var separator = indexOf$default(isoString, tmp_0, offset, false, 4, null);
    return !(separator === -1) ? isoString : isoString + ':00';
  }
  function Companion() {
    Companion_instance = this;
    this.z3k_1 = new Instant_0(Instant.ofEpochSecond(get_DISTANT_PAST_SECONDS(), 999999999));
    this.a3l_1 = new Instant_0(Instant.ofEpochSecond(get_DISTANT_FUTURE_SECONDS(), 0));
    this.b3l_1 = new Instant_0(Instant.MIN);
    this.c3l_1 = new Instant_0(Instant.MAX);
  }
  Companion.prototype.y3k = function () {
    return new Instant_0(Clock.systemUTC().instant());
  };
  Companion.prototype.f1h = function (isoString) {
    var tmp;
    try {
      tmp = new Instant_0(OffsetDateTime.parse(fixOffsetRepresentation(this, isoString)).toInstant());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        if (isJodaDateTimeParseException($p))
          throw DateTimeFormatException_init_$Create$($p);
        throw $p;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Instant_0(value) {
    Companion_getInstance();
    this.f3l_1 = value;
  }
  Instant_0.prototype.g3l = function (other) {
    return numberToInt(this.f3l_1.compareTo(other.f3l_1));
  };
  Instant_0.prototype.q6 = function (other) {
    return this.g3l(other instanceof Instant_0 ? other : THROW_CCE());
  };
  Instant_0.prototype.equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof Instant_0) {
        tmp_0 = equals(this.f3l_1, other.f3l_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  Instant_0.prototype.hashCode = function () {
    return numberToInt(this.f3l_1.hashCode());
  };
  Instant_0.prototype.toString = function () {
    return this.f3l_1.toString();
  };
  function isJodaDateTimeParseException(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    return tmp$ret$0.name == 'DateTimeParseException';
  }
  //region block: init
  DISTANT_PAST_SECONDS = new Long(-931914497, -750);
  DISTANT_FUTURE_SECONDS = new Long(1151527680, 720);
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = System_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=Kotlin-DateTime-library-kotlinx-datetime-js-ir.js.map
