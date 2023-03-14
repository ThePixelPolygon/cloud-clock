(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'react-dom/client', 'react-router-dom', 'react-router', 'react', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './ktor-ktor-client-content-negotiation-js-ir.js', './ktor-ktor-serialization-kotlinx-json-js-ir.js', './ktor-ktor-client-core-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-utils-js-ir.js', './kotlin-wrappers-kotlin-react-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlin-wrappers-kotlin-react-dom-js-ir.js', './Kotlin-DateTime-library-kotlinx-datetime-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('react-dom/client'), require('react-router-dom'), require('react-router'), require('react'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./ktor-ktor-client-content-negotiation-js-ir.js'), require('./ktor-ktor-serialization-kotlinx-json-js-ir.js'), require('./ktor-ktor-client-core-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'), require('./kotlin-wrappers-kotlin-react-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin-wrappers-kotlin-react-dom-js-ir.js'), require('./Kotlin-DateTime-library-kotlinx-datetime-js-ir.js'));
  else {
    if (typeof this['react-dom/client'] === 'undefined') {
      throw new Error("Error loading module 'cloud-clock'. Its dependency 'react-dom/client' was not found. Please, check whether 'react-dom/client' is loaded prior to 'cloud-clock'.");
    }
    if (typeof this['react-router-dom'] === 'undefined') {
      throw new Error("Error loading module 'cloud-clock'. Its dependency 'react-router-dom' was not found. Please, check whether 'react-router-dom' is loaded prior to 'cloud-clock'.");
    }
    if (typeof this['react-router'] === 'undefined') {
      throw new Error("Error loading module 'cloud-clock'. Its dependency 'react-router' was not found. Please, check whether 'react-router' is loaded prior to 'cloud-clock'.");
    }
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'cloud-clock'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'cloud-clock'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'cloud-clock'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'cloud-clock'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'cloud-clock'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'cloud-clock'.");
    }
    if (typeof this['ktor-ktor-client-content-negotiation-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'cloud-clock'. Its dependency 'ktor-ktor-client-content-negotiation-js-ir' was not found. Please, check whether 'ktor-ktor-client-content-negotiation-js-ir' is loaded prior to 'cloud-clock'.");
    }
    if (typeof this['ktor-ktor-serialization-kotlinx-json-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'cloud-clock'. Its dependency 'ktor-ktor-serialization-kotlinx-json-js-ir' was not found. Please, check whether 'ktor-ktor-serialization-kotlinx-json-js-ir' is loaded prior to 'cloud-clock'.");
    }
    if (typeof this['ktor-ktor-client-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'cloud-clock'. Its dependency 'ktor-ktor-client-core-js-ir' was not found. Please, check whether 'ktor-ktor-client-core-js-ir' is loaded prior to 'cloud-clock'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'cloud-clock'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'cloud-clock'.");
    }
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'cloud-clock'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'cloud-clock'.");
    }
    if (typeof this['kotlin-wrappers-kotlin-react-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'cloud-clock'. Its dependency 'kotlin-wrappers-kotlin-react-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-js-ir' is loaded prior to 'cloud-clock'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'cloud-clock'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'cloud-clock'.");
    }
    if (typeof this['kotlin-wrappers-kotlin-react-dom-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'cloud-clock'. Its dependency 'kotlin-wrappers-kotlin-react-dom-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-js-ir' is loaded prior to 'cloud-clock'.");
    }
    if (typeof this['Kotlin-DateTime-library-kotlinx-datetime-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'cloud-clock'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime-js-ir' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime-js-ir' is loaded prior to 'cloud-clock'.");
    }
    root['cloud-clock'] = factory(typeof this['cloud-clock'] === 'undefined' ? {} : this['cloud-clock'], this['react-dom/client'], this['react-router-dom'], this['react-router'], react, this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['ktor-ktor-client-content-negotiation-js-ir'], this['ktor-ktor-serialization-kotlinx-json-js-ir'], this['ktor-ktor-client-core-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-utils-js-ir'], this['kotlin-wrappers-kotlin-react-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-wrappers-kotlin-react-dom-js-ir'], this['Kotlin-DateTime-library-kotlinx-datetime-js-ir']);
  }
}(this, function (_, $module$react_dom_client_y5z5eu, $module$react_router_dom_s6xi74, $module$react_router_h6p15h, $module$react, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_io_ktor_ktor_client_content_negotiation, kotlin_io_ktor_ktor_serialization_kotlinx_json, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom, kotlin_org_jetbrains_kotlinx_kotlinx_datetime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var createRoot = $module$react_dom_client_y5z5eu.createRoot;
  var BrowserRouter = $module$react_router_dom_s6xi74.BrowserRouter;
  var Routes = $module$react_router_h6p15h.Routes;
  var Route = $module$react_router_h6p15h.Route;
  var useState = $module$react.useState;
  var Outlet = $module$react_router_h6p15h.Outlet;
  var objectMeta = kotlin_kotlin.$_$.c9;
  var setMetadataFor = kotlin_kotlin.$_$.d9;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var Unit_getInstance = kotlin_kotlin.$_$.b4;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.kb;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var getStringHashCode = kotlin_kotlin.$_$.h8;
  var classMeta = kotlin_kotlin.$_$.a8;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var Plugin_getInstance = kotlin_io_ktor_ktor_client_content_negotiation.$_$.a;
  var json$default = kotlin_io_ktor_ktor_serialization_kotlinx_json.$_$.a;
  var CoroutineImpl = kotlin_kotlin.$_$.o7;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.e;
  var url = kotlin_io_ktor_ktor_client_core.$_$.g;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.i;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.i;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.a7;
  var JsType_getInstance = kotlin_io_ktor_ktor_utils.$_$.c;
  var List = kotlin_kotlin.$_$.i4;
  var getKClass = kotlin_kotlin.$_$.e;
  var arrayOf = kotlin_kotlin.$_$.ub;
  var createKType = kotlin_kotlin.$_$.b;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var typeInfoImpl = kotlin_io_ktor_ktor_utils.$_$.j;
  var isInterface = kotlin_kotlin.$_$.s8;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var contentType = kotlin_io_ktor_ktor_http.$_$.z;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.q;
  var EmptyContent_getInstance = kotlin_io_ktor_ktor_client_core.$_$.c;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.j;
  var FC = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.a;
  var create = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.b;
  var MainScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var ReactHTML_getInstance = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom.$_$.a;
  var emptyList = kotlin_kotlin.$_$.h5;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var KMutableProperty0 = kotlin_kotlin.$_$.s9;
  var THROW_ISE = kotlin_kotlin.$_$.lb;
  var getLocalDelegateReference = kotlin_kotlin.$_$.f8;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var toString = kotlin_kotlin.$_$.h9;
  var ensureNotNull = kotlin_kotlin.$_$.xb;
  var println = kotlin_kotlin.$_$.q7;
  var reversed = kotlin_kotlin.$_$.i6;
  var System_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(Employee, 'Employee', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance}, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_0, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(TimeEvent, 'TimeEvent', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance_0}, []);
  setMetadataFor($getEventsCOROUTINE$0, '$getEventsCOROUTINE$0', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($getEmployeesCOROUTINE$1, '$getEmployeesCOROUTINE$1', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($postEventCOROUTINE$2, '$postEventCOROUTINE$2', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(logTable$lambda$slambda, 'logTable$lambda$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(ClockPage$lambda$slambda, 'ClockPage$lambda$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(ClockPage$lambda$lambda$slambda, 'ClockPage$lambda$lambda$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($LogEventCOROUTINE$4, '$LogEventCOROUTINE$4', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  //endregion
  function Companion() {
    Companion_instance = this;
    this.m3l_1 = '/employees';
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('Employee', this, 2);
    tmp0_serialDesc.w22('name', false);
    tmp0_serialDesc.w22('user_id', false);
    this.n3l_1 = tmp0_serialDesc;
  }
  $serializer.prototype.o1t = function () {
    return this.n3l_1;
  };
  $serializer.prototype.y22 = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance(), StringSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer.prototype.q1t = function (decoder) {
    var tmp0_desc = this.n3l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.j1w(tmp0_desc);
    if (tmp6_input.x1w()) {
      tmp4_local0 = tmp6_input.t1w(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.t1w(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.y1w(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.t1w(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.t1w(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.k1w(tmp0_desc);
    return Employee_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer.prototype.o3l = function (encoder, value) {
    var tmp0_desc = this.n3l_1;
    var tmp1_output = encoder.j1w(tmp0_desc);
    tmp1_output.v1x(tmp0_desc, 0, value.p3l_1);
    tmp1_output.v1x(tmp0_desc, 1, value.q3l_1);
    tmp1_output.k1w(tmp0_desc);
  };
  $serializer.prototype.p1t = function (encoder, value) {
    return this.o3l(encoder, value instanceof Employee ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function Employee_init_$Init$(seen1, name, user_id, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance().n3l_1);
    }
    $this.p3l_1 = name;
    $this.q3l_1 = user_id;
    return $this;
  }
  function Employee_init_$Create$(seen1, name, user_id, serializationConstructorMarker) {
    return Employee_init_$Init$(seen1, name, user_id, serializationConstructorMarker, Object.create(Employee.prototype));
  }
  function Employee(name, user_id) {
    Companion_getInstance_0();
    this.p3l_1 = name;
    this.q3l_1 = user_id;
  }
  Employee.prototype.toString = function () {
    return 'Employee(name=' + this.p3l_1 + ', user_id=' + this.q3l_1 + ')';
  };
  Employee.prototype.hashCode = function () {
    var result = getStringHashCode(this.p3l_1);
    result = imul(result, 31) + getStringHashCode(this.q3l_1) | 0;
    return result;
  };
  Employee.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Employee))
      return false;
    var tmp0_other_with_cast = other instanceof Employee ? other : THROW_CCE();
    if (!(this.p3l_1 === tmp0_other_with_cast.p3l_1))
      return false;
    if (!(this.q3l_1 === tmp0_other_with_cast.q3l_1))
      return false;
    return true;
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.r3l_1 = '/eventlog';
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('TimeEvent', this, 3);
    tmp0_serialDesc.w22('evt_id', false);
    tmp0_serialDesc.w22('eventType', false);
    tmp0_serialDesc.w22('dateTime', false);
    this.s3l_1 = tmp0_serialDesc;
  }
  $serializer_0.prototype.o1t = function () {
    return this.s3l_1;
  };
  $serializer_0.prototype.y22 = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance(), IntSerializer_getInstance(), StringSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_0.prototype.q1t = function (decoder) {
    var tmp0_desc = this.s3l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = null;
    var tmp7_input = decoder.j1w(tmp0_desc);
    if (tmp7_input.x1w()) {
      tmp4_local0 = tmp7_input.t1w(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.o1w(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.t1w(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.y1w(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.t1w(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.o1w(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.t1w(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.k1w(tmp0_desc);
    return TimeEvent_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  $serializer_0.prototype.t3l = function (encoder, value) {
    var tmp0_desc = this.s3l_1;
    var tmp1_output = encoder.j1w(tmp0_desc);
    tmp1_output.v1x(tmp0_desc, 0, value.u3l_1);
    tmp1_output.q1x(tmp0_desc, 1, value.v3l_1);
    tmp1_output.v1x(tmp0_desc, 2, value.w3l_1);
    tmp1_output.k1w(tmp0_desc);
  };
  $serializer_0.prototype.p1t = function (encoder, value) {
    return this.t3l(encoder, value instanceof TimeEvent ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function TimeEvent_init_$Init$(seen1, evt_id, eventType, dateTime, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen1))) {
      throwMissingFieldException(seen1, 7, $serializer_getInstance_0().s3l_1);
    }
    $this.u3l_1 = evt_id;
    $this.v3l_1 = eventType;
    $this.w3l_1 = dateTime;
    return $this;
  }
  function TimeEvent_init_$Create$(seen1, evt_id, eventType, dateTime, serializationConstructorMarker) {
    return TimeEvent_init_$Init$(seen1, evt_id, eventType, dateTime, serializationConstructorMarker, Object.create(TimeEvent.prototype));
  }
  function TimeEvent(evt_id, eventType, dateTime) {
    Companion_getInstance_1();
    this.u3l_1 = evt_id;
    this.v3l_1 = eventType;
    this.w3l_1 = dateTime;
  }
  TimeEvent.prototype.toString = function () {
    return 'TimeEvent(evt_id=' + this.u3l_1 + ', eventType=' + this.v3l_1 + ', dateTime=' + this.w3l_1 + ')';
  };
  TimeEvent.prototype.hashCode = function () {
    var result = getStringHashCode(this.u3l_1);
    result = imul(result, 31) + this.v3l_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.w3l_1) | 0;
    return result;
  };
  TimeEvent.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TimeEvent))
      return false;
    var tmp0_other_with_cast = other instanceof TimeEvent ? other : THROW_CCE();
    if (!(this.u3l_1 === tmp0_other_with_cast.u3l_1))
      return false;
    if (!(this.v3l_1 === tmp0_other_with_cast.v3l_1))
      return false;
    if (!(this.w3l_1 === tmp0_other_with_cast.w3l_1))
      return false;
    return true;
  };
  function get_jsonClient() {
    init_properties_Api_kt_kz2996();
    return jsonClient;
  }
  var jsonClient;
  function getEvents($cont) {
    var tmp = new $getEventsCOROUTINE$0($cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  }
  function getEmployees($cont) {
    var tmp = new $getEmployeesCOROUTINE$1($cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  }
  function postEvent(timeEvent, $cont) {
    var tmp = new $postEventCOROUTINE$2(timeEvent, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  }
  function jsonClient$lambda($this$HttpClient) {
    init_properties_Api_kt_kz2996();
    var tmp = Plugin_getInstance();
    $this$HttpClient.d2p(tmp, jsonClient$lambda$lambda);
    return Unit_getInstance();
  }
  function jsonClient$lambda$lambda($this$install) {
    init_properties_Api_kt_kz2996();
    json$default($this$install, null, null, 3, null);
    return Unit_getInstance();
  }
  function $getEventsCOROUTINE$0(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  $getEventsCOROUTINE$0.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 3;
            var tmp_0 = this;
            tmp_0.f3m_1 = get_jsonClient();
            var tmp_1 = this;
            Companion_getInstance_1();
            tmp_1.g3m_1 = '/eventlog';
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.g3m_1);
            ;
            tmp_2.h3m_1 = tmp0_apply;
            this.h3m_1.x2n_1 = Companion_getInstance().d1n_1;
            this.oe_1 = 1;
            suspendResult = (new HttpStatement(this.h3m_1, this.f3m_1)).q3d(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.i3m_1 = suspendResult;
            this.oe_1 = 2;
            var tmp_3 = this.i3m_1.e2r();
            var tmp_4 = JsType_getInstance();
            var tmp_5 = getKClass(List);
            var tmp_6;
            try {
              tmp_6 = createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(TimeEvent), arrayOf([]), false))]), false);
            } catch ($p) {
              var tmp_7;
              if ($p instanceof Error) {
                tmp_7 = null;
              } else {
                throw $p;
              }
              tmp_6 = tmp_7;
            }

            suspendResult = tmp_3.h2q(typeInfoImpl(tmp_4, tmp_5, tmp_6), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return isInterface(suspendResult, List) ? suspendResult : THROW_CCE();
          case 3:
            throw this.re_1;
        }
      } catch ($p) {
        if (this.pe_1 === 3) {
          throw $p;
        } else {
          this.oe_1 = this.pe_1;
          this.re_1 = $p;
        }
      }
     while (true);
  };
  function $getEmployeesCOROUTINE$1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  $getEmployeesCOROUTINE$1.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 3;
            var tmp_0 = this;
            tmp_0.r3m_1 = get_jsonClient();
            var tmp_1 = this;
            Companion_getInstance_0();
            tmp_1.s3m_1 = '/employees';
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.s3m_1);
            ;
            tmp_2.t3m_1 = tmp0_apply;
            this.t3m_1.x2n_1 = Companion_getInstance().d1n_1;
            this.oe_1 = 1;
            suspendResult = (new HttpStatement(this.t3m_1, this.r3m_1)).q3d(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.u3m_1 = suspendResult;
            this.oe_1 = 2;
            var tmp_3 = this.u3m_1.e2r();
            var tmp_4 = JsType_getInstance();
            var tmp_5 = getKClass(List);
            var tmp_6;
            try {
              tmp_6 = createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Employee), arrayOf([]), false))]), false);
            } catch ($p) {
              var tmp_7;
              if ($p instanceof Error) {
                tmp_7 = null;
              } else {
                throw $p;
              }
              tmp_6 = tmp_7;
            }

            suspendResult = tmp_3.h2q(typeInfoImpl(tmp_4, tmp_5, tmp_6), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return isInterface(suspendResult, List) ? suspendResult : THROW_CCE();
          case 3:
            throw this.re_1;
        }
      } catch ($p) {
        if (this.pe_1 === 3) {
          throw $p;
        } else {
          this.oe_1 = this.pe_1;
          this.re_1 = $p;
        }
      }
     while (true);
  };
  function $postEventCOROUTINE$2(timeEvent, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d3n_1 = timeEvent;
  }
  $postEventCOROUTINE$2.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 2;
            var tmp_0 = this;
            tmp_0.e3n_1 = get_jsonClient();
            var tmp_1 = this;
            Companion_getInstance_1();
            tmp_1.f3n_1 = '/eventlog';
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.f3n_1);
            contentType(tmp0_apply, Application_getInstance().m1h_1);
            var tmp0_subject = this.d3n_1;
            if (tmp0_subject == null) {
              tmp0_apply.z2n_1 = EmptyContent_getInstance();
              tmp0_apply.v2t(null);
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.z2n_1 = this.d3n_1;
                tmp0_apply.v2t(null);
              } else {
                tmp0_apply.z2n_1 = this.d3n_1;
                var tmp_3 = JsType_getInstance();
                var tmp_4 = getKClass(TimeEvent);
                var tmp_5;
                try {
                  tmp_5 = createKType(getKClass(TimeEvent), arrayOf([]), false);
                } catch ($p) {
                  var tmp_6;
                  if ($p instanceof Error) {
                    tmp_6 = null;
                  } else {
                    throw $p;
                  }
                  tmp_5 = tmp_6;
                }
                tmp0_apply.v2t(typeInfoImpl(tmp_3, tmp_4, tmp_5));
              }
            }

            tmp_2.g3n_1 = tmp0_apply;
            this.g3n_1.x2n_1 = Companion_getInstance().e1n_1;
            this.oe_1 = 1;
            suspendResult = (new HttpStatement(this.g3n_1, this.e3n_1)).q3d(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            return Unit_getInstance();
          case 2:
            throw this.re_1;
        }
      } catch ($p) {
        if (this.pe_1 === 2) {
          throw $p;
        } else {
          this.oe_1 = this.pe_1;
          this.re_1 = $p;
        }
      }
     while (true);
  };
  var properties_initialized_Api_kt_kagxpy;
  function init_properties_Api_kt_kz2996() {
    if (properties_initialized_Api_kt_kagxpy) {
    } else {
      properties_initialized_Api_kt_kagxpy = true;
      jsonClient = HttpClient(jsonClient$lambda);
    }
  }
  var container;
  function get_scope() {
    init_properties_Client_kt_ugefrl();
    return scope;
  }
  var scope;
  function get_ENTER() {
    return ENTER;
  }
  var ENTER;
  function get_EXIT() {
    return EXIT;
  }
  var EXIT;
  function App() {
    init_properties_Client_kt_ugefrl();
    var router = FC(App$lambda);
    return router;
  }
  function main() {
    init_properties_Client_kt_ugefrl();
    var tmp0_safe_receiver = document.getElementById('root');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'main.<anonymous>' call
      tmp$ret$0 = createRoot(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var root = tmp;
    if (!(root == null)) {
      root.render(create(App()));
    }
  }
  function App$lambda($this$FC, it) {
    init_properties_Client_kt_ugefrl();
    var tmp = BrowserRouter;
    $this$FC.l3l(tmp, App$lambda$lambda);
    return Unit_getInstance();
  }
  function App$lambda$lambda($this$invoke) {
    init_properties_Client_kt_ugefrl();
    var tmp = Routes;
    $this$invoke.l3l(tmp, App$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda($this$invoke) {
    init_properties_Client_kt_ugefrl();
    var tmp = Route;
    $this$invoke.l3l(tmp, App$lambda$lambda$lambda$lambda);
    var tmp_0 = Route;
    $this$invoke.l3l(tmp_0, App$lambda$lambda$lambda$lambda_0);
    var tmp_1 = Route;
    $this$invoke.l3l(tmp_1, App$lambda$lambda$lambda$lambda_1);
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda$lambda($this$invoke) {
    init_properties_Client_kt_ugefrl();
    $this$invoke.path = 'clock';
    $this$invoke.element = create(get_ClockPage());
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda$lambda_0($this$invoke) {
    init_properties_Client_kt_ugefrl();
    $this$invoke.path = 'admin';
    $this$invoke.element = create(get_adminOutlet());
    var tmp = Route;
    $this$invoke.l3l(tmp, App$lambda$lambda$lambda$lambda$lambda);
    var tmp_0 = Route;
    $this$invoke.l3l(tmp_0, App$lambda$lambda$lambda$lambda$lambda_0);
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda$lambda$lambda($this$invoke) {
    init_properties_Client_kt_ugefrl();
    $this$invoke.index = true;
    $this$invoke.element = create(get_logTable());
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda$lambda$lambda_0($this$invoke) {
    init_properties_Client_kt_ugefrl();
    $this$invoke.path = 'employees';
    $this$invoke.element = create(get_employeeManagement());
    return Unit_getInstance();
  }
  function App$lambda$lambda$lambda$lambda_1($this$invoke) {
    init_properties_Client_kt_ugefrl();
    $this$invoke.path = '*';
    $this$invoke.element = create(get_pageNotFound());
    return Unit_getInstance();
  }
  var properties_initialized_Client_kt_4npn83;
  function init_properties_Client_kt_ugefrl() {
    if (properties_initialized_Client_kt_4npn83) {
    } else {
      properties_initialized_Client_kt_4npn83 = true;
      container = null;
      scope = MainScope();
    }
  }
  function get_employeeManagement() {
    init_properties_AdminEmpManagement_kt_zf3iyq();
    return employeeManagement;
  }
  var employeeManagement;
  function employeeManagement$lambda($this$FC, it) {
    init_properties_AdminEmpManagement_kt_zf3iyq();
    var tmp$ret$3;
    // Inline function 'react.dom.html.ReactHTML.div' call
    var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
    var tmp$ret$2;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'div';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp = tmp$ret$3;
    $this$FC.l3l(tmp, employeeManagement$lambda$lambda);
    return Unit_getInstance();
  }
  function employeeManagement$lambda$lambda($this$invoke) {
    init_properties_AdminEmpManagement_kt_zf3iyq();
    var tmp$ret$2;
    // Inline function 'csstype.ClassName' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'container';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    $this$invoke.className = tmp$ret$2;
    $this$invoke.j3l('lmao');
    return Unit_getInstance();
  }
  var properties_initialized_AdminEmpManagement_kt_nhxyu6;
  function init_properties_AdminEmpManagement_kt_zf3iyq() {
    if (properties_initialized_AdminEmpManagement_kt_nhxyu6) {
    } else {
      properties_initialized_AdminEmpManagement_kt_nhxyu6 = true;
      employeeManagement = FC(employeeManagement$lambda);
    }
  }
  function get_logTable() {
    init_properties_AdminHome_kt_tku6p2();
    return logTable;
  }
  var logTable;
  function getName(employees, id) {
    init_properties_AdminHome_kt_tku6p2();
    var tmp0_iterator = employees.j();
    while (tmp0_iterator.k()) {
      var employee = tmp0_iterator.l();
      if (employee.q3l_1 === id) {
        return employee.p3l_1;
      }
    }
    return '?';
  }
  function logTable$lambda($this$FC, props) {
    init_properties_AdminHome_kt_tku6p2();
    var employees$delegate = useState(emptyList());
    var events$delegate = useState(emptyList());
    var tmp = get_scope();
    launch$default(tmp, null, null, logTable$lambda$slambda_0(employees$delegate, events$delegate, null), 3, null);
    var tmp$ret$3;
    // Inline function 'react.dom.html.ReactHTML.div' call
    var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
    var tmp$ret$2;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'div';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp_0 = tmp$ret$3;
    $this$FC.l3l(tmp_0, logTable$lambda$lambda(events$delegate, employees$delegate));
    return Unit_getInstance();
  }
  function invoke$lambda($employees$delegate) {
    init_properties_AdminHome_kt_tku6p2();
    var tmp$ret$1;
    // Inline function 'react.StateInstance.getValue' call
    var tmp0_getValue = getLocalDelegateReference('employees', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $employees$delegate;
    tmp$ret$1 = tmp$ret$0[0];
    return tmp$ret$1;
  }
  function invoke$lambda_0($employees$delegate, value) {
    init_properties_AdminHome_kt_tku6p2();
    var tmp0_setValue = getLocalDelegateReference('employees', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $employees$delegate;
    return tmp$ret$0[1](value);
  }
  function invoke$lambda_1($events$delegate) {
    init_properties_AdminHome_kt_tku6p2();
    var tmp$ret$1;
    // Inline function 'react.StateInstance.getValue' call
    var tmp0_getValue = getLocalDelegateReference('events', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $events$delegate;
    tmp$ret$1 = tmp$ret$0[0];
    return tmp$ret$1;
  }
  function invoke$lambda_2($events$delegate, value) {
    init_properties_AdminHome_kt_tku6p2();
    var tmp0_setValue = getLocalDelegateReference('events', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $events$delegate;
    return tmp$ret$0[1](value);
  }
  function logTable$lambda$slambda($employees$delegate, $events$delegate, resultContinuation) {
    this.p3n_1 = $employees$delegate;
    this.q3n_1 = $events$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  logTable$lambda$slambda.prototype.l14 = function ($this$launch, $cont) {
    var tmp = this.m14($this$launch, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  logTable$lambda$slambda.prototype.jf = function (p1, $cont) {
    return this.l14((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  logTable$lambda$slambda.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 3;
            this.oe_1 = 1;
            suspendResult = getEmployees(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.s3n_1 = suspendResult;
            invoke$lambda_0(this.p3n_1, this.s3n_1);
            this.oe_1 = 2;
            suspendResult = getEvents(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            invoke$lambda_2(this.q3n_1, ARGUMENT);
            return Unit_getInstance();
          case 3:
            throw this.re_1;
        }
      } catch ($p) {
        if (this.pe_1 === 3) {
          throw $p;
        } else {
          this.oe_1 = this.pe_1;
          this.re_1 = $p;
        }
      }
     while (true);
  };
  logTable$lambda$slambda.prototype.m14 = function ($this$launch, completion) {
    var i = new logTable$lambda$slambda(this.p3n_1, this.q3n_1, completion);
    i.r3n_1 = $this$launch;
    return i;
  };
  function logTable$lambda$slambda_0($employees$delegate, $events$delegate, resultContinuation) {
    var i = new logTable$lambda$slambda($employees$delegate, $events$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.l14($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function logTable$lambda$lambda$lambda$lambda($this$invoke) {
    init_properties_AdminHome_kt_tku6p2();
    var tmp$ret$3;
    // Inline function 'react.dom.html.ReactHTML.tr' call
    var tmp0__get_tr__p4dsj1 = ReactHTML_getInstance();
    var tmp$ret$2;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'tr';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp = tmp$ret$3;
    $this$invoke.l3l(tmp, logTable$lambda$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function logTable$lambda$lambda$lambda$lambda$lambda($this$invoke) {
    init_properties_AdminHome_kt_tku6p2();
    var tmp$ret$3;
    // Inline function 'react.dom.html.ReactHTML.th' call
    var tmp0__get_th__p4dsrn = ReactHTML_getInstance();
    var tmp$ret$2;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'th';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp = tmp$ret$3;
    $this$invoke.l3l(tmp, logTable$lambda$lambda$lambda$lambda$lambda$lambda);
    var tmp$ret$7;
    // Inline function 'react.dom.html.ReactHTML.th' call
    var tmp1__get_th__sddrk4 = ReactHTML_getInstance();
    var tmp$ret$6;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = 'th';
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    var tmp_0 = tmp$ret$7;
    $this$invoke.l3l(tmp_0, logTable$lambda$lambda$lambda$lambda$lambda$lambda_0);
    var tmp$ret$11;
    // Inline function 'react.dom.html.ReactHTML.th' call
    var tmp2__get_th__vmdqcl = ReactHTML_getInstance();
    var tmp$ret$10;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$9;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$8;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$8 = 'th';
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    tmp$ret$11 = tmp$ret$10;
    var tmp_1 = tmp$ret$11;
    $this$invoke.l3l(tmp_1, logTable$lambda$lambda$lambda$lambda$lambda$lambda_1);
    var tmp$ret$15;
    // Inline function 'react.dom.html.ReactHTML.th' call
    var tmp3__get_th__yvdp52 = ReactHTML_getInstance();
    var tmp$ret$14;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$13;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$12;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$12 = 'th';
    tmp$ret$13 = tmp$ret$12;
    tmp$ret$14 = tmp$ret$13;
    tmp$ret$15 = tmp$ret$14;
    var tmp_2 = tmp$ret$15;
    $this$invoke.l3l(tmp_2, logTable$lambda$lambda$lambda$lambda$lambda$lambda_2);
    return Unit_getInstance();
  }
  function logTable$lambda$lambda$lambda$lambda$lambda$lambda($this$invoke) {
    init_properties_AdminHome_kt_tku6p2();
    $this$invoke.j3l('ID');
    return Unit_getInstance();
  }
  function logTable$lambda$lambda$lambda$lambda$lambda$lambda_0($this$invoke) {
    init_properties_AdminHome_kt_tku6p2();
    $this$invoke.j3l('Name');
    return Unit_getInstance();
  }
  function logTable$lambda$lambda$lambda$lambda$lambda$lambda_1($this$invoke) {
    init_properties_AdminHome_kt_tku6p2();
    $this$invoke.j3l('Event');
    return Unit_getInstance();
  }
  function logTable$lambda$lambda$lambda$lambda$lambda$lambda_2($this$invoke) {
    init_properties_AdminHome_kt_tku6p2();
    $this$invoke.j3l('Timestamp');
    return Unit_getInstance();
  }
  function logTable$lambda$lambda$lambda$lambda$lambda$lambda_3($event) {
    return function ($this$invoke) {
      $this$invoke.j3l(toString($event.u3l_1));
      return Unit_getInstance();
    };
  }
  function logTable$lambda$lambda$lambda$lambda$lambda$lambda_4($event, $employees$delegate) {
    return function ($this$invoke) {
      $this$invoke.j3l(getName(invoke$lambda($employees$delegate), $event.u3l_1));
      return Unit_getInstance();
    };
  }
  function logTable$lambda$lambda$lambda$lambda$lambda$lambda_5($event) {
    return function ($this$invoke) {
      var tmp0_subject = $event.v3l_1;
      $this$invoke.j3l(tmp0_subject === get_ENTER() ? 'In' : tmp0_subject === get_EXIT() ? 'Out' : '?');
      return Unit_getInstance();
    };
  }
  function logTable$lambda$lambda$lambda$lambda$lambda$lambda_6($event) {
    return function ($this$invoke) {
      $this$invoke.j3l(toString($event.w3l_1));
      return Unit_getInstance();
    };
  }
  function logTable$lambda$lambda$lambda$lambda$lambda_0($event, $employees$delegate) {
    return function ($this$invoke) {
      var tmp$ret$3;
      // Inline function 'react.dom.html.ReactHTML.td' call
      var tmp0__get_td__p4dsv3 = ReactHTML_getInstance();
      var tmp$ret$2;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'td';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp = tmp$ret$3;
      $this$invoke.l3l(tmp, logTable$lambda$lambda$lambda$lambda$lambda$lambda_3($event));
      var tmp$ret$7;
      // Inline function 'react.dom.html.ReactHTML.td' call
      var tmp1__get_td__sddrnk = ReactHTML_getInstance();
      var tmp$ret$6;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$5;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = 'td';
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      tmp$ret$7 = tmp$ret$6;
      var tmp_0 = tmp$ret$7;
      $this$invoke.l3l(tmp_0, logTable$lambda$lambda$lambda$lambda$lambda$lambda_4($event, $employees$delegate));
      var tmp$ret$11;
      // Inline function 'react.dom.html.ReactHTML.td' call
      var tmp2__get_td__vmdqg1 = ReactHTML_getInstance();
      var tmp$ret$10;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$9;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$8 = 'td';
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      tmp$ret$11 = tmp$ret$10;
      var tmp_1 = tmp$ret$11;
      $this$invoke.l3l(tmp_1, logTable$lambda$lambda$lambda$lambda$lambda$lambda_5($event));
      var tmp$ret$15;
      // Inline function 'react.dom.html.ReactHTML.td' call
      var tmp3__get_td__yvdp8i = ReactHTML_getInstance();
      var tmp$ret$14;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$13;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$12;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$12 = 'td';
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      tmp$ret$15 = tmp$ret$14;
      var tmp_2 = tmp$ret$15;
      $this$invoke.l3l(tmp_2, logTable$lambda$lambda$lambda$lambda$lambda$lambda_6($event));
      return Unit_getInstance();
    };
  }
  function logTable$lambda$lambda$lambda$lambda_0($events$delegate, $employees$delegate) {
    return function ($this$invoke) {
      var tmp0_iterator = invoke$lambda_1($events$delegate).j();
      while (tmp0_iterator.k()) {
        var event = tmp0_iterator.l();
        var tmp$ret$3;
        // Inline function 'react.dom.html.ReactHTML.tr' call
        var tmp0__get_tr__p4dsj1 = ReactHTML_getInstance();
        var tmp$ret$2;
        // Inline function 'react.IntrinsicType' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = 'tr';
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
        var tmp = tmp$ret$3;
        $this$invoke.l3l(tmp, logTable$lambda$lambda$lambda$lambda$lambda_0(event, $employees$delegate));
      }
      return Unit_getInstance();
    };
  }
  function logTable$lambda$lambda$lambda($events$delegate, $employees$delegate) {
    return function ($this$invoke) {
      var tmp$ret$3;
      // Inline function 'react.dom.html.ReactHTML.thead' call
      var tmp0__get_thead__kno18p = ReactHTML_getInstance();
      var tmp$ret$2;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'thead';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var tmp = tmp$ret$3;
      $this$invoke.l3l(tmp, logTable$lambda$lambda$lambda$lambda);
      var tmp$ret$7;
      // Inline function 'react.dom.html.ReactHTML.tbody' call
      var tmp1__get_tbody__plgzey = ReactHTML_getInstance();
      var tmp$ret$6;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$5;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = 'tbody';
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      tmp$ret$7 = tmp$ret$6;
      var tmp_0 = tmp$ret$7;
      $this$invoke.l3l(tmp_0, logTable$lambda$lambda$lambda$lambda_0($events$delegate, $employees$delegate));
      var tmp$ret$10;
      // Inline function 'csstype.ClassName' call
      var tmp$ret$9;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$8 = 'table';
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      $this$invoke.className = tmp$ret$10;
      $this$invoke.id = 'thetable';
      return Unit_getInstance();
    };
  }
  function logTable$lambda$lambda($events$delegate, $employees$delegate) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'csstype.ClassName' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'container';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      $this$invoke.className = tmp$ret$2;
      var tmp$ret$6;
      // Inline function 'react.dom.html.ReactHTML.table' call
      var tmp0__get_table__krka6b = ReactHTML_getInstance();
      var tmp$ret$5;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = 'table';
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      var tmp = tmp$ret$6;
      $this$invoke.l3l(tmp, logTable$lambda$lambda$lambda($events$delegate, $employees$delegate));
      return Unit_getInstance();
    };
  }
  var properties_initialized_AdminHome_kt_on70hq;
  function init_properties_AdminHome_kt_tku6p2() {
    if (properties_initialized_AdminHome_kt_on70hq) {
    } else {
      properties_initialized_AdminHome_kt_on70hq = true;
      logTable = FC(logTable$lambda);
    }
  }
  function get_adminOutlet() {
    init_properties_AdminOut_kt_9dv7t1();
    return adminOutlet;
  }
  var adminOutlet;
  function adminOutlet$lambda($this$FC, it) {
    init_properties_AdminOut_kt_9dv7t1();
    $this$FC.k3l(Outlet);
    return Unit_getInstance();
  }
  var properties_initialized_AdminOut_kt_49dfz5;
  function init_properties_AdminOut_kt_9dv7t1() {
    if (properties_initialized_AdminOut_kt_49dfz5) {
    } else {
      properties_initialized_AdminOut_kt_49dfz5 = true;
      adminOutlet = FC(adminOutlet$lambda);
    }
  }
  function get_ClockPage() {
    init_properties_ClockPage_kt_6ta38p();
    return ClockPage;
  }
  var ClockPage;
  function LogEvent(id, employees, events, $cont) {
    var tmp = new $LogEventCOROUTINE$4(id, employees, events, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  }
  function ClockPage$lambda($this$FC, props) {
    init_properties_ClockPage_kt_6ta38p();
    var tmp0_container = useState('');
    var tmp$ret$1;
    // Inline function 'react.StateInstance.component1' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_container;
    tmp$ret$1 = tmp$ret$0[0];
    var idText = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'react.StateInstance.component2' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp0_container;
    tmp$ret$3 = tmp$ret$2[1];
    var otherText = tmp$ret$3;
    var employees$delegate = useState(emptyList());
    var events$delegate = useState(emptyList());
    var tmp = get_scope();
    launch$default(tmp, null, null, ClockPage$lambda$slambda_0(employees$delegate, events$delegate, null), 3, null);
    var submitHandler = ClockPage$lambda$lambda(idText, employees$delegate, events$delegate);
    var changeHandler = ClockPage$lambda$lambda_0(otherText);
    var tmp$ret$7;
    // Inline function 'react.dom.html.ReactHTML.form' call
    var tmp0__get_form__8ae7m5 = ReactHTML_getInstance();
    var tmp$ret$6;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = 'form';
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    tmp$ret$7 = tmp$ret$6;
    var tmp_0 = tmp$ret$7;
    $this$FC.l3l(tmp_0, ClockPage$lambda$lambda_1(submitHandler, changeHandler, idText));
    var tmp$ret$11;
    // Inline function 'react.dom.html.ReactHTML.div' call
    var tmp1__get_div__r5s89x = ReactHTML_getInstance();
    var tmp$ret$10;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$9;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$8;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$8 = 'div';
    tmp$ret$9 = tmp$ret$8;
    tmp$ret$10 = tmp$ret$9;
    tmp$ret$11 = tmp$ret$10;
    var tmp_1 = tmp$ret$11;
    $this$FC.l3l(tmp_1, ClockPage$lambda$lambda_2);
    return Unit_getInstance();
  }
  function invoke$lambda_3($employees$delegate) {
    init_properties_ClockPage_kt_6ta38p();
    var tmp$ret$1;
    // Inline function 'react.StateInstance.getValue' call
    var tmp0_getValue = getLocalDelegateReference('employees', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $employees$delegate;
    tmp$ret$1 = tmp$ret$0[0];
    return tmp$ret$1;
  }
  function invoke$lambda_4($employees$delegate, value) {
    init_properties_ClockPage_kt_6ta38p();
    var tmp0_setValue = getLocalDelegateReference('employees', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $employees$delegate;
    return tmp$ret$0[1](value);
  }
  function invoke$lambda_5($events$delegate) {
    init_properties_ClockPage_kt_6ta38p();
    var tmp$ret$1;
    // Inline function 'react.StateInstance.getValue' call
    var tmp0_getValue = getLocalDelegateReference('events', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $events$delegate;
    tmp$ret$1 = tmp$ret$0[0];
    return tmp$ret$1;
  }
  function invoke$lambda_6($events$delegate, value) {
    init_properties_ClockPage_kt_6ta38p();
    var tmp0_setValue = getLocalDelegateReference('events', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $events$delegate;
    return tmp$ret$0[1](value);
  }
  function ClockPage$lambda$slambda($employees$delegate, $events$delegate, resultContinuation) {
    this.p3o_1 = $employees$delegate;
    this.q3o_1 = $events$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  ClockPage$lambda$slambda.prototype.l14 = function ($this$launch, $cont) {
    var tmp = this.m14($this$launch, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  ClockPage$lambda$slambda.prototype.jf = function (p1, $cont) {
    return this.l14((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  ClockPage$lambda$slambda.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 3;
            this.oe_1 = 1;
            suspendResult = getEmployees(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.s3o_1 = suspendResult;
            invoke$lambda_4(this.p3o_1, this.s3o_1);
            this.oe_1 = 2;
            suspendResult = getEvents(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            invoke$lambda_6(this.q3o_1, ARGUMENT);
            return Unit_getInstance();
          case 3:
            throw this.re_1;
        }
      } catch ($p) {
        if (this.pe_1 === 3) {
          throw $p;
        } else {
          this.oe_1 = this.pe_1;
          this.re_1 = $p;
        }
      }
     while (true);
  };
  ClockPage$lambda$slambda.prototype.m14 = function ($this$launch, completion) {
    var i = new ClockPage$lambda$slambda(this.p3o_1, this.q3o_1, completion);
    i.r3o_1 = $this$launch;
    return i;
  };
  function ClockPage$lambda$slambda_0($employees$delegate, $events$delegate, resultContinuation) {
    var i = new ClockPage$lambda$slambda($employees$delegate, $events$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.l14($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ClockPage$lambda$lambda$slambda($success, $idText, $message, $employees$delegate, $events$delegate, resultContinuation) {
    this.b3p_1 = $success;
    this.c3p_1 = $idText;
    this.d3p_1 = $message;
    this.e3p_1 = $employees$delegate;
    this.f3p_1 = $events$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  ClockPage$lambda$lambda$slambda.prototype.l14 = function ($this$launch, $cont) {
    var tmp = this.m14($this$launch, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  ClockPage$lambda$lambda$slambda.prototype.jf = function (p1, $cont) {
    return this.l14((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  ClockPage$lambda$lambda$slambda.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 2;
            this.oe_1 = 1;
            suspendResult = LogEvent(this.c3p_1, invoke$lambda_3(this.e3p_1), invoke$lambda_5(this.f3p_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.b3p_1._v = ARGUMENT;
            if (this.b3p_1._v) {
              var name = '';
              var tmp0_iterator = invoke$lambda_3(this.e3p_1).j();
              while (tmp0_iterator.k()) {
                var employee = tmp0_iterator.l();
                if (employee.q3l_1 === this.c3p_1) {
                  name = employee.p3l_1;
                }
              }
              this.d3p_1._v.innerHTML = '<p>Thank you, ' + name + '!<\/p>';
            } else {
              this.d3p_1._v.innerHTML = '<p>No employee with that ID exists. If the problem persists, please see your supervisor.<\/p>';
            }

            return Unit_getInstance();
          case 2:
            throw this.re_1;
        }
      } catch ($p) {
        if (this.pe_1 === 2) {
          throw $p;
        } else {
          this.oe_1 = this.pe_1;
          this.re_1 = $p;
        }
      }
     while (true);
  };
  ClockPage$lambda$lambda$slambda.prototype.m14 = function ($this$launch, completion) {
    var i = new ClockPage$lambda$lambda$slambda(this.b3p_1, this.c3p_1, this.d3p_1, this.e3p_1, this.f3p_1, completion);
    i.g3p_1 = $this$launch;
    return i;
  };
  function ClockPage$lambda$lambda$slambda_0($success, $idText, $message, $employees$delegate, $events$delegate, resultContinuation) {
    var i = new ClockPage$lambda$lambda$slambda($success, $idText, $message, $employees$delegate, $events$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.l14($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ClockPage$lambda$lambda($idText, $employees$delegate, $events$delegate) {
    return function (it) {
      it.preventDefault();
      var message = {_v: ensureNotNull(document.getElementById('message'))};
      message._v.innerHTML = '';
      var tmp;
      if (typeof $idText === 'string') {
        var success = {_v: false};
        var tmp_0 = get_scope();
        launch$default(tmp_0, null, null, ClockPage$lambda$lambda$slambda_0(success, $idText, message, $employees$delegate, $events$delegate, null), 3, null);
        tmp = Unit_getInstance();
      } else {
        println('Long conversion failed.');
        message._v.innerHTML = '<p>Please enter a valid employee ID.<\/p>';
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ClockPage$lambda$lambda_0($otherText) {
    return function (it) {
      var tmp0_invoke = it.target.value;
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = $otherText;
      tmp$ret$0(tmp0_invoke);
      return Unit_getInstance();
    };
  }
  function ClockPage$lambda$lambda$lambda($this$invoke) {
    init_properties_ClockPage_kt_6ta38p();
    $this$invoke.htmlFor = 'empid';
    $this$invoke.j3l('Employee ID');
    return Unit_getInstance();
  }
  function ClockPage$lambda$lambda$lambda_0($changeHandler, $idText) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'csstype.ClassName' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'form-control form-control-lg';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      $this$invoke.className = tmp$ret$2;
      $this$invoke.placeholder = 'Employee ID';
      $this$invoke.id = 'empid';
      $this$invoke.onChange = $changeHandler;
      $this$invoke.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).text;
      $this$invoke.value = $idText;
      return Unit_getInstance();
    };
  }
  function ClockPage$lambda$lambda$lambda_1($this$invoke) {
    init_properties_ClockPage_kt_6ta38p();
    var tmp$ret$2;
    // Inline function 'csstype.ClassName' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'btn btn-primary';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    $this$invoke.className = tmp$ret$2;
    $this$invoke.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).submit;
    $this$invoke.value = 'Submit';
    return Unit_getInstance();
  }
  function ClockPage$lambda$lambda_1($submitHandler, $changeHandler, $idText) {
    return function ($this$invoke) {
      var tmp$ret$2;
      // Inline function 'csstype.ClassName' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = 'container';
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      $this$invoke.className = tmp$ret$2;
      $this$invoke.onSubmit = $submitHandler;
      var tmp$ret$6;
      // Inline function 'react.dom.html.ReactHTML.label' call
      var tmp0__get_label__ojxecp = ReactHTML_getInstance();
      var tmp$ret$5;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$4;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$3;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$3 = 'label';
      tmp$ret$4 = tmp$ret$3;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      var tmp = tmp$ret$6;
      $this$invoke.l3l(tmp, ClockPage$lambda$lambda$lambda);
      var tmp$ret$10;
      // Inline function 'react.dom.html.ReactHTML.input' call
      var tmp1__get_input__umcb5q = ReactHTML_getInstance();
      var tmp$ret$9;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$7;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$7 = 'input';
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp$ret$10 = tmp$ret$9;
      var tmp_0 = tmp$ret$10;
      $this$invoke.l3l(tmp_0, ClockPage$lambda$lambda$lambda_0($changeHandler, $idText));
      var tmp$ret$14;
      // Inline function 'react.dom.html.ReactHTML.input' call
      var tmp2__get_input__zh0yd9 = ReactHTML_getInstance();
      var tmp$ret$13;
      // Inline function 'react.IntrinsicType' call
      var tmp$ret$12;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$11;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$11 = 'input';
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      tmp$ret$14 = tmp$ret$13;
      var tmp_1 = tmp$ret$14;
      $this$invoke.l3l(tmp_1, ClockPage$lambda$lambda$lambda_1);
      return Unit_getInstance();
    };
  }
  function ClockPage$lambda$lambda_2($this$invoke) {
    init_properties_ClockPage_kt_6ta38p();
    $this$invoke.id = 'message';
    var tmp$ret$2;
    // Inline function 'csstype.ClassName' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'container';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    $this$invoke.className = tmp$ret$2;
    return Unit_getInstance();
  }
  function $LogEventCOROUTINE$4(id, employees, events, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b3o_1 = id;
    this.c3o_1 = employees;
    this.d3o_1 = events;
  }
  $LogEventCOROUTINE$4.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 2;
            this.e3o_1 = false;
            var tmp0_iterator = this.c3o_1.j();
            $l$loop: while (tmp0_iterator.k()) {
              var employee = tmp0_iterator.l();
              if (employee.q3l_1 === this.b3o_1) {
                this.e3o_1 = true;
                break $l$loop;
              }
            }

            if (!this.e3o_1) {
              return false;
            }

            this.f3o_1 = get_ENTER();
            var tmp1_iterator = reversed(this.d3o_1).j();
            $l$loop_0: while (tmp1_iterator.k()) {
              var lastEvent = tmp1_iterator.l();
              var lastId = lastEvent.u3l_1;
              if (this.b3o_1 === lastId) {
                if (lastEvent.v3l_1 === get_ENTER()) {
                  this.f3o_1 = get_EXIT();
                }
                break $l$loop_0;
              }
            }

            this.g3o_1 = System_getInstance().y3k().toString();
            this.oe_1 = 1;
            suspendResult = postEvent(new TimeEvent(this.b3o_1, this.f3o_1, this.g3o_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return true;
          case 2:
            throw this.re_1;
        }
      } catch ($p) {
        if (this.pe_1 === 2) {
          throw $p;
        } else {
          this.oe_1 = this.pe_1;
          this.re_1 = $p;
        }
      }
     while (true);
  };
  var properties_initialized_ClockPage_kt_9zsrjn;
  function init_properties_ClockPage_kt_6ta38p() {
    if (properties_initialized_ClockPage_kt_9zsrjn) {
    } else {
      properties_initialized_ClockPage_kt_9zsrjn = true;
      ClockPage = FC(ClockPage$lambda);
    }
  }
  function get_pageNotFound() {
    init_properties_notfound_kt_bwkoxh();
    return pageNotFound;
  }
  var pageNotFound;
  function pageNotFound$lambda($this$FC, it) {
    init_properties_notfound_kt_bwkoxh();
    var tmp$ret$3;
    // Inline function 'react.dom.html.ReactHTML.h1' call
    var tmp0__get_h1__p4e2zc = ReactHTML_getInstance();
    var tmp$ret$2;
    // Inline function 'react.IntrinsicType' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'h1';
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp = tmp$ret$3;
    $this$FC.l3l(tmp, pageNotFound$lambda$lambda);
    return Unit_getInstance();
  }
  function pageNotFound$lambda$lambda($this$invoke) {
    init_properties_notfound_kt_bwkoxh();
    $this$invoke.j3l('Page Not Found');
    return Unit_getInstance();
  }
  var properties_initialized_notfound_kt_6s2x3l;
  function init_properties_notfound_kt_bwkoxh() {
    if (properties_initialized_notfound_kt_6s2x3l) {
    } else {
      properties_initialized_notfound_kt_6s2x3l = true;
      pageNotFound = FC(pageNotFound$lambda);
    }
  }
  //region block: post-declaration
  $serializer.prototype.z22 = typeParametersSerializers;
  $serializer_0.prototype.z22 = typeParametersSerializers;
  //endregion
  //region block: init
  ENTER = 1;
  EXIT = 2;
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=cloud-clock.js.map
