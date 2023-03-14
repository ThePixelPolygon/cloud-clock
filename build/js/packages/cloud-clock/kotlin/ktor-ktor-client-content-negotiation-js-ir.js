(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-utils-js-ir.js', './ktor-ktor-client-core-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-serialization-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'), require('./ktor-ktor-client-core-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-serialization-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-client-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-client-core-js-ir' was not found. Please, check whether 'ktor-ktor-client-core-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-serialization-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-serialization-js-ir' was not found. Please, check whether 'ktor-ktor-serialization-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    root['ktor-ktor-client-content-negotiation-js-ir'] = factory(typeof this['ktor-ktor-client-content-negotiation-js-ir'] === 'undefined' ? {} : this['ktor-ktor-client-content-negotiation-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-utils-js-ir'], this['ktor-ktor-client-core-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-serialization-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_utils, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_serialization) {
  'use strict';
  //region block: imports
  var classMeta = kotlin_kotlin.$_$.a8;
  var setMetadataFor = kotlin_kotlin.$_$.d9;
  var toString = kotlin_kotlin.$_$.h9;
  var CoroutineImpl = kotlin_kotlin.$_$.o7;
  var Unit_getInstance = kotlin_kotlin.$_$.b4;
  var THROW_CCE = kotlin_kotlin.$_$.kb;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.f;
  var isObject = kotlin_kotlin.$_$.u8;
  var accept = kotlin_io_ktor_ktor_client_core.$_$.f;
  var Collection = kotlin_kotlin.$_$.d4;
  var isInterface = kotlin_kotlin.$_$.s8;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.q;
  var contentType = kotlin_io_ktor_ktor_http.$_$.y;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.h;
  var EmptyContent_getInstance = kotlin_io_ktor_ktor_client_core.$_$.c;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.a7;
  var Unit = kotlin_kotlin.$_$.rb;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var charset = kotlin_io_ktor_ktor_http.$_$.w;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var ensureNotNull = kotlin_kotlin.$_$.xb;
  var joinToString$default = kotlin_kotlin.$_$.i;
  var HttpResponseContainer = kotlin_io_ktor_ktor_client_core.$_$.h;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.g1;
  var getKClass = kotlin_kotlin.$_$.e;
  var contentType_0 = kotlin_io_ktor_ktor_http.$_$.a1;
  var suitableCharset$default = kotlin_io_ktor_ktor_serialization.$_$.b;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var register$default = kotlin_io_ktor_ktor_serialization.$_$.a;
  var Configuration = kotlin_io_ktor_ktor_serialization.$_$.c;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.k;
  var Phases_getInstance = kotlin_io_ktor_ktor_client_core.$_$.a;
  var Phases_getInstance_0 = kotlin_io_ktor_ktor_client_core.$_$.b;
  var HttpClientPlugin = kotlin_io_ktor_ktor_client_core.$_$.d;
  var objectMeta = kotlin_kotlin.$_$.c9;
  var Exception = kotlin_kotlin.$_$.db;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.s1;
  var captureStack = kotlin_kotlin.$_$.u7;
  var endsWith$default = kotlin_kotlin.$_$.l;
  var startsWith$default = kotlin_kotlin.$_$.s;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.t3;
  var mutableSetOf = kotlin_kotlin.$_$.c6;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ConverterRegistration, 'ConverterRegistration', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ContentNegotiation$Config$defaultMatcher$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ContentNegotiation$Plugin$install$slambda, 'ContentNegotiation$Plugin$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(ContentNegotiation$Plugin$install$slambda_1, 'ContentNegotiation$Plugin$install$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor(Config, 'Config', classMeta, undefined, [Configuration], undefined, undefined, []);
  setMetadataFor(Plugin, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor(ContentNegotiation, 'ContentNegotiation', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ContentConverterException, 'ContentConverterException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor(JsonContentTypeMatcher, 'JsonContentTypeMatcher', objectMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher) {
    this.w3i_1 = converter;
    this.x3i_1 = contentTypeToSend;
    this.y3i_1 = contentTypeMatcher;
  }
  function defaultMatcher($this, pattern) {
    return new ContentNegotiation$Config$defaultMatcher$1(pattern);
  }
  function ContentNegotiation$Config$defaultMatcher$1($pattern) {
    this.z3i_1 = $pattern;
  }
  ContentNegotiation$Config$defaultMatcher$1.prototype.a3j = function (contentType) {
    return contentType.u1i(this.z3i_1);
  };
  function ContentNegotiation$Plugin$install$slambda$lambda(it) {
    return toString(it.w3i_1);
  }
  function ContentNegotiation$Plugin$install$slambda($plugin, resultContinuation) {
    this.j3j_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  ContentNegotiation$Plugin$install$slambda.prototype.q2m = function ($this$intercept, payload, $cont) {
    var tmp = this.r2m($this$intercept, payload, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  ContentNegotiation$Plugin$install$slambda.prototype.z5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q2m(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  ContentNegotiation$Plugin$install$slambda.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 10;
            this.m3j_1 = this.j3j_1.v3j_1;
            var tmp0_iterator = this.m3j_1.j();
            while (tmp0_iterator.k()) {
              var element = tmp0_iterator.l();
              accept(this.k3j_1.z1f_1, element.x3i_1);
            }

            var tmp_0;
            var tmp_1 = this.k3j_1.c1f();
            if (tmp_1 instanceof OutgoingContent) {
              tmp_0 = true;
            } else {
              var tmp$ret$0;
              l$ret$1: do {
                var tmp0_any = get_DefaultIgnoredTypes();
                var tmp_2;
                if (isInterface(tmp0_any, Collection)) {
                  tmp_2 = tmp0_any.i();
                } else {
                  tmp_2 = false;
                }
                if (tmp_2) {
                  tmp$ret$0 = false;
                  break l$ret$1;
                }
                var tmp0_iterator_0 = tmp0_any.j();
                while (tmp0_iterator_0.k()) {
                  var element_0 = tmp0_iterator_0.l();
                  if (element_0.kb(this.l3j_1)) {
                    tmp$ret$0 = true;
                    break l$ret$1;
                  }
                }
                tmp$ret$0 = false;
              }
               while (false);
              tmp_0 = tmp$ret$0;
            }

            if (tmp_0) {
              return Unit_getInstance();
            }

            var tmp_3 = this;
            var tmp0_elvis_lhs = contentType(this.k3j_1.z1f_1);
            var tmp_4;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_4 = tmp0_elvis_lhs;
            }

            tmp_3.n3j_1 = tmp_4;
            var tmp_5 = this.l3j_1;
            if (tmp_5 instanceof Unit) {
              this.k3j_1.z1f_1.y2n_1.o1d(HttpHeaders_getInstance().r1j_1);
              this.oe_1 = 9;
              suspendResult = this.k3j_1.d1f(EmptyContent_getInstance(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.oe_1 = 1;
              continue $sm;
            }

            break;
          case 1:
            var tmp_6 = this;
            var tmp0_filterTo = ArrayList_init_$Create$();
            var tmp0_iterator_1 = this.m3j_1.j();
            while (tmp0_iterator_1.k()) {
              var element_1 = tmp0_iterator_1.l();
              if (element_1.y3i_1.a3j(this.n3j_1)) {
                tmp0_filterTo.a(element_1);
              }
            }

            var tmp1_takeIf = tmp0_filterTo;
            var tmp_7;
            if (!tmp1_takeIf.i()) {
              tmp_7 = tmp1_takeIf;
            } else {
              tmp_7 = null;
            }

            var tmp1_elvis_lhs = tmp_7;
            var tmp_8;
            if (tmp1_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_8 = tmp1_elvis_lhs;
            }

            tmp_6.o3j_1 = tmp_8;
            if (this.k3j_1.z1f_1.n39() == null)
              return Unit_getInstance();
            this.k3j_1.z1f_1.y2n_1.o1d(HttpHeaders_getInstance().r1j_1);
            this.oe_1 = 2;
            continue $sm;
          case 2:
            this.q3j_1 = this.o3j_1.j();
            this.oe_1 = 3;
            continue $sm;
          case 3:
            if (!this.q3j_1.k()) {
              this.oe_1 = 6;
              continue $sm;
            }

            this.r3j_1 = this.q3j_1.l();
            this.oe_1 = 4;
            var tmp0_elvis_lhs_0 = charset(this.n3j_1);
            suspendResult = this.r3j_1.w3i_1.y2b(this.n3j_1, tmp0_elvis_lhs_0 == null ? Charsets_getInstance().d18_1 : tmp0_elvis_lhs_0, ensureNotNull(this.k3j_1.z1f_1.n39()), this.l3j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.s3j_1 = suspendResult;
            if (!(this.s3j_1 == null)) {
              this.p3j_1 = this.s3j_1;
              this.oe_1 = 7;
              continue $sm;
            } else {
              this.oe_1 = 5;
              continue $sm;
            }

            break;
          case 5:
            this.oe_1 = 3;
            continue $sm;
          case 6:
            this.p3j_1 = null;
            if (false) {
              this.oe_1 = 2;
              continue $sm;
            }

            this.oe_1 = 7;
            continue $sm;
          case 7:
            this.t3j_1 = this.p3j_1;
            var tmp_9 = this;
            var tmp_10;
            if (this.t3j_1 == null) {
              var tmp_11 = "Can't convert " + toString(this.l3j_1) + ' with contentType ' + this.n3j_1 + ' using converters ';
              throw new ContentConverterException(tmp_11 + joinToString$default(this.o3j_1, null, null, null, 0, null, ContentNegotiation$Plugin$install$slambda$lambda, 31, null));
            } else {
              tmp_10 = this.t3j_1;
            }

            tmp_9.u3j_1 = tmp_10;
            this.oe_1 = 8;
            suspendResult = this.k3j_1.d1f(this.u3j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            ;
            return Unit_getInstance();
          case 9:
            ;
            return Unit_getInstance();
          case 10:
            throw this.re_1;
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
  ContentNegotiation$Plugin$install$slambda.prototype.r2m = function ($this$intercept, payload, completion) {
    var i = new ContentNegotiation$Plugin$install$slambda(this.j3j_1, completion);
    i.k3j_1 = $this$intercept;
    i.l3j_1 = payload;
    return i;
  };
  function ContentNegotiation$Plugin$install$slambda_0($plugin, resultContinuation) {
    var i = new ContentNegotiation$Plugin$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, payload, $cont) {
      return i.q2m($this$intercept, payload, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function ContentNegotiation$Plugin$install$slambda_1($plugin, resultContinuation) {
    this.e3k_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  ContentNegotiation$Plugin$install$slambda_1.prototype.k2n = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
    var tmp = this.l2n($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  ContentNegotiation$Plugin$install$slambda_1.prototype.z5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.k2n(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  ContentNegotiation$Plugin$install$slambda_1.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 8;
            this.h3k_1 = this.g3k_1.s2();
            this.i3k_1 = this.g3k_1.t2();
            var tmp_0 = this.i3k_1;
            if (!isInterface(tmp_0, ByteReadChannel))
              return Unit_getInstance();
            if (this.h3k_1.q1g_1.equals(getKClass(ByteReadChannel)))
              return Unit_getInstance();
            var tmp_1 = this;
            var tmp0_elvis_lhs = contentType_0(this.f3k_1.z1f_1.x2m());
            var tmp_2;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_2 = tmp0_elvis_lhs;
            }

            tmp_1.j3k_1 = tmp_2;
            this.k3k_1 = this.e3k_1.v3j_1;
            var tmp_3 = this;
            var tmp0_filterTo = ArrayList_init_$Create$();
            var tmp0_iterator = this.k3k_1.j();
            while (tmp0_iterator.k()) {
              var element = tmp0_iterator.l();
              if (element.y3i_1.a3j(this.j3k_1)) {
                tmp0_filterTo.a(element);
              }
            }

            var tmp0_takeIf = tmp0_filterTo;
            var tmp_4;
            if (!tmp0_takeIf.i()) {
              tmp_4 = tmp0_takeIf;
            } else {
              tmp_4 = null;
            }

            var tmp1_elvis_lhs = tmp_4;
            var tmp_5;
            if (tmp1_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_5 = tmp1_elvis_lhs;
            }

            tmp_3.l3k_1 = tmp_5;
            this.oe_1 = 1;
            continue $sm;
          case 1:
            this.n3k_1 = this.l3k_1.j();
            this.oe_1 = 2;
            continue $sm;
          case 2:
            if (!this.n3k_1.k()) {
              this.oe_1 = 5;
              continue $sm;
            }

            this.o3k_1 = this.n3k_1.l();
            this.oe_1 = 3;
            var tmp_6 = this.f3k_1.z1f_1.g2q().c1n();
            suspendResult = this.o3k_1.w3i_1.z2b(suitableCharset$default(tmp_6, null, 1, null), this.h3k_1, this.i3k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.p3k_1 = suspendResult;
            if (!(this.p3k_1 == null)) {
              this.m3k_1 = this.p3k_1;
              this.oe_1 = 6;
              continue $sm;
            } else {
              this.oe_1 = 4;
              continue $sm;
            }

            break;
          case 4:
            this.oe_1 = 2;
            continue $sm;
          case 5:
            this.m3k_1 = null;
            if (false) {
              this.oe_1 = 1;
              continue $sm;
            }

            this.oe_1 = 6;
            continue $sm;
          case 6:
            this.q3k_1 = this.m3k_1;
            var tmp_7 = this;
            var tmp_8;
            if (this.q3k_1 == null) {
              return Unit_getInstance();
            } else {
              tmp_8 = this.q3k_1;
            }

            tmp_7.r3k_1 = tmp_8;
            this.s3k_1 = new HttpResponseContainer(this.h3k_1, this.r3k_1);
            this.oe_1 = 7;
            suspendResult = this.f3k_1.d1f(this.s3k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            ;
            return Unit_getInstance();
          case 8:
            throw this.re_1;
        }
      } catch ($p) {
        if (this.pe_1 === 8) {
          throw $p;
        } else {
          this.oe_1 = this.pe_1;
          this.re_1 = $p;
        }
      }
     while (true);
  };
  ContentNegotiation$Plugin$install$slambda_1.prototype.l2n = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new ContentNegotiation$Plugin$install$slambda_1(this.e3k_1, completion);
    i.f3k_1 = $this$intercept;
    i.g3k_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  function ContentNegotiation$Plugin$install$slambda_2($plugin, resultContinuation) {
    var i = new ContentNegotiation$Plugin$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
      return i.k2n($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Config() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.t3k_1 = tmp$ret$0;
  }
  Config.prototype.m1t = function (contentType, converter, configuration) {
    var tmp0_subject = contentType;
    var matcher = tmp0_subject.equals(Application_getInstance().m1h_1) ? JsonContentTypeMatcher_getInstance() : defaultMatcher(this, contentType);
    this.u3k(contentType, converter, matcher, configuration);
  };
  Config.prototype.u3k = function (contentTypeToSend, converter, contentTypeMatcher, configuration) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    configuration(converter);
    tmp$ret$0 = converter;
    var registration = new ConverterRegistration(tmp$ret$0, contentTypeToSend, contentTypeMatcher);
    this.t3k_1.a(registration);
  };
  function Plugin() {
    Plugin_instance = this;
    this.v3k_1 = new AttributeKey('ContentNegotiation');
  }
  Plugin.prototype.n = function () {
    return this.v3k_1;
  };
  Plugin.prototype.w3k = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    return new ContentNegotiation(config.t3k_1);
  };
  Plugin.prototype.b2p = function (block) {
    return this.w3k(block);
  };
  Plugin.prototype.x3k = function (plugin, scope) {
    var tmp = Phases_getInstance().u2u_1;
    scope.w2l_1.d1g(tmp, ContentNegotiation$Plugin$install$slambda_0(plugin, null));
    var tmp_0 = Phases_getInstance_0().w2o_1;
    scope.x2l_1.d1g(tmp_0, ContentNegotiation$Plugin$install$slambda_2(plugin, null));
  };
  Plugin.prototype.c2p = function (plugin, scope) {
    return this.x3k(plugin instanceof ContentNegotiation ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function ContentNegotiation(registrations) {
    Plugin_getInstance();
    this.v3j_1 = registrations;
  }
  function ContentConverterException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, ContentConverterException);
  }
  function JsonContentTypeMatcher() {
    JsonContentTypeMatcher_instance = this;
  }
  JsonContentTypeMatcher.prototype.a3j = function (contentType) {
    if (contentType.u1i(Application_getInstance().m1h_1)) {
      return true;
    }
    var value = contentType.t1i().toString();
    var tmp;
    if (startsWith$default(value, 'application/', false, 2, null)) {
      tmp = endsWith$default(value, '+json', false, 2, null);
    } else {
      tmp = false;
    }
    return tmp;
  };
  var JsonContentTypeMatcher_instance;
  function JsonContentTypeMatcher_getInstance() {
    if (JsonContentTypeMatcher_instance == null)
      new JsonContentTypeMatcher();
    return JsonContentTypeMatcher_instance;
  }
  function get_DefaultIgnoredTypes() {
    init_properties_DefaultIgnoredTypesJs_kt_b6fzr7();
    return DefaultIgnoredTypes;
  }
  var DefaultIgnoredTypes;
  var properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt;
  function init_properties_DefaultIgnoredTypesJs_kt_b6fzr7() {
    if (properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt) {
    } else {
      properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt = true;
      DefaultIgnoredTypes = mutableSetOf([getKClass(OutgoingContent), getKClass(ByteReadChannel), PrimitiveClasses_getInstance().mc()]);
    }
  }
  //region block: post-declaration
  Config.prototype.n1t = register$default;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Plugin_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-content-negotiation-js-ir.js.map
