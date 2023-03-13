(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-utils-js-ir.js', './ktor-ktor-client-core-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-serialization-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'), require('./ktor-ktor-client-core-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-serialization-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-client-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-client-core-js-ir' was not found. Please, check whether 'ktor-ktor-client-core-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    if (typeof this['ktor-ktor-serialization-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-content-negotiation-js-ir'. Its dependency 'ktor-ktor-serialization-js-ir' was not found. Please, check whether 'ktor-ktor-serialization-js-ir' is loaded prior to 'ktor-ktor-client-content-negotiation-js-ir'.");
    }
    root['ktor-ktor-client-content-negotiation-js-ir'] = factory(typeof this['ktor-ktor-client-content-negotiation-js-ir'] === 'undefined' ? {} : this['ktor-ktor-client-content-negotiation-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-utils-js-ir'], this['ktor-ktor-client-core-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-serialization-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_utils, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_serialization) {
  'use strict';
  //region block: imports
  var classMeta = kotlin_kotlin.$_$.y8;
  var setMetadataFor = kotlin_kotlin.$_$.ca;
  var ContentTypeMatcher = kotlin_io_ktor_ktor_http.$_$.r;
  var toString = kotlin_kotlin.$_$.ga;
  var CoroutineImpl = kotlin_kotlin.$_$.l8;
  var Unit_getInstance = kotlin_kotlin.$_$.p4;
  var THROW_CCE = kotlin_kotlin.$_$.ad;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.g;
  var isObject = kotlin_kotlin.$_$.s9;
  var accept = kotlin_io_ktor_ktor_client_core.$_$.g;
  var Collection = kotlin_kotlin.$_$.r4;
  var isInterface = kotlin_kotlin.$_$.q9;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.q;
  var contentType = kotlin_io_ktor_ktor_http.$_$.b1;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.h;
  var EmptyContent_getInstance = kotlin_io_ktor_ktor_client_core.$_$.d;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v7;
  var Unit = kotlin_kotlin.$_$.hd;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.z;
  var charset = kotlin_io_ktor_ktor_http.$_$.z;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.q;
  var ensureNotNull = kotlin_kotlin.$_$.nd;
  var joinToString$default = kotlin_kotlin.$_$.k;
  var HttpResponseContainer = kotlin_io_ktor_ktor_client_core.$_$.i;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.i1;
  var getKClass = kotlin_kotlin.$_$.e;
  var contentType_0 = kotlin_io_ktor_ktor_http.$_$.d1;
  var suitableCharset$default = kotlin_io_ktor_ktor_serialization.$_$.b;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var register$default = kotlin_io_ktor_ktor_serialization.$_$.a;
  var Configuration = kotlin_io_ktor_ktor_serialization.$_$.c;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.l;
  var prepare$default = kotlin_io_ktor_ktor_client_core.$_$.a;
  var Phases_getInstance = kotlin_io_ktor_ktor_client_core.$_$.b;
  var Phases_getInstance_0 = kotlin_io_ktor_ktor_client_core.$_$.c;
  var HttpClientPlugin = kotlin_io_ktor_ktor_client_core.$_$.e;
  var objectMeta = kotlin_kotlin.$_$.ba;
  var Exception = kotlin_kotlin.$_$.tc;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.x1;
  var captureStack = kotlin_kotlin.$_$.s8;
  var endsWith$default = kotlin_kotlin.$_$.n;
  var startsWith$default = kotlin_kotlin.$_$.v;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.f4;
  var mutableSetOf = kotlin_kotlin.$_$.w6;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ConverterRegistration, 'ConverterRegistration', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ContentNegotiation$Config$defaultMatcher$1, undefined, classMeta, undefined, [ContentTypeMatcher], undefined, undefined, []);
  setMetadataFor(ContentNegotiation$Plugin$install$slambda, 'ContentNegotiation$Plugin$install$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [2]);
  setMetadataFor(ContentNegotiation$Plugin$install$slambda_1, 'ContentNegotiation$Plugin$install$slambda', classMeta, CoroutineImpl, [CoroutineImpl], undefined, undefined, [2]);
  setMetadataFor(Config, 'Config', classMeta, undefined, [Configuration], undefined, undefined, []);
  setMetadataFor(Plugin, 'Plugin', objectMeta, undefined, [HttpClientPlugin], undefined, undefined, []);
  setMetadataFor(ContentNegotiation, 'ContentNegotiation', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ContentConverterException, 'ContentConverterException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor(JsonContentTypeMatcher, 'JsonContentTypeMatcher', objectMeta, undefined, [ContentTypeMatcher], undefined, undefined, []);
  //endregion
  function ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher) {
    this.converter_1 = converter;
    this.contentTypeToSend_1 = contentTypeToSend;
    this.contentTypeMatcher_1 = contentTypeMatcher;
  }
  ConverterRegistration.prototype.get_converter_2qavhz_k$ = function () {
    return this.converter_1;
  };
  ConverterRegistration.prototype.get_contentTypeToSend_v7r6xf_k$ = function () {
    return this.contentTypeToSend_1;
  };
  ConverterRegistration.prototype.get_contentTypeMatcher_b310yg_k$ = function () {
    return this.contentTypeMatcher_1;
  };
  function defaultMatcher($this, pattern) {
    return new ContentNegotiation$Config$defaultMatcher$1(pattern);
  }
  function ContentNegotiation$Config$defaultMatcher$1($pattern) {
    this.$pattern_1 = $pattern;
  }
  ContentNegotiation$Config$defaultMatcher$1.prototype.contains_dqyzax_k$ = function (contentType) {
    return contentType.match_7mk6xr_k$(this.$pattern_1);
  };
  function ContentNegotiation$Plugin$install$slambda$lambda(it) {
    return toString(it.converter_1);
  }
  function ContentNegotiation$Plugin$install$slambda($plugin, resultContinuation) {
    this.$plugin_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  ContentNegotiation$Plugin$install$slambda.prototype.invoke_63ydys_k$ = function ($this$intercept, payload, $cont) {
    var tmp = this.create_300ycv_k$($this$intercept, payload, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  ContentNegotiation$Plugin$install$slambda.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.invoke_63ydys_k$(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  ContentNegotiation$Plugin$install$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(10);
            this.registrations0__1 = this.$plugin_1.registrations_1;
            var tmp0_iterator = this.registrations0__1.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var element = tmp0_iterator.next_20eer_k$();
              accept(this.$this$intercept_1.get_context_h02k06_k$(), element.contentTypeToSend_1);
            }

            var tmp_0;
            var tmp_1 = this.$this$intercept_1.get_subject_tmjbgd_k$();
            if (tmp_1 instanceof OutgoingContent) {
              tmp_0 = true;
            } else {
              var tmp$ret$0;
              l$ret$1: do {
                var tmp0_any = get_DefaultIgnoredTypes();
                var tmp_2;
                if (isInterface(tmp0_any, Collection)) {
                  tmp_2 = tmp0_any.isEmpty_y1axqb_k$();
                } else {
                  tmp_2 = false;
                }
                if (tmp_2) {
                  tmp$ret$0 = false;
                  break l$ret$1;
                }
                var tmp0_iterator_0 = tmp0_any.iterator_jk1svi_k$();
                while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
                  var element_0 = tmp0_iterator_0.next_20eer_k$();
                  if (element_0.isInstance_6tn68w_k$(this.payload_1)) {
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
            var tmp0_elvis_lhs = contentType(this.$this$intercept_1.get_context_h02k06_k$());
            var tmp_4;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_4 = tmp0_elvis_lhs;
            }

            tmp_3.contentType1__1 = tmp_4;
            var tmp_5 = this.payload_1;
            if (tmp_5 instanceof Unit) {
              this.$this$intercept_1.get_context_h02k06_k$().get_headers_ef25jx_k$().remove_d85afi_k$(HttpHeaders_getInstance().get_ContentType_z1j0sq_k$());
              this.set_state_a96kl8_k$(9);
              suspendResult = this.$this$intercept_1.proceedWith_slnzfn_k$(EmptyContent_getInstance(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            break;
          case 1:
            var tmp_6 = this;
            var tmp1_filterTo = ArrayList_init_$Create$();
            var tmp0_iterator_1 = this.registrations0__1.iterator_jk1svi_k$();
            while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
              var element_1 = tmp0_iterator_1.next_20eer_k$();
              if (element_1.contentTypeMatcher_1.contains_dqyzax_k$(this.contentType1__1)) {
                tmp1_filterTo.add_1j60pz_k$(element_1);
              }
            }

            var tmp2_takeIf = tmp1_filterTo;
            var tmp_7;
            if (!tmp2_takeIf.isEmpty_y1axqb_k$()) {
              tmp_7 = tmp2_takeIf;
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

            tmp_6.matchingRegistrations2__1 = tmp_8;
            if (this.$this$intercept_1.get_context_h02k06_k$().get_bodyType_3n7prv_k$() == null)
              return Unit_getInstance();
            this.$this$intercept_1.get_context_h02k06_k$().get_headers_ef25jx_k$().remove_d85afi_k$(HttpHeaders_getInstance().get_ContentType_z1j0sq_k$());
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            this.tmp0_iterator4__1 = this.matchingRegistrations2__1.iterator_jk1svi_k$();
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            if (!this.tmp0_iterator4__1.hasNext_bitz1p_k$()) {
              this.set_state_a96kl8_k$(6);
              continue $sm;
            }

            this.element5__1 = this.tmp0_iterator4__1.next_20eer_k$();
            this.set_state_a96kl8_k$(4);
            var tmp0_elvis_lhs_0 = charset(this.contentType1__1);
            suspendResult = this.element5__1.converter_1.serialize_itgcao_k$(this.contentType1__1, tmp0_elvis_lhs_0 == null ? Charsets_getInstance().get_UTF_8_ihn39z_k$() : tmp0_elvis_lhs_0, ensureNotNull(this.$this$intercept_1.get_context_h02k06_k$().get_bodyType_3n7prv_k$()), this.payload_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.result6__1 = suspendResult;
            if (!(this.result6__1 == null)) {
              this.tmp$ret$23__1 = this.result6__1;
              this.set_state_a96kl8_k$(7);
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(5);
              continue $sm;
            }

            break;
          case 5:
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 6:
            this.tmp$ret$23__1 = null;
            if (false) {
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 7:
            this.tmp2_elvis_lhs7__1 = this.tmp$ret$23__1;
            var tmp_9 = this;
            var tmp_10;
            if (this.tmp2_elvis_lhs7__1 == null) {
              var tmp_11 = "Can't convert " + toString(this.payload_1) + ' with contentType ' + this.contentType1__1 + ' using converters ';
              throw new ContentConverterException(tmp_11 + joinToString$default(this.matchingRegistrations2__1, null, null, null, 0, null, ContentNegotiation$Plugin$install$slambda$lambda, 31, null));
            } else {
              tmp_10 = this.tmp2_elvis_lhs7__1;
            }

            tmp_9.serializedContent8__1 = tmp_10;
            this.set_state_a96kl8_k$(8);
            suspendResult = this.$this$intercept_1.proceedWith_slnzfn_k$(this.serializedContent8__1, this);
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
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 10) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  ContentNegotiation$Plugin$install$slambda.prototype.create_300ycv_k$ = function ($this$intercept, payload, completion) {
    var i = new ContentNegotiation$Plugin$install$slambda(this.$plugin_1, completion);
    i.$this$intercept_1 = $this$intercept;
    i.payload_1 = payload;
    return i;
  };
  function ContentNegotiation$Plugin$install$slambda_0($plugin, resultContinuation) {
    var i = new ContentNegotiation$Plugin$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, payload, $cont) {
      return i.invoke_63ydys_k$($this$intercept, payload, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function ContentNegotiation$Plugin$install$slambda_1($plugin, resultContinuation) {
    this.$plugin_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  ContentNegotiation$Plugin$install$slambda_1.prototype.invoke_sqq52a_k$ = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
    var tmp = this.create_u7w3m5_k$($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  ContentNegotiation$Plugin$install$slambda_1.prototype.invoke_f2mof9_k$ = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.invoke_sqq52a_k$(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  ContentNegotiation$Plugin$install$slambda_1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(8);
            this.info0__1 = this._name_for_destructuring_parameter_0__wldtmu_1.component1_7eebsc_k$();
            this.body1__1 = this._name_for_destructuring_parameter_0__wldtmu_1.component2_7eebsb_k$();
            var tmp_0 = this.body1__1;
            if (!isInterface(tmp_0, ByteReadChannel))
              return Unit_getInstance();
            if (this.info0__1.get_type_wovaf7_k$().equals(getKClass(ByteReadChannel)))
              return Unit_getInstance();
            var tmp_1 = this;
            var tmp0_elvis_lhs = contentType_0(this.$this$intercept_1.get_context_h02k06_k$().get_response_xlk07e_k$());
            var tmp_2;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_2 = tmp0_elvis_lhs;
            }

            tmp_1.contentType2__1 = tmp_2;
            this.registrations3__1 = this.$plugin_1.registrations_1;
            var tmp_3 = this;
            var tmp0_filterTo = ArrayList_init_$Create$();
            var tmp0_iterator = this.registrations3__1.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var element = tmp0_iterator.next_20eer_k$();
              if (element.contentTypeMatcher_1.contains_dqyzax_k$(this.contentType2__1)) {
                tmp0_filterTo.add_1j60pz_k$(element);
              }
            }

            var tmp1_takeIf = tmp0_filterTo;
            var tmp_4;
            if (!tmp1_takeIf.isEmpty_y1axqb_k$()) {
              tmp_4 = tmp1_takeIf;
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

            tmp_3.matchingRegistrations4__1 = tmp_5;
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.tmp0_iterator6__1 = this.matchingRegistrations4__1.iterator_jk1svi_k$();
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            if (!this.tmp0_iterator6__1.hasNext_bitz1p_k$()) {
              this.set_state_a96kl8_k$(5);
              continue $sm;
            }

            this.element7__1 = this.tmp0_iterator6__1.next_20eer_k$();
            this.set_state_a96kl8_k$(3);
            var tmp_6 = this.$this$intercept_1.get_context_h02k06_k$().get_request_jdwg4m_k$().get_headers_ef25jx_k$();
            suspendResult = this.element7__1.converter_1.deserialize_ozjkrz_k$(suitableCharset$default(tmp_6, null, 1, null), this.info0__1, this.body1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.result8__1 = suspendResult;
            if (!(this.result8__1 == null)) {
              this.tmp$ret$05__1 = this.result8__1;
              this.set_state_a96kl8_k$(6);
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

            break;
          case 4:
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 5:
            this.tmp$ret$05__1 = null;
            if (false) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(6);
            continue $sm;
          case 6:
            this.tmp2_elvis_lhs9__1 = this.tmp$ret$05__1;
            var tmp_7 = this;
            var tmp_8;
            if (this.tmp2_elvis_lhs9__1 == null) {
              return Unit_getInstance();
            } else {
              tmp_8 = this.tmp2_elvis_lhs9__1;
            }

            tmp_7.parsedBody10__1 = tmp_8;
            this.response11__1 = new HttpResponseContainer(this.info0__1, this.parsedBody10__1);
            this.set_state_a96kl8_k$(7);
            suspendResult = this.$this$intercept_1.proceedWith_slnzfn_k$(this.response11__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            ;
            return Unit_getInstance();
          case 8:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 8) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  ContentNegotiation$Plugin$install$slambda_1.prototype.create_u7w3m5_k$ = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new ContentNegotiation$Plugin$install$slambda_1(this.$plugin_1, completion);
    i.$this$intercept_1 = $this$intercept;
    i._name_for_destructuring_parameter_0__wldtmu_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  function ContentNegotiation$Plugin$install$slambda_2($plugin, resultContinuation) {
    var i = new ContentNegotiation$Plugin$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
      return i.invoke_sqq52a_k$($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Config() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.registrations_1 = tmp$ret$0;
  }
  Config.prototype.get_registrations_gt95m9_k$ = function () {
    return this.registrations_1;
  };
  Config.prototype.register_2n0nvi_k$ = function (contentType, converter, configuration) {
    var tmp0_subject = contentType;
    var matcher = tmp0_subject.equals(Application_getInstance().get_Json_wo4ci9_k$()) ? JsonContentTypeMatcher_getInstance() : defaultMatcher(this, contentType);
    this.register_kmmuju_k$(contentType, converter, matcher, configuration);
  };
  Config.prototype.register_kmmuju_k$ = function (contentTypeToSend, converter, contentTypeMatcher, configuration) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    configuration(converter);
    tmp$ret$0 = converter;
    var registration = new ConverterRegistration(tmp$ret$0, contentTypeToSend, contentTypeMatcher);
    this.registrations_1.add_1j60pz_k$(registration);
  };
  function Plugin() {
    Plugin_instance = this;
    this.key_1 = new AttributeKey('ContentNegotiation');
  }
  Plugin.prototype.get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  Plugin.prototype.prepare_5z2vxs_k$ = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    return new ContentNegotiation(config.registrations_1);
  };
  Plugin.prototype.prepare_aftpuj_k$ = function (block) {
    return this.prepare_5z2vxs_k$(block);
  };
  Plugin.prototype.install_zewz1j_k$ = function (plugin, scope) {
    var tmp = scope.get_requestPipeline_5d9z6w_k$();
    var tmp_0 = Phases_getInstance().get_Transform_byqycd_k$();
    tmp.intercept_hnj3e1_k$(tmp_0, ContentNegotiation$Plugin$install$slambda_0(plugin, null));
    var tmp_1 = scope.get_responsePipeline_xbi790_k$();
    var tmp_2 = Phases_getInstance_0().get_Transform_byqycd_k$();
    tmp_1.intercept_hnj3e1_k$(tmp_2, ContentNegotiation$Plugin$install$slambda_2(plugin, null));
  };
  Plugin.prototype.install_cj05u9_k$ = function (plugin, scope) {
    return this.install_zewz1j_k$(plugin instanceof ContentNegotiation ? plugin : THROW_CCE(), scope);
  };
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function ContentNegotiation(registrations) {
    Plugin_getInstance();
    this.registrations_1 = registrations;
  }
  ContentNegotiation.prototype.get_registrations_gt95m9_k$ = function () {
    return this.registrations_1;
  };
  function ContentConverterException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, ContentConverterException);
  }
  function JsonContentTypeMatcher() {
    JsonContentTypeMatcher_instance = this;
  }
  JsonContentTypeMatcher.prototype.contains_dqyzax_k$ = function (contentType) {
    if (contentType.match_7mk6xr_k$(Application_getInstance().get_Json_wo4ci9_k$())) {
      return true;
    }
    var value = contentType.withoutParameters_wrqe36_k$().toString();
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
      DefaultIgnoredTypes = mutableSetOf([getKClass(OutgoingContent), getKClass(ByteReadChannel), PrimitiveClasses_getInstance().get_byteArrayClass_57my8g_k$()]);
    }
  }
  //region block: post-declaration
  Config.prototype.register$default_99a134_k$ = register$default;
  Plugin.prototype.prepare$default_khluaj_k$ = prepare$default;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Plugin_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-content-negotiation-js-ir.js.map
