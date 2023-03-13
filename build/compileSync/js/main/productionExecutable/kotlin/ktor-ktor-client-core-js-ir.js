(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-utils-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js', './ktor-ktor-events-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-websockets-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'), require('./ktor-ktor-events-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-websockets-js-ir.js'));
  else {
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-events-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-events-js-ir' was not found. Please, check whether 'ktor-ktor-events-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-websockets-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-websockets-js-ir' was not found. Please, check whether 'ktor-ktor-websockets-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    root['ktor-ktor-client-core-js-ir'] = factory(typeof this['ktor-ktor-client-core-js-ir'] === 'undefined' ? {} : this['ktor-ktor-client-core-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-utils-js-ir'], this['88b0986a7186d029-atomicfu-js-ir'], this['ktor-ktor-events-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-websockets-js-ir']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_kotlin, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_io_ktor_ktor_events, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_websockets) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var Unit_getInstance = kotlin_kotlin.$_$.b4;
  var CoroutineImpl = kotlin_kotlin.$_$.o7;
  var THROW_CCE = kotlin_kotlin.$_$.kb;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.f;
  var isObject = kotlin_kotlin.$_$.u8;
  var toString = kotlin_kotlin.$_$.h9;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.a7;
  var classMeta = kotlin_kotlin.$_$.a8;
  var setMetadataFor = kotlin_kotlin.$_$.d9;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var Attributes = kotlin_io_ktor_ktor_utils.$_$.l;
  var Events = kotlin_io_ktor_ktor_events.$_$.b;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.k;
  var Closeable = kotlin_io_ktor_ktor_io.$_$.x;
  var isInterface = kotlin_kotlin.$_$.s8;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var ensureNotNull = kotlin_kotlin.$_$.xb;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.d;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.g1;
  var objectMeta = kotlin_kotlin.$_$.c9;
  var instanceOf = kotlin_io_ktor_ktor_utils.$_$.i;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.gc;
  var IllegalStateException = kotlin_kotlin.$_$.fb;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.z1;
  var captureStack = kotlin_kotlin.$_$.u7;
  var UnsupportedOperationException = kotlin_kotlin.$_$.sb;
  var UnsupportedOperationException_init_$Init$ = kotlin_kotlin.$_$.j2;
  var flattenEntries = kotlin_io_ktor_ktor_utils.$_$.s;
  var joinToString$default = kotlin_kotlin.$_$.i;
  var trimMargin$default = kotlin_kotlin.$_$.u;
  var ByteReadChannel_0 = kotlin_io_ktor_ktor_io.$_$.f1;
  var Job$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var Long = kotlin_kotlin.$_$.gb;
  var readBytes$default = kotlin_io_ktor_ktor_io.$_$.g;
  var IllegalStateException_init_$Init$_0 = kotlin_kotlin.$_$.a2;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.h1;
  var ReadChannelContent = kotlin_io_ktor_ktor_http.$_$.o;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ec;
  var GlobalScope_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var writer = kotlin_io_ktor_ktor_io.$_$.j1;
  var WriteChannelContent = kotlin_io_ktor_ktor_http.$_$.p;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.p;
  var NoContent = kotlin_io_ktor_ktor_http.$_$.m;
  var ProtocolUpgrade = kotlin_io_ktor_ktor_http.$_$.n;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.l;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var JsType_getInstance = kotlin_io_ktor_ktor_utils.$_$.c;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.t3;
  var arrayOf = kotlin_kotlin.$_$.ub;
  var createKType = kotlin_kotlin.$_$.b;
  var typeInfoImpl = kotlin_io_ktor_ktor_utils.$_$.j;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.q;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var async$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var emptySet = kotlin_kotlin.$_$.j5;
  var interfaceMeta = kotlin_kotlin.$_$.j8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.h;
  var UnsafeHeaderException = kotlin_io_ktor_ktor_http.$_$.s;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var SilentSupervisor$default = kotlin_io_ktor_ktor_utils.$_$.b;
  var lazy = kotlin_kotlin.$_$.dc;
  var CompletableJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var CloseableCoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var KProperty1 = kotlin_kotlin.$_$.t9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.g8;
  var setOf = kotlin_kotlin.$_$.j6;
  var get = kotlin_kotlin.$_$.k7;
  var fold = kotlin_kotlin.$_$.j7;
  var minusKey = kotlin_kotlin.$_$.l7;
  var plus = kotlin_kotlin.$_$.n7;
  var Element = kotlin_kotlin.$_$.m7;
  var PipelinePhase = kotlin_io_ktor_ktor_utils.$_$.g;
  var contentLength = kotlin_io_ktor_ktor_http.$_$.x;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var toLong = kotlin_kotlin.$_$.f9;
  var toLong_0 = kotlin_kotlin.$_$.pa;
  var contentType = kotlin_io_ktor_ktor_http.$_$.y;
  var isByteArray = kotlin_kotlin.$_$.m8;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var TextContent_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.b;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.v3;
  var copyTo = kotlin_io_ktor_ktor_io.$_$.a;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var CancellationException = kotlin_kotlin.$_$.z6;
  var cancel_1 = kotlin_io_ktor_ktor_io.$_$.i1;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.r;
  var getKClass = kotlin_kotlin.$_$.e;
  var writer$default = kotlin_io_ktor_ktor_io.$_$.k;
  var Input = kotlin_io_ktor_ktor_io.$_$.y;
  var ByteReadPacket = kotlin_io_ktor_ktor_io.$_$.w;
  var Unit = kotlin_kotlin.$_$.rb;
  var toInt = kotlin_kotlin.$_$.na;
  var reversed = kotlin_kotlin.$_$.i6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.h1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var charset = kotlin_io_ktor_ktor_http.$_$.w;
  var withCharset = kotlin_io_ktor_ktor_http.$_$.h1;
  var compareValues = kotlin_kotlin.$_$.y6;
  var get_name = kotlin_io_ktor_ktor_io.$_$.s;
  var toList = kotlin_kotlin.$_$.q6;
  var sortedWith = kotlin_kotlin.$_$.n6;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.o1;
  var charSequenceLength = kotlin_kotlin.$_$.y7;
  var roundToInt = kotlin_kotlin.$_$.i9;
  var firstOrNull = kotlin_kotlin.$_$.m5;
  var charset_0 = kotlin_io_ktor_ktor_http.$_$.v;
  var readText$default = kotlin_io_ktor_ktor_io.$_$.h;
  var get_authority = kotlin_io_ktor_ktor_http.$_$.u;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.f1;
  var isSecure = kotlin_io_ktor_ktor_http.$_$.b1;
  var get_authority_0 = kotlin_io_ktor_ktor_http.$_$.t;
  var EventDefinition = kotlin_io_ktor_ktor_events.$_$.a;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.k;
  var Companion_getInstance_2 = kotlin_io_ktor_ktor_http.$_$.i;
  var setOf_0 = kotlin_kotlin.$_$.k6;
  var cancel_2 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var get_lastIndex = kotlin_kotlin.$_$.t5;
  var downTo = kotlin_kotlin.$_$.n9;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var isWebsocket = kotlin_io_ktor_ktor_http.$_$.c1;
  var equals = kotlin_kotlin.$_$.c8;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var IOException = kotlin_io_ktor_ktor_io.$_$.d1;
  var IOException_init_$Init$ = kotlin_io_ktor_ktor_io.$_$.m;
  var URLBuilder_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.d;
  var HeadersBuilder_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.c;
  var SupervisorJob$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var takeFrom_0 = kotlin_io_ktor_ktor_http.$_$.e1;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.r;
  var putAll = kotlin_io_ktor_ktor_utils.$_$.u;
  var GMTDate$default = kotlin_io_ktor_ktor_utils.$_$.a;
  var Pipeline = kotlin_io_ktor_ktor_utils.$_$.h;
  var decode$default = kotlin_io_ktor_ktor_io.$_$.d;
  var hashCode = kotlin_kotlin.$_$.i8;
  var get_ByteArrayPool = kotlin_io_ktor_ktor_io.$_$.e1;
  var readAvailable = kotlin_io_ktor_ktor_io.$_$.b;
  var Companion_getInstance_3 = kotlin_io_ktor_ktor_http.$_$.j;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.m1;
  var cancel_3 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var Companion_getInstance_4 = kotlin_io_ktor_ktor_http.$_$.g;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var intercepted = kotlin_kotlin.$_$.c7;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var extendThrowable = kotlin_kotlin.$_$.d8;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.w3;
  var createFailure = kotlin_kotlin.$_$.wb;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.u2;
  var toTypedArray = kotlin_kotlin.$_$.w6;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.c;
  var Error_init_$Create$ = kotlin_kotlin.$_$.p1;
  var Error_init_$Create$_0 = kotlin_kotlin.$_$.r1;
  var _ChannelResult___get_isSuccess__impl__odq1z9 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var Channel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var Companion_getInstance_6 = kotlin_io_ktor_ktor_websockets.$_$.f;
  var Codes_CLOSED_ABNORMALLY_getInstance = kotlin_io_ktor_ktor_websockets.$_$.a;
  var Text_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.e;
  var Binary_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.c;
  var CloseReason = kotlin_io_ktor_ktor_websockets.$_$.g;
  var Close_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.d;
  var String$default = kotlin_io_ktor_ktor_io.$_$.f;
  var BytePacketBuilder_init_$Create$ = kotlin_io_ktor_ktor_io.$_$.l;
  var writeFully$default = kotlin_io_ktor_ktor_io.$_$.i;
  var readShort = kotlin_io_ktor_ktor_io.$_$.b1;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var Codes_INTERNAL_ERROR_getInstance = kotlin_io_ktor_ktor_websockets.$_$.b;
  var CompletableDeferred$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  //endregion
  //region block: pre-declaration
  setMetadataFor(HttpClient$slambda, 'HttpClient$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(HttpClient$slambda_1, 'HttpClient$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor($executeCOROUTINE$0, '$executeCOROUTINE$0', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(HttpClient, 'HttpClient', classMeta, undefined, [CoroutineScope, Closeable], undefined, undefined, [1]);
  setMetadataFor(HttpClientConfig, 'HttpClientConfig', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($bodyCOROUTINE$1, '$bodyCOROUTINE$1', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(HttpClientCall, 'HttpClientCall', classMeta, undefined, [CoroutineScope], undefined, undefined, [0, 1]);
  setMetadataFor(DoubleReceiveException, 'DoubleReceiveException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(NoTransformationFoundException, 'NoTransformationFoundException', classMeta, UnsupportedOperationException, undefined, undefined, undefined, []);
  setMetadataFor(SavedHttpCall, 'SavedHttpCall', classMeta, HttpClientCall, undefined, undefined, undefined, [0, 1]);
  function get_coroutineContext() {
    return this.e2r().vf();
  }
  setMetadataFor(HttpRequest_0, 'HttpRequest', interfaceMeta, undefined, [CoroutineScope], undefined, undefined, []);
  setMetadataFor(SavedHttpRequest, 'SavedHttpRequest', classMeta, undefined, [HttpRequest_0], undefined, undefined, []);
  setMetadataFor(HttpResponse, 'HttpResponse', classMeta, undefined, [CoroutineScope], undefined, undefined, []);
  setMetadataFor(SavedHttpResponse, 'SavedHttpResponse', classMeta, HttpResponse, undefined, undefined, undefined, []);
  setMetadataFor($saveCOROUTINE$2, '$saveCOROUTINE$2', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(UnsupportedContentTypeException, 'UnsupportedContentTypeException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(ObservableContent$content$slambda, 'ObservableContent$content$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(ObservableContent, 'ObservableContent', classMeta, ReadChannelContent, undefined, undefined, undefined, []);
  setMetadataFor(HttpClientEngine$install$slambda, 'HttpClientEngine$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(HttpClientEngine$executeWithinCallContext$slambda, 'HttpClientEngine$executeWithinCallContext$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($executeWithinCallContextCOROUTINE$3, '$executeWithinCallContextCOROUTINE$3', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  function get_supportedCapabilities() {
    return emptySet();
  }
  function install(client) {
    var tmp = Phases_getInstance_0().p2o_1;
    client.y2l_1.d1g(tmp, HttpClientEngine$install$slambda_0(client, this, null));
  }
  setMetadataFor(HttpClientEngine, 'HttpClientEngine', interfaceMeta, undefined, [CoroutineScope, Closeable], undefined, undefined, [1]);
  setMetadataFor(ClientEngineClosedException, 'ClientEngineClosedException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(HttpClientEngineBase, 'HttpClientEngineBase', classMeta, undefined, [HttpClientEngine], undefined, undefined, [1]);
  setMetadataFor(HttpClientEngineConfig, 'HttpClientEngineConfig', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(KtorCallContextElement, 'KtorCallContextElement', classMeta, undefined, [Element], undefined, undefined, []);
  setMetadataFor(HttpClientPlugin, 'HttpClientPlugin', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Plugin, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor(BodyProgress$handle$slambda, 'BodyProgress$handle$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(BodyProgress$handle$slambda_1, 'BodyProgress$handle$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(BodyProgress, 'BodyProgress', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ResponseException, 'ResponseException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(RedirectResponseException, 'RedirectResponseException', classMeta, ResponseException, undefined, undefined, undefined, []);
  setMetadataFor(ClientRequestException, 'ClientRequestException', classMeta, ResponseException, undefined, undefined, undefined, []);
  setMetadataFor(ServerResponseException, 'ServerResponseException', classMeta, ResponseException, undefined, undefined, undefined, []);
  setMetadataFor(addDefaultResponseValidation$lambda$slambda, 'addDefaultResponseValidation$lambda$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(defaultTransformers$1$content$1, undefined, classMeta, ByteArrayContent, undefined, undefined, undefined, []);
  setMetadataFor(defaultTransformers$1$content$2, undefined, classMeta, ReadChannelContent, undefined, undefined, undefined, []);
  setMetadataFor(defaultTransformers$slambda, 'defaultTransformers$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(defaultTransformers$slambda$slambda, 'defaultTransformers$slambda$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(defaultTransformers$slambda_1, 'defaultTransformers$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(HttpCallValidator$Companion$install$slambda, 'HttpCallValidator$Companion$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(HttpCallValidator$Companion$install$slambda_1, 'HttpCallValidator$Companion$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(HttpCallValidator$Companion$install$slambda_3, 'HttpCallValidator$Companion$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(Config, 'Config', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor($validateResponseCOROUTINE$4, '$validateResponseCOROUTINE$4', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($processExceptionCOROUTINE$5, '$processExceptionCOROUTINE$5', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(HttpCallValidator, 'HttpCallValidator', classMeta, undefined, undefined, undefined, undefined, [1, 2]);
  setMetadataFor(ExceptionHandlerWrapper, 'ExceptionHandlerWrapper', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RequestExceptionHandlerWrapper, 'RequestExceptionHandlerWrapper', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRequest$1, undefined, classMeta, undefined, [HttpRequest_0], undefined, undefined, []);
  setMetadataFor(HttpPlainText$Plugin$install$slambda, 'HttpPlainText$Plugin$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(HttpPlainText$Plugin$install$slambda_1, 'HttpPlainText$Plugin$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(Config_0, 'Config', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Plugin_0, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpPlainText, 'HttpPlainText', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRedirect$Plugin$install$slambda, 'HttpRedirect$Plugin$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor($handleCallCOROUTINE$6, '$handleCallCOROUTINE$6', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(Config_1, 'Config', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Plugin_1, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, [4]);
  setMetadataFor(HttpRedirect, 'HttpRedirect', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRequestLifecycle$Plugin$install$slambda, 'HttpRequestLifecycle$Plugin$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(Plugin_2, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor(HttpRequestLifecycle, 'HttpRequestLifecycle', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpSend$Plugin$install$slambda, 'HttpSend$Plugin$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor($executeCOROUTINE$7, '$executeCOROUTINE$7', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(Config_2, 'Config', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Plugin_3, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor(Sender, 'Sender', interfaceMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(InterceptedSender, 'InterceptedSender', classMeta, undefined, [Sender], undefined, undefined, [1]);
  setMetadataFor(DefaultSender, 'DefaultSender', classMeta, undefined, [Sender], undefined, undefined, [1]);
  setMetadataFor(HttpSend, 'HttpSend', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SendCountExceedException, 'SendCountExceedException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpTimeout$Plugin$install$slambda$slambda, 'HttpTimeout$Plugin$install$slambda$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(HttpTimeout$Plugin$install$slambda, 'HttpTimeout$Plugin$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(HttpTimeoutCapabilityConfiguration, 'HttpTimeoutCapabilityConfiguration', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Plugin_4, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor(HttpTimeout, 'HttpTimeout', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRequestTimeoutException, 'HttpRequestTimeoutException', classMeta, IOException, undefined, undefined, undefined, []);
  setMetadataFor(DelegatedResponse, 'DelegatedResponse', classMeta, HttpResponse, undefined, undefined, undefined, []);
  setMetadataFor(WebSocketCapability, 'WebSocketCapability', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(WebSocketException, 'WebSocketException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(ClientUpgradeContent, 'ClientUpgradeContent', classMeta, NoContent, undefined, undefined, undefined, [1]);
  setMetadataFor(DefaultHttpRequest, 'DefaultHttpRequest', classMeta, undefined, [HttpRequest_0], undefined, undefined, []);
  setMetadataFor(Companion_3, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRequestBuilder, 'HttpRequestBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRequestData, 'HttpRequestData', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpResponseData, 'HttpResponseData', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Phases, 'Phases', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpRequestPipeline, 'HttpRequestPipeline', classMeta, Pipeline, undefined, undefined, undefined, [2]);
  setMetadataFor(Phases_0, 'Phases', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpSendPipeline, 'HttpSendPipeline', classMeta, Pipeline, undefined, undefined, undefined, [2]);
  setMetadataFor(DefaultHttpResponse, 'DefaultHttpResponse', classMeta, HttpResponse, undefined, undefined, undefined, []);
  setMetadataFor($bodyAsTextCOROUTINE$13, '$bodyAsTextCOROUTINE$13', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(Phases_1, 'Phases', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpResponsePipeline, 'HttpResponsePipeline', classMeta, Pipeline, undefined, undefined, undefined, [2]);
  setMetadataFor(Phases_2, 'Phases', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpReceivePipeline, 'HttpReceivePipeline', classMeta, Pipeline, undefined, undefined, undefined, [2]);
  setMetadataFor(HttpResponseContainer, 'HttpResponseContainer', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HttpStatement$execute$slambda, 'HttpStatement$execute$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($executeCOROUTINE$14, '$executeCOROUTINE$14', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($executeUnsafeCOROUTINE$15, '$executeUnsafeCOROUTINE$15', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($cleanupCOROUTINE$16, '$cleanupCOROUTINE$16', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(HttpStatement, 'HttpStatement', classMeta, undefined, undefined, undefined, undefined, [1, 0]);
  setMetadataFor(observable$slambda, 'observable$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(HttpResponseReceiveFail, 'HttpResponseReceiveFail', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(EmptyContent, 'EmptyContent', objectMeta, NoContent, undefined, undefined, undefined, []);
  setMetadataFor(Js, 'Js', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsClientEngine$createWebSocket$headers_capturingHack$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($executeCOROUTINE$17, '$executeCOROUTINE$17', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($executeWebSocketRequestCOROUTINE$18, '$executeWebSocketRequestCOROUTINE$18', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(JsClientEngine, 'JsClientEngine', classMeta, HttpClientEngineBase, undefined, undefined, undefined, [1, 2]);
  setMetadataFor(JsError, 'JsError', classMeta, Error, undefined, undefined, undefined, []);
  setMetadataFor(toRaw$slambda, 'toRaw$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor($toRawCOROUTINE$19, '$toRawCOROUTINE$19', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(channelFromStream$slambda, 'channelFromStream$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(readBodyNode$slambda, 'readBodyNode$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(JsWebSocketSession$slambda, 'JsWebSocketSession$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(JsWebSocketSession, 'JsWebSocketSession', classMeta, undefined, [CoroutineScope], undefined, undefined, [0, 1]);
  //endregion
  function HttpClient_init_$Init$(engine, userConfig, manageEngine, $this) {
    HttpClient.call($this, engine, userConfig);
    $this.s2l_1 = manageEngine;
    return $this;
  }
  function HttpClient_init_$Create$(engine, userConfig, manageEngine) {
    return HttpClient_init_$Init$(engine, userConfig, manageEngine, Object.create(HttpClient.prototype));
  }
  function HttpClient$lambda(this$0) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        cancel$default(this$0.q2l_1, null, 1, null);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function HttpClient$slambda(this$0, resultContinuation) {
    this.m2m_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClient$slambda.prototype.q2m = function ($this$intercept, call, $cont) {
    var tmp = this.r2m($this$intercept, call, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  HttpClient$slambda.prototype.z5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q2m(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpClient$slambda.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 3;
            var tmp_0 = this.o2m_1;
            if (!(tmp_0 instanceof HttpClientCall)) {
              var message = 'Error: HttpClientCall expected, but found ' + toString(this.o2m_1) + '(' + getKClassFromExpression(this.o2m_1) + ').';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            this.oe_1 = 1;
            suspendResult = this.m2m_1.z2l_1.y1f(Unit_getInstance(), this.o2m_1.x2m(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.p2m_1 = suspendResult;
            this.o2m_1.y2m(this.p2m_1);
            this.oe_1 = 2;
            suspendResult = this.n2m_1.d1f(this.o2m_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
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
  HttpClient$slambda.prototype.r2m = function ($this$intercept, call, completion) {
    var i = new HttpClient$slambda(this.m2m_1, completion);
    i.n2m_1 = $this$intercept;
    i.o2m_1 = call;
    return i;
  };
  function HttpClient$slambda_0(this$0, resultContinuation) {
    var i = new HttpClient$slambda(this$0, resultContinuation);
    var l = function ($this$intercept, call, $cont) {
      return i.q2m($this$intercept, call, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpClient$lambda_0($this$install) {
    defaultTransformers($this$install);
    return Unit_getInstance();
  }
  function HttpClient$slambda_1(this$0, resultContinuation) {
    this.h2n_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClient$slambda_1.prototype.k2n = function ($this$intercept, it, $cont) {
    var tmp = this.l2n($this$intercept, it, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  HttpClient$slambda_1.prototype.z5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.k2n(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  HttpClient$slambda_1.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 3;
            this.pe_1 = 2;
            this.oe_1 = 1;
            suspendResult = this.i2n_1.e1f(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.pe_1 = 3;
            this.oe_1 = 4;
            continue $sm;
          case 2:
            this.pe_1 = 3;
            var tmp_0 = this.re_1;
            if (tmp_0 instanceof Error) {
              var cause = this.re_1;
              this.h2n_1.c2m_1.l2l(get_HttpResponseReceiveFailed(), new HttpResponseReceiveFail(this.i2n_1.z1f_1.x2m(), cause));
              throw cause;
            } else {
              throw this.re_1;
            }

            break;
          case 3:
            throw this.re_1;
          case 4:
            this.pe_1 = 3;
            return Unit_getInstance();
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
  HttpClient$slambda_1.prototype.l2n = function ($this$intercept, it, completion) {
    var i = new HttpClient$slambda_1(this.h2n_1, completion);
    i.i2n_1 = $this$intercept;
    i.j2n_1 = it;
    return i;
  };
  function HttpClient$slambda_2(this$0, resultContinuation) {
    var i = new HttpClient$slambda_1(this$0, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.k2n($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $executeCOROUTINE$0(_this__u8e3s4, builder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u2n_1 = _this__u8e3s4;
    this.v2n_1 = builder;
  }
  $executeCOROUTINE$0.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 2;
            this.u2n_1.c2m_1.l2l(get_HttpRequestCreated(), this.v2n_1);
            this.oe_1 = 1;
            suspendResult = this.u2n_1.w2l_1.y1f(this.v2n_1, this.v2n_1.z2n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult instanceof HttpClientCall ? suspendResult : THROW_CCE();
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
  function HttpClient(engine, userConfig) {
    this.q2l_1 = engine;
    this.r2l_1 = userConfig;
    this.s2l_1 = false;
    this.t2l_1 = atomic$boolean$1(false);
    this.u2l_1 = Job(this.q2l_1.vf().i3(Key_getInstance()));
    this.v2l_1 = this.q2l_1.vf().p3(this.u2l_1);
    this.w2l_1 = new HttpRequestPipeline(this.r2l_1.j2o_1);
    this.x2l_1 = new HttpResponsePipeline(this.r2l_1.j2o_1);
    this.y2l_1 = new HttpSendPipeline(this.r2l_1.j2o_1);
    this.z2l_1 = new HttpReceivePipeline(this.r2l_1.j2o_1);
    this.a2m_1 = Attributes(true);
    this.b2m_1 = this.q2l_1.k2o();
    this.c2m_1 = new Events();
    this.d2m_1 = new HttpClientConfig();
    if (this.s2l_1) {
      this.u2l_1.wg(HttpClient$lambda(this));
    }
    this.q2l_1.l2o(this);
    var tmp = Phases_getInstance_0().q2o_1;
    this.y2l_1.d1g(tmp, HttpClient$slambda_0(this, null));
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.r2l_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0 = Plugin_getInstance_2();
    this.d2m_1.r2o(tmp_0, null, 2, null);
    var tmp_1 = Plugin_getInstance();
    this.d2m_1.r2o(tmp_1, null, 2, null);
    if (tmp0_with.h2o_1) {
      this.d2m_1.s2o('DefaultTransformers', HttpClient$lambda_0);
    }
    var tmp_2 = Plugin_getInstance_3();
    this.d2m_1.r2o(tmp_2, null, 2, null);
    var tmp_3 = Companion_getInstance_9();
    this.d2m_1.r2o(tmp_3, null, 2, null);
    if (tmp0_with.g2o_1) {
      var tmp_4 = Plugin_getInstance_1();
      this.d2m_1.r2o(tmp_4, null, 2, null);
    }
    var tmp0_this = this;
    tmp0_this.d2m_1.t2o(tmp0_with);
    if (tmp0_with.h2o_1) {
      var tmp_5 = Plugin_getInstance_0();
      this.d2m_1.r2o(tmp_5, null, 2, null);
    }
    addDefaultResponseValidation(this.d2m_1);
    this.d2m_1.l2o(this);
    tmp$ret$0 = Unit_getInstance();
    var tmp_6 = Phases_getInstance_1().u2o_1;
    this.x2l_1.d1g(tmp_6, HttpClient$slambda_2(this, null));
  }
  HttpClient.prototype.vf = function () {
    return this.v2l_1;
  };
  HttpClient.prototype.z2o = function (builder, $cont) {
    var tmp = new $executeCOROUTINE$0(this, builder, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  HttpClient.prototype.nu = function () {
    var success = this.t2l_1.atomicfu$compareAndSet(false, true);
    if (!success)
      return Unit_getInstance();
    var installedFeatures = this.a2m_1.w1b(get_PLUGIN_INSTALLED_LIST());
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = installedFeatures.c1c();
    var tmp0_iterator = tmp0_forEach.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'io.ktor.client.HttpClient.close.<anonymous>' call
      var plugin = installedFeatures.w1b(element instanceof AttributeKey ? element : THROW_CCE());
      if (isInterface(plugin, Closeable)) {
        plugin.nu();
      }
    }
    this.u2l_1.kl();
    if (this.s2l_1) {
      this.q2l_1.nu();
    }
  };
  HttpClient.prototype.toString = function () {
    return 'HttpClient[' + this.q2l_1 + ']';
  };
  function HttpClient_0(engineFactory, block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new HttpClientConfig();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    var engine = engineFactory.a2p(config.f2o_1);
    var client = HttpClient_init_$Create$(engine, config, true);
    var tmp = ensureNotNull(client.v2l_1.i3(Key_getInstance()));
    tmp.wg(HttpClient$lambda_1(engine));
    return client;
  }
  function HttpClient$lambda_1($engine) {
    return function (it) {
      $engine.nu();
      return Unit_getInstance();
    };
  }
  function HttpClientConfig$engineConfig$lambda($this$null) {
    return Unit_getInstance();
  }
  function HttpClientConfig$install$lambda($this$null) {
    return Unit_getInstance();
  }
  function HttpClientConfig$install$lambda_0($previousConfigBlock, $configure) {
    return function ($this$null) {
      var tmp0_safe_receiver = $previousConfigBlock;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$null);
      $configure(isObject($this$null) ? $this$null : THROW_CCE());
      return Unit_getInstance();
    };
  }
  function HttpClientConfig$install$lambda$lambda() {
    return Attributes(true);
  }
  function HttpClientConfig$install$lambda_1($plugin) {
    return function (scope) {
      var tmp = get_PLUGIN_INSTALLED_LIST();
      var attributes = scope.a2m_1.b1c(tmp, HttpClientConfig$install$lambda$lambda);
      var config = ensureNotNull(scope.d2m_1.d2o_1.v1($plugin.n()));
      var pluginData = $plugin.b2p(config);
      $plugin.c2p(pluginData, scope);
      attributes.z1b($plugin.n(), pluginData);
      return Unit_getInstance();
    };
  }
  function HttpClientConfig() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.c2o_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$1 = LinkedHashMap_init_$Create$();
    tmp_0.d2o_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$2 = LinkedHashMap_init_$Create$();
    tmp_1.e2o_1 = tmp$ret$2;
    var tmp_2 = this;
    tmp_2.f2o_1 = HttpClientConfig$engineConfig$lambda;
    this.g2o_1 = true;
    this.h2o_1 = true;
    this.i2o_1 = false;
    this.j2o_1 = PlatformUtils_getInstance().y1g_1;
  }
  HttpClientConfig.prototype.d2p = function (plugin, configure) {
    var previousConfigBlock = this.d2o_1.v1(plugin.n());
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.d2o_1;
    var tmp1_set = plugin.n();
    tmp0_set.u2(tmp1_set, HttpClientConfig$install$lambda_0(previousConfigBlock, configure));
    if (this.c2o_1.p1(plugin.n()))
      return Unit_getInstance();
    // Inline function 'kotlin.collections.set' call
    var tmp2_set = this.c2o_1;
    var tmp3_set = plugin.n();
    tmp2_set.u2(tmp3_set, HttpClientConfig$install$lambda_1(plugin));
  };
  HttpClientConfig.prototype.r2o = function (plugin, configure, $mask0, $handler) {
    if (!(($mask0 & 2) === 0)) {
      configure = HttpClientConfig$install$lambda;
    }
    return this.d2p(plugin, configure);
  };
  HttpClientConfig.prototype.s2o = function (key, block) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.e2o_1;
    tmp0_set.u2(key, block);
  };
  HttpClientConfig.prototype.l2o = function (client) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.c2o_1.x1();
    var tmp0_iterator = tmp0_forEach.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'io.ktor.client.HttpClientConfig.install.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      element(client);
      tmp$ret$0 = client;
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp1_forEach = this.e2o_1.x1();
    var tmp0_iterator_0 = tmp1_forEach.j();
    while (tmp0_iterator_0.k()) {
      var element_0 = tmp0_iterator_0.l();
      // Inline function 'io.ktor.client.HttpClientConfig.install.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      element_0(client);
      tmp$ret$1 = client;
    }
  };
  HttpClientConfig.prototype.t2o = function (other) {
    this.g2o_1 = other.g2o_1;
    this.h2o_1 = other.h2o_1;
    this.i2o_1 = other.i2o_1;
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.c2o_1;
    var tmp1_plusAssign = other.c2o_1;
    tmp0_plusAssign.c9(tmp1_plusAssign);
    var tmp1_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp2_plusAssign = tmp1_this.d2o_1;
    var tmp3_plusAssign = other.d2o_1;
    tmp2_plusAssign.c9(tmp3_plusAssign);
    var tmp2_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp4_plusAssign = tmp2_this.e2o_1;
    var tmp5_plusAssign = other.e2o_1;
    tmp4_plusAssign.c9(tmp5_plusAssign);
  };
  function HttpClientCall_init_$Init$(client, requestData, responseData, $this) {
    HttpClientCall.call($this, client);
    $this.u2m_1 = new DefaultHttpRequest($this, requestData);
    $this.v2m_1 = new DefaultHttpResponse($this, responseData);
    var tmp = responseData.i2p_1;
    if (!isInterface(tmp, ByteReadChannel)) {
      $this.l2p().z1b(Companion_getInstance_7().m2p_1, responseData.i2p_1);
    }
    return $this;
  }
  function HttpClientCall_init_$Create$(client, requestData, responseData) {
    return HttpClientCall_init_$Init$(client, requestData, responseData, Object.create(HttpClientCall.prototype));
  }
  function Companion() {
    Companion_instance = this;
    this.m2p_1 = new AttributeKey('CustomResponse');
  }
  var Companion_instance;
  function Companion_getInstance_7() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $bodyCOROUTINE$1(_this__u8e3s4, info, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v2p_1 = _this__u8e3s4;
    this.w2p_1 = info;
  }
  $bodyCOROUTINE$1.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 10;
            this.oe_1 = 1;
            continue $sm;
          case 1:
            this.oe_1 = 2;
            continue $sm;
          case 2:
            this.pe_1 = 9;
            this.pe_1 = 8;
            if (instanceOf(this.v2p_1.x2m(), this.w2p_1.q1g_1)) {
              this.x2p_1 = this.v2p_1.x2m();
              this.pe_1 = 10;
              this.oe_1 = 7;
              continue $sm;
            } else {
              this.oe_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            if (!this.v2p_1.c2q() ? !this.v2p_1.t2m_1.atomicfu$compareAndSet(false, true) : false) {
              throw new DoubleReceiveException(this.v2p_1);
            }

            this.y2p_1 = this.v2p_1.l2p().x1b(Companion_getInstance_7().m2p_1);
            if (this.y2p_1 == null) {
              this.oe_1 = 4;
              suspendResult = this.v2p_1.d2q(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.z2p_1 = this.y2p_1;
              this.oe_1 = 5;
              continue $sm;
            }

            break;
          case 4:
            this.z2p_1 = suspendResult;
            this.oe_1 = 5;
            continue $sm;
          case 5:
            this.a2q_1 = this.z2p_1;
            this.b2q_1 = new HttpResponseContainer(this.w2p_1, this.a2q_1);
            this.oe_1 = 6;
            suspendResult = this.v2p_1.s2m_1.x2l_1.y1f(this.v2p_1, this.b2q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            var result = ARGUMENT.f2q_1;
            if (!instanceOf(result, this.w2p_1.q1g_1)) {
              var from = getKClassFromExpression(result);
              var to = this.w2p_1.q1g_1;
              throw new NoTransformationFoundException(this.v2p_1.x2m(), from, to);
            }

            this.x2p_1 = result;
            this.pe_1 = 10;
            this.oe_1 = 7;
            var tmp_0 = this;
            continue $sm;
          case 7:
            var tmp_1 = this.x2p_1;
            complete(this.v2p_1.x2m());
            ;
            return tmp_1;
          case 8:
            this.pe_1 = 9;
            var tmp_2 = this.re_1;
            if (tmp_2 instanceof Error) {
              var cause = this.re_1;
              var tmp_3 = this;
              cancel(this.v2p_1.x2m(), 'Receive failed', cause);
              throw cause;
            } else {
              throw this.re_1;
            }

            break;
          case 9:
            this.pe_1 = 10;
            var t = this.re_1;
            complete(this.v2p_1.x2m());
            ;
            throw t;
          case 10:
            throw this.re_1;
          case 11:
            complete(this.v2p_1.x2m());
            ;
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.pe_1 === 10) {
          throw $p;
        } else {
          this.oe_1 = this.pe_1;
          this.re_1 = $p;
        }
      }
     while (true);
  };
  function HttpClientCall(client) {
    Companion_getInstance_7();
    this.s2m_1 = client;
    this.t2m_1 = atomic$boolean$1(false);
    this.w2m_1 = false;
  }
  HttpClientCall.prototype.vf = function () {
    return this.x2m().vf();
  };
  HttpClientCall.prototype.l2p = function () {
    return this.g2q().l2p();
  };
  HttpClientCall.prototype.g2q = function () {
    var tmp = this.u2m_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('request');
    }
  };
  HttpClientCall.prototype.x2m = function () {
    var tmp = this.v2m_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('response');
    }
  };
  HttpClientCall.prototype.c2q = function () {
    return this.w2m_1;
  };
  HttpClientCall.prototype.d2q = function ($cont) {
    return this.x2m().z2d();
  };
  HttpClientCall.prototype.h2q = function (info, $cont) {
    var tmp = new $bodyCOROUTINE$1(this, info, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  HttpClientCall.prototype.toString = function () {
    return 'HttpClientCall[' + this.g2q().i2q() + ', ' + this.x2m().j2q() + ']';
  };
  HttpClientCall.prototype.y2m = function (response) {
    this.v2m_1 = response;
  };
  function DoubleReceiveException(call) {
    IllegalStateException_init_$Init$(this);
    this.k2q_1 = 'Response already received: ' + call;
    captureStack(this, DoubleReceiveException);
  }
  DoubleReceiveException.prototype.f6 = function () {
    return this.k2q_1;
  };
  Object.defineProperty(DoubleReceiveException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.f6();
    }
  });
  function NoTransformationFoundException$message$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var key = _name_for_destructuring_parameter_0__wldtmu.s2();
    var value = _name_for_destructuring_parameter_0__wldtmu.t2();
    return key + ': ' + value + '\n';
  }
  function NoTransformationFoundException(response, from, to) {
    UnsupportedOperationException_init_$Init$(this);
    var tmp = this;
    var tmp_0 = get_request(response).i2q();
    var tmp_1 = response.j2q();
    var tmp_2 = flattenEntries(response.c1n());
    var tmp_3 = 'No transformation found: ' + from + ' -> ' + to + '\n        |with response from ' + tmp_0 + ':\n        |status: ' + tmp_1 + '\n        |response headers: \n        |' + joinToString$default(tmp_2, null, null, null, 0, null, NoTransformationFoundException$message$lambda, 31, null) + '\n    ';
    tmp.l2q_1 = trimMargin$default(tmp_3, null, 1, null);
    captureStack(this, NoTransformationFoundException);
  }
  NoTransformationFoundException.prototype.f6 = function () {
    return this.l2q_1;
  };
  Object.defineProperty(NoTransformationFoundException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.f6();
    }
  });
  function save(_this__u8e3s4, $cont) {
    var tmp = new $saveCOROUTINE$2(_this__u8e3s4, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  }
  function SavedHttpCall(client, request, response, responseBody) {
    HttpClientCall.call(this, client);
    this.a2r_1 = responseBody;
    this.u2m_1 = new SavedHttpRequest(this, request);
    this.v2m_1 = new SavedHttpResponse(this, this.a2r_1, response);
    this.b2r_1 = true;
  }
  SavedHttpCall.prototype.d2q = function ($cont) {
    return ByteReadChannel_0(this.a2r_1);
  };
  SavedHttpCall.prototype.c2q = function () {
    return this.b2r_1;
  };
  function SavedHttpRequest(call, origin) {
    this.c2r_1 = call;
    this.d2r_1 = origin;
  }
  SavedHttpRequest.prototype.e2r = function () {
    return this.c2r_1;
  };
  SavedHttpRequest.prototype.l2p = function () {
    return this.d2r_1.l2p();
  };
  SavedHttpRequest.prototype.vf = function () {
    return this.d2r_1.vf();
  };
  SavedHttpRequest.prototype.c1n = function () {
    return this.d2r_1.c1n();
  };
  SavedHttpRequest.prototype.f2r = function () {
    return this.d2r_1.f2r();
  };
  SavedHttpRequest.prototype.i2q = function () {
    return this.d2r_1.i2q();
  };
  function SavedHttpResponse(call, body, origin) {
    HttpResponse.call(this);
    this.g2r_1 = call;
    var tmp = this;
    tmp.h2r_1 = Job$default(null, 1, null);
    this.i2r_1 = origin.j2q();
    this.j2r_1 = origin.p2r();
    this.k2r_1 = origin.q2r();
    this.l2r_1 = origin.r2r();
    this.m2r_1 = origin.c1n();
    this.n2r_1 = origin.vf().p3(this.h2r_1);
    this.o2r_1 = ByteReadChannel_0(body);
  }
  SavedHttpResponse.prototype.e2r = function () {
    return this.g2r_1;
  };
  SavedHttpResponse.prototype.j2q = function () {
    return this.i2r_1;
  };
  SavedHttpResponse.prototype.p2r = function () {
    return this.j2r_1;
  };
  SavedHttpResponse.prototype.q2r = function () {
    return this.k2r_1;
  };
  SavedHttpResponse.prototype.r2r = function () {
    return this.l2r_1;
  };
  SavedHttpResponse.prototype.c1n = function () {
    return this.m2r_1;
  };
  SavedHttpResponse.prototype.vf = function () {
    return this.n2r_1;
  };
  SavedHttpResponse.prototype.z2d = function () {
    return this.o2r_1;
  };
  function $saveCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u2q_1 = _this__u8e3s4;
  }
  $saveCOROUTINE$2.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 2;
            this.oe_1 = 1;
            var tmp_0 = this.u2q_1.x2m().z2d();
            suspendResult = tmp_0.j13(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var responseBody = readBytes$default(ARGUMENT, 0, 1, null);
            return new SavedHttpCall(this.u2q_1.s2m_1, this.u2q_1.g2q(), this.u2q_1.x2m(), responseBody);
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
  function UnsupportedContentTypeException(content) {
    IllegalStateException_init_$Init$_0('Failed to write body: ' + getKClassFromExpression(content), this);
    captureStack(this, UnsupportedContentTypeException);
  }
  function ObservableContent$content$slambda($delegate, resultContinuation) {
    this.a2s_1 = $delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  ObservableContent$content$slambda.prototype.c2s = function ($this$writer, $cont) {
    var tmp = this.d2s($this$writer, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  ObservableContent$content$slambda.prototype.jf = function (p1, $cont) {
    return this.c2s((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  ObservableContent$content$slambda.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 2;
            this.oe_1 = 1;
            suspendResult = this.a2s_1.i1s(this.b2s_1.s13(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
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
  ObservableContent$content$slambda.prototype.d2s = function ($this$writer, completion) {
    var i = new ObservableContent$content$slambda(this.a2s_1, completion);
    i.b2s_1 = $this$writer;
    return i;
  };
  function ObservableContent$content$slambda_0($delegate, resultContinuation) {
    var i = new ObservableContent$content$slambda($delegate, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.c2s($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ObservableContent(delegate, callContext, listener) {
    ReadChannelContent.call(this);
    this.f2s_1 = callContext;
    this.g2s_1 = listener;
    var tmp = this;
    var tmp0_subject = delegate;
    var tmp_0;
    if (tmp0_subject instanceof ByteArrayContent) {
      tmp_0 = ByteReadChannel_0(delegate.d1s());
    } else {
      if (tmp0_subject instanceof ProtocolUpgrade) {
        throw new UnsupportedContentTypeException(delegate);
      } else {
        if (tmp0_subject instanceof NoContent) {
          tmp_0 = Companion_getInstance().d15();
        } else {
          if (tmp0_subject instanceof ReadChannelContent) {
            tmp_0 = delegate.g1s();
          } else {
            if (tmp0_subject instanceof WriteChannelContent) {
              var tmp_1 = GlobalScope_getInstance();
              tmp_0 = writer(tmp_1, this.f2s_1, true, ObservableContent$content$slambda_0(delegate, null)).s13();
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
    }
    tmp.h2s_1 = tmp_0;
    this.i2s_1 = delegate;
  }
  ObservableContent.prototype.b1s = function () {
    return this.i2s_1.b1s();
  };
  ObservableContent.prototype.c1s = function () {
    return this.i2s_1.c1s();
  };
  ObservableContent.prototype.c1n = function () {
    return this.i2s_1.c1n();
  };
  ObservableContent.prototype.g1s = function () {
    return observable(this.h2s_1, this.f2s_1, this.c1s(), this.g2s_1);
  };
  function get_CALL_COROUTINE() {
    init_properties_HttpClientEngine_kt_umcrvf();
    return CALL_COROUTINE;
  }
  var CALL_COROUTINE;
  function get_CLIENT_CONFIG() {
    init_properties_HttpClientEngine_kt_umcrvf();
    return CLIENT_CONFIG;
  }
  var CLIENT_CONFIG;
  function HttpClientEngine$install$slambda$lambda($client, $response) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        $client.c2m_1.l2l(get_HttpResponseCancelled(), $response);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _get_closed__iwkfs1($this) {
    var tmp0_safe_receiver = $this.vf().i3(Key_getInstance());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wf();
    return !(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs);
  }
  function executeWithinCallContext($this, requestData, $cont) {
    var tmp = new $executeWithinCallContextCOROUTINE$3($this, requestData, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  }
  function checkExtensions($this, requestData) {
    var tmp0_iterator = requestData.b2t_1.j();
    while (tmp0_iterator.k()) {
      var requestedExtension = tmp0_iterator.l();
      // Inline function 'kotlin.require' call
      var tmp0_require = $this.c2t().y(requestedExtension);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'io.ktor.client.engine.HttpClientEngine.checkExtensions.<anonymous>' call
        tmp$ret$0 = "Engine doesn't support " + requestedExtension;
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  function HttpClientEngine$install$slambda($client, this$0, resultContinuation) {
    this.l2t_1 = $client;
    this.m2t_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClientEngine$install$slambda.prototype.q2m = function ($this$intercept, content, $cont) {
    var tmp = this.r2m($this$intercept, content, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  HttpClientEngine$install$slambda.prototype.z5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q2m(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpClientEngine$install$slambda.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 3;
            var tmp_0 = this;
            var tmp0_apply = new HttpRequestBuilder();
            tmp0_apply.u2t(this.n2t_1.z1f_1);
            ;
            var tmp0_subject = this.o2t_1;
            if (tmp0_subject == null) {
              tmp0_apply.z2n_1 = EmptyContent_getInstance();
              tmp0_apply.v2t(null);
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_apply.z2n_1 = this.o2t_1;
                tmp0_apply.v2t(null);
              } else {
                tmp0_apply.z2n_1 = this.o2t_1;
                var tmp_1 = JsType_getInstance();
                var tmp_2 = PrimitiveClasses_getInstance().yb();
                var tmp_3;
                try {
                  tmp_3 = createKType(PrimitiveClasses_getInstance().yb(), arrayOf([]), false);
                } catch ($p) {
                  var tmp_4;
                  if ($p instanceof Error) {
                    tmp_4 = null;
                  } else {
                    throw $p;
                  }
                  tmp_3 = tmp_4;
                }
                tmp0_apply.v2t(typeInfoImpl(tmp_1, tmp_2, tmp_3));
              }
            }

            tmp_0.p2t_1 = tmp0_apply;
            this.l2t_1.c2m_1.l2l(get_HttpRequestIsReadyForSending(), this.p2t_1);
            var tmp_5 = this;
            var tmp1_apply = this.p2t_1.i11();
            tmp1_apply.a2t_1.z1b(get_CLIENT_CONFIG(), this.l2t_1.d2m_1);
            ;
            tmp_5.q2t_1 = tmp1_apply;
            validateHeaders(this.q2t_1);
            checkExtensions(this.m2t_1, this.q2t_1);
            this.oe_1 = 1;
            suspendResult = executeWithinCallContext(this.m2t_1, this.q2t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.r2t_1 = suspendResult;
            this.s2t_1 = HttpClientCall_init_$Create$(this.l2t_1, this.q2t_1, this.r2t_1);
            this.t2t_1 = this.s2t_1.x2m();
            this.l2t_1.c2m_1.l2l(get_HttpResponseReceived(), this.t2t_1);
            var tmp_6 = get_job(this.t2t_1.vf());
            tmp_6.wg(HttpClientEngine$install$slambda$lambda(this.l2t_1, this.t2t_1));
            ;
            this.oe_1 = 2;
            suspendResult = this.n2t_1.d1f(this.s2t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
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
  HttpClientEngine$install$slambda.prototype.r2m = function ($this$intercept, content, completion) {
    var i = new HttpClientEngine$install$slambda(this.l2t_1, this.m2t_1, completion);
    i.n2t_1 = $this$intercept;
    i.o2t_1 = content;
    return i;
  };
  function HttpClientEngine$install$slambda_0($client, this$0, resultContinuation) {
    var i = new HttpClientEngine$install$slambda($client, this$0, resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.q2m($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation) {
    this.e2u_1 = this$0;
    this.f2u_1 = $requestData;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClientEngine$executeWithinCallContext$slambda.prototype.h2u = function ($this$async, $cont) {
    var tmp = this.m14($this$async, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  HttpClientEngine$executeWithinCallContext$slambda.prototype.jf = function (p1, $cont) {
    return this.h2u((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  HttpClientEngine$executeWithinCallContext$slambda.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 2;
            if (_get_closed__iwkfs1(this.e2u_1)) {
              throw ClientEngineClosedException_init_$Create$(null, 1, null);
            }

            this.oe_1 = 1;
            suspendResult = this.e2u_1.i2u(this.f2u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  HttpClientEngine$executeWithinCallContext$slambda.prototype.m14 = function ($this$async, completion) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this.e2u_1, this.f2u_1, completion);
    i.g2u_1 = $this$async;
    return i;
  };
  function HttpClientEngine$executeWithinCallContext$slambda_0(this$0, $requestData, resultContinuation) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation);
    var l = function ($this$async, $cont) {
      return i.h2u($this$async, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $executeWithinCallContextCOROUTINE$3(_this__u8e3s4, requestData, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r2s_1 = _this__u8e3s4;
    this.s2s_1 = requestData;
  }
  $executeWithinCallContextCOROUTINE$3.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 3;
            this.oe_1 = 1;
            suspendResult = createCallContext(this.r2s_1, this.s2s_1.z2s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.t2s_1 = suspendResult;
            this.u2s_1 = this.t2s_1.p3(new KtorCallContextElement(this.t2s_1));
            this.oe_1 = 2;
            suspendResult = async$default(this.r2s_1, this.u2s_1, null, HttpClientEngine$executeWithinCallContext$slambda_0(this.r2s_1, this.s2s_1, null), 2, null).ji(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function HttpClientEngine() {
  }
  function validateHeaders(request) {
    init_properties_HttpClientEngine_kt_umcrvf();
    var requestHeaders = request.x2s_1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filter' call
    var tmp0_filter = requestHeaders.d1d();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = tmp0_filter.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      var tmp$ret$0;
      // Inline function 'io.ktor.client.engine.validateHeaders.<anonymous>' call
      tmp$ret$0 = HttpHeaders_getInstance().u1m_1.y(element);
      if (tmp$ret$0) {
        tmp0_filterTo.a(element);
      }
    }
    tmp$ret$1 = tmp0_filterTo;
    tmp$ret$2 = tmp$ret$1;
    var unsafeRequestHeaders = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$3 = !unsafeRequestHeaders.i();
    if (tmp$ret$3) {
      throw new UnsafeHeaderException(toString(unsafeRequestHeaders));
    }
  }
  function createCallContext(_this__u8e3s4, parentJob, $cont) {
    var callJob = Job(parentJob);
    var callContext = _this__u8e3s4.vf().p3(callJob).p3(get_CALL_COROUTINE());
    var tmp$ret$1;
    $l$block: {
      // Inline function 'io.ktor.client.engine.attachToUserJob' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.getCoroutineContext' call
      tmp$ret$0 = $cont.e3();
      var tmp0_elvis_lhs = tmp$ret$0.i3(Key_getInstance());
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var userJob = tmp;
      var cleanupHandler = userJob.yg(true, false, createCallContext$lambda(callJob), 2, null);
      callJob.wg(createCallContext$lambda_0(cleanupHandler));
    }
    return callContext;
  }
  function createCallContext$lambda($callJob) {
    return function (cause) {
      var tmp0_elvis_lhs = cause;
      if (tmp0_elvis_lhs == null)
        return Unit_getInstance();
      else
        tmp0_elvis_lhs;
      $callJob.bh(CancellationException_init_$Create$(cause.message));
      return Unit_getInstance();
    };
  }
  function createCallContext$lambda_0($cleanupHandler) {
    return function (it) {
      $cleanupHandler.zi();
      return Unit_getInstance();
    };
  }
  var properties_initialized_HttpClientEngine_kt_5uiebb;
  function init_properties_HttpClientEngine_kt_umcrvf() {
    if (properties_initialized_HttpClientEngine_kt_5uiebb) {
    } else {
      properties_initialized_HttpClientEngine_kt_5uiebb = true;
      CALL_COROUTINE = new CoroutineName('call-context');
      CLIENT_CONFIG = new AttributeKey('client-config');
    }
  }
  function ClientEngineClosedException_init_$Init$(cause, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    ClientEngineClosedException.call($this, cause);
    return $this;
  }
  function ClientEngineClosedException_init_$Create$(cause, $mask0, $marker) {
    var tmp = ClientEngineClosedException_init_$Init$(cause, $mask0, $marker, Object.create(ClientEngineClosedException.prototype));
    captureStack(tmp, ClientEngineClosedException_init_$Create$);
    return tmp;
  }
  function ClientEngineClosedException(cause) {
    IllegalStateException_init_$Init$_0('Client already closed', this);
    this.j2u_1 = cause;
    captureStack(this, ClientEngineClosedException);
  }
  ClientEngineClosedException.prototype.g6 = function () {
    return this.j2u_1;
  };
  Object.defineProperty(ClientEngineClosedException.prototype, 'cause', {
    configurable: true,
    get: function () {
      return this.g6();
    }
  });
  function HttpClientEngineBase$coroutineContext$delegate$lambda(this$0) {
    return function () {
      return SilentSupervisor$default(null, 1, null).p3(this$0.k2u()).p3(new CoroutineName(this$0.l2u_1 + '-context'));
    };
  }
  function HttpClientEngineBase$close$lambda(this$0) {
    return function (it) {
      close(this$0.k2u());
      return Unit_getInstance();
    };
  }
  function HttpClientEngineBase(engineName) {
    this.l2u_1 = engineName;
    this.m2u_1 = atomic$boolean$1(false);
    var tmp = this;
    tmp.n2u_1 = lazy(HttpClientEngineBase$coroutineContext$delegate$lambda(this));
  }
  HttpClientEngineBase.prototype.vf = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = coroutineContext$factory();
    tmp$ret$0 = this.n2u_1.o();
    return tmp$ret$0;
  };
  HttpClientEngineBase.prototype.nu = function () {
    if (!this.m2u_1.atomicfu$compareAndSet(false, true))
      return Unit_getInstance();
    var tmp = this.vf().i3(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, CompletableJob) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var requestJob = tmp_0;
    requestJob.kl();
    requestJob.wg(HttpClientEngineBase$close$lambda(this));
  };
  function close(_this__u8e3s4) {
    try {
      var tmp0_subject = _this__u8e3s4;
      if (tmp0_subject instanceof CloseableCoroutineDispatcher) {
        _this__u8e3s4.nu();
      } else {
        if (isInterface(tmp0_subject, Closeable)) {
          _this__u8e3s4.nu();
        }
      }
    } catch ($p) {
      if ($p instanceof Error) {
      } else {
        throw $p;
      }
    }
  }
  function coroutineContext$factory() {
    return getPropertyCallableRef('coroutineContext', 1, KProperty1, function (receiver) {
      return receiver.vf();
    }, null);
  }
  function get_ENGINE_CAPABILITIES_KEY() {
    init_properties_HttpClientEngineCapability_kt_68uqzx();
    return ENGINE_CAPABILITIES_KEY;
  }
  var ENGINE_CAPABILITIES_KEY;
  var DEFAULT_CAPABILITIES;
  var properties_initialized_HttpClientEngineCapability_kt_qarzcf;
  function init_properties_HttpClientEngineCapability_kt_68uqzx() {
    if (properties_initialized_HttpClientEngineCapability_kt_qarzcf) {
    } else {
      properties_initialized_HttpClientEngineCapability_kt_qarzcf = true;
      ENGINE_CAPABILITIES_KEY = new AttributeKey('EngineCapabilities');
      DEFAULT_CAPABILITIES = setOf(Plugin_getInstance_4());
    }
  }
  function HttpClientEngineConfig() {
    this.o2u_1 = 4;
    this.p2u_1 = false;
    this.q2u_1 = null;
  }
  var KTOR_DEFAULT_USER_AGENT;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function KtorCallContextElement(callContext) {
    Companion_getInstance_8();
    this.r2u_1 = callContext;
  }
  KtorCallContextElement.prototype.n = function () {
    return Companion_getInstance_8();
  };
  function callContext($cont) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $cont.e3();
    return ensureNotNull(tmp$ret$0.i3(Companion_getInstance_8())).r2u_1;
  }
  function mergeHeaders(requestHeaders, content, block) {
    var tmp = buildHeaders(mergeHeaders$lambda(requestHeaders, content));
    tmp.f1d(mergeHeaders$lambda_0(block));
    var missingAgent = requestHeaders.h1c(HttpHeaders_getInstance().x1l_1) == null ? content.c1n().h1c(HttpHeaders_getInstance().x1l_1) == null : false;
    if (missingAgent ? needUserAgent() : false) {
      block(HttpHeaders_getInstance().x1l_1, KTOR_DEFAULT_USER_AGENT);
    }
    var tmp0_safe_receiver = content.b1s();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    var type = tmp1_elvis_lhs == null ? content.c1n().h1c(HttpHeaders_getInstance().r1j_1) : tmp1_elvis_lhs;
    var tmp2_safe_receiver = content.c1s();
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString();
    var length = tmp3_elvis_lhs == null ? content.c1n().h1c(HttpHeaders_getInstance().o1j_1) : tmp3_elvis_lhs;
    var tmp4_safe_receiver = type;
    if (tmp4_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = block(HttpHeaders_getInstance().r1j_1, tmp4_safe_receiver);
    }
    var tmp5_safe_receiver = length;
    if (tmp5_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$1 = block(HttpHeaders_getInstance().o1j_1, tmp5_safe_receiver);
    }
  }
  function needUserAgent() {
    return !PlatformUtils_getInstance().u1g_1;
  }
  function mergeHeaders$lambda($requestHeaders, $content) {
    return function ($this$buildHeaders) {
      $this$buildHeaders.n1d($requestHeaders);
      $this$buildHeaders.n1d($content.c1n());
      return Unit_getInstance();
    };
  }
  function mergeHeaders$lambda_0($block) {
    return function (key, values) {
      var tmp;
      if (HttpHeaders_getInstance().o1j_1 === key) {
        return Unit_getInstance();
      }
      var tmp_0;
      if (HttpHeaders_getInstance().r1j_1 === key) {
        return Unit_getInstance();
      }
      $block(key, joinToString$default(values, ',', null, null, 0, null, null, 62, null));
      return Unit_getInstance();
    };
  }
  function get_UploadProgressListenerAttributeKey() {
    init_properties_BodyProgress_kt_2jnetn();
    return UploadProgressListenerAttributeKey;
  }
  var UploadProgressListenerAttributeKey;
  function get_DownloadProgressListenerAttributeKey() {
    init_properties_BodyProgress_kt_2jnetn();
    return DownloadProgressListenerAttributeKey;
  }
  var DownloadProgressListenerAttributeKey;
  function handle($this, scope) {
    var observableContentPhase = new PipelinePhase('ObservableContent');
    scope.w2l_1.a1g(Phases_getInstance().v2u_1, observableContentPhase);
    scope.w2l_1.d1g(observableContentPhase, BodyProgress$handle$slambda_0(null));
    var tmp = Phases_getInstance_2().z2u_1;
    scope.z2l_1.d1g(tmp, BodyProgress$handle$slambda_2(null));
  }
  function Plugin() {
    Plugin_instance = this;
    this.a2v_1 = new AttributeKey('BodyProgress');
  }
  Plugin.prototype.n = function () {
    return this.a2v_1;
  };
  Plugin.prototype.b2v = function (block) {
    return new BodyProgress();
  };
  Plugin.prototype.b2p = function (block) {
    return this.b2v(block);
  };
  Plugin.prototype.c2v = function (plugin, scope) {
    handle(plugin, scope);
  };
  Plugin.prototype.c2p = function (plugin, scope) {
    return this.c2v(plugin instanceof BodyProgress ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function BodyProgress$handle$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  BodyProgress$handle$slambda.prototype.q2m = function ($this$intercept, content, $cont) {
    var tmp = this.r2m($this$intercept, content, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  BodyProgress$handle$slambda.prototype.z5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q2m(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  BodyProgress$handle$slambda.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.l2v_1.z1f_1.b2o_1.x1b(get_UploadProgressListenerAttributeKey());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.n2v_1 = tmp_1;
            var tmp_2 = this;
            var tmp_3 = this.m2v_1;
            tmp_2.o2v_1 = new ObservableContent(tmp_3 instanceof OutgoingContent ? tmp_3 : THROW_CCE(), this.l2v_1.z1f_1.a2o_1, this.n2v_1);
            this.oe_1 = 1;
            suspendResult = this.l2v_1.d1f(this.o2v_1, this);
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
  BodyProgress$handle$slambda.prototype.r2m = function ($this$intercept, content, completion) {
    var i = new BodyProgress$handle$slambda(completion);
    i.l2v_1 = $this$intercept;
    i.m2v_1 = content;
    return i;
  };
  function BodyProgress$handle$slambda_0(resultContinuation) {
    var i = new BodyProgress$handle$slambda(resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.q2m($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function BodyProgress$handle$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  BodyProgress$handle$slambda_1.prototype.b2w = function ($this$intercept, response, $cont) {
    var tmp = this.c2w($this$intercept, response, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  BodyProgress$handle$slambda_1.prototype.z5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.b2w(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $cont);
  };
  BodyProgress$handle$slambda_1.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.y2v_1.e2r().g2q().l2p().x1b(get_DownloadProgressListenerAttributeKey());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.z2v_1 = tmp_1;
            this.a2w_1 = withObservableDownload(this.y2v_1, this.z2v_1);
            this.oe_1 = 1;
            suspendResult = this.x2v_1.d1f(this.a2w_1, this);
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
  BodyProgress$handle$slambda_1.prototype.c2w = function ($this$intercept, response, completion) {
    var i = new BodyProgress$handle$slambda_1(completion);
    i.x2v_1 = $this$intercept;
    i.y2v_1 = response;
    return i;
  };
  function BodyProgress$handle$slambda_2(resultContinuation) {
    var i = new BodyProgress$handle$slambda_1(resultContinuation);
    var l = function ($this$intercept, response, $cont) {
      return i.b2w($this$intercept, response, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function BodyProgress() {
    Plugin_getInstance();
  }
  function withObservableDownload(_this__u8e3s4, listener) {
    init_properties_BodyProgress_kt_2jnetn();
    var observableByteChannel = observable(_this__u8e3s4.z2d(), _this__u8e3s4.vf(), contentLength(_this__u8e3s4), listener);
    return wrapWithContent(_this__u8e3s4, observableByteChannel);
  }
  var properties_initialized_BodyProgress_kt_pmfrhr;
  function init_properties_BodyProgress_kt_2jnetn() {
    if (properties_initialized_BodyProgress_kt_pmfrhr) {
    } else {
      properties_initialized_BodyProgress_kt_pmfrhr = true;
      UploadProgressListenerAttributeKey = new AttributeKey('UploadProgressListenerAttributeKey');
      DownloadProgressListenerAttributeKey = new AttributeKey('DownloadProgressListenerAttributeKey');
    }
  }
  function get_ValidateMark() {
    init_properties_DefaultResponseValidation_kt_dx65ax();
    return ValidateMark;
  }
  var ValidateMark;
  function addDefaultResponseValidation(_this__u8e3s4) {
    init_properties_DefaultResponseValidation_kt_dx65ax();
    HttpResponseValidator(_this__u8e3s4, addDefaultResponseValidation$lambda(_this__u8e3s4));
  }
  function RedirectResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.e2w_1 = 'Unhandled redirect: ' + response.e2r().g2q().f2r().l1n_1 + ' ' + response.e2r().g2q().i2q() + '. ' + ('Status: ' + response.j2q() + '. Text: "' + cachedResponseText + '"');
    captureStack(this, RedirectResponseException);
  }
  RedirectResponseException.prototype.f6 = function () {
    return this.e2w_1;
  };
  Object.defineProperty(RedirectResponseException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.f6();
    }
  });
  function ClientRequestException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.g2w_1 = 'Client request(' + response.e2r().g2q().f2r().l1n_1 + ' ' + response.e2r().g2q().i2q() + ') ' + ('invalid: ' + response.j2q() + '. Text: "' + cachedResponseText + '"');
    captureStack(this, ClientRequestException);
  }
  ClientRequestException.prototype.f6 = function () {
    return this.g2w_1;
  };
  Object.defineProperty(ClientRequestException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.f6();
    }
  });
  function ServerResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.i2w_1 = 'Server error(' + response.e2r().g2q().f2r().l1n_1 + ' ' + response.e2r().g2q().i2q() + ': ' + ('' + response.j2q() + '. Text: "' + cachedResponseText + '"');
    captureStack(this, ServerResponseException);
  }
  ServerResponseException.prototype.f6 = function () {
    return this.i2w_1;
  };
  Object.defineProperty(ServerResponseException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.f6();
    }
  });
  function ResponseException(response, cachedResponseText) {
    IllegalStateException_init_$Init$_0('Bad response: ' + response + '. Text: "' + cachedResponseText + '"', this);
    this.j2w_1 = response;
    captureStack(this, ResponseException);
  }
  function addDefaultResponseValidation$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  addDefaultResponseValidation$lambda$slambda.prototype.z2w = function (response, $cont) {
    var tmp = this.a2x(response, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  addDefaultResponseValidation$lambda$slambda.prototype.jf = function (p1, $cont) {
    return this.z2w(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $cont);
  };
  addDefaultResponseValidation$lambda$slambda.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 3;
            this.t2w_1 = this.s2w_1.e2r().l2p().w1b(get_ExpectSuccessAttributeKey());
            if (!this.t2w_1) {
              return Unit_getInstance();
            }

            this.u2w_1 = this.s2w_1.j2q().w1p_1;
            this.v2w_1 = this.s2w_1.e2r();
            if (this.u2w_1 < 300 ? true : this.v2w_1.l2p().y1b(get_ValidateMark())) {
              return Unit_getInstance();
            }

            this.oe_1 = 1;
            suspendResult = save(this.v2w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w2w_1 = suspendResult;
            this.w2w_1.l2p().z1b(get_ValidateMark(), Unit_getInstance());
            ;
            this.x2w_1 = this.w2w_1;
            this.y2w_1 = this.x2w_1.x2m();
            this.oe_1 = 2;
            suspendResult = bodyAsText$default(this.y2w_1, null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var exceptionResponseText = suspendResult;
            var tmp0_subject = this.u2w_1;
            if (300 <= tmp0_subject ? tmp0_subject <= 399 : false)
              throw new RedirectResponseException(this.y2w_1, exceptionResponseText);
            else if (400 <= tmp0_subject ? tmp0_subject <= 499 : false)
              throw new ClientRequestException(this.y2w_1, exceptionResponseText);
            else if (500 <= tmp0_subject ? tmp0_subject <= 599 : false)
              throw new ServerResponseException(this.y2w_1, exceptionResponseText);
            else
              throw new ResponseException(this.y2w_1, exceptionResponseText);
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
  addDefaultResponseValidation$lambda$slambda.prototype.a2x = function (response, completion) {
    var i = new addDefaultResponseValidation$lambda$slambda(completion);
    i.s2w_1 = response;
    return i;
  };
  function addDefaultResponseValidation$lambda$slambda_0(resultContinuation) {
    var i = new addDefaultResponseValidation$lambda$slambda(resultContinuation);
    var l = function (response, $cont) {
      return i.z2w(response, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function addDefaultResponseValidation$lambda($this_addDefaultResponseValidation) {
    return function ($this$HttpResponseValidator) {
      $this$HttpResponseValidator.d2x_1 = $this_addDefaultResponseValidation.i2o_1;
      $this$HttpResponseValidator.e2x(addDefaultResponseValidation$lambda$slambda_0(null));
      return Unit_getInstance();
    };
  }
  var properties_initialized_DefaultResponseValidation_kt_akvzqt;
  function init_properties_DefaultResponseValidation_kt_dx65ax() {
    if (properties_initialized_DefaultResponseValidation_kt_akvzqt) {
    } else {
      properties_initialized_DefaultResponseValidation_kt_akvzqt = true;
      ValidateMark = new AttributeKey('ValidateMark');
    }
  }
  function defaultTransformers(_this__u8e3s4) {
    var tmp = Phases_getInstance().v2u_1;
    _this__u8e3s4.w2l_1.d1g(tmp, defaultTransformers$slambda_0(null));
    var tmp_0 = Phases_getInstance_1().v2o_1;
    _this__u8e3s4.x2l_1.d1g(tmp_0, defaultTransformers$slambda_2(null));
    platformResponseDefaultTransformers(_this__u8e3s4);
  }
  function defaultTransformers$1$content$1($contentType, $body) {
    this.i2x_1 = $body;
    ByteArrayContent.call(this);
    var tmp = this;
    var tmp0_elvis_lhs = $contentType;
    tmp.g2x_1 = tmp0_elvis_lhs == null ? Application_getInstance().p1h_1 : tmp0_elvis_lhs;
    this.h2x_1 = toLong($body.length);
  }
  defaultTransformers$1$content$1.prototype.b1s = function () {
    return this.g2x_1;
  };
  defaultTransformers$1$content$1.prototype.c1s = function () {
    return this.h2x_1;
  };
  defaultTransformers$1$content$1.prototype.d1s = function () {
    return this.i2x_1;
  };
  function defaultTransformers$1$content$2($this_intercept, $contentType, $body) {
    this.m2x_1 = $body;
    ReadChannelContent.call(this);
    var tmp = this;
    var tmp0_safe_receiver = $this_intercept.z1f_1.y2n_1.h1c(HttpHeaders_getInstance().o1j_1);
    tmp.k2x_1 = tmp0_safe_receiver == null ? null : toLong_0(tmp0_safe_receiver);
    var tmp_0 = this;
    var tmp0_elvis_lhs = $contentType;
    tmp_0.l2x_1 = tmp0_elvis_lhs == null ? Application_getInstance().p1h_1 : tmp0_elvis_lhs;
  }
  defaultTransformers$1$content$2.prototype.c1s = function () {
    return this.k2x_1;
  };
  defaultTransformers$1$content$2.prototype.b1s = function () {
    return this.l2x_1;
  };
  defaultTransformers$1$content$2.prototype.g1s = function () {
    return this.m2x_1;
  };
  function defaultTransformers$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  defaultTransformers$slambda.prototype.q2m = function ($this$intercept, body, $cont) {
    var tmp = this.r2m($this$intercept, body, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  defaultTransformers$slambda.prototype.z5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q2m(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  defaultTransformers$slambda.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 3;
            if (this.v2x_1.z1f_1.y2n_1.h1c(HttpHeaders_getInstance().z1i_1) == null) {
              this.v2x_1.z1f_1.y2n_1.m1d(HttpHeaders_getInstance().z1i_1, '*/*');
            }

            this.x2x_1 = contentType(this.v2x_1.z1f_1);
            var tmp_0 = this;
            var tmp0_subject = this.w2x_1;
            var tmp_1;
            if (typeof tmp0_subject === 'string') {
              var tmp1_elvis_lhs = this.x2x_1;
              var tmp_2 = tmp1_elvis_lhs == null ? Text_getInstance().g1i_1 : tmp1_elvis_lhs;
              tmp_1 = TextContent_init_$Create$(this.w2x_1, tmp_2, null, 4, null);
            } else {
              if (isByteArray(tmp0_subject)) {
                tmp_1 = new defaultTransformers$1$content$1(this.x2x_1, this.w2x_1);
              } else {
                if (isInterface(tmp0_subject, ByteReadChannel)) {
                  tmp_1 = new defaultTransformers$1$content$2(this.v2x_1, this.x2x_1, this.w2x_1);
                } else {
                  if (tmp0_subject instanceof OutgoingContent) {
                    tmp_1 = this.w2x_1;
                  } else {
                    tmp_1 = platformRequestDefaultTransform(this.x2x_1, this.v2x_1.z1f_1, this.w2x_1);
                  }
                }
              }
            }

            tmp_0.y2x_1 = tmp_1;
            if (!(this.y2x_1 == null)) {
              this.v2x_1.z1f_1.y2n_1.o1d(HttpHeaders_getInstance().r1j_1);
              this.oe_1 = 1;
              suspendResult = this.v2x_1.d1f(this.y2x_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.oe_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            ;
            this.oe_1 = 2;
            continue $sm;
          case 2:
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
  defaultTransformers$slambda.prototype.r2m = function ($this$intercept, body, completion) {
    var i = new defaultTransformers$slambda(completion);
    i.v2x_1 = $this$intercept;
    i.w2x_1 = body;
    return i;
  };
  function defaultTransformers$slambda_0(resultContinuation) {
    var i = new defaultTransformers$slambda(resultContinuation);
    var l = function ($this$intercept, body, $cont) {
      return i.q2m($this$intercept, body, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function defaultTransformers$slambda$slambda($body, $response, resultContinuation) {
    this.h2y_1 = $body;
    this.i2y_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  defaultTransformers$slambda$slambda.prototype.c2s = function ($this$writer, $cont) {
    var tmp = this.d2s($this$writer, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  defaultTransformers$slambda$slambda.prototype.jf = function (p1, $cont) {
    return this.c2s((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  defaultTransformers$slambda$slambda.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 5;
            this.oe_1 = 1;
            continue $sm;
          case 1:
            this.pe_1 = 4;
            this.pe_1 = 3;
            this.oe_1 = 2;
            var tmp_0 = this.j2y_1.s13();
            Companion_getInstance_0();
            suspendResult = copyTo(this.h2y_1, tmp_0, new Long(-1, 2147483647), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_1 = this;
            tmp_1.k2y_1 = Unit_getInstance();
            this.pe_1 = 5;
            this.oe_1 = 6;
            continue $sm;
          case 3:
            this.pe_1 = 4;
            var tmp_2 = this.re_1;
            if (tmp_2 instanceof CancellationException) {
              var cause = this.re_1;
              var tmp_3 = this;
              cancel_0(this.i2y_1, cause);
              throw cause;
            } else {
              var tmp_4 = this.re_1;
              if (tmp_4 instanceof Error) {
                var cause_0 = this.re_1;
                var tmp_5 = this;
                cancel(this.i2y_1, 'Receive failed', cause_0);
                throw cause_0;
              } else {
                throw this.re_1;
              }
            }

            break;
          case 4:
            this.pe_1 = 5;
            var t = this.re_1;
            complete(this.i2y_1);
            ;
            throw t;
          case 5:
            throw this.re_1;
          case 6:
            complete(this.i2y_1);
            ;
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.pe_1 === 5) {
          throw $p;
        } else {
          this.oe_1 = this.pe_1;
          this.re_1 = $p;
        }
      }
     while (true);
  };
  defaultTransformers$slambda$slambda.prototype.d2s = function ($this$writer, completion) {
    var i = new defaultTransformers$slambda$slambda(this.h2y_1, this.i2y_1, completion);
    i.j2y_1 = $this$writer;
    return i;
  };
  function defaultTransformers$slambda$slambda_0($body, $response, resultContinuation) {
    var i = new defaultTransformers$slambda$slambda($body, $response, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.c2s($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function defaultTransformers$slambda$lambda($responseJobHolder) {
    return function (it) {
      $responseJobHolder.kl();
      return Unit_getInstance();
    };
  }
  function defaultTransformers$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  defaultTransformers$slambda_1.prototype.k2n = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
    var tmp = this.l2n($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  defaultTransformers$slambda_1.prototype.z5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.k2n(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  defaultTransformers$slambda_1.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 11;
            this.v2y_1 = this.u2y_1.s2();
            this.w2y_1 = this.u2y_1.t2();
            var tmp_0 = this.w2y_1;
            if (!isInterface(tmp_0, ByteReadChannel))
              return Unit_getInstance();
            this.x2y_1 = this.t2y_1.z1f_1.x2m();
            var tmp_1 = this;
            var tmp0_safe_receiver = this.x2y_1.c1n().h1c(HttpHeaders_getInstance().o1j_1);
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toLong_0(tmp0_safe_receiver);
            var tmp_2;
            if (tmp1_elvis_lhs == null) {
              Companion_getInstance_0();
              tmp_2 = new Long(-1, 2147483647);
            } else {
              tmp_2 = tmp1_elvis_lhs;
            }

            tmp_1.y2y_1 = tmp_2;
            this.z2y_1 = this.v2y_1.q1g_1;
            if (this.z2y_1.equals(getKClass(Unit))) {
              cancel_1(this.w2y_1);
              this.oe_1 = 9;
              suspendResult = this.t2y_1.d1f(new HttpResponseContainer(this.v2y_1, Unit_getInstance()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.z2y_1.equals(PrimitiveClasses_getInstance().ec())) {
                this.oe_1 = 7;
                suspendResult = this.w2y_1.j13(new Long(0, 0), this, 1, null);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (this.z2y_1.equals(getKClass(ByteReadPacket)) ? true : this.z2y_1.equals(getKClass(Input))) {
                  this.oe_1 = 5;
                  suspendResult = this.w2y_1.j13(new Long(0, 0), this, 1, null);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.z2y_1.equals(PrimitiveClasses_getInstance().mc())) {
                    this.oe_1 = 3;
                    suspendResult = this.w2y_1.i13(this.y2y_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (this.z2y_1.equals(getKClass(ByteReadChannel))) {
                      this.a2z_1 = Job(this.x2y_1.vf().i3(Key_getInstance()));
                      var tmp_3 = this;
                      var tmp_4 = this.x2y_1.vf();
                      var tmp1_also = writer$default(this.t2y_1, tmp_4, false, defaultTransformers$slambda$slambda_0(this.w2y_1, this.x2y_1, null), 2, null);
                      tmp1_also.wg(defaultTransformers$slambda$lambda(this.a2z_1));
                      tmp_3.b2z_1 = tmp1_also.s13();
                      this.oe_1 = 2;
                      suspendResult = this.t2y_1.d1f(new HttpResponseContainer(this.v2y_1, this.b2z_1), this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      if (this.z2y_1.equals(getKClass(HttpStatusCode))) {
                        cancel_1(this.w2y_1);
                        this.oe_1 = 1;
                        suspendResult = this.t2y_1.d1f(new HttpResponseContainer(this.v2y_1, this.x2y_1.j2q()), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.oe_1 = 10;
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

            break;
          case 1:
            ;
            this.oe_1 = 10;
            continue $sm;
          case 2:
            ;
            this.oe_1 = 10;
            continue $sm;
          case 3:
            this.c2z_1 = suspendResult;
            Companion_getInstance_0();
            if (this.y2y_1.s(new Long(-1, 2147483647)) < 0) {
              var tmp0_check = this.c2z_1.f11().equals(this.y2y_1);
              if (!tmp0_check) {
                var message = 'Expected ' + toString(this.y2y_1) + ', actual ' + toString(this.c2z_1.f11());
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }

            this.oe_1 = 4;
            suspendResult = this.t2y_1.d1f(new HttpResponseContainer(this.v2y_1, readBytes$default(this.c2z_1, 0, 1, null)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            ;
            this.oe_1 = 10;
            continue $sm;
          case 5:
            this.d2z_1 = suspendResult;
            this.e2z_1 = new HttpResponseContainer(this.v2y_1, this.d2z_1);
            this.oe_1 = 6;
            suspendResult = this.t2y_1.d1f(this.e2z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            ;
            this.oe_1 = 10;
            continue $sm;
          case 7:
            this.f2z_1 = suspendResult;
            var tmp_5 = this;
            tmp_5.g2z_1 = this.f2z_1.u17(0, 0, 3, null);
            this.h2z_1 = toInt(this.g2z_1);
            this.i2z_1 = new HttpResponseContainer(this.v2y_1, this.h2z_1);
            this.oe_1 = 8;
            suspendResult = this.t2y_1.d1f(this.i2z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            ;
            this.oe_1 = 10;
            continue $sm;
          case 9:
            ;
            this.oe_1 = 10;
            continue $sm;
          case 10:
            return Unit_getInstance();
          case 11:
            throw this.re_1;
        }
      } catch ($p) {
        if (this.pe_1 === 11) {
          throw $p;
        } else {
          this.oe_1 = this.pe_1;
          this.re_1 = $p;
        }
      }
     while (true);
  };
  defaultTransformers$slambda_1.prototype.l2n = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new defaultTransformers$slambda_1(completion);
    i.t2y_1 = $this$intercept;
    i.u2y_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  function defaultTransformers$slambda_2(resultContinuation) {
    var i = new defaultTransformers$slambda_1(resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
      return i.k2n($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function get_ExpectSuccessAttributeKey() {
    init_properties_HttpCallValidator_kt_nw40ag();
    return ExpectSuccessAttributeKey;
  }
  var ExpectSuccessAttributeKey;
  function HttpCallValidator$Companion$install$slambda$lambda($plugin) {
    return function () {
      return $plugin.l2z_1;
    };
  }
  function HttpCallValidator$Companion$install$slambda($plugin, resultContinuation) {
    this.u2z_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpCallValidator$Companion$install$slambda.prototype.q2m = function ($this$intercept, it, $cont) {
    var tmp = this.r2m($this$intercept, it, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  HttpCallValidator$Companion$install$slambda.prototype.z5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q2m(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpCallValidator$Companion$install$slambda.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 5;
            this.pe_1 = 3;
            var tmp_0 = get_ExpectSuccessAttributeKey();
            this.v2z_1.z1f_1.b2o_1.b1c(tmp_0, HttpCallValidator$Companion$install$slambda$lambda(this.u2z_1));
            ;
            this.oe_1 = 1;
            suspendResult = this.v2z_1.d1f(this.w2z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.pe_1 = 5;
            this.oe_1 = 2;
            continue $sm;
          case 2:
            this.pe_1 = 5;
            return Unit_getInstance();
          case 3:
            this.pe_1 = 5;
            var tmp_1 = this.re_1;
            if (tmp_1 instanceof Error) {
              this.x2z_1 = this.re_1;
              this.y2z_1 = unwrapCancellationException(this.x2z_1);
              this.oe_1 = 4;
              suspendResult = processException(this.u2z_1, this.y2z_1, HttpRequest(this.v2z_1.z1f_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.re_1;
            }

            break;
          case 4:
            throw this.y2z_1;
          case 5:
            throw this.re_1;
        }
      } catch ($p) {
        if (this.pe_1 === 5) {
          throw $p;
        } else {
          this.oe_1 = this.pe_1;
          this.re_1 = $p;
        }
      }
     while (true);
  };
  HttpCallValidator$Companion$install$slambda.prototype.r2m = function ($this$intercept, it, completion) {
    var i = new HttpCallValidator$Companion$install$slambda(this.u2z_1, completion);
    i.v2z_1 = $this$intercept;
    i.w2z_1 = it;
    return i;
  };
  function HttpCallValidator$Companion$install$slambda_0($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.q2m($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpCallValidator$Companion$install$slambda_1($plugin, resultContinuation) {
    this.h30_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpCallValidator$Companion$install$slambda_1.prototype.k2n = function ($this$intercept, container, $cont) {
    var tmp = this.l2n($this$intercept, container, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  HttpCallValidator$Companion$install$slambda_1.prototype.z5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.k2n(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  HttpCallValidator$Companion$install$slambda_1.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 5;
            this.pe_1 = 3;
            this.oe_1 = 1;
            suspendResult = this.i30_1.d1f(this.j30_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.pe_1 = 5;
            this.oe_1 = 2;
            continue $sm;
          case 2:
            this.pe_1 = 5;
            return Unit_getInstance();
          case 3:
            this.pe_1 = 5;
            var tmp_0 = this.re_1;
            if (tmp_0 instanceof Error) {
              this.k30_1 = this.re_1;
              this.l30_1 = unwrapCancellationException(this.k30_1);
              this.oe_1 = 4;
              suspendResult = processException(this.h30_1, this.l30_1, this.i30_1.z1f_1.g2q(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.re_1;
            }

            break;
          case 4:
            throw this.l30_1;
          case 5:
            throw this.re_1;
        }
      } catch ($p) {
        if (this.pe_1 === 5) {
          throw $p;
        } else {
          this.oe_1 = this.pe_1;
          this.re_1 = $p;
        }
      }
     while (true);
  };
  HttpCallValidator$Companion$install$slambda_1.prototype.l2n = function ($this$intercept, container, completion) {
    var i = new HttpCallValidator$Companion$install$slambda_1(this.h30_1, completion);
    i.i30_1 = $this$intercept;
    i.j30_1 = container;
    return i;
  };
  function HttpCallValidator$Companion$install$slambda_2($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, container, $cont) {
      return i.k2n($this$intercept, container, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpCallValidator$Companion$install$slambda_3($plugin, resultContinuation) {
    this.u30_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpCallValidator$Companion$install$slambda_3.prototype.y30 = function ($this$intercept, request, $cont) {
    var tmp = this.z30($this$intercept, request, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  HttpCallValidator$Companion$install$slambda_3.prototype.z5 = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.y30(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $cont);
  };
  HttpCallValidator$Companion$install$slambda_3.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 3;
            this.oe_1 = 1;
            suspendResult = this.v30_1.z2o(this.w30_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.x30_1 = suspendResult;
            this.oe_1 = 2;
            suspendResult = validateResponse(this.u30_1, this.x30_1.x2m(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return this.x30_1;
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
  HttpCallValidator$Companion$install$slambda_3.prototype.z30 = function ($this$intercept, request, completion) {
    var i = new HttpCallValidator$Companion$install$slambda_3(this.u30_1, completion);
    i.v30_1 = $this$intercept;
    i.w30_1 = request;
    return i;
  };
  function HttpCallValidator$Companion$install$slambda_4($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda_3($plugin, resultContinuation);
    var l = function ($this$intercept, request, $cont) {
      return i.y30($this$intercept, request, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function validateResponse($this, response, $cont) {
    var tmp = new $validateResponseCOROUTINE$4($this, response, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  }
  function processException($this, cause, request, $cont) {
    var tmp = new $processExceptionCOROUTINE$5($this, cause, request, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  }
  function Config() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.b2x_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.c2x_1 = tmp$ret$1;
    this.d2x_1 = true;
  }
  Config.prototype.e2x = function (block) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.b2x_1;
    tmp0_plusAssign.a(block);
  };
  function Companion_1() {
    Companion_instance_1 = this;
    this.c32_1 = new AttributeKey('HttpResponseValidator');
  }
  Companion_1.prototype.n = function () {
    return this.c32_1;
  };
  Companion_1.prototype.d32 = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    return new HttpCallValidator(reversed(config.b2x_1), reversed(config.c2x_1), config.d2x_1);
  };
  Companion_1.prototype.b2p = function (block) {
    return this.d32(block);
  };
  Companion_1.prototype.e32 = function (plugin_0, scope) {
    var tmp = Phases_getInstance().s2u_1;
    scope.w2l_1.d1g(tmp, HttpCallValidator$Companion$install$slambda_0(plugin_0, null));
    var BeforeReceive = new PipelinePhase('BeforeReceive');
    scope.x2l_1.c1g(Phases_getInstance_1().u2o_1, BeforeReceive);
    scope.x2l_1.d1g(BeforeReceive, HttpCallValidator$Companion$install$slambda_2(plugin_0, null));
    var tmp_0 = plugin(scope, Plugin_getInstance_3());
    tmp_0.h32(HttpCallValidator$Companion$install$slambda_4(plugin_0, null));
  };
  Companion_1.prototype.c2p = function (plugin, scope) {
    return this.e32(plugin instanceof HttpCallValidator ? plugin : THROW_CCE(), scope);
  };
  var Companion_instance_1;
  function Companion_getInstance_9() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $validateResponseCOROUTINE$4(_this__u8e3s4, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i31_1 = _this__u8e3s4;
    this.j31_1 = response;
  }
  $validateResponseCOROUTINE$4.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 4;
            var tmp_0 = this;
            tmp_0.k31_1 = this.i31_1.j2z_1;
            this.l31_1 = this.k31_1.j();
            this.oe_1 = 1;
            continue $sm;
          case 1:
            if (!this.l31_1.k()) {
              this.oe_1 = 3;
              continue $sm;
            }

            this.m31_1 = this.l31_1.l();
            this.oe_1 = 2;
            suspendResult = this.m31_1(this.j31_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.oe_1 = 1;
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.re_1;
        }
      } catch ($p) {
        if (this.pe_1 === 4) {
          throw $p;
        } else {
          this.oe_1 = this.pe_1;
          this.re_1 = $p;
        }
      }
     while (true);
  };
  function $processExceptionCOROUTINE$5(_this__u8e3s4, cause, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v31_1 = _this__u8e3s4;
    this.w31_1 = cause;
    this.x31_1 = request;
  }
  $processExceptionCOROUTINE$5.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 6;
            var tmp_0 = this;
            tmp_0.y31_1 = this.v31_1.k2z_1;
            this.z31_1 = this.y31_1.j();
            this.oe_1 = 1;
            continue $sm;
          case 1:
            if (!this.z31_1.k()) {
              this.oe_1 = 5;
              continue $sm;
            }

            this.a32_1 = this.z31_1.l();
            this.b32_1 = this.a32_1;
            var tmp_1 = this.b32_1;
            if (tmp_1 instanceof ExceptionHandlerWrapper) {
              this.oe_1 = 3;
              suspendResult = this.a32_1.j32_1(this.w31_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_2 = this.b32_1;
              if (tmp_2 instanceof RequestExceptionHandlerWrapper) {
                this.oe_1 = 2;
                suspendResult = this.a32_1.i32_1(this.w31_1, this.x31_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.oe_1 = 4;
                continue $sm;
              }
            }

            break;
          case 2:
            this.oe_1 = 4;
            continue $sm;
          case 3:
            this.oe_1 = 4;
            continue $sm;
          case 4:
            this.oe_1 = 1;
            continue $sm;
          case 5:
            return Unit_getInstance();
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
  function HttpCallValidator(responseValidators, callExceptionHandlers, expectSuccess) {
    Companion_getInstance_9();
    this.j2z_1 = responseValidators;
    this.k2z_1 = callExceptionHandlers;
    this.l2z_1 = expectSuccess;
  }
  function ExceptionHandlerWrapper() {
  }
  function RequestExceptionHandlerWrapper() {
  }
  function HttpRequest(builder) {
    init_properties_HttpCallValidator_kt_nw40ag();
    return new HttpRequest$1(builder);
  }
  function HttpResponseValidator(_this__u8e3s4, block) {
    init_properties_HttpCallValidator_kt_nw40ag();
    _this__u8e3s4.d2p(Companion_getInstance_9(), block);
  }
  function HttpRequest$1($builder) {
    this.o32_1 = $builder;
    this.k32_1 = $builder.x2n_1;
    this.l32_1 = $builder.w2n_1.i11();
    this.m32_1 = $builder.b2o_1;
    this.n32_1 = $builder.y2n_1.i11();
  }
  HttpRequest$1.prototype.e2r = function () {
    throw IllegalStateException_init_$Create$('Call is not initialized');
  };
  HttpRequest$1.prototype.f2r = function () {
    return this.k32_1;
  };
  HttpRequest$1.prototype.i2q = function () {
    return this.l32_1;
  };
  HttpRequest$1.prototype.l2p = function () {
    return this.m32_1;
  };
  HttpRequest$1.prototype.c1n = function () {
    return this.n32_1;
  };
  var properties_initialized_HttpCallValidator_kt_xrx49w;
  function init_properties_HttpCallValidator_kt_nw40ag() {
    if (properties_initialized_HttpCallValidator_kt_xrx49w) {
    } else {
      properties_initialized_HttpCallValidator_kt_xrx49w = true;
      ExpectSuccessAttributeKey = new AttributeKey('ExpectSuccessAttributeKey');
    }
  }
  function get_PLUGIN_INSTALLED_LIST() {
    init_properties_HttpClientPlugin_kt_hdphw();
    return PLUGIN_INSTALLED_LIST;
  }
  var PLUGIN_INSTALLED_LIST;
  function plugin(_this__u8e3s4, plugin) {
    init_properties_HttpClientPlugin_kt_hdphw();
    var tmp0_elvis_lhs = pluginOrNull(_this__u8e3s4, plugin);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Plugin ' + plugin + ' is not installed. Consider using `install(' + plugin.n() + ')` in client config first.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function HttpClientPlugin() {
  }
  function pluginOrNull(_this__u8e3s4, plugin) {
    init_properties_HttpClientPlugin_kt_hdphw();
    var tmp0_safe_receiver = _this__u8e3s4.a2m_1.x1b(get_PLUGIN_INSTALLED_LIST());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x1b(plugin.n());
  }
  var properties_initialized_HttpClientPlugin_kt_p98320;
  function init_properties_HttpClientPlugin_kt_hdphw() {
    if (properties_initialized_HttpClientPlugin_kt_p98320) {
    } else {
      properties_initialized_HttpClientPlugin_kt_p98320 = true;
      PLUGIN_INSTALLED_LIST = new AttributeKey('ApplicationPluginRegistry');
    }
  }
  function HttpPlainText$Plugin$install$slambda($plugin, resultContinuation) {
    this.x32_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpPlainText$Plugin$install$slambda.prototype.q2m = function ($this$intercept, content, $cont) {
    var tmp = this.r2m($this$intercept, content, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  HttpPlainText$Plugin$install$slambda.prototype.z5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q2m(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpPlainText$Plugin$install$slambda.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 2;
            this.x32_1.e33(this.y32_1.z1f_1);
            var tmp_0 = this.z32_1;
            if (!(typeof tmp_0 === 'string'))
              return Unit_getInstance();
            this.a33_1 = contentType(this.y32_1.z1f_1);
            if (!(this.a33_1 == null) ? !(this.a33_1.q1i_1 === Text_getInstance().g1i_1.q1i_1) : false) {
              return Unit_getInstance();
            }

            this.oe_1 = 1;
            suspendResult = this.y32_1.d1f(wrapContent(this.x32_1, this.z32_1, this.a33_1), this);
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
  HttpPlainText$Plugin$install$slambda.prototype.r2m = function ($this$intercept, content, completion) {
    var i = new HttpPlainText$Plugin$install$slambda(this.x32_1, completion);
    i.y32_1 = $this$intercept;
    i.z32_1 = content;
    return i;
  };
  function HttpPlainText$Plugin$install$slambda_0($plugin, resultContinuation) {
    var i = new HttpPlainText$Plugin$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.q2m($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpPlainText$Plugin$install$slambda_1($plugin, resultContinuation) {
    this.n33_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpPlainText$Plugin$install$slambda_1.prototype.k2n = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
    var tmp = this.l2n($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  HttpPlainText$Plugin$install$slambda_1.prototype.z5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.k2n(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  HttpPlainText$Plugin$install$slambda_1.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 3;
            this.q33_1 = this.p33_1.s2();
            this.r33_1 = this.p33_1.t2();
            var tmp_0;
            if (!this.q33_1.q1g_1.equals(PrimitiveClasses_getInstance().ic())) {
              tmp_0 = true;
            } else {
              var tmp_1 = this.r33_1;
              tmp_0 = !isInterface(tmp_1, ByteReadChannel);
            }

            if (tmp_0)
              return Unit_getInstance();
            this.oe_1 = 1;
            suspendResult = this.r33_1.j13(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.s33_1 = suspendResult;
            this.t33_1 = this.n33_1.u33(this.o33_1.z1f_1, this.s33_1);
            this.oe_1 = 2;
            suspendResult = this.o33_1.d1f(new HttpResponseContainer(this.q33_1, this.t33_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
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
  HttpPlainText$Plugin$install$slambda_1.prototype.l2n = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new HttpPlainText$Plugin$install$slambda_1(this.n33_1, completion);
    i.o33_1 = $this$intercept;
    i.p33_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  function HttpPlainText$Plugin$install$slambda_2($plugin, resultContinuation) {
    var i = new HttpPlainText$Plugin$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
      return i.k2n($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Config_0() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$0 = LinkedHashSet_init_$Create$();
    tmp.v33_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$1 = LinkedHashMap_init_$Create$();
    tmp_0.w33_1 = tmp$ret$1;
    this.x33_1 = null;
    this.y33_1 = Charsets_getInstance().d18_1;
  }
  function Plugin_0() {
    Plugin_instance_0 = this;
    this.z33_1 = new AttributeKey('HttpPlainText');
  }
  Plugin_0.prototype.n = function () {
    return this.z33_1;
  };
  Plugin_0.prototype.d32 = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config_0();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    return new HttpPlainText(config.v33_1, config.w33_1, config.x33_1, config.y33_1);
  };
  Plugin_0.prototype.b2p = function (block) {
    return this.d32(block);
  };
  Plugin_0.prototype.a34 = function (plugin, scope) {
    var tmp = Phases_getInstance().v2u_1;
    scope.w2l_1.d1g(tmp, HttpPlainText$Plugin$install$slambda_0(plugin, null));
    var tmp_0 = Phases_getInstance_1().w2o_1;
    scope.x2l_1.d1g(tmp_0, HttpPlainText$Plugin$install$slambda_2(plugin, null));
  };
  Plugin_0.prototype.c2p = function (plugin, scope) {
    return this.a34(plugin instanceof HttpPlainText ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_0;
  function Plugin_getInstance_0() {
    if (Plugin_instance_0 == null)
      new Plugin_0();
    return Plugin_instance_0;
  }
  function wrapContent($this, content, requestContentType) {
    var tmp0_elvis_lhs = requestContentType;
    var contentType = tmp0_elvis_lhs == null ? Text_getInstance().g1i_1 : tmp0_elvis_lhs;
    var tmp1_safe_receiver = requestContentType;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : charset(tmp1_safe_receiver);
    var charset_0 = tmp2_elvis_lhs == null ? $this.c33_1 : tmp2_elvis_lhs;
    var tmp = withCharset(contentType, charset_0);
    return TextContent_init_$Create$(content, tmp, null, 4, null);
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.b34_1 = function_0;
  }
  sam$kotlin_Comparator$0.prototype.dd = function (a, b) {
    return this.b34_1(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.dd(a, b);
  };
  function HttpPlainText$lambda(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    tmp$ret$0 = b.r2_1;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    tmp$ret$1 = a.r2_1;
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function HttpPlainText$lambda_0(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    tmp$ret$0 = get_name(a);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    tmp$ret$1 = get_name(b);
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function HttpPlainText(charsets, charsetQuality, sendCharset, responseCharsetFallback) {
    Plugin_getInstance_0();
    this.b33_1 = responseCharsetFallback;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.sortedByDescending' call
    var tmp0_sortedByDescending = toList(charsetQuality);
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = HttpPlainText$lambda;
    tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
    tmp$ret$1 = sortedWith(tmp0_sortedByDescending, tmp$ret$0);
    var withQuality = tmp$ret$1;
    var tmp$ret$6;
    // Inline function 'kotlin.collections.sortedBy' call
    var tmp$ret$4;
    // Inline function 'kotlin.collections.filter' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = charsets.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      var tmp$ret$2;
      // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
      tmp$ret$2 = !charsetQuality.p1(element);
      if (tmp$ret$2) {
        tmp0_filterTo.a(element);
      }
    }
    tmp$ret$3 = tmp0_filterTo;
    tmp$ret$4 = tmp$ret$3;
    var tmp1_sortedBy = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = HttpPlainText$lambda_0;
    tmp$ret$5 = new sam$kotlin_Comparator$0(tmp_0);
    tmp$ret$6 = sortedWith(tmp1_sortedBy, tmp$ret$5);
    var withoutQuality = tmp$ret$6;
    var tmp_1 = this;
    var tmp$ret$13;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$12;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = withoutQuality.j();
    while (tmp0_iterator_0.k()) {
      var element_0 = tmp0_iterator_0.l();
      // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>.<anonymous>' call
      var tmp$ret$7;
      // Inline function 'kotlin.text.isNotEmpty' call
      tmp$ret$7 = charSequenceLength(tmp0_apply) > 0;
      if (tmp$ret$7) {
        tmp0_apply.wc(',');
      }
      tmp0_apply.wc(get_name(element_0));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_1 = withQuality.j();
    while (tmp0_iterator_1.k()) {
      var element_1 = tmp0_iterator_1.l();
      // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>.<anonymous>' call
      var charset = element_1.s2();
      var quality = element_1.t2();
      var tmp$ret$8;
      // Inline function 'kotlin.text.isNotEmpty' call
      tmp$ret$8 = charSequenceLength(tmp0_apply) > 0;
      if (tmp$ret$8) {
        tmp0_apply.wc(',');
      }
      // Inline function 'kotlin.check' call
      var containsArg = quality;
      var tmp0_check = 0.0 <= containsArg ? containsArg <= 1.0 : false;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$9;
        // Inline function 'kotlin.check.<anonymous>' call
        tmp$ret$9 = 'Check failed.';
        var message = tmp$ret$9;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var tmp$ret$10;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp1_roundToInt = 100 * quality;
      tmp$ret$10 = roundToInt(tmp1_roundToInt);
      var truncatedQuality = tmp$ret$10 / 100.0;
      tmp0_apply.wc(get_name(charset) + ';q=' + truncatedQuality);
    }
    var tmp$ret$11;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$11 = charSequenceLength(tmp0_apply) === 0;
    if (tmp$ret$11) {
      tmp0_apply.wc(get_name(this.b33_1));
    }
    tmp$ret$12 = tmp0_apply;
    tmp$ret$13 = tmp$ret$12.toString();
    tmp_1.d33_1 = tmp$ret$13;
    var tmp_2 = this;
    var tmp0_elvis_lhs = sendCharset;
    var tmp2_elvis_lhs = tmp0_elvis_lhs == null ? firstOrNull(withoutQuality) : tmp0_elvis_lhs;
    var tmp_3;
    if (tmp2_elvis_lhs == null) {
      var tmp1_safe_receiver = firstOrNull(withQuality);
      tmp_3 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q2_1;
    } else {
      tmp_3 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_3;
    tmp_2.c33_1 = tmp3_elvis_lhs == null ? Charsets_getInstance().d18_1 : tmp3_elvis_lhs;
  }
  HttpPlainText.prototype.u33 = function (call, body) {
    var tmp0_elvis_lhs = charset_0(call.x2m());
    var actualCharset = tmp0_elvis_lhs == null ? this.b33_1 : tmp0_elvis_lhs;
    return readText$default(body, actualCharset, 0, 2, null);
  };
  HttpPlainText.prototype.e33 = function (context) {
    if (!(context.y2n_1.h1c(HttpHeaders_getInstance().a1j_1) == null))
      return Unit_getInstance();
    context.y2n_1.k1d(HttpHeaders_getInstance().a1j_1, this.d33_1);
  };
  function get_ALLOWED_FOR_REDIRECT() {
    init_properties_HttpRedirect_kt_rcsi6u();
    return ALLOWED_FOR_REDIRECT;
  }
  var ALLOWED_FOR_REDIRECT;
  function handleCall(_this__u8e3s4, $this, context, origin, allowHttpsDowngrade, client, $cont) {
    var tmp = new $handleCallCOROUTINE$6($this, _this__u8e3s4, context, origin, allowHttpsDowngrade, client, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  }
  function HttpRedirect$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.d35_1 = $plugin;
    this.e35_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpRedirect$Plugin$install$slambda.prototype.y30 = function ($this$intercept, context, $cont) {
    var tmp = this.z30($this$intercept, context, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  HttpRedirect$Plugin$install$slambda.prototype.z5 = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.y30(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $cont);
  };
  HttpRedirect$Plugin$install$slambda.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 3;
            this.oe_1 = 1;
            suspendResult = this.f35_1.z2o(this.g35_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.h35_1 = suspendResult;
            if (this.d35_1.i35_1 ? !get_ALLOWED_FOR_REDIRECT().y(this.h35_1.g2q().f2r()) : false) {
              return this.h35_1;
            }

            this.oe_1 = 2;
            suspendResult = handleCall(this.f35_1, Plugin_getInstance_1(), this.g35_1, this.h35_1, this.d35_1.j35_1, this.e35_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  HttpRedirect$Plugin$install$slambda.prototype.z30 = function ($this$intercept, context, completion) {
    var i = new HttpRedirect$Plugin$install$slambda(this.d35_1, this.e35_1, completion);
    i.f35_1 = $this$intercept;
    i.g35_1 = context;
    return i;
  };
  function HttpRedirect$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpRedirect$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, context, $cont) {
      return i.y30($this$intercept, context, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $handleCallCOROUTINE$6(_this__u8e3s4, _this__u8e3s4_0, context, origin, allowHttpsDowngrade, client, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k34_1 = _this__u8e3s4;
    this.l34_1 = _this__u8e3s4_0;
    this.m34_1 = context;
    this.n34_1 = origin;
    this.o34_1 = allowHttpsDowngrade;
    this.p34_1 = client;
  }
  $handleCallCOROUTINE$6.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 3;
            if (!isRedirect(this.n34_1.x2m().j2q()))
              return this.n34_1;
            this.q34_1 = this.n34_1;
            this.r34_1 = this.m34_1;
            this.s34_1 = this.n34_1.g2q().i2q().t1q_1;
            this.t34_1 = get_authority(this.n34_1.g2q().i2q());
            this.oe_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.oe_1 = 4;
              continue $sm;
            }

            this.p34_1.c2m_1.l2l(this.k34_1.l35_1, this.q34_1.x2m());
            this.u34_1 = this.q34_1.x2m().c1n().h1c(HttpHeaders_getInstance().n1k_1);
            var tmp_0 = this;
            var tmp0_apply = new HttpRequestBuilder();
            tmp0_apply.u2t(this.r34_1);
            ;
            tmp0_apply.w2n_1.q1q_1.a8();
            var tmp0_safe_receiver = this.u34_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              takeFrom(tmp0_apply.w2n_1, tmp0_safe_receiver);
            }

            ;
            if ((!this.o34_1 ? isSecure(this.s34_1) : false) ? !isSecure(tmp0_apply.w2n_1.h1q_1) : false) {
              return this.q34_1;
            }

            if (!(this.t34_1 === get_authority_0(tmp0_apply.w2n_1))) {
              tmp0_apply.y2n_1.o1d(HttpHeaders_getInstance().i1j_1);
            }

            tmp_0.r34_1 = tmp0_apply;
            this.oe_1 = 2;
            suspendResult = this.l34_1.z2o(this.r34_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.q34_1 = suspendResult;
            if (!isRedirect(this.q34_1.x2m().j2q()))
              return this.q34_1;
            this.oe_1 = 1;
            continue $sm;
          case 3:
            throw this.re_1;
          case 4:
            return Unit_getInstance();
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
  function Config_1() {
    this.m35_1 = true;
    this.n35_1 = false;
  }
  function Plugin_1() {
    Plugin_instance_1 = this;
    this.k35_1 = new AttributeKey('HttpRedirect');
    this.l35_1 = new EventDefinition();
  }
  Plugin_1.prototype.n = function () {
    return this.k35_1;
  };
  Plugin_1.prototype.d32 = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config_1();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    return new HttpRedirect(config.m35_1, config.n35_1);
  };
  Plugin_1.prototype.b2p = function (block) {
    return this.d32(block);
  };
  Plugin_1.prototype.o35 = function (plugin_0, scope) {
    var tmp = plugin(scope, Plugin_getInstance_3());
    tmp.h32(HttpRedirect$Plugin$install$slambda_0(plugin_0, scope, null));
  };
  Plugin_1.prototype.c2p = function (plugin, scope) {
    return this.o35(plugin instanceof HttpRedirect ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_1;
  function Plugin_getInstance_1() {
    if (Plugin_instance_1 == null)
      new Plugin_1();
    return Plugin_instance_1;
  }
  function HttpRedirect(checkHttpMethod, allowHttpsDowngrade) {
    Plugin_getInstance_1();
    this.i35_1 = checkHttpMethod;
    this.j35_1 = allowHttpsDowngrade;
  }
  function isRedirect(_this__u8e3s4) {
    init_properties_HttpRedirect_kt_rcsi6u();
    var tmp0_subject = _this__u8e3s4.w1p_1;
    return ((((tmp0_subject === Companion_getInstance_1().g1o_1.w1p_1 ? true : tmp0_subject === Companion_getInstance_1().h1o_1.w1p_1) ? true : tmp0_subject === Companion_getInstance_1().m1o_1.w1p_1) ? true : tmp0_subject === Companion_getInstance_1().n1o_1.w1p_1) ? true : tmp0_subject === Companion_getInstance_1().i1o_1.w1p_1) ? true : false;
  }
  var properties_initialized_HttpRedirect_kt_klj746;
  function init_properties_HttpRedirect_kt_rcsi6u() {
    if (properties_initialized_HttpRedirect_kt_klj746) {
    } else {
      properties_initialized_HttpRedirect_kt_klj746 = true;
      ALLOWED_FOR_REDIRECT = setOf_0([Companion_getInstance_2().d1n_1, Companion_getInstance_2().i1n_1]);
    }
  }
  function HttpRequestLifecycle$Plugin$install$slambda($scope, resultContinuation) {
    this.x35_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpRequestLifecycle$Plugin$install$slambda.prototype.q2m = function ($this$intercept, it, $cont) {
    var tmp = this.r2m($this$intercept, it, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  HttpRequestLifecycle$Plugin$install$slambda.prototype.z5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q2m(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpRequestLifecycle$Plugin$install$slambda.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 6;
            this.a36_1 = Job(this.y35_1.z1f_1.a2o_1);
            attachToClientEngineJob(this.a36_1, ensureNotNull(this.x35_1.v2l_1.i3(Key_getInstance())));
            this.oe_1 = 1;
            continue $sm;
          case 1:
            this.pe_1 = 4;
            this.pe_1 = 3;
            this.y35_1.z1f_1.a2o_1 = this.a36_1;
            this.oe_1 = 2;
            suspendResult = this.y35_1.e1f(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_0 = this;
            tmp_0.b36_1 = Unit_getInstance();
            this.pe_1 = 6;
            this.oe_1 = 5;
            continue $sm;
          case 3:
            this.pe_1 = 4;
            var tmp_1 = this.re_1;
            if (tmp_1 instanceof Error) {
              var cause = this.re_1;
              var tmp_2 = this;
              this.a36_1.jl(cause);
              throw cause;
            } else {
              throw this.re_1;
            }

            break;
          case 4:
            this.pe_1 = 6;
            var t = this.re_1;
            this.a36_1.kl();
            ;
            throw t;
          case 5:
            this.a36_1.kl();
            ;
            return Unit_getInstance();
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
  HttpRequestLifecycle$Plugin$install$slambda.prototype.r2m = function ($this$intercept, it, completion) {
    var i = new HttpRequestLifecycle$Plugin$install$slambda(this.x35_1, completion);
    i.y35_1 = $this$intercept;
    i.z35_1 = it;
    return i;
  };
  function HttpRequestLifecycle$Plugin$install$slambda_0($scope, resultContinuation) {
    var i = new HttpRequestLifecycle$Plugin$install$slambda($scope, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.q2m($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Plugin_2() {
    Plugin_instance_2 = this;
    this.c36_1 = new AttributeKey('RequestLifecycle');
  }
  Plugin_2.prototype.n = function () {
    return this.c36_1;
  };
  Plugin_2.prototype.b2v = function (block) {
    return new HttpRequestLifecycle();
  };
  Plugin_2.prototype.b2p = function (block) {
    return this.b2v(block);
  };
  Plugin_2.prototype.d36 = function (plugin, scope) {
    var tmp = Phases_getInstance().s2u_1;
    scope.w2l_1.d1g(tmp, HttpRequestLifecycle$Plugin$install$slambda_0(scope, null));
  };
  Plugin_2.prototype.c2p = function (plugin, scope) {
    return this.d36(plugin instanceof HttpRequestLifecycle ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_2;
  function Plugin_getInstance_2() {
    if (Plugin_instance_2 == null)
      new Plugin_2();
    return Plugin_instance_2;
  }
  function HttpRequestLifecycle() {
    Plugin_getInstance_2();
  }
  function attachToClientEngineJob(requestJob, clientEngineJob) {
    var handler = clientEngineJob.wg(attachToClientEngineJob$lambda(requestJob));
    requestJob.wg(attachToClientEngineJob$lambda_0(handler));
  }
  function attachToClientEngineJob$lambda($requestJob) {
    return function (cause) {
      var tmp;
      if (!(cause == null)) {
        cancel_2($requestJob, 'Engine failed', cause);
        tmp = Unit_getInstance();
      } else {
        $requestJob.kl();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function attachToClientEngineJob$lambda_0($handler) {
    return function (it) {
      $handler.zi();
      return Unit_getInstance();
    };
  }
  function HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.m36_1 = $plugin;
    this.n36_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpSend$Plugin$install$slambda.prototype.q2m = function ($this$intercept, content, $cont) {
    var tmp = this.r2m($this$intercept, content, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  HttpSend$Plugin$install$slambda.prototype.z5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q2m(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpSend$Plugin$install$slambda.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 3;
            var tmp_0 = this.p36_1;
            if (!(tmp_0 instanceof OutgoingContent)) {
              var tmp_1 = '\n|Fail to prepare request body for sending. \n|The body type is: ' + getKClassFromExpression(this.p36_1) + ', with Content-Type: ' + contentType(this.o36_1.z1f_1) + '.\n|\n|If you expect serialized body, please check that you have installed the corresponding plugin(like `ContentNegotiation`) and set `Content-Type` header.';
              var message = trimMargin$default(tmp_1, null, 1, null);
              throw IllegalStateException_init_$Create$(toString(message));
            }

            var tmp0_setBody = this.o36_1.z1f_1;
            var tmp1_setBody = this.p36_1;
            var tmp0_subject = tmp1_setBody;
            if (tmp0_subject == null) {
              tmp0_setBody.z2n_1 = EmptyContent_getInstance();
              tmp0_setBody.v2t(null);
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                tmp0_setBody.z2n_1 = tmp1_setBody;
                tmp0_setBody.v2t(null);
              } else {
                tmp0_setBody.z2n_1 = tmp1_setBody;
                var tmp_2 = JsType_getInstance();
                var tmp_3 = getKClass(OutgoingContent);
                var tmp_4;
                try {
                  tmp_4 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
                } catch ($p) {
                  var tmp_5;
                  if ($p instanceof Error) {
                    tmp_5 = null;
                  } else {
                    throw $p;
                  }
                  tmp_4 = tmp_5;
                }
                tmp0_setBody.v2t(typeInfoImpl(tmp_2, tmp_3, tmp_4));
              }
            }

            this.q36_1 = new DefaultSender(this.m36_1.f32_1, this.n36_1);
            this.r36_1 = this.q36_1;
            var tmp2_forEach = downTo(get_lastIndex(this.m36_1.g32_1), 0);
            var inductionVariable = tmp2_forEach.t_1;
            var last = tmp2_forEach.u_1;
            var step = tmp2_forEach.v_1;
            if ((step > 0 ? inductionVariable <= last : false) ? true : step < 0 ? last <= inductionVariable : false)
              do {
                var element = inductionVariable;
                inductionVariable = inductionVariable + step | 0;
                var interceptor = this.m36_1.g32_1.h(element);
                this.r36_1 = new InterceptedSender(interceptor, this.r36_1);
              }
               while (!(element === last));
            this.oe_1 = 1;
            suspendResult = this.r36_1.z2o(this.o36_1.z1f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.s36_1 = suspendResult;
            this.oe_1 = 2;
            suspendResult = this.o36_1.d1f(this.s36_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
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
  HttpSend$Plugin$install$slambda.prototype.r2m = function ($this$intercept, content, completion) {
    var i = new HttpSend$Plugin$install$slambda(this.m36_1, this.n36_1, completion);
    i.o36_1 = $this$intercept;
    i.p36_1 = content;
    return i;
  };
  function HttpSend$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.q2m($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $executeCOROUTINE$7(_this__u8e3s4, requestBuilder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b37_1 = _this__u8e3s4;
    this.c37_1 = requestBuilder;
  }
  $executeCOROUTINE$7.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 2;
            var tmp0_safe_receiver = this.b37_1.g37_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              cancel$default(tmp0_safe_receiver, null, 1, null);
            }

            ;
            if (this.b37_1.f37_1 >= this.b37_1.d37_1) {
              throw new SendCountExceedException('Max send count ' + this.b37_1.d37_1 + ' exceeded. Consider increasing the property ' + 'maxSendCount if more is required.');
            }

            var tmp1_this = this.b37_1;
            var tmp2 = tmp1_this.f37_1;
            tmp1_this.f37_1 = tmp2 + 1 | 0;
            ;
            this.oe_1 = 1;
            suspendResult = this.b37_1.e37_1.y2l_1.y1f(this.c37_1, this.c37_1.z2n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var sendResult = suspendResult;
            var tmp3_elvis_lhs = sendResult instanceof HttpClientCall ? sendResult : null;
            var tmp_0;
            if (tmp3_elvis_lhs == null) {
              var tmp0_error = 'Failed to execute send pipeline. Expected [HttpClientCall], but received ' + toString(sendResult);
              throw IllegalStateException_init_$Create$(toString(tmp0_error));
            } else {
              tmp_0 = tmp3_elvis_lhs;
            }

            var call = tmp_0;
            this.b37_1.g37_1 = call;
            return call;
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
  function Config_2() {
    this.h37_1 = 20;
  }
  function Plugin_3() {
    Plugin_instance_3 = this;
    this.i37_1 = new AttributeKey('HttpSend');
  }
  Plugin_3.prototype.n = function () {
    return this.i37_1;
  };
  Plugin_3.prototype.d32 = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config_2();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    return new HttpSend(config.h37_1);
  };
  Plugin_3.prototype.b2p = function (block) {
    return this.d32(block);
  };
  Plugin_3.prototype.j37 = function (plugin, scope) {
    var tmp = Phases_getInstance().w2u_1;
    scope.w2l_1.d1g(tmp, HttpSend$Plugin$install$slambda_0(plugin, scope, null));
  };
  Plugin_3.prototype.c2p = function (plugin, scope) {
    return this.j37(plugin instanceof HttpSend ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_3;
  function Plugin_getInstance_3() {
    if (Plugin_instance_3 == null)
      new Plugin_3();
    return Plugin_instance_3;
  }
  function InterceptedSender(interceptor, nextSender) {
    this.k37_1 = interceptor;
    this.l37_1 = nextSender;
  }
  InterceptedSender.prototype.z2o = function (requestBuilder, $cont) {
    return this.k37_1(this.l37_1, requestBuilder, $cont);
  };
  function DefaultSender(maxSendCount, client) {
    this.d37_1 = maxSendCount;
    this.e37_1 = client;
    this.f37_1 = 0;
    this.g37_1 = null;
  }
  DefaultSender.prototype.z2o = function (requestBuilder, $cont) {
    var tmp = new $executeCOROUTINE$7(this, requestBuilder, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  function HttpSend(maxSendCount) {
    Plugin_getInstance_3();
    this.f32_1 = maxSendCount;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.g32_1 = tmp$ret$0;
  }
  HttpSend.prototype.h32 = function (block) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.g32_1;
    tmp0_plusAssign.a(block);
  };
  function Sender() {
  }
  function SendCountExceedException(message) {
    IllegalStateException_init_$Init$_0(message, this);
    captureStack(this, SendCountExceedException);
  }
  function HttpTimeoutCapabilityConfiguration_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this) {
    HttpTimeoutCapabilityConfiguration.call($this);
    $this.p37(requestTimeoutMillis);
    $this.q37(connectTimeoutMillis);
    $this.r37(socketTimeoutMillis);
    return $this;
  }
  function HttpTimeoutCapabilityConfiguration_init_$Init$_0(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      requestTimeoutMillis = null;
    if (!(($mask0 & 2) === 0))
      connectTimeoutMillis = null;
    if (!(($mask0 & 4) === 0))
      socketTimeoutMillis = null;
    HttpTimeoutCapabilityConfiguration_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this);
    return $this;
  }
  function HttpTimeoutCapabilityConfiguration_init_$Create$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $mask0, $marker) {
    return HttpTimeoutCapabilityConfiguration_init_$Init$_0(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $mask0, $marker, Object.create(HttpTimeoutCapabilityConfiguration.prototype));
  }
  function checkTimeoutValue($this, value) {
    // Inline function 'kotlin.require' call
    var tmp0_require = value == null ? true : value.s(new Long(0, 0)) > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.client.plugins.HttpTimeoutCapabilityConfiguration.checkTimeoutValue.<anonymous>' call
      tmp$ret$0 = 'Only positive timeout values are allowed, for infinite timeout use HttpTimeout.INFINITE_TIMEOUT_MS';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return value;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.s37_1 = new AttributeKey('TimeoutConfiguration');
  }
  var Companion_instance_2;
  function Companion_getInstance_10() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function HttpTimeout$Plugin$install$slambda$slambda($requestTimeout, $context, $executionContext, resultContinuation) {
    this.b38_1 = $requestTimeout;
    this.c38_1 = $context;
    this.d38_1 = $executionContext;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpTimeout$Plugin$install$slambda$slambda.prototype.l14 = function ($this$launch, $cont) {
    var tmp = this.m14($this$launch, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  HttpTimeout$Plugin$install$slambda$slambda.prototype.jf = function (p1, $cont) {
    return this.l14((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  HttpTimeout$Plugin$install$slambda$slambda.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 2;
            this.oe_1 = 1;
            suspendResult = delay(this.b38_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cause = HttpRequestTimeoutException_init_$Create$(this.c38_1);
            cancel_2(this.d38_1, ensureNotNull(cause.message), cause);
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
  HttpTimeout$Plugin$install$slambda$slambda.prototype.m14 = function ($this$launch, completion) {
    var i = new HttpTimeout$Plugin$install$slambda$slambda(this.b38_1, this.c38_1, this.d38_1, completion);
    i.e38_1 = $this$launch;
    return i;
  };
  function HttpTimeout$Plugin$install$slambda$slambda_0($requestTimeout, $context, $executionContext, resultContinuation) {
    var i = new HttpTimeout$Plugin$install$slambda$slambda($requestTimeout, $context, $executionContext, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.l14($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function HttpTimeout$Plugin$install$slambda$lambda($killer) {
    return function (it) {
      $killer.ch(null, 1, null);
      return Unit_getInstance();
    };
  }
  function HttpTimeout$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.n38_1 = $plugin;
    this.o38_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpTimeout$Plugin$install$slambda.prototype.q2m = function ($this$intercept, it, $cont) {
    var tmp = this.r2m($this$intercept, it, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  HttpTimeout$Plugin$install$slambda.prototype.z5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q2m(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpTimeout$Plugin$install$slambda.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        if (tmp === 0) {
          this.pe_1 = 1;
          var isWebSocket = isWebsocket(this.p38_1.z1f_1.w2n_1.h1q_1);
          var tmp_0;
          if (isWebSocket) {
            tmp_0 = true;
          } else {
            var tmp_1 = this.p38_1.z1f_1.z2n_1;
            tmp_0 = tmp_1 instanceof ClientUpgradeContent;
          }
          if (tmp_0)
            return Unit_getInstance();
          var configuration = this.p38_1.z1f_1.r38(Plugin_getInstance_4());
          if (configuration == null ? hasNotNullTimeouts(this.n38_1) : false) {
            configuration = HttpTimeoutCapabilityConfiguration_init_$Create$(null, null, null, 7, null);
            this.p38_1.z1f_1.s38(Plugin_getInstance_4(), configuration);
          }
          var tmp0_safe_receiver = configuration;
          if (tmp0_safe_receiver == null)
            null;
          else {
            var tmp$ret$0;
            l$ret$1: do {
              var context = this.p38_1.z1f_1;
              var tmp0_elvis_lhs = tmp0_safe_receiver.t38();
              tmp0_safe_receiver.q37(tmp0_elvis_lhs == null ? this.n38_1.v38_1 : tmp0_elvis_lhs);
              var tmp1_elvis_lhs = tmp0_safe_receiver.x38();
              tmp0_safe_receiver.r37(tmp1_elvis_lhs == null ? this.n38_1.w38_1 : tmp1_elvis_lhs);
              var tmp2_elvis_lhs = tmp0_safe_receiver.y38();
              tmp0_safe_receiver.p37(tmp2_elvis_lhs == null ? this.n38_1.u38_1 : tmp2_elvis_lhs);
              var tmp3_elvis_lhs = tmp0_safe_receiver.y38();
              var requestTimeout = tmp3_elvis_lhs == null ? this.n38_1.u38_1 : tmp3_elvis_lhs;
              var tmp_2;
              if (requestTimeout == null) {
                tmp_2 = true;
              } else {
                Plugin_getInstance_4();
                tmp_2 = equals(requestTimeout, new Long(-1, 2147483647));
              }
              if (tmp_2) {
                tmp$ret$0 = Unit_getInstance();
                break l$ret$1;
              }
              var executionContext = context.a2o_1;
              var killer = launch$default(this.o38_1, null, null, HttpTimeout$Plugin$install$slambda$slambda_0(requestTimeout, context, executionContext, null), 3, null);
              var tmp_3 = context.a2o_1;
              tmp_3.wg(HttpTimeout$Plugin$install$slambda$lambda(killer));
            }
             while (false);
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.re_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  HttpTimeout$Plugin$install$slambda.prototype.r2m = function ($this$intercept, it, completion) {
    var i = new HttpTimeout$Plugin$install$slambda(this.n38_1, this.o38_1, completion);
    i.p38_1 = $this$intercept;
    i.q38_1 = it;
    return i;
  };
  function HttpTimeout$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpTimeout$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.q2m($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  HttpTimeoutCapabilityConfiguration.prototype.p37 = function (value) {
    this.m37_1 = checkTimeoutValue(this, value);
  };
  HttpTimeoutCapabilityConfiguration.prototype.y38 = function () {
    return this.m37_1;
  };
  HttpTimeoutCapabilityConfiguration.prototype.q37 = function (value) {
    this.n37_1 = checkTimeoutValue(this, value);
  };
  HttpTimeoutCapabilityConfiguration.prototype.t38 = function () {
    return this.n37_1;
  };
  HttpTimeoutCapabilityConfiguration.prototype.r37 = function (value) {
    this.o37_1 = checkTimeoutValue(this, value);
  };
  HttpTimeoutCapabilityConfiguration.prototype.x38 = function () {
    return this.o37_1;
  };
  HttpTimeoutCapabilityConfiguration.prototype.i11 = function () {
    return new HttpTimeout(this.y38(), this.t38(), this.x38());
  };
  HttpTimeoutCapabilityConfiguration.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof HttpTimeoutCapabilityConfiguration)
      other;
    else
      THROW_CCE();
    if (!equals(this.m37_1, other.m37_1))
      return false;
    if (!equals(this.n37_1, other.n37_1))
      return false;
    if (!equals(this.o37_1, other.o37_1))
      return false;
    return true;
  };
  HttpTimeoutCapabilityConfiguration.prototype.hashCode = function () {
    var tmp0_safe_receiver = this.m37_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.n37_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp4_safe_receiver = this.o37_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_0 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    return result;
  };
  function HttpTimeoutCapabilityConfiguration() {
    Companion_getInstance_10();
    this.m37_1 = new Long(0, 0);
    this.n37_1 = new Long(0, 0);
    this.o37_1 = new Long(0, 0);
  }
  function hasNotNullTimeouts($this) {
    return (!($this.u38_1 == null) ? true : !($this.v38_1 == null)) ? true : !($this.w38_1 == null);
  }
  function Plugin_4() {
    Plugin_instance_4 = this;
    this.z38_1 = new AttributeKey('TimeoutPlugin');
    this.a39_1 = new Long(-1, 2147483647);
  }
  Plugin_4.prototype.n = function () {
    return this.z38_1;
  };
  Plugin_4.prototype.b39 = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = HttpTimeoutCapabilityConfiguration_init_$Create$(null, null, null, 7, null);
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.i11();
  };
  Plugin_4.prototype.b2p = function (block) {
    return this.b39(block);
  };
  Plugin_4.prototype.c39 = function (plugin, scope) {
    var tmp = Phases_getInstance().s2u_1;
    scope.w2l_1.d1g(tmp, HttpTimeout$Plugin$install$slambda_0(plugin, scope, null));
  };
  Plugin_4.prototype.c2p = function (plugin, scope) {
    return this.c39(plugin instanceof HttpTimeout ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance_4;
  function Plugin_getInstance_4() {
    if (Plugin_instance_4 == null)
      new Plugin_4();
    return Plugin_instance_4;
  }
  function HttpTimeout(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis) {
    Plugin_getInstance_4();
    this.u38_1 = requestTimeoutMillis;
    this.v38_1 = connectTimeoutMillis;
    this.w38_1 = socketTimeoutMillis;
  }
  function HttpRequestTimeoutException_init_$Init$(request, $this) {
    var tmp = request.w2n_1.q1r();
    var tmp0_safe_receiver = request.r38(Plugin_getInstance_4());
    HttpRequestTimeoutException.call($this, tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y38());
    return $this;
  }
  function HttpRequestTimeoutException_init_$Create$(request) {
    var tmp = HttpRequestTimeoutException_init_$Init$(request, Object.create(HttpRequestTimeoutException.prototype));
    captureStack(tmp, HttpRequestTimeoutException_init_$Create$);
    return tmp;
  }
  function HttpRequestTimeoutException(url, timeoutMillis) {
    var tmp0_elvis_lhs = timeoutMillis;
    IOException_init_$Init$('Request timeout has expired [url=' + url + ', request_timeout=' + toString(tmp0_elvis_lhs == null ? 'unknown' : tmp0_elvis_lhs) + ' ms]', this);
    captureStack(this, HttpRequestTimeoutException);
  }
  function wrapWithContent(_this__u8e3s4, content) {
    return new DelegatedResponse(_this__u8e3s4.e2r(), content, _this__u8e3s4);
  }
  function DelegatedResponse(call, content, origin) {
    HttpResponse.call(this);
    this.d39_1 = call;
    this.e39_1 = content;
    this.f39_1 = origin;
    this.g39_1 = this.f39_1.vf();
  }
  DelegatedResponse.prototype.e2r = function () {
    return this.d39_1;
  };
  DelegatedResponse.prototype.z2d = function () {
    return this.e39_1;
  };
  DelegatedResponse.prototype.vf = function () {
    return this.g39_1;
  };
  DelegatedResponse.prototype.j2q = function () {
    return this.f39_1.j2q();
  };
  DelegatedResponse.prototype.p2r = function () {
    return this.f39_1.p2r();
  };
  DelegatedResponse.prototype.q2r = function () {
    return this.f39_1.q2r();
  };
  DelegatedResponse.prototype.r2r = function () {
    return this.f39_1.r2r();
  };
  DelegatedResponse.prototype.c1n = function () {
    return this.f39_1.c1n();
  };
  function WebSocketCapability() {
    WebSocketCapability_instance = this;
  }
  WebSocketCapability.prototype.toString = function () {
    return 'WebSocketCapability';
  };
  var WebSocketCapability_instance;
  function WebSocketCapability_getInstance() {
    if (WebSocketCapability_instance == null)
      new WebSocketCapability();
    return WebSocketCapability_instance;
  }
  function WebSocketException(message) {
    IllegalStateException_init_$Init$_0(message, this);
    captureStack(this, WebSocketException);
  }
  function ClientUpgradeContent() {
  }
  function DefaultHttpRequest(call, data) {
    this.h39_1 = call;
    this.i39_1 = data.w2s_1;
    this.j39_1 = data.v2s_1;
    this.k39_1 = data.y2s_1;
    this.l39_1 = data.x2s_1;
    this.m39_1 = data.a2t_1;
  }
  DefaultHttpRequest.prototype.e2r = function () {
    return this.h39_1;
  };
  DefaultHttpRequest.prototype.vf = function () {
    return this.e2r().vf();
  };
  DefaultHttpRequest.prototype.f2r = function () {
    return this.i39_1;
  };
  DefaultHttpRequest.prototype.i2q = function () {
    return this.j39_1;
  };
  DefaultHttpRequest.prototype.c1n = function () {
    return this.l39_1;
  };
  DefaultHttpRequest.prototype.l2p = function () {
    return this.m39_1;
  };
  function HttpRequest_0() {
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  var Companion_instance_3;
  function Companion_getInstance_11() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function HttpRequestBuilder$setCapability$lambda() {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    return tmp$ret$0;
  }
  function HttpRequestBuilder() {
    Companion_getInstance_11();
    var tmp = this;
    tmp.w2n_1 = URLBuilder_init_$Create$(null, null, 0, null, null, null, null, null, false, 511, null);
    this.x2n_1 = Companion_getInstance_2().d1n_1;
    var tmp_0 = this;
    tmp_0.y2n_1 = HeadersBuilder_init_$Create$(0, 1, null);
    this.z2n_1 = EmptyContent_getInstance();
    var tmp_1 = this;
    tmp_1.a2o_1 = SupervisorJob$default(null, 1, null);
    this.b2o_1 = Attributes(true);
  }
  HttpRequestBuilder.prototype.c1n = function () {
    return this.y2n_1;
  };
  HttpRequestBuilder.prototype.v2t = function (value) {
    if (!(value == null)) {
      this.b2o_1.z1b(get_BodyTypeAttributeKey(), value);
    } else {
      this.b2o_1.a1c(get_BodyTypeAttributeKey());
    }
  };
  HttpRequestBuilder.prototype.n39 = function () {
    return this.b2o_1.x1b(get_BodyTypeAttributeKey());
  };
  HttpRequestBuilder.prototype.i11 = function () {
    var tmp = this.w2n_1.i11();
    var tmp_0 = this.x2n_1;
    var tmp_1 = this.y2n_1.i11();
    var tmp_2 = this.z2n_1;
    var tmp0_elvis_lhs = tmp_2 instanceof OutgoingContent ? tmp_2 : null;
    var tmp_3;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'No request transformation found: ' + toString(this.z2n_1);
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp_3 = tmp0_elvis_lhs;
    }
    return new HttpRequestData(tmp, tmp_0, tmp_1, tmp_3, this.a2o_1, this.b2o_1);
  };
  HttpRequestBuilder.prototype.u2t = function (builder) {
    this.a2o_1 = builder.a2o_1;
    return this.o39(builder);
  };
  HttpRequestBuilder.prototype.o39 = function (builder) {
    this.x2n_1 = builder.x2n_1;
    this.z2n_1 = builder.z2n_1;
    this.v2t(builder.n39());
    takeFrom_0(this.w2n_1, builder.w2n_1);
    this.w2n_1.o1q_1 = this.w2n_1.o1q_1;
    appendAll(this.y2n_1, builder.y2n_1);
    putAll(this.b2o_1, builder.b2o_1);
    return this;
  };
  HttpRequestBuilder.prototype.s38 = function (key, capability) {
    var tmp = get_ENGINE_CAPABILITIES_KEY();
    var capabilities = this.b2o_1.b1c(tmp, HttpRequestBuilder$setCapability$lambda);
    // Inline function 'kotlin.collections.set' call
    capabilities.u2(key, capability);
  };
  HttpRequestBuilder.prototype.r38 = function (key) {
    var tmp0_safe_receiver = this.b2o_1.x1b(get_ENGINE_CAPABILITIES_KEY());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1(key);
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  function HttpRequestData(url, method, headers, body, executionContext, attributes) {
    this.v2s_1 = url;
    this.w2s_1 = method;
    this.x2s_1 = headers;
    this.y2s_1 = body;
    this.z2s_1 = executionContext;
    this.a2t_1 = attributes;
    var tmp = this;
    var tmp0_safe_receiver = this.a2t_1.x1b(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w1();
    tmp.b2t_1 = tmp1_elvis_lhs == null ? emptySet() : tmp1_elvis_lhs;
  }
  HttpRequestData.prototype.toString = function () {
    return 'HttpRequestData(url=' + this.v2s_1 + ', method=' + this.w2s_1 + ')';
  };
  function HttpResponseData(statusCode, requestTime, headers, version, body, callContext) {
    this.e2p_1 = statusCode;
    this.f2p_1 = requestTime;
    this.g2p_1 = headers;
    this.h2p_1 = version;
    this.i2p_1 = body;
    this.j2p_1 = callContext;
    var tmp = this;
    tmp.k2p_1 = GMTDate$default(null, 1, null);
  }
  HttpResponseData.prototype.toString = function () {
    return 'HttpResponseData=(statusCode=' + this.e2p_1 + ')';
  };
  function url(_this__u8e3s4, urlString) {
    takeFrom(_this__u8e3s4.w2n_1, urlString);
  }
  function isUpgradeRequest(_this__u8e3s4) {
    var tmp = _this__u8e3s4.y2s_1;
    return tmp instanceof ClientUpgradeContent;
  }
  function Phases() {
    Phases_instance = this;
    this.s2u_1 = new PipelinePhase('Before');
    this.t2u_1 = new PipelinePhase('State');
    this.u2u_1 = new PipelinePhase('Transform');
    this.v2u_1 = new PipelinePhase('Render');
    this.w2u_1 = new PipelinePhase('Send');
  }
  var Phases_instance;
  function Phases_getInstance() {
    if (Phases_instance == null)
      new Phases();
    return Phases_instance;
  }
  function HttpRequestPipeline(developmentMode) {
    Phases_getInstance();
    Pipeline.call(this, [Phases_getInstance().s2u_1, Phases_getInstance().t2u_1, Phases_getInstance().u2u_1, Phases_getInstance().v2u_1, Phases_getInstance().w2u_1]);
    this.w39_1 = developmentMode;
  }
  HttpRequestPipeline.prototype.x1f = function () {
    return this.w39_1;
  };
  function Phases_0() {
    Phases_instance_0 = this;
    this.m2o_1 = new PipelinePhase('Before');
    this.n2o_1 = new PipelinePhase('State');
    this.o2o_1 = new PipelinePhase('Monitoring');
    this.p2o_1 = new PipelinePhase('Engine');
    this.q2o_1 = new PipelinePhase('Receive');
  }
  var Phases_instance_0;
  function Phases_getInstance_0() {
    if (Phases_instance_0 == null)
      new Phases_0();
    return Phases_instance_0;
  }
  function HttpSendPipeline(developmentMode) {
    Phases_getInstance_0();
    Pipeline.call(this, [Phases_getInstance_0().m2o_1, Phases_getInstance_0().n2o_1, Phases_getInstance_0().o2o_1, Phases_getInstance_0().p2o_1, Phases_getInstance_0().q2o_1]);
    this.e3a_1 = developmentMode;
  }
  HttpSendPipeline.prototype.x1f = function () {
    return this.e3a_1;
  };
  function get_BodyTypeAttributeKey() {
    init_properties_RequestBody_kt_hroiwt();
    return BodyTypeAttributeKey;
  }
  var BodyTypeAttributeKey;
  var properties_initialized_RequestBody_kt_agyv1b;
  function init_properties_RequestBody_kt_hroiwt() {
    if (properties_initialized_RequestBody_kt_agyv1b) {
    } else {
      properties_initialized_RequestBody_kt_agyv1b = true;
      BodyTypeAttributeKey = new AttributeKey('BodyTypeAttributeKey');
    }
  }
  function accept(_this__u8e3s4, contentType) {
    return _this__u8e3s4.c1n().m1d(HttpHeaders_getInstance().z1i_1, contentType.toString());
  }
  function DefaultHttpResponse(call, responseData) {
    HttpResponse.call(this);
    this.f3a_1 = call;
    this.g3a_1 = responseData.j2p_1;
    this.h3a_1 = responseData.e2p_1;
    this.i3a_1 = responseData.h2p_1;
    this.j3a_1 = responseData.f2p_1;
    this.k3a_1 = responseData.k2p_1;
    var tmp = this;
    var tmp_0 = responseData.i2p_1;
    var tmp0_elvis_lhs = isInterface(tmp_0, ByteReadChannel) ? tmp_0 : null;
    tmp.l3a_1 = tmp0_elvis_lhs == null ? Companion_getInstance().d15() : tmp0_elvis_lhs;
    this.m3a_1 = responseData.g2p_1;
  }
  DefaultHttpResponse.prototype.e2r = function () {
    return this.f3a_1;
  };
  DefaultHttpResponse.prototype.vf = function () {
    return this.g3a_1;
  };
  DefaultHttpResponse.prototype.j2q = function () {
    return this.h3a_1;
  };
  DefaultHttpResponse.prototype.p2r = function () {
    return this.i3a_1;
  };
  DefaultHttpResponse.prototype.q2r = function () {
    return this.j3a_1;
  };
  DefaultHttpResponse.prototype.r2r = function () {
    return this.k3a_1;
  };
  DefaultHttpResponse.prototype.z2d = function () {
    return this.l3a_1;
  };
  DefaultHttpResponse.prototype.c1n = function () {
    return this.m3a_1;
  };
  function HttpResponse() {
  }
  HttpResponse.prototype.toString = function () {
    return 'HttpResponse[' + get_request(this).i2q() + ', ' + this.j2q() + ']';
  };
  function get_request(_this__u8e3s4) {
    return _this__u8e3s4.e2r().g2q();
  }
  function complete(_this__u8e3s4) {
    var tmp = ensureNotNull(_this__u8e3s4.vf().i3(Key_getInstance()));
    var job = isInterface(tmp, CompletableJob) ? tmp : THROW_CCE();
    job.kl();
  }
  function bodyAsText(_this__u8e3s4, fallbackCharset, $cont) {
    var tmp = new $bodyAsTextCOROUTINE$13(_this__u8e3s4, fallbackCharset, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  }
  function bodyAsText$default(_this__u8e3s4, fallbackCharset, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      fallbackCharset = Charsets_getInstance().d18_1;
    return bodyAsText(_this__u8e3s4, fallbackCharset, $cont);
  }
  function $bodyAsTextCOROUTINE$13(_this__u8e3s4, fallbackCharset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v3a_1 = _this__u8e3s4;
    this.w3a_1 = fallbackCharset;
  }
  $bodyAsTextCOROUTINE$13.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = charset_0(this.v3a_1);
            tmp_0.x3a_1 = tmp0_elvis_lhs == null ? this.w3a_1 : tmp0_elvis_lhs;
            this.y3a_1 = this.x3a_1.g18();
            this.oe_1 = 1;
            var tmp_1 = this.v3a_1.e2r();
            var tmp_2 = JsType_getInstance();
            var tmp_3 = getKClass(Input);
            var tmp_4;
            try {
              tmp_4 = createKType(getKClass(Input), arrayOf([]), false);
            } catch ($p) {
              var tmp_5;
              if ($p instanceof Error) {
                tmp_5 = null;
              } else {
                throw $p;
              }
              tmp_4 = tmp_5;
            }

            suspendResult = tmp_1.h2q(typeInfoImpl(tmp_2, tmp_3, tmp_4), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var input = suspendResult instanceof Input ? suspendResult : THROW_CCE();
            return decode$default(this.y3a_1, input, 0, 2, null);
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
  function Phases_1() {
    Phases_instance_1 = this;
    this.u2o_1 = new PipelinePhase('Receive');
    this.v2o_1 = new PipelinePhase('Parse');
    this.w2o_1 = new PipelinePhase('Transform');
    this.x2o_1 = new PipelinePhase('State');
    this.y2o_1 = new PipelinePhase('After');
  }
  var Phases_instance_1;
  function Phases_getInstance_1() {
    if (Phases_instance_1 == null)
      new Phases_1();
    return Phases_instance_1;
  }
  function HttpResponsePipeline(developmentMode) {
    Phases_getInstance_1();
    Pipeline.call(this, [Phases_getInstance_1().u2o_1, Phases_getInstance_1().v2o_1, Phases_getInstance_1().w2o_1, Phases_getInstance_1().x2o_1, Phases_getInstance_1().y2o_1]);
    this.g3b_1 = developmentMode;
  }
  HttpResponsePipeline.prototype.x1f = function () {
    return this.g3b_1;
  };
  function Phases_2() {
    Phases_instance_2 = this;
    this.x2u_1 = new PipelinePhase('Before');
    this.y2u_1 = new PipelinePhase('State');
    this.z2u_1 = new PipelinePhase('After');
  }
  var Phases_instance_2;
  function Phases_getInstance_2() {
    if (Phases_instance_2 == null)
      new Phases_2();
    return Phases_instance_2;
  }
  function HttpReceivePipeline(developmentMode) {
    Phases_getInstance_2();
    Pipeline.call(this, [Phases_getInstance_2().x2u_1, Phases_getInstance_2().y2u_1, Phases_getInstance_2().z2u_1]);
    this.o3b_1 = developmentMode;
  }
  HttpReceivePipeline.prototype.x1f = function () {
    return this.o3b_1;
  };
  function HttpResponseContainer(expectedType, response) {
    this.e2q_1 = expectedType;
    this.f2q_1 = response;
  }
  HttpResponseContainer.prototype.s2 = function () {
    return this.e2q_1;
  };
  HttpResponseContainer.prototype.t2 = function () {
    return this.f2q_1;
  };
  HttpResponseContainer.prototype.toString = function () {
    return 'HttpResponseContainer(expectedType=' + this.e2q_1 + ', response=' + toString(this.f2q_1) + ')';
  };
  HttpResponseContainer.prototype.hashCode = function () {
    var result = this.e2q_1.hashCode();
    result = imul(result, 31) + hashCode(this.f2q_1) | 0;
    return result;
  };
  HttpResponseContainer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpResponseContainer))
      return false;
    var tmp0_other_with_cast = other instanceof HttpResponseContainer ? other : THROW_CCE();
    if (!this.e2q_1.equals(tmp0_other_with_cast.e2q_1))
      return false;
    if (!equals(this.f2q_1, tmp0_other_with_cast.f2q_1))
      return false;
    return true;
  };
  function checkCapabilities($this) {
    var tmp0_safe_receiver = $this.p3b_1.b2o_1.x1b(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w1();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
      var tmp0_iterator = tmp1_safe_receiver.j();
      while (tmp0_iterator.k()) {
        var element = tmp0_iterator.l();
        if (!(element == null) ? isInterface(element, HttpClientPlugin) : false) {
          tmp0_filterIsInstanceTo.a(element);
        }
      }
      tmp$ret$0 = tmp0_filterIsInstanceTo;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp2_safe_receiver = tmp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = tmp2_safe_receiver.j();
      while (tmp0_iterator_0.k()) {
        var element_0 = tmp0_iterator_0.l();
        // Inline function 'io.ktor.client.statement.HttpStatement.checkCapabilities.<anonymous>' call
        var tmp$ret$3;
        $l$block: {
          // Inline function 'kotlin.requireNotNull' call
          var tmp0_requireNotNull = pluginOrNull($this.q3b_1, element_0);
          // Inline function 'kotlin.contracts.contract' call
          if (tmp0_requireNotNull == null) {
            var tmp$ret$2;
            // Inline function 'io.ktor.client.statement.HttpStatement.checkCapabilities.<anonymous>.<anonymous>' call
            tmp$ret$2 = 'Consider installing ' + element_0 + ' plugin because the request requires it to be installed';
            var message = tmp$ret$2;
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            tmp$ret$3 = tmp0_requireNotNull;
            break $l$block;
          }
        }
      }
    }
  }
  function HttpStatement$execute$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpStatement$execute$slambda.prototype.a3c = function (it, $cont) {
    var tmp = this.a2x(it, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  HttpStatement$execute$slambda.prototype.jf = function (p1, $cont) {
    return this.a3c(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $cont);
  };
  HttpStatement$execute$slambda.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 2;
            this.oe_1 = 1;
            suspendResult = save(this.z3b_1.e2r(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var savedCall = suspendResult;
            return savedCall.x2m();
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
  HttpStatement$execute$slambda.prototype.a2x = function (it, completion) {
    var i = new HttpStatement$execute$slambda(completion);
    i.z3b_1 = it;
    return i;
  };
  function HttpStatement$execute$slambda_0(resultContinuation) {
    var i = new HttpStatement$execute$slambda(resultContinuation);
    var l = function (it, $cont) {
      return i.a3c(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $executeCOROUTINE$14(_this__u8e3s4, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j3c_1 = _this__u8e3s4;
    this.k3c_1 = block;
  }
  $executeCOROUTINE$14.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 13;
            this.oe_1 = 1;
            continue $sm;
          case 1:
            this.pe_1 = 12;
            this.oe_1 = 2;
            suspendResult = this.j3c_1.q3c(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m3c_1 = suspendResult;
            this.oe_1 = 3;
            continue $sm;
          case 3:
            this.oe_1 = 4;
            continue $sm;
          case 4:
            this.pe_1 = 10;
            this.oe_1 = 5;
            suspendResult = this.k3c_1(this.m3c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.n3c_1 = suspendResult;
            this.oe_1 = 6;
            var tmp_0 = this;
            continue $sm;
          case 6:
            this.o3c_1 = this.n3c_1;
            this.oe_1 = 7;
            suspendResult = this.j3c_1.r3c(this.m3c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            return this.o3c_1;
          case 8:
            this.oe_1 = 9;
            suspendResult = this.j3c_1.r3c(this.m3c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            var tmp_1 = this;
            tmp_1.l3c_1 = Unit_getInstance();
            this.pe_1 = 13;
            this.oe_1 = 15;
            continue $sm;
          case 10:
            this.pe_1 = 12;
            this.p3c_1 = this.re_1;
            this.oe_1 = 11;
            suspendResult = this.j3c_1.r3c(this.m3c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            throw this.p3c_1;
          case 12:
            this.pe_1 = 13;
            var tmp_2 = this.re_1;
            if (tmp_2 instanceof CancellationException) {
              var cause = this.re_1;
              throw unwrapCancellationException(cause);
            } else {
              throw this.re_1;
            }

            break;
          case 13:
            throw this.re_1;
          case 14:
            this.pe_1 = 13;
            if (false) {
              this.oe_1 = 1;
              continue $sm;
            }

            this.oe_1 = 15;
            continue $sm;
          case 15:
            return this.l3c_1;
        }
      } catch ($p) {
        if (this.pe_1 === 13) {
          throw $p;
        } else {
          this.oe_1 = this.pe_1;
          this.re_1 = $p;
        }
      }
     while (true);
  };
  function $executeUnsafeCOROUTINE$15(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a3d_1 = _this__u8e3s4;
  }
  $executeUnsafeCOROUTINE$15.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 4;
            this.oe_1 = 1;
            continue $sm;
          case 1:
            this.pe_1 = 3;
            this.c3d_1 = (new HttpRequestBuilder()).u2t(this.a3d_1.p3b_1);
            this.oe_1 = 2;
            suspendResult = this.a3d_1.q3b_1.z2o(this.c3d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var call = suspendResult;
            var tmp_0 = this;
            return call.x2m();
          case 3:
            this.pe_1 = 4;
            var tmp_1 = this.re_1;
            if (tmp_1 instanceof CancellationException) {
              var cause = this.re_1;
              throw unwrapCancellationException(cause);
            } else {
              throw this.re_1;
            }

            break;
          case 4:
            throw this.re_1;
          case 5:
            this.pe_1 = 4;
            if (false) {
              this.oe_1 = 1;
              continue $sm;
            }

            this.oe_1 = 6;
            continue $sm;
          case 6:
            return this.b3d_1;
        }
      } catch ($p) {
        if (this.pe_1 === 4) {
          throw $p;
        } else {
          this.oe_1 = this.pe_1;
          this.re_1 = $p;
        }
      }
     while (true);
  };
  function $cleanupCOROUTINE$16(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l3d_1 = _this__u8e3s4;
    this.m3d_1 = _this__u8e3s4_0;
  }
  $cleanupCOROUTINE$16.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 4;
            var tmp_0 = this;
            var tmp_1 = ensureNotNull(this.m3d_1.vf().i3(Key_getInstance()));
            tmp_0.n3d_1 = isInterface(tmp_1, CompletableJob) ? tmp_1 : THROW_CCE();
            this.n3d_1.kl();
            ;
            this.pe_1 = 1;
            cancel_1(this.m3d_1.z2d());
            ;
            this.pe_1 = 4;
            this.oe_1 = 2;
            continue $sm;
          case 1:
            this.pe_1 = 4;
            var tmp_2 = this.re_1;
            if (tmp_2 instanceof Error) {
              this.o3d_1 = this.re_1;
              this.oe_1 = 2;
              continue $sm;
            } else {
              throw this.re_1;
            }

            break;
          case 2:
            this.pe_1 = 4;
            this.oe_1 = 3;
            suspendResult = this.n3d_1.ll(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            ;
            return Unit_getInstance();
          case 4:
            throw this.re_1;
        }
      } catch ($p) {
        if (this.pe_1 === 4) {
          throw $p;
        } else {
          this.oe_1 = this.pe_1;
          this.re_1 = $p;
        }
      }
     while (true);
  };
  function HttpStatement(builder, client) {
    this.p3b_1 = builder;
    this.q3b_1 = client;
    checkCapabilities(this);
  }
  HttpStatement.prototype.p3d = function (block, $cont) {
    var tmp = new $executeCOROUTINE$14(this, block, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  HttpStatement.prototype.q3d = function ($cont) {
    return this.p3d(HttpStatement$execute$slambda_0(null), $cont);
  };
  HttpStatement.prototype.q3c = function ($cont) {
    var tmp = new $executeUnsafeCOROUTINE$15(this, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  HttpStatement.prototype.r3c = function (_this__u8e3s4, $cont) {
    var tmp = new $cleanupCOROUTINE$16(this, _this__u8e3s4, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  HttpStatement.prototype.toString = function () {
    return 'HttpStatement[' + this.p3b_1.w2n_1.q1r() + ']';
  };
  function observable(_this__u8e3s4, context, contentLength, listener) {
    var tmp = GlobalScope_getInstance();
    return writer(tmp, context, true, observable$slambda_0(contentLength, _this__u8e3s4, listener, null)).s13();
  }
  function observable$slambda($contentLength, $this_observable, $listener, resultContinuation) {
    this.z3d_1 = $contentLength;
    this.a3e_1 = $this_observable;
    this.b3e_1 = $listener;
    CoroutineImpl.call(this, resultContinuation);
  }
  observable$slambda.prototype.c2s = function ($this$writer, $cont) {
    var tmp = this.d2s($this$writer, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  observable$slambda.prototype.jf = function (p1, $cont) {
    return this.c2s((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  observable$slambda.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 15;
            this.oe_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.e3e_1 = get_ByteArrayPool();
            this.f3e_1 = this.e3e_1.n14();
            this.oe_1 = 2;
            continue $sm;
          case 2:
            this.oe_1 = 3;
            continue $sm;
          case 3:
            this.pe_1 = 14;
            var tmp_1 = this;
            var tmp0_elvis_lhs = this.z3d_1;
            tmp_1.h3e_1 = tmp0_elvis_lhs == null ? new Long(-1, -1) : tmp0_elvis_lhs;
            this.i3e_1 = new Long(0, 0);
            this.oe_1 = 4;
            continue $sm;
          case 4:
            if (!!this.a3e_1.j11()) {
              this.oe_1 = 8;
              continue $sm;
            }

            this.oe_1 = 5;
            suspendResult = readAvailable(this.a3e_1, this.f3e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.j3e_1 = suspendResult;
            this.oe_1 = 6;
            suspendResult = this.c3e_1.s13().h13(this.f3e_1, 0, this.j3e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var tmp_2 = this;
            var tmp0_plus = this.i3e_1;
            tmp_2.i3e_1 = tmp0_plus.f5(toLong(this.j3e_1));
            this.oe_1 = 7;
            suspendResult = this.b3e_1(this.i3e_1, this.h3e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.oe_1 = 4;
            continue $sm;
          case 8:
            this.k3e_1 = this.a3e_1.tx();
            this.c3e_1.s13().ms(this.k3e_1);
            ;
            if (this.k3e_1 == null ? this.i3e_1.equals(new Long(0, 0)) : false) {
              this.oe_1 = 9;
              suspendResult = this.b3e_1(this.i3e_1, this.h3e_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.oe_1 = 10;
              continue $sm;
            }

            break;
          case 9:
            this.oe_1 = 10;
            continue $sm;
          case 10:
            this.g3e_1 = Unit_getInstance();
            this.pe_1 = 15;
            this.oe_1 = 11;
            var tmp_3 = this;
            continue $sm;
          case 11:
            var tmp_4 = this;
            this.e3e_1.s16(this.f3e_1);
            tmp_4.d3e_1 = Unit_getInstance();
            this.oe_1 = 13;
            continue $sm;
          case 12:
            this.e3e_1.s16(this.f3e_1);
            ;
            if (false) {
              this.oe_1 = 1;
              continue $sm;
            }

            this.oe_1 = 13;
            continue $sm;
          case 13:
            return Unit_getInstance();
          case 14:
            this.pe_1 = 15;
            var t = this.re_1;
            this.e3e_1.s16(this.f3e_1);
            ;
            throw t;
          case 15:
            throw this.re_1;
        }
      } catch ($p) {
        if (this.pe_1 === 15) {
          throw $p;
        } else {
          this.oe_1 = this.pe_1;
          this.re_1 = $p;
        }
      }
     while (true);
  };
  observable$slambda.prototype.d2s = function ($this$writer, completion) {
    var i = new observable$slambda(this.z3d_1, this.a3e_1, this.b3e_1, completion);
    i.c3e_1 = $this$writer;
    return i;
  };
  function observable$slambda_0($contentLength, $this_observable, $listener, resultContinuation) {
    var i = new observable$slambda($contentLength, $this_observable, $listener, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.c2s($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function get_HttpRequestCreated() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpRequestCreated;
  }
  var HttpRequestCreated;
  function get_HttpRequestIsReadyForSending() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpRequestIsReadyForSending;
  }
  var HttpRequestIsReadyForSending;
  function get_HttpResponseReceived() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpResponseReceived;
  }
  var HttpResponseReceived;
  function get_HttpResponseReceiveFailed() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpResponseReceiveFailed;
  }
  var HttpResponseReceiveFailed;
  function get_HttpResponseCancelled() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpResponseCancelled;
  }
  var HttpResponseCancelled;
  function HttpResponseReceiveFail(response, cause) {
    this.l3e_1 = response;
    this.m3e_1 = cause;
  }
  var properties_initialized_ClientEvents_kt_rdee4m;
  function init_properties_ClientEvents_kt_kkxb6e() {
    if (properties_initialized_ClientEvents_kt_rdee4m) {
    } else {
      properties_initialized_ClientEvents_kt_rdee4m = true;
      HttpRequestCreated = new EventDefinition();
      HttpRequestIsReadyForSending = new EventDefinition();
      HttpResponseReceived = new EventDefinition();
      HttpResponseReceiveFailed = new EventDefinition();
      HttpResponseCancelled = new EventDefinition();
    }
  }
  function EmptyContent() {
    EmptyContent_instance = this;
    NoContent.call(this);
    this.o3e_1 = new Long(0, 0);
  }
  EmptyContent.prototype.c1s = function () {
    return this.o3e_1;
  };
  EmptyContent.prototype.toString = function () {
    return 'EmptyContent';
  };
  var EmptyContent_instance;
  function EmptyContent_getInstance() {
    if (EmptyContent_instance == null)
      new EmptyContent();
    return EmptyContent_instance;
  }
  function buildHeaders(block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = HeadersBuilder_init_$Create$(0, 1, null);
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.i11();
  }
  function HttpClient_1(block) {
    return HttpClient_0(JsClient(), block);
  }
  function JsClient() {
    return Js_getInstance();
  }
  function Js() {
    Js_instance = this;
  }
  Js.prototype.p3e = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new HttpClientEngineConfig();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return new JsClientEngine(tmp$ret$0);
  };
  Js.prototype.a2p = function (block) {
    return this.p3e(block);
  };
  var Js_instance;
  function Js_getInstance() {
    if (Js_instance == null)
      new Js();
    return Js_instance;
  }
  function createWebSocket($this, urlString_capturingHack, headers) {
    var tmp;
    if (PlatformUtils_getInstance().v1g_1) {
      var ws_capturingHack = eval('require')('ws');
      var headers_capturingHack = new JsClientEngine$createWebSocket$headers_capturingHack$1();
      headers.f1d(JsClientEngine$createWebSocket$lambda(headers_capturingHack));
      tmp = new ws_capturingHack(urlString_capturingHack, {headers: headers_capturingHack});
    } else {
      tmp = new WebSocket(urlString_capturingHack);
    }
    return tmp;
  }
  function executeWebSocketRequest($this, request, callContext, $cont) {
    var tmp = new $executeWebSocketRequestCOROUTINE$18($this, request, callContext, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  }
  function JsClientEngine$createWebSocket$headers_capturingHack$1() {
  }
  function JsClientEngine$createWebSocket$lambda($headers_capturingHack) {
    return function (name, values) {
      $headers_capturingHack[name] = joinToString$default(values, ',', null, null, 0, null, null, 62, null);
      return Unit_getInstance();
    };
  }
  function $executeCOROUTINE$17(_this__u8e3s4, data, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m3f_1 = _this__u8e3s4;
    this.n3f_1 = data;
  }
  $executeCOROUTINE$17.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 6;
            this.oe_1 = 1;
            suspendResult = callContext(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o3f_1 = suspendResult;
            this.p3f_1 = this.n3f_1.a2t_1.w1b(get_CLIENT_CONFIG());
            if (isUpgradeRequest(this.n3f_1)) {
              this.oe_1 = 5;
              suspendResult = executeWebSocketRequest(this.m3f_1, this.n3f_1, this.o3f_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.oe_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            var tmp_0 = this;
            tmp_0.q3f_1 = GMTDate$default(null, 1, null);
            this.oe_1 = 3;
            suspendResult = toRaw(this.n3f_1, this.p3f_1, this.o3f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.r3f_1 = suspendResult;
            this.oe_1 = 4;
            suspendResult = commonFetch(this.n3f_1.v2s_1.toString(), this.r3f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var rawResponse = suspendResult;
            var status = new HttpStatusCode(rawResponse.status, rawResponse.statusText);
            var headers = mapToKtor(rawResponse.headers);
            var version = Companion_getInstance_3().n1n_1;
            var body = readBody(CoroutineScope_0(this.o3f_1), rawResponse);
            return new HttpResponseData(status, this.q3f_1, headers, version, body, this.o3f_1);
          case 5:
            return suspendResult;
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
  function $executeWebSocketRequestCOROUTINE$18(_this__u8e3s4, request, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y3e_1 = _this__u8e3s4;
    this.z3e_1 = request;
    this.a3f_1 = callContext;
  }
  $executeWebSocketRequestCOROUTINE$18.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 4;
            var tmp_0 = this;
            tmp_0.b3f_1 = GMTDate$default(null, 1, null);
            this.c3f_1 = this.z3e_1.v2s_1.toString();
            this.d3f_1 = createWebSocket(this.y3e_1, this.c3f_1, this.z3e_1.x2s_1);
            this.pe_1 = 2;
            this.oe_1 = 1;
            suspendResult = awaitConnection(this.d3f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.pe_1 = 4;
            this.oe_1 = 3;
            continue $sm;
          case 2:
            this.pe_1 = 4;
            var tmp_1 = this.re_1;
            if (tmp_1 instanceof Error) {
              var cause = this.re_1;
              cancel_3(this.a3f_1, CancellationException_init_$Create$_0('Failed to connect to ' + this.c3f_1, cause));
              throw cause;
            } else {
              throw this.re_1;
            }

            break;
          case 3:
            this.pe_1 = 4;
            var session = new JsWebSocketSession(this.a3f_1, this.d3f_1);
            return new HttpResponseData(Companion_getInstance_1().x1n_1, this.b3f_1, Companion_getInstance_4().w1i_1, Companion_getInstance_3().n1n_1, session, this.a3f_1);
          case 4:
            throw this.re_1;
        }
      } catch ($p) {
        if (this.pe_1 === 4) {
          throw $p;
        } else {
          this.oe_1 = this.pe_1;
          this.re_1 = $p;
        }
      }
     while (true);
  };
  function JsClientEngine(config) {
    HttpClientEngineBase.call(this, 'ktor-js');
    this.v3f_1 = config;
    this.w3f_1 = Dispatchers_getInstance().vl_1;
    this.x3f_1 = setOf_0([Plugin_getInstance_4(), WebSocketCapability_getInstance()]);
    // Inline function 'kotlin.check' call
    var tmp0_check = this.v3f_1.q2u_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'io.ktor.client.engine.js.JsClientEngine.<anonymous>' call
      tmp$ret$0 = 'Proxy unsupported in Js engine.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  JsClientEngine.prototype.k2o = function () {
    return this.v3f_1;
  };
  JsClientEngine.prototype.k2u = function () {
    return this.w3f_1;
  };
  JsClientEngine.prototype.c2t = function () {
    return this.x3f_1;
  };
  JsClientEngine.prototype.i2u = function (data, $cont) {
    var tmp = new $executeCOROUTINE$17(this, data, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  function mapToKtor(_this__u8e3s4) {
    return buildHeaders(mapToKtor$lambda(_this__u8e3s4));
  }
  function awaitConnection(_this__u8e3s4, $cont) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.fk();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.client.engine.js.awaitConnection.<anonymous>' call
      if (cancellable.oi()) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var eventListener = awaitConnection$lambda(cancellable, _this__u8e3s4);
      _this__u8e3s4.addEventListener('open', eventListener);
      _this__u8e3s4.addEventListener('error', eventListener);
      cancellable.ui(awaitConnection$lambda_0(_this__u8e3s4, eventListener));
    }
    tmp$ret$1 = cancellable.ok();
    return tmp$ret$1;
  }
  function asString(_this__u8e3s4) {
    var tmp$ret$4;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.engine.js.asString.<anonymous>' call
    var tmp = JSON;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ['message', 'target', 'type', 'isTrusted'];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp0_apply.wc(tmp.stringify(_this__u8e3s4, tmp$ret$2));
    tmp$ret$3 = tmp0_apply;
    tmp$ret$4 = tmp$ret$3.toString();
    return tmp$ret$4;
  }
  function JsError(origin) {
    extendThrowable(this, 'Error from javascript[' + origin + '].', void 1);
    this.y3f_1 = origin;
    captureStack(this, JsError);
  }
  function mapToKtor$lambda$lambda($this_buildHeaders) {
    return function (value, key) {
      $this_buildHeaders.m1d(key, value);
      return Unit_getInstance();
    };
  }
  function mapToKtor$lambda($this_mapToKtor) {
    return function ($this$buildHeaders) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = $this_mapToKtor;
      tmp$ret$0.forEach(mapToKtor$lambda$lambda($this$buildHeaders));
      return Unit_getInstance();
    };
  }
  function awaitConnection$lambda($cancellable, $this_awaitConnection) {
    return function (event) {
      var tmp0_subject = event.type;
      var tmp;
      if (tmp0_subject === 'open') {
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance_5();
        tmp$ret$0 = _Result___init__impl__xyqfz8($this_awaitConnection);
        $cancellable.f3(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
        tmp = tmp$ret$1;
      } else if (tmp0_subject === 'error') {
        var tmp$ret$3;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp0_resumeWithException = new WebSocketException(asString(event));
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance_5();
        tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(tmp0_resumeWithException));
        $cancellable.f3(tmp$ret$2);
        tmp$ret$3 = Unit_getInstance();
        tmp = tmp$ret$3;
      }
      return Unit_getInstance();
    };
  }
  function awaitConnection$lambda_0($this_awaitConnection, $eventListener) {
    return function (it) {
      $this_awaitConnection.removeEventListener('open', $eventListener);
      $this_awaitConnection.removeEventListener('error', $eventListener);
      var tmp;
      if (!(it == null)) {
        $this_awaitConnection.close();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function toRaw(_this__u8e3s4, clientConfig, callContext, $cont) {
    var tmp = new $toRawCOROUTINE$19(_this__u8e3s4, clientConfig, callContext, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  }
  function buildObject(block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp = {};
    var tmp0_apply = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function toRaw$lambda($jsHeaders) {
    return function (key, value) {
      $jsHeaders[key] = value;
      return Unit_getInstance();
    };
  }
  function toRaw$slambda($content, resultContinuation) {
    this.v3g_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  toRaw$slambda.prototype.c2s = function ($this$writer, $cont) {
    var tmp = this.d2s($this$writer, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  toRaw$slambda.prototype.jf = function (p1, $cont) {
    return this.c2s((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  toRaw$slambda.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 2;
            this.oe_1 = 1;
            suspendResult = this.v3g_1.i1s(this.w3g_1.s13(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
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
  toRaw$slambda.prototype.d2s = function ($this$writer, completion) {
    var i = new toRaw$slambda(this.v3g_1, completion);
    i.w3g_1 = $this$writer;
    return i;
  };
  function toRaw$slambda_0($content, resultContinuation) {
    var i = new toRaw$slambda($content, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.c2s($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function toRaw$lambda_0($this_toRaw, $jsHeaders, $clientConfig, $bodyBytes) {
    return function ($this$buildObject) {
      $this$buildObject.method = $this_toRaw.w2s_1.l1n_1;
      $this$buildObject.headers = $jsHeaders;
      var tmp;
      if ($clientConfig.g2o_1) {
        var tmp$ret$2;
        // Inline function 'org.w3c.fetch.FOLLOW' call
        var tmp0__get_FOLLOW__lsxog0 = null;
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = 'follow';
        var tmp0_unsafeCast = tmp$ret$0;
        tmp$ret$1 = tmp0_unsafeCast;
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      } else {
        var tmp$ret$5;
        // Inline function 'org.w3c.fetch.MANUAL' call
        var tmp1__get_MANUAL__wgvzkm = null;
        var tmp$ret$4;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = 'manual';
        var tmp0_unsafeCast_0 = tmp$ret$3;
        tmp$ret$4 = tmp0_unsafeCast_0;
        tmp$ret$5 = tmp$ret$4;
        tmp = tmp$ret$5;
      }
      $this$buildObject.redirect = tmp;
      var tmp0_safe_receiver = $bodyBytes;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$6;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this$buildObject.body = new Uint8Array(toTypedArray(tmp0_safe_receiver));
        tmp$ret$6 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function $toRawCOROUTINE$19(_this__u8e3s4, clientConfig, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h3g_1 = _this__u8e3s4;
    this.i3g_1 = clientConfig;
    this.j3g_1 = callContext;
  }
  $toRawCOROUTINE$19.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 4;
            this.k3g_1 = {};
            mergeHeaders(this.h3g_1.x2s_1, this.h3g_1.y2s_1, toRaw$lambda(this.k3g_1));
            this.l3g_1 = this.h3g_1.y2s_1;
            var tmp_0 = this.l3g_1;
            if (tmp_0 instanceof ByteArrayContent) {
              this.m3g_1 = this.l3g_1.d1s();
              this.oe_1 = 3;
              continue $sm;
            } else {
              var tmp_1 = this.l3g_1;
              if (tmp_1 instanceof ReadChannelContent) {
                this.oe_1 = 2;
                var tmp_2 = this.l3g_1.g1s();
                suspendResult = tmp_2.j13(new Long(0, 0), this, 1, null);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_3 = this.l3g_1;
                if (tmp_3 instanceof WriteChannelContent) {
                  this.oe_1 = 1;
                  var tmp_4 = GlobalScope_getInstance();
                  var tmp_5 = writer$default(tmp_4, this.j3g_1, false, toRaw$slambda_0(this.l3g_1, null), 2, null).s13();
                  suspendResult = tmp_5.j13(new Long(0, 0), this, 1, null);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.m3g_1 = null;
                  this.oe_1 = 3;
                  continue $sm;
                }
              }
            }

            break;
          case 1:
            var ARGUMENT = suspendResult;
            var tmp_6 = this;
            tmp_6.m3g_1 = readBytes$default(ARGUMENT, 0, 1, null);
            this.oe_1 = 3;
            continue $sm;
          case 2:
            var ARGUMENT_0 = suspendResult;
            var tmp_7 = this;
            tmp_7.m3g_1 = readBytes$default(ARGUMENT_0, 0, 1, null);
            this.oe_1 = 3;
            continue $sm;
          case 3:
            var bodyBytes = this.m3g_1;
            return buildObject(toRaw$lambda_0(this.h3g_1, this.k3g_1, this.i3g_1, bodyBytes));
          case 4:
            throw this.re_1;
        }
      } catch ($p) {
        if (this.pe_1 === 4) {
          throw $p;
        } else {
          this.oe_1 = this.pe_1;
          this.re_1 = $p;
        }
      }
     while (true);
  };
  function asByteArray(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = new Int8Array(_this__u8e3s4.buffer, _this__u8e3s4.byteOffset, _this__u8e3s4.length);
    tmp$ret$0 = tmp0_asDynamic;
    return tmp$ret$0;
  }
  function readBodyBrowser(_this__u8e3s4, response) {
    var tmp0_elvis_lhs = response.body;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance().d15();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stream = tmp;
    return channelFromStream(_this__u8e3s4, stream);
  }
  function channelFromStream(_this__u8e3s4, stream) {
    return writer$default(_this__u8e3s4, null, false, channelFromStream$slambda_0(stream, null), 3, null).s13();
  }
  function readChunk(_this__u8e3s4, $cont) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.fk();
    // Inline function 'io.ktor.client.engine.js.browser.readChunk.<anonymous>' call
    var tmp = _this__u8e3s4.read();
    var tmp_0 = tmp.then(readChunk$lambda(cancellable));
    tmp_0.catch(readChunk$lambda_0(cancellable));
    tmp$ret$0 = cancellable.ok();
    return tmp$ret$0;
  }
  function channelFromStream$slambda($stream, resultContinuation) {
    this.f3h_1 = $stream;
    CoroutineImpl.call(this, resultContinuation);
  }
  channelFromStream$slambda.prototype.c2s = function ($this$writer, $cont) {
    var tmp = this.d2s($this$writer, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  channelFromStream$slambda.prototype.jf = function (p1, $cont) {
    return this.c2s((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  channelFromStream$slambda.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 6;
            this.h3h_1 = this.f3h_1.getReader();
            this.oe_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.oe_1 = 8;
              continue $sm;
            }

            this.pe_1 = 5;
            this.oe_1 = 2;
            suspendResult = readChunk(this.h3h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.i3h_1 = suspendResult;
            if (this.i3h_1 == null) {
              this.pe_1 = 6;
              this.oe_1 = 8;
              var tmp_0 = this;
              continue $sm;
            } else {
              this.j3h_1 = this.i3h_1;
              this.oe_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            this.k3h_1 = this.j3h_1;
            this.oe_1 = 4;
            suspendResult = writeFully(this.g3h_1.s13(), asByteArray(this.k3h_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.pe_1 = 6;
            this.oe_1 = 7;
            continue $sm;
          case 5:
            this.pe_1 = 6;
            var tmp_1 = this.re_1;
            if (tmp_1 instanceof Error) {
              var cause = this.re_1;
              this.h3h_1.cancel(cause);
              throw cause;
            } else {
              throw this.re_1;
            }

            break;
          case 6:
            throw this.re_1;
          case 7:
            this.pe_1 = 6;
            this.oe_1 = 1;
            continue $sm;
          case 8:
            return Unit_getInstance();
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
  channelFromStream$slambda.prototype.d2s = function ($this$writer, completion) {
    var i = new channelFromStream$slambda(this.f3h_1, completion);
    i.g3h_1 = $this$writer;
    return i;
  };
  function channelFromStream$slambda_0($stream, resultContinuation) {
    var i = new channelFromStream$slambda($stream, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.c2s($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function readChunk$lambda($cancellable) {
    return function (it) {
      var chunk = it.value;
      var result = (it.done ? true : chunk == null) ? null : chunk;
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_5();
      tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      $cancellable.f3(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function readChunk$lambda_0($cancellable) {
    return function (cause) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance_5();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
      $cancellable.f3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function commonFetch(input, init, $cont) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.fk();
    // Inline function 'io.ktor.client.engine.js.compatibility.commonFetch.<anonymous>' call
    var controller = AbortController_0();
    init.signal = controller.signal;
    cancellable.ui(commonFetch$lambda(controller));
    var tmp;
    if (PlatformUtils_getInstance().u1g_1) {
      tmp = fetch(input, init);
    } else {
      tmp = jsRequireNodeFetch()(input, init);
    }
    var promise = tmp;
    var tmp_0 = commonFetch$lambda_0(cancellable);
    promise.then(tmp_0, commonFetch$lambda_1(cancellable));
    tmp$ret$0 = cancellable.ok();
    return tmp$ret$0;
  }
  function readBody(_this__u8e3s4, response) {
    var tmp;
    if (PlatformUtils_getInstance().u1g_1) {
      tmp = readBodyBrowser(_this__u8e3s4, response);
    } else {
      tmp = readBodyNode(_this__u8e3s4, response);
    }
    return tmp;
  }
  function AbortController_0() {
    var tmp;
    if (PlatformUtils_getInstance().u1g_1) {
      tmp = new AbortController();
    } else {
      var controller = eval('require')('abort-controller');
      tmp = new controller();
    }
    return tmp;
  }
  function jsRequireNodeFetch() {
    var tmp;
    try {
      tmp = eval('require')('node-fetch');
    } catch ($p) {
      var tmp_0;
      {
        throw Error_init_$Create$("Error loading module 'node-fetch': " + $p);
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function commonFetch$lambda($controller) {
    return function (it) {
      $controller.abort();
      return Unit_getInstance();
    };
  }
  function commonFetch$lambda_0($cancellable) {
    return function (it) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_5();
      tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      $cancellable.f3(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function commonFetch$lambda_1($cancellable) {
    return function (it) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance_5();
      var tmp1_failure = Error_init_$Create$_0('Fail to fetch', it);
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
      $cancellable.f3(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function readBodyNode(_this__u8e3s4, response) {
    return writer$default(_this__u8e3s4, null, false, readBodyNode$slambda_0(response, null), 3, null).s13();
  }
  function readBodyNode$slambda$lambda($responseData, $body) {
    return function (chunk) {
      _ChannelResult___get_isSuccess__impl__odq1z9($responseData.ts(asByteArray(new Uint8Array(chunk))));
      return $body.pause();
    };
  }
  function readBodyNode$slambda$lambda_0($responseData, $this_writer) {
    return function (error) {
      var cause = new JsError(error);
      $responseData.ms(cause);
      return $this_writer.s13().ms(cause);
    };
  }
  function readBodyNode$slambda$lambda_1($responseData) {
    return function () {
      return $responseData.us(null, 1, null);
    };
  }
  function readBodyNode$slambda($response, resultContinuation) {
    this.t3h_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  readBodyNode$slambda.prototype.c2s = function ($this$writer, $cont) {
    var tmp = this.d2s($this$writer, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  readBodyNode$slambda.prototype.jf = function (p1, $cont) {
    return this.c2s((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  readBodyNode$slambda.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 6;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.t3h_1.body;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              throw IllegalStateException_init_$Create$('Fail to get body');
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.v3h_1 = tmp_1;
            var tmp_2 = this;
            tmp_2.w3h_1 = Channel$default(1, null, null, 6, null);
            this.v3h_1.on('data', readBodyNode$slambda$lambda(this.w3h_1, this.v3h_1));
            this.v3h_1.on('error', readBodyNode$slambda$lambda_0(this.w3h_1, this.u3h_1));
            this.v3h_1.on('end', readBodyNode$slambda$lambda_1(this.w3h_1));
            this.pe_1 = 5;
            this.x3h_1 = this.w3h_1.j();
            this.oe_1 = 1;
            continue $sm;
          case 1:
            this.oe_1 = 2;
            suspendResult = this.x3h_1.hr(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.oe_1 = 4;
              continue $sm;
            }

            this.y3h_1 = this.x3h_1.l();
            this.oe_1 = 3;
            suspendResult = writeFully(this.u3h_1.s13(), this.y3h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.v3h_1.resume();
            this.oe_1 = 1;
            continue $sm;
          case 4:
            this.pe_1 = 6;
            this.oe_1 = 7;
            continue $sm;
          case 5:
            this.pe_1 = 6;
            var tmp_3 = this.re_1;
            if (tmp_3 instanceof Error) {
              var cause = this.re_1;
              this.v3h_1.destroy(cause);
              throw cause;
            } else {
              throw this.re_1;
            }

            break;
          case 6:
            throw this.re_1;
          case 7:
            this.pe_1 = 6;
            ;
            return Unit_getInstance();
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
  readBodyNode$slambda.prototype.d2s = function ($this$writer, completion) {
    var i = new readBodyNode$slambda(this.t3h_1, completion);
    i.u3h_1 = $this$writer;
    return i;
  };
  function readBodyNode$slambda_0($response, resultContinuation) {
    var i = new readBodyNode$slambda($response, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.c2s($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function platformRequestDefaultTransform(contentType, context, body) {
    return null;
  }
  function platformResponseDefaultTransformers(_this__u8e3s4) {
  }
  function isReservedStatusCode(_this__u8e3s4, $this) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = Companion_getInstance_6().u1s(_this__u8e3s4);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.client.plugins.websocket.JsWebSocketSession.isReservedStatusCode.<anonymous>' call
    tmp$ret$0 = tmp0_let == null ? true : equals(tmp0_let, Codes_CLOSED_ABNORMALLY_getInstance());
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function JsWebSocketSession$lambda(this$0) {
    return function (it) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = it;
      tmp$ret$1 = tmp$ret$0;
      var event = tmp$ret$1;
      var data = event.data;
      var tmp;
      if (data instanceof ArrayBuffer) {
        var tmp$ret$3;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp0_unsafeCast = new Int8Array(data);
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = tmp0_unsafeCast;
        tmp$ret$3 = tmp$ret$2;
        tmp = Binary_init_$Create$(false, tmp$ret$3);
      } else {
        if (!(data == null) ? typeof data === 'string' : false) {
          tmp = Text_init_$Create$(data);
        } else {
          var error = IllegalStateException_init_$Create$('Unknown frame type: ' + event.type);
          this$0.b3i_1.jl(error);
          throw error;
        }
      }
      var frame = tmp;
      this$0.c3i_1.ts(frame);
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession$lambda_0(this$0) {
    return function (it) {
      var cause = new WebSocketException('' + it);
      this$0.b3i_1.jl(cause);
      this$0.c3i_1.ms(cause);
      this$0.d3i_1.ch(null, 1, null);
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession$lambda_1(this$0) {
    return function (event) {
      var tmp = event.code;
      var tmp_0 = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
      var tmp_1 = event.reason;
      var reason = new CloseReason(tmp_0, (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      this$0.b3i_1.hl(reason);
      this$0.c3i_1.ts(Close_init_$Create$(reason));
      this$0.c3i_1.us(null, 1, null);
      this$0.d3i_1.ch(null, 1, null);
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession$slambda(this$0, resultContinuation) {
    this.p3i_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  JsWebSocketSession$slambda.prototype.l14 = function ($this$launch, $cont) {
    var tmp = this.m14($this$launch, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  JsWebSocketSession$slambda.prototype.jf = function (p1, $cont) {
    return this.l14((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  JsWebSocketSession$slambda.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 10;
            var tmp_0 = this;
            tmp_0.r3i_1 = this.p3i_1.d3i_1;
            this.oe_1 = 1;
            continue $sm;
          case 1:
            this.t3i_1 = null;
            this.oe_1 = 2;
            continue $sm;
          case 2:
            this.oe_1 = 3;
            continue $sm;
          case 3:
            this.pe_1 = 9;
            this.pe_1 = 8;
            this.v3i_1 = this.r3i_1.j();
            this.oe_1 = 4;
            continue $sm;
          case 4:
            this.oe_1 = 5;
            suspendResult = this.v3i_1.hr(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.oe_1 = 6;
              continue $sm;
            }

            var e = this.v3i_1.l();
            var tmp0_subject = e.g1t_1;
            var tmp0 = tmp0_subject.v3_1;
            switch (tmp0) {
              case 0:
                var text = e.h1t_1;
                this.p3i_1.a3i_1.send(String$default(text, 0, 0, null, 14, null));
                ;
                break;
              case 1:
                var tmp_1 = e.h1t_1;
                var source = tmp_1 instanceof Int8Array ? tmp_1 : THROW_CCE();
                var frameData = source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength | 0);
                this.p3i_1.a3i_1.send(frameData);
                ;
                break;
              case 2:
                var tmp$ret$0;
                l$ret$1: do {
                  var builder = BytePacketBuilder_init_$Create$(null, 1, null);
                  try {
                    writeFully$default(builder, e.h1t_1, 0, 0, 6, null);
                    tmp$ret$0 = builder.i11();
                    break l$ret$1;
                  } catch ($p) {
                    if ($p instanceof Error) {
                      builder.rl();
                      throw $p;
                    } else {
                      throw $p;
                    }
                  }
                }
                 while (false);
                var data = tmp$ret$0;
                var code = readShort(data);
                var reason = data.u17(0, 0, 3, null);
                this.p3i_1.b3i_1.hl(new CloseReason(code, reason));
                ;
                if (isReservedStatusCode(code, this.p3i_1)) {
                  this.p3i_1.a3i_1.close();
                } else {
                  this.p3i_1.a3i_1.close(code, reason);
                }

                break;
              case 3:
              case 4:
                break;
            }

            this.oe_1 = 4;
            continue $sm;
          case 6:
            this.u3i_1 = Unit_getInstance();
            this.pe_1 = 10;
            this.oe_1 = 7;
            var tmp_2 = this;
            continue $sm;
          case 7:
            var tmp_3 = this;
            cancelConsumed(this.r3i_1, this.t3i_1);
            tmp_3.s3i_1 = Unit_getInstance();
            this.oe_1 = 12;
            continue $sm;
          case 8:
            this.pe_1 = 9;
            var tmp_4 = this.re_1;
            if (tmp_4 instanceof Error) {
              var e_0 = this.re_1;
              var tmp_5 = this;
              this.t3i_1 = e_0;
              throw e_0;
            } else {
              throw this.re_1;
            }

            break;
          case 9:
            this.pe_1 = 10;
            var t = this.re_1;
            cancelConsumed(this.r3i_1, this.t3i_1);
            ;
            throw t;
          case 10:
            throw this.re_1;
          case 11:
            cancelConsumed(this.r3i_1, this.t3i_1);
            ;
            if (false) {
              this.oe_1 = 1;
              continue $sm;
            }

            this.oe_1 = 12;
            continue $sm;
          case 12:
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.pe_1 === 10) {
          throw $p;
        } else {
          this.oe_1 = this.pe_1;
          this.re_1 = $p;
        }
      }
     while (true);
  };
  JsWebSocketSession$slambda.prototype.m14 = function ($this$launch, completion) {
    var i = new JsWebSocketSession$slambda(this.p3i_1, completion);
    i.q3i_1 = $this$launch;
    return i;
  };
  function JsWebSocketSession$slambda_0(this$0, resultContinuation) {
    var i = new JsWebSocketSession$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.l14($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function JsWebSocketSession$lambda_2(this$0) {
    return function (cause) {
      var tmp;
      if (cause == null) {
        this$0.a3i_1.close();
        tmp = Unit_getInstance();
      } else {
        this$0.a3i_1.close(Codes_INTERNAL_ERROR_getInstance().r1s_1, 'Client failed');
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession(coroutineContext, websocket) {
    this.z3h_1 = coroutineContext;
    this.a3i_1 = websocket;
    var tmp = this;
    tmp.b3i_1 = CompletableDeferred$default(null, 1, null);
    var tmp_0 = this;
    Factory_getInstance();
    tmp_0.c3i_1 = Channel$default(2147483647, null, null, 6, null);
    var tmp_1 = this;
    Factory_getInstance();
    tmp_1.d3i_1 = Channel$default(2147483647, null, null, 6, null);
    this.e3i_1 = this.c3i_1;
    this.f3i_1 = this.d3i_1;
    this.g3i_1 = this.b3i_1;
    var tmp$ret$2;
    // Inline function 'org.w3c.dom.ARRAYBUFFER' call
    var tmp0__get_ARRAYBUFFER__ua4cvm = null;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'arraybuffer';
    var tmp0_unsafeCast = tmp$ret$0;
    tmp$ret$1 = tmp0_unsafeCast;
    tmp$ret$2 = tmp$ret$1;
    this.a3i_1.binaryType = tmp$ret$2;
    this.a3i_1.addEventListener('message', JsWebSocketSession$lambda(this));
    this.a3i_1.addEventListener('error', JsWebSocketSession$lambda_0(this));
    this.a3i_1.addEventListener('close', JsWebSocketSession$lambda_1(this));
    launch$default(this, null, null, JsWebSocketSession$slambda_0(this, null), 3, null);
    var tmp0_safe_receiver = this.z3h_1.i3(Key_getInstance());
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.wg(JsWebSocketSession$lambda_2(this));
    }
  }
  JsWebSocketSession.prototype.vf = function () {
    return this.z3h_1;
  };
  function unwrapCancellationException(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  //region block: post-declaration
  HttpClientEngineBase.prototype.c2t = get_supportedCapabilities;
  HttpClientEngineBase.prototype.l2o = install;
  KtorCallContextElement.prototype.i3 = get;
  KtorCallContextElement.prototype.o3 = fold;
  KtorCallContextElement.prototype.n3 = minusKey;
  KtorCallContextElement.prototype.p3 = plus;
  HttpRequest$1.prototype.vf = get_coroutineContext;
  JsClientEngine.prototype.l2o = install;
  //endregion
  //region block: init
  KTOR_DEFAULT_USER_AGENT = 'Ktor client';
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Phases_getInstance;
  _.$_$.b = Phases_getInstance_1;
  _.$_$.c = EmptyContent_getInstance;
  _.$_$.d = HttpClientPlugin;
  _.$_$.e = HttpRequestBuilder;
  _.$_$.f = accept;
  _.$_$.g = url;
  _.$_$.h = HttpResponseContainer;
  _.$_$.i = HttpStatement;
  _.$_$.j = HttpClient_1;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-core-js-ir.js.map
