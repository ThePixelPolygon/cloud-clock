(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json-js-ir'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-json-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-json-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var get_EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var objectMeta = kotlin_kotlin.$_$.c9;
  var setMetadataFor = kotlin_kotlin.$_$.d9;
  var fillArrayVal = kotlin_kotlin.$_$.e8;
  var Unit_getInstance = kotlin_kotlin.$_$.b4;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var classMeta = kotlin_kotlin.$_$.a8;
  var toString = kotlin_kotlin.$_$.h9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var charSequenceGet = kotlin_kotlin.$_$.x7;
  var Char = kotlin_kotlin.$_$.xa;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var equals = kotlin_kotlin.$_$.c8;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var interfaceMeta = kotlin_kotlin.$_$.j8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.o1;
  var THROW_CCE = kotlin_kotlin.$_$.kb;
  var hashCode = kotlin_kotlin.$_$.i8;
  var joinToString$default = kotlin_kotlin.$_$.i;
  var Map = kotlin_kotlin.$_$.k4;
  var List = kotlin_kotlin.$_$.i4;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var getStringHashCode = kotlin_kotlin.$_$.h8;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.cc;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var toInt = kotlin_kotlin.$_$.na;
  var toLong = kotlin_kotlin.$_$.pa;
  var toDouble = kotlin_kotlin.$_$.la;
  var toLongOrNull = kotlin_kotlin.$_$.oa;
  var toDoubleOrNull = kotlin_kotlin.$_$.ka;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var buildSerialDescriptor$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.s3;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var toULongOrNull = kotlin_kotlin.$_$.sa;
  var Companion_getInstance = kotlin_kotlin.$_$.z3;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.f3;
  var ULong = kotlin_kotlin.$_$.pb;
  var isInterface = kotlin_kotlin.$_$.s8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var lazy_0 = kotlin_kotlin.$_$.dc;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var KProperty1 = kotlin_kotlin.$_$.t9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.g8;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var toLong_0 = kotlin_kotlin.$_$.f9;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.b3;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.d3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.e3;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.g3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.y2;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.a3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.h3;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.j3;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var captureStack = kotlin_kotlin.$_$.u7;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var charSequenceLength = kotlin_kotlin.$_$.y7;
  var charSequenceSubSequence = kotlin_kotlin.$_$.z7;
  var coerceAtLeast = kotlin_kotlin.$_$.j9;
  var coerceAtMost = kotlin_kotlin.$_$.l9;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var singleOrNull = kotlin_kotlin.$_$.l6;
  var arrayIterator = kotlin_kotlin.$_$.s7;
  var ensureNotNull = kotlin_kotlin.$_$.xb;
  var emptyMap = kotlin_kotlin.$_$.i5;
  var getValue = kotlin_kotlin.$_$.p5;
  var copyOf = kotlin_kotlin.$_$.d5;
  var copyOf_0 = kotlin_kotlin.$_$.e5;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.za;
  var invoke = kotlin_kotlin.$_$.yb;
  var CoroutineImpl = kotlin_kotlin.$_$.o7;
  var DeepRecursiveScope = kotlin_kotlin.$_$.ab;
  var Unit = kotlin_kotlin.$_$.rb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.a7;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var getKClass = kotlin_kotlin.$_$.e;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var isObject = kotlin_kotlin.$_$.u8;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var plus = kotlin_kotlin.$_$.fc;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var decodeSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var IllegalArgumentException = kotlin_kotlin.$_$.eb;
  var isFinite = kotlin_kotlin.$_$.ac;
  var isFinite_0 = kotlin_kotlin.$_$.zb;
  var decodeSequentially = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var decodeCollectionSize = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var toUInt = kotlin_kotlin.$_$.ra;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.c3;
  var toULong = kotlin_kotlin.$_$.ta;
  var toUByte = kotlin_kotlin.$_$.qa;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.z2;
  var toUShort = kotlin_kotlin.$_$.ua;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.i3;
  var decodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var toString_0 = kotlin_kotlin.$_$.t2;
  var encodeNotNullMark = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var beginCollection = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.y3;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.x3;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.a4;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var setOf = kotlin_kotlin.$_$.k6;
  var numberToChar = kotlin_kotlin.$_$.z8;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.s2;
  var equals_0 = kotlin_kotlin.$_$.x9;
  var toByte = kotlin_kotlin.$_$.e9;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.v1;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.n3;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.r3;
  var toShort = kotlin_kotlin.$_$.g9;
  var single = kotlin_kotlin.$_$.ha;
  var emptySet = kotlin_kotlin.$_$.j5;
  var plus_0 = kotlin_kotlin.$_$.d6;
  var toList = kotlin_kotlin.$_$.r6;
  var Enum = kotlin_kotlin.$_$.bb;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var last = kotlin_kotlin.$_$.w5;
  var removeLast = kotlin_kotlin.$_$.h6;
  var lastIndexOf$default = kotlin_kotlin.$_$.p;
  var Long = kotlin_kotlin.$_$.gb;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.o2;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.v3;
  var charArray = kotlin_kotlin.$_$.w7;
  var indexOf$default = kotlin_kotlin.$_$.o;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.n1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.y;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Json, 'Json', classMeta, undefined, [StringFormat], undefined, undefined, []);
  setMetadataFor(Default, 'Default', objectMeta, Json, undefined, undefined, undefined, []);
  setMetadataFor(JsonBuilder, 'JsonBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsonImpl, 'JsonImpl', classMeta, Json, undefined, undefined, undefined, []);
  setMetadataFor(JsonClassDiscriminator, 'JsonClassDiscriminator', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsonNames, 'JsonNames', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsonConfiguration, 'JsonConfiguration', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsonDecoder, 'JsonDecoder', interfaceMeta, undefined, [Decoder, CompositeDecoder], undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsonElement, 'JsonElement', classMeta, undefined, undefined, undefined, {0: JsonElementSerializer_getInstance}, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsonPrimitive, 'JsonPrimitive', classMeta, JsonElement, undefined, undefined, {0: JsonPrimitiveSerializer_getInstance}, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsonObject, 'JsonObject', classMeta, JsonElement, [JsonElement, Map], undefined, {0: JsonObjectSerializer_getInstance}, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsonArray, 'JsonArray', classMeta, JsonElement, [JsonElement, List], undefined, {0: JsonArraySerializer_getInstance}, []);
  setMetadataFor(JsonLiteral, 'JsonLiteral', classMeta, JsonPrimitive, undefined, undefined, undefined, []);
  setMetadataFor(JsonNull, 'JsonNull', objectMeta, JsonPrimitive, [JsonPrimitive, SerializerFactory], undefined, {0: JsonNullSerializer_getInstance}, []);
  setMetadataFor(JsonElementSerializer, 'JsonElementSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(JsonObjectDescriptor, 'JsonObjectDescriptor', objectMeta, undefined, [SerialDescriptor], undefined, undefined, []);
  setMetadataFor(JsonObjectSerializer, 'JsonObjectSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(JsonArrayDescriptor, 'JsonArrayDescriptor', objectMeta, undefined, [SerialDescriptor], undefined, undefined, []);
  setMetadataFor(JsonArraySerializer, 'JsonArraySerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(JsonNullSerializer, 'JsonNullSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(JsonLiteralSerializer, 'JsonLiteralSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(defer$1, undefined, classMeta, undefined, [SerialDescriptor], undefined, undefined, []);
  setMetadataFor(JsonEncoder, 'JsonEncoder', interfaceMeta, undefined, [Encoder], undefined, undefined, []);
  setMetadataFor(Composer, 'Composer', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers', classMeta, Composer, undefined, undefined, undefined, []);
  setMetadataFor(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', classMeta, Composer, undefined, undefined, undefined, []);
  setMetadataFor(JsonElementMarker, 'JsonElementMarker', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsonException, 'JsonException', classMeta, SerializationException, undefined, undefined, undefined, []);
  setMetadataFor(JsonEncodingException, 'JsonEncodingException', classMeta, JsonException, undefined, undefined, undefined, []);
  setMetadataFor(JsonDecodingException, 'JsonDecodingException', classMeta, JsonException, undefined, undefined, undefined, []);
  setMetadataFor(Tombstone, 'Tombstone', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsonPath, 'JsonPath', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsonTreeReader$readDeepRecursive$slambda, 'JsonTreeReader$readDeepRecursive$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [2]);
  setMetadataFor($readObjectCOROUTINE$0, '$readObjectCOROUTINE$0', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(JsonTreeReader, 'JsonTreeReader', classMeta, undefined, undefined, undefined, undefined, [0]);
  setMetadataFor(PolymorphismValidator, 'PolymorphismValidator', classMeta, undefined, [SerializersModuleCollector], undefined, undefined, []);
  setMetadataFor(Key, 'Key', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DescriptorSchemaCache, 'DescriptorSchemaCache', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(StreamingJsonDecoder, 'StreamingJsonDecoder', classMeta, AbstractDecoder, [JsonDecoder, AbstractDecoder], undefined, undefined, []);
  setMetadataFor(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', classMeta, AbstractDecoder, undefined, undefined, undefined, []);
  setMetadataFor(StreamingJsonEncoder, 'StreamingJsonEncoder', classMeta, AbstractEncoder, [JsonEncoder, AbstractEncoder], undefined, undefined, []);
  setMetadataFor(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', classMeta, NamedValueDecoder, [NamedValueDecoder, JsonDecoder], undefined, undefined, []);
  setMetadataFor(JsonTreeDecoder, 'JsonTreeDecoder', classMeta, AbstractJsonTreeDecoder, undefined, undefined, undefined, []);
  setMetadataFor(JsonTreeListDecoder, 'JsonTreeListDecoder', classMeta, AbstractJsonTreeDecoder, undefined, undefined, undefined, []);
  setMetadataFor(JsonTreeMapDecoder, 'JsonTreeMapDecoder', classMeta, JsonTreeDecoder, undefined, undefined, undefined, []);
  setMetadataFor(WriteMode, 'WriteMode', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(AbstractJsonLexer, 'AbstractJsonLexer', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CharMappings, 'CharMappings', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(StringJsonLexer, 'StringJsonLexer', classMeta, AbstractJsonLexer, undefined, undefined, undefined, []);
  setMetadataFor(JsonStringBuilder, 'JsonStringBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, JsonConfiguration_init_$Create$(false, false, false, false, false, false, null, false, false, null, false, false, 4095, null), get_EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.a2c_1 = configuration;
    this.b2c_1 = serializersModule;
    this.c2c_1 = new DescriptorSchemaCache();
  }
  Json.prototype.w1w = function () {
    return this.b2c_1;
  };
  Json.prototype.g1u = function (serializer, value) {
    var result = new JsonStringBuilder();
    try {
      var tmp = WriteMode_OBJ_getInstance();
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = values().length;
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      var encoder = StreamingJsonEncoder_init_$Create$(result, this, tmp, tmp$ret$0);
      encoder.x1x(serializer, value);
      return result.toString();
    }finally {
      result.rl();
    }
  };
  Json.prototype.h1u = function (deserializer, string) {
    var lexer = new StringJsonLexer(string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.o1t());
    var result = input.i1w(deserializer);
    lexer.x2c();
    return result;
  };
  function Json_0(from, builderAction) {
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.i11();
    return new JsonImpl(conf, builder.k2d_1);
  }
  function Json$default(from, builderAction, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      from = Default_getInstance();
    return Json_0(from, builderAction);
  }
  function JsonBuilder(json) {
    this.y2c_1 = json.a2c_1.l2d_1;
    this.z2c_1 = json.a2c_1.q2d_1;
    this.a2d_1 = json.a2c_1.m2d_1;
    this.b2d_1 = json.a2c_1.n2d_1;
    this.c2d_1 = json.a2c_1.o2d_1;
    this.d2d_1 = json.a2c_1.p2d_1;
    this.e2d_1 = json.a2c_1.r2d_1;
    this.f2d_1 = json.a2c_1.s2d_1;
    this.g2d_1 = json.a2c_1.t2d_1;
    this.h2d_1 = json.a2c_1.u2d_1;
    this.i2d_1 = json.a2c_1.v2d_1;
    this.j2d_1 = json.a2c_1.w2d_1;
    this.k2d_1 = json.w1w();
  }
  JsonBuilder.prototype.i11 = function () {
    if (this.g2d_1) {
      // Inline function 'kotlin.require' call
      var tmp0_require = this.h2d_1 === 'type';
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$0 = 'Class discriminator should not be specified when array polymorphism is specified';
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    if (!this.d2d_1) {
      // Inline function 'kotlin.require' call
      var tmp1_require = this.e2d_1 === '    ';
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp1_require) {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$1 = 'Indent should not be specified when default printing mode is used';
        var message_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    } else if (!(this.e2d_1 === '    ')) {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var tmp2_all = this.e2d_1;
        var indexedObject = tmp2_all;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var element = charSequenceGet(indexedObject, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
          tmp$ret$2 = ((equals(new Char(element), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(element), new Char(_Char___init__impl__6a9atx(9)))) ? true : equals(new Char(element), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(element), new Char(_Char___init__impl__6a9atx(10)));
          if (!tmp$ret$2) {
            tmp$ret$3 = false;
            break $l$block;
          }
        }
        tmp$ret$3 = true;
      }
      var allWhitespaces = tmp$ret$3;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!allWhitespaces) {
        var tmp$ret$4;
        // Inline function 'kotlinx.serialization.json.JsonBuilder.build.<anonymous>' call
        tmp$ret$4 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.e2d_1;
        var message_1 = tmp$ret$4;
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    }
    return new JsonConfiguration(this.y2c_1, this.a2d_1, this.b2d_1, this.c2d_1, this.d2d_1, this.z2c_1, this.e2d_1, this.f2d_1, this.g2d_1, this.h2d_1, this.i2d_1, this.j2d_1);
  };
  function validateConfiguration($this) {
    if (equals($this.w1w(), get_EmptySerializersModule()))
      return Unit_getInstance();
    var collector = new PolymorphismValidator($this.a2c_1.t2d_1, $this.a2c_1.u2d_1);
    $this.w1w().f29(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator() {
  }
  function JsonNames() {
  }
  function JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      encodeDefaults = false;
    if (!(($mask0 & 2) === 0))
      ignoreUnknownKeys = false;
    if (!(($mask0 & 4) === 0))
      isLenient = false;
    if (!(($mask0 & 8) === 0))
      allowStructuredMapKeys = false;
    if (!(($mask0 & 16) === 0))
      prettyPrint = false;
    if (!(($mask0 & 32) === 0))
      explicitNulls = true;
    if (!(($mask0 & 64) === 0))
      prettyPrintIndent = '    ';
    if (!(($mask0 & 128) === 0))
      coerceInputValues = false;
    if (!(($mask0 & 256) === 0))
      useArrayPolymorphism = false;
    if (!(($mask0 & 512) === 0))
      classDiscriminator = 'type';
    if (!(($mask0 & 1024) === 0))
      allowSpecialFloatingPointValues = false;
    if (!(($mask0 & 2048) === 0))
      useAlternativeNames = true;
    JsonConfiguration.call($this, encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames);
    return $this;
  }
  function JsonConfiguration_init_$Create$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker) {
    return JsonConfiguration_init_$Init$(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, $mask0, $marker, Object.create(JsonConfiguration.prototype));
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames) {
    this.l2d_1 = encodeDefaults;
    this.m2d_1 = ignoreUnknownKeys;
    this.n2d_1 = isLenient;
    this.o2d_1 = allowStructuredMapKeys;
    this.p2d_1 = prettyPrint;
    this.q2d_1 = explicitNulls;
    this.r2d_1 = prettyPrintIndent;
    this.s2d_1 = coerceInputValues;
    this.t2d_1 = useArrayPolymorphism;
    this.u2d_1 = classDiscriminator;
    this.v2d_1 = allowSpecialFloatingPointValues;
    this.w2d_1 = useAlternativeNames;
  }
  JsonConfiguration.prototype.toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.l2d_1 + ', ignoreUnknownKeys=' + this.m2d_1 + ', isLenient=' + this.n2d_1 + ', ' + ('allowStructuredMapKeys=' + this.o2d_1 + ', prettyPrint=' + this.p2d_1 + ', explicitNulls=' + this.q2d_1 + ', ') + ("prettyPrintIndent='" + this.r2d_1 + "', coerceInputValues=" + this.s2d_1 + ', useArrayPolymorphism=' + this.t2d_1 + ', ') + ("classDiscriminator='" + this.u2d_1 + "', allowSpecialFloatingPointValues=" + this.v2d_1 + ')');
  };
  function JsonDecoder() {
  }
  function Companion() {
    Companion_instance = this;
  }
  var Companion_instance;
  function Companion_getInstance_5() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function JsonElement() {
    Companion_getInstance_5();
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  var Companion_instance_0;
  function Companion_getInstance_6() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function JsonPrimitive() {
    Companion_getInstance_6();
    JsonElement.call(this);
  }
  JsonPrimitive.prototype.toString = function () {
    return this.z2d();
  };
  function Companion_1() {
    Companion_instance_1 = this;
  }
  var Companion_instance_1;
  function Companion_getInstance_7() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function JsonObject$toString$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.n();
    var k = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.o();
    var v = tmp$ret$1;
    var tmp$ret$3;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.JsonObject.toString.<anonymous>.<anonymous>' call
    printQuoted(tmp0_apply, k);
    tmp0_apply.b5(_Char___init__impl__6a9atx(58));
    tmp0_apply.vc(v);
    tmp$ret$2 = tmp0_apply;
    tmp$ret$3 = tmp$ret$2.toString();
    return tmp$ret$3;
  }
  function JsonObject(content) {
    Companion_getInstance_7();
    JsonElement.call(this);
    this.a2e_1 = content;
  }
  JsonObject.prototype.m = function () {
    return this.a2e_1.m();
  };
  JsonObject.prototype.w1 = function () {
    return this.a2e_1.w1();
  };
  JsonObject.prototype.c = function () {
    return this.a2e_1.c();
  };
  JsonObject.prototype.x1 = function () {
    return this.a2e_1.x1();
  };
  JsonObject.prototype.g1c = function (key) {
    return this.a2e_1.p1(key);
  };
  JsonObject.prototype.p1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.g1c((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.h1c = function (key) {
    return this.a2e_1.v1(key);
  };
  JsonObject.prototype.v1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.h1c((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  JsonObject.prototype.i = function () {
    return this.a2e_1.i();
  };
  JsonObject.prototype.equals = function (other) {
    return equals(this.a2e_1, other);
  };
  JsonObject.prototype.hashCode = function () {
    return hashCode(this.a2e_1);
  };
  JsonObject.prototype.toString = function () {
    var tmp = this.a2e_1.m();
    return joinToString$default(tmp, ',', '{', '}', 0, null, JsonObject$toString$lambda, 24, null);
  };
  function Companion_2() {
    Companion_instance_2 = this;
  }
  var Companion_instance_2;
  function Companion_getInstance_8() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function JsonArray(content) {
    Companion_getInstance_8();
    JsonElement.call(this);
    this.b2e_1 = content;
  }
  JsonArray.prototype.c = function () {
    return this.b2e_1.c();
  };
  JsonArray.prototype.c2e = function (element) {
    return this.b2e_1.y(element);
  };
  JsonArray.prototype.y = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.c2e(element instanceof JsonElement ? element : THROW_CCE());
  };
  JsonArray.prototype.d2e = function (elements) {
    return this.b2e_1.z(elements);
  };
  JsonArray.prototype.z = function (elements) {
    return this.d2e(elements);
  };
  JsonArray.prototype.h = function (index) {
    return this.b2e_1.h(index);
  };
  JsonArray.prototype.i = function () {
    return this.b2e_1.i();
  };
  JsonArray.prototype.j = function () {
    return this.b2e_1.j();
  };
  JsonArray.prototype.equals = function (other) {
    return equals(this.b2e_1, other);
  };
  JsonArray.prototype.hashCode = function () {
    return hashCode(this.b2e_1);
  };
  JsonArray.prototype.toString = function () {
    return joinToString$default(this.b2e_1, ',', '[', ']', 0, null, null, 56, null);
  };
  function JsonLiteral(body, isString) {
    JsonPrimitive.call(this);
    this.e2e_1 = isString;
    this.f2e_1 = toString(body);
  }
  JsonLiteral.prototype.z2d = function () {
    return this.f2e_1;
  };
  JsonLiteral.prototype.toString = function () {
    var tmp;
    if (this.e2e_1) {
      var tmp$ret$1;
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      var tmp0_apply = StringBuilder_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.JsonLiteral.toString.<anonymous>' call
      printQuoted(tmp0_apply, this.f2e_1);
      tmp$ret$0 = tmp0_apply;
      tmp$ret$1 = tmp$ret$0.toString();
      tmp = tmp$ret$1;
    } else {
      tmp = this.f2e_1;
    }
    return tmp;
  };
  JsonLiteral.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof JsonLiteral)
      other;
    else
      THROW_CCE();
    if (!(this.e2e_1 === other.e2e_1))
      return false;
    if (!(this.f2e_1 === other.f2e_1))
      return false;
    return true;
  };
  JsonLiteral.prototype.hashCode = function () {
    var result = this.e2e_1 | 0;
    result = imul(31, result) + getStringHashCode(this.f2e_1) | 0;
    return result;
  };
  function JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1() {
    return JsonNullSerializer_getInstance();
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.g2e_1 = 'null';
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.h2e_1 = lazy(tmp_0, JsonNull$$cachedSerializer$delegate$_anonymous__7w2ks1);
  }
  JsonNull.prototype.z2d = function () {
    return this.g2e_1;
  };
  JsonNull.prototype.i2e = function () {
    return this.h2e_1.o();
  };
  JsonNull.prototype.s23 = function (typeParamsSerializers) {
    return this.i2e();
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function JsonPrimitive_0(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function get_booleanOrNull(_this__u8e3s4) {
    return toBooleanStrictOrNull(_this__u8e3s4.z2d());
  }
  function get_int(_this__u8e3s4) {
    return toInt(_this__u8e3s4.z2d());
  }
  function get_long(_this__u8e3s4) {
    return toLong(_this__u8e3s4.z2d());
  }
  function get_float(_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.text.toFloat' call
    var tmp0_toFloat = _this__u8e3s4.z2d();
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = toDouble(tmp0_toFloat);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function get_double(_this__u8e3s4) {
    return toDouble(_this__u8e3s4.z2d());
  }
  function get_contentOrNull(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.z2d();
    }
    return tmp;
  }
  function get_longOrNull(_this__u8e3s4) {
    return toLongOrNull(_this__u8e3s4.z2d());
  }
  function get_doubleOrNull(_this__u8e3s4) {
    return toDoubleOrNull(_this__u8e3s4.z2d());
  }
  function get_jsonPrimitive(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function error(_this__u8e3s4, element) {
    throw IllegalArgumentException_init_$Create$('Element ' + getKClassFromExpression(_this__u8e3s4) + ' is not a ' + element);
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    var tmp = defer(JsonElementSerializer$descriptor$lambda$lambda);
    $this$buildSerialDescriptor.c1u('JsonPrimitive', tmp, null, false, 12, null);
    var tmp_0 = defer(JsonElementSerializer$descriptor$lambda$lambda_0);
    $this$buildSerialDescriptor.c1u('JsonNull', tmp_0, null, false, 12, null);
    var tmp_1 = defer(JsonElementSerializer$descriptor$lambda$lambda_1);
    $this$buildSerialDescriptor.c1u('JsonLiteral', tmp_1, null, false, 12, null);
    var tmp_2 = defer(JsonElementSerializer$descriptor$lambda$lambda_2);
    $this$buildSerialDescriptor.c1u('JsonObject', tmp_2, null, false, 12, null);
    var tmp_3 = defer(JsonElementSerializer$descriptor$lambda$lambda_3);
    $this$buildSerialDescriptor.c1u('JsonArray', tmp_3, null, false, 12, null);
    return Unit_getInstance();
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().j2e_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().k2e_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().l2e_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().m2e_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().n2e_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.o2e_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda, 4, null);
  }
  JsonElementSerializer.prototype.o1t = function () {
    return this.o2e_1;
  };
  JsonElementSerializer.prototype.p2e = function (encoder, value) {
    verify(encoder);
    var tmp0_subject = value;
    if (tmp0_subject instanceof JsonPrimitive) {
      encoder.x1x(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (tmp0_subject instanceof JsonObject) {
        encoder.x1x(JsonObjectSerializer_getInstance(), value);
      } else {
        if (tmp0_subject instanceof JsonArray) {
          encoder.x1x(JsonArraySerializer_getInstance(), value);
        }
      }
    }
  };
  JsonElementSerializer.prototype.p1t = function (encoder, value) {
    return this.p2e(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  JsonElementSerializer.prototype.q1t = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.y2d();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    var tmp = this;
    var tmp_0 = STRING_getInstance();
    tmp.j2e_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonPrimitive', tmp_0, [], null, 12, null);
  }
  JsonPrimitiveSerializer.prototype.o1t = function () {
    return this.j2e_1;
  };
  JsonPrimitiveSerializer.prototype.q2e = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.x1x(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_getInstance();
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.x1x(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  JsonPrimitiveSerializer.prototype.p1t = function (encoder, value) {
    return this.q2e(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  JsonPrimitiveSerializer.prototype.q1t = function (decoder) {
    var result = asJsonDecoder(decoder).y2d();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.r2e_1 = MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).o1t();
    this.s2e_1 = 'kotlinx.serialization.json.JsonObject';
  }
  JsonObjectDescriptor.prototype.u1u = function () {
    return this.r2e_1.u1u();
  };
  JsonObjectDescriptor.prototype.v1u = function () {
    return this.r2e_1.v1u();
  };
  JsonObjectDescriptor.prototype.w1u = function () {
    return this.r2e_1.w1u();
  };
  JsonObjectDescriptor.prototype.m1u = function () {
    return this.r2e_1.m1u();
  };
  JsonObjectDescriptor.prototype.x1u = function () {
    return this.r2e_1.x1u();
  };
  JsonObjectDescriptor.prototype.y1u = function (index) {
    return this.r2e_1.y1u(index);
  };
  JsonObjectDescriptor.prototype.z1u = function (index) {
    return this.r2e_1.z1u(index);
  };
  JsonObjectDescriptor.prototype.a1v = function (name) {
    return this.r2e_1.a1v(name);
  };
  JsonObjectDescriptor.prototype.b1v = function (index) {
    return this.r2e_1.b1v(index);
  };
  JsonObjectDescriptor.prototype.c1v = function (index) {
    return this.r2e_1.c1v(index);
  };
  JsonObjectDescriptor.prototype.t1u = function () {
    return this.s2e_1;
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.m2e_1 = JsonObjectDescriptor_getInstance();
  }
  JsonObjectSerializer.prototype.o1t = function () {
    return this.m2e_1;
  };
  JsonObjectSerializer.prototype.t2e = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).p1t(encoder, value);
  };
  JsonObjectSerializer.prototype.p1t = function (encoder, value) {
    return this.t2e(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  JsonObjectSerializer.prototype.q1t = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_getInstance()), JsonElementSerializer_getInstance()).q1t(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.u2e_1 = ListSerializer(JsonElementSerializer_getInstance()).o1t();
    this.v2e_1 = 'kotlinx.serialization.json.JsonArray';
  }
  JsonArrayDescriptor.prototype.u1u = function () {
    return this.u2e_1.u1u();
  };
  JsonArrayDescriptor.prototype.v1u = function () {
    return this.u2e_1.v1u();
  };
  JsonArrayDescriptor.prototype.w1u = function () {
    return this.u2e_1.w1u();
  };
  JsonArrayDescriptor.prototype.m1u = function () {
    return this.u2e_1.m1u();
  };
  JsonArrayDescriptor.prototype.x1u = function () {
    return this.u2e_1.x1u();
  };
  JsonArrayDescriptor.prototype.y1u = function (index) {
    return this.u2e_1.y1u(index);
  };
  JsonArrayDescriptor.prototype.z1u = function (index) {
    return this.u2e_1.z1u(index);
  };
  JsonArrayDescriptor.prototype.a1v = function (name) {
    return this.u2e_1.a1v(name);
  };
  JsonArrayDescriptor.prototype.b1v = function (index) {
    return this.u2e_1.b1v(index);
  };
  JsonArrayDescriptor.prototype.c1v = function (index) {
    return this.u2e_1.c1v(index);
  };
  JsonArrayDescriptor.prototype.t1u = function () {
    return this.v2e_1;
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.n2e_1 = JsonArrayDescriptor_getInstance();
  }
  JsonArraySerializer.prototype.o1t = function () {
    return this.n2e_1;
  };
  JsonArraySerializer.prototype.w2e = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).p1t(encoder, value);
  };
  JsonArraySerializer.prototype.p1t = function (encoder, value) {
    return this.w2e(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  JsonArraySerializer.prototype.q1t = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).q1t(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    var tmp = this;
    var tmp_0 = ENUM_getInstance();
    tmp.k2e_1 = buildSerialDescriptor$default('kotlinx.serialization.json.JsonNull', tmp_0, [], null, 12, null);
  }
  JsonNullSerializer.prototype.o1t = function () {
    return this.k2e_1;
  };
  JsonNullSerializer.prototype.x2e = function (encoder, value) {
    verify(encoder);
    encoder.c1x();
  };
  JsonNullSerializer.prototype.p1t = function (encoder, value) {
    return this.x2e(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  JsonNullSerializer.prototype.q1t = function (decoder) {
    verify_0(decoder);
    if (decoder.v1v()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.w1v();
    return JsonNull_getInstance();
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.l2e_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  JsonLiteralSerializer.prototype.o1t = function () {
    return this.l2e_1;
  };
  JsonLiteralSerializer.prototype.y2e = function (encoder, value) {
    verify(encoder);
    if (value.e2e_1) {
      return encoder.l1x(value.f2e_1);
    }
    var tmp0_safe_receiver = get_longOrNull(value);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.h1x(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.f2e_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0 = encoder.m1x(serializer_0(Companion_getInstance()).o1t());
      var tmp$ret$1;
      // Inline function 'kotlin.ULong.toLong' call
      tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_safe_receiver);
      tmp_0.h1x(tmp$ret$1);
      return Unit_getInstance();
    }
    var tmp2_safe_receiver = get_doubleOrNull(value);
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.j1x(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = get_booleanOrNull(value);
    if (tmp3_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return encoder.d1x(tmp3_safe_receiver);
    }
    encoder.l1x(value.f2e_1);
  };
  JsonLiteralSerializer.prototype.p1t = function (encoder, value) {
    return this.y2e(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  JsonLiteralSerializer.prototype.q1t = function (decoder) {
    var result = asJsonDecoder(decoder).y2d();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + getKClassFromExpression(result), toString(result));
    return result;
  };
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + getKClassFromExpression(_this__u8e3s4)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = original$factory();
    tmp$ret$0 = $this.z2e_1.o();
    return tmp$ret$0;
  }
  function defer$1($deferred) {
    this.z2e_1 = lazy_0($deferred);
  }
  defer$1.prototype.t1u = function () {
    return _get_original__l7ku1m(this).t1u();
  };
  defer$1.prototype.x1u = function () {
    return _get_original__l7ku1m(this).x1u();
  };
  defer$1.prototype.v1u = function () {
    return _get_original__l7ku1m(this).v1u();
  };
  defer$1.prototype.b1v = function (index) {
    return _get_original__l7ku1m(this).b1v(index);
  };
  defer$1.prototype.a1v = function (name) {
    return _get_original__l7ku1m(this).a1v(name);
  };
  defer$1.prototype.y1u = function (index) {
    return _get_original__l7ku1m(this).y1u(index);
  };
  defer$1.prototype.z1u = function (index) {
    return _get_original__l7ku1m(this).z1u(index);
  };
  defer$1.prototype.c1v = function (index) {
    return _get_original__l7ku1m(this).c1v(index);
  };
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  function Composer(sb) {
    this.a2f_1 = sb;
    this.b2f_1 = true;
  }
  Composer.prototype.c2f = function () {
    this.b2f_1 = true;
  };
  Composer.prototype.d2f = function () {
    return Unit_getInstance();
  };
  Composer.prototype.e2f = function () {
    this.b2f_1 = false;
  };
  Composer.prototype.f2f = function () {
    return Unit_getInstance();
  };
  Composer.prototype.g2f = function (v) {
    return this.a2f_1.a24(v);
  };
  Composer.prototype.h2f = function (v) {
    return this.a2f_1.i2f(v);
  };
  Composer.prototype.j2f = function (v) {
    return this.a2f_1.i2f(v.toString());
  };
  Composer.prototype.k2f = function (v) {
    return this.a2f_1.i2f(v.toString());
  };
  Composer.prototype.l2f = function (v) {
    return this.a2f_1.b25(toLong_0(v));
  };
  Composer.prototype.m2f = function (v) {
    return this.a2f_1.b25(toLong_0(v));
  };
  Composer.prototype.n2f = function (v) {
    return this.a2f_1.b25(toLong_0(v));
  };
  Composer.prototype.o2f = function (v) {
    return this.a2f_1.b25(v);
  };
  Composer.prototype.p2f = function (v) {
    return this.a2f_1.i2f(v.toString());
  };
  Composer.prototype.q2f = function (value) {
    return this.a2f_1.r2f(value);
  };
  function Composer_0(sb, json) {
    return json.a2c_1.p2d_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(sb) {
    Composer.call(this, sb);
  }
  ComposerForUnsignedNumbers.prototype.n2f = function (v) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
    return Composer.prototype.h2f.call(this, UInt__toString_impl_dbgl21(tmp$ret$0));
  };
  ComposerForUnsignedNumbers.prototype.o2f = function (v) {
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    tmp$ret$0 = _ULong___init__impl__c78o9k(v);
    return Composer.prototype.h2f.call(this, ULong__toString_impl_f9au7k(tmp$ret$0));
  };
  ComposerForUnsignedNumbers.prototype.l2f = function (v) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUByte' call
    tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
    return Composer.prototype.h2f.call(this, UByte__toString_impl_v72jg(tmp$ret$0));
  };
  ComposerForUnsignedNumbers.prototype.m2f = function (v) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    tmp$ret$0 = _UShort___init__impl__jigrne(v);
    return Composer.prototype.h2f.call(this, UShort__toString_impl_edaoee(tmp$ret$0));
  };
  function ComposerWithPrettyPrint(sb, json) {
    Composer.call(this, sb);
    this.w2f_1 = json;
    this.x2f_1 = 0;
  }
  ComposerWithPrettyPrint.prototype.c2f = function () {
    this.b2f_1 = true;
    var tmp0_this = this;
    var tmp1 = tmp0_this.x2f_1;
    tmp0_this.x2f_1 = tmp1 + 1 | 0;
  };
  ComposerWithPrettyPrint.prototype.d2f = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.x2f_1;
    tmp0_this.x2f_1 = tmp1 - 1 | 0;
  };
  ComposerWithPrettyPrint.prototype.e2f = function () {
    this.b2f_1 = false;
    this.h2f('\n');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.x2f_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.ComposerWithPrettyPrint.nextItem.<anonymous>' call
        this.h2f(this.w2f_1.a2c_1.r2d_1);
      }
       while (inductionVariable < tmp0_repeat);
  };
  ComposerWithPrettyPrint.prototype.f2f = function () {
    this.g2f(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.z2f_1 = !descriptor.c1v(index) ? descriptor.z1u(index).m1u() : false;
    return $this.z2f_1;
  }
  function JsonElementMarker$readIfAbsent$ref($boundThis) {
    var l = function (p0, p1) {
      return readIfAbsent($boundThis, p0, p1);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.y2f_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.z2f_1 = false;
  }
  JsonElementMarker.prototype.u21 = function (index) {
    this.y2f_1.u21(index);
  };
  JsonElementMarker.prototype.v21 = function () {
    return this.y2f_1.v21();
  };
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidFloatingPointEncoded(value, output) {
    var tmp = 'Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n');
    return new JsonEncodingException(tmp + ('Current output: ' + minify$default(output, 0, 1, null)));
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.t1u() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.x1u() + "'.\n") + get_allowStructuredMapKeysHint());
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    var tmp = 'Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification';
    _this__u8e3s4.a2g(tmp, 0, get_specialFlowingValuesHint(), 2, null);
  }
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + minify(input, offset));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function UnknownKeyException(key, input) {
    var tmp = "Encountered unknown key '" + key + "'.\n" + (get_ignoreUnknownKeysHint() + '\n');
    return JsonDecodingException_1(-1, tmp + ('Current input: ' + minify$default(input, 0, 1, null)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  function minify(_this__u8e3s4, offset) {
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      var tmp$ret$0;
      // Inline function 'kotlin.text.substring' call
      var tmp0_substring = charSequenceLength(_this__u8e3s4);
      tmp$ret$0 = toString(charSequenceSubSequence(_this__u8e3s4, start, tmp0_substring));
      return '.....' + tmp$ret$0;
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp1_substring = coerceAtLeast(start_0, 0);
    var tmp2_substring = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    tmp$ret$1 = toString(charSequenceSubSequence(_this__u8e3s4, tmp1_substring, tmp2_substring));
    return prefix + tmp$ret$1 + suffix;
  }
  function minify$default(_this__u8e3s4, offset, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      offset = -1;
    return minify(_this__u8e3s4, offset);
  }
  function unexpectedFpErrorMessage(value, key, output) {
    var tmp = 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + (get_specialFlowingValuesHint() + '\n');
    return tmp + ('Current output: ' + minify$default(output, 0, 1, null));
  }
  function get_JsonAlternativeNamesKey() {
    init_properties_JsonNamesMap_kt_1j2xk2();
    return JsonAlternativeNamesKey;
  }
  var JsonAlternativeNamesKey;
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    var index = _this__u8e3s4.a1v(name);
    Companion_getInstance_0();
    if (!(index === -3))
      return index;
    if (!json.a2c_1.w2d_1)
      return index;
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.c2g(_this__u8e3s4, tmp_0, buildAlternativeNamesMap$ref(_this__u8e3s4));
    var tmp0_elvis_lhs = alternativeNamesMap.v1(name);
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_0();
      tmp_1 = -3;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    return tmp_1;
  }
  function buildAlternativeNamesMap(_this__u8e3s4) {
    init_properties_JsonNamesMap_kt_1j2xk2();
    var builder = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.v1u();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0_filterIsInstance = _this__u8e3s4.y1u(i);
        var tmp$ret$0;
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
        var tmp0_iterator = tmp0_filterIsInstance.j();
        while (tmp0_iterator.k()) {
          var element = tmp0_iterator.l();
          if (element instanceof JsonNames) {
            tmp0_filterIsInstanceTo.a(element);
          }
        }
        tmp$ret$0 = tmp0_filterIsInstanceTo;
        tmp$ret$1 = tmp$ret$0;
        var tmp1_safe_receiver = singleOrNull(tmp$ret$1);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.d2g_1;
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_0 = arrayIterator(tmp2_safe_receiver);
          while (tmp0_iterator_0.k()) {
            var element_0 = tmp0_iterator_0.l();
            // Inline function 'kotlinx.serialization.json.internal.buildAlternativeNamesMap.<anonymous>' call
            if (builder == null)
              builder = createMapForCache(_this__u8e3s4.v1u());
            buildAlternativeNamesMap$putOrThrow(ensureNotNull(builder), _this__u8e3s4, element_0, i);
          }
        }
      }
       while (inductionVariable < last);
    var tmp3_elvis_lhs = builder;
    return tmp3_elvis_lhs == null ? emptyMap() : tmp3_elvis_lhs;
  }
  function buildAlternativeNamesMap$putOrThrow(_this__u8e3s4, $this_buildAlternativeNamesMap, name, index) {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.contains' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.containsKey' call
    tmp$ret$0 = (isInterface(_this__u8e3s4, Map) ? _this__u8e3s4 : THROW_CCE()).p1(name);
    tmp$ret$1 = tmp$ret$0;
    if (tmp$ret$1) {
      throw new JsonException("The suggested name '" + name + "' for property " + $this_buildAlternativeNamesMap.b1v(index) + ' is already one of the names for property ' + ($this_buildAlternativeNamesMap.b1v(getValue(_this__u8e3s4, name)) + ' in ' + $this_buildAlternativeNamesMap));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.u2(name, index);
  }
  function buildAlternativeNamesMap$ref($boundThis) {
    var l = function () {
      return buildAlternativeNamesMap($boundThis);
    };
    l.callableName = 'buildAlternativeNamesMap';
    return l;
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function init_properties_JsonNamesMap_kt_1j2xk2() {
    if (properties_initialized_JsonNamesMap_kt_ljpf42) {
    } else {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonAlternativeNamesKey = new Key();
    }
  }
  function Tombstone() {
    Tombstone_instance = this;
  }
  var Tombstone_instance;
  function Tombstone_getInstance() {
    if (Tombstone_instance == null)
      new Tombstone();
    return Tombstone_instance;
  }
  function resize($this) {
    var newSize = imul($this.g2g_1, 2);
    $this.e2g_1 = copyOf($this.e2g_1, newSize);
    $this.f2g_1 = copyOf_0($this.f2g_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(8), null);
    tmp.e2g_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = 8;
    var tmp_3 = new Int32Array(tmp_2);
    while (tmp_1 < tmp_2) {
      var tmp_4 = tmp_1;
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.json.internal.JsonPath.indicies.<anonymous>' call
      tmp$ret$1 = -1;
      tmp_3[tmp_4] = tmp$ret$1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.f2g_1 = tmp_3;
    this.g2g_1 = -1;
  }
  JsonPath.prototype.h2g = function (sd) {
    var tmp0_this = this;
    tmp0_this.g2g_1 = tmp0_this.g2g_1 + 1 | 0;
    var depth = tmp0_this.g2g_1;
    if (depth === this.e2g_1.length) {
      resize(this);
    }
    this.e2g_1[depth] = sd;
  };
  JsonPath.prototype.i2g = function (index) {
    this.f2g_1[this.g2g_1] = index;
  };
  JsonPath.prototype.j2g = function (key) {
    var tmp;
    if (!(this.f2g_1[this.g2g_1] === -2)) {
      var tmp0_this = this;
      tmp0_this.g2g_1 = tmp0_this.g2g_1 + 1 | 0;
      tmp = tmp0_this.g2g_1 === this.e2g_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.e2g_1[this.g2g_1] = key;
    this.f2g_1[this.g2g_1] = -2;
  };
  JsonPath.prototype.k2g = function () {
    if (this.f2g_1[this.g2g_1] === -2) {
      this.e2g_1[this.g2g_1] = Tombstone_getInstance();
    }
  };
  JsonPath.prototype.l2g = function () {
    var depth = this.g2g_1;
    if (this.f2g_1[depth] === -2) {
      this.f2g_1[depth] = -1;
      var tmp0_this = this;
      var tmp1 = tmp0_this.g2g_1;
      tmp0_this.g2g_1 = tmp1 - 1 | 0;
    }
    if (!(this.g2g_1 === -1)) {
      var tmp2_this = this;
      var tmp3 = tmp2_this.g2g_1;
      tmp2_this.g2g_1 = tmp3 - 1 | 0;
    }
  };
  JsonPath.prototype.m2g = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>' call
    tmp0_apply.wc('$');
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.g2g_1 + 1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.serialization.json.internal.JsonPath.getPath.<anonymous>.<anonymous>' call
        var element = this.e2g_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.x1u(), LIST_getInstance())) {
            if (!(this.f2g_1[index] === -1)) {
              tmp0_apply.wc('[');
              tmp0_apply.vc(this.f2g_1[index]);
              tmp0_apply.wc(']');
            }
          } else {
            var idx = this.f2g_1[index];
            if (idx >= 0) {
              tmp0_apply.wc('.');
              tmp0_apply.wc(element.b1v(idx));
            }
          }
        } else {
          if (!(element === Tombstone_getInstance())) {
            tmp0_apply.wc('[');
            tmp0_apply.wc("'");
            tmp0_apply.vc(element);
            tmp0_apply.wc("'");
            tmp0_apply.wc(']');
          }
        }
      }
       while (inductionVariable < tmp0_repeat);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  JsonPath.prototype.toString = function () {
    return this.m2g();
  };
  function readObject($this) {
    var tmp$ret$2;
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.n2g_1.q2g(get_TC_BEGIN_OBJ());
    if ($this.n2g_1.r2g() === get_TC_COMMA()) {
      $this.n2g_1.a2g('Unexpected leading comma', 0, null, 6, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    var result = tmp$ret$0;
    $l$loop: while ($this.n2g_1.s2g()) {
      var key = $this.o2g_1 ? $this.n2g_1.u2g() : $this.n2g_1.t2g();
      $this.n2g_1.q2g(get_TC_COLON());
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObject.<anonymous>' call
      tmp$ret$1 = $this.v2g();
      var element = tmp$ret$1;
      // Inline function 'kotlin.collections.set' call
      result.u2(key, element);
      lastToken = $this.n2g_1.w2g();
      var tmp0_subject = lastToken;
      if (tmp0_subject === get_TC_COMMA())
      ;
      else if (tmp0_subject === get_TC_END_OBJ())
        break $l$loop;
      else {
        $this.n2g_1.a2g('Expected end of the object or comma', 0, null, 6, null);
      }
    }
    if (lastToken === get_TC_BEGIN_OBJ()) {
      $this.n2g_1.q2g(get_TC_END_OBJ());
    } else if (lastToken === get_TC_COMMA()) {
      $this.n2g_1.a2g('Unexpected trailing comma', 0, null, 6, null);
    }
    tmp$ret$2 = new JsonObject(result);
    return tmp$ret$2;
  }
  function readObject_0(_this__u8e3s4, $this, $cont) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  }
  function readArray($this) {
    var lastToken = $this.n2g_1.w2g();
    if ($this.n2g_1.r2g() === get_TC_COMMA()) {
      $this.n2g_1.a2g('Unexpected leading comma', 0, null, 6, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var result = tmp$ret$0;
    while ($this.n2g_1.s2g()) {
      var element = $this.v2g();
      result.a(element);
      lastToken = $this.n2g_1.w2g();
      if (!(lastToken === get_TC_COMMA())) {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var tmp0_require = $this.n2g_1;
        var tmp1_require = lastToken === get_TC_END_LIST();
        var tmp2_require = tmp0_require.t2c_1;
        if (!tmp1_require) {
          var tmp$ret$1;
          // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readArray.<anonymous>' call
          tmp$ret$1 = 'Expected end of the array or comma';
          var tmp = tmp$ret$1;
          tmp0_require.a2g(tmp, tmp2_require, null, 4, null);
        }
      }
    }
    if (lastToken === get_TC_BEGIN_LIST()) {
      $this.n2g_1.q2g(get_TC_END_LIST());
    } else if (lastToken === get_TC_COMMA()) {
      $this.n2g_1.a2g('Unexpected trailing comma', 0, null, 6, null);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.o2g_1 ? true : !isString) {
      tmp = $this.n2g_1.u2g();
    } else {
      tmp = $this.n2g_1.t2g();
    }
    var string = tmp;
    if (!isString ? string === get_NULL() : false)
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_getInstance());
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.s2h_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  JsonTreeReader$readDeepRecursive$slambda.prototype.x2h = function ($this$$receiver, it, $cont) {
    var tmp = this.y2h($this$$receiver, it, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.z5 = function (p1, p2, $cont) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.x2h(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $cont);
  };
  JsonTreeReader$readDeepRecursive$slambda.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 3;
            this.v2h_1 = this.s2h_1.n2g_1.r2g();
            if (this.v2h_1 === get_TC_STRING()) {
              this.w2h_1 = readValue(this.s2h_1, true);
              this.oe_1 = 2;
              continue $sm;
            } else {
              if (this.v2h_1 === get_TC_OTHER()) {
                this.w2h_1 = readValue(this.s2h_1, false);
                this.oe_1 = 2;
                continue $sm;
              } else {
                if (this.v2h_1 === get_TC_BEGIN_OBJ()) {
                  this.oe_1 = 1;
                  suspendResult = readObject_0(this.t2h_1, this.s2h_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.v2h_1 === get_TC_BEGIN_LIST()) {
                    this.w2h_1 = readArray(this.s2h_1);
                    this.oe_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.s2h_1.n2g_1.a2g("Can't begin reading element, unexpected token", 0, null, 6, null);
                  }
                }
              }
            }

            break;
          case 1:
            this.w2h_1 = suspendResult;
            this.oe_1 = 2;
            continue $sm;
          case 2:
            return this.w2h_1;
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
  JsonTreeReader$readDeepRecursive$slambda.prototype.y2h = function ($this$$receiver, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.s2h_1, completion);
    i.t2h_1 = $this$$receiver;
    i.u2h_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$$receiver, it, $cont) {
      return i.x2h($this$$receiver, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f2h_1 = _this__u8e3s4;
    this.g2h_1 = _this__u8e3s4_0;
  }
  $readObjectCOROUTINE$0.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 5;
            this.h2h_1 = this.f2h_1.n2g_1.q2g(get_TC_BEGIN_OBJ());
            if (this.f2h_1.n2g_1.r2g() === get_TC_COMMA()) {
              this.f2h_1.n2g_1.a2g('Unexpected leading comma', 0, null, 6, null);
            }

            var tmp_0 = this;
            tmp_0.i2h_1 = LinkedHashMap_init_$Create$();
            this.oe_1 = 1;
            continue $sm;
          case 1:
            if (!this.f2h_1.n2g_1.s2g()) {
              this.oe_1 = 4;
              continue $sm;
            }

            this.j2h_1 = this.f2h_1.o2g_1 ? this.f2h_1.n2g_1.u2g() : this.f2h_1.n2g_1.t2g();
            this.f2h_1.n2g_1.q2g(get_TC_COLON());
            ;
            this.oe_1 = 2;
            suspendResult = this.g2h_1.r5(Unit_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            this.i2h_1.u2(this.j2h_1, element);
            ;
            this.h2h_1 = this.f2h_1.n2g_1.w2g();
            var tmp0_subject = this.h2h_1;
            if (tmp0_subject === get_TC_COMMA()) {
              this.oe_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === get_TC_END_OBJ()) {
                this.oe_1 = 4;
                continue $sm;
              } else {
                this.f2h_1.n2g_1.a2g('Expected end of the object or comma', 0, null, 6, null);
              }
            }

            break;
          case 3:
            this.oe_1 = 1;
            continue $sm;
          case 4:
            if (this.h2h_1 === get_TC_BEGIN_OBJ()) {
              this.f2h_1.n2g_1.q2g(get_TC_END_OBJ());
            } else if (this.h2h_1 === get_TC_COMMA()) {
              this.f2h_1.n2g_1.a2g('Unexpected trailing comma', 0, null, 6, null);
            }

            return new JsonObject(this.i2h_1);
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
  function JsonTreeReader(configuration, lexer) {
    this.n2g_1 = lexer;
    this.o2g_1 = configuration.n2d_1;
    this.p2g_1 = 0;
  }
  JsonTreeReader.prototype.v2g = function () {
    var token = this.n2g_1.r2g();
    var tmp;
    if (token === get_TC_STRING()) {
      tmp = readValue(this, true);
    } else if (token === get_TC_OTHER()) {
      tmp = readValue(this, false);
    } else if (token === get_TC_BEGIN_OBJ()) {
      var tmp_0;
      var tmp0_this = this;
      tmp0_this.p2g_1 = tmp0_this.p2g_1 + 1 | 0;
      if (tmp0_this.p2g_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      var tmp1_this = this;
      tmp1_this.p2g_1 = tmp1_this.p2g_1 - 1 | 0;
      tmp = result;
    } else if (token === get_TC_BEGIN_LIST()) {
      tmp = readArray(this);
    } else {
      var tmp_1 = 'Cannot begin reading element, unexpected token: ' + token;
      this.n2g_1.a2g(tmp_1, 0, null, 6, null);
    }
    return tmp;
  };
  function decodeSerializableValuePolymorphic(_this__u8e3s4, deserializer) {
    var tmp;
    if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.x2d().a2c_1.t2d_1;
    }
    if (tmp) {
      return deserializer.q1t(_this__u8e3s4);
    }
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var tmp0_cast = _this__u8e3s4.y2d();
    var tmp1_cast = deserializer.o1t();
    if (!(tmp0_cast instanceof JsonObject)) {
      throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + tmp1_cast.t1u() + ', but had ' + getKClassFromExpression(tmp0_cast));
    }
    tmp$ret$0 = tmp0_cast;
    var jsonTree = tmp$ret$0;
    var discriminator = classDiscriminator(deserializer.o1t(), _this__u8e3s4.x2d());
    var tmp0_safe_receiver = jsonTree.h1c(discriminator);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var type = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.z2d();
    var tmp2_elvis_lhs = deserializer.t1t(_this__u8e3s4, type);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      throwSerializerNotFound(type, jsonTree);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var actualSerializer = tmp_0;
    var tmp_1 = _this__u8e3s4.x2d();
    return readPolymorphicJson(tmp_1, discriminator, jsonTree, isInterface(actualSerializer, DeserializationStrategy) ? actualSerializer : THROW_CCE());
  }
  function classDiscriminator(_this__u8e3s4, json) {
    var tmp0_iterator = _this__u8e3s4.u1u().j();
    while (tmp0_iterator.k()) {
      var annotation = tmp0_iterator.l();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.z2h_1;
    }
    return json.a2c_1.u2d_1;
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_getInstance();
    if (jsonCachedSerialNames(actualSerializer.o1t()).y(classDiscriminator)) {
      var baseName = serializer.o1t().t1u();
      var actualName = actualSerializer.o1t().t1u();
      // Inline function 'kotlin.error' call
      var tmp0_error = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
  }
  function checkKind(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$("Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$("Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      throw IllegalStateException_init_$Create$('Actual serializer for polymorphic cannot be polymorphic itself');
    }
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + type + "'";
    throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function validateIfSealed$accessor$1ad0flx(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function checkKind_0($this, descriptor, actualClass) {
    var kind = descriptor.x1u();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.jb() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.a2i_1)
      return Unit_getInstance();
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) ? true : equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.jb() + ' of kind ' + kind + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.v1u();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.b1v(i);
        if (name === $this.b2i_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + actualClass + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.a2i_1 = useArrayPolymorphism;
    this.b2i_1 = discriminator;
  }
  PolymorphismValidator.prototype.n29 = function (kClass, provider) {
  };
  PolymorphismValidator.prototype.q29 = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.o1t();
    checkKind_0(this, descriptor, actualClass);
    if (!this.a2i_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  PolymorphismValidator.prototype.r29 = function (baseClass, defaultSerializerProvider) {
  };
  PolymorphismValidator.prototype.s29 = function (baseClass, defaultDeserializerProvider) {
  };
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.b2g_1 = createMapForCache(1);
  }
  DescriptorSchemaCache.prototype.c2i = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.set' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.b2g_1;
    var value_0 = tmp0_getOrPut.v1(descriptor);
    var tmp;
    if (value_0 == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.DescriptorSchemaCache.set.<anonymous>' call
      tmp$ret$0 = createMapForCache(1);
      var answer = tmp$ret$0;
      tmp0_getOrPut.u2(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    tmp$ret$1 = tmp;
    var tmp1_set = tmp$ret$1;
    var tmp2_set = key instanceof Key ? key : THROW_CCE();
    var tmp3_set = isObject(value) ? value : THROW_CCE();
    tmp1_set.u2(tmp2_set, tmp3_set);
  };
  DescriptorSchemaCache.prototype.c2g = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.d2i(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.c2i(descriptor, key, value);
    return value;
  };
  DescriptorSchemaCache.prototype.d2i = function (descriptor, key) {
    var tmp0_safe_receiver = this.b2g_1.v1(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.v1(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return isObject(tmp_0) ? tmp_0 : null;
  };
  function skipLeftoverElements($this, descriptor) {
    $l$loop: while (true) {
      var tmp = $this.y1w(descriptor);
      Companion_getInstance_0();
      if (!!(tmp === -1)) {
        break $l$loop;
      }
    }
  }
  function checkLeadingComma($this) {
    if ($this.o2c_1.r2g() === get_TC_COMMA()) {
      $this.o2c_1.a2g('Unexpected leading comma', 0, null, 6, null);
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.q2c_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.q2c_1 === -1)) {
        hasComma = $this.o2c_1.f2i();
      }
    } else {
      $this.o2c_1.e2i(get_COLON());
    }
    var tmp;
    if ($this.o2c_1.s2g()) {
      if (decodingKey) {
        if ($this.q2c_1 === -1) {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp0_require = $this.o2c_1;
          var tmp1_require = !hasComma;
          var tmp2_require = tmp0_require.t2c_1;
          if (!tmp1_require) {
            var tmp$ret$0;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$0 = 'Unexpected trailing comma';
            var tmp_0 = tmp$ret$0;
            tmp0_require.a2g(tmp_0, tmp2_require, null, 4, null);
          }
        } else {
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var tmp3_require = $this.o2c_1;
          var tmp4_require = hasComma;
          var tmp5_require = tmp3_require.t2c_1;
          if (!tmp4_require) {
            var tmp$ret$1;
            // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeMapIndex.<anonymous>' call
            tmp$ret$1 = 'Expected comma after the key-value pair';
            var tmp_1 = tmp$ret$1;
            tmp3_require.a2g(tmp_1, tmp5_require, null, 4, null);
          }
        }
      }
      var tmp0_this = $this;
      tmp0_this.q2c_1 = tmp0_this.q2c_1 + 1 | 0;
      tmp = tmp0_this.q2c_1;
    } else {
      if (hasComma) {
        $this.o2c_1.a2g("Expected '}', but had ',' instead", 0, null, 6, null);
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var tmp0_tryCoerceValue = $this.m2c_1;
      var tmp1_tryCoerceValue = descriptor.z1u(index);
      var tmp;
      if (!tmp1_tryCoerceValue.m1u()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp$ret$0 = !$this.o2c_1.g2i();
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.x1u(), ENUM_getInstance())) {
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
        tmp$ret$2 = $this.o2c_1.h2i($this.r2c_1.n2d_1);
        var tmp0_elvis_lhs = tmp$ret$2;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_1;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_0;
        var enumIndex = getJsonNameIndex(tmp1_tryCoerceValue, tmp0_tryCoerceValue, enumValue);
        Companion_getInstance_0();
        if (enumIndex === -3) {
          // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.coerceInputValue.<anonymous>' call
          $this.o2c_1.t2g();
          tmp$ret$1 = true;
          break $l$block_1;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.o2c_1.f2i();
    while ($this.o2c_1.s2g()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.o2c_1.e2i(get_COLON());
      var index = getJsonNameIndex(descriptor, $this.m2c_1, key);
      var tmp;
      Companion_getInstance_0();
      if (!(index === -3)) {
        var tmp_0;
        if ($this.r2c_1.s2d_1 ? coerceInputValue($this, descriptor, index) : false) {
          hasComma = $this.o2c_1.f2i();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.s2c_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.u21(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, key);
      }
    }
    if (hasComma) {
      $this.o2c_1.a2g('Unexpected trailing comma', 0, null, 6, null);
    }
    var tmp1_safe_receiver = $this.s2c_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v21();
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      Companion_getInstance_0();
      tmp_1 = -1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    return tmp_1;
  }
  function handleUnknown($this, key) {
    if ($this.r2c_1.m2d_1) {
      $this.o2c_1.j2i($this.r2c_1.n2d_1);
    } else {
      $this.o2c_1.i2i(key);
    }
    return $this.o2c_1.f2i();
  }
  function decodeListIndex($this) {
    var hasComma = $this.o2c_1.f2i();
    var tmp;
    if ($this.o2c_1.s2g()) {
      if (!($this.q2c_1 === -1) ? !hasComma : false) {
        $this.o2c_1.a2g('Expected end of the array or comma', 0, null, 6, null);
      }
      var tmp0_this = $this;
      tmp0_this.q2c_1 = tmp0_this.q2c_1 + 1 | 0;
      tmp = tmp0_this.q2c_1;
    } else {
      if (hasComma) {
        $this.o2c_1.a2g('Unexpected trailing comma', 0, null, 6, null);
      }
      Companion_getInstance_0();
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.r2c_1.n2d_1) {
      tmp = $this.o2c_1.l2i();
    } else {
      tmp = $this.o2c_1.k2i();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor) {
    AbstractDecoder.call(this);
    this.m2c_1 = json;
    this.n2c_1 = mode;
    this.o2c_1 = lexer;
    this.p2c_1 = this.m2c_1.w1w();
    this.q2c_1 = -1;
    this.r2c_1 = this.m2c_1.a2c_1;
    this.s2c_1 = this.r2c_1.q2d_1 ? null : new JsonElementMarker(descriptor);
  }
  StreamingJsonDecoder.prototype.x2d = function () {
    return this.m2c_1;
  };
  StreamingJsonDecoder.prototype.w1w = function () {
    return this.p2c_1;
  };
  StreamingJsonDecoder.prototype.y2d = function () {
    return (new JsonTreeReader(this.m2c_1.a2c_1, this.o2c_1)).v2g();
  };
  StreamingJsonDecoder.prototype.i1w = function (deserializer) {
    try {
      return decodeSerializableValuePolymorphic(this, deserializer);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        throw new MissingFieldException(plus($p.message, ' at path: ') + this.o2c_1.u2c_1.m2g(), $p);
      } else {
        throw $p;
      }
    }
  };
  StreamingJsonDecoder.prototype.j1w = function (descriptor) {
    var newMode = switchMode(this.m2c_1, descriptor);
    this.o2c_1.u2c_1.h2g(descriptor);
    this.o2c_1.e2i(newMode.o2i_1);
    checkLeadingComma(this);
    var tmp0_subject = newMode;
    var tmp0 = tmp0_subject.v3_1;
    var tmp;
    switch (tmp0) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.m2c_1, newMode, this.o2c_1, descriptor);
        break;
      default:
        var tmp_0;
        if (this.n2c_1.equals(newMode) ? this.m2c_1.a2c_1.q2d_1 : false) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.m2c_1, newMode, this.o2c_1, descriptor);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.k1w = function (descriptor) {
    if (this.m2c_1.a2c_1.m2d_1 ? descriptor.v1u() === 0 : false) {
      skipLeftoverElements(this, descriptor);
    }
    this.o2c_1.e2i(this.n2c_1.p2i_1);
    this.o2c_1.u2c_1.l2g();
  };
  StreamingJsonDecoder.prototype.v1v = function () {
    var tmp;
    var tmp0_safe_receiver = this.s2c_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z2f_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = this.o2c_1.g2i();
    } else {
      tmp = false;
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.w1v = function () {
    return null;
  };
  StreamingJsonDecoder.prototype.u1w = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.n2c_1.equals(WriteMode_MAP_getInstance()) ? (index & 1) === 0 : false;
    if (isMapKey) {
      this.o2c_1.u2c_1.k2g();
    }
    var value = AbstractDecoder.prototype.u1w.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.o2c_1.u2c_1.j2g(value);
    }
    return value;
  };
  StreamingJsonDecoder.prototype.y1w = function (descriptor) {
    var tmp0_subject = this.n2c_1;
    var tmp0 = tmp0_subject.v3_1;
    {
      var index;
      switch (tmp0) {
        case 0:
          index = decodeObjectIndex(this, descriptor);
          break;
        case 2:
          index = decodeMapIndex(this);
          break;
        default:
          index = decodeListIndex(this);
          break;
      }
    }
    if (!this.n2c_1.equals(WriteMode_MAP_getInstance())) {
      this.o2c_1.u2c_1.i2g(index);
    }
    return index;
  };
  StreamingJsonDecoder.prototype.x1v = function () {
    var tmp;
    if (this.r2c_1.n2d_1) {
      tmp = this.o2c_1.r2i();
    } else {
      tmp = this.o2c_1.q2i();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.y1v = function () {
    var value = this.o2c_1.s2i();
    if (!value.equals(toLong_0(value.ee()))) {
      var tmp = "Failed to parse byte for input '" + toString(value) + "'";
      this.o2c_1.a2g(tmp, 0, null, 6, null);
    }
    return value.ee();
  };
  StreamingJsonDecoder.prototype.z1v = function () {
    var value = this.o2c_1.s2i();
    if (!value.equals(toLong_0(value.fe()))) {
      var tmp = "Failed to parse short for input '" + toString(value) + "'";
      this.o2c_1.a2g(tmp, 0, null, 6, null);
    }
    return value.fe();
  };
  StreamingJsonDecoder.prototype.a1w = function () {
    var value = this.o2c_1.s2i();
    if (!value.equals(toLong_0(value.k7()))) {
      var tmp = "Failed to parse int for input '" + toString(value) + "'";
      this.o2c_1.a2g(tmp, 0, null, 6, null);
    }
    return value.k7();
  };
  StreamingJsonDecoder.prototype.b1w = function () {
    return this.o2c_1.s2i();
  };
  StreamingJsonDecoder.prototype.c1w = function () {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.o2c_1;
      var input = tmp0_parseString.u2g();
      try {
        var tmp$ret$3;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeFloat.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.text.toFloat' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp0_unsafeCast = toDouble(input);
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0_unsafeCast;
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
        tmp$ret$4 = tmp$ret$3;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'float' for input '" + input + "'";
          tmp0_parseString.a2g(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.m2c_1.a2c_1.v2d_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.o2c_1, result);
  };
  StreamingJsonDecoder.prototype.d1w = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.o2c_1;
      var input = tmp0_parseString.u2g();
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.StreamingJsonDecoder.decodeDouble.<anonymous>' call
        tmp$ret$0 = toDouble(input);
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'double' for input '" + input + "'";
          tmp0_parseString.a2g(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.m2c_1.a2c_1.v2d_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.o2c_1, result);
  };
  StreamingJsonDecoder.prototype.e1w = function () {
    var string = this.o2c_1.u2g();
    if (!(string.length === 1)) {
      var tmp = "Expected single char, but got '" + string + "'";
      this.o2c_1.a2g(tmp, 0, null, 6, null);
    }
    return charSequenceGet(string, 0);
  };
  StreamingJsonDecoder.prototype.f1w = function () {
    var tmp;
    if (this.r2c_1.n2d_1) {
      tmp = this.o2c_1.l2i();
    } else {
      tmp = this.o2c_1.t2g();
    }
    return tmp;
  };
  StreamingJsonDecoder.prototype.g1w = function (inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(this.o2c_1, this.m2c_1) : AbstractDecoder.prototype.g1w.call(this, inlineDescriptor);
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.t2i_1 = lexer;
    this.u2i_1 = json.w1w();
  }
  JsonDecoderForUnsignedTypes.prototype.w1w = function () {
    return this.u2i_1;
  };
  JsonDecoderForUnsignedTypes.prototype.y1w = function (descriptor) {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  JsonDecoderForUnsignedTypes.prototype.a1w = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.t2i_1;
      var input = tmp0_parseString.u2g();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeInt.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.UInt.toInt' call
        var tmp0_toInt = toUInt(input);
        tmp$ret$0 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UInt' for input '" + input + "'";
          tmp0_parseString.a2g(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.b1w = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.t2i_1;
      var input = tmp0_parseString.u2g();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeLong.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.ULong.toLong' call
        var tmp0_toLong = toULong(input);
        tmp$ret$0 = _ULong___get_data__impl__fggpzb(tmp0_toLong);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'ULong' for input '" + input + "'";
          tmp0_parseString.a2g(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.y1v = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.t2i_1;
      var input = tmp0_parseString.u2g();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeByte.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.UByte.toByte' call
        var tmp0_toByte = toUByte(input);
        tmp$ret$0 = _UByte___get_data__impl__jof9qr(tmp0_toByte);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UByte' for input '" + input + "'";
          tmp0_parseString.a2g(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  JsonDecoderForUnsignedTypes.prototype.z1v = function () {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var tmp0_parseString = this.t2i_1;
      var input = tmp0_parseString.u2g();
      try {
        var tmp$ret$1;
        // Inline function 'kotlinx.serialization.json.internal.JsonDecoderForUnsignedTypes.decodeShort.<anonymous>' call
        var tmp$ret$0;
        // Inline function 'kotlin.UShort.toShort' call
        var tmp0_toShort = toUShort(input);
        tmp$ret$0 = _UShort___get_data__impl__g0245(tmp0_toShort);
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var tmp = "Failed to parse type 'UShort' for input '" + input + "'";
          tmp0_parseString.a2g(tmp, 0, null, 6, null);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  function get_unsignedNumberDescriptors() {
    init_properties_StreamingJsonEncoder_kt_qkpchk();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, Object.create(StreamingJsonEncoder.prototype));
  }
  function encodeTypeInfo($this, descriptor) {
    $this.d2c_1.e2f();
    $this.l1x(ensureNotNull($this.k2c_1));
    $this.d2c_1.g2f(get_COLON());
    $this.d2c_1.f2f();
    $this.l1x(descriptor.t1u());
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.d2c_1 = composer;
    this.e2c_1 = json;
    this.f2c_1 = mode;
    this.g2c_1 = modeReuseCache;
    this.h2c_1 = this.e2c_1.w1w();
    this.i2c_1 = this.e2c_1.a2c_1;
    this.j2c_1 = false;
    this.k2c_1 = null;
    var i = this.f2c_1.v3_1;
    if (!(this.g2c_1 == null)) {
      if (!(this.g2c_1[i] === null) ? true : !(this.g2c_1[i] === this)) {
        this.g2c_1[i] = this;
      }
    }
  }
  StreamingJsonEncoder.prototype.x2d = function () {
    return this.e2c_1;
  };
  StreamingJsonEncoder.prototype.w1w = function () {
    return this.h2c_1;
  };
  StreamingJsonEncoder.prototype.x1x = function (serializer, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      var tmp;
      if (!(serializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.x2d().a2c_1.t2d_1;
      }
      if (tmp) {
        serializer.p1t(this, value);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
      var baseClassDiscriminator = classDiscriminator(serializer.o1t(), this.x2d());
      var actualSerializer = findPolymorphicSerializer(casted, this, isObject(value) ? value : THROW_CCE());
      validateIfSealed$accessor$1ad0flx(casted, actualSerializer, baseClassDiscriminator);
      checkKind(actualSerializer.o1t().x1u());
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.encodeSerializableValue.<anonymous>' call
      this.k2c_1 = baseClassDiscriminator;
      actualSerializer.p1t(this, value);
    }
  };
  StreamingJsonEncoder.prototype.j1w = function (descriptor) {
    var newMode = switchMode(this.e2c_1, descriptor);
    if (!equals(new Char(newMode.o2i_1), new Char(get_INVALID()))) {
      this.d2c_1.g2f(newMode.o2i_1);
      this.d2c_1.c2f();
    }
    if (!(this.k2c_1 == null)) {
      encodeTypeInfo(this, descriptor);
      this.k2c_1 = null;
    }
    if (this.f2c_1.equals(newMode)) {
      return this;
    }
    var tmp0_safe_receiver = this.g2c_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver[newMode.v3_1];
    return tmp1_elvis_lhs == null ? new StreamingJsonEncoder(this.d2c_1, this.e2c_1, newMode, this.g2c_1) : tmp1_elvis_lhs;
  };
  StreamingJsonEncoder.prototype.k1w = function (descriptor) {
    if (!equals(new Char(this.f2c_1.p2i_1), new Char(get_INVALID()))) {
      this.d2c_1.d2f();
      this.d2c_1.e2f();
      this.d2c_1.g2f(this.f2c_1.p2i_1);
    }
  };
  StreamingJsonEncoder.prototype.a1x = function (descriptor, index) {
    var tmp0_subject = this.f2c_1;
    var tmp0 = tmp0_subject.v3_1;
    switch (tmp0) {
      case 1:
        if (!this.d2c_1.b2f_1) {
          this.d2c_1.g2f(get_COMMA());
        }

        this.d2c_1.e2f();
        ;
        break;
      case 2:
        if (!this.d2c_1.b2f_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.d2c_1.g2f(get_COMMA());
            this.d2c_1.e2f();
            tmp_0 = true;
          } else {
            this.d2c_1.g2f(get_COLON());
            this.d2c_1.f2f();
            tmp_0 = false;
          }
          tmp.j2c_1 = tmp_0;
        } else {
          this.j2c_1 = true;
          this.d2c_1.e2f();
        }

        break;
      case 3:
        if (index === 0)
          this.j2c_1 = true;
        if (index === 1) {
          this.d2c_1.g2f(get_COMMA());
          this.d2c_1.f2f();
          this.j2c_1 = false;
        }

        break;
      default:
        if (!this.d2c_1.b2f_1) {
          this.d2c_1.g2f(get_COMMA());
        }

        this.d2c_1.e2f();
        this.l1x(descriptor.b1v(index));
        this.d2c_1.g2f(get_COLON());
        this.d2c_1.f2f();
        ;
        break;
    }
    return true;
  };
  StreamingJsonEncoder.prototype.m1x = function (inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new StreamingJsonEncoder(new ComposerForUnsignedNumbers(this.d2c_1.a2f_1), this.e2c_1, this.f2c_1, null) : AbstractEncoder.prototype.m1x.call(this, inlineDescriptor);
  };
  StreamingJsonEncoder.prototype.c1x = function () {
    this.d2c_1.h2f(get_NULL());
  };
  StreamingJsonEncoder.prototype.d1x = function (value) {
    if (this.j2c_1) {
      this.l1x(value.toString());
    } else {
      this.d2c_1.p2f(value);
    }
  };
  StreamingJsonEncoder.prototype.e1x = function (value) {
    if (this.j2c_1) {
      this.l1x(value.toString());
    } else {
      this.d2c_1.l2f(value);
    }
  };
  StreamingJsonEncoder.prototype.f1x = function (value) {
    if (this.j2c_1) {
      this.l1x(value.toString());
    } else {
      this.d2c_1.m2f(value);
    }
  };
  StreamingJsonEncoder.prototype.g1x = function (value) {
    if (this.j2c_1) {
      this.l1x(value.toString());
    } else {
      this.d2c_1.n2f(value);
    }
  };
  StreamingJsonEncoder.prototype.h1x = function (value) {
    if (this.j2c_1) {
      this.l1x(value.toString());
    } else {
      this.d2c_1.o2f(value);
    }
  };
  StreamingJsonEncoder.prototype.i1x = function (value) {
    if (this.j2c_1) {
      this.l1x(value.toString());
    } else {
      this.d2c_1.j2f(value);
    }
    if (!this.i2c_1.v2d_1 ? !isFinite(value) : false) {
      throw InvalidFloatingPointEncoded(value, this.d2c_1.a2f_1.toString());
    }
  };
  StreamingJsonEncoder.prototype.j1x = function (value) {
    if (this.j2c_1) {
      this.l1x(value.toString());
    } else {
      this.d2c_1.k2f(value);
    }
    if (!this.i2c_1.v2d_1 ? !isFinite_0(value) : false) {
      throw InvalidFloatingPointEncoded(value, this.d2c_1.a2f_1.toString());
    }
  };
  StreamingJsonEncoder.prototype.k1x = function (value) {
    this.l1x(toString_0(value));
  };
  StreamingJsonEncoder.prototype.l1x = function (value) {
    return this.d2c_1.q2f(value);
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    init_properties_StreamingJsonEncoder_kt_qkpchk();
    return _this__u8e3s4.w1u() ? get_unsignedNumberDescriptors().y(_this__u8e3s4) : false;
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function init_properties_StreamingJsonEncoder_kt_qkpchk() {
    if (properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
    } else {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_1()).o1t(), serializer_0(Companion_getInstance()).o1t(), serializer_2(Companion_getInstance_2()).o1t(), serializer_3(Companion_getInstance_3()).o1t()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    init_properties_StringOps_kt_g67jhv();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    init_properties_StringOps_kt_g67jhv();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = 48;
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 97;
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    init_properties_StringOps_kt_g67jhv();
    _this__u8e3s4.b5(get_STRING());
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        var tmp0__get_code__88qj9g = charSequenceGet(value, i);
        tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
        var c = tmp$ret$0;
        if (c < get_ESCAPE_STRINGS().length ? !(get_ESCAPE_STRINGS()[c] == null) : false) {
          _this__u8e3s4.tc(value, lastPos, i);
          _this__u8e3s4.wc(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0)) {
      _this__u8e3s4.tc(value, lastPos, value.length);
    } else {
      _this__u8e3s4.wc(value);
    }
    _this__u8e3s4.b5(get_STRING());
  }
  function toBooleanStrictOrNull(_this__u8e3s4) {
    init_properties_StringOps_kt_g67jhv();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function init_properties_StringOps_kt_g67jhv() {
    if (properties_initialized_StringOps_kt_wzaea7) {
    } else {
      properties_initialized_StringOps_kt_wzaea7 = true;
      var tmp$ret$7;
      // Inline function 'kotlin.apply' call
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(93), null);
      var tmp0_apply = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_STRINGS.<anonymous>' call
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          tmp0_apply[c] = '\\u' + new Char(c1) + new Char(c2) + new Char(c3) + new Char(c4);
        }
         while (inductionVariable <= 31);
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 34;
      tmp0_apply[tmp$ret$1] = '\\"';
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = 92;
      tmp0_apply[tmp$ret$2] = '\\\\';
      var tmp$ret$3;
      // Inline function 'kotlin.code' call
      tmp$ret$3 = 9;
      tmp0_apply[tmp$ret$3] = '\\t';
      var tmp$ret$4;
      // Inline function 'kotlin.code' call
      tmp$ret$4 = 8;
      tmp0_apply[tmp$ret$4] = '\\b';
      var tmp$ret$5;
      // Inline function 'kotlin.code' call
      tmp$ret$5 = 10;
      tmp0_apply[tmp$ret$5] = '\\n';
      var tmp$ret$6;
      // Inline function 'kotlin.code' call
      tmp$ret$6 = 13;
      tmp0_apply[tmp$ret$6] = '\\r';
      tmp0_apply[12] = '\\f';
      tmp$ret$7 = tmp0_apply;
      ESCAPE_STRINGS = tmp$ret$7;
      var tmp$ret$13;
      // Inline function 'kotlin.apply' call
      var tmp0_apply_0 = new Int8Array(93);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.json.internal.ESCAPE_MARKERS.<anonymous>' call
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          tmp0_apply_0[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      var tmp$ret$0_0;
      // Inline function 'kotlin.code' call
      tmp$ret$0_0 = 34;
      var tmp = tmp$ret$0_0;
      var tmp$ret$1_0;
      // Inline function 'kotlin.code' call
      tmp$ret$1_0 = 34;
      tmp0_apply_0[tmp] = toByte(tmp$ret$1_0);
      var tmp$ret$2_0;
      // Inline function 'kotlin.code' call
      tmp$ret$2_0 = 92;
      var tmp_0 = tmp$ret$2_0;
      var tmp$ret$3_0;
      // Inline function 'kotlin.code' call
      tmp$ret$3_0 = 92;
      tmp0_apply_0[tmp_0] = toByte(tmp$ret$3_0);
      var tmp$ret$4_0;
      // Inline function 'kotlin.code' call
      tmp$ret$4_0 = 9;
      var tmp_1 = tmp$ret$4_0;
      var tmp$ret$5_0;
      // Inline function 'kotlin.code' call
      tmp$ret$5_0 = 116;
      tmp0_apply_0[tmp_1] = toByte(tmp$ret$5_0);
      var tmp$ret$6_0;
      // Inline function 'kotlin.code' call
      tmp$ret$6_0 = 8;
      var tmp_2 = tmp$ret$6_0;
      var tmp$ret$7_0;
      // Inline function 'kotlin.code' call
      tmp$ret$7_0 = 98;
      tmp0_apply_0[tmp_2] = toByte(tmp$ret$7_0);
      var tmp$ret$8;
      // Inline function 'kotlin.code' call
      tmp$ret$8 = 10;
      var tmp_3 = tmp$ret$8;
      var tmp$ret$9;
      // Inline function 'kotlin.code' call
      tmp$ret$9 = 110;
      tmp0_apply_0[tmp_3] = toByte(tmp$ret$9);
      var tmp$ret$10;
      // Inline function 'kotlin.code' call
      tmp$ret$10 = 13;
      var tmp_4 = tmp$ret$10;
      var tmp$ret$11;
      // Inline function 'kotlin.code' call
      tmp$ret$11 = 114;
      tmp0_apply_0[tmp_4] = toByte(tmp$ret$11);
      var tmp$ret$12;
      // Inline function 'kotlin.code' call
      tmp$ret$12 = 102;
      tmp0_apply_0[12] = toByte(tmp$ret$12);
      tmp$ret$13 = tmp0_apply_0;
      ESCAPE_MARKERS = tmp$ret$13;
    }
  }
  function currentObject($this) {
    var tmp0_safe_receiver = $this.s27();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.currentObject.<anonymous>' call
      tmp$ret$0 = $this.a2j(tmp0_safe_receiver);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? $this.o() : tmp1_elvis_lhs;
  }
  function unparsedPrimitive($this, primitive) {
    throw JsonDecodingException_0(-1, "Failed to parse '" + primitive + "'", toString(currentObject($this)));
  }
  function asLiteral(_this__u8e3s4, $this, type) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonLiteral ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_1(-1, "Unexpected 'null' when " + type + ' was expected');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbstractJsonTreeDecoder(json, value) {
    NamedValueDecoder.call(this);
    this.x2i_1 = json;
    this.y2i_1 = value;
    this.z2i_1 = this.x2d().a2c_1;
  }
  AbstractJsonTreeDecoder.prototype.x2d = function () {
    return this.x2i_1;
  };
  AbstractJsonTreeDecoder.prototype.o = function () {
    return this.y2i_1;
  };
  AbstractJsonTreeDecoder.prototype.w1w = function () {
    return this.x2d().w1w();
  };
  AbstractJsonTreeDecoder.prototype.y2d = function () {
    return currentObject(this);
  };
  AbstractJsonTreeDecoder.prototype.i1w = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  AbstractJsonTreeDecoder.prototype.t27 = function (parentName, childName) {
    return childName;
  };
  AbstractJsonTreeDecoder.prototype.j1w = function (descriptor) {
    var currentObject_0 = currentObject(this);
    var tmp0_subject = descriptor.x1u();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.x2d();
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      if (!(currentObject_0 instanceof JsonArray)) {
        throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.t1u() + ', but had ' + getKClassFromExpression(currentObject_0));
      }
      tmp$ret$0 = currentObject_0;
      tmp = new JsonTreeListDecoder(tmp_1, tmp$ret$0);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        var tmp$ret$5;
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var tmp0_selectMapMode = this.x2d();
        var keyDescriptor = carrierDescriptor(descriptor.z1u(0), tmp0_selectMapMode.w1w());
        var keyKind = keyDescriptor.x1u();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
          var tmp_4 = this.x2d();
          var tmp$ret$1;
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          if (!(currentObject_0 instanceof JsonObject)) {
            throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.t1u() + ', but had ' + getKClassFromExpression(currentObject_0));
          }
          tmp$ret$1 = currentObject_0;
          tmp$ret$2 = new JsonTreeMapDecoder(tmp_4, tmp$ret$1);
          tmp_2 = tmp$ret$2;
        } else {
          if (tmp0_selectMapMode.a2c_1.o2d_1) {
            var tmp$ret$4;
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.beginStructure.<anonymous>' call
            var tmp_5 = this.x2d();
            var tmp$ret$3;
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            if (!(currentObject_0 instanceof JsonArray)) {
              throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.t1u() + ', but had ' + getKClassFromExpression(currentObject_0));
            }
            tmp$ret$3 = currentObject_0;
            tmp$ret$4 = new JsonTreeListDecoder(tmp_5, tmp$ret$3);
            tmp_2 = tmp$ret$4;
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp$ret$5 = tmp_2;
        tmp = tmp$ret$5;
      } else {
        var tmp_6 = this.x2d();
        var tmp$ret$6;
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        if (!(currentObject_0 instanceof JsonObject)) {
          throw JsonDecodingException_1(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.t1u() + ', but had ' + getKClassFromExpression(currentObject_0));
        }
        tmp$ret$6 = currentObject_0;
        var tmp_7 = tmp$ret$6;
        tmp = JsonTreeDecoder_init_$Create$(tmp_6, tmp_7, null, null, 12, null);
      }
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.k1w = function (descriptor) {
  };
  AbstractJsonTreeDecoder.prototype.v1v = function () {
    var tmp = currentObject(this);
    return !(tmp instanceof JsonNull);
  };
  AbstractJsonTreeDecoder.prototype.b2j = function (tag) {
    var currentElement = this.a2j(tag);
    var tmp0_elvis_lhs = currentElement instanceof JsonPrimitive ? currentElement : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, toString(currentObject(this)));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  AbstractJsonTreeDecoder.prototype.c2j = function (tag) {
    return !(this.a2j(tag) === JsonNull_getInstance());
  };
  AbstractJsonTreeDecoder.prototype.v27 = function (tag) {
    return this.c2j((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.d2j = function (tag) {
    var value = this.b2j(tag);
    if (!this.x2d().a2c_1.n2d_1) {
      var literal = asLiteral(value, this, 'boolean');
      if (literal.e2e_1)
        throw JsonDecodingException_0(-1, "Boolean literal for key '" + tag + "' should be unquoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedBoolean.<anonymous>' call
        var tmp0_elvis_lhs = get_booleanOrNull(value);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw IllegalArgumentException_init_$Create$_0();
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp;
        var tmp0_elvis_lhs_0 = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          unparsedPrimitive(this, 'boolean');
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'boolean');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.w27 = function (tag) {
    return this.d2j((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.e2j = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.b2j(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedByte.<anonymous>' call
        var result = get_int(tmp0_primitive);
        var tmp;
        var containsLower = ByteCompanionObject_getInstance().MIN_VALUE;
        if (result <= ByteCompanionObject_getInstance().MAX_VALUE ? containsLower <= result : false) {
          tmp = toByte(result);
        } else {
          tmp = null;
        }
        tmp$ret$0 = tmp;
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'byte');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'byte');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.x27 = function (tag) {
    return this.e2j((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.f2j = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.b2j(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedShort.<anonymous>' call
        var result = get_int(tmp0_primitive);
        var tmp;
        var containsLower = ShortCompanionObject_getInstance().MIN_VALUE;
        if (result <= ShortCompanionObject_getInstance().MAX_VALUE ? containsLower <= result : false) {
          tmp = toShort(result);
        } else {
          tmp = null;
        }
        tmp$ret$0 = tmp;
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'short');
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp_0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'short');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.y27 = function (tag) {
    return this.f2j((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.g2j = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.b2j(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedInt.<anonymous>' call
        tmp$ret$0 = get_int(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'int');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'int');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.z27 = function (tag) {
    return this.g2j((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.h2j = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.b2j(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedLong.<anonymous>' call
        tmp$ret$0 = get_long(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'long');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'long');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.a28 = function (tag) {
    return this.h2j((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.i2j = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.b2j(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedFloat.<anonymous>' call
        tmp$ret$0 = get_float(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'float');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'float');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.x2d().a2c_1.v2d_1;
    if (specialFp ? true : isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.b28 = function (tag) {
    return this.i2j((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.j2j = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.b2j(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedDouble.<anonymous>' call
        tmp$ret$0 = get_double(tmp0_primitive);
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, 'double');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'double');
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.x2d().a2c_1.v2d_1;
    if (specialFp ? true : isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(currentObject(this)));
  };
  AbstractJsonTreeDecoder.prototype.c28 = function (tag) {
    return this.j2j((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.k2j = function (tag) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.primitive' call
      var tmp0_primitive = this.b2j(tag);
      try {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.decodeTaggedChar.<anonymous>' call
        tmp$ret$0 = single(tmp0_primitive.z2d());
        var tmp0_elvis_lhs = tmp$ret$0;
        var tmp;
        var tmp_0 = tmp0_elvis_lhs;
        if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
          unparsedPrimitive(this, 'char');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        tmp$ret$1 = tmp;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          unparsedPrimitive(this, 'char');
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$1;
  };
  AbstractJsonTreeDecoder.prototype.d28 = function (tag) {
    return this.k2j((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.l2j = function (tag) {
    var value = this.b2j(tag);
    if (!this.x2d().a2c_1.n2d_1) {
      var literal = asLiteral(value, this, 'string');
      if (!literal.e2e_1)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted.\n" + get_lenientHint(), toString(currentObject(this)));
    }
    if (value instanceof JsonNull)
      throw JsonDecodingException_0(-1, "Unexpected 'null' value instead of string literal", toString(currentObject(this)));
    return value.z2d();
  };
  AbstractJsonTreeDecoder.prototype.e28 = function (tag) {
    return this.l2j((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  AbstractJsonTreeDecoder.prototype.m2j = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? new JsonDecoderForUnsignedTypes(new StringJsonLexer(this.b2j(tag).z2d()), this.x2d()) : NamedValueDecoder.prototype.f28.call(this, tag, inlineDescriptor);
  };
  AbstractJsonTreeDecoder.prototype.f28 = function (tag, inlineDescriptor) {
    return this.m2j((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  function JsonTreeDecoder_init_$Init$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      polyDiscriminator = null;
    if (!(($mask0 & 8) === 0))
      polyDescriptor = null;
    JsonTreeDecoder.call($this, json, value, polyDiscriminator, polyDescriptor);
    return $this;
  }
  function JsonTreeDecoder_init_$Create$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker) {
    return JsonTreeDecoder_init_$Init$(json, value, polyDiscriminator, polyDescriptor, $mask0, $marker, Object.create(JsonTreeDecoder.prototype));
  }
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var tmp0_tryCoerceValue = $this.x2d();
      var tmp1_tryCoerceValue = descriptor.z1u(index);
      var tmp;
      if (!tmp1_tryCoerceValue.m1u()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_0 = $this.a2j(tag);
        tmp$ret$0 = tmp_0 instanceof JsonNull;
        tmp = tmp$ret$0;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_1;
      }
      if (equals(tmp1_tryCoerceValue.x1u(), ENUM_getInstance())) {
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.coerceInputValue.<anonymous>' call
        var tmp_1 = $this.a2j(tag);
        var tmp0_safe_receiver = tmp_1 instanceof JsonPrimitive ? tmp_1 : null;
        tmp$ret$2 = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        var tmp0_elvis_lhs = tmp$ret$2;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_1;
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_2;
        var enumIndex = getJsonNameIndex(tmp1_tryCoerceValue, tmp0_tryCoerceValue, enumValue);
        Companion_getInstance_0();
        if (enumIndex === -3) {
          var tmp$ret$3;
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue.<anonymous>' call
          tmp$ret$3 = Unit_getInstance();
          tmp$ret$1 = true;
          break $l$block_1;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function absenceIsNull($this, descriptor, index) {
    $this.w2j_1 = (!$this.x2d().a2c_1.q2d_1 ? !descriptor.c1v(index) : false) ? descriptor.z1u(index).m1u() : false;
    return $this.w2j_1;
  }
  function buildAlternativeNamesMap$ref_0($boundThis) {
    var l = function () {
      return buildAlternativeNamesMap($boundThis);
    };
    l.callableName = 'buildAlternativeNamesMap';
    return l;
  }
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.s2j_1 = value;
    this.t2j_1 = polyDiscriminator;
    this.u2j_1 = polyDescriptor;
    this.v2j_1 = 0;
    this.w2j_1 = false;
  }
  JsonTreeDecoder.prototype.o = function () {
    return this.s2j_1;
  };
  JsonTreeDecoder.prototype.y1w = function (descriptor) {
    while (this.v2j_1 < descriptor.v1u()) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.v2j_1;
      tmp0_this.v2j_1 = tmp1 + 1 | 0;
      var name = this.n27(descriptor, tmp1);
      var index = this.v2j_1 - 1 | 0;
      this.w2j_1 = false;
      var tmp;
      var tmp_0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.contains' call
      var tmp0_contains = this.o();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.containsKey' call
      tmp$ret$0 = (isInterface(tmp0_contains, Map) ? tmp0_contains : THROW_CCE()).p1(name);
      tmp$ret$1 = tmp$ret$0;
      if (tmp$ret$1) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.z2i_1.s2d_1 ? true : !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeDecoder.prototype.v1v = function () {
    return !this.w2j_1 ? AbstractJsonTreeDecoder.prototype.v1v.call(this) : false;
  };
  JsonTreeDecoder.prototype.o27 = function (desc, index) {
    var mainName = desc.b1v(index);
    if (!this.z2i_1.w2d_1)
      return mainName;
    if (this.o().w1().y(mainName))
      return mainName;
    var tmp = get_schemaCache(this.x2d());
    var tmp_0 = get_JsonAlternativeNamesKey();
    var alternativeNamesMap = tmp.c2g(desc, tmp_0, buildAlternativeNamesMap$ref_0(desc));
    var tmp$ret$2;
    // Inline function 'kotlin.collections.find' call
    var tmp0_find = this.o().w1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = tmp0_find.j();
      while (tmp0_iterator.k()) {
        var element = tmp0_iterator.l();
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.json.internal.JsonTreeDecoder.elementName.<anonymous>' call
        tmp$ret$0 = alternativeNamesMap.v1(element) === index;
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    tmp$ret$2 = tmp$ret$1;
    var nameInObject = tmp$ret$2;
    var tmp0_elvis_lhs = nameInObject;
    return tmp0_elvis_lhs == null ? mainName : tmp0_elvis_lhs;
  };
  JsonTreeDecoder.prototype.a2j = function (tag) {
    return getValue(this.o(), tag);
  };
  JsonTreeDecoder.prototype.j1w = function (descriptor) {
    if (descriptor === this.u2j_1)
      return this;
    return AbstractJsonTreeDecoder.prototype.j1w.call(this, descriptor);
  };
  JsonTreeDecoder.prototype.k1w = function (descriptor) {
    var tmp;
    if (this.z2i_1.m2d_1) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.x1u();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_getInstance();
    var tmp_1;
    if (!this.z2i_1.w2d_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp$ret$0;
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = get_schemaCache(this.x2d()).d2i(descriptor, get_JsonAlternativeNamesKey());
      var tmp0_orEmpty = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w1();
      var tmp0_elvis_lhs = tmp0_orEmpty;
      tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var tmp1_iterator = this.o().w1().j();
    while (tmp1_iterator.k()) {
      var key = tmp1_iterator.l();
      if (!names.y(key) ? !(key === this.t2j_1) : false) {
        throw UnknownKeyException(key, this.o().toString());
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.c2k_1 = value;
    this.d2k_1 = this.c2k_1.c();
    this.e2k_1 = -1;
  }
  JsonTreeListDecoder.prototype.o = function () {
    return this.c2k_1;
  };
  JsonTreeListDecoder.prototype.o27 = function (desc, index) {
    return index.toString();
  };
  JsonTreeListDecoder.prototype.a2j = function (tag) {
    return this.c2k_1.h(toInt(tag));
  };
  JsonTreeListDecoder.prototype.y1w = function (descriptor) {
    while (this.e2k_1 < (this.d2k_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.e2k_1;
      tmp0_this.e2k_1 = tmp1 + 1 | 0;
      return this.e2k_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder_init_$Init$(json, value, null, null, 12, null, this);
    this.p2k_1 = value;
    this.q2k_1 = toList(this.p2k_1.w1());
    this.r2k_1 = imul(this.q2k_1.c(), 2);
    this.s2k_1 = -1;
  }
  JsonTreeMapDecoder.prototype.o = function () {
    return this.p2k_1;
  };
  JsonTreeMapDecoder.prototype.o27 = function (desc, index) {
    var i = index / 2 | 0;
    return this.q2k_1.h(i);
  };
  JsonTreeMapDecoder.prototype.y1w = function (descriptor) {
    while (this.s2k_1 < (this.r2k_1 - 1 | 0)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.s2k_1;
      tmp0_this.s2k_1 = tmp1 + 1 | 0;
      return this.s2k_1;
    }
    Companion_getInstance_0();
    return -1;
  };
  JsonTreeMapDecoder.prototype.a2j = function (tag) {
    return (this.s2k_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.p2k_1, tag);
  };
  JsonTreeMapDecoder.prototype.k1w = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.o1t())).i1w(deserializer);
  }
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_getInstance();
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_LIST_instance = new WriteMode('LIST', 1, get_BEGIN_LIST(), get_END_LIST());
    WriteMode_MAP_instance = new WriteMode('MAP', 2, get_BEGIN_OBJ(), get_END_OBJ());
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, get_BEGIN_LIST(), get_END_LIST());
  }
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.o2i_1 = begin;
    this.p2i_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.x1u();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          var tmp$ret$2;
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.z1u(0), _this__u8e3s4.w1w());
          var keyKind = keyDescriptor.x1u();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            var tmp$ret$0;
            // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
            tmp$ret$0 = WriteMode_MAP_getInstance();
            tmp_0 = tmp$ret$0;
          } else {
            if (_this__u8e3s4.a2c_1.o2d_1) {
              var tmp$ret$1;
              // Inline function 'kotlinx.serialization.json.internal.switchMode.<anonymous>' call
              tmp$ret$1 = WriteMode_LIST_getInstance();
              tmp_0 = tmp$ret$1;
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp$ret$2 = tmp_0;
          tmp = tmp$ret$2;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.x1u(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.w1u()) {
      tmp = carrierDescriptor(_this__u8e3s4.z1u(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function get_COLON() {
    return COLON;
  }
  var COLON;
  function get_INVALID() {
    return INVALID;
  }
  var INVALID;
  function get_COMMA() {
    return COMMA;
  }
  var COMMA;
  function get_NULL() {
    return NULL;
  }
  var NULL;
  function get_BEGIN_OBJ() {
    return BEGIN_OBJ;
  }
  var BEGIN_OBJ;
  function get_END_OBJ() {
    return END_OBJ;
  }
  var END_OBJ;
  function get_BEGIN_LIST() {
    return BEGIN_LIST;
  }
  var BEGIN_LIST;
  function get_END_LIST() {
    return END_LIST;
  }
  var END_LIST;
  function appendEscape($this, lastPosition, current) {
    $this.t2k(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.t2k(lastPosition, currentPosition);
    var result = $this.w2c_1.toString();
    $this.w2c_1.xc(0);
    return result;
  }
  function takePeeked($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = ensureNotNull($this.v2c_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.takePeeked.<anonymous>' call
    $this.v2c_1 = null;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function wasUnquotedString($this) {
    return !equals(new Char(charSequenceGet($this.u2k(), $this.t2c_1 - 1 | 0)), new Char(_Char___init__impl__6a9atx(34)));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.v2k(currentPosition);
    if (currentPosition === -1) {
      $this.a2g('Expected escape sequence to continue, got EOF', 0, null, 6, null);
    }
    var tmp = $this.u2k();
    var tmp0 = currentPosition;
    currentPosition = tmp0 + 1 | 0;
    var currentChar = charSequenceGet(tmp, tmp0);
    if (equals(new Char(currentChar), new Char(_Char___init__impl__6a9atx(117)))) {
      return appendHex($this, $this.u2k(), currentPosition);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(0)))) {
      var tmp_0 = "Invalid escaped char '" + new Char(currentChar) + "'";
      $this.a2g(tmp_0, 0, null, 6, null);
    }
    $this.w2c_1.b5(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.t2c_1 = startPos;
      $this.w2k();
      if (($this.t2c_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.a2g('Unexpected EOF during unicode escape', 0, null, 6, null);
      }
      return appendHex($this, source, $this.t2c_1);
    }
    $this.w2c_1.b5(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(character);
      var tmp_0 = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 48;
      tmp = tmp_0 - tmp$ret$1 | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = Char__toInt_impl_vasixd(character);
      var tmp_1 = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlin.code' call
      tmp$ret$3 = 97;
      tmp = (tmp_1 - tmp$ret$3 | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      var tmp$ret$4;
      // Inline function 'kotlin.code' call
      tmp$ret$4 = Char__toInt_impl_vasixd(character);
      var tmp_2 = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'kotlin.code' call
      tmp$ret$5 = 65;
      tmp = (tmp_2 - tmp$ret$5 | 0) + 10 | 0;
    } else {
      var tmp_3 = "Invalid toHexChar char '" + new Char(character) + "' in unicode escape";
      $this.a2g(tmp_3, 0, null, 6, null);
    }
    return tmp;
  }
  function consumeBoolean($this, start) {
    var current = $this.v2k(start);
    if (current >= charSequenceLength($this.u2k()) ? true : current === -1) {
      $this.a2g('EOF', 0, null, 6, null);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    var tmp = $this.u2k();
    var tmp0 = current;
    current = tmp0 + 1 | 0;
    var tmp0__get_code__88qj9g = charSequenceGet(tmp, tmp0);
    tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
    var tmp1_subject = tmp$ret$0 | 32;
    var tmp_0;
    var tmp$ret$1;
    // Inline function 'kotlin.code' call
    tmp$ret$1 = 116;
    if (tmp1_subject === tmp$ret$1) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = 102;
      if (tmp1_subject === tmp$ret$2) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        var tmp_1 = "Expected valid boolean literal prefix, but had '" + $this.u2g() + "'";
        $this.a2g(tmp_1, 0, null, 6, null);
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.u2k()) - current | 0) < literalSuffix.length) {
      $this.a2g('Unexpected end of boolean literal', 0, null, 6, null);
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.u2k(), current + i | 0);
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(expected);
        var tmp = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'kotlin.code' call
        tmp$ret$1 = Char__toInt_impl_vasixd(actual);
        if (!(tmp === (tmp$ret$1 | 32))) {
          var tmp_0 = "Expected valid boolean literal prefix, but had '" + $this.u2g() + "'";
          $this.a2g(tmp_0, 0, null, 6, null);
        }
      }
       while (inductionVariable <= last);
    $this.t2c_1 = current + literalSuffix.length | 0;
  }
  function AbstractJsonLexer() {
    this.t2c_1 = 0;
    this.u2c_1 = new JsonPath();
    this.v2c_1 = null;
    this.w2c_1 = StringBuilder_init_$Create$();
  }
  AbstractJsonLexer.prototype.w2k = function () {
  };
  AbstractJsonLexer.prototype.x2k = function (c) {
    var tmp0_subject = c;
    return (((equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(125))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(93)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(58)))) ? true : equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44)))) ? false : true;
  };
  AbstractJsonLexer.prototype.x2c = function () {
    var nextToken = this.w2g();
    if (!(nextToken === 10)) {
      var tmp = 'Expected EOF after parsing, but had ' + new Char(charSequenceGet(this.u2k(), this.t2c_1 - 1 | 0)) + ' instead';
      this.a2g(tmp, 0, null, 6, null);
    }
  };
  AbstractJsonLexer.prototype.q2g = function (expected) {
    var token = this.w2g();
    if (!(token === expected)) {
      this.y2k(expected);
    }
    return token;
  };
  AbstractJsonLexer.prototype.e2i = function (expected) {
    this.w2k();
    var source = this.u2k();
    var cpos = this.t2c_1;
    $l$loop_0: while (true) {
      cpos = this.v2k(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var tmp0 = cpos;
      cpos = tmp0 + 1 | 0;
      var c = charSequenceGet(source, tmp0);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop_0;
      this.t2c_1 = cpos;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.z2k(expected);
    }
    this.t2c_1 = cpos;
    this.z2k(expected);
  };
  AbstractJsonLexer.prototype.z2k = function (expected) {
    var tmp0_this = this;
    tmp0_this.t2c_1 = tmp0_this.t2c_1 - 1 | 0;
    if ((this.t2c_1 >= 0 ? equals(new Char(expected), new Char(_Char___init__impl__6a9atx(34))) : false) ? this.u2g() === 'null' : false) {
      this.a2l("Expected string literal but 'null' literal was found", this.t2c_1 - 4 | 0, "Use 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.");
    }
    this.y2k(charToTokenClass(expected));
  };
  AbstractJsonLexer.prototype.y2k = function (expectedToken) {
    var tmp0_subject = expectedToken;
    var expected = tmp0_subject === 1 ? "quotation mark '\"'" : tmp0_subject === 4 ? "comma ','" : tmp0_subject === 5 ? "semicolon ':'" : tmp0_subject === 6 ? "start of the object '{'" : tmp0_subject === 7 ? "end of the object '}'" : tmp0_subject === 8 ? "start of the array '['" : tmp0_subject === 9 ? "end of the array ']'" : 'valid token';
    var s = (this.t2c_1 === charSequenceLength(this.u2k()) ? true : this.t2c_1 <= 0) ? 'EOF' : toString_0(charSequenceGet(this.u2k(), this.t2c_1 - 1 | 0));
    var tmp = 'Expected ' + expected + ", but had '" + s + "' instead";
    var tmp_0 = this.t2c_1 - 1 | 0;
    this.a2g(tmp, tmp_0, null, 4, null);
  };
  AbstractJsonLexer.prototype.r2g = function () {
    var source = this.u2k();
    var cpos = this.t2c_1;
    $l$loop_0: while (true) {
      cpos = this.v2k(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (((equals(new Char(ch), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(ch), new Char(_Char___init__impl__6a9atx(9)))) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.t2c_1 = cpos;
      return charToTokenClass(ch);
    }
    this.t2c_1 = cpos;
    return 10;
  };
  AbstractJsonLexer.prototype.g2i = function () {
    var current = this.b2l();
    current = this.v2k(current);
    var len = charSequenceLength(this.u2k()) - current | 0;
    if (len < 4 ? true : current === -1)
      return true;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(new Char(charSequenceGet('null', i)), new Char(charSequenceGet(this.u2k(), current + i | 0))))
          return true;
      }
       while (inductionVariable <= 3);
    if (len > 4 ? charToTokenClass(charSequenceGet(this.u2k(), current + 4 | 0)) === 0 : false)
      return true;
    this.t2c_1 = current + 4 | 0;
    return false;
  };
  AbstractJsonLexer.prototype.b2l = function () {
    var current = this.t2c_1;
    $l$loop_0: while (true) {
      current = this.v2k(current);
      if (current === -1)
        break $l$loop_0;
      var c = charSequenceGet(this.u2k(), current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    this.t2c_1 = current;
    return current;
  };
  AbstractJsonLexer.prototype.h2i = function (isLenient) {
    var token = this.r2g();
    var tmp;
    if (isLenient) {
      if (!(token === 1) ? !(token === 0) : false)
        return null;
      tmp = this.u2g();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.t2g();
    }
    var string = tmp;
    this.v2c_1 = string;
    return string;
  };
  AbstractJsonLexer.prototype.c2l = function (startPos, endPos) {
    var tmp$ret$0;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.u2k();
    tmp$ret$0 = toString(charSequenceSubSequence(tmp0_substring, startPos, endPos));
    return tmp$ret$0;
  };
  AbstractJsonLexer.prototype.t2g = function () {
    if (!(this.v2c_1 == null)) {
      return takePeeked(this);
    }
    return this.k2i();
  };
  AbstractJsonLexer.prototype.consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!equals(new Char(char), new Char(_Char___init__impl__6a9atx(34)))) {
      if (equals(new Char(char), new Char(_Char___init__impl__6a9atx(92)))) {
        usedAppend = true;
        currentPosition = this.v2k(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          var tmp = currentPosition;
          this.a2g('EOF', tmp, null, 4, null);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.t2k(lastPosition, currentPosition);
          currentPosition = this.v2k(currentPosition);
          if (currentPosition === -1) {
            var tmp_0 = currentPosition;
            this.a2g('EOF', tmp_0, null, 4, null);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp_1;
    if (!usedAppend) {
      tmp_1 = this.c2l(lastPosition, currentPosition);
    } else {
      tmp_1 = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp_1;
    this.t2c_1 = currentPosition + 1 | 0;
    return string;
  };
  AbstractJsonLexer.prototype.l2i = function () {
    var result = this.u2g();
    if (result === 'null' ? wasUnquotedString(this) : false) {
      this.a2g("Unexpected 'null' value instead of string literal", 0, null, 6, null);
    }
    return result;
  };
  AbstractJsonLexer.prototype.u2g = function () {
    if (!(this.v2c_1 == null)) {
      return takePeeked(this);
    }
    var current = this.b2l();
    if (current >= charSequenceLength(this.u2k()) ? true : current === -1) {
      var tmp = current;
      this.a2g('EOF', tmp, null, 4, null);
    }
    var token = charToTokenClass(charSequenceGet(this.u2k(), current));
    if (token === 1) {
      return this.t2g();
    }
    if (!(token === 0)) {
      var tmp_0 = 'Expected beginning of the string, but got ' + new Char(charSequenceGet(this.u2k(), current));
      this.a2g(tmp_0, 0, null, 6, null);
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.u2k(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.u2k())) {
        usedAppend = true;
        this.t2k(this.t2c_1, current);
        var eof = this.v2k(current);
        if (eof === -1) {
          this.t2c_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp_1;
    if (!usedAppend) {
      tmp_1 = this.c2l(this.t2c_1, current);
    } else {
      tmp_1 = decodedString(this, this.t2c_1, current);
    }
    var result = tmp_1;
    this.t2c_1 = current;
    return result;
  };
  AbstractJsonLexer.prototype.t2k = function (fromIndex, toIndex) {
    this.w2c_1.tc(this.u2k(), fromIndex, toIndex);
  };
  AbstractJsonLexer.prototype.j2i = function (allowLenientStrings) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var tokenStack = tmp$ret$0;
    var lastToken = this.r2g();
    if (!(lastToken === 8) ? !(lastToken === 6) : false) {
      this.u2g();
      return Unit_getInstance();
    }
    $l$loop: while (true) {
      lastToken = this.r2g();
      if (lastToken === 1) {
        if (allowLenientStrings) {
          this.u2g();
        } else {
          this.k2i();
        }
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 ? true : tmp0_subject === 6) {
        tokenStack.a(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.t2c_1, 'found ] instead of } at path: ' + this.u2c_1, this.u2k());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.t2c_1, 'found } instead of ] at path: ' + this.u2c_1, this.u2k());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.a2g('Unexpected end of input due to malformed JSON during ignoring unknown keys', 0, null, 6, null);
      }
      this.w2g();
      if (tokenStack.c() === 0)
        return Unit_getInstance();
    }
  };
  AbstractJsonLexer.prototype.toString = function () {
    return "JsonReader(source='" + this.u2k() + "', currentPosition=" + this.t2c_1 + ')';
  };
  AbstractJsonLexer.prototype.i2i = function (key) {
    var processed = this.c2l(0, this.t2c_1);
    var lastIndexOf = lastIndexOf$default(processed, key, 0, false, 6, null);
    this.a2l("Encountered an unknown key '" + key + "'", lastIndexOf, "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.");
  };
  AbstractJsonLexer.prototype.a2l = function (message, position, hint) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$0 = charSequenceLength(hint) === 0;
    if (tmp$ret$0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.u2c_1.m2g() + hintMessage, this.u2k());
  };
  AbstractJsonLexer.prototype.a2g = function (message, position, hint, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      position = this.t2c_1;
    if (!(($mask0 & 4) === 0))
      hint = '';
    return this.a2l(message, position, hint);
  };
  AbstractJsonLexer.prototype.s2i = function () {
    var current = this.b2l();
    current = this.v2k(current);
    if (current >= charSequenceLength(this.u2k()) ? true : current === -1) {
      this.a2g('EOF', 0, null, 6, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.u2k(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.u2k())) {
        this.a2g('EOF', 0, null, 6, null);
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var isNegative = false;
    var start = current;
    var hasChars = true;
    $l$loop_0: while (hasChars) {
      var ch = charSequenceGet(this.u2k(), current);
      if (equals(new Char(ch), new Char(_Char___init__impl__6a9atx(45)))) {
        if (!(current === start)) {
          this.a2g("Unexpected symbol '-' in numeric literal", 0, null, 6, null);
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_0;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_0;
      current = current + 1 | 0;
      hasChars = !(current === charSequenceLength(this.u2k()));
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        var tmp_0 = "Unexpected symbol '" + new Char(ch) + "' in numeric literal";
        this.a2g(tmp_0, 0, null, 6, null);
      }
      var tmp$ret$1;
      // Inline function 'kotlin.Long.minus' call
      var tmp$ret$0;
      // Inline function 'kotlin.Long.times' call
      var tmp0_times = accumulator;
      tmp$ret$0 = tmp0_times.e5(new Long(10, 0));
      var tmp1_minus = tmp$ret$0;
      tmp$ret$1 = tmp1_minus.g5(toLong_0(digit));
      accumulator = tmp$ret$1;
      if (accumulator.s(new Long(0, 0)) > 0) {
        this.a2g('Numeric value overflow', 0, null, 6, null);
      }
    }
    if (start === current ? true : isNegative ? start === (current - 1 | 0) : false) {
      this.a2g('Expected numeric literal', 0, null, 6, null);
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.a2g('EOF', 0, null, 6, null);
      }
      if (!equals(new Char(charSequenceGet(this.u2k(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.a2g('Expected closing quotation mark', 0, null, 6, null);
      }
      current = current + 1 | 0;
    }
    this.t2c_1 = current;
    var tmp_1;
    if (isNegative) {
      tmp_1 = accumulator;
    } else {
      var tmp_2 = accumulator;
      Companion_getInstance_4();
      if (!tmp_2.equals(new Long(0, -2147483648))) {
        tmp_1 = accumulator.c5();
      } else {
        this.a2g('Numeric value overflow', 0, null, 6, null);
      }
    }
    return tmp_1;
  };
  AbstractJsonLexer.prototype.q2i = function () {
    return consumeBoolean(this, this.b2l());
  };
  AbstractJsonLexer.prototype.r2i = function () {
    var current = this.b2l();
    if (current === charSequenceLength(this.u2k())) {
      this.a2g('EOF', 0, null, 6, null);
    }
    var tmp;
    if (equals(new Char(charSequenceGet(this.u2k(), current)), new Char(_Char___init__impl__6a9atx(34)))) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean(this, current);
    if (hasQuotation) {
      if (this.t2c_1 === charSequenceLength(this.u2k())) {
        this.a2g('EOF', 0, null, 6, null);
      }
      if (!equals(new Char(charSequenceGet(this.u2k(), this.t2c_1)), new Char(_Char___init__impl__6a9atx(34)))) {
        this.a2g('Expected closing quotation mark', 0, null, 6, null);
      }
      var tmp0_this = this;
      tmp0_this.t2c_1 = tmp0_this.t2c_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    if (tmp$ret$0 < 126) {
      var tmp_0 = CharMappings_getInstance().e2l_1;
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = Char__toInt_impl_vasixd(c);
      tmp = tmp_0[tmp$ret$1];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function get_TC_WHITESPACE() {
    return TC_WHITESPACE;
  }
  var TC_WHITESPACE;
  function get_TC_EOF() {
    return TC_EOF;
  }
  var TC_EOF;
  function get_STRING() {
    return STRING;
  }
  var STRING;
  function get_TC_STRING() {
    return TC_STRING;
  }
  var TC_STRING;
  function get_STRING_ESC() {
    return STRING_ESC;
  }
  var STRING_ESC;
  function get_TC_COMMA() {
    return TC_COMMA;
  }
  var TC_COMMA;
  function get_lenientHint() {
    return lenientHint;
  }
  var lenientHint;
  function get_TC_COLON() {
    return TC_COLON;
  }
  var TC_COLON;
  function get_TC_BEGIN_OBJ() {
    return TC_BEGIN_OBJ;
  }
  var TC_BEGIN_OBJ;
  function get_TC_END_OBJ() {
    return TC_END_OBJ;
  }
  var TC_END_OBJ;
  function get_TC_BEGIN_LIST() {
    return TC_BEGIN_LIST;
  }
  var TC_BEGIN_LIST;
  function get_TC_END_LIST() {
    return TC_END_LIST;
  }
  var TC_END_LIST;
  function get_TC_OTHER() {
    return TC_OTHER;
  }
  var TC_OTHER;
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().d2l_1[c] : _Char___init__impl__6a9atx(0);
  }
  function get_ignoreUnknownKeysHint() {
    return ignoreUnknownKeysHint;
  }
  var ignoreUnknownKeysHint;
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!equals(new Char(esc), new Char(_Char___init__impl__6a9atx(117)))) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.d2l_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.e2l_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.d2l_1 = charArray(117);
    this.e2l_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function get_specialFlowingValuesHint() {
    return specialFlowingValuesHint;
  }
  var specialFlowingValuesHint;
  function get_allowStructuredMapKeysHint() {
    return allowStructuredMapKeysHint;
  }
  var allowStructuredMapKeysHint;
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.j2l_1 = source;
  }
  StringJsonLexer.prototype.u2k = function () {
    return this.j2l_1;
  };
  StringJsonLexer.prototype.v2k = function (position) {
    return position < this.j2l_1.length ? position : -1;
  };
  StringJsonLexer.prototype.w2g = function () {
    var source = this.j2l_1;
    $l$loop: while (!(this.t2c_1 === -1) ? this.t2c_1 < source.length : false) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.t2c_1;
      tmp0_this.t2c_1 = tmp1 + 1 | 0;
      var ch = charSequenceGet(source, tmp1);
      var tc = charToTokenClass(ch);
      var tmp;
      if (tc === get_TC_WHITESPACE()) {
        continue $l$loop;
      } else {
        tmp = tc;
      }
      return tmp;
    }
    return get_TC_EOF();
  };
  StringJsonLexer.prototype.f2i = function () {
    var current = this.b2l();
    if (current === this.j2l_1.length ? true : current === -1)
      return false;
    if (equals(new Char(charSequenceGet(this.j2l_1, current)), new Char(_Char___init__impl__6a9atx(44)))) {
      var tmp0_this = this;
      tmp0_this.t2c_1 = tmp0_this.t2c_1 + 1 | 0;
      return true;
    }
    return false;
  };
  StringJsonLexer.prototype.s2g = function () {
    var current = this.t2c_1;
    if (current === -1)
      return false;
    $l$loop: while (current < this.j2l_1.length) {
      var c = charSequenceGet(this.j2l_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.t2c_1 = current;
      return this.x2k(c);
    }
    this.t2c_1 = current;
    return false;
  };
  StringJsonLexer.prototype.b2l = function () {
    var current = this.t2c_1;
    if (current === -1)
      return current;
    $l$loop: while (current < this.j2l_1.length) {
      var c = charSequenceGet(this.j2l_1, current);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.t2c_1 = current;
    return current;
  };
  StringJsonLexer.prototype.e2i = function (expected) {
    if (this.t2c_1 === -1) {
      this.z2k(expected);
    }
    var source = this.j2l_1;
    $l$loop: while (this.t2c_1 < source.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.t2c_1;
      tmp0_this.t2c_1 = tmp1 + 1 | 0;
      var c = charSequenceGet(source, tmp1);
      if (((equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(9))))
        continue $l$loop;
      if (equals(new Char(c), new Char(expected)))
        return Unit_getInstance();
      this.z2k(expected);
    }
    this.z2k(expected);
  };
  StringJsonLexer.prototype.k2i = function () {
    this.e2i(get_STRING());
    var current = this.t2c_1;
    var tmp = _Char___init__impl__6a9atx(34);
    var closingQuote = indexOf$default(this.j2l_1, tmp, current, false, 4, null);
    if (closingQuote === -1) {
      this.y2k(get_TC_STRING());
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(new Char(charSequenceGet(this.j2l_1, i)), new Char(get_STRING_ESC()))) {
          return this.consumeString2(this.j2l_1, this.t2c_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.t2c_1 = closingQuote + 1 | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.text.substring' call
    var tmp0_substring = this.j2l_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_substring;
    tmp$ret$1 = tmp$ret$0.substring(current, closingQuote);
    return tmp$ret$1;
  };
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.c2c_1;
  }
  function JsonStringBuilder() {
    this.l2c_1 = StringBuilder_init_$Create$_0(128);
  }
  JsonStringBuilder.prototype.b25 = function (value) {
    this.l2c_1.vc(value);
  };
  JsonStringBuilder.prototype.a24 = function (ch) {
    this.l2c_1.b5(ch);
  };
  JsonStringBuilder.prototype.i2f = function (string) {
    this.l2c_1.wc(string);
  };
  JsonStringBuilder.prototype.r2f = function (string) {
    printQuoted(this.l2c_1, string);
  };
  JsonStringBuilder.prototype.toString = function () {
    return this.l2c_1.toString();
  };
  JsonStringBuilder.prototype.rl = function () {
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  defer$1.prototype.m1u = get_isNullable;
  defer$1.prototype.w1u = get_isInline;
  defer$1.prototype.u1u = get_annotations;
  PolymorphismValidator.prototype.p29 = contextual;
  StreamingJsonDecoder.prototype.v1w = decodeSerializableElement$default;
  StreamingJsonDecoder.prototype.x1w = decodeSequentially;
  StreamingJsonDecoder.prototype.z1w = decodeCollectionSize;
  JsonDecoderForUnsignedTypes.prototype.i1w = decodeSerializableValue;
  JsonDecoderForUnsignedTypes.prototype.v1w = decodeSerializableElement$default;
  JsonDecoderForUnsignedTypes.prototype.x1w = decodeSequentially;
  JsonDecoderForUnsignedTypes.prototype.z1w = decodeCollectionSize;
  StreamingJsonEncoder.prototype.y1x = encodeNotNullMark;
  StreamingJsonEncoder.prototype.z1x = beginCollection;
  AbstractJsonTreeDecoder.prototype.v1w = decodeSerializableElement$default;
  AbstractJsonTreeDecoder.prototype.x1w = decodeSequentially;
  AbstractJsonTreeDecoder.prototype.z1w = decodeCollectionSize;
  JsonTreeDecoder.prototype.v1w = decodeSerializableElement$default;
  JsonTreeDecoder.prototype.x1w = decodeSequentially;
  JsonTreeDecoder.prototype.z1w = decodeCollectionSize;
  JsonTreeListDecoder.prototype.v1w = decodeSerializableElement$default;
  JsonTreeListDecoder.prototype.x1w = decodeSequentially;
  JsonTreeListDecoder.prototype.z1w = decodeCollectionSize;
  JsonTreeMapDecoder.prototype.v1w = decodeSerializableElement$default;
  JsonTreeMapDecoder.prototype.x1w = decodeSequentially;
  JsonTreeMapDecoder.prototype.z1w = decodeCollectionSize;
  //endregion
  //region block: init
  COLON = _Char___init__impl__6a9atx(58);
  INVALID = _Char___init__impl__6a9atx(0);
  COMMA = _Char___init__impl__6a9atx(44);
  NULL = 'null';
  BEGIN_OBJ = _Char___init__impl__6a9atx(123);
  END_OBJ = _Char___init__impl__6a9atx(125);
  BEGIN_LIST = _Char___init__impl__6a9atx(91);
  END_LIST = _Char___init__impl__6a9atx(93);
  TC_WHITESPACE = 3;
  TC_EOF = 10;
  STRING = _Char___init__impl__6a9atx(34);
  TC_STRING = 1;
  STRING_ESC = _Char___init__impl__6a9atx(92);
  TC_COMMA = 4;
  lenientHint = "Use 'isLenient = true' in 'Json {}` builder to accept non-compliant JSON.";
  TC_COLON = 5;
  TC_BEGIN_OBJ = 6;
  TC_END_OBJ = 7;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_OTHER = 0;
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Json$default;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json-js-ir.js.map
