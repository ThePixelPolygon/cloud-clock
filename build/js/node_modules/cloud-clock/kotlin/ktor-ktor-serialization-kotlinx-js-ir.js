(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-io-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-io-js-ir.js'));
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
    root['ktor-ktor-serialization-kotlinx-js-ir'] = factory(typeof this['ktor-ktor-serialization-kotlinx-js-ir'] === 'undefined' ? {} : this['ktor-ktor-serialization-kotlinx-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-io-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_io) {
  'use strict';
  //region block: imports
  var classMeta = kotlin_kotlin.$_$.a8;
  var setMetadataFor = kotlin_kotlin.$_$.d9;
  var CoroutineImpl = kotlin_kotlin.$_$.o7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.a7;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var Unit_getInstance = kotlin_kotlin.$_$.b4;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.gc;
  var toString = kotlin_kotlin.$_$.h9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var THROW_CCE = kotlin_kotlin.$_$.kb;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var isInterface = kotlin_kotlin.$_$.s8;
  var ByteArrayContent_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.a;
  var BinaryFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var withCharsetIfNeeded = kotlin_io_ktor_ktor_http.$_$.g1;
  var TextContent_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.b;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getKClass = kotlin_kotlin.$_$.e;
  var Long = kotlin_kotlin.$_$.gb;
  var discard = kotlin_io_ktor_ktor_io.$_$.a1;
  var readBytes$default = kotlin_io_ktor_ktor_io.$_$.g;
  var readText$default = kotlin_io_ktor_ktor_io.$_$.h;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var Map = kotlin_kotlin.$_$.k4;
  var SetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var Set = kotlin_kotlin.$_$.p4;
  var firstOrNull = kotlin_kotlin.$_$.n5;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.s3;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var isArray = kotlin_kotlin.$_$.k8;
  var List = kotlin_kotlin.$_$.i4;
  var filterNotNull = kotlin_kotlin.$_$.l5;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.t4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.c1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var singleOrNull = kotlin_kotlin.$_$.l6;
  var Collection = kotlin_kotlin.$_$.d4;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SerializationParameters, 'SerializationParameters', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SerializationNegotiationParameters, 'SerializationNegotiationParameters', classMeta, SerializationParameters, undefined, undefined, undefined, []);
  setMetadataFor($serializeCOROUTINE$0, '$serializeCOROUTINE$0', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(KotlinxSerializationBase, 'KotlinxSerializationBase', classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(KotlinxSerializationConverter$serializationBase$1, undefined, classMeta, KotlinxSerializationBase, undefined, undefined, undefined, [1]);
  setMetadataFor($deserializeCOROUTINE$1, '$deserializeCOROUTINE$1', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(KotlinxSerializationConverter, 'KotlinxSerializationConverter', classMeta, undefined, undefined, undefined, undefined, [4, 3]);
  //endregion
  function SerializationNegotiationParameters(format, value, typeInfo, charset, contentType) {
    SerializationParameters.call(this, format, value, typeInfo, charset);
    this.z29_1 = format;
    this.a2a_1 = value;
    this.b2a_1 = typeInfo;
    this.c2a_1 = charset;
    this.d2a_1 = contentType;
  }
  SerializationNegotiationParameters.prototype.e2a = function () {
    return this.z29_1;
  };
  SerializationNegotiationParameters.prototype.o = function () {
    return this.a2a_1;
  };
  SerializationNegotiationParameters.prototype.f2a = function () {
    return this.b2a_1;
  };
  SerializationNegotiationParameters.prototype.g2a = function () {
    return this.c2a_1;
  };
  function $serializeCOROUTINE$0(_this__u8e3s4, parameters, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v2a_1 = _this__u8e3s4;
    this.w2a_1 = parameters;
  }
  $serializeCOROUTINE$0.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 5;
            this.pe_1 = 2;
            var tmp_0 = this;
            tmp_0.y2a_1 = serializerFromTypeInfo(this.w2a_1.f2a(), this.v2a_1.c2b_1.w1w());
            this.w2a_1.l2a_1 = this.y2a_1;
            this.oe_1 = 1;
            suspendResult = this.v2a_1.d2b(this.w2a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.x2a_1 = suspendResult;
            this.pe_1 = 5;
            this.oe_1 = 3;
            continue $sm;
          case 2:
            this.pe_1 = 5;
            var tmp_1 = this.re_1;
            if (tmp_1 instanceof SerializationException) {
              this.z2a_1 = this.re_1;
              var tmp_2 = this;
              tmp_2.x2a_1 = null;
              this.oe_1 = 3;
              continue $sm;
            } else {
              throw this.re_1;
            }

            break;
          case 3:
            this.pe_1 = 5;
            this.a2b_1 = this.x2a_1;
            if (!(this.a2b_1 == null)) {
              return this.a2b_1;
            }

            this.b2b_1 = guessSerializer(this.w2a_1.o(), this.v2a_1.c2b_1.w1w());
            this.w2a_1.l2a_1 = this.b2b_1;
            this.oe_1 = 4;
            suspendResult = this.v2a_1.d2b(this.w2a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return suspendResult;
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
  function KotlinxSerializationBase(format) {
    this.c2b_1 = format;
  }
  KotlinxSerializationBase.prototype.e2b = function (parameters, $cont) {
    var tmp = new $serializeCOROUTINE$0(this, parameters, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  function SerializationParameters(format, value, typeInfo, charset) {
    this.h2a_1 = format;
    this.i2a_1 = value;
    this.j2a_1 = typeInfo;
    this.k2a_1 = charset;
  }
  SerializationParameters.prototype.e2a = function () {
    return this.h2a_1;
  };
  SerializationParameters.prototype.o = function () {
    return this.i2a_1;
  };
  SerializationParameters.prototype.f2a = function () {
    return this.j2a_1;
  };
  SerializationParameters.prototype.g2a = function () {
    return this.k2a_1;
  };
  SerializationParameters.prototype.m2a = function () {
    var tmp = this.l2a_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('serializer');
    }
  };
  function serialization(_this__u8e3s4, contentType, format) {
    var tmp = new KotlinxSerializationConverter(format);
    _this__u8e3s4.n1t(contentType, tmp, null, 4, null);
  }
  function serializeContent($this, serializer, format, value, contentType, charset) {
    var tmp0_subject = format;
    var tmp;
    if (isInterface(tmp0_subject, StringFormat)) {
      var content = format.g1u(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
      var tmp_0 = withCharsetIfNeeded(contentType, charset);
      tmp = TextContent_init_$Create$(content, tmp_0, null, 4, null);
    } else {
      if (isInterface(tmp0_subject, BinaryFormat)) {
        var content_0 = format.i1u(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
        tmp = ByteArrayContent_init_$Create$(content_0, contentType, null, 4, null);
      } else {
        var tmp0_error = 'Unsupported format ' + format;
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      }
    }
    return tmp;
  }
  function KotlinxSerializationConverter$serializationBase$1(this$0) {
    this.g2b_1 = this$0;
    KotlinxSerializationBase.call(this, this$0.h2b_1);
  }
  KotlinxSerializationConverter$serializationBase$1.prototype.j2b = function (parameters, $cont) {
    if (!(parameters instanceof SerializationNegotiationParameters)) {
      // Inline function 'kotlin.error' call
      var tmp0_error = 'parameters type is ' + getKClassFromExpression(parameters).jb() + ',' + (' but expected ' + getKClass(SerializationNegotiationParameters).jb());
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
    return serializeContent(this.g2b_1, parameters.m2a(), parameters.e2a(), parameters.o(), parameters.d2a_1, parameters.g2a());
  };
  KotlinxSerializationConverter$serializationBase$1.prototype.d2b = function (parameters, $cont) {
    return this.j2b(parameters, $cont);
  };
  function $deserializeCOROUTINE$1(_this__u8e3s4, charset, typeInfo, content, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s2b_1 = _this__u8e3s4;
    this.t2b_1 = charset;
    this.u2b_1 = typeInfo;
    this.v2b_1 = content;
  }
  $deserializeCOROUTINE$1.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 2;
            this.w2b_1 = serializerFromTypeInfo(this.u2b_1, this.s2b_1.h2b_1.w1w());
            this.oe_1 = 1;
            suspendResult = this.v2b_1.j13(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var contentPacket = suspendResult;
            var tmp0_subject = this.s2b_1.h2b_1;
            var tmp_0;
            if (isInterface(tmp0_subject, StringFormat)) {
              tmp_0 = this.s2b_1.h2b_1.h1u(this.w2b_1, readText$default(contentPacket, this.t2b_1, 0, 2, null));
            } else {
              if (isInterface(tmp0_subject, BinaryFormat)) {
                tmp_0 = this.s2b_1.h2b_1.j1u(this.w2b_1, readBytes$default(contentPacket, 0, 1, null));
              } else {
                discard(contentPacket);
                var tmp0_error = 'Unsupported format ' + this.s2b_1.h2b_1;
                throw IllegalStateException_init_$Create$(toString(tmp0_error));
              }
            }

            return tmp_0;
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
  function KotlinxSerializationConverter(format) {
    this.h2b_1 = format;
    // Inline function 'kotlin.require' call
    var tmp;
    var tmp_0 = this.h2b_1;
    if (isInterface(tmp_0, BinaryFormat)) {
      tmp = true;
    } else {
      var tmp_1 = this.h2b_1;
      tmp = isInterface(tmp_1, StringFormat);
    }
    var tmp0_require = tmp;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.serialization.kotlinx.KotlinxSerializationConverter.<anonymous>' call
      tmp$ret$0 = 'Only binary and string formats are supported, ' + ('' + this.h2b_1 + ' is not supported.');
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp_2 = this;
    tmp_2.i2b_1 = new KotlinxSerializationConverter$serializationBase$1(this);
  }
  KotlinxSerializationConverter.prototype.x2b = function (contentType, charset, typeInfo, value, $cont) {
    return this.i2b_1.e2b(new SerializationNegotiationParameters(this.h2b_1, value, typeInfo, charset, contentType), $cont);
  };
  KotlinxSerializationConverter.prototype.y2b = function (contentType, charset, typeInfo, value, $cont) {
    return this.x2b(contentType, charset, typeInfo, value, $cont);
  };
  KotlinxSerializationConverter.prototype.z2b = function (charset, typeInfo, content, $cont) {
    var tmp = new $deserializeCOROUTINE$1(this, charset, typeInfo, content, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  function serializerFromTypeInfo(typeInfo, module_0) {
    var tmp0_safe_receiver = typeInfo.s1g_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'io.ktor.serialization.kotlinx.serializerFromTypeInfo.<anonymous>' call
      tmp$ret$0 = tmp0_safe_receiver.wb().i() ? null : serializerOrNull(module_0, tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      tmp_0 = module_0.k1u(typeInfo.q1g_1, null, 2, null);
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var tmp2_elvis_lhs = tmp_0;
    return tmp2_elvis_lhs == null ? serializer(typeInfo.q1g_1) : tmp2_elvis_lhs;
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
            var keySerializer = elementSerializer(value.w1(), module_0);
            var valueSerializer = elementSerializer(value.x1(), module_0);
            tmp = MapSerializer(keySerializer, valueSerializer);
          } else {
            var tmp_1 = getKClassFromExpression(value);
            var tmp3_elvis_lhs = module_0.k1u(tmp_1, null, 2, null);
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
    var tmp0_map = filterNotNull(_this__u8e3s4);
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.j();
    while (tmp0_iterator.k()) {
      var item = tmp0_iterator.l();
      var tmp$ret$0;
      // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
      tmp$ret$0 = guessSerializer(item, module_0);
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_distinctBy = tmp$ret$2;
    var set = HashSet_init_$Create$();
    var list = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = tmp1_distinctBy.j();
    while (tmp0_iterator_0.k()) {
      var e = tmp0_iterator_0.l();
      var tmp$ret$3;
      // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
      tmp$ret$3 = e.o1t().t1u();
      var key = tmp$ret$3;
      if (set.a(key)) {
        list.a(e);
      }
    }
    tmp$ret$4 = list;
    var serializers = tmp$ret$4;
    if (serializers.c() > 1) {
      // Inline function 'kotlin.error' call
      var tmp$ret$7;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$6;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(serializers, 10));
      var tmp0_iterator_1 = serializers.j();
      while (tmp0_iterator_1.k()) {
        var item_0 = tmp0_iterator_1.l();
        var tmp$ret$5;
        // Inline function 'io.ktor.serialization.kotlinx.elementSerializer.<anonymous>' call
        tmp$ret$5 = item_0.o1t().t1u();
        tmp0_mapTo_0.a(tmp$ret$5);
      }
      tmp$ret$6 = tmp0_mapTo_0;
      tmp$ret$7 = tmp$ret$6;
      var tmp2_error = 'Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + tmp$ret$7);
      throw IllegalStateException_init_$Create$(toString(tmp2_error));
    }
    var tmp0_elvis_lhs = singleOrNull(serializers);
    var selected = tmp0_elvis_lhs == null ? serializer_0(StringCompanionObject_getInstance()) : tmp0_elvis_lhs;
    if (selected.o1t().m1u()) {
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
        tmp = _this__u8e3s4.i();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$8 = false;
        break $l$block_0;
      }
      var tmp0_iterator_2 = _this__u8e3s4.j();
      while (tmp0_iterator_2.k()) {
        var element = tmp0_iterator_2.l();
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
