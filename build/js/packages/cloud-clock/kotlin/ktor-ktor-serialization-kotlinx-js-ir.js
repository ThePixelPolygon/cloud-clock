(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-serialization-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-serialization-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    if (typeof this['ktor-ktor-serialization-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-serialization-kotlinx-js-ir'. Its dependency 'ktor-ktor-serialization-js-ir' was not found. Please, check whether 'ktor-ktor-serialization-js-ir' is loaded prior to 'ktor-ktor-serialization-kotlinx-js-ir'.");
    }
    root['ktor-ktor-serialization-kotlinx-js-ir'] = factory(typeof this['ktor-ktor-serialization-kotlinx-js-ir'] === 'undefined' ? {} : this['ktor-ktor-serialization-kotlinx-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-serialization-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_serialization) {
  'use strict';
  //region block: imports
  var classMeta = kotlin_kotlin.$_$.y8;
  var setMetadataFor = kotlin_kotlin.$_$.ca;
  var CoroutineImpl = kotlin_kotlin.$_$.l8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.v7;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var Unit_getInstance = kotlin_kotlin.$_$.p4;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.wd;
  var toString = kotlin_kotlin.$_$.ga;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.i2;
  var THROW_CCE = kotlin_kotlin.$_$.ad;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var isInterface = kotlin_kotlin.$_$.q9;
  var ByteArrayContent_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.a;
  var BinaryFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var withCharsetIfNeeded = kotlin_io_ktor_ktor_http.$_$.j1;
  var TextContent_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.b;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getKClass = kotlin_kotlin.$_$.e;
  var Long = kotlin_kotlin.$_$.wc;
  var discard = kotlin_io_ktor_ktor_io.$_$.c1;
  var readBytes$default = kotlin_io_ktor_ktor_io.$_$.h;
  var readText$default = kotlin_io_ktor_ktor_io.$_$.i;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.d2;
  var ContentConverter = kotlin_io_ktor_ktor_serialization.$_$.d;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var Map = kotlin_kotlin.$_$.b5;
  var SetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var Set = kotlin_kotlin.$_$.h5;
  var firstOrNull = kotlin_kotlin.$_$.h6;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.d4;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var isArray = kotlin_kotlin.$_$.i9;
  var List = kotlin_kotlin.$_$.z4;
  var filterNotNull = kotlin_kotlin.$_$.f6;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.n5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.y;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.f1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var singleOrNull = kotlin_kotlin.$_$.f7;
  var Collection = kotlin_kotlin.$_$.r4;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SerializationParameters, 'SerializationParameters', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SerializationNegotiationParameters, 'SerializationNegotiationParameters', classMeta, SerializationParameters, undefined, undefined, undefined, []);
  setMetadataFor($serializeCOROUTINE$0, '$serializeCOROUTINE$0', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(KotlinxSerializationBase, 'KotlinxSerializationBase', classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(KotlinxSerializationConverter$serializationBase$1, undefined, classMeta, KotlinxSerializationBase, undefined, undefined, undefined, [1]);
  setMetadataFor($deserializeCOROUTINE$1, '$deserializeCOROUTINE$1', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(KotlinxSerializationConverter, 'KotlinxSerializationConverter', classMeta, undefined, [ContentConverter], undefined, undefined, [4, 3]);
  //endregion
  function SerializationNegotiationParameters(format, value, typeInfo, charset, contentType) {
    SerializationParameters.call(this, format, value, typeInfo, charset);
    this.format_2 = format;
    this.value_2 = value;
    this.typeInfo_2 = typeInfo;
    this.charset_2 = charset;
    this.contentType_1 = contentType;
  }
  SerializationNegotiationParameters.prototype.get_format_dfdtds_k$ = function () {
    return this.format_2;
  };
  SerializationNegotiationParameters.prototype.get_value_j01efc_k$ = function () {
    return this.value_2;
  };
  SerializationNegotiationParameters.prototype.get_typeInfo_s1bhe9_k$ = function () {
    return this.typeInfo_2;
  };
  SerializationNegotiationParameters.prototype.get_charset_dhkvhf_k$ = function () {
    return this.charset_2;
  };
  SerializationNegotiationParameters.prototype.get_contentType_7git4a_k$ = function () {
    return this.contentType_1;
  };
  function _get_format__qlarck($this) {
    return $this.format_1;
  }
  function $serializeCOROUTINE$0(_this__u8e3s4, parameters, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.parameters_1 = parameters;
  }
  $serializeCOROUTINE$0.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(5);
            this.set_exceptionState_s9sevl_k$(2);
            var tmp_0 = this;
            tmp_0.tmp0_let1__1 = serializerFromTypeInfo(this.parameters_1.get_typeInfo_s1bhe9_k$(), this._this__u8e3s4__1.format_1.get_serializersModule_piitvg_k$());
            this.parameters_1.serializer_1 = this.tmp0_let1__1;
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.serializeContent_bnmmb5_k$(this.parameters_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.TRY_RESULT0__1 = suspendResult;
            this.set_exceptionState_s9sevl_k$(5);
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(5);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof SerializationException) {
              this.cause2__1 = this.get_exception_x0n6w6_k$();
              var tmp_2 = this;
              tmp_2.TRY_RESULT0__1 = null;
              this.set_state_a96kl8_k$(3);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

            break;
          case 3:
            this.set_exceptionState_s9sevl_k$(5);
            this.result3__1 = this.TRY_RESULT0__1;
            if (!(this.result3__1 == null)) {
              return this.result3__1;
            }

            this.guessedSearchSerializer4__1 = guessSerializer(this.parameters_1.get_value_j01efc_k$(), this._this__u8e3s4__1.format_1.get_serializersModule_piitvg_k$());
            this.parameters_1.serializer_1 = this.guessedSearchSerializer4__1;
            this.set_state_a96kl8_k$(4);
            suspendResult = this._this__u8e3s4__1.serializeContent_bnmmb5_k$(this.parameters_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return suspendResult;
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  function KotlinxSerializationBase(format) {
    this.format_1 = format;
  }
  KotlinxSerializationBase.prototype.serialize_2zn9xm_k$ = function (parameters, $cont) {
    var tmp = new $serializeCOROUTINE$0(this, parameters, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function SerializationParameters(format, value, typeInfo, charset) {
    this.format_1 = format;
    this.value_1 = value;
    this.typeInfo_1 = typeInfo;
    this.charset_1 = charset;
  }
  SerializationParameters.prototype.get_format_dfdtds_k$ = function () {
    return this.format_1;
  };
  SerializationParameters.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  SerializationParameters.prototype.get_typeInfo_s1bhe9_k$ = function () {
    return this.typeInfo_1;
  };
  SerializationParameters.prototype.get_charset_dhkvhf_k$ = function () {
    return this.charset_1;
  };
  SerializationParameters.prototype.set_serializer_5ild1j_k$ = function (_set____db54di) {
    this.serializer_1 = _set____db54di;
  };
  SerializationParameters.prototype.get_serializer_u29zhh_k$ = function () {
    var tmp = this.serializer_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('serializer');
    }
  };
  function serialization(_this__u8e3s4, contentType, format) {
    var tmp = new KotlinxSerializationConverter(format);
    _this__u8e3s4.register$default_99a134_k$(contentType, tmp, null, 4, null);
  }
  function _get_format__qlarck_0($this) {
    return $this.format_1;
  }
  function _get_serializationBase__qzkads($this) {
    return $this.serializationBase_1;
  }
  function serializeContent($this, serializer, format, value, contentType, charset) {
    var tmp0_subject = format;
    var tmp;
    if (isInterface(tmp0_subject, StringFormat)) {
      var content = format.encodeToString_bhi5ce_k$(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
      var tmp_0 = withCharsetIfNeeded(contentType, charset);
      tmp = TextContent_init_$Create$(content, tmp_0, null, 4, null);
    } else {
      if (isInterface(tmp0_subject, BinaryFormat)) {
        var content_0 = format.encodeToByteArray_mm3ys_k$(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
        tmp = ByteArrayContent_init_$Create$(content_0, contentType, null, 4, null);
      } else {
        var tmp0_error = 'Unsupported format ' + format;
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
    }
    return tmp;
  }
  function KotlinxSerializationConverter$serializationBase$1(this$0) {
    this.this$0__1 = this$0;
    KotlinxSerializationBase.call(this, this$0.format_1);
  }
  KotlinxSerializationConverter$serializationBase$1.prototype.serializeContent_mlml8m_k$ = function (parameters, $cont) {
    if (!(parameters instanceof SerializationNegotiationParameters)) {
      // Inline function 'kotlin.error' call
      var tmp0_error = 'parameters type is ' + getKClassFromExpression(parameters).get_simpleName_r6f8py_k$() + ',' + (' but expected ' + getKClass(SerializationNegotiationParameters).get_simpleName_r6f8py_k$());
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
    return serializeContent(this.this$0__1, parameters.get_serializer_u29zhh_k$(), parameters.get_format_dfdtds_k$(), parameters.get_value_j01efc_k$(), parameters.get_contentType_7git4a_k$(), parameters.get_charset_dhkvhf_k$());
  };
  KotlinxSerializationConverter$serializationBase$1.prototype.serializeContent_bnmmb5_k$ = function (parameters, $cont) {
    return this.serializeContent_mlml8m_k$(parameters, $cont);
  };
  function $deserializeCOROUTINE$1(_this__u8e3s4, charset, typeInfo, content, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.charset_1 = charset;
    this.typeInfo_1 = typeInfo;
    this.content_1 = content;
  }
  $deserializeCOROUTINE$1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.serializer0__1 = serializerFromTypeInfo(this.typeInfo_1, this._this__u8e3s4__1.format_1.get_serializersModule_piitvg_k$());
            this.set_state_a96kl8_k$(1);
            suspendResult = this.content_1.readRemaining$default_u0hcq7_k$(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var contentPacket = suspendResult;
            var tmp0_subject = this._this__u8e3s4__1.format_1;
            var tmp_0;
            if (isInterface(tmp0_subject, StringFormat)) {
              tmp_0 = this._this__u8e3s4__1.format_1.decodeFromString_d9fce8_k$(this.serializer0__1, readText$default(contentPacket, this.charset_1, 0, 2, null));
            } else {
              if (isInterface(tmp0_subject, BinaryFormat)) {
                tmp_0 = this._this__u8e3s4__1.format_1.decodeFromByteArray_8gbsvm_k$(this.serializer0__1, readBytes$default(contentPacket, 0, 1, null));
              } else {
                discard(contentPacket);
                var tmp0_error = 'Unsupported format ' + this._this__u8e3s4__1.format_1;
                throw IllegalStateException_init_$Create$(toString(tmp0_error));
              }
            }

            return tmp_0;
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw $p;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$($p);
        }
      }
     while (true);
  };
  function KotlinxSerializationConverter(format) {
    this.format_1 = format;
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0 = this.format_1;
    if (isInterface(tmp_0, BinaryFormat)) {
      tmp = true;
    } else {
      var tmp_1 = this.format_1;
      tmp = isInterface(tmp_1, StringFormat);
    }
    var tmp0_require = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.serialization.kotlinx.KotlinxSerializationConverter.<anonymous>' call
      tmp$ret$0 = 'Only binary and string formats are supported, ' + ('' + this.format_1 + ' is not supported.');
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp_2 = this;
    tmp_2.serializationBase_1 = new KotlinxSerializationConverter$serializationBase$1(this);
  }
  KotlinxSerializationConverter.prototype.serialize_d52kvx_k$ = function (contentType, charset, typeInfo, value, $cont) {
    return this.serializationBase_1.serialize_2zn9xm_k$(new SerializationNegotiationParameters(this.format_1, value, typeInfo, charset, contentType), $cont);
  };
  KotlinxSerializationConverter.prototype.serialize_itgcao_k$ = function (contentType, charset, typeInfo, value, $cont) {
    return this.serialize_d52kvx_k$(contentType, charset, typeInfo, value, $cont);
  };
  KotlinxSerializationConverter.prototype.deserialize_ozjkrz_k$ = function (charset, typeInfo, content, $cont) {
    var tmp = new $deserializeCOROUTINE$1(this, charset, typeInfo, content, $cont);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function serializerFromTypeInfo(typeInfo, module_0) {
    var tmp0_safe_receiver = typeInfo.get_kotlinType_flgmsk_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'io.ktor.serialization.kotlinx.serializerFromTypeInfo.<anonymous>' call
      tmp$ret$0 = tmp0_safe_receiver.get_arguments_p5ddub_k$().isEmpty_y1axqb_k$() ? null : serializerOrNull(module_0, tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp_1 = typeInfo.get_type_wovaf7_k$();
      tmp_0 = module_0.getContextual$default_i0obdx_k$(tmp_1, null, 2, null);
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var tmp2_elvis_lhs = tmp_0;
    return tmp2_elvis_lhs == null ? serializer(typeInfo.get_type_wovaf7_k$()) : tmp2_elvis_lhs;
  }
  function guessSerializer(value, module_0) {
    var tmp0_subject = value;
    var tmp;
    if (isInterface(tmp0_subject, List)) {
      tmp = ListSerializer(elementSerializer(value, module_0));
    } else {
      if (isArray(tmp0_subject)) {
        var tmp1_safe_receiver = firstOrNull(value);
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          var tmp$ret$1;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$0;
          // Inline function 'io.ktor.serialization.kotlinx.guessSerializer.<anonymous>' call
          tmp$ret$0 = guessSerializer(tmp1_safe_receiver, module_0);
          tmp$ret$1 = tmp$ret$0;
          tmp_0 = tmp$ret$1;
        }
        var tmp2_elvis_lhs = tmp_0;
        tmp = tmp2_elvis_lhs == null ? ListSerializer(serializer_0(StringCompanionObject_getInstance())) : tmp2_elvis_lhs;
      } else {
        if (isInterface(tmp0_subject, Set)) {
          tmp = SetSerializer(elementSerializer(value, module_0));
        } else {
          if (isInterface(tmp0_subject, Map)) {
            var keySerializer = elementSerializer(value.get_keys_wop4xp_k$(), module_0);
            var valueSerializer = elementSerializer(value.get_values_ksazhn_k$(), module_0);
            tmp = MapSerializer(keySerializer, valueSerializer);
          } else {
            var tmp_1 = getKClassFromExpression(value);
            var tmp3_elvis_lhs = module_0.getContextual$default_i0obdx_k$(tmp_1, null, 2, null);
            tmp = tmp3_elvis_lhs == null ? serializer(getKClassFromExpression(value)) : tmp3_elvis_lhs;
          }
        }
      }
    }
    var tmp_2 = tmp;
    return isInterface(tmp_2, KSerializer) ? tmp_2 : THROW_CCE();
  }
  function elementSerializer(_this__u8e3s4, module_0) {
    var tmp$ret$4;
    // Inline function 'kotlin.collections.distinctBy' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = filterNotNull(_this__u8e3s4);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator = tmp1_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
      tmp$ret$0 = guessSerializer(item, module_0);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp2_distinctBy = tmp$ret$2;
    var set = HashSet_init_$Create$();
    var list = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = tmp2_distinctBy.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var e = tmp0_iterator_0.next_20eer_k$();
      var tmp$ret$3;
      // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
      tmp$ret$3 = e.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$();
      var key = tmp$ret$3;
      if (set.add_1j60pz_k$(key)) {
        list.add_1j60pz_k$(e);
      }
    }
    tmp$ret$4 = list;
    var serializers = tmp$ret$4;
    if (serializers.get_size_woubt6_k$() > 1) {
      // Inline function 'kotlin.error' call
      var tmp$ret$7;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$6;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp3_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(serializers, 10));
      var tmp0_iterator_1 = serializers.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var item_0 = tmp0_iterator_1.next_20eer_k$();
        var tmp$ret$5;
        // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
        tmp$ret$5 = item_0.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$();
        tmp3_mapTo.add_1j60pz_k$(tmp$ret$5);
      }
      tmp$ret$6 = tmp3_mapTo;
      tmp$ret$7 = tmp$ret$6;
      var tmp4_error = 'Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + tmp$ret$7);
      throw IllegalStateException_init_$Create$(toString(tmp4_error));
    }
    var tmp0_elvis_lhs = singleOrNull(serializers);
    var selected = tmp0_elvis_lhs == null ? serializer_0(StringCompanionObject_getInstance()) : tmp0_elvis_lhs;
    if (selected.get_descriptor_wjt6a0_k$().get_isNullable_67sy7o_k$()) {
      return selected;
    }
    if (isInterface(selected, KSerializer))
      selected;
    else
      THROW_CCE();
    var tmp$ret$8;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$8 = false;
        break $l$block_0;
      }
      var tmp0_iterator_2 = _this__u8e3s4.iterator_jk1svi_k$();
      while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator_2.next_20eer_k$();
        var tmp$ret$9;
        // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
        tmp$ret$9 = element == null;
        if (tmp$ret$9) {
          tmp$ret$8 = true;
          break $l$block_0;
        }
      }
      tmp$ret$8 = false;
    }
    if (tmp$ret$8) {
      return get_nullable(selected);
    }
    return selected;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = serialization;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-serialization-kotlinx-js-ir.js.map
