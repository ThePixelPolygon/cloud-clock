(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-utils-js-ir'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils-js-ir'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-utils-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-utils-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'ktor-ktor-utils-js-ir'.");
    }
    root['ktor-ktor-utils-js-ir'] = factory(typeof this['ktor-ktor-utils-js-ir'] === 'undefined' ? {} : this['ktor-ktor-utils-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var charSequenceLength = kotlin_kotlin.$_$.y7;
  var Unit_getInstance = kotlin_kotlin.$_$.b4;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.kb;
  var getStringHashCode = kotlin_kotlin.$_$.h8;
  var classMeta = kotlin_kotlin.$_$.a8;
  var setMetadataFor = kotlin_kotlin.$_$.d9;
  var interfaceMeta = kotlin_kotlin.$_$.j8;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var isObject = kotlin_kotlin.$_$.u8;
  var equals = kotlin_kotlin.$_$.c8;
  var hashCode = kotlin_kotlin.$_$.i8;
  var MutableMap = kotlin_kotlin.$_$.n4;
  var ensureNotNull = kotlin_kotlin.$_$.xb;
  var Entry = kotlin_kotlin.$_$.j4;
  var isInterface = kotlin_kotlin.$_$.s8;
  var MutableEntry = kotlin_kotlin.$_$.m4;
  var charArray = kotlin_kotlin.$_$.w7;
  var charSequenceGet = kotlin_kotlin.$_$.x7;
  var toString = kotlin_kotlin.$_$.t2;
  var Char = kotlin_kotlin.$_$.xa;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.d7;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var get = kotlin_kotlin.$_$.k7;
  var fold = kotlin_kotlin.$_$.j7;
  var minusKey = kotlin_kotlin.$_$.l7;
  var plus = kotlin_kotlin.$_$.n7;
  var Element = kotlin_kotlin.$_$.m7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.t4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var Set = kotlin_kotlin.$_$.p4;
  var toString_0 = kotlin_kotlin.$_$.h9;
  var MutableSet = kotlin_kotlin.$_$.o4;
  var firstOrNull = kotlin_kotlin.$_$.m5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var to = kotlin_kotlin.$_$.ic;
  var addAll = kotlin_kotlin.$_$.q4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.n1;
  var get_lastIndex = kotlin_kotlin.$_$.fa;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.q2;
  var equals_0 = kotlin_kotlin.$_$.x9;
  var emptyMap = kotlin_kotlin.$_$.i5;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var Long = kotlin_kotlin.$_$.gb;
  var objectMeta = kotlin_kotlin.$_$.c9;
  var Comparable = kotlin_kotlin.$_$.ya;
  var Enum = kotlin_kotlin.$_$.bb;
  var CoroutineImpl = kotlin_kotlin.$_$.o7;
  var isSuspendFunction = kotlin_kotlin.$_$.w8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.a7;
  var MutableList = kotlin_kotlin.$_$.l4;
  var ArrayList = kotlin_kotlin.$_$.c4;
  var emptyList = kotlin_kotlin.$_$.h5;
  var get_lastIndex_0 = kotlin_kotlin.$_$.t5;
  var last = kotlin_kotlin.$_$.w5;
  var mutableListOf = kotlin_kotlin.$_$.b6;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var extendThrowable = kotlin_kotlin.$_$.d8;
  var captureStack = kotlin_kotlin.$_$.u7;
  var recoverStackTrace = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var Companion_getInstance = kotlin_kotlin.$_$.w3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.u2;
  var createFailure = kotlin_kotlin.$_$.wb;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.v2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.w2;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.q3;
  var Continuation = kotlin_kotlin.$_$.i7;
  var fillArrayVal = kotlin_kotlin.$_$.e8;
  var toList = kotlin_kotlin.$_$.r6;
  var isNaN_0 = kotlin_kotlin.$_$.bc;
  var numberToLong = kotlin_kotlin.$_$.b9;
  var IllegalStateException = kotlin_kotlin.$_$.fb;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.a2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(AttributeKey, 'AttributeKey', classMeta, undefined, undefined, undefined, undefined, []);
  function get_0(key) {
    var tmp0_elvis_lhs = this.x1b(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('No instance for key ' + key);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  setMetadataFor(Attributes, 'Attributes', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CaseInsensitiveMap, 'CaseInsensitiveMap', classMeta, undefined, [MutableMap], undefined, undefined, []);
  setMetadataFor(Entry_0, 'Entry', classMeta, undefined, [MutableEntry], undefined, undefined, []);
  setMetadataFor(_no_name_provided__qut3iv, undefined, classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, Element], undefined, undefined, []);
  setMetadataFor(DelegatingMutableSet$iterator$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DelegatingMutableSet, 'DelegatingMutableSet', classMeta, undefined, [MutableSet], undefined, undefined, []);
  function get_1(name) {
    var tmp0_safe_receiver = this.c1d(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  }
  function forEach(body) {
    var tmp0_forEach = this.e1d();
    var tmp0_iterator = tmp0_forEach.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'io.ktor.util.StringValues.forEach.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$0 = element.n();
      var k = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$1 = element.o();
      var v = tmp$ret$1;
      body(k, v);
    }
    return Unit_getInstance();
  }
  setMetadataFor(StringValues, 'StringValues', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(StringValuesBuilderImpl, 'StringValuesBuilderImpl', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(StringValuesImpl, 'StringValuesImpl', classMeta, undefined, [StringValues], undefined, undefined, []);
  setMetadataFor(CaseInsensitiveString, 'CaseInsensitiveString', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CopyOnWriteHashMap, 'CopyOnWriteHashMap', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(GMTDate, 'GMTDate', classMeta, undefined, [Comparable], undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(WeekDay, 'WeekDay', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Month, 'Month', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor($proceedLoopCOROUTINE$0, '$proceedLoopCOROUTINE$0', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(PipelineContext, 'PipelineContext', classMeta, undefined, [CoroutineScope], undefined, undefined, [1, 0]);
  setMetadataFor(DebugPipelineContext, 'DebugPipelineContext', classMeta, PipelineContext, undefined, undefined, undefined, [1, 0]);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(PhaseContent, 'PhaseContent', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Pipeline, 'Pipeline', classMeta, undefined, undefined, undefined, undefined, [2]);
  setMetadataFor(PipelinePhase, 'PipelinePhase', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(InvalidPhaseException, 'InvalidPhaseException', classMeta, Error, undefined, undefined, undefined, []);
  setMetadataFor(PipelinePhaseRelation, 'PipelinePhaseRelation', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(After, 'After', classMeta, PipelinePhaseRelation, undefined, undefined, undefined, []);
  setMetadataFor(Before, 'Before', classMeta, PipelinePhaseRelation, undefined, undefined, undefined, []);
  setMetadataFor(Last, 'Last', objectMeta, PipelinePhaseRelation, undefined, undefined, undefined, []);
  setMetadataFor(SuspendFunctionGun$continuation$1, undefined, classMeta, undefined, [Continuation], undefined, undefined, []);
  setMetadataFor(SuspendFunctionGun, 'SuspendFunctionGun', classMeta, PipelineContext, undefined, undefined, undefined, [0, 1]);
  setMetadataFor(TypeInfo, 'TypeInfo', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AttributesJs, 'AttributesJs', classMeta, undefined, [Attributes], undefined, undefined, []);
  setMetadataFor(PlatformUtils, 'PlatformUtils', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(InvalidTimestampException, 'InvalidTimestampException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(JsType, 'JsType', objectMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function AttributeKey(name) {
    this.v1b_1 = name;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    var tmp0_isEmpty = this.v1b_1;
    tmp$ret$0 = charSequenceLength(tmp0_isEmpty) === 0;
    if (tmp$ret$0) {
      throw IllegalStateException_init_$Create$("Name can't be blank");
    }
  }
  AttributeKey.prototype.toString = function () {
    return 'AttributeKey: ' + this.v1b_1;
  };
  AttributeKey.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof AttributeKey)
      other;
    else
      THROW_CCE();
    if (!(this.v1b_1 === other.v1b_1))
      return false;
    return true;
  };
  AttributeKey.prototype.hashCode = function () {
    return getStringHashCode(this.v1b_1);
  };
  function Attributes() {
  }
  function putAll(_this__u8e3s4, other) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = other.c1c();
    var tmp0_iterator = tmp0_forEach.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'io.ktor.util.putAll.<anonymous>' call
      _this__u8e3s4.z1b(element instanceof AttributeKey ? element : THROW_CCE(), other.w1b(element));
    }
  }
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj($this$$receiver) {
    return $this$$receiver.d1c_1;
  }
  function CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0($this$$receiver) {
    return caseInsensitive($this$$receiver);
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19($this$$receiver) {
    return new Entry_0($this$$receiver.n().d1c_1, $this$$receiver.o());
  }
  function CaseInsensitiveMap$_get_entries_$lambda_r32w19_0($this$$receiver) {
    return new Entry_0(caseInsensitive($this$$receiver.n()), $this$$receiver.o());
  }
  function CaseInsensitiveMap() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.f1c_1 = tmp$ret$0;
  }
  CaseInsensitiveMap.prototype.c = function () {
    return this.f1c_1.c();
  };
  CaseInsensitiveMap.prototype.g1c = function (key) {
    return this.f1c_1.p1(new CaseInsensitiveString(key));
  };
  CaseInsensitiveMap.prototype.p1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.g1c((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  CaseInsensitiveMap.prototype.h1c = function (key) {
    return this.f1c_1.v1(caseInsensitive(key));
  };
  CaseInsensitiveMap.prototype.v1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.h1c((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  CaseInsensitiveMap.prototype.i = function () {
    return this.f1c_1.i();
  };
  CaseInsensitiveMap.prototype.a8 = function () {
    this.f1c_1.a8();
  };
  CaseInsensitiveMap.prototype.i1c = function (key, value) {
    return this.f1c_1.u2(caseInsensitive(key), value);
  };
  CaseInsensitiveMap.prototype.u2 = function (key, value) {
    var tmp = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
    return this.i1c(tmp, isObject(value) ? value : THROW_CCE());
  };
  CaseInsensitiveMap.prototype.j1c = function (from) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = from.m().j();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'io.ktor.util.CaseInsensitiveMap.putAll.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.n();
      var key = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.o();
      var value = tmp$ret$2;
      this.i1c(key, value);
    }
  };
  CaseInsensitiveMap.prototype.c9 = function (from) {
    return this.j1c(from);
  };
  CaseInsensitiveMap.prototype.k1c = function (key) {
    return this.f1c_1.d9(caseInsensitive(key));
  };
  CaseInsensitiveMap.prototype.d9 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.k1c((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  CaseInsensitiveMap.prototype.w1 = function () {
    var tmp = this.f1c_1.w1();
    var tmp_0 = CaseInsensitiveMap$_get_keys_$lambda_ptzlqj;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_keys_$lambda_ptzlqj_0);
  };
  CaseInsensitiveMap.prototype.m = function () {
    var tmp = this.f1c_1.m();
    var tmp_0 = CaseInsensitiveMap$_get_entries_$lambda_r32w19;
    return new DelegatingMutableSet(tmp, tmp_0, CaseInsensitiveMap$_get_entries_$lambda_r32w19_0);
  };
  CaseInsensitiveMap.prototype.x1 = function () {
    return this.f1c_1.x1();
  };
  CaseInsensitiveMap.prototype.equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof CaseInsensitiveMap);
    }
    if (tmp)
      return false;
    return equals(other.f1c_1, this.f1c_1);
  };
  CaseInsensitiveMap.prototype.hashCode = function () {
    return hashCode(this.f1c_1);
  };
  function Entry_0(key, value) {
    this.l1c_1 = key;
    this.m1c_1 = value;
  }
  Entry_0.prototype.n = function () {
    return this.l1c_1;
  };
  Entry_0.prototype.o = function () {
    return this.m1c_1;
  };
  Entry_0.prototype.n1c = function (newValue) {
    this.m1c_1 = newValue;
    return this.m1c_1;
  };
  Entry_0.prototype.s8 = function (newValue) {
    return this.n1c((newValue == null ? true : isObject(newValue)) ? newValue : THROW_CCE());
  };
  Entry_0.prototype.hashCode = function () {
    return (527 + hashCode(ensureNotNull(this.l1c_1)) | 0) + hashCode(ensureNotNull(this.m1c_1)) | 0;
  };
  Entry_0.prototype.equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(!(other == null) ? isInterface(other, Entry) : false);
    }
    if (tmp)
      return false;
    return equals(other.n(), this.l1c_1) ? equals(other.o(), this.m1c_1) : false;
  };
  Entry_0.prototype.toString = function () {
    return '' + this.l1c_1 + '=' + this.m1c_1;
  };
  function toCharArray(_this__u8e3s4) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.length;
    var tmp_1 = charArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$0;
      // Inline function 'io.ktor.util.toCharArray.<anonymous>' call
      tmp$ret$0 = charSequenceGet(_this__u8e3s4, tmp_2);
      tmp_1[tmp_2] = tmp$ret$0;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function isLowerCase(_this__u8e3s4) {
    var tmp$ret$3;
    // Inline function 'kotlin.text.lowercaseChar' call
    var tmp$ret$2;
    // Inline function 'kotlin.text.lowercase' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = toString(_this__u8e3s4);
    tmp$ret$0 = tmp0_asDynamic;
    var tmp1_unsafeCast = tmp$ret$0.toLowerCase();
    tmp$ret$1 = tmp1_unsafeCast;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = charSequenceGet(tmp$ret$2, 0);
    return equals(new Char(tmp$ret$3), new Char(_this__u8e3s4));
  }
  function caseInsensitiveMap() {
    return new CaseInsensitiveMap();
  }
  function SilentSupervisor(parent) {
    var tmp = SupervisorJob(parent);
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    tmp$ret$0 = new _no_name_provided__qut3iv();
    return tmp.p3(tmp$ret$0);
  }
  function SilentSupervisor$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return SilentSupervisor(parent);
  }
  function _no_name_provided__qut3iv() {
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  _no_name_provided__qut3iv.prototype.sl = function (context, exception) {
    var tmp$ret$0;
    // Inline function 'io.ktor.util.SilentSupervisor.<anonymous>' call
    tmp$ret$0 = Unit_getInstance();
    return tmp$ret$0;
  };
  function DelegatingMutableSet$iterator$1(this$0) {
    this.q1c_1 = this$0;
    this.p1c_1 = this$0.r1c_1.j();
  }
  DelegatingMutableSet$iterator$1.prototype.k = function () {
    return this.p1c_1.k();
  };
  DelegatingMutableSet$iterator$1.prototype.l = function () {
    return this.q1c_1.s1c_1(this.p1c_1.l());
  };
  DelegatingMutableSet$iterator$1.prototype.b8 = function () {
    return this.p1c_1.b8();
  };
  function DelegatingMutableSet(delegate, convertTo, convert) {
    this.r1c_1 = delegate;
    this.s1c_1 = convertTo;
    this.t1c_1 = convert;
    this.u1c_1 = this.r1c_1.c();
  }
  DelegatingMutableSet.prototype.v1c = function (_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.j();
    while (tmp0_iterator.k()) {
      var item = tmp0_iterator.l();
      var tmp$ret$0;
      // Inline function 'io.ktor.util.DelegatingMutableSet.convert.<anonymous>' call
      tmp$ret$0 = this.t1c_1(item);
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  DelegatingMutableSet.prototype.w1c = function (_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.j();
    while (tmp0_iterator.k()) {
      var item = tmp0_iterator.l();
      var tmp$ret$0;
      // Inline function 'io.ktor.util.DelegatingMutableSet.convertTo.<anonymous>' call
      tmp$ret$0 = this.s1c_1(item);
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  DelegatingMutableSet.prototype.c = function () {
    return this.u1c_1;
  };
  DelegatingMutableSet.prototype.x1c = function (element) {
    return this.r1c_1.a(this.t1c_1(element));
  };
  DelegatingMutableSet.prototype.a = function (element) {
    return this.x1c((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  DelegatingMutableSet.prototype.y1c = function (elements) {
    return this.r1c_1.g(this.v1c(elements));
  };
  DelegatingMutableSet.prototype.g = function (elements) {
    return this.y1c(elements);
  };
  DelegatingMutableSet.prototype.a8 = function () {
    this.r1c_1.a8();
  };
  DelegatingMutableSet.prototype.z1c = function (element) {
    return this.r1c_1.y(this.t1c_1(element));
  };
  DelegatingMutableSet.prototype.y = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    return this.z1c((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  DelegatingMutableSet.prototype.a1d = function (elements) {
    return this.r1c_1.z(this.v1c(elements));
  };
  DelegatingMutableSet.prototype.z = function (elements) {
    return this.a1d(elements);
  };
  DelegatingMutableSet.prototype.i = function () {
    return this.r1c_1.i();
  };
  DelegatingMutableSet.prototype.j = function () {
    return new DelegatingMutableSet$iterator$1(this);
  };
  DelegatingMutableSet.prototype.hashCode = function () {
    return hashCode(this.r1c_1);
  };
  DelegatingMutableSet.prototype.equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(!(other == null) ? isInterface(other, Set) : false);
    }
    if (tmp)
      return false;
    var elements = this.w1c(this.r1c_1);
    var tmp_0;
    if (other.z(elements)) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.containsAll' call
      var tmp0_containsAll = other;
      tmp$ret$0 = elements.z(tmp0_containsAll);
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  DelegatingMutableSet.prototype.toString = function () {
    return toString_0(this.w1c(this.r1c_1));
  };
  function StringValues() {
  }
  function ensureListForKey($this, name) {
    var tmp0_elvis_lhs = $this.h1d_1.v1(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$_0();
      var tmp0_also = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.ensureListForKey.<anonymous>' call
      $this.i1d(name);
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = $this.h1d_1;
      tmp0_set.u2(name, tmp0_also);
      tmp$ret$1 = tmp0_also;
      tmp = tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function StringValuesBuilderImpl$appendAll$lambda(this$0) {
    return function (name, values) {
      this$0.j1d(name, values);
      return Unit_getInstance();
    };
  }
  function StringValuesBuilderImpl(caseInsensitiveName, size) {
    this.g1d_1 = caseInsensitiveName;
    this.h1d_1 = this.g1d_1 ? caseInsensitiveMap() : LinkedHashMap_init_$Create$_0(size);
  }
  StringValuesBuilderImpl.prototype.b1d = function () {
    return this.g1d_1;
  };
  StringValuesBuilderImpl.prototype.c1d = function (name) {
    return this.h1d_1.v1(name);
  };
  StringValuesBuilderImpl.prototype.d1d = function () {
    return this.h1d_1.w1();
  };
  StringValuesBuilderImpl.prototype.i = function () {
    return this.h1d_1.i();
  };
  StringValuesBuilderImpl.prototype.e1d = function () {
    return unmodifiable(this.h1d_1.m());
  };
  StringValuesBuilderImpl.prototype.k1d = function (name, value) {
    this.l1d(value);
    var list = ensureListForKey(this, name);
    list.a8();
    list.a(value);
  };
  StringValuesBuilderImpl.prototype.h1c = function (name) {
    var tmp0_safe_receiver = this.c1d(name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  StringValuesBuilderImpl.prototype.m1d = function (name, value) {
    this.l1d(value);
    ensureListForKey(this, name).a(value);
  };
  StringValuesBuilderImpl.prototype.n1d = function (stringValues) {
    stringValues.f1d(StringValuesBuilderImpl$appendAll$lambda(this));
  };
  StringValuesBuilderImpl.prototype.j1d = function (name, values) {
    var tmp$ret$0;
    // Inline function 'kotlin.let' call
    var tmp0_let = ensureListForKey(this, name);
    // Inline function 'kotlin.contracts.contract' call
    var tmp0_iterator = values.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'io.ktor.util.StringValuesBuilderImpl.appendAll.<anonymous>.<anonymous>' call
      this.l1d(element);
      tmp0_let.a(element);
    }
    tmp$ret$0 = Unit_getInstance();
  };
  StringValuesBuilderImpl.prototype.o1d = function (name) {
    this.h1d_1.d9(name);
  };
  StringValuesBuilderImpl.prototype.a8 = function () {
    this.h1d_1.a8();
  };
  StringValuesBuilderImpl.prototype.i1d = function (name) {
  };
  StringValuesBuilderImpl.prototype.l1d = function (value) {
  };
  function listForKey($this, name) {
    return $this.q1d_1.v1(name);
  }
  function StringValuesImpl(caseInsensitiveName, values) {
    this.p1d_1 = caseInsensitiveName;
    var tmp;
    if (this.p1d_1) {
      tmp = caseInsensitiveMap();
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp$ret$0 = LinkedHashMap_init_$Create$();
      tmp = tmp$ret$0;
    }
    var newMap = tmp;
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$1 = values.m().j();
    var tmp0_iterator = tmp$ret$1;
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'io.ktor.util.StringValuesImpl.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$2 = element.n();
      var key = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$3 = element.o();
      var value = tmp$ret$3;
      // Inline function 'kotlin.collections.set' call
      var tmp$ret$6;
      // Inline function 'kotlin.collections.List' call
      var tmp0_List = value.c();
      var tmp$ret$5;
      // Inline function 'kotlin.collections.MutableList' call
      var list = ArrayList_init_$Create$(tmp0_List);
      // Inline function 'kotlin.repeat' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp0_List)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.collections.MutableList.<anonymous>' call
          var tmp$ret$4;
          // Inline function 'io.ktor.util.StringValuesImpl.<anonymous>.<anonymous>' call
          tmp$ret$4 = value.h(index);
          list.a(tmp$ret$4);
        }
         while (inductionVariable < tmp0_List);
      tmp$ret$5 = list;
      tmp$ret$6 = tmp$ret$5;
      var tmp1_set = tmp$ret$6;
      newMap.u2(key, tmp1_set);
    }
    this.q1d_1 = newMap;
  }
  StringValuesImpl.prototype.b1d = function () {
    return this.p1d_1;
  };
  StringValuesImpl.prototype.h1c = function (name) {
    var tmp0_safe_receiver = listForKey(this, name);
    return tmp0_safe_receiver == null ? null : firstOrNull(tmp0_safe_receiver);
  };
  StringValuesImpl.prototype.c1d = function (name) {
    return listForKey(this, name);
  };
  StringValuesImpl.prototype.d1d = function () {
    return unmodifiable(this.q1d_1.w1());
  };
  StringValuesImpl.prototype.i = function () {
    return this.q1d_1.i();
  };
  StringValuesImpl.prototype.e1d = function () {
    return unmodifiable(this.q1d_1.m());
  };
  StringValuesImpl.prototype.f1d = function (body) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.q1d_1;
    tmp$ret$0 = tmp0_iterator.m().j();
    var tmp0_iterator_0 = tmp$ret$0;
    while (tmp0_iterator_0.k()) {
      var tmp1_loop_parameter = tmp0_iterator_0.l();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = tmp1_loop_parameter.n();
      var key = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = tmp1_loop_parameter.o();
      var value = tmp$ret$2;
      body(key, value);
    }
  };
  StringValuesImpl.prototype.toString = function () {
    return 'StringValues(case=' + !this.p1d_1 + ') ' + this.e1d();
  };
  StringValuesImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, StringValues) : false))
      return false;
    if (!(this.p1d_1 === other.b1d()))
      return false;
    return entriesEquals(this.e1d(), other.e1d());
  };
  StringValuesImpl.prototype.hashCode = function () {
    return entriesHashCode(this.e1d(), imul(31, this.p1d_1 | 0));
  };
  function appendAll(_this__u8e3s4, builder) {
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.appendAll.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = builder.e1d();
    var tmp0_iterator = tmp0_forEach.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'io.ktor.util.appendAll.<anonymous>.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$0 = element.n();
      var name = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$1 = element.o();
      var values = tmp$ret$1;
      _this__u8e3s4.j1d(name, values);
    }
    tmp$ret$2 = _this__u8e3s4;
    return tmp$ret$2;
  }
  function flattenEntries(_this__u8e3s4) {
    var tmp$ret$5;
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0_flatMap = _this__u8e3s4.e1d();
    var tmp$ret$4;
    // Inline function 'kotlin.collections.flatMapTo' call
    var tmp0_flatMapTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp0_flatMap.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      var tmp$ret$3;
      // Inline function 'io.ktor.util.flattenEntries.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = element.o();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
      var tmp0_iterator_0 = tmp0_map.j();
      while (tmp0_iterator_0.k()) {
        var item = tmp0_iterator_0.l();
        var tmp$ret$0;
        // Inline function 'io.ktor.util.flattenEntries.<anonymous>.<anonymous>' call
        tmp$ret$0 = to(element.n(), item);
        tmp0_mapTo.a(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var list = tmp$ret$3;
      addAll(tmp0_flatMapTo, list);
    }
    tmp$ret$4 = tmp0_flatMapTo;
    tmp$ret$5 = tmp$ret$4;
    return tmp$ret$5;
  }
  function entriesEquals(a, b) {
    return equals(a, b);
  }
  function entriesHashCode(entries, seed) {
    return imul(seed, 31) + hashCode(entries) | 0;
  }
  function toLowerCasePreservingASCIIRules(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.indexOfFirst' call
      var inductionVariable = 0;
      var last = charSequenceLength(_this__u8e3s4) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          // Inline function 'io.ktor.util.toLowerCasePreservingASCIIRules.<anonymous>' call
          var tmp0__anonymous__q1qw7t = charSequenceGet(_this__u8e3s4, index);
          tmp$ret$0 = !equals(new Char(toLowerCasePreservingASCII(tmp0__anonymous__q1qw7t)), new Char(tmp0__anonymous__q1qw7t));
          if (tmp$ret$0) {
            tmp$ret$1 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = -1;
    }
    var firstIndex = tmp$ret$1;
    if (firstIndex === -1) {
      return _this__u8e3s4;
    }
    var original = _this__u8e3s4;
    var tmp$ret$3;
    // Inline function 'kotlin.text.buildString' call
    var tmp1_buildString = _this__u8e3s4.length;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$(tmp1_buildString);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.toLowerCasePreservingASCIIRules.<anonymous>' call
    tmp0_apply.tc(original, 0, firstIndex);
    var inductionVariable_0 = firstIndex;
    var last_0 = get_lastIndex(original);
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        tmp0_apply.b5(toLowerCasePreservingASCII(charSequenceGet(original, index_0)));
      }
       while (!(index_0 === last_0));
    tmp$ret$2 = tmp0_apply;
    tmp$ret$3 = tmp$ret$2.toString();
    return tmp$ret$3;
  }
  function toLowerCasePreservingASCII(ch) {
    var tmp0_subject = ch;
    var tmp;
    if (_Char___init__impl__6a9atx(65) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(90) : false) {
      tmp = Char__plus_impl_qi7pgj(ch, 32);
    } else if (_Char___init__impl__6a9atx(0) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(127) : false) {
      tmp = ch;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.text.lowercaseChar' call
      var tmp$ret$2;
      // Inline function 'kotlin.text.lowercase' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp0_asDynamic = toString(ch);
      tmp$ret$0 = tmp0_asDynamic;
      var tmp1_unsafeCast = tmp$ret$0.toLowerCase();
      tmp$ret$1 = tmp1_unsafeCast;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = charSequenceGet(tmp$ret$2, 0);
      tmp = tmp$ret$3;
    }
    return tmp;
  }
  function CaseInsensitiveString(content) {
    this.d1c_1 = content;
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.text.lowercase' call
    var tmp0_lowercase = this.d1c_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_lowercase;
    tmp$ret$1 = tmp$ret$0.toLowerCase();
    tmp.e1c_1 = getStringHashCode(tmp$ret$1);
  }
  CaseInsensitiveString.prototype.equals = function (other) {
    var tmp0_safe_receiver = other instanceof CaseInsensitiveString ? other : null;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d1c_1;
    return (tmp1_safe_receiver == null ? null : equals_0(tmp1_safe_receiver, this.d1c_1, true)) === true;
  };
  CaseInsensitiveString.prototype.hashCode = function () {
    return this.e1c_1;
  };
  CaseInsensitiveString.prototype.toString = function () {
    return this.d1c_1;
  };
  function caseInsensitive(_this__u8e3s4) {
    return new CaseInsensitiveString(_this__u8e3s4);
  }
  function CopyOnWriteHashMap() {
    this.r1d_1 = atomic$ref$1(emptyMap());
  }
  CopyOnWriteHashMap.prototype.v1 = function (key) {
    return this.r1d_1.kotlinx$atomicfu$value.v1(key);
  };
  function Companion() {
    Companion_instance = this;
    this.s1d_1 = GMTDate_0(new Long(0, 0));
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function GMTDate(seconds, minutes, hours, dayOfWeek, dayOfMonth, dayOfYear, month, year, timestamp) {
    Companion_getInstance_0();
    this.t1d_1 = seconds;
    this.u1d_1 = minutes;
    this.v1d_1 = hours;
    this.w1d_1 = dayOfWeek;
    this.x1d_1 = dayOfMonth;
    this.y1d_1 = dayOfYear;
    this.z1d_1 = month;
    this.a1e_1 = year;
    this.b1e_1 = timestamp;
  }
  GMTDate.prototype.c1e = function (other) {
    return this.b1e_1.s(other.b1e_1);
  };
  GMTDate.prototype.q6 = function (other) {
    return this.c1e(other instanceof GMTDate ? other : THROW_CCE());
  };
  GMTDate.prototype.toString = function () {
    return 'GMTDate(seconds=' + this.t1d_1 + ', minutes=' + this.u1d_1 + ', hours=' + this.v1d_1 + ', dayOfWeek=' + this.w1d_1 + ', dayOfMonth=' + this.x1d_1 + ', dayOfYear=' + this.y1d_1 + ', month=' + this.z1d_1 + ', year=' + this.a1e_1 + ', timestamp=' + toString_0(this.b1e_1) + ')';
  };
  GMTDate.prototype.hashCode = function () {
    var result = this.t1d_1;
    result = imul(result, 31) + this.u1d_1 | 0;
    result = imul(result, 31) + this.v1d_1 | 0;
    result = imul(result, 31) + this.w1d_1.hashCode() | 0;
    result = imul(result, 31) + this.x1d_1 | 0;
    result = imul(result, 31) + this.y1d_1 | 0;
    result = imul(result, 31) + this.z1d_1.hashCode() | 0;
    result = imul(result, 31) + this.a1e_1 | 0;
    result = imul(result, 31) + this.b1e_1.hashCode() | 0;
    return result;
  };
  GMTDate.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof GMTDate))
      return false;
    var tmp0_other_with_cast = other instanceof GMTDate ? other : THROW_CCE();
    if (!(this.t1d_1 === tmp0_other_with_cast.t1d_1))
      return false;
    if (!(this.u1d_1 === tmp0_other_with_cast.u1d_1))
      return false;
    if (!(this.v1d_1 === tmp0_other_with_cast.v1d_1))
      return false;
    if (!this.w1d_1.equals(tmp0_other_with_cast.w1d_1))
      return false;
    if (!(this.x1d_1 === tmp0_other_with_cast.x1d_1))
      return false;
    if (!(this.y1d_1 === tmp0_other_with_cast.y1d_1))
      return false;
    if (!this.z1d_1.equals(tmp0_other_with_cast.z1d_1))
      return false;
    if (!(this.a1e_1 === tmp0_other_with_cast.a1e_1))
      return false;
    if (!this.b1e_1.equals(tmp0_other_with_cast.b1e_1))
      return false;
    return true;
  };
  var WeekDay_MONDAY_instance;
  var WeekDay_TUESDAY_instance;
  var WeekDay_WEDNESDAY_instance;
  var WeekDay_THURSDAY_instance;
  var WeekDay_FRIDAY_instance;
  var WeekDay_SATURDAY_instance;
  var WeekDay_SUNDAY_instance;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.d1e = function (ordinal) {
    return values()[ordinal];
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    WeekDay_initEntries();
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function values() {
    return [WeekDay_MONDAY_getInstance(), WeekDay_TUESDAY_getInstance(), WeekDay_WEDNESDAY_getInstance(), WeekDay_THURSDAY_getInstance(), WeekDay_FRIDAY_getInstance(), WeekDay_SATURDAY_getInstance(), WeekDay_SUNDAY_getInstance()];
  }
  var WeekDay_entriesInitialized;
  function WeekDay_initEntries() {
    if (WeekDay_entriesInitialized)
      return Unit_getInstance();
    WeekDay_entriesInitialized = true;
    WeekDay_MONDAY_instance = new WeekDay('MONDAY', 0, 'Mon');
    WeekDay_TUESDAY_instance = new WeekDay('TUESDAY', 1, 'Tue');
    WeekDay_WEDNESDAY_instance = new WeekDay('WEDNESDAY', 2, 'Wed');
    WeekDay_THURSDAY_instance = new WeekDay('THURSDAY', 3, 'Thu');
    WeekDay_FRIDAY_instance = new WeekDay('FRIDAY', 4, 'Fri');
    WeekDay_SATURDAY_instance = new WeekDay('SATURDAY', 5, 'Sat');
    WeekDay_SUNDAY_instance = new WeekDay('SUNDAY', 6, 'Sun');
    Companion_getInstance_1();
  }
  function WeekDay(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.g1e_1 = value;
  }
  var Month_JANUARY_instance;
  var Month_FEBRUARY_instance;
  var Month_MARCH_instance;
  var Month_APRIL_instance;
  var Month_MAY_instance;
  var Month_JUNE_instance;
  var Month_JULY_instance;
  var Month_AUGUST_instance;
  var Month_SEPTEMBER_instance;
  var Month_OCTOBER_instance;
  var Month_NOVEMBER_instance;
  var Month_DECEMBER_instance;
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.prototype.d1e = function (ordinal) {
    return values_0()[ordinal];
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    Month_initEntries();
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function values_0() {
    return [Month_JANUARY_getInstance(), Month_FEBRUARY_getInstance(), Month_MARCH_getInstance(), Month_APRIL_getInstance(), Month_MAY_getInstance(), Month_JUNE_getInstance(), Month_JULY_getInstance(), Month_AUGUST_getInstance(), Month_SEPTEMBER_getInstance(), Month_OCTOBER_getInstance(), Month_NOVEMBER_getInstance(), Month_DECEMBER_getInstance()];
  }
  var Month_entriesInitialized;
  function Month_initEntries() {
    if (Month_entriesInitialized)
      return Unit_getInstance();
    Month_entriesInitialized = true;
    Month_JANUARY_instance = new Month('JANUARY', 0, 'Jan');
    Month_FEBRUARY_instance = new Month('FEBRUARY', 1, 'Feb');
    Month_MARCH_instance = new Month('MARCH', 2, 'Mar');
    Month_APRIL_instance = new Month('APRIL', 3, 'Apr');
    Month_MAY_instance = new Month('MAY', 4, 'May');
    Month_JUNE_instance = new Month('JUNE', 5, 'Jun');
    Month_JULY_instance = new Month('JULY', 6, 'Jul');
    Month_AUGUST_instance = new Month('AUGUST', 7, 'Aug');
    Month_SEPTEMBER_instance = new Month('SEPTEMBER', 8, 'Sep');
    Month_OCTOBER_instance = new Month('OCTOBER', 9, 'Oct');
    Month_NOVEMBER_instance = new Month('NOVEMBER', 10, 'Nov');
    Month_DECEMBER_instance = new Month('DECEMBER', 11, 'Dec');
    Companion_getInstance_2();
  }
  function Month(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.j1e_1 = value;
  }
  function WeekDay_MONDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_MONDAY_instance;
  }
  function WeekDay_TUESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_TUESDAY_instance;
  }
  function WeekDay_WEDNESDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_WEDNESDAY_instance;
  }
  function WeekDay_THURSDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_THURSDAY_instance;
  }
  function WeekDay_FRIDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_FRIDAY_instance;
  }
  function WeekDay_SATURDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SATURDAY_instance;
  }
  function WeekDay_SUNDAY_getInstance() {
    WeekDay_initEntries();
    return WeekDay_SUNDAY_instance;
  }
  function Month_JANUARY_getInstance() {
    Month_initEntries();
    return Month_JANUARY_instance;
  }
  function Month_FEBRUARY_getInstance() {
    Month_initEntries();
    return Month_FEBRUARY_instance;
  }
  function Month_MARCH_getInstance() {
    Month_initEntries();
    return Month_MARCH_instance;
  }
  function Month_APRIL_getInstance() {
    Month_initEntries();
    return Month_APRIL_instance;
  }
  function Month_MAY_getInstance() {
    Month_initEntries();
    return Month_MAY_instance;
  }
  function Month_JUNE_getInstance() {
    Month_initEntries();
    return Month_JUNE_instance;
  }
  function Month_JULY_getInstance() {
    Month_initEntries();
    return Month_JULY_instance;
  }
  function Month_AUGUST_getInstance() {
    Month_initEntries();
    return Month_AUGUST_instance;
  }
  function Month_SEPTEMBER_getInstance() {
    Month_initEntries();
    return Month_SEPTEMBER_instance;
  }
  function Month_OCTOBER_getInstance() {
    Month_initEntries();
    return Month_OCTOBER_instance;
  }
  function Month_NOVEMBER_getInstance() {
    Month_initEntries();
    return Month_NOVEMBER_instance;
  }
  function Month_DECEMBER_getInstance() {
    Month_initEntries();
    return Month_DECEMBER_instance;
  }
  function proceedLoop($this, $cont) {
    var tmp = new $proceedLoopCOROUTINE$0($this, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  }
  function $proceedLoopCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s1e_1 = _this__u8e3s4;
  }
  $proceedLoopCOROUTINE$0.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 6;
            this.oe_1 = 1;
            continue $sm;
          case 1:
            this.t1e_1 = this.s1e_1.a1f_1;
            if (this.t1e_1 === -1) {
              this.oe_1 = 5;
              continue $sm;
            } else {
              this.oe_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            this.u1e_1 = this.s1e_1.x1e_1;
            if (this.t1e_1 >= this.u1e_1.c()) {
              this.s1e_1.b1f();
              this.oe_1 = 5;
              continue $sm;
            } else {
              this.oe_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            this.v1e_1 = this.u1e_1.h(this.t1e_1);
            this.s1e_1.a1f_1 = this.t1e_1 + 1 | 0;
            this.oe_1 = 4;
            var tmp_0 = this.v1e_1;
            suspendResult = (isSuspendFunction(tmp_0, 2) ? tmp_0 : THROW_CCE())(this.s1e_1, this.s1e_1.z1e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            {
              this.oe_1 = 1;
              continue $sm;
            }

            this.oe_1 = 5;
            continue $sm;
          case 5:
            return this.s1e_1.z1e_1;
          case 6:
            throw this.re_1;
        }
      } catch ($p) {
        if (this.pe_1 === 6) {
          throw $p;
        } else {
          this.oe_1 = this.pe_1;
          this.re_1 = $p;
        }
      }
     while (true);
  };
  function DebugPipelineContext(context, interceptors, subject, coroutineContext) {
    PipelineContext.call(this, context);
    this.x1e_1 = interceptors;
    this.y1e_1 = coroutineContext;
    this.z1e_1 = subject;
    this.a1f_1 = 0;
  }
  DebugPipelineContext.prototype.vf = function () {
    return this.y1e_1;
  };
  DebugPipelineContext.prototype.c1f = function () {
    return this.z1e_1;
  };
  DebugPipelineContext.prototype.b1f = function () {
    this.a1f_1 = -1;
  };
  DebugPipelineContext.prototype.d1f = function (subject, $cont) {
    this.z1e_1 = subject;
    return this.e1f($cont);
  };
  DebugPipelineContext.prototype.e1f = function ($cont) {
    var index = this.a1f_1;
    if (index < 0)
      return this.z1e_1;
    if (index >= this.x1e_1.c()) {
      this.b1f();
      return this.z1e_1;
    }
    return proceedLoop(this, $cont);
  };
  DebugPipelineContext.prototype.f1f = function (initial, $cont) {
    this.a1f_1 = 0;
    this.z1e_1 = initial;
    return this.e1f($cont);
  };
  function PhaseContent_init_$Init$(phase, relation, $this) {
    var tmp = Companion_getInstance_3().g1f_1;
    PhaseContent.call($this, phase, relation, isInterface(tmp, MutableList) ? tmp : THROW_CCE());
    // Inline function 'kotlin.check' call
    var tmp0_check = Companion_getInstance_3().g1f_1.i();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'io.ktor.util.pipeline.PhaseContent.<init>.<anonymous>' call
      tmp$ret$0 = 'The shared empty array list has been modified';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    return $this;
  }
  function PhaseContent_init_$Create$(phase, relation) {
    return PhaseContent_init_$Init$(phase, relation, Object.create(PhaseContent.prototype));
  }
  function copyInterceptors($this) {
    $this.j1f_1 = $this.l1f();
    $this.k1f_1 = false;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.g1f_1 = tmp$ret$0;
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function PhaseContent(phase, relation, interceptors) {
    Companion_getInstance_3();
    this.h1f_1 = phase;
    this.i1f_1 = relation;
    this.j1f_1 = interceptors;
    this.k1f_1 = true;
  }
  PhaseContent.prototype.om = function () {
    return this.j1f_1.i();
  };
  PhaseContent.prototype.c = function () {
    return this.j1f_1.c();
  };
  PhaseContent.prototype.m1f = function (interceptor) {
    if (this.k1f_1) {
      copyInterceptors(this);
    }
    this.j1f_1.a(interceptor);
  };
  PhaseContent.prototype.n1f = function (destination) {
    var interceptors = this.j1f_1;
    if (destination instanceof ArrayList) {
      destination.e9(destination.c() + interceptors.c() | 0);
    }
    var inductionVariable = 0;
    var last = interceptors.c();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        destination.a(interceptors.h(index));
      }
       while (inductionVariable < last);
  };
  PhaseContent.prototype.o1f = function () {
    this.k1f_1 = true;
    return this.j1f_1;
  };
  PhaseContent.prototype.l1f = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var tmp0_apply = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.pipeline.PhaseContent.copiedInterceptors.<anonymous>' call
    tmp0_apply.g(this.j1f_1);
    tmp$ret$1 = tmp0_apply;
    return tmp$ret$1;
  };
  PhaseContent.prototype.toString = function () {
    return 'Phase `' + this.h1f_1.p1f_1 + '`, ' + this.c() + ' handlers';
  };
  function _set_interceptors__wod97b($this, value) {
    $this.u1f_1.kotlinx$atomicfu$value = value;
  }
  function _get_interceptors__h4min7($this) {
    return $this.u1f_1.kotlinx$atomicfu$value;
  }
  function createContext($this, context, subject, coroutineContext) {
    return pipelineContextFor(context, sharedInterceptorsList($this), subject, coroutineContext, $this.x1f());
  }
  function findPhase($this, phase) {
    var phasesList = $this.s1f_1;
    var inductionVariable = 0;
    var last = phasesList.c();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.h(index);
        if (current === phase) {
          var content = PhaseContent_init_$Create$(phase, Last_getInstance());
          phasesList.y7(index, content);
          return content;
        }
        var tmp;
        if (current instanceof PhaseContent) {
          tmp = current.h1f_1 === phase;
        } else {
          tmp = false;
        }
        if (tmp) {
          return current instanceof PhaseContent ? current : THROW_CCE();
        }
      }
       while (inductionVariable < last);
    return null;
  }
  function findPhaseIndex($this, phase) {
    var phasesList = $this.s1f_1;
    var inductionVariable = 0;
    var last = phasesList.c();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.h(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.h1f_1 === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return index;
        }
      }
       while (inductionVariable < last);
    return -1;
  }
  function hasPhase($this, phase) {
    var phasesList = $this.s1f_1;
    var inductionVariable = 0;
    var last = phasesList.c();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = phasesList.h(index);
        var tmp;
        if (current === phase) {
          tmp = true;
        } else {
          var tmp_0;
          if (current instanceof PhaseContent) {
            tmp_0 = current.h1f_1 === phase;
          } else {
            tmp_0 = false;
          }
          tmp = tmp_0;
        }
        if (tmp) {
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  }
  function cacheInterceptors($this) {
    var interceptorsQuantity = $this.t1f_1;
    if (interceptorsQuantity === 0) {
      notSharedInterceptorsList($this, emptyList());
      return emptyList();
    }
    var phases = $this.s1f_1;
    if (interceptorsQuantity === 1) {
      var inductionVariable = 0;
      var last = get_lastIndex_0(phases);
      if (inductionVariable <= last)
        $l$loop_0: do {
          var phaseIndex = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = phases.h(phaseIndex);
          var tmp1_elvis_lhs = tmp instanceof PhaseContent ? tmp : null;
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var phaseContent = tmp_0;
          if (phaseContent.om())
            continue $l$loop_0;
          var interceptors = phaseContent.o1f();
          setInterceptorsListFromPhase($this, phaseContent);
          return interceptors;
        }
         while (!(phaseIndex === last));
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var destination = tmp$ret$0;
    var inductionVariable_0 = 0;
    var last_0 = get_lastIndex_0(phases);
    if (inductionVariable_0 <= last_0)
      $l$loop_1: do {
        var phaseIndex_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp_1 = phases.h(phaseIndex_0);
        var tmp3_elvis_lhs = tmp_1 instanceof PhaseContent ? tmp_1 : null;
        var tmp_2;
        if (tmp3_elvis_lhs == null) {
          continue $l$loop_1;
        } else {
          tmp_2 = tmp3_elvis_lhs;
        }
        var phase = tmp_2;
        phase.n1f(destination);
      }
       while (!(phaseIndex_0 === last_0));
    notSharedInterceptorsList($this, destination);
    return destination;
  }
  function sharedInterceptorsList($this) {
    if (_get_interceptors__h4min7($this) == null) {
      cacheInterceptors($this);
    }
    $this.v1f_1 = true;
    return ensureNotNull(_get_interceptors__h4min7($this));
  }
  function resetInterceptorsList($this) {
    _set_interceptors__wod97b($this, null);
    $this.v1f_1 = false;
    $this.w1f_1 = null;
  }
  function notSharedInterceptorsList($this, list) {
    _set_interceptors__wod97b($this, list);
    $this.v1f_1 = false;
    $this.w1f_1 = null;
  }
  function setInterceptorsListFromPhase($this, phaseContent) {
    _set_interceptors__wod97b($this, phaseContent.o1f());
    $this.v1f_1 = false;
    $this.w1f_1 = phaseContent.h1f_1;
  }
  function tryAddToPhaseFastPath($this, phase, block) {
    var currentInterceptors = _get_interceptors__h4min7($this);
    if ($this.s1f_1.i() ? true : currentInterceptors == null) {
      return false;
    }
    var tmp;
    if ($this.v1f_1) {
      tmp = true;
    } else {
      tmp = !(!(currentInterceptors == null) ? isInterface(currentInterceptors, MutableList) : false);
    }
    if (tmp) {
      return false;
    }
    if (equals($this.w1f_1, phase)) {
      currentInterceptors.a(block);
      return true;
    }
    if (equals(phase, last($this.s1f_1)) ? true : findPhaseIndex($this, phase) === get_lastIndex_0($this.s1f_1)) {
      ensureNotNull(findPhase($this, phase)).m1f(block);
      currentInterceptors.a(block);
      return true;
    }
    return false;
  }
  function Pipeline(phases) {
    this.q1f_1 = Attributes_0(true);
    this.r1f_1 = false;
    this.s1f_1 = mutableListOf(phases.slice());
    this.t1f_1 = 0;
    this.u1f_1 = atomic$ref$1(null);
    this.v1f_1 = false;
    this.w1f_1 = null;
  }
  Pipeline.prototype.x1f = function () {
    return this.r1f_1;
  };
  Pipeline.prototype.y1f = function (context, subject, $cont) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $cont.e3();
    return createContext(this, context, subject, tmp$ret$0).f1f(subject, $cont);
  };
  Pipeline.prototype.a1g = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_getInstance();
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference + ' was not registered for this pipeline');
    }
    var lastRelatedPhaseIndex = index;
    var inductionVariable = index + 1 | 0;
    var last = get_lastIndex_0(this.s1f_1);
    if (inductionVariable <= last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.s1f_1.h(i);
        var tmp1_safe_receiver = tmp instanceof PhaseContent ? tmp : null;
        var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.i1f_1;
        var tmp_0;
        if (tmp2_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp2_elvis_lhs;
        }
        var relation = tmp_0;
        var tmp3_safe_receiver = relation instanceof After ? relation : null;
        var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.b1g_1;
        var tmp_1;
        if (tmp4_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp_1 = tmp4_elvis_lhs;
        }
        var relatedTo = tmp_1;
        lastRelatedPhaseIndex = equals(relatedTo, reference) ? i : lastRelatedPhaseIndex;
      }
       while (!(i === last));
    this.s1f_1.k8(lastRelatedPhaseIndex + 1 | 0, PhaseContent_init_$Create$(phase, new After(reference)));
  };
  Pipeline.prototype.c1g = function (reference, phase) {
    if (hasPhase(this, phase))
      return Unit_getInstance();
    var index = findPhaseIndex(this, reference);
    if (index === -1) {
      throw new InvalidPhaseException('Phase ' + reference + ' was not registered for this pipeline');
    }
    this.s1f_1.k8(index, PhaseContent_init_$Create$(phase, new Before(reference)));
  };
  Pipeline.prototype.d1g = function (phase, block) {
    var tmp0_elvis_lhs = findPhase(this, phase);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new InvalidPhaseException('Phase ' + phase + ' was not registered for this pipeline');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var phaseContent = tmp;
    if (typeof block === 'function')
      block;
    else
      THROW_CCE();
    if (tryAddToPhaseFastPath(this, phase, block)) {
      var tmp1_this = this;
      var tmp2 = tmp1_this.t1f_1;
      tmp1_this.t1f_1 = tmp2 + 1 | 0;
      return Unit_getInstance();
    }
    phaseContent.m1f(block);
    var tmp3_this = this;
    var tmp4 = tmp3_this.t1f_1;
    tmp3_this.t1f_1 = tmp4 + 1 | 0;
    resetInterceptorsList(this);
    this.e1g();
  };
  Pipeline.prototype.e1g = function () {
  };
  function PipelineContext(context) {
    this.z1f_1 = context;
  }
  function pipelineContextFor(context, interceptors, subject, coroutineContext, debugMode) {
    var tmp;
    if (debugMode) {
      tmp = new DebugPipelineContext(context, interceptors, subject, coroutineContext);
    } else {
      tmp = new SuspendFunctionGun(subject, context, interceptors);
    }
    return tmp;
  }
  function PipelinePhase(name) {
    this.p1f_1 = name;
  }
  PipelinePhase.prototype.toString = function () {
    return "Phase('" + this.p1f_1 + "')";
  };
  function InvalidPhaseException(message) {
    extendThrowable(this, message, void 1);
    captureStack(this, InvalidPhaseException);
  }
  function After(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.b1g_1 = relativeTo;
  }
  function Before(relativeTo) {
    PipelinePhaseRelation.call(this);
    this.f1g_1 = relativeTo;
  }
  function Last() {
    Last_instance = this;
    PipelinePhaseRelation.call(this);
  }
  var Last_instance;
  function Last_getInstance() {
    if (Last_instance == null)
      new Last();
    return Last_instance;
  }
  function PipelinePhaseRelation() {
  }
  function recoverStackTraceBridge(exception, continuation) {
    var tmp;
    try {
      tmp = withCause(recoverStackTrace(exception, continuation), exception.cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = exception;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function loop($this, direct) {
    do {
      var currentIndex = $this.m1g_1;
      if (currentIndex === $this.h1g_1.c()) {
        if (!direct) {
          var tmp$ret$0;
          // Inline function 'kotlin.Companion.success' call
          var tmp0_success = Companion_getInstance();
          var tmp1_success = $this.j1g_1;
          tmp$ret$0 = _Result___init__impl__xyqfz8(tmp1_success);
          resumeRootWith($this, tmp$ret$0);
          return false;
        }
        return true;
      }
      $this.m1g_1 = currentIndex + 1 | 0;
      var next = $this.h1g_1.h(currentIndex);
      try {
        var result = next($this, $this.j1g_1, $this.i1g_1);
        if (result === get_COROUTINE_SUSPENDED())
          return false;
      } catch ($p) {
        if ($p instanceof Error) {
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.failure' call
          var tmp2_failure = Companion_getInstance();
          tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure($p));
          resumeRootWith($this, tmp$ret$1);
          return false;
        } else {
          throw $p;
        }
      }
    }
     while (true);
  }
  function resumeRootWith($this, result) {
    if ($this.l1g_1 < 0) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('No more continuations to resume');
    }
    var next = ensureNotNull($this.k1g_1[$this.l1g_1]);
    var tmp0_this = $this;
    var tmp1 = tmp0_this.l1g_1;
    tmp0_this.l1g_1 = tmp1 - 1 | 0;
    $this.k1g_1[tmp1] = null;
    if (!_Result___get_isFailure__impl__jpiriv(result)) {
      next.f3(result);
    } else {
      var exception = recoverStackTraceBridge(ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result)), next);
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      next.f3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
    }
  }
  function discardLastRootContinuation($this) {
    if ($this.l1g_1 < 0)
      throw IllegalStateException_init_$Create$('No more continuations to resume');
    var tmp0_this = $this;
    var tmp1 = tmp0_this.l1g_1;
    tmp0_this.l1g_1 = tmp1 - 1 | 0;
    $this.k1g_1[tmp1] = null;
  }
  function addContinuation($this, continuation) {
    var tmp0_this = $this;
    tmp0_this.l1g_1 = tmp0_this.l1g_1 + 1 | 0;
    $this.k1g_1[tmp0_this.l1g_1] = continuation;
  }
  function SuspendFunctionGun$continuation$1(this$0) {
    this.o1g_1 = this$0;
    this.n1g_1 = IntCompanionObject_getInstance().MIN_VALUE;
  }
  SuspendFunctionGun$continuation$1.prototype.e3 = function () {
    var tmp0_safe_receiver = this.o1g_1.k1g_1[this.o1g_1.l1g_1];
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e3();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Not started');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  SuspendFunctionGun$continuation$1.prototype.p1g = function (result) {
    if (_Result___get_isFailure__impl__jpiriv(result)) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance();
      var tmp1_failure = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(result));
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
      resumeRootWith(this.o1g_1, tmp$ret$0);
      return Unit_getInstance();
    }
    loop(this.o1g_1, false);
  };
  SuspendFunctionGun$continuation$1.prototype.f3 = function (result) {
    return this.p1g(result);
  };
  function SuspendFunctionGun(initial, context, blocks) {
    PipelineContext.call(this, context);
    this.h1g_1 = blocks;
    var tmp = this;
    tmp.i1g_1 = new SuspendFunctionGun$continuation$1(this);
    this.j1g_1 = initial;
    var tmp_0 = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.h1g_1.c();
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp_0.k1g_1 = tmp$ret$0;
    this.l1g_1 = -1;
    this.m1g_1 = 0;
  }
  SuspendFunctionGun.prototype.vf = function () {
    return this.i1g_1.e3();
  };
  SuspendFunctionGun.prototype.c1f = function () {
    return this.j1g_1;
  };
  SuspendFunctionGun.prototype.e1f = function ($cont) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'io.ktor.util.pipeline.SuspendFunctionGun.proceed.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $cont;
      if (this.m1g_1 === this.h1g_1.c()) {
        tmp$ret$0 = this.j1g_1;
        break $l$block_0;
      }
      addContinuation(this, tmp0__anonymous__q1qw7t);
      if (loop(this, true)) {
        discardLastRootContinuation(this);
        tmp$ret$0 = this.j1g_1;
        break $l$block_0;
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  };
  SuspendFunctionGun.prototype.d1f = function (subject, $cont) {
    this.j1g_1 = subject;
    return this.e1f($cont);
  };
  SuspendFunctionGun.prototype.f1f = function (initial, $cont) {
    this.m1g_1 = 0;
    if (this.m1g_1 === this.h1g_1.c())
      return initial;
    this.j1g_1 = initial;
    if (this.l1g_1 >= 0)
      throw IllegalStateException_init_$Create$('Already started');
    return this.e1f($cont);
  };
  function TypeInfo(type, reifiedType, kotlinType) {
    this.q1g_1 = type;
    this.r1g_1 = reifiedType;
    this.s1g_1 = kotlinType;
  }
  TypeInfo.prototype.toString = function () {
    return 'TypeInfo(type=' + this.q1g_1 + ', reifiedType=' + this.r1g_1 + ', kotlinType=' + this.s1g_1 + ')';
  };
  TypeInfo.prototype.hashCode = function () {
    var result = this.q1g_1.hashCode();
    result = imul(result, 31) + hashCode(this.r1g_1) | 0;
    result = imul(result, 31) + (this.s1g_1 == null ? 0 : hashCode(this.s1g_1)) | 0;
    return result;
  };
  TypeInfo.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypeInfo))
      return false;
    var tmp0_other_with_cast = other instanceof TypeInfo ? other : THROW_CCE();
    if (!this.q1g_1.equals(tmp0_other_with_cast.q1g_1))
      return false;
    if (!equals(this.r1g_1, tmp0_other_with_cast.r1g_1))
      return false;
    if (!equals(this.s1g_1, tmp0_other_with_cast.s1g_1))
      return false;
    return true;
  };
  function Attributes_0(concurrent) {
    return new AttributesJs();
  }
  function AttributesJs() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.t1g_1 = tmp$ret$0;
  }
  AttributesJs.prototype.x1b = function (key) {
    var tmp = this.t1g_1.v1(key);
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  AttributesJs.prototype.y1b = function (key) {
    return this.t1g_1.p1(key);
  };
  AttributesJs.prototype.z1b = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.t1g_1;
    tmp0_set.u2(key, value);
  };
  AttributesJs.prototype.a1c = function (key) {
    this.t1g_1.d9(key);
  };
  AttributesJs.prototype.b1c = function (key, block) {
    var tmp0_safe_receiver = this.t1g_1.v1(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return isObject(tmp0_safe_receiver) ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$1;
    // Inline function 'kotlin.also' call
    var tmp0_also = block();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.util.AttributesJs.computeIfAbsent.<anonymous>' call
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.t1g_1;
    tmp0_set.u2(key, tmp0_also);
    tmp$ret$1 = tmp0_also;
    return tmp$ret$1;
  };
  AttributesJs.prototype.c1c = function () {
    return toList(this.t1g_1.w1());
  };
  function unmodifiable(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function PlatformUtils() {
    PlatformUtils_instance = this;
    var tmp = this;
    var tmp_0 = typeof window !== 'undefined' && typeof window.document !== 'undefined' || (typeof self !== 'undefined' && typeof self.location !== 'undefined');
    tmp.u1g_1 = (!(tmp_0 == null) ? typeof tmp_0 === 'boolean' : false) ? tmp_0 : THROW_CCE();
    var tmp_1 = this;
    var tmp_2 = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
    tmp_1.v1g_1 = (!(tmp_2 == null) ? typeof tmp_2 === 'boolean' : false) ? tmp_2 : THROW_CCE();
    this.w1g_1 = false;
    this.x1g_1 = false;
    this.y1g_1 = false;
    this.z1g_1 = true;
  }
  var PlatformUtils_instance;
  function PlatformUtils_getInstance() {
    if (PlatformUtils_instance == null)
      new PlatformUtils();
    return PlatformUtils_instance;
  }
  function GMTDate_0(timestamp) {
    var tmp0_safe_receiver = timestamp;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.vd();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'io.ktor.util.date.GMTDate.<anonymous>' call
      tmp$ret$0 = new Date(tmp1_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp2_elvis_lhs = tmp;
    var date = tmp2_elvis_lhs == null ? new Date() : tmp2_elvis_lhs;
    if (isNaN_0(date.getTime()))
      throw new InvalidTimestampException(ensureNotNull(timestamp));
    var tmp$ret$2;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var dayOfWeek = Companion_getInstance_1().d1e((date.getUTCDay() + 6 | 0) % 7 | 0);
    var month = Companion_getInstance_2().d1e(date.getUTCMonth());
    return new GMTDate(date.getUTCSeconds(), date.getUTCMinutes(), date.getUTCHours(), dayOfWeek, date.getUTCDate(), date.getUTCFullYear(), month, date.getUTCFullYear(), numberToLong(date.getTime()));
  }
  function GMTDate$default(timestamp, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      timestamp = null;
    return GMTDate_0(timestamp);
  }
  function InvalidTimestampException(timestamp) {
    IllegalStateException_init_$Init$('Invalid date timestamp exception: ' + toString_0(timestamp), this);
    captureStack(this, InvalidTimestampException);
  }
  function withCause(_this__u8e3s4, cause) {
    return _this__u8e3s4;
  }
  function instanceOf(_this__u8e3s4, type) {
    return type.kb(_this__u8e3s4);
  }
  function typeInfoImpl(reifiedType, kClass, kType) {
    return new TypeInfo(kClass, reifiedType, kType);
  }
  function JsType() {
    JsType_instance = this;
  }
  var JsType_instance;
  function JsType_getInstance() {
    if (JsType_instance == null)
      new JsType();
    return JsType_instance;
  }
  //region block: post-declaration
  _no_name_provided__qut3iv.prototype.i3 = get;
  _no_name_provided__qut3iv.prototype.o3 = fold;
  _no_name_provided__qut3iv.prototype.n3 = minusKey;
  _no_name_provided__qut3iv.prototype.p3 = plus;
  AttributesJs.prototype.w1b = get_0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = GMTDate$default;
  _.$_$.b = SilentSupervisor$default;
  _.$_$.c = JsType_getInstance;
  _.$_$.d = PlatformUtils_getInstance;
  _.$_$.e = CopyOnWriteHashMap;
  _.$_$.f = PipelineContext;
  _.$_$.g = PipelinePhase;
  _.$_$.h = Pipeline;
  _.$_$.i = instanceOf;
  _.$_$.j = typeInfoImpl;
  _.$_$.k = AttributeKey;
  _.$_$.l = Attributes_0;
  _.$_$.m = forEach;
  _.$_$.n = get_1;
  _.$_$.o = StringValuesBuilderImpl;
  _.$_$.p = StringValuesImpl;
  _.$_$.q = StringValues;
  _.$_$.r = appendAll;
  _.$_$.s = flattenEntries;
  _.$_$.t = isLowerCase;
  _.$_$.u = putAll;
  _.$_$.v = toCharArray;
  _.$_$.w = toLowerCasePreservingASCIIRules;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-utils-js-ir.js.map
