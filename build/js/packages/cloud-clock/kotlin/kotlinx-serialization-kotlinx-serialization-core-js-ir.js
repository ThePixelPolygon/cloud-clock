(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-core-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var interfaceMeta = kotlin_kotlin.$_$.j8;
  var setMetadataFor = kotlin_kotlin.$_$.d9;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.s3;
  var Unit_getInstance = kotlin_kotlin.$_$.b4;
  var emptyList = kotlin_kotlin.$_$.h5;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.g;
  var lazy = kotlin_kotlin.$_$.cc;
  var classMeta = kotlin_kotlin.$_$.a8;
  var KProperty1 = kotlin_kotlin.$_$.t9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.g8;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.w1;
  var captureStack = kotlin_kotlin.$_$.u7;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.y1;
  var IllegalArgumentException = kotlin_kotlin.$_$.eb;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.t4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var toString = kotlin_kotlin.$_$.h9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var THROW_CCE = kotlin_kotlin.$_$.kb;
  var isInterface = kotlin_kotlin.$_$.s8;
  var KClass = kotlin_kotlin.$_$.r9;
  var copyToArray = kotlin_kotlin.$_$.f5;
  var Triple = kotlin_kotlin.$_$.mb;
  var getKClass = kotlin_kotlin.$_$.e;
  var Pair = kotlin_kotlin.$_$.ib;
  var Entry = kotlin_kotlin.$_$.j4;
  var LinkedHashMap = kotlin_kotlin.$_$.g4;
  var MutableMap = kotlin_kotlin.$_$.n4;
  var Map = kotlin_kotlin.$_$.k4;
  var HashMap = kotlin_kotlin.$_$.e4;
  var LinkedHashSet = kotlin_kotlin.$_$.h4;
  var MutableSet = kotlin_kotlin.$_$.o4;
  var Set = kotlin_kotlin.$_$.p4;
  var HashSet = kotlin_kotlin.$_$.f4;
  var ArrayList = kotlin_kotlin.$_$.c4;
  var MutableList = kotlin_kotlin.$_$.l4;
  var List = kotlin_kotlin.$_$.i4;
  var Collection = kotlin_kotlin.$_$.d4;
  var equals = kotlin_kotlin.$_$.c8;
  var getStringHashCode = kotlin_kotlin.$_$.h8;
  var isBlank = kotlin_kotlin.$_$.z9;
  var toList = kotlin_kotlin.$_$.s6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.c1;
  var toHashSet = kotlin_kotlin.$_$.p6;
  var toBooleanArray = kotlin_kotlin.$_$.o6;
  var withIndex = kotlin_kotlin.$_$.x6;
  var to = kotlin_kotlin.$_$.ic;
  var toMap = kotlin_kotlin.$_$.t6;
  var lazy_0 = kotlin_kotlin.$_$.dc;
  var contentEquals = kotlin_kotlin.$_$.u4;
  var until = kotlin_kotlin.$_$.q9;
  var joinToString$default = kotlin_kotlin.$_$.i;
  var objectMeta = kotlin_kotlin.$_$.c9;
  var ensureNotNull = kotlin_kotlin.$_$.xb;
  var Long = kotlin_kotlin.$_$.gb;
  var Char = kotlin_kotlin.$_$.xa;
  var isObject = kotlin_kotlin.$_$.u8;
  var toIntOrNull = kotlin_kotlin.$_$.ma;
  var hashCode = kotlin_kotlin.$_$.i8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var isArray = kotlin_kotlin.$_$.k8;
  var arrayIterator = kotlin_kotlin.$_$.s7;
  var asList = kotlin_kotlin.$_$.s4;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.x;
  var step = kotlin_kotlin.$_$.p9;
  var getValue = kotlin_kotlin.$_$.p5;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.g1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.z;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.d1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.h1;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.i1;
  var longArray = kotlin_kotlin.$_$.y8;
  var Companion_getInstance = kotlin_kotlin.$_$.v3;
  var get_lastIndex = kotlin_kotlin.$_$.s5;
  var countTrailingZeroBits = kotlin_kotlin.$_$.vb;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.q3;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.c3;
  var UInt = kotlin_kotlin.$_$.ob;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.b3;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.f3;
  var ULong = kotlin_kotlin.$_$.pb;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.e3;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.n3;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.z2;
  var UByte = kotlin_kotlin.$_$.nb;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.y2;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.r3;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.i3;
  var UShort = kotlin_kotlin.$_$.qb;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.h3;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.b1;
  var KTypeParameter = kotlin_kotlin.$_$.u9;
  var contentHashCode = kotlin_kotlin.$_$.v4;
  var fillArrayVal = kotlin_kotlin.$_$.e8;
  var booleanArray = kotlin_kotlin.$_$.t7;
  var emptyMap = kotlin_kotlin.$_$.i5;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.u3;
  var isCharArray = kotlin_kotlin.$_$.n8;
  var charArray = kotlin_kotlin.$_$.w7;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.o3;
  var isDoubleArray = kotlin_kotlin.$_$.p8;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.p3;
  var isFloatArray = kotlin_kotlin.$_$.q8;
  var isLongArray = kotlin_kotlin.$_$.t8;
  var isIntArray = kotlin_kotlin.$_$.r8;
  var isShortArray = kotlin_kotlin.$_$.v8;
  var isByteArray = kotlin_kotlin.$_$.m8;
  var BooleanCompanionObject_getInstance = kotlin_kotlin.$_$.m3;
  var isBooleanArray = kotlin_kotlin.$_$.l8;
  var coerceAtLeast = kotlin_kotlin.$_$.j9;
  var copyOf = kotlin_kotlin.$_$.z4;
  var copyOf_0 = kotlin_kotlin.$_$.b5;
  var copyOf_1 = kotlin_kotlin.$_$.c5;
  var copyOf_2 = kotlin_kotlin.$_$.x4;
  var copyOf_3 = kotlin_kotlin.$_$.e5;
  var copyOf_4 = kotlin_kotlin.$_$.w4;
  var copyOf_5 = kotlin_kotlin.$_$.a5;
  var copyOf_6 = kotlin_kotlin.$_$.y4;
  var Unit = kotlin_kotlin.$_$.rb;
  var trimIndent = kotlin_kotlin.$_$.va;
  var equals_0 = kotlin_kotlin.$_$.x9;
  var charSequenceLength = kotlin_kotlin.$_$.y7;
  var charSequenceGet = kotlin_kotlin.$_$.x7;
  var toString_0 = kotlin_kotlin.$_$.t2;
  var titlecase = kotlin_kotlin.$_$.ja;
  var isLowerCase = kotlin_kotlin.$_$.ca;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.t3;
  var mapOf = kotlin_kotlin.$_$.a6;
  var lastOrNull = kotlin_kotlin.$_$.v5;
  var get_lastIndex_0 = kotlin_kotlin.$_$.t5;
  var get_indices = kotlin_kotlin.$_$.r5;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var get_indices_0 = kotlin_kotlin.$_$.q5;
  var get_js = kotlin_kotlin.$_$.x8;
  var findAssociatedObject = kotlin_kotlin.$_$.c;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SerializationStrategy, 'SerializationStrategy', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DeserializationStrategy, 'DeserializationStrategy', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(KSerializer, 'KSerializer', interfaceMeta, undefined, [SerializationStrategy, DeserializationStrategy], undefined, undefined, []);
  setMetadataFor(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', classMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(PolymorphicSerializer, 'PolymorphicSerializer', classMeta, AbstractPolymorphicSerializer, undefined, undefined, undefined, []);
  setMetadataFor(SealedClassSerializer, 'SealedClassSerializer', classMeta, AbstractPolymorphicSerializer, undefined, undefined, undefined, []);
  setMetadataFor(StringFormat, 'StringFormat', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(BinaryFormat, 'BinaryFormat', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SerializationException, 'SerializationException', classMeta, IllegalArgumentException, undefined, undefined, undefined, []);
  setMetadataFor(UnknownFieldException, 'UnknownFieldException', classMeta, SerializationException, undefined, undefined, undefined, []);
  setMetadataFor(MissingFieldException, 'MissingFieldException', classMeta, SerializationException, undefined, undefined, undefined, []);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  setMetadataFor(SerialDescriptor, 'SerialDescriptor', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ContextDescriptor, 'ContextDescriptor', classMeta, undefined, [SerialDescriptor], undefined, undefined, []);
  setMetadataFor(elementDescriptors$1$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(_no_name_provided__qut3iv, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CachedNames, 'CachedNames', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SerialDescriptorImpl, 'SerialDescriptorImpl', classMeta, undefined, [SerialDescriptor, CachedNames], undefined, undefined, []);
  setMetadataFor(SerialKind, 'SerialKind', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ENUM, 'ENUM', objectMeta, SerialKind, undefined, undefined, undefined, []);
  setMetadataFor(CONTEXTUAL, 'CONTEXTUAL', objectMeta, SerialKind, undefined, undefined, undefined, []);
  setMetadataFor(PrimitiveKind, 'PrimitiveKind', classMeta, SerialKind, undefined, undefined, undefined, []);
  setMetadataFor(BOOLEAN, 'BOOLEAN', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(BYTE, 'BYTE', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(CHAR, 'CHAR', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(SHORT, 'SHORT', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(INT, 'INT', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(LONG, 'LONG', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(FLOAT, 'FLOAT', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(DOUBLE, 'DOUBLE', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(STRING, 'STRING', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(StructureKind, 'StructureKind', classMeta, SerialKind, undefined, undefined, undefined, []);
  setMetadataFor(CLASS, 'CLASS', objectMeta, StructureKind, undefined, undefined, undefined, []);
  setMetadataFor(LIST, 'LIST', objectMeta, StructureKind, undefined, undefined, undefined, []);
  setMetadataFor(MAP, 'MAP', objectMeta, StructureKind, undefined, undefined, undefined, []);
  setMetadataFor(OBJECT, 'OBJECT', objectMeta, StructureKind, undefined, undefined, undefined, []);
  setMetadataFor(PolymorphicKind, 'PolymorphicKind', classMeta, SerialKind, undefined, undefined, undefined, []);
  setMetadataFor(SEALED, 'SEALED', objectMeta, PolymorphicKind, undefined, undefined, undefined, []);
  setMetadataFor(OPEN, 'OPEN', objectMeta, PolymorphicKind, undefined, undefined, undefined, []);
  function decodeSerializableValue(deserializer) {
    return deserializer.q1t(this);
  }
  setMetadataFor(Decoder, 'Decoder', interfaceMeta, undefined, undefined, undefined, undefined, []);
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      previousValue = null;
    return $handler == null ? this.u1w(descriptor, index, deserializer, previousValue) : $handler(descriptor, index, deserializer, previousValue);
  }
  setMetadataFor(CompositeDecoder, 'CompositeDecoder', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AbstractDecoder, 'AbstractDecoder', classMeta, undefined, [Decoder, CompositeDecoder], undefined, undefined, []);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.j1w(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.p1t(this, value);
  }
  setMetadataFor(Encoder, 'Encoder', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AbstractEncoder, 'AbstractEncoder', classMeta, undefined, [Encoder], undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ListLikeDescriptor, 'ListLikeDescriptor', classMeta, undefined, [SerialDescriptor], undefined, undefined, []);
  setMetadataFor(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', classMeta, ListLikeDescriptor, undefined, undefined, undefined, []);
  setMetadataFor(ArrayClassDesc, 'ArrayClassDesc', classMeta, ListLikeDescriptor, undefined, undefined, undefined, []);
  setMetadataFor(MapLikeDescriptor, 'MapLikeDescriptor', classMeta, undefined, [SerialDescriptor], undefined, undefined, []);
  setMetadataFor(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', classMeta, MapLikeDescriptor, undefined, undefined, undefined, []);
  setMetadataFor(HashMapClassDesc, 'HashMapClassDesc', classMeta, MapLikeDescriptor, undefined, undefined, undefined, []);
  setMetadataFor(ArrayListClassDesc, 'ArrayListClassDesc', classMeta, ListLikeDescriptor, undefined, undefined, undefined, []);
  setMetadataFor(LinkedHashSetClassDesc, 'LinkedHashSetClassDesc', classMeta, ListLikeDescriptor, undefined, undefined, undefined, []);
  setMetadataFor(HashSetClassDesc, 'HashSetClassDesc', classMeta, ListLikeDescriptor, undefined, undefined, undefined, []);
  setMetadataFor(AbstractCollectionSerializer, 'AbstractCollectionSerializer', classMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(CollectionLikeSerializer, 'CollectionLikeSerializer', classMeta, AbstractCollectionSerializer, undefined, undefined, undefined, []);
  setMetadataFor(PrimitiveArraySerializer, 'PrimitiveArraySerializer', classMeta, CollectionLikeSerializer, undefined, undefined, undefined, []);
  setMetadataFor(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ReferenceArraySerializer, 'ReferenceArraySerializer', classMeta, CollectionLikeSerializer, undefined, undefined, undefined, []);
  setMetadataFor(CollectionSerializer, 'CollectionSerializer', classMeta, CollectionLikeSerializer, undefined, undefined, undefined, []);
  setMetadataFor(MapLikeSerializer, 'MapLikeSerializer', classMeta, AbstractCollectionSerializer, undefined, undefined, undefined, []);
  setMetadataFor(LinkedHashMapSerializer, 'LinkedHashMapSerializer', classMeta, MapLikeSerializer, undefined, undefined, undefined, []);
  setMetadataFor(HashMapSerializer, 'HashMapSerializer', classMeta, MapLikeSerializer, undefined, undefined, undefined, []);
  setMetadataFor(ArrayListSerializer, 'ArrayListSerializer', classMeta, CollectionSerializer, undefined, undefined, undefined, []);
  setMetadataFor(HashSetSerializer, 'HashSetSerializer', classMeta, CollectionSerializer, undefined, undefined, undefined, []);
  setMetadataFor(LinkedHashSetSerializer, 'LinkedHashSetSerializer', classMeta, CollectionSerializer, undefined, undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ElementMarker, 'ElementMarker', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', classMeta, undefined, [SerialDescriptor, CachedNames], undefined, undefined, []);
  setMetadataFor(InlineClassDescriptor, 'InlineClassDescriptor', classMeta, PluginGeneratedSerialDescriptor, undefined, undefined, undefined, []);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  setMetadataFor(GeneratedSerializer, 'GeneratedSerializer', interfaceMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(InlinePrimitiveDescriptor$1, undefined, classMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(UIntSerializer, 'UIntSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(ULongSerializer, 'ULongSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(UByteSerializer, 'UByteSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(UShortSerializer, 'UShortSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(SerialDescriptorForNullable, 'SerialDescriptorForNullable', classMeta, undefined, [SerialDescriptor, CachedNames], undefined, undefined, []);
  setMetadataFor(NullableSerializer, 'NullableSerializer', classMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(ObjectSerializer, 'ObjectSerializer', classMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(SerializerFactory, 'SerializerFactory', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CharArraySerializer_0, 'CharArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(DoubleArraySerializer_0, 'DoubleArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(FloatArraySerializer_0, 'FloatArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(LongArraySerializer_0, 'LongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(IntArraySerializer_0, 'IntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(ShortArraySerializer_0, 'ShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(ByteArraySerializer_0, 'ByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(BooleanArraySerializer_0, 'BooleanArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(CharArrayBuilder, 'CharArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(DoubleArrayBuilder, 'DoubleArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(FloatArrayBuilder, 'FloatArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(LongArrayBuilder, 'LongArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(IntArrayBuilder, 'IntArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(ShortArrayBuilder, 'ShortArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(ByteArrayBuilder, 'ByteArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(BooleanArrayBuilder, 'BooleanArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(StringSerializer, 'StringSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(CharSerializer, 'CharSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(DoubleSerializer, 'DoubleSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(FloatSerializer, 'FloatSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(LongSerializer, 'LongSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(IntSerializer, 'IntSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(ShortSerializer, 'ShortSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(ByteSerializer, 'ByteSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(BooleanSerializer, 'BooleanSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(UnitSerializer, 'UnitSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', classMeta, undefined, [SerialDescriptor], undefined, undefined, []);
  setMetadataFor(TaggedDecoder, 'TaggedDecoder', classMeta, undefined, [Decoder, CompositeDecoder], undefined, undefined, []);
  setMetadataFor(NamedValueDecoder, 'NamedValueDecoder', classMeta, TaggedDecoder, undefined, undefined, undefined, []);
  setMetadataFor(MapEntry, 'MapEntry', classMeta, undefined, [Entry], undefined, undefined, []);
  setMetadataFor(KeyValueSerializer, 'KeyValueSerializer', classMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(MapEntrySerializer_0, 'MapEntrySerializer', classMeta, KeyValueSerializer, undefined, undefined, undefined, []);
  setMetadataFor(PairSerializer_0, 'PairSerializer', classMeta, KeyValueSerializer, undefined, undefined, undefined, []);
  setMetadataFor(TripleSerializer_0, 'TripleSerializer', classMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(SerializersModule, 'SerializersModule', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SerialModuleImpl, 'SerialModuleImpl', classMeta, SerializersModule, undefined, undefined, undefined, []);
  setMetadataFor(ContextualProvider, 'ContextualProvider', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Argless, 'Argless', classMeta, ContextualProvider, undefined, undefined, undefined, []);
  setMetadataFor(WithTypeArguments, 'WithTypeArguments', classMeta, ContextualProvider, undefined, undefined, undefined, []);
  function contextual(kClass, serializer) {
    return this.n29(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  setMetadataFor(SerializersModuleCollector, 'SerializersModuleCollector', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SerializableWith, 'SerializableWith', classMeta, undefined, undefined, 0, undefined, []);
  //endregion
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function DeserializationStrategy() {
  }
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.r1t(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.s1t());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.t1t(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.s1t());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      var tmp = serializer_1(StringCompanionObject_getInstance()).o1t();
      $this$buildSerialDescriptor.c1u('type', tmp, null, false, 12, null);
      var tmp_0 = 'kotlinx.serialization.Polymorphic<' + this$0.d1u_1.jb() + '>';
      var tmp_1 = CONTEXTUAL_getInstance();
      var tmp_2 = buildSerialDescriptor$default(tmp_0, tmp_1, [], null, 12, null);
      $this$buildSerialDescriptor.c1u('value', tmp_2, null, false, 12, null);
      $this$buildSerialDescriptor.w1t_1 = this$0.e1u_1;
      return Unit_getInstance();
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor$default('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null), this$0.d1u_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.d1u_1 = baseClass;
    this.e1u_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.f1u_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  PolymorphicSerializer.prototype.s1t = function () {
    return this.d1u_1;
  };
  PolymorphicSerializer.prototype.o1t = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = descriptor$factory();
    tmp$ret$0 = this.f1u_1.o();
    return tmp$ret$0;
  };
  PolymorphicSerializer.prototype.toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.d1u_1 + ')';
  };
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.o1t();
    }, null);
  }
  function SealedClassSerializer() {
  }
  function StringFormat() {
  }
  function BinaryFormat() {
  }
  function SerializationException_init_$Init$(message, $this) {
    IllegalArgumentException_init_$Init$(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$(message) {
    var tmp = SerializationException_init_$Init$(message, Object.create(SerializationException.prototype));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, cause, $this) {
    IllegalArgumentException_init_$Init$_0(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, Object.create(UnknownFieldException.prototype));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, UnknownFieldException);
  }
  function MissingFieldException_init_$Init$(fieldNames, serialName, $this) {
    MissingFieldException.call($this, fieldNames.c() === 1 ? "Field '" + fieldNames.h(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + fieldNames + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(fieldNames, serialName) {
    var tmp = MissingFieldException_init_$Init$(fieldNames, serialName, Object.create(MissingFieldException.prototype));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(message, cause) {
    SerializationException_init_$Init$_0(message, cause, this);
    captureStack(this, MissingFieldException);
  }
  function serializerOrNull(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function serializer(_this__u8e3s4) {
    var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      serializerNotRegistered(_this__u8e3s4);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.xb();
    var tmp$ret$4;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = type.wb();
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.j();
    while (tmp0_iterator.k()) {
      var item = tmp0_iterator.l();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>' call
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        var tmp0_requireNotNull = item.z4_1;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp0_requireNotNull == null) {
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.serializerByKTypeImpl.<anonymous>.<anonymous>' call
          tmp$ret$0 = 'Star projections in type arguments are not allowed, but had ' + type;
          var message = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          tmp$ret$1 = tmp0_requireNotNull;
          break $l$block;
        }
      }
      tmp$ret$2 = tmp$ret$1;
      tmp0_mapTo.a(tmp$ret$2);
    }
    tmp$ret$3 = tmp0_mapTo;
    tmp$ret$4 = tmp$ret$3;
    var typeArguments = tmp$ret$4;
    var tmp;
    if (typeArguments.i()) {
      var tmp0_elvis_lhs = serializerOrNull_0(rootClass);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        tmp_0 = _this__u8e3s4.k1u(rootClass, null, 2, null);
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = builtinSerializer(_this__u8e3s4, typeArguments, rootClass, failOnMissingTypeArgSerializer);
    }
    var tmp1_safe_receiver = tmp;
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      var tmp$ret$5;
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp$ret$5 = (!(tmp1_safe_receiver == null) ? isInterface(tmp1_safe_receiver, KSerializer) : false) ? tmp1_safe_receiver : THROW_CCE();
      tmp_1 = tmp$ret$5;
    }
    var result = tmp_1;
    var tmp2_safe_receiver = result;
    return tmp2_safe_receiver == null ? null : nullable(tmp2_safe_receiver, isNullable);
  }
  function serializerOrNull_0(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function builtinSerializer(_this__u8e3s4, typeArguments, rootClass, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator = typeArguments.j();
      while (tmp0_iterator.k()) {
        var item = tmp0_iterator.l();
        tmp0_mapTo.a(serializer_0(_this__u8e3s4, item));
      }
      tmp$ret$0 = tmp0_mapTo;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    } else {
      var tmp$ret$4;
      // Inline function 'kotlin.collections.map' call
      var tmp$ret$3;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
      var tmp0_iterator_0 = typeArguments.j();
      while (tmp0_iterator_0.k()) {
        var item_0 = tmp0_iterator_0.l();
        var tmp$ret$2;
        // Inline function 'kotlinx.serialization.builtinSerializer.<anonymous>' call
        var tmp0_elvis_lhs = serializerOrNull(_this__u8e3s4, item_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return null;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        tmp$ret$2 = tmp_0;
        tmp0_mapTo_0.a(tmp$ret$2);
      }
      tmp$ret$3 = tmp0_mapTo_0;
      tmp$ret$4 = tmp$ret$3;
      tmp = tmp$ret$4;
    }
    var serializers = tmp;
    var tmp0_subject = rootClass;
    var tmp_1;
    if (((tmp0_subject.equals(getKClass(Collection)) ? true : tmp0_subject.equals(getKClass(List))) ? true : tmp0_subject.equals(getKClass(MutableList))) ? true : tmp0_subject.equals(getKClass(ArrayList))) {
      tmp_1 = new ArrayListSerializer(serializers.h(0));
    } else if (tmp0_subject.equals(getKClass(HashSet))) {
      tmp_1 = new HashSetSerializer(serializers.h(0));
    } else if ((tmp0_subject.equals(getKClass(Set)) ? true : tmp0_subject.equals(getKClass(MutableSet))) ? true : tmp0_subject.equals(getKClass(LinkedHashSet))) {
      tmp_1 = new LinkedHashSetSerializer(serializers.h(0));
    } else if (tmp0_subject.equals(getKClass(HashMap))) {
      tmp_1 = new HashMapSerializer(serializers.h(0), serializers.h(1));
    } else if ((tmp0_subject.equals(getKClass(Map)) ? true : tmp0_subject.equals(getKClass(MutableMap))) ? true : tmp0_subject.equals(getKClass(LinkedHashMap))) {
      tmp_1 = new LinkedHashMapSerializer(serializers.h(0), serializers.h(1));
    } else if (tmp0_subject.equals(getKClass(Entry))) {
      tmp_1 = MapEntrySerializer(serializers.h(0), serializers.h(1));
    } else if (tmp0_subject.equals(getKClass(Pair))) {
      tmp_1 = PairSerializer(serializers.h(0), serializers.h(1));
    } else if (tmp0_subject.equals(getKClass(Triple))) {
      tmp_1 = TripleSerializer(serializers.h(0), serializers.h(1), serializers.h(2));
    } else {
      if (isReferenceArray(rootClass)) {
        var tmp$ret$5;
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp_2 = typeArguments.h(0).vb();
        var tmp0_cast = ArraySerializer((!(tmp_2 == null) ? isInterface(tmp_2, KClass) : false) ? tmp_2 : THROW_CCE(), serializers.h(0));
        tmp$ret$5 = isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE();
        return tmp$ret$5;
      }
      var tmp$ret$6;
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp$ret$6 = copyToArray(serializers);
      var args = tmp$ret$6;
      var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(rootClass, args.slice());
      tmp_1 = tmp1_elvis_lhs == null ? reflectiveOrContextual(_this__u8e3s4, rootClass, serializers) : tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializer_0(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function reflectiveOrContextual(_this__u8e3s4, kClass, typeArgumentsSerializers) {
    var tmp0_elvis_lhs = serializerOrNull_0(kClass);
    return tmp0_elvis_lhs == null ? _this__u8e3s4.l1u(kClass, typeArgumentsSerializers) : tmp0_elvis_lhs;
  }
  function serializer_1(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function SetSerializer(elementSerializer) {
    return new LinkedHashSetSerializer(elementSerializer);
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.o1t().m1u()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.descriptors.getContextualDescriptor.<anonymous>' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.k1u(tmp0_safe_receiver, null, 2, null);
      tmp$ret$0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.o1t();
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.r1u_1;
    } else {
      if (tmp0_subject instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.n1u_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function ContextDescriptor(original, kClass) {
    this.q1u_1 = original;
    this.r1u_1 = kClass;
    this.s1u_1 = this.q1u_1.t1u() + '<' + this.r1u_1.jb() + '>';
  }
  ContextDescriptor.prototype.u1u = function () {
    return this.q1u_1.u1u();
  };
  ContextDescriptor.prototype.v1u = function () {
    return this.q1u_1.v1u();
  };
  ContextDescriptor.prototype.w1u = function () {
    return this.q1u_1.w1u();
  };
  ContextDescriptor.prototype.m1u = function () {
    return this.q1u_1.m1u();
  };
  ContextDescriptor.prototype.x1u = function () {
    return this.q1u_1.x1u();
  };
  ContextDescriptor.prototype.y1u = function (index) {
    return this.q1u_1.y1u(index);
  };
  ContextDescriptor.prototype.z1u = function (index) {
    return this.q1u_1.z1u(index);
  };
  ContextDescriptor.prototype.a1v = function (name) {
    return this.q1u_1.a1v(name);
  };
  ContextDescriptor.prototype.b1v = function (index) {
    return this.q1u_1.b1v(index);
  };
  ContextDescriptor.prototype.c1v = function (index) {
    return this.q1u_1.c1v(index);
  };
  ContextDescriptor.prototype.t1u = function () {
    return this.s1u_1;
  };
  ContextDescriptor.prototype.equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.q1u_1, another.q1u_1) ? another.r1u_1.equals(this.r1u_1) : false;
  };
  ContextDescriptor.prototype.hashCode = function () {
    var result = this.r1u_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.s1u_1) | 0;
    return result;
  };
  ContextDescriptor.prototype.toString = function () {
    return 'ContextDescriptor(kClass: ' + this.r1u_1 + ', original: ' + this.q1u_1 + ')';
  };
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.Iterable' call
    tmp$ret$0 = new _no_name_provided__qut3iv(_this__u8e3s4);
    return tmp$ret$0;
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.e1v_1 = $this_elementDescriptors;
    this.d1v_1 = $this_elementDescriptors.v1u();
  }
  elementDescriptors$1$1.prototype.k = function () {
    return this.d1v_1 > 0;
  };
  elementDescriptors$1$1.prototype.l = function () {
    var tmp = this.e1v_1.v1u();
    var tmp0_this = this;
    var tmp1 = tmp0_this.d1v_1;
    tmp0_this.d1v_1 = tmp1 - 1 | 0;
    return this.e1v_1.z1u(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.f1v_1 = $this_elementDescriptors;
  }
  _no_name_provided__qut3iv.prototype.j = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    tmp$ret$0 = new elementDescriptors$1$1(this.f1v_1);
    return tmp$ret$0;
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(serialName);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      tmp$ret$1 = 'Blank serial names are prohibited';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = !equals(kind, CLASS_getInstance());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      tmp$ret$2 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      var message_0 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.x1t_1.c(), toList(typeParameters), sdBuilder);
  }
  function buildSerialDescriptor$default(serialName, kind, typeParameters, builder, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      builder = buildSerialDescriptor$lambda;
    }
    return buildSerialDescriptor(serialName, kind, typeParameters, builder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.u1t_1 = serialName;
    this.v1t_1 = false;
    this.w1t_1 = emptyList();
    this.x1t_1 = ArrayList_init_$Create$_0();
    this.y1t_1 = HashSet_init_$Create$();
    this.z1t_1 = ArrayList_init_$Create$_0();
    this.a1u_1 = ArrayList_init_$Create$_0();
    this.b1u_1 = ArrayList_init_$Create$_0();
  }
  ClassSerialDescriptorBuilder.prototype.g1v = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    var tmp0_require = this.y1t_1.a(elementName);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      tmp$ret$0 = "Element with name '" + elementName + "' is already registered";
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp1_plusAssign = tmp0_this.x1t_1;
    tmp1_plusAssign.a(elementName);
    var tmp1_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp2_plusAssign = tmp1_this.z1t_1;
    tmp2_plusAssign.a(descriptor);
    var tmp2_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp3_plusAssign = tmp2_this.a1u_1;
    tmp3_plusAssign.a(annotations);
    var tmp3_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp4_plusAssign = tmp3_this.b1u_1;
    tmp4_plusAssign.a(isOptional);
  };
  ClassSerialDescriptorBuilder.prototype.c1u = function (elementName, descriptor, annotations, isOptional, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      annotations = emptyList();
    if (!(($mask0 & 8) === 0))
      isOptional = false;
    return this.g1v(elementName, descriptor, annotations, isOptional);
  };
  function _get__hashCode__tgwhef($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = _hashCode$factory();
    tmp$ret$0 = $this.s1v_1.o();
    return tmp$ret$0;
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.r1v_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.b1v(it) + ': ' + this$0.z1u(it).t1u();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.h1v_1 = serialName;
    this.i1v_1 = kind;
    this.j1v_1 = elementsCount;
    this.k1v_1 = builder.w1t_1;
    this.l1v_1 = toHashSet(builder.x1t_1);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = builder.x1t_1;
    tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    tmp.m1v_1 = tmp$ret$0;
    this.n1v_1 = compactArray(builder.z1t_1);
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray_0 = builder.a1u_1;
    tmp$ret$1 = copyToArray(tmp0_toTypedArray_0);
    tmp_0.o1v_1 = tmp$ret$1;
    this.p1v_1 = toBooleanArray(builder.b1u_1);
    var tmp_1 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = withIndex(this.m1v_1);
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
    var tmp0_iterator = tmp0_map.j();
    while (tmp0_iterator.k()) {
      var item = tmp0_iterator.l();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      tmp$ret$2 = to(item.i2_1, item.h2_1);
      tmp0_mapTo.a(tmp$ret$2);
    }
    tmp$ret$3 = tmp0_mapTo;
    tmp$ret$4 = tmp$ret$3;
    tmp_1.q1v_1 = toMap(tmp$ret$4);
    this.r1v_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.s1v_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  SerialDescriptorImpl.prototype.t1u = function () {
    return this.h1v_1;
  };
  SerialDescriptorImpl.prototype.x1u = function () {
    return this.i1v_1;
  };
  SerialDescriptorImpl.prototype.v1u = function () {
    return this.j1v_1;
  };
  SerialDescriptorImpl.prototype.u1u = function () {
    return this.k1v_1;
  };
  SerialDescriptorImpl.prototype.t1v = function () {
    return this.l1v_1;
  };
  SerialDescriptorImpl.prototype.b1v = function (index) {
    return getChecked(this.m1v_1, index);
  };
  SerialDescriptorImpl.prototype.a1v = function (name) {
    var tmp0_elvis_lhs = this.q1v_1.v1(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_1();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  SerialDescriptorImpl.prototype.y1u = function (index) {
    return getChecked(this.o1v_1, index);
  };
  SerialDescriptorImpl.prototype.z1u = function (index) {
    return getChecked(this.n1v_1, index);
  };
  SerialDescriptorImpl.prototype.c1v = function (index) {
    return getChecked_0(this.p1v_1, index);
  };
  SerialDescriptorImpl.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.t1u() === other.t1u())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = contentEquals(this.r1v_1, tmp0__anonymous__q1qw7t.r1v_1);
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.v1u() === other.v1u())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.v1u();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.z1u(index).t1u() === other.z1u(index).t1u())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.z1u(index).x1u(), other.z1u(index).x1u())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  SerialDescriptorImpl.prototype.hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  SerialDescriptorImpl.prototype.toString = function () {
    var tmp = until(0, this.j1v_1);
    var tmp_0 = this.h1v_1 + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, SerialDescriptorImpl$toString$lambda(this), 24, null);
  };
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(serialName);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.PrimitiveSerialDescriptor.<anonymous>' call
      tmp$ret$1 = 'Blank serial names are prohibited';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(serialName);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.buildClassSerialDescriptor.<anonymous>' call
      tmp$ret$1 = 'Blank serial names are prohibited';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.x1t_1.c(), toList(typeParameters), sdBuilder);
  }
  function buildClassSerialDescriptor$default(serialName, typeParameters, builderAction, $mask0, $handler) {
    if (!(($mask0 & 4) === 0)) {
      builderAction = buildClassSerialDescriptor$lambda;
    }
    return buildClassSerialDescriptor(serialName, typeParameters, builderAction);
  }
  function buildSerialDescriptor$lambda($this$null) {
    return Unit_getInstance();
  }
  function buildClassSerialDescriptor$lambda($this$null) {
    return Unit_getInstance();
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  SerialKind.prototype.toString = function () {
    return ensureNotNull(getKClassFromExpression(this).jb());
  };
  SerialKind.prototype.hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function AbstractDecoder() {
  }
  AbstractDecoder.prototype.u1v = function () {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  AbstractDecoder.prototype.v1v = function () {
    return true;
  };
  AbstractDecoder.prototype.w1v = function () {
    return null;
  };
  AbstractDecoder.prototype.x1v = function () {
    var tmp = this.u1v();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.y1v = function () {
    var tmp = this.u1v();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.z1v = function () {
    var tmp = this.u1v();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.a1w = function () {
    var tmp = this.u1v();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.b1w = function () {
    var tmp = this.u1v();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.c1w = function () {
    var tmp = this.u1v();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.d1w = function () {
    var tmp = this.u1v();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.e1w = function () {
    var tmp = this.u1v();
    return tmp instanceof Char ? tmp.a5_1 : THROW_CCE();
  };
  AbstractDecoder.prototype.f1w = function () {
    var tmp = this.u1v();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.g1w = function (inlineDescriptor) {
    return this;
  };
  AbstractDecoder.prototype.h1w = function (deserializer, previousValue) {
    return this.i1w(deserializer);
  };
  AbstractDecoder.prototype.j1w = function (descriptor) {
    return this;
  };
  AbstractDecoder.prototype.k1w = function (descriptor) {
  };
  AbstractDecoder.prototype.l1w = function (descriptor, index) {
    return this.x1v();
  };
  AbstractDecoder.prototype.m1w = function (descriptor, index) {
    return this.y1v();
  };
  AbstractDecoder.prototype.n1w = function (descriptor, index) {
    return this.z1v();
  };
  AbstractDecoder.prototype.o1w = function (descriptor, index) {
    return this.a1w();
  };
  AbstractDecoder.prototype.p1w = function (descriptor, index) {
    return this.b1w();
  };
  AbstractDecoder.prototype.q1w = function (descriptor, index) {
    return this.c1w();
  };
  AbstractDecoder.prototype.r1w = function (descriptor, index) {
    return this.d1w();
  };
  AbstractDecoder.prototype.s1w = function (descriptor, index) {
    return this.e1w();
  };
  AbstractDecoder.prototype.t1w = function (descriptor, index) {
    return this.f1w();
  };
  AbstractDecoder.prototype.u1w = function (descriptor, index, deserializer, previousValue) {
    return this.h1w(deserializer, previousValue);
  };
  function AbstractEncoder() {
  }
  AbstractEncoder.prototype.j1w = function (descriptor) {
    return this;
  };
  AbstractEncoder.prototype.k1w = function (descriptor) {
  };
  AbstractEncoder.prototype.a1x = function (descriptor, index) {
    return true;
  };
  AbstractEncoder.prototype.b1x = function (value) {
    throw SerializationException_init_$Create$('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  AbstractEncoder.prototype.c1x = function () {
    throw SerializationException_init_$Create$("'null' is not supported by default");
  };
  AbstractEncoder.prototype.d1x = function (value) {
    return this.b1x(value);
  };
  AbstractEncoder.prototype.e1x = function (value) {
    return this.b1x(value);
  };
  AbstractEncoder.prototype.f1x = function (value) {
    return this.b1x(value);
  };
  AbstractEncoder.prototype.g1x = function (value) {
    return this.b1x(value);
  };
  AbstractEncoder.prototype.h1x = function (value) {
    return this.b1x(value);
  };
  AbstractEncoder.prototype.i1x = function (value) {
    return this.b1x(value);
  };
  AbstractEncoder.prototype.j1x = function (value) {
    return this.b1x(value);
  };
  AbstractEncoder.prototype.k1x = function (value) {
    return this.b1x(new Char(value));
  };
  AbstractEncoder.prototype.l1x = function (value) {
    return this.b1x(value);
  };
  AbstractEncoder.prototype.m1x = function (inlineDescriptor) {
    return this;
  };
  AbstractEncoder.prototype.n1x = function (descriptor, index, value) {
    if (this.a1x(descriptor, index)) {
      this.d1x(value);
    }
  };
  AbstractEncoder.prototype.o1x = function (descriptor, index, value) {
    if (this.a1x(descriptor, index)) {
      this.e1x(value);
    }
  };
  AbstractEncoder.prototype.p1x = function (descriptor, index, value) {
    if (this.a1x(descriptor, index)) {
      this.f1x(value);
    }
  };
  AbstractEncoder.prototype.q1x = function (descriptor, index, value) {
    if (this.a1x(descriptor, index)) {
      this.g1x(value);
    }
  };
  AbstractEncoder.prototype.r1x = function (descriptor, index, value) {
    if (this.a1x(descriptor, index)) {
      this.h1x(value);
    }
  };
  AbstractEncoder.prototype.s1x = function (descriptor, index, value) {
    if (this.a1x(descriptor, index)) {
      this.i1x(value);
    }
  };
  AbstractEncoder.prototype.t1x = function (descriptor, index, value) {
    if (this.a1x(descriptor, index)) {
      this.j1x(value);
    }
  };
  AbstractEncoder.prototype.u1x = function (descriptor, index, value) {
    if (this.a1x(descriptor, index)) {
      this.k1x(value);
    }
  };
  AbstractEncoder.prototype.v1x = function (descriptor, index, value) {
    if (this.a1x(descriptor, index)) {
      this.l1x(value);
    }
  };
  AbstractEncoder.prototype.w1x = function (descriptor, index, serializer, value) {
    if (this.a1x(descriptor, index)) {
      this.x1x(serializer, value);
    }
  };
  function Decoder() {
  }
  function Companion() {
    Companion_instance = this;
    this.a1y_1 = -1;
    this.b1y_1 = -3;
  }
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CompositeDecoder() {
  }
  function Encoder() {
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.t1w($this.o1t(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    var tmp = $this.o1t();
    return compositeDecoder.v1w(tmp, 1, serializer, null, 8, null);
  }
  function AbstractPolymorphicSerializer() {
  }
  AbstractPolymorphicSerializer.prototype.p1t = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var tmp0_encodeStructure = this.o1t();
    var composite = encoder.j1w(tmp0_encodeStructure);
    // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.serialize.<anonymous>' call
    composite.v1x(this.o1t(), 0, actualSerializer.o1t().t1u());
    var tmp = this.o1t();
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.internal.cast' call
    tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.w1x(tmp, 1, tmp$ret$0, value);
    composite.k1w(tmp0_encodeStructure);
  };
  AbstractPolymorphicSerializer.prototype.q1t = function (decoder) {
    var tmp$ret$5;
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = this.o1t();
    var composite = decoder.j1w(tmp0_decodeStructure);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>' call
      var klassName = null;
      var value = null;
      if (composite.x1w()) {
        tmp$ret$0 = decodeSequentially_0(this, composite);
        break $l$block;
      }
      mainLoop: while (true) {
        var index = composite.y1w(this.o1t());
        Companion_getInstance_1();
        if (index === -1) {
          break mainLoop;
        } else {
          if (index === 0) {
            klassName = composite.t1w(this.o1t(), index);
          } else {
            if (index === 1) {
              var tmp$ret$2;
              $l$block_0: {
                // Inline function 'kotlin.requireNotNull' call
                var tmp0_requireNotNull = klassName;
                // Inline function 'kotlin.contracts.contract' call
                if (tmp0_requireNotNull == null) {
                  var tmp$ret$1;
                  // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
                  tmp$ret$1 = 'Cannot read polymorphic value before its type token';
                  var message = tmp$ret$1;
                  throw IllegalArgumentException_init_$Create$(toString(message));
                } else {
                  tmp$ret$2 = tmp0_requireNotNull;
                  break $l$block_0;
                }
              }
              klassName = tmp$ret$2;
              var serializer = findPolymorphicSerializer_0(this, composite, klassName);
              var tmp = this.o1t();
              value = composite.v1w(tmp, index, serializer, null, 8, null);
            } else {
              var tmp0_elvis_lhs = klassName;
              throw SerializationException_init_$Create$('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
            }
          }
        }
      }
      var tmp$ret$4;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        var tmp1_requireNotNull = value;
        // Inline function 'kotlin.contracts.contract' call
        if (tmp1_requireNotNull == null) {
          var tmp$ret$3;
          // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
          tmp$ret$3 = 'Polymorphic value has not been read for class ' + klassName;
          var message_0 = tmp$ret$3;
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        } else {
          tmp$ret$4 = tmp1_requireNotNull;
          break $l$block_1;
        }
      }
      var tmp_0 = tmp$ret$4;
      tmp$ret$0 = isObject(tmp_0) ? tmp_0 : THROW_CCE();
    }
    var result = tmp$ret$0;
    composite.k1w(tmp0_decodeStructure);
    tmp$ret$5 = result;
    return tmp$ret$5;
  };
  AbstractPolymorphicSerializer.prototype.t1t = function (decoder, klassName) {
    return decoder.w1w().c1y(this.s1t(), klassName);
  };
  AbstractPolymorphicSerializer.prototype.r1t = function (encoder, value) {
    return encoder.w1w().d1y(this.s1t(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.jb();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the scope of '" + baseClass.jb() + "'";
    throw SerializationException_init_$Create$(subClassName == null ? 'Class discriminator was missing and no default polymorphic serializers were registered ' + scope : "Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
  }
  function CachedNames() {
  }
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.g1y_1 = primitive.t1u() + 'Array';
  }
  PrimitiveArrayDescriptor.prototype.t1u = function () {
    return this.g1y_1;
  };
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayClassDesc.prototype.t1u = function () {
    return 'kotlin.Array';
  };
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.h1y_1 = elementDescriptor;
    this.i1y_1 = 1;
  }
  ListLikeDescriptor.prototype.x1u = function () {
    return LIST_getInstance();
  };
  ListLikeDescriptor.prototype.v1u = function () {
    return this.i1y_1;
  };
  ListLikeDescriptor.prototype.b1v = function (index) {
    return index.toString();
  };
  ListLikeDescriptor.prototype.a1v = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ListLikeDescriptor.prototype.c1v = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.t1u() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  ListLikeDescriptor.prototype.y1u = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.t1u() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  ListLikeDescriptor.prototype.z1u = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.t1u() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.h1y_1;
  };
  ListLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.h1y_1, other.h1y_1) ? this.t1u() === other.t1u() : false)
      return true;
    return false;
  };
  ListLikeDescriptor.prototype.hashCode = function () {
    return imul(hashCode(this.h1y_1), 31) + getStringHashCode(this.t1u()) | 0;
  };
  ListLikeDescriptor.prototype.toString = function () {
    return this.t1u() + '(' + this.h1y_1 + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.l1y_1 = serialName;
    this.m1y_1 = keyDescriptor;
    this.n1y_1 = valueDescriptor;
    this.o1y_1 = 2;
  }
  MapLikeDescriptor.prototype.t1u = function () {
    return this.l1y_1;
  };
  MapLikeDescriptor.prototype.x1u = function () {
    return MAP_getInstance();
  };
  MapLikeDescriptor.prototype.v1u = function () {
    return this.o1y_1;
  };
  MapLikeDescriptor.prototype.b1v = function (index) {
    return index.toString();
  };
  MapLikeDescriptor.prototype.a1v = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.c1v = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.t1u() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  MapLikeDescriptor.prototype.y1u = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementAnnotations.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.t1u() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  MapLikeDescriptor.prototype.z1u = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.t1u() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_subject = index % 2 | 0;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = this.m1y_1;
        break;
      case 1:
        tmp = this.n1y_1;
        break;
      default:
        throw IllegalStateException_init_$Create$('Unreached');
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.t1u() === other.t1u()))
      return false;
    if (!equals(this.m1y_1, other.m1y_1))
      return false;
    if (!equals(this.n1y_1, other.n1y_1))
      return false;
    return true;
  };
  MapLikeDescriptor.prototype.hashCode = function () {
    var result = getStringHashCode(this.t1u());
    result = imul(31, result) + hashCode(this.m1y_1) | 0;
    result = imul(31, result) + hashCode(this.n1y_1) | 0;
    return result;
  };
  MapLikeDescriptor.prototype.toString = function () {
    return this.t1u() + '(' + this.m1y_1 + ', ' + this.n1y_1 + ')';
  };
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayListClassDesc.prototype.t1u = function () {
    return 'kotlin.collections.ArrayList';
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  LinkedHashSetClassDesc.prototype.t1u = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  HashSetClassDesc.prototype.t1u = function () {
    return 'kotlin.collections.HashSet';
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.w1y_1 = new PrimitiveArrayDescriptor(primitiveSerializer.o1t());
  }
  PrimitiveArraySerializer.prototype.o1t = function () {
    return this.w1y_1;
  };
  PrimitiveArraySerializer.prototype.x1y = function (_this__u8e3s4) {
    return _this__u8e3s4.y1y();
  };
  PrimitiveArraySerializer.prototype.z1y = function (_this__u8e3s4) {
    return _this__u8e3s4.i11();
  };
  PrimitiveArraySerializer.prototype.a1z = function (_this__u8e3s4, size) {
    return _this__u8e3s4.e9(size);
  };
  PrimitiveArraySerializer.prototype.b1z = function (_this__u8e3s4) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use writeContents instead');
  };
  PrimitiveArraySerializer.prototype.c1z = function (_this__u8e3s4) {
    return this.b1z((_this__u8e3s4 == null ? true : isObject(_this__u8e3s4)) ? _this__u8e3s4 : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.d1z = function (_this__u8e3s4, index, element) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use Builder.append instead');
  };
  PrimitiveArraySerializer.prototype.e1z = function () {
    return this.g1z(this.f1z());
  };
  PrimitiveArraySerializer.prototype.k1z = function (encoder, value) {
    var size = this.l1z(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.w1y_1;
    var composite = encoder.z1x(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.PrimitiveArraySerializer.serialize.<anonymous>' call
    this.j1z(composite, value, size);
    composite.k1w(tmp0_encodeCollection);
  };
  PrimitiveArraySerializer.prototype.p1t = function (encoder, value) {
    return this.k1z(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.m1z = function (encoder, value) {
    return this.k1z(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.q1t = function (decoder) {
    return this.n1z(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  PrimitiveArrayBuilder.prototype.q1z = function (requiredCapacity, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      requiredCapacity = this.y1y() + 1 | 0;
    var tmp;
    if ($handler == null) {
      this.e9(requiredCapacity);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(requiredCapacity);
    }
    return tmp;
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.o1z_1 = elementSerializer;
  }
  CollectionLikeSerializer.prototype.m1z = function (encoder, value) {
    var size = this.l1z(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.o1t();
    var composite = encoder.z1x(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.c1z(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.w1x(this.o1t(), index, this.o1z_1, iterator.l());
      }
       while (inductionVariable < size);
    composite.k1w(tmp0_encodeCollection);
  };
  CollectionLikeSerializer.prototype.p1t = function (encoder, value) {
    return this.m1z(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  CollectionLikeSerializer.prototype.p1z = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    var tmp0_require = size >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.readAll.<anonymous>' call
      tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.h1z(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  CollectionLikeSerializer.prototype.h1z = function (decoder, index, builder, checkIndex) {
    var tmp = this.o1t();
    this.d1z(builder, index, decoder.v1w(tmp, index, this.o1z_1, null, 8, null));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.z1w($this.o1t());
    $this.a1z(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  AbstractCollectionSerializer.prototype.n1z = function (decoder, previous) {
    var tmp0_safe_receiver = previous;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.g1z(tmp0_safe_receiver);
    var builder = tmp1_elvis_lhs == null ? this.e1z() : tmp1_elvis_lhs;
    var startIndex = this.x1y(builder);
    var compositeDecoder = decoder.j1w(this.o1t());
    if (compositeDecoder.x1w()) {
      this.p1z(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.y1w(this.o1t());
        Companion_getInstance_1();
        if (index === -1)
          break $l$loop;
        var tmp = startIndex + index | 0;
        this.i1z(compositeDecoder, tmp, builder, false, 8, null);
      }
    }
    compositeDecoder.k1w(this.o1t());
    return this.z1y(builder);
  };
  AbstractCollectionSerializer.prototype.q1t = function (decoder) {
    return this.n1z(decoder, null);
  };
  AbstractCollectionSerializer.prototype.i1z = function (decoder, index, builder, checkIndex, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      checkIndex = true;
    var tmp;
    if ($handler == null) {
      this.h1z(decoder, index, builder, checkIndex);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.s1z_1 = kClass;
    this.t1z_1 = new ArrayClassDesc(eSerializer.o1t());
  }
  ReferenceArraySerializer.prototype.o1t = function () {
    return this.t1z_1;
  };
  ReferenceArraySerializer.prototype.u1z = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ReferenceArraySerializer.prototype.l1z = function (_this__u8e3s4) {
    return this.u1z((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.v1z = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  ReferenceArraySerializer.prototype.c1z = function (_this__u8e3s4) {
    return this.v1z((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.e1z = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    return tmp$ret$0;
  };
  ReferenceArraySerializer.prototype.w1z = function (_this__u8e3s4) {
    return _this__u8e3s4.c();
  };
  ReferenceArraySerializer.prototype.x1y = function (_this__u8e3s4) {
    return this.w1z(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.x1z = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.s1z_1);
  };
  ReferenceArraySerializer.prototype.z1y = function (_this__u8e3s4) {
    return this.x1z(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.y1z = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  ReferenceArraySerializer.prototype.g1z = function (_this__u8e3s4) {
    return this.y1z((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.z1z = function (_this__u8e3s4, size) {
    return _this__u8e3s4.e9(size);
  };
  ReferenceArraySerializer.prototype.a1z = function (_this__u8e3s4, size) {
    return this.z1z(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  ReferenceArraySerializer.prototype.a20 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.k8(index, element);
  };
  ReferenceArraySerializer.prototype.d1z = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.a20(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  CollectionSerializer.prototype.c20 = function (_this__u8e3s4) {
    return _this__u8e3s4.c();
  };
  CollectionSerializer.prototype.l1z = function (_this__u8e3s4) {
    return this.c20((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CollectionSerializer.prototype.d20 = function (_this__u8e3s4) {
    return _this__u8e3s4.j();
  };
  CollectionSerializer.prototype.c1z = function (_this__u8e3s4) {
    return this.d20((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.e20_1 = keySerializer;
    this.f20_1 = valueSerializer;
  }
  MapLikeSerializer.prototype.p1z = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    var tmp0_require = size >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readAll.<anonymous>' call
      tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.t_1;
    var last = progression.u_1;
    var step_0 = progression.v_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.h1z(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  MapLikeSerializer.prototype.h1z = function (decoder, index, builder, checkIndex) {
    var tmp = this.o1t();
    var key = decoder.v1w(tmp, index, this.e20_1, null, 8, null);
    var tmp_0;
    if (checkIndex) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp0_also = decoder.y1w(this.o1t());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>' call
      // Inline function 'kotlin.require' call
      var tmp0_require = tmp0_also === (index + 1 | 0);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>.<anonymous>' call
        tmp$ret$0 = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + tmp0_also;
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp$ret$1 = tmp0_also;
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = index + 1 | 0;
    }
    var vIndex = tmp_0;
    var tmp_1;
    var tmp_2;
    if (builder.p1(key)) {
      var tmp_3 = this.f20_1.o1t().x1u();
      tmp_2 = !(tmp_3 instanceof PrimitiveKind);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = decoder.u1w(this.o1t(), vIndex, this.f20_1, getValue(builder, key));
    } else {
      var tmp_4 = this.o1t();
      tmp_1 = decoder.v1w(tmp_4, vIndex, this.f20_1, null, 8, null);
    }
    var value = tmp_1;
    // Inline function 'kotlin.collections.set' call
    builder.u2(key, value);
  };
  MapLikeSerializer.prototype.m1z = function (encoder, value) {
    var size = this.l1z(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.o1t();
    var composite = encoder.z1x(tmp0_encodeCollection, size);
    // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>' call
    var iterator = this.c1z(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = iterator;
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.n();
      var k = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.o();
      var v = tmp$ret$2;
      var tmp = this.o1t();
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      composite.w1x(tmp, tmp0, this.e20_1, k);
      var tmp_0 = this.o1t();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      composite.w1x(tmp_0, tmp1, this.f20_1, v);
    }
    composite.k1w(tmp0_encodeCollection);
  };
  MapLikeSerializer.prototype.p1t = function (encoder, value) {
    return this.m1z(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.i20_1 = new LinkedHashMapClassDesc(kSerializer.o1t(), vSerializer.o1t());
  }
  LinkedHashMapSerializer.prototype.o1t = function () {
    return this.i20_1;
  };
  LinkedHashMapSerializer.prototype.j20 = function (_this__u8e3s4) {
    return _this__u8e3s4.c();
  };
  LinkedHashMapSerializer.prototype.l1z = function (_this__u8e3s4) {
    return this.j20((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.k20 = function (_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = _this__u8e3s4.m().j();
    return tmp$ret$0;
  };
  LinkedHashMapSerializer.prototype.c1z = function (_this__u8e3s4) {
    return this.k20((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.e1z = function () {
    return LinkedHashMap_init_$Create$();
  };
  LinkedHashMapSerializer.prototype.l20 = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.c(), 2);
  };
  LinkedHashMapSerializer.prototype.x1y = function (_this__u8e3s4) {
    return this.l20(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.m20 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  LinkedHashMapSerializer.prototype.z1y = function (_this__u8e3s4) {
    return this.m20(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.n20 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  LinkedHashMapSerializer.prototype.g1z = function (_this__u8e3s4) {
    return this.n20((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.o20 = function (_this__u8e3s4, size) {
  };
  LinkedHashMapSerializer.prototype.a1z = function (_this__u8e3s4, size) {
    return this.o20(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.r20_1 = new HashMapClassDesc(kSerializer.o1t(), vSerializer.o1t());
  }
  HashMapSerializer.prototype.o1t = function () {
    return this.r20_1;
  };
  HashMapSerializer.prototype.j20 = function (_this__u8e3s4) {
    return _this__u8e3s4.c();
  };
  HashMapSerializer.prototype.l1z = function (_this__u8e3s4) {
    return this.j20((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.k20 = function (_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = _this__u8e3s4.m().j();
    return tmp$ret$0;
  };
  HashMapSerializer.prototype.c1z = function (_this__u8e3s4) {
    return this.k20((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.e1z = function () {
    return HashMap_init_$Create$();
  };
  HashMapSerializer.prototype.s20 = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.c(), 2);
  };
  HashMapSerializer.prototype.x1y = function (_this__u8e3s4) {
    return this.s20(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.t20 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  HashMapSerializer.prototype.z1y = function (_this__u8e3s4) {
    return this.t20(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.n20 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  HashMapSerializer.prototype.g1z = function (_this__u8e3s4) {
    return this.n20((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.u20 = function (_this__u8e3s4, size) {
  };
  HashMapSerializer.prototype.a1z = function (_this__u8e3s4, size) {
    return this.u20(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.w20_1 = new ArrayListClassDesc(element.o1t());
  }
  ArrayListSerializer.prototype.o1t = function () {
    return this.w20_1;
  };
  ArrayListSerializer.prototype.e1z = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    return tmp$ret$0;
  };
  ArrayListSerializer.prototype.x20 = function (_this__u8e3s4) {
    return _this__u8e3s4.c();
  };
  ArrayListSerializer.prototype.x1y = function (_this__u8e3s4) {
    return this.x20(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.y20 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  ArrayListSerializer.prototype.z1y = function (_this__u8e3s4) {
    return this.y20(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.z20 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  ArrayListSerializer.prototype.g1z = function (_this__u8e3s4) {
    return this.z20((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.a21 = function (_this__u8e3s4, size) {
    return _this__u8e3s4.e9(size);
  };
  ArrayListSerializer.prototype.a1z = function (_this__u8e3s4, size) {
    return this.a21(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  ArrayListSerializer.prototype.b21 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.k8(index, element);
  };
  ArrayListSerializer.prototype.d1z = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.b21(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.d21_1 = new HashSetClassDesc(eSerializer.o1t());
  }
  HashSetSerializer.prototype.o1t = function () {
    return this.d21_1;
  };
  HashSetSerializer.prototype.e1z = function () {
    return HashSet_init_$Create$();
  };
  HashSetSerializer.prototype.e21 = function (_this__u8e3s4) {
    return _this__u8e3s4.c();
  };
  HashSetSerializer.prototype.x1y = function (_this__u8e3s4) {
    return this.e21(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.f21 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  HashSetSerializer.prototype.z1y = function (_this__u8e3s4) {
    return this.f21(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.g21 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  HashSetSerializer.prototype.g1z = function (_this__u8e3s4) {
    return this.g21((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.h21 = function (_this__u8e3s4, size) {
  };
  HashSetSerializer.prototype.a1z = function (_this__u8e3s4, size) {
    return this.h21(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  HashSetSerializer.prototype.i21 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.a(element);
  };
  HashSetSerializer.prototype.d1z = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.i21(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.k21_1 = new LinkedHashSetClassDesc(eSerializer.o1t());
  }
  LinkedHashSetSerializer.prototype.o1t = function () {
    return this.k21_1;
  };
  LinkedHashSetSerializer.prototype.e1z = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.linkedSetOf' call
    tmp$ret$0 = LinkedHashSet_init_$Create$();
    return tmp$ret$0;
  };
  LinkedHashSetSerializer.prototype.l21 = function (_this__u8e3s4) {
    return _this__u8e3s4.c();
  };
  LinkedHashSetSerializer.prototype.x1y = function (_this__u8e3s4) {
    return this.l21(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.m21 = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  LinkedHashSetSerializer.prototype.z1y = function (_this__u8e3s4) {
    return this.m21(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.g21 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  LinkedHashSetSerializer.prototype.g1z = function (_this__u8e3s4) {
    return this.g21((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.n21 = function (_this__u8e3s4, size) {
  };
  LinkedHashSetSerializer.prototype.a1z = function (_this__u8e3s4, size) {
    return this.n21(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  LinkedHashSetSerializer.prototype.o21 = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.a(element);
  };
  LinkedHashSetSerializer.prototype.d1z = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.o21(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.p21_1 = longArray(0);
  }
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    Companion_getInstance();
    var elementsInLastSlot = elementsCount & (64 - 1 | 0);
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).n7(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    Companion_getInstance();
    var offsetInSlot = index & (64 - 1 | 0);
    $this.t21_1[slot] = $this.t21_1[slot].de((new Long(1, 0)).n7(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.t21_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = slot + 1 | 0;
        Companion_getInstance();
        var slotOffset = imul(tmp, 64);
        var slotMarks = $this.t21_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.ce());
          slotMarks = slotMarks.de((new Long(1, 0)).n7(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.r21_1($this.q21_1, index)) {
            $this.t21_1[slot] = slotMarks;
            return index;
          }
        }
        $this.t21_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    Companion_getInstance_1();
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_2();
    this.q21_1 = descriptor;
    this.r21_1 = readIfAbsent;
    var elementsCount = this.q21_1.v1u();
    Companion_getInstance();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      Companion_getInstance();
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).n7(elementsCount);
      }
      tmp.s21_1 = tmp_0;
      this.t21_1 = Companion_getInstance_2().p21_1;
    } else {
      this.s21_1 = new Long(0, 0);
      this.t21_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  ElementMarker.prototype.u21 = function (index) {
    Companion_getInstance();
    if (index < 64) {
      this.s21_1 = this.s21_1.de((new Long(1, 0)).n7(index));
    } else {
      markHigh(this, index);
    }
  };
  ElementMarker.prototype.v21 = function () {
    var elementsCount = this.q21_1.v1u();
    while (!this.s21_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.s21_1.ce());
      this.s21_1 = this.s21_1.de((new Long(1, 0)).n7(index));
      if (this.r21_1(this.q21_1, index)) {
        return index;
      }
    }
    Companion_getInstance();
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    Companion_getInstance_1();
    return -1;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.i22_1 = true;
  }
  InlineClassDescriptor.prototype.w1u = function () {
    return this.i22_1;
  };
  InlineClassDescriptor.prototype.hashCode = function () {
    return imul(PluginGeneratedSerialDescriptor.prototype.hashCode.call(this), 31);
  };
  InlineClassDescriptor.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.t1u() === other.t1u())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = tmp0__anonymous__q1qw7t.i22_1 ? contentEquals(this.v22(), tmp0__anonymous__q1qw7t.v22()) : false;
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.v1u() === other.v1u())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.v1u();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.z1u(index).t1u() === other.z1u(index).t1u())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.z1u(index).x1u(), other.z1u(index).x1u())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.x22_1 = $primitiveSerializer;
  }
  InlinePrimitiveDescriptor$1.prototype.y22 = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [this.x22_1];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  InlinePrimitiveDescriptor$1.prototype.o1t = function () {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  InlinePrimitiveDescriptor$1.prototype.p1t = function (encoder, value) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unsupported');
  };
  InlinePrimitiveDescriptor$1.prototype.q1t = function (decoder) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unsupported');
  };
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.a23_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_getInstance()));
  }
  UIntSerializer.prototype.o1t = function () {
    return this.a23_1;
  };
  UIntSerializer.prototype.b23 = function (encoder, value) {
    var tmp = encoder.m1x(this.a23_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UInt.toInt' call
    tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.g1x(tmp$ret$0);
  };
  UIntSerializer.prototype.p1t = function (encoder, value) {
    return this.b23(encoder, value instanceof UInt ? value.v6_1 : THROW_CCE());
  };
  UIntSerializer.prototype.c23 = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    var tmp0_toUInt = decoder.g1w(this.a23_1).a1w();
    tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt);
    return tmp$ret$0;
  };
  UIntSerializer.prototype.q1t = function (decoder) {
    return new UInt(this.c23(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.d23_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_5(Companion_getInstance()));
  }
  ULongSerializer.prototype.o1t = function () {
    return this.d23_1;
  };
  ULongSerializer.prototype.e23 = function (encoder, value) {
    var tmp = encoder.m1x(this.d23_1);
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.toLong' call
    tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.h1x(tmp$ret$0);
  };
  ULongSerializer.prototype.p1t = function (encoder, value) {
    return this.e23(encoder, value instanceof ULong ? value.c7_1 : THROW_CCE());
  };
  ULongSerializer.prototype.f23 = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    var tmp0_toULong = decoder.g1w(this.d23_1).b1w();
    tmp$ret$0 = _ULong___init__impl__c78o9k(tmp0_toULong);
    return tmp$ret$0;
  };
  ULongSerializer.prototype.q1t = function (decoder) {
    return new ULong(this.f23(decoder));
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.g23_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_8(ByteCompanionObject_getInstance()));
  }
  UByteSerializer.prototype.o1t = function () {
    return this.g23_1;
  };
  UByteSerializer.prototype.h23 = function (encoder, value) {
    var tmp = encoder.m1x(this.g23_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UByte.toByte' call
    tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.e1x(tmp$ret$0);
  };
  UByteSerializer.prototype.p1t = function (encoder, value) {
    return this.h23(encoder, value instanceof UByte ? value.o6_1 : THROW_CCE());
  };
  UByteSerializer.prototype.i23 = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUByte' call
    var tmp0_toUByte = decoder.g1w(this.g23_1).y1v();
    tmp$ret$0 = _UByte___init__impl__g9hnc4(tmp0_toUByte);
    return tmp$ret$0;
  };
  UByteSerializer.prototype.q1t = function (decoder) {
    return new UByte(this.i23(decoder));
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.j23_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_7(ShortCompanionObject_getInstance()));
  }
  UShortSerializer.prototype.o1t = function () {
    return this.j23_1;
  };
  UShortSerializer.prototype.k23 = function (encoder, value) {
    var tmp = encoder.m1x(this.j23_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toShort' call
    tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.f1x(tmp$ret$0);
  };
  UShortSerializer.prototype.p1t = function (encoder, value) {
    return this.k23(encoder, value instanceof UShort ? value.i7_1 : THROW_CCE());
  };
  UShortSerializer.prototype.l23 = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    var tmp0_toUShort = decoder.g1w(this.j23_1).z1v();
    tmp$ret$0 = _UShort___init__impl__jigrne(tmp0_toUShort);
    return tmp$ret$0;
  };
  UShortSerializer.prototype.q1t = function (decoder) {
    return new UShort(this.l23(decoder));
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function SerialDescriptorForNullable(original) {
    this.n1u_1 = original;
    this.o1u_1 = this.n1u_1.t1u() + '?';
    this.p1u_1 = cachedSerialNames(this.n1u_1);
  }
  SerialDescriptorForNullable.prototype.u1u = function () {
    return this.n1u_1.u1u();
  };
  SerialDescriptorForNullable.prototype.v1u = function () {
    return this.n1u_1.v1u();
  };
  SerialDescriptorForNullable.prototype.w1u = function () {
    return this.n1u_1.w1u();
  };
  SerialDescriptorForNullable.prototype.x1u = function () {
    return this.n1u_1.x1u();
  };
  SerialDescriptorForNullable.prototype.y1u = function (index) {
    return this.n1u_1.y1u(index);
  };
  SerialDescriptorForNullable.prototype.z1u = function (index) {
    return this.n1u_1.z1u(index);
  };
  SerialDescriptorForNullable.prototype.a1v = function (name) {
    return this.n1u_1.a1v(name);
  };
  SerialDescriptorForNullable.prototype.b1v = function (index) {
    return this.n1u_1.b1v(index);
  };
  SerialDescriptorForNullable.prototype.c1v = function (index) {
    return this.n1u_1.c1v(index);
  };
  SerialDescriptorForNullable.prototype.t1u = function () {
    return this.o1u_1;
  };
  SerialDescriptorForNullable.prototype.t1v = function () {
    return this.p1u_1;
  };
  SerialDescriptorForNullable.prototype.m1u = function () {
    return true;
  };
  SerialDescriptorForNullable.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.n1u_1, other.n1u_1))
      return false;
    return true;
  };
  SerialDescriptorForNullable.prototype.toString = function () {
    return '' + this.n1u_1 + '?';
  };
  SerialDescriptorForNullable.prototype.hashCode = function () {
    return imul(hashCode(this.n1u_1), 31);
  };
  function NullableSerializer(serializer) {
    this.m23_1 = serializer;
    this.n23_1 = new SerialDescriptorForNullable(this.m23_1.o1t());
  }
  NullableSerializer.prototype.o1t = function () {
    return this.n23_1;
  };
  NullableSerializer.prototype.o23 = function (encoder, value) {
    if (!(value == null)) {
      encoder.y1x();
      encoder.x1x(this.m23_1, value);
    } else {
      encoder.c1x();
    }
  };
  NullableSerializer.prototype.p1t = function (encoder, value) {
    return this.o23(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  NullableSerializer.prototype.q1t = function (decoder) {
    return decoder.v1v() ? decoder.i1w(this.m23_1) : decoder.w1v();
  };
  NullableSerializer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof NullableSerializer)
      other;
    else
      THROW_CCE();
    if (!equals(this.m23_1, other.m23_1))
      return false;
    return true;
  };
  NullableSerializer.prototype.hashCode = function () {
    return hashCode(this.m23_1);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.w1t_1 = this$0.q23_1;
      return Unit_getInstance();
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor$default($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null);
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.p23_1 = objectInstance;
    this.q23_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.r23_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  ObjectSerializer.prototype.o1t = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = descriptor$factory_0();
    tmp$ret$0 = this.r23_1.o();
    return tmp$ret$0;
  };
  ObjectSerializer.prototype.p1t = function (encoder, value) {
    encoder.j1w(this.o1t()).k1w(this.o1t());
  };
  ObjectSerializer.prototype.q1t = function (decoder) {
    var tmp$ret$1;
    // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
    var tmp0_decodeStructure = this.o1t();
    var composite = decoder.j1w(tmp0_decodeStructure);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.internal.ObjectSerializer.deserialize.<anonymous>' call
      var index = composite.y1w(this.o1t());
      Companion_getInstance_1();
      if (index === -1) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        throw SerializationException_init_$Create$('Unexpected index ' + index);
      }
    }
    var result = tmp$ret$0;
    composite.k1w(tmp0_decodeStructure);
    tmp$ret$1 = result;
    return this.p23_1;
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.o1t();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    init_properties_Platform_common_kt_9ujmfm();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function compactArray(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    var tmp$ret$2;
    // Inline function 'kotlin.takeUnless' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = _this__u8e3s4 == null ? true : _this__u8e3s4.i();
    tmp$ret$1 = tmp$ret$0;
    if (!tmp$ret$1) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    tmp$ret$2 = tmp;
    var tmp0_safe_receiver = tmp$ret$2;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp$ret$3 = copyToArray(tmp0_safe_receiver);
      tmp_0 = tmp$ret$3;
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function cachedSerialNames(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.t1v();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.v1u());
    var inductionVariable = 0;
    var last = _this__u8e3s4.v1u();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp0_plusAssign = _this__u8e3s4.b1v(i);
        result.a(tmp0_plusAssign);
      }
       while (inductionVariable < last);
    return result;
  }
  function serializerNotRegistered(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    throw SerializationException_init_$Create$("Serializer for class '" + _this__u8e3s4.jb() + "' is not found.\n" + 'Mark the class as @Serializable or provide the serializer explicitly.');
  }
  function kclass(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    var t = _this__u8e3s4.vb();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        var tmp0_error = 'Captured type paramerer ' + t + ' from generic non-reified function. ' + ('Such functionality cannot be supported as ' + t + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + t);
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      } else {
        var tmp1_error = 'Only KClass supported as classifier, got ' + t;
        throw IllegalStateException_init_$Create$(toString(tmp1_error));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function init_properties_Platform_common_kt_9ujmfm() {
    if (properties_initialized_Platform_common_kt_i7q4ty) {
    } else {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      EMPTY_DESCRIPTOR_ARRAY = tmp$ret$2;
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    var missingFields = tmp$ret$0;
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var tmp0_plusAssign = descriptor.b1v(i);
          missingFields.a(tmp0_plusAssign);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.t1u());
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.t1u());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    var tmp$ret$4;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.j();
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      var tmp = imul(31, tmp0__anonymous__q1qw7t);
      var tmp$ret$1;
      // Inline function 'kotlin.hashCode' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      tmp$ret$0 = element.t1u();
      var tmp0_hashCode = tmp$ret$0;
      var tmp0_safe_receiver = tmp0_hashCode;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      tmp$ret$2 = tmp + tmp$ret$1 | 0;
      accumulator = tmp$ret$2;
    }
    tmp$ret$3 = accumulator;
    tmp$ret$4 = tmp$ret$3;
    var namesHash = tmp$ret$4;
    var tmp$ret$9;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    var tmp$ret$8;
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.j();
    while (tmp0_iterator_0.k()) {
      var element_0 = tmp0_iterator_0.l();
      var tmp$ret$7;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0__anonymous__q1qw7t_0 = accumulator_0;
      var tmp_0 = imul(31, tmp0__anonymous__q1qw7t_0);
      var tmp$ret$6;
      // Inline function 'kotlin.hashCode' call
      var tmp$ret$5;
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      tmp$ret$5 = element_0.x1u();
      var tmp0_hashCode_0 = tmp$ret$5;
      var tmp0_safe_receiver_0 = tmp0_hashCode_0;
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      tmp$ret$6 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
      tmp$ret$7 = tmp_0 + tmp$ret$6 | 0;
      accumulator_0 = tmp$ret$7;
    }
    tmp$ret$8 = accumulator_0;
    tmp$ret$9 = tmp$ret$8;
    var kindHash = tmp$ret$9;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = childSerializers$factory();
    tmp$ret$0 = $this.s22_1.o();
    return tmp$ret$0;
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = _hashCode$factory_0();
    tmp$ret$0 = $this.u22_1.o();
    return tmp$ret$0;
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.n22_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = $this.n22_1[i];
        indices.u2(tmp0_set, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.k22_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y22();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.k22_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z22();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$(tmp1_safe_receiver.length);
        var tmp0_iterator = arrayIterator(tmp1_safe_receiver);
        while (tmp0_iterator.k()) {
          var item = tmp0_iterator.l();
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          tmp$ret$0 = item.o1t();
          tmp0_mapTo.a(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.v22());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.b1v(i) + ': ' + this$0.z1u(i).t1u();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    this.j22_1 = serialName;
    this.k22_1 = generatedSerializer;
    this.l22_1 = elementsCount;
    this.m22_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.l22_1;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.names.<anonymous>' call
      tmp$ret$1 = '[UNINITIALIZED]';
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.n22_1 = tmp_2;
    var tmp_4 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.l22_1;
    tmp$ret$2 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp_4.o22_1 = tmp$ret$2;
    this.p22_1 = null;
    this.q22_1 = booleanArray(this.l22_1);
    this.r22_1 = emptyMap();
    var tmp_5 = this;
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_5.s22_1 = lazy(tmp_6, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_7 = this;
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_7.t22_1 = lazy(tmp_8, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_9 = this;
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_9.u22_1 = lazy(tmp_10, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  PluginGeneratedSerialDescriptor.prototype.t1u = function () {
    return this.j22_1;
  };
  PluginGeneratedSerialDescriptor.prototype.v1u = function () {
    return this.l22_1;
  };
  PluginGeneratedSerialDescriptor.prototype.x1u = function () {
    return CLASS_getInstance();
  };
  PluginGeneratedSerialDescriptor.prototype.u1u = function () {
    var tmp0_elvis_lhs = this.p22_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.t1v = function () {
    return this.r22_1.w1();
  };
  PluginGeneratedSerialDescriptor.prototype.v22 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = typeParameterDescriptors$factory();
    tmp$ret$0 = this.t22_1.o();
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.w22 = function (name, isOptional) {
    var tmp0_this = this;
    tmp0_this.m22_1 = tmp0_this.m22_1 + 1 | 0;
    this.n22_1[tmp0_this.m22_1] = name;
    this.q22_1[this.m22_1] = isOptional;
    this.o22_1[this.m22_1] = null;
    if (this.m22_1 === (this.l22_1 - 1 | 0)) {
      this.r22_1 = buildIndices(this);
    }
  };
  PluginGeneratedSerialDescriptor.prototype.z1u = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).o1t();
  };
  PluginGeneratedSerialDescriptor.prototype.c1v = function (index) {
    return getChecked_0(this.q22_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.y1u = function (index) {
    var tmp0_elvis_lhs = getChecked(this.o22_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.b1v = function (index) {
    return getChecked(this.n22_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.a1v = function (name) {
    var tmp0_elvis_lhs = this.r22_1.v1(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_1();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PluginGeneratedSerialDescriptor.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.t1u() === other.t1u())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = contentEquals(this.v22(), tmp0__anonymous__q1qw7t.v22());
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.v1u() === other.v1u())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.v1u();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.z1u(index).t1u() === other.z1u(index).t1u())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.z1u(index).x1u(), other.z1u(index).x1u())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  PluginGeneratedSerialDescriptor.prototype.toString = function () {
    var tmp = until(0, this.l22_1);
    var tmp_0 = this.t1u() + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, PluginGeneratedSerialDescriptor$toString$lambda(this), 24, null);
  };
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.v22();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    init_properties_PluginHelperInterfaces_kt_tblf27();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  function SerializerFactory() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function init_properties_PluginHelperInterfaces_kt_tblf27() {
    if (properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
    } else {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      EMPTY_SERIALIZER_ARRAY = tmp$ret$2;
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(Companion_getInstance_0()));
  }
  CharArraySerializer_0.prototype.v23 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  CharArraySerializer_0.prototype.l1z = function (_this__u8e3s4) {
    return this.v23((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.w23 = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  CharArraySerializer_0.prototype.g1z = function (_this__u8e3s4) {
    return this.w23((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.f1z = function () {
    return charArray(0);
  };
  CharArraySerializer_0.prototype.x23 = function (decoder, index, builder, checkIndex) {
    builder.a24(decoder.s1w(this.w1y_1, index));
  };
  CharArraySerializer_0.prototype.h1z = function (decoder, index, builder, checkIndex) {
    return this.x23(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  CharArraySerializer_0.prototype.b24 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.u1x(this.w1y_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  CharArraySerializer_0.prototype.j1z = function (encoder, content, size) {
    return this.b24(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(DoubleCompanionObject_getInstance()));
  }
  DoubleArraySerializer_0.prototype.e24 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  DoubleArraySerializer_0.prototype.l1z = function (_this__u8e3s4) {
    return this.e24((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.f24 = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  DoubleArraySerializer_0.prototype.g1z = function (_this__u8e3s4) {
    return this.f24((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.f1z = function () {
    return new Float64Array(0);
  };
  DoubleArraySerializer_0.prototype.g24 = function (decoder, index, builder, checkIndex) {
    builder.j24(decoder.r1w(this.w1y_1, index));
  };
  DoubleArraySerializer_0.prototype.h1z = function (decoder, index, builder, checkIndex) {
    return this.g24(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  DoubleArraySerializer_0.prototype.k24 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.t1x(this.w1y_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  DoubleArraySerializer_0.prototype.j1z = function (encoder, content, size) {
    return this.k24(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(FloatCompanionObject_getInstance()));
  }
  FloatArraySerializer_0.prototype.n24 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  FloatArraySerializer_0.prototype.l1z = function (_this__u8e3s4) {
    return this.n24((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.o24 = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  FloatArraySerializer_0.prototype.g1z = function (_this__u8e3s4) {
    return this.o24((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.f1z = function () {
    return new Float32Array(0);
  };
  FloatArraySerializer_0.prototype.p24 = function (decoder, index, builder, checkIndex) {
    builder.s24(decoder.q1w(this.w1y_1, index));
  };
  FloatArraySerializer_0.prototype.h1z = function (decoder, index, builder, checkIndex) {
    return this.p24(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  FloatArraySerializer_0.prototype.t24 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.s1x(this.w1y_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  FloatArraySerializer_0.prototype.j1z = function (encoder, content, size) {
    return this.t24(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(Companion_getInstance()));
  }
  LongArraySerializer_0.prototype.w24 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  LongArraySerializer_0.prototype.l1z = function (_this__u8e3s4) {
    return this.w24((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.x24 = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  LongArraySerializer_0.prototype.g1z = function (_this__u8e3s4) {
    return this.x24((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.f1z = function () {
    return longArray(0);
  };
  LongArraySerializer_0.prototype.y24 = function (decoder, index, builder, checkIndex) {
    builder.b25(decoder.p1w(this.w1y_1, index));
  };
  LongArraySerializer_0.prototype.h1z = function (decoder, index, builder, checkIndex) {
    return this.y24(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  LongArraySerializer_0.prototype.c25 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.r1x(this.w1y_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  LongArraySerializer_0.prototype.j1z = function (encoder, content, size) {
    return this.c25(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(IntCompanionObject_getInstance()));
  }
  IntArraySerializer_0.prototype.f25 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  IntArraySerializer_0.prototype.l1z = function (_this__u8e3s4) {
    return this.f25((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.g25 = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  IntArraySerializer_0.prototype.g1z = function (_this__u8e3s4) {
    return this.g25((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.f1z = function () {
    return new Int32Array(0);
  };
  IntArraySerializer_0.prototype.h25 = function (decoder, index, builder, checkIndex) {
    builder.k25(decoder.o1w(this.w1y_1, index));
  };
  IntArraySerializer_0.prototype.h1z = function (decoder, index, builder, checkIndex) {
    return this.h25(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  IntArraySerializer_0.prototype.l25 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.q1x(this.w1y_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  IntArraySerializer_0.prototype.j1z = function (encoder, content, size) {
    return this.l25(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(ShortCompanionObject_getInstance()));
  }
  ShortArraySerializer_0.prototype.o25 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ShortArraySerializer_0.prototype.l1z = function (_this__u8e3s4) {
    return this.o25((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.p25 = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  ShortArraySerializer_0.prototype.g1z = function (_this__u8e3s4) {
    return this.p25((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.f1z = function () {
    return new Int16Array(0);
  };
  ShortArraySerializer_0.prototype.q25 = function (decoder, index, builder, checkIndex) {
    builder.t25(decoder.n1w(this.w1y_1, index));
  };
  ShortArraySerializer_0.prototype.h1z = function (decoder, index, builder, checkIndex) {
    return this.q25(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ShortArraySerializer_0.prototype.u25 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.p1x(this.w1y_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  ShortArraySerializer_0.prototype.j1z = function (encoder, content, size) {
    return this.u25(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(ByteCompanionObject_getInstance()));
  }
  ByteArraySerializer_0.prototype.x25 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ByteArraySerializer_0.prototype.l1z = function (_this__u8e3s4) {
    return this.x25((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.y25 = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  ByteArraySerializer_0.prototype.g1z = function (_this__u8e3s4) {
    return this.y25((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.f1z = function () {
    return new Int8Array(0);
  };
  ByteArraySerializer_0.prototype.z25 = function (decoder, index, builder, checkIndex) {
    builder.c26(decoder.m1w(this.w1y_1, index));
  };
  ByteArraySerializer_0.prototype.h1z = function (decoder, index, builder, checkIndex) {
    return this.z25(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ByteArraySerializer_0.prototype.d26 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.o1x(this.w1y_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  ByteArraySerializer_0.prototype.j1z = function (encoder, content, size) {
    return this.d26(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(BooleanCompanionObject_getInstance()));
  }
  BooleanArraySerializer_0.prototype.g26 = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  BooleanArraySerializer_0.prototype.l1z = function (_this__u8e3s4) {
    return this.g26((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.h26 = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  BooleanArraySerializer_0.prototype.g1z = function (_this__u8e3s4) {
    return this.h26((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.f1z = function () {
    return booleanArray(0);
  };
  BooleanArraySerializer_0.prototype.i26 = function (decoder, index, builder, checkIndex) {
    builder.l26(decoder.l1w(this.w1y_1, index));
  };
  BooleanArraySerializer_0.prototype.h1z = function (decoder, index, builder, checkIndex) {
    return this.i26(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  BooleanArraySerializer_0.prototype.m26 = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.n1x(this.w1y_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  BooleanArraySerializer_0.prototype.j1z = function (encoder, content, size) {
    return this.m26(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.y23_1 = bufferWithData;
    this.z23_1 = bufferWithData.length;
    this.e9(10);
  }
  CharArrayBuilder.prototype.y1y = function () {
    return this.z23_1;
  };
  CharArrayBuilder.prototype.e9 = function (requiredCapacity) {
    if (this.y23_1.length < requiredCapacity)
      this.y23_1 = copyOf(this.y23_1, coerceAtLeast(requiredCapacity, imul(this.y23_1.length, 2)));
  };
  CharArrayBuilder.prototype.a24 = function (c) {
    this.q1z(0, 1, null);
    var tmp = this.y23_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.z23_1;
    tmp0_this.z23_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  CharArrayBuilder.prototype.i11 = function () {
    return copyOf(this.y23_1, this.z23_1);
  };
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.h24_1 = bufferWithData;
    this.i24_1 = bufferWithData.length;
    this.e9(10);
  }
  DoubleArrayBuilder.prototype.y1y = function () {
    return this.i24_1;
  };
  DoubleArrayBuilder.prototype.e9 = function (requiredCapacity) {
    if (this.h24_1.length < requiredCapacity)
      this.h24_1 = copyOf_0(this.h24_1, coerceAtLeast(requiredCapacity, imul(this.h24_1.length, 2)));
  };
  DoubleArrayBuilder.prototype.j24 = function (c) {
    this.q1z(0, 1, null);
    var tmp = this.h24_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.i24_1;
    tmp0_this.i24_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  DoubleArrayBuilder.prototype.i11 = function () {
    return copyOf_0(this.h24_1, this.i24_1);
  };
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.q24_1 = bufferWithData;
    this.r24_1 = bufferWithData.length;
    this.e9(10);
  }
  FloatArrayBuilder.prototype.y1y = function () {
    return this.r24_1;
  };
  FloatArrayBuilder.prototype.e9 = function (requiredCapacity) {
    if (this.q24_1.length < requiredCapacity)
      this.q24_1 = copyOf_1(this.q24_1, coerceAtLeast(requiredCapacity, imul(this.q24_1.length, 2)));
  };
  FloatArrayBuilder.prototype.s24 = function (c) {
    this.q1z(0, 1, null);
    var tmp = this.q24_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.r24_1;
    tmp0_this.r24_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  FloatArrayBuilder.prototype.i11 = function () {
    return copyOf_1(this.q24_1, this.r24_1);
  };
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.z24_1 = bufferWithData;
    this.a25_1 = bufferWithData.length;
    this.e9(10);
  }
  LongArrayBuilder.prototype.y1y = function () {
    return this.a25_1;
  };
  LongArrayBuilder.prototype.e9 = function (requiredCapacity) {
    if (this.z24_1.length < requiredCapacity)
      this.z24_1 = copyOf_2(this.z24_1, coerceAtLeast(requiredCapacity, imul(this.z24_1.length, 2)));
  };
  LongArrayBuilder.prototype.b25 = function (c) {
    this.q1z(0, 1, null);
    var tmp = this.z24_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.a25_1;
    tmp0_this.a25_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  LongArrayBuilder.prototype.i11 = function () {
    return copyOf_2(this.z24_1, this.a25_1);
  };
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.i25_1 = bufferWithData;
    this.j25_1 = bufferWithData.length;
    this.e9(10);
  }
  IntArrayBuilder.prototype.y1y = function () {
    return this.j25_1;
  };
  IntArrayBuilder.prototype.e9 = function (requiredCapacity) {
    if (this.i25_1.length < requiredCapacity)
      this.i25_1 = copyOf_3(this.i25_1, coerceAtLeast(requiredCapacity, imul(this.i25_1.length, 2)));
  };
  IntArrayBuilder.prototype.k25 = function (c) {
    this.q1z(0, 1, null);
    var tmp = this.i25_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.j25_1;
    tmp0_this.j25_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  IntArrayBuilder.prototype.i11 = function () {
    return copyOf_3(this.i25_1, this.j25_1);
  };
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.r25_1 = bufferWithData;
    this.s25_1 = bufferWithData.length;
    this.e9(10);
  }
  ShortArrayBuilder.prototype.y1y = function () {
    return this.s25_1;
  };
  ShortArrayBuilder.prototype.e9 = function (requiredCapacity) {
    if (this.r25_1.length < requiredCapacity)
      this.r25_1 = copyOf_4(this.r25_1, coerceAtLeast(requiredCapacity, imul(this.r25_1.length, 2)));
  };
  ShortArrayBuilder.prototype.t25 = function (c) {
    this.q1z(0, 1, null);
    var tmp = this.r25_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.s25_1;
    tmp0_this.s25_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ShortArrayBuilder.prototype.i11 = function () {
    return copyOf_4(this.r25_1, this.s25_1);
  };
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.a26_1 = bufferWithData;
    this.b26_1 = bufferWithData.length;
    this.e9(10);
  }
  ByteArrayBuilder.prototype.y1y = function () {
    return this.b26_1;
  };
  ByteArrayBuilder.prototype.e9 = function (requiredCapacity) {
    if (this.a26_1.length < requiredCapacity)
      this.a26_1 = copyOf_5(this.a26_1, coerceAtLeast(requiredCapacity, imul(this.a26_1.length, 2)));
  };
  ByteArrayBuilder.prototype.c26 = function (c) {
    this.q1z(0, 1, null);
    var tmp = this.a26_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.b26_1;
    tmp0_this.b26_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ByteArrayBuilder.prototype.i11 = function () {
    return copyOf_5(this.a26_1, this.b26_1);
  };
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.j26_1 = bufferWithData;
    this.k26_1 = bufferWithData.length;
    this.e9(10);
  }
  BooleanArrayBuilder.prototype.y1y = function () {
    return this.k26_1;
  };
  BooleanArrayBuilder.prototype.e9 = function (requiredCapacity) {
    if (this.j26_1.length < requiredCapacity)
      this.j26_1 = copyOf_6(this.j26_1, coerceAtLeast(requiredCapacity, imul(this.j26_1.length, 2)));
  };
  BooleanArrayBuilder.prototype.l26 = function (c) {
    this.q1z(0, 1, null);
    var tmp = this.j26_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.k26_1;
    tmp0_this.k26_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  BooleanArrayBuilder.prototype.i11 = function () {
    return copyOf_6(this.j26_1, this.k26_1);
  };
  function get_BUILTIN_SERIALIZERS() {
    init_properties_Primitives_kt_u7dn2q();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.n26_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  StringSerializer.prototype.o1t = function () {
    return this.n26_1;
  };
  StringSerializer.prototype.o26 = function (encoder, value) {
    return encoder.l1x(value);
  };
  StringSerializer.prototype.p1t = function (encoder, value) {
    return this.o26(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  StringSerializer.prototype.q1t = function (decoder) {
    return decoder.f1w();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.p26_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  CharSerializer.prototype.o1t = function () {
    return this.p26_1;
  };
  CharSerializer.prototype.q26 = function (encoder, value) {
    return encoder.k1x(value);
  };
  CharSerializer.prototype.p1t = function (encoder, value) {
    return this.q26(encoder, value instanceof Char ? value.a5_1 : THROW_CCE());
  };
  CharSerializer.prototype.r26 = function (decoder) {
    return decoder.e1w();
  };
  CharSerializer.prototype.q1t = function (decoder) {
    return new Char(this.r26(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.s26_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  DoubleSerializer.prototype.o1t = function () {
    return this.s26_1;
  };
  DoubleSerializer.prototype.t26 = function (encoder, value) {
    return encoder.j1x(value);
  };
  DoubleSerializer.prototype.p1t = function (encoder, value) {
    return this.t26(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  DoubleSerializer.prototype.q1t = function (decoder) {
    return decoder.d1w();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.u26_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  FloatSerializer.prototype.o1t = function () {
    return this.u26_1;
  };
  FloatSerializer.prototype.v26 = function (encoder, value) {
    return encoder.i1x(value);
  };
  FloatSerializer.prototype.p1t = function (encoder, value) {
    return this.v26(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  FloatSerializer.prototype.q1t = function (decoder) {
    return decoder.c1w();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.w26_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  LongSerializer.prototype.o1t = function () {
    return this.w26_1;
  };
  LongSerializer.prototype.x26 = function (encoder, value) {
    return encoder.h1x(value);
  };
  LongSerializer.prototype.p1t = function (encoder, value) {
    return this.x26(encoder, value instanceof Long ? value : THROW_CCE());
  };
  LongSerializer.prototype.q1t = function (decoder) {
    return decoder.b1w();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.y26_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  IntSerializer.prototype.o1t = function () {
    return this.y26_1;
  };
  IntSerializer.prototype.z26 = function (encoder, value) {
    return encoder.g1x(value);
  };
  IntSerializer.prototype.p1t = function (encoder, value) {
    return this.z26(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  IntSerializer.prototype.q1t = function (decoder) {
    return decoder.a1w();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.a27_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  ShortSerializer.prototype.o1t = function () {
    return this.a27_1;
  };
  ShortSerializer.prototype.b27 = function (encoder, value) {
    return encoder.f1x(value);
  };
  ShortSerializer.prototype.p1t = function (encoder, value) {
    return this.b27(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ShortSerializer.prototype.q1t = function (decoder) {
    return decoder.z1v();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.c27_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  ByteSerializer.prototype.o1t = function () {
    return this.c27_1;
  };
  ByteSerializer.prototype.d27 = function (encoder, value) {
    return encoder.e1x(value);
  };
  ByteSerializer.prototype.p1t = function (encoder, value) {
    return this.d27(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ByteSerializer.prototype.q1t = function (decoder) {
    return decoder.y1v();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.e27_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  BooleanSerializer.prototype.o1t = function () {
    return this.e27_1;
  };
  BooleanSerializer.prototype.f27 = function (encoder, value) {
    return encoder.d1x(value);
  };
  BooleanSerializer.prototype.p1t = function (encoder, value) {
    return this.f27(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  BooleanSerializer.prototype.q1t = function (decoder) {
    return decoder.x1v();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.g27_1 = new ObjectSerializer('kotlin.Unit', Unit_getInstance());
  }
  UnitSerializer.prototype.o1t = function () {
    return this.g27_1.o1t();
  };
  UnitSerializer.prototype.h27 = function (decoder) {
    this.g27_1.q1t(decoder);
  };
  UnitSerializer.prototype.q1t = function (decoder) {
    this.h27(decoder);
    return Unit_getInstance();
  };
  UnitSerializer.prototype.i27 = function (encoder, value) {
    this.g27_1.p1t(encoder, Unit_getInstance());
  };
  UnitSerializer.prototype.p1t = function (encoder, value) {
    return this.i27(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.j27_1 = serialName;
    this.k27_1 = kind;
  }
  PrimitiveSerialDescriptor_0.prototype.t1u = function () {
    return this.j27_1;
  };
  PrimitiveSerialDescriptor_0.prototype.x1u = function () {
    return this.k27_1;
  };
  PrimitiveSerialDescriptor_0.prototype.v1u = function () {
    return 0;
  };
  PrimitiveSerialDescriptor_0.prototype.b1v = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.a1v = function (name) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.c1v = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.z1u = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.y1u = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.toString = function () {
    return 'PrimitiveDescriptor(' + this.j27_1 + ')';
  };
  function PrimitiveDescriptorSafe(serialName, kind) {
    init_properties_Primitives_kt_u7dn2q();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    init_properties_Primitives_kt_u7dn2q();
    var keys = get_BUILTIN_SERIALIZERS().w1();
    var tmp0_iterator = keys.j();
    while (tmp0_iterator.k()) {
      var primitive = tmp0_iterator.l();
      var simpleName = capitalize(ensureNotNull(primitive.jb()));
      var qualifiedName = 'kotlin.' + simpleName;
      if (equals_0(serialName, qualifiedName, true) ? true : equals_0(serialName, simpleName, true)) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exist ' + capitalize(simpleName) + 'Serializer.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function capitalize(_this__u8e3s4) {
    init_properties_Primitives_kt_u7dn2q();
    var tmp$ret$4;
    // Inline function 'kotlin.text.replaceFirstChar' call
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotEmpty' call
    tmp$ret$0 = charSequenceLength(_this__u8e3s4) > 0;
    if (tmp$ret$0) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.capitalize.<anonymous>' call
      var tmp0__anonymous__q1qw7t = charSequenceGet(_this__u8e3s4, 0);
      tmp$ret$1 = isLowerCase(tmp0__anonymous__q1qw7t) ? titlecase(tmp0__anonymous__q1qw7t) : toString_0(tmp0__anonymous__q1qw7t);
      var tmp_0 = toString(tmp$ret$1);
      var tmp$ret$3;
      // Inline function 'kotlin.text.substring' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$2 = _this__u8e3s4;
      tmp$ret$3 = tmp$ret$2.substring(1);
      tmp = tmp_0 + tmp$ret$3;
    } else {
      tmp = _this__u8e3s4;
    }
    tmp$ret$4 = tmp;
    return tmp$ret$4;
  }
  function builtinSerializerOrNull(_this__u8e3s4) {
    init_properties_Primitives_kt_u7dn2q();
    var tmp = get_BUILTIN_SERIALIZERS().v1(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function init_properties_Primitives_kt_u7dn2q() {
    if (properties_initialized_Primitives_kt_6dpii6) {
    } else {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().ic(), serializer_1(StringCompanionObject_getInstance())), to(getKClass(Char), serializer_2(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().lc(), CharArraySerializer()), to(PrimitiveClasses_getInstance().gc(), serializer_3(DoubleCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().rc(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().fc(), serializer_4(FloatCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().qc(), FloatArraySerializer()), to(getKClass(Long), serializer_5(Companion_getInstance())), to(PrimitiveClasses_getInstance().pc(), LongArraySerializer()), to(PrimitiveClasses_getInstance().ec(), serializer_6(IntCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().oc(), IntArraySerializer()), to(PrimitiveClasses_getInstance().dc(), serializer_7(ShortCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().nc(), ShortArraySerializer()), to(PrimitiveClasses_getInstance().cc(), serializer_8(ByteCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().mc(), ByteArraySerializer()), to(PrimitiveClasses_getInstance().bc(), serializer_9(BooleanCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().kc(), BooleanArraySerializer()), to(getKClass(Unit), serializer_10(Unit_getInstance()))]);
    }
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  NamedValueDecoder.prototype.n27 = function (_this__u8e3s4, index) {
    return this.p27(this.o27(_this__u8e3s4, index));
  };
  NamedValueDecoder.prototype.p27 = function (nestedName) {
    var tmp0_elvis_lhs = this.s27();
    return this.t27(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  NamedValueDecoder.prototype.o27 = function (desc, index) {
    return desc.b1v(index);
  };
  NamedValueDecoder.prototype.t27 = function (parentName, childName) {
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$0 = charSequenceLength(parentName) === 0;
    if (tmp$ret$0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  function tagBlock($this, tag, block) {
    $this.g28(tag);
    var r = block();
    if (!$this.r27_1) {
      $this.h28();
    }
    $this.r27_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.h1w($deserializer, $previousValue);
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.q27_1 = tmp$ret$0;
    this.r27_1 = false;
  }
  TaggedDecoder.prototype.w1w = function () {
    return get_EmptySerializersModule();
  };
  TaggedDecoder.prototype.u27 = function (tag) {
    throw SerializationException_init_$Create$('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  TaggedDecoder.prototype.v27 = function (tag) {
    return true;
  };
  TaggedDecoder.prototype.w27 = function (tag) {
    var tmp = this.u27(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.x27 = function (tag) {
    var tmp = this.u27(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.y27 = function (tag) {
    var tmp = this.u27(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.z27 = function (tag) {
    var tmp = this.u27(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.a28 = function (tag) {
    var tmp = this.u27(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.b28 = function (tag) {
    var tmp = this.u27(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.c28 = function (tag) {
    var tmp = this.u27(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.d28 = function (tag) {
    var tmp = this.u27(tag);
    return tmp instanceof Char ? tmp.a5_1 : THROW_CCE();
  };
  TaggedDecoder.prototype.e28 = function (tag) {
    var tmp = this.u27(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.f28 = function (tag, inlineDescriptor) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.internal.TaggedDecoder.decodeTaggedInline.<anonymous>' call
    this.g28(tag);
    tmp$ret$0 = this;
    return tmp$ret$0;
  };
  TaggedDecoder.prototype.h1w = function (deserializer, previousValue) {
    return this.i1w(deserializer);
  };
  TaggedDecoder.prototype.g1w = function (inlineDescriptor) {
    return this.f28(this.h28(), inlineDescriptor);
  };
  TaggedDecoder.prototype.v1v = function () {
    var tmp0_elvis_lhs = this.s27();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.v27(currentTag);
  };
  TaggedDecoder.prototype.w1v = function () {
    return null;
  };
  TaggedDecoder.prototype.x1v = function () {
    return this.w27(this.h28());
  };
  TaggedDecoder.prototype.y1v = function () {
    return this.x27(this.h28());
  };
  TaggedDecoder.prototype.z1v = function () {
    return this.y27(this.h28());
  };
  TaggedDecoder.prototype.a1w = function () {
    return this.z27(this.h28());
  };
  TaggedDecoder.prototype.b1w = function () {
    return this.a28(this.h28());
  };
  TaggedDecoder.prototype.c1w = function () {
    return this.b28(this.h28());
  };
  TaggedDecoder.prototype.d1w = function () {
    return this.c28(this.h28());
  };
  TaggedDecoder.prototype.e1w = function () {
    return this.d28(this.h28());
  };
  TaggedDecoder.prototype.f1w = function () {
    return this.e28(this.h28());
  };
  TaggedDecoder.prototype.j1w = function (descriptor) {
    return this;
  };
  TaggedDecoder.prototype.k1w = function (descriptor) {
  };
  TaggedDecoder.prototype.l1w = function (descriptor, index) {
    return this.w27(this.n27(descriptor, index));
  };
  TaggedDecoder.prototype.m1w = function (descriptor, index) {
    return this.x27(this.n27(descriptor, index));
  };
  TaggedDecoder.prototype.n1w = function (descriptor, index) {
    return this.y27(this.n27(descriptor, index));
  };
  TaggedDecoder.prototype.o1w = function (descriptor, index) {
    return this.z27(this.n27(descriptor, index));
  };
  TaggedDecoder.prototype.p1w = function (descriptor, index) {
    return this.a28(this.n27(descriptor, index));
  };
  TaggedDecoder.prototype.q1w = function (descriptor, index) {
    return this.b28(this.n27(descriptor, index));
  };
  TaggedDecoder.prototype.r1w = function (descriptor, index) {
    return this.c28(this.n27(descriptor, index));
  };
  TaggedDecoder.prototype.s1w = function (descriptor, index) {
    return this.d28(this.n27(descriptor, index));
  };
  TaggedDecoder.prototype.t1w = function (descriptor, index) {
    return this.e28(this.n27(descriptor, index));
  };
  TaggedDecoder.prototype.u1w = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.n27(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  TaggedDecoder.prototype.s27 = function () {
    return lastOrNull(this.q27_1);
  };
  TaggedDecoder.prototype.g28 = function (name) {
    this.q27_1.a(name);
  };
  TaggedDecoder.prototype.h28 = function () {
    var r = this.q27_1.v2(get_lastIndex_0(this.q27_1));
    this.r27_1 = true;
    return r;
  };
  function get_NULL() {
    init_properties_Tuples_kt_v8bvox();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.i28_1 = key;
    this.j28_1 = value;
  }
  MapEntry.prototype.n = function () {
    return this.i28_1;
  };
  MapEntry.prototype.o = function () {
    return this.j28_1;
  };
  MapEntry.prototype.toString = function () {
    return 'MapEntry(key=' + this.i28_1 + ', value=' + this.j28_1 + ')';
  };
  MapEntry.prototype.hashCode = function () {
    var result = this.i28_1 == null ? 0 : hashCode(this.i28_1);
    result = imul(result, 31) + (this.j28_1 == null ? 0 : hashCode(this.j28_1)) | 0;
    return result;
  };
  MapEntry.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.i28_1, tmp0_other_with_cast.i28_1))
      return false;
    if (!equals(this.j28_1, tmp0_other_with_cast.j28_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      var tmp = $keySerializer.o1t();
      $this$buildSerialDescriptor.c1u('key', tmp, null, false, 12, null);
      var tmp_0 = $valueSerializer.o1t();
      $this$buildSerialDescriptor.c1u('value', tmp_0, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.m28_1 = buildSerialDescriptor$default('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer), 4, null);
  }
  MapEntrySerializer_0.prototype.o1t = function () {
    return this.m28_1;
  };
  MapEntrySerializer_0.prototype.n28 = function (_this__u8e3s4) {
    return _this__u8e3s4.n();
  };
  MapEntrySerializer_0.prototype.o28 = function (_this__u8e3s4) {
    return this.n28((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype.p28 = function (_this__u8e3s4) {
    return _this__u8e3s4.o();
  };
  MapEntrySerializer_0.prototype.q28 = function (_this__u8e3s4) {
    return this.p28((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype.r28 = function (key, value) {
    return new MapEntry(key, value);
  };
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      var tmp = $keySerializer.o1t();
      $this$buildClassSerialDescriptor.c1u('first', tmp, null, false, 12, null);
      var tmp_0 = $valueSerializer.o1t();
      $this$buildClassSerialDescriptor.c1u('second', tmp_0, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.x28_1 = buildClassSerialDescriptor$default('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer), 2, null);
  }
  PairSerializer_0.prototype.o1t = function () {
    return this.x28_1;
  };
  PairSerializer_0.prototype.y28 = function (_this__u8e3s4) {
    return _this__u8e3s4.q2_1;
  };
  PairSerializer_0.prototype.o28 = function (_this__u8e3s4) {
    return this.y28(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  PairSerializer_0.prototype.z28 = function (_this__u8e3s4) {
    return _this__u8e3s4.r2_1;
  };
  PairSerializer_0.prototype.q28 = function (_this__u8e3s4) {
    return this.z28(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  PairSerializer_0.prototype.r28 = function (key, value) {
    return to(key, value);
  };
  function decodeSequentially_1($this, composite) {
    var a = composite.v1w($this.d29_1, 0, $this.a29_1, null, 8, null);
    var b = composite.v1w($this.d29_1, 1, $this.b29_1, null, 8, null);
    var c = composite.v1w($this.d29_1, 2, $this.c29_1, null, 8, null);
    composite.k1w($this.d29_1);
    return new Triple(a, b, c);
  }
  function decodeStructure($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.y1w($this.d29_1);
      Companion_getInstance_1();
      if (index === -1) {
        break mainLoop;
      } else {
        if (index === 0) {
          a = composite.v1w($this.d29_1, 0, $this.a29_1, null, 8, null);
        } else {
          if (index === 1) {
            b = composite.v1w($this.d29_1, 1, $this.b29_1, null, 8, null);
          } else {
            if (index === 2) {
              c = composite.v1w($this.d29_1, 2, $this.c29_1, null, 8, null);
            } else {
              throw SerializationException_init_$Create$('Unexpected index ' + index);
            }
          }
        }
      }
    }
    composite.k1w($this.d29_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$("Element 'third' is missing");
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : isObject(b)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : isObject(c)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      var tmp = this$0.a29_1.o1t();
      $this$buildClassSerialDescriptor.c1u('first', tmp, null, false, 12, null);
      var tmp_0 = this$0.b29_1.o1t();
      $this$buildClassSerialDescriptor.c1u('second', tmp_0, null, false, 12, null);
      var tmp_1 = this$0.c29_1.o1t();
      $this$buildClassSerialDescriptor.c1u('third', tmp_1, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.a29_1 = aSerializer;
    this.b29_1 = bSerializer;
    this.c29_1 = cSerializer;
    var tmp = this;
    tmp.d29_1 = buildClassSerialDescriptor$default('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this), 2, null);
  }
  TripleSerializer_0.prototype.o1t = function () {
    return this.d29_1;
  };
  TripleSerializer_0.prototype.e29 = function (encoder, value) {
    var structuredEncoder = encoder.j1w(this.d29_1);
    structuredEncoder.w1x(this.d29_1, 0, this.a29_1, value.h6_1);
    structuredEncoder.w1x(this.d29_1, 1, this.b29_1, value.i6_1);
    structuredEncoder.w1x(this.d29_1, 2, this.c29_1, value.j6_1);
    structuredEncoder.k1w(this.d29_1);
  };
  TripleSerializer_0.prototype.p1t = function (encoder, value) {
    return this.e29(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  TripleSerializer_0.prototype.q1t = function (decoder) {
    var composite = decoder.j1w(this.d29_1);
    if (composite.x1w()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure(this, composite);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.s28_1 = keySerializer;
    this.t28_1 = valueSerializer;
  }
  KeyValueSerializer.prototype.u28 = function (encoder, value) {
    var structuredEncoder = encoder.j1w(this.o1t());
    structuredEncoder.w1x(this.o1t(), 0, this.s28_1, this.o28(value));
    structuredEncoder.w1x(this.o1t(), 1, this.t28_1, this.q28(value));
    structuredEncoder.k1w(this.o1t());
  };
  KeyValueSerializer.prototype.p1t = function (encoder, value) {
    return this.u28(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  KeyValueSerializer.prototype.q1t = function (decoder) {
    var composite = decoder.j1w(this.o1t());
    if (composite.x1w()) {
      var tmp = this.o1t();
      var key = composite.v1w(tmp, 0, this.s28_1, null, 8, null);
      var tmp_0 = this.o1t();
      var value = composite.v1w(tmp_0, 1, this.t28_1, null, 8, null);
      return this.r28(key, value);
    }
    var key_0 = get_NULL();
    var value_0 = get_NULL();
    mainLoop: while (true) {
      var idx = composite.y1w(this.o1t());
      Companion_getInstance_1();
      if (idx === -1) {
        break mainLoop;
      } else {
        if (idx === 0) {
          var tmp_1 = this.o1t();
          key_0 = composite.v1w(tmp_1, 0, this.s28_1, null, 8, null);
        } else {
          if (idx === 1) {
            var tmp_2 = this.o1t();
            value_0 = composite.v1w(tmp_2, 1, this.t28_1, null, 8, null);
          } else {
            throw SerializationException_init_$Create$('Invalid index: ' + idx);
          }
        }
      }
    }
    composite.k1w(this.o1t());
    if (key_0 === get_NULL())
      throw SerializationException_init_$Create$("Element 'key' is missing");
    if (value_0 === get_NULL())
      throw SerializationException_init_$Create$("Element 'value' is missing");
    var tmp_3 = (key_0 == null ? true : isObject(key_0)) ? key_0 : THROW_CCE();
    return this.r28(tmp_3, (value_0 == null ? true : isObject(value_0)) ? value_0 : THROW_CCE());
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function init_properties_Tuples_kt_v8bvox() {
    if (properties_initialized_Tuples_kt_3vs7ar) {
    } else {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function get_EmptySerializersModule() {
    init_properties_SerializersModule_kt_swldyf();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  SerializersModule.prototype.k1u = function (kClass, typeArgumentsSerializers, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      typeArgumentsSerializers = emptyList();
    return $handler == null ? this.l1u(kClass, typeArgumentsSerializers) : $handler(kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.g29_1 = class2ContextualFactory;
    this.h29_1 = polyBase2Serializers;
    this.i29_1 = polyBase2DefaultSerializerProvider;
    this.j29_1 = polyBase2NamedSerializers;
    this.k29_1 = polyBase2DefaultDeserializerProvider;
  }
  SerialModuleImpl.prototype.d1y = function (baseClass, value) {
    if (!isInstanceOf(value, baseClass))
      return null;
    var tmp0_safe_receiver = this.h29_1.v1(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.i29_1.v1(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  SerialModuleImpl.prototype.c1y = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.j29_1.v1(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.get' call
      tmp$ret$0 = ((!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, Map) : false) ? tmp0_safe_receiver : THROW_CCE()).v1(serializedClassName);
      tmp = tmp$ret$0;
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.k29_1.v1(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  SerialModuleImpl.prototype.l1u = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.g29_1.v1(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l29(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  SerialModuleImpl.prototype.f29 = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.g29_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp0_forEach.m().j();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.k()) {
      var element = tmp0_iterator.l();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.n();
      var kclass = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.o();
      var serial = tmp$ret$2;
      var tmp0_subject = serial;
      if (tmp0_subject instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.o29_1;
        collector.p29(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (tmp0_subject instanceof WithTypeArguments) {
          collector.n29(kclass, serial.m29_1);
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp1_forEach = this.h29_1;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$3 = tmp1_forEach.m().j();
    var tmp0_iterator_0 = tmp$ret$3;
    while (tmp0_iterator_0.k()) {
      var element_0 = tmp0_iterator_0.l();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$4;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$4 = element_0.n();
      var baseClass = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$5 = element_0.o();
      var classMap = tmp$ret$5;
      // Inline function 'kotlin.collections.forEach' call
      var tmp$ret$6;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$6 = classMap.m().j();
      var tmp0_iterator_1 = tmp$ret$6;
      while (tmp0_iterator_1.k()) {
        var element_1 = tmp0_iterator_1.l();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        var tmp$ret$7;
        // Inline function 'kotlin.collections.component1' call
        tmp$ret$7 = element_1.n();
        var actualClass = tmp$ret$7;
        var tmp$ret$8;
        // Inline function 'kotlin.collections.component2' call
        tmp$ret$8 = element_1.o();
        var serializer = tmp$ret$8;
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.q29(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp2_forEach = this.i29_1;
    var tmp$ret$10;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$10 = tmp2_forEach.m().j();
    var tmp0_iterator_2 = tmp$ret$10;
    while (tmp0_iterator_2.k()) {
      var element_2 = tmp0_iterator_2.l();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$11;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$11 = element_2.n();
      var baseClass_0 = tmp$ret$11;
      var tmp$ret$12;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$12 = element_2.o();
      var provider = tmp$ret$12;
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.r29(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp3_forEach = this.k29_1;
    var tmp$ret$13;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$13 = tmp3_forEach.m().j();
    var tmp0_iterator_3 = tmp$ret$13;
    while (tmp0_iterator_3.k()) {
      var element_3 = tmp0_iterator_3.l();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$14;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$14 = element_3.n();
      var baseClass_1 = tmp$ret$14;
      var tmp$ret$15;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$15 = element_3.o();
      var provider_0 = tmp$ret$15;
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.s29(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless() {
  }
  function WithTypeArguments() {
  }
  function ContextualProvider() {
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function init_properties_SerializersModule_kt_swldyf() {
    if (properties_initialized_SerializersModule_kt_fjigjn) {
    } else {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith(serializer) {
    this.t29_1 = serializer;
  }
  SerializableWith.prototype.equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.t29_1.equals(tmp0_other_with_cast.t29_1))
      return false;
    return true;
  };
  SerializableWith.prototype.hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.t29_1.hashCode();
  };
  SerializableWith.prototype.toString = function () {
    return '@kotlinx.serialization.SerializableWith(serializer=' + this.t29_1 + ')';
  };
  function isInstanceOf(_this__u8e3s4, kclass) {
    return kclass.kb(_this__u8e3s4);
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp$ret$0 = copyToArray(_this__u8e3s4);
    return tmp$ret$0;
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp0_asDynamic = get_js(_this__u8e3s4);
      tmp$ret$0 = tmp0_asDynamic;
      var tmp0_safe_receiver = tmp$ret$0.Companion;
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.serializer();
      tmp = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().hc());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      tmp$ret$0 = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var assocObject = tmp$ret$0;
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.s23(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          if (get_isInterface(_this__u8e3s4)) {
            tmp_0 = new PolymorphicSerializer(_this__u8e3s4);
          } else {
            tmp_0 = null;
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      {
        tmp_2 = null;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$("Serializer for class '" + _this__u8e3s4.jb() + "' is not found.\n" + 'Mark the class as @Serializable or provide the serializer explicitly.\n' + 'On Kotlin/JS explicitly declared serializer should be used for interfaces and enums without @Serializable annotation');
  }
  function get_isInterface(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = get_js(_this__u8e3s4);
    tmp$ret$0 = tmp0_asDynamic;
    var tmp0_safe_receiver = tmp$ret$0.$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  //region block: post-declaration
  SerialDescriptorImpl.prototype.m1u = get_isNullable;
  SerialDescriptorImpl.prototype.w1u = get_isInline;
  AbstractDecoder.prototype.v1w = decodeSerializableElement$default;
  AbstractDecoder.prototype.i1w = decodeSerializableValue;
  AbstractDecoder.prototype.x1w = decodeSequentially;
  AbstractDecoder.prototype.z1w = decodeCollectionSize;
  AbstractEncoder.prototype.y1x = encodeNotNullMark;
  AbstractEncoder.prototype.z1x = beginCollection;
  AbstractEncoder.prototype.x1x = encodeSerializableValue;
  ListLikeDescriptor.prototype.m1u = get_isNullable;
  ListLikeDescriptor.prototype.w1u = get_isInline;
  ListLikeDescriptor.prototype.u1u = get_annotations;
  PrimitiveArrayDescriptor.prototype.m1u = get_isNullable;
  PrimitiveArrayDescriptor.prototype.w1u = get_isInline;
  PrimitiveArrayDescriptor.prototype.u1u = get_annotations;
  ArrayClassDesc.prototype.m1u = get_isNullable;
  ArrayClassDesc.prototype.w1u = get_isInline;
  ArrayClassDesc.prototype.u1u = get_annotations;
  MapLikeDescriptor.prototype.m1u = get_isNullable;
  MapLikeDescriptor.prototype.w1u = get_isInline;
  MapLikeDescriptor.prototype.u1u = get_annotations;
  LinkedHashMapClassDesc.prototype.m1u = get_isNullable;
  LinkedHashMapClassDesc.prototype.w1u = get_isInline;
  LinkedHashMapClassDesc.prototype.u1u = get_annotations;
  HashMapClassDesc.prototype.m1u = get_isNullable;
  HashMapClassDesc.prototype.w1u = get_isInline;
  HashMapClassDesc.prototype.u1u = get_annotations;
  ArrayListClassDesc.prototype.m1u = get_isNullable;
  ArrayListClassDesc.prototype.w1u = get_isInline;
  ArrayListClassDesc.prototype.u1u = get_annotations;
  LinkedHashSetClassDesc.prototype.m1u = get_isNullable;
  LinkedHashSetClassDesc.prototype.w1u = get_isInline;
  LinkedHashSetClassDesc.prototype.u1u = get_annotations;
  HashSetClassDesc.prototype.m1u = get_isNullable;
  HashSetClassDesc.prototype.w1u = get_isInline;
  HashSetClassDesc.prototype.u1u = get_annotations;
  PluginGeneratedSerialDescriptor.prototype.m1u = get_isNullable;
  PluginGeneratedSerialDescriptor.prototype.w1u = get_isInline;
  InlineClassDescriptor.prototype.m1u = get_isNullable;
  InlinePrimitiveDescriptor$1.prototype.z22 = typeParametersSerializers;
  PrimitiveSerialDescriptor_0.prototype.m1u = get_isNullable;
  PrimitiveSerialDescriptor_0.prototype.w1u = get_isInline;
  PrimitiveSerialDescriptor_0.prototype.u1u = get_annotations;
  TaggedDecoder.prototype.v1w = decodeSerializableElement$default;
  TaggedDecoder.prototype.i1w = decodeSerializableValue;
  TaggedDecoder.prototype.x1w = decodeSequentially;
  TaggedDecoder.prototype.z1w = decodeCollectionSize;
  NamedValueDecoder.prototype.i1w = decodeSerializableValue;
  NamedValueDecoder.prototype.v1w = decodeSerializableElement$default;
  NamedValueDecoder.prototype.x1w = decodeSequentially;
  NamedValueDecoder.prototype.z1w = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = buildSerialDescriptor$default;
  _.$_$.b = decodeSerializableElement$default;
  _.$_$.c = SerializationException_init_$Init$;
  _.$_$.d = UnknownFieldException_init_$Create$;
  _.$_$.e = SEALED_getInstance;
  _.$_$.f = STRING_getInstance;
  _.$_$.g = CONTEXTUAL_getInstance;
  _.$_$.h = ENUM_getInstance;
  _.$_$.i = LIST_getInstance;
  _.$_$.j = MAP_getInstance;
  _.$_$.k = Companion_getInstance_1;
  _.$_$.l = IntSerializer_getInstance;
  _.$_$.m = StringSerializer_getInstance;
  _.$_$.n = ListSerializer;
  _.$_$.o = MapSerializer;
  _.$_$.p = SetSerializer;
  _.$_$.q = get_nullable;
  _.$_$.r = serializer_1;
  _.$_$.s = serializer_14;
  _.$_$.t = serializer_11;
  _.$_$.u = serializer_13;
  _.$_$.v = serializer_12;
  _.$_$.w = PolymorphicKind;
  _.$_$.x = PrimitiveKind;
  _.$_$.y = PrimitiveSerialDescriptor;
  _.$_$.z = get_annotations;
  _.$_$.a1 = get_isInline;
  _.$_$.b1 = get_isNullable;
  _.$_$.c1 = SerialDescriptor;
  _.$_$.d1 = ENUM;
  _.$_$.e1 = getContextualDescriptor;
  _.$_$.f1 = AbstractDecoder;
  _.$_$.g1 = AbstractEncoder;
  _.$_$.h1 = decodeCollectionSize;
  _.$_$.i1 = decodeSequentially;
  _.$_$.j1 = CompositeDecoder;
  _.$_$.k1 = decodeSerializableValue;
  _.$_$.l1 = Decoder;
  _.$_$.m1 = beginCollection;
  _.$_$.n1 = encodeNotNullMark;
  _.$_$.o1 = Encoder;
  _.$_$.p1 = AbstractPolymorphicSerializer;
  _.$_$.q1 = ElementMarker;
  _.$_$.r1 = typeParametersSerializers;
  _.$_$.s1 = GeneratedSerializer;
  _.$_$.t1 = NamedValueDecoder;
  _.$_$.u1 = PluginGeneratedSerialDescriptor;
  _.$_$.v1 = SerializerFactory;
  _.$_$.w1 = jsonCachedSerialNames;
  _.$_$.x1 = throwMissingFieldException;
  _.$_$.y1 = get_EmptySerializersModule;
  _.$_$.z1 = contextual;
  _.$_$.a2 = SerializersModuleCollector;
  _.$_$.b2 = BinaryFormat;
  _.$_$.c2 = DeserializationStrategy;
  _.$_$.d2 = KSerializer;
  _.$_$.e2 = MissingFieldException;
  _.$_$.f2 = SealedClassSerializer;
  _.$_$.g2 = SerializationException;
  _.$_$.h2 = StringFormat;
  _.$_$.i2 = findPolymorphicSerializer;
  _.$_$.j2 = serializerOrNull;
  _.$_$.k2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core-js-ir.js.map
