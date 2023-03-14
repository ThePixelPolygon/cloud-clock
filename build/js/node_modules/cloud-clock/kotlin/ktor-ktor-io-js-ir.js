(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-io-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'ktor-ktor-io-js-ir'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io-js-ir'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-io-js-ir'.");
    }
    root['ktor-ktor-io-js-ir'] = factory(typeof this['ktor-ktor-io-js-ir'] === 'undefined' ? {} : this['ktor-ktor-io-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['88b0986a7186d029-atomicfu-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ensureNotNull = kotlin_kotlin.$_$.xb;
  var Unit_getInstance = kotlin_kotlin.$_$.b4;
  var toString = kotlin_kotlin.$_$.h9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var toLong = kotlin_kotlin.$_$.f9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var CoroutineImpl = kotlin_kotlin.$_$.o7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.a7;
  var classMeta = kotlin_kotlin.$_$.a8;
  var setMetadataFor = kotlin_kotlin.$_$.d9;
  var Long = kotlin_kotlin.$_$.gb;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.kb;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var CancellationException = kotlin_kotlin.$_$.z6;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.j1;
  var captureStack = kotlin_kotlin.$_$.u7;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.l3;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var interfaceMeta = kotlin_kotlin.$_$.j8;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var invokeOnCompletion$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var isInterface = kotlin_kotlin.$_$.s8;
  var Key_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var equals = kotlin_kotlin.$_$.c8;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.n1;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.q3;
  var charSequenceLength = kotlin_kotlin.$_$.y7;
  var objectMeta = kotlin_kotlin.$_$.c9;
  var Exception = kotlin_kotlin.$_$.db;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.s1;
  var numberToChar = kotlin_kotlin.$_$.z8;
  var coerceAtLeast = kotlin_kotlin.$_$.j9;
  var coerceAtMost = kotlin_kotlin.$_$.l9;
  var Companion_getInstance = kotlin_kotlin.$_$.v3;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.s2;
  var toByte = kotlin_kotlin.$_$.e9;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.i3;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var toShort = kotlin_kotlin.$_$.g9;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.h3;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.a4;
  var charSequenceGet = kotlin_kotlin.$_$.x7;
  var isLowSurrogate = kotlin_kotlin.$_$.ba;
  var isHighSurrogate = kotlin_kotlin.$_$.aa;
  var Job$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var coerceAtMost_0 = kotlin_kotlin.$_$.k9;
  var hashCode = kotlin_kotlin.$_$.i8;
  var lazy = kotlin_kotlin.$_$.dc;
  var KProperty1 = kotlin_kotlin.$_$.t9;
  var getPropertyCallableRef = kotlin_kotlin.$_$.g8;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var replace$default = kotlin_kotlin.$_$.q;
  var getStringHashCode = kotlin_kotlin.$_$.h8;
  var charSequenceSubSequence = kotlin_kotlin.$_$.z7;
  var extendThrowable = kotlin_kotlin.$_$.d8;
  var IndexOutOfBoundsException_init_$Create$_0 = kotlin_kotlin.$_$.e2;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.t1;
  var isCharSequence = kotlin_kotlin.$_$.o8;
  var trim = kotlin_kotlin.$_$.wa;
  var decodeToString = kotlin_kotlin.$_$.v9;
  var setOf = kotlin_kotlin.$_$.k6;
  var fillArrayVal = kotlin_kotlin.$_$.e8;
  var isObject = kotlin_kotlin.$_$.u8;
  //endregion
  //region block: pre-declaration
  setMetadataFor($awaitAtLeastNBytesAvailableForWriteCOROUTINE$0, '$awaitAtLeastNBytesAvailableForWriteCOROUTINE$0', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($awaitAtLeastNBytesAvailableForReadCOROUTINE$1, '$awaitAtLeastNBytesAvailableForReadCOROUTINE$1', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($writeFullyCOROUTINE$9, '$writeFullyCOROUTINE$9', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($writeFullyCOROUTINE$10, '$writeFullyCOROUTINE$10', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($readRemainingCOROUTINE$26, '$readRemainingCOROUTINE$26', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($readRemainingSuspendCOROUTINE$27, '$readRemainingSuspendCOROUTINE$27', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($readAvailableCOROUTINE$30, '$readAvailableCOROUTINE$30', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($readAvailableCOROUTINE$33, '$readAvailableCOROUTINE$33', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($awaitInternalAtLeast1COROUTINE$38, '$awaitInternalAtLeast1COROUTINE$38', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($awaitSuspendCOROUTINE$39, '$awaitSuspendCOROUTINE$39', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  function readRemaining$default(limit, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      Companion_getInstance();
      limit = new Long(-1, 2147483647);
    }
    return $handler == null ? this.i13(limit, $cont) : $handler(limit, $cont);
  }
  setMetadataFor(ByteReadChannel_1, 'ByteReadChannel', interfaceMeta, undefined, undefined, undefined, undefined, [3, 1, 2, 0, 5]);
  setMetadataFor(ByteChannelSequentialBase, 'ByteChannelSequentialBase', classMeta, undefined, [ByteReadChannel_1], undefined, undefined, [1, 3, 0, 2, 5]);
  setMetadataFor(ClosedWriteChannelException, 'ClosedWriteChannelException', classMeta, CancellationException, undefined, undefined, undefined, []);
  setMetadataFor(CloseElement, 'CloseElement', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(WriterScope, 'WriterScope', interfaceMeta, undefined, [CoroutineScope], undefined, undefined, []);
  setMetadataFor(ChannelJob, 'ChannelJob', classMeta, undefined, [Job], undefined, undefined, [0]);
  setMetadataFor(ChannelScope, 'ChannelScope', classMeta, undefined, [CoroutineScope, WriterScope], undefined, undefined, []);
  setMetadataFor(launchChannel$slambda, 'launchChannel$slambda', classMeta, CoroutineImpl, undefined, undefined, undefined, [1]);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Buffer, 'Buffer', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(InsufficientSpaceException, 'InsufficientSpaceException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor(Closeable, 'Closeable', interfaceMeta, undefined, undefined, undefined, undefined, []);
  function close() {
    this.zi();
  }
  setMetadataFor(ObjectPool, 'ObjectPool', interfaceMeta, undefined, [Closeable], undefined, undefined, []);
  setMetadataFor(DefaultPool, 'DefaultPool', classMeta, undefined, [ObjectPool], undefined, undefined, []);
  setMetadataFor(DefaultBufferPool, 'DefaultBufferPool', classMeta, DefaultPool, undefined, undefined, undefined, []);
  setMetadataFor(Output, 'Output', classMeta, undefined, [Closeable], undefined, undefined, []);
  setMetadataFor(BytePacketBuilder, 'BytePacketBuilder', classMeta, Output, undefined, undefined, undefined, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Input, 'Input', classMeta, undefined, [Closeable], undefined, undefined, []);
  setMetadataFor(ByteReadPacket, 'ByteReadPacket', classMeta, Input, undefined, undefined, undefined, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ChunkBuffer$Companion$Pool$1, undefined, classMeta, undefined, [ObjectPool], undefined, undefined, []);
  setMetadataFor(ChunkBuffer$Companion$EmptyPool$1, undefined, classMeta, undefined, [ObjectPool], undefined, undefined, []);
  setMetadataFor(NoPoolImpl, 'NoPoolImpl', classMeta, undefined, [ObjectPool], undefined, undefined, []);
  setMetadataFor(ChunkBuffer$Companion$NoPool$1, undefined, classMeta, NoPoolImpl, undefined, undefined, undefined, []);
  setMetadataFor(ChunkBuffer$Companion$NoPoolManuallyManaged$1, undefined, classMeta, NoPoolImpl, undefined, undefined, undefined, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ChunkBuffer, 'ChunkBuffer', classMeta, Buffer, undefined, undefined, undefined, []);
  setMetadataFor(MalformedUTF8InputException, 'MalformedUTF8InputException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor($sleepCOROUTINE$52, '$sleepCOROUTINE$52', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($trySuspendCOROUTINE$53, '$trySuspendCOROUTINE$53', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(AwaitingSlot, 'AwaitingSlot', classMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor($copyToSequentialImplCOROUTINE$54, '$copyToSequentialImplCOROUTINE$54', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor($copyToTailCOROUTINE$55, '$copyToTailCOROUTINE$55', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(ByteArrayPool$1, undefined, classMeta, DefaultPool, undefined, undefined, undefined, []);
  setMetadataFor(ByteChannelJS, 'ByteChannelJS', classMeta, ByteChannelSequentialBase, undefined, undefined, undefined, [3, 1, 0, 2, 5]);
  setMetadataFor(Companion_3, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DefaultAllocator, 'DefaultAllocator', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_4, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Memory, 'Memory', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_5, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Charset, 'Charset', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Charsets, 'Charsets', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CharsetDecoder, 'CharsetDecoder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CharsetEncoder, 'CharsetEncoder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CharsetImpl, 'CharsetImpl', classMeta, Charset, undefined, undefined, undefined, []);
  setMetadataFor(CharsetEncoderImpl, 'CharsetEncoderImpl', classMeta, CharsetEncoder, undefined, undefined, undefined, []);
  setMetadataFor(CharsetDecoderImpl, 'CharsetDecoderImpl', classMeta, CharsetDecoder, undefined, undefined, undefined, []);
  setMetadataFor(MalformedInputException, 'MalformedInputException', classMeta, Error, undefined, undefined, undefined, []);
  setMetadataFor(DecodeBufferResult, 'DecodeBufferResult', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(IOException, 'IOException', classMeta, Exception, undefined, undefined, undefined, []);
  setMetadataFor(EOFException, 'EOFException', classMeta, IOException, undefined, undefined, undefined, []);
  setMetadataFor(toKtor$1, undefined, classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(TextDecoderFallback, 'TextDecoderFallback', classMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function ByteReadChannel(content) {
    return ByteReadChannel_0(content, 0, content.length);
  }
  function ByteChannelSequentialBase_init_$Init$(initial, autoFlush, pool, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      pool = Companion_getInstance_4().fw_1;
    ByteChannelSequentialBase.call($this, initial, autoFlush, pool);
    return $this;
  }
  function _get_isCancelled__nhbn6y($this) {
    var tmp0_safe_receiver = $this.qw_1.kotlinx$atomicfu$value;
    return !((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.yw_1) == null);
  }
  function flushImpl($this) {
    if ($this.rw_1.om()) {
      $this.vw_1.ax();
      return false;
    }
    flushWrittenBytes($this);
    $this.vw_1.ax();
    return true;
  }
  function flushWrittenBytes($this) {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = $this.ww_1;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.flushWrittenBytes.<anonymous>' call
    var size = $this.rw_1.c();
    var buffer = ensureNotNull($this.rw_1.rx());
    $this.xw_1.sx(buffer);
    tmp$ret$0 = $this.ow_1.atomicfu$addAndGet(size);
    tmp$ret$1 = tmp$ret$0;
  }
  function ensureNotClosed($this) {
    if ($this.ux()) {
      var tmp0_elvis_lhs = $this.tx();
      throw tmp0_elvis_lhs == null ? new ClosedWriteChannelException('Channel ' + $this + ' is already closed') : tmp0_elvis_lhs;
    }
  }
  function ensureNotFailed($this) {
    var tmp0_safe_receiver = $this.tx();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  }
  function ensureNotFailed_0($this, closeable) {
    var tmp0_safe_receiver = $this.tx();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      closeable.rl();
      throw tmp0_safe_receiver;
    }
  }
  function readRemainingSuspend($this, builder, limit, $cont) {
    var tmp = new $readRemainingSuspendCOROUTINE$27($this, builder, limit, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  }
  function addBytesRead($this, count) {
    // Inline function 'kotlin.require' call
    var tmp0_require = count >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesRead.<anonymous>' call
      tmp$ret$0 = "Can't read negative amount of bytes: " + count;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.atomicfu.AtomicInt.minusAssign' call
    var tmp1_minusAssign = $this.pw_1;
    tmp1_minusAssign.atomicfu$getAndAdd(-count | 0);
    $this.mw_1.atomicfu$addAndGet$long(toLong(count));
    // Inline function 'kotlinx.atomicfu.AtomicInt.minusAssign' call
    var tmp2_minusAssign = $this.ow_1;
    tmp2_minusAssign.atomicfu$getAndAdd(-count | 0);
    // Inline function 'kotlin.check' call
    var tmp3_check = $this.pw_1.kotlinx$atomicfu$value >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp3_check) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesRead.<anonymous>' call
      tmp$ret$1 = 'Readable bytes count is negative: ' + $this.hy() + ', ' + count + ' in ' + $this;
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    var tmp4_check = $this.hy() >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp4_check) {
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesRead.<anonymous>' call
      tmp$ret$2 = 'Readable bytes count is negative: ' + $this.hy() + ', ' + count + ' in ' + $this;
      var message_1 = tmp$ret$2;
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
  }
  function addBytesWritten($this, count) {
    // Inline function 'kotlin.require' call
    var tmp0_require = count >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesWritten.<anonymous>' call
      tmp$ret$0 = "Can't write negative amount of bytes: " + count;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.atomicfu.AtomicInt.plusAssign' call
    var tmp1_plusAssign = $this.pw_1;
    tmp1_plusAssign.atomicfu$getAndAdd(count);
    $this.nw_1.atomicfu$addAndGet$long(toLong(count));
    // Inline function 'kotlin.check' call
    var tmp2_check = $this.pw_1.kotlinx$atomicfu$value >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_check) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesWritten.<anonymous>' call
      tmp$ret$1 = 'Readable bytes count is negative: ' + $this.pw_1.kotlinx$atomicfu$value + ', ' + count + ' in ' + $this;
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
  }
  function ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForWrite$lambda(this$0, $count) {
    return function () {
      return this$0.iy() < $count ? !this$0.ux() : false;
    };
  }
  function ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForRead$lambda(this$0, $count) {
    return function () {
      return this$0.hy() < $count ? !this$0.ux() : false;
    };
  }
  function $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ry_1 = _this__u8e3s4;
    this.sy_1 = count;
  }
  $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0.prototype.xe = function () {
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
            if (!(this.ry_1.iy() < this.sy_1 ? !this.ry_1.ux() : false)) {
              this.oe_1 = 5;
              continue $sm;
            }

            if (!flushImpl(this.ry_1)) {
              this.oe_1 = 2;
              suspendResult = this.ry_1.vw_1.ty(ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForWrite$lambda(this.ry_1, this.sy_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.oe_1 = 3;
              continue $sm;
            }

            break;
          case 2:
            this.oe_1 = 3;
            continue $sm;
          case 3:
            this.oe_1 = 1;
            continue $sm;
          case 4:
            throw this.re_1;
          case 5:
            return Unit_getInstance();
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
  function $awaitAtLeastNBytesAvailableForReadCOROUTINE$1(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.cz_1 = _this__u8e3s4;
    this.dz_1 = count;
  }
  $awaitAtLeastNBytesAvailableForReadCOROUTINE$1.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 3;
            this.oe_1 = 1;
            continue $sm;
          case 1:
            if (!(this.cz_1.hy() < this.dz_1 ? !this.cz_1.ux() : false)) {
              this.oe_1 = 4;
              continue $sm;
            }

            this.oe_1 = 2;
            suspendResult = this.cz_1.vw_1.ty(ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForRead$lambda(this.cz_1, this.dz_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  function $writeFullyCOROUTINE$9(_this__u8e3s4, src, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.mz_1 = _this__u8e3s4;
    this.nz_1 = src;
  }
  $writeFullyCOROUTINE$9.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 2;
            this.oe_1 = 1;
            suspendResult = this.mz_1.oz(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var count = this.nz_1.rz_1 - this.nz_1.qz_1 | 0;
            writeFully$default(this.mz_1.rw_1, this.nz_1, 0, 2, null);
            this.mz_1.vz(count);
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
  function $writeFullyCOROUTINE$10(_this__u8e3s4, src, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e10_1 = _this__u8e3s4;
    this.f10_1 = src;
    this.g10_1 = offset;
    this.h10_1 = length;
  }
  $writeFullyCOROUTINE$10.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 4;
            this.i10_1 = this.g10_1;
            this.j10_1 = this.g10_1 + this.h10_1 | 0;
            this.oe_1 = 1;
            continue $sm;
          case 1:
            if (!(this.i10_1 < this.j10_1)) {
              this.oe_1 = 3;
              continue $sm;
            }

            this.oe_1 = 2;
            suspendResult = this.e10_1.oz(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_min = this.e10_1.iy();
            var tmp1_min = this.j10_1 - this.i10_1 | 0;
            var bytesCount = Math.min(tmp0_min, tmp1_min);
            writeFully_3(this.e10_1.rw_1, this.f10_1, this.i10_1, bytesCount);
            this.i10_1 = this.i10_1 + bytesCount | 0;
            this.e10_1.vz(bytesCount);
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
  function $readRemainingCOROUTINE$26(_this__u8e3s4, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s10_1 = _this__u8e3s4;
    this.t10_1 = limit;
  }
  $readRemainingCOROUTINE$26.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 3;
            ensureNotFailed(this.s10_1);
            var tmp_0 = this;
            tmp_0.u10_1 = BytePacketBuilder_init_$Create$(null, 1, null);
            var tmp_1 = this;
            var tmp0_minOf = this.s10_1.sw_1.f11();
            tmp_1.v10_1 = this.t10_1.s(tmp0_minOf) <= 0 ? this.t10_1 : tmp0_minOf;
            this.u10_1.g11(this.s10_1.sw_1, this.v10_1);
            this.s10_1.h11(this.v10_1.k7());
            var tmp_2 = this;
            var tmp1_minus = this.u10_1.c();
            tmp_2.w10_1 = this.t10_1.g5(toLong(tmp1_minus));
            if (this.w10_1.equals(new Long(0, 0)) ? true : this.s10_1.j11()) {
              var tmp_3 = this;
              ensureNotFailed_0(this.s10_1, this.u10_1);
              tmp_3.x10_1 = this.u10_1.i11();
              this.oe_1 = 2;
              continue $sm;
            } else {
              this.oe_1 = 1;
              suspendResult = readRemainingSuspend(this.s10_1, this.u10_1, this.t10_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.x10_1 = suspendResult;
            this.oe_1 = 2;
            continue $sm;
          case 2:
            return this.x10_1;
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
  function $readRemainingSuspendCOROUTINE$27(_this__u8e3s4, builder, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.dy_1 = _this__u8e3s4;
    this.ey_1 = builder;
    this.fy_1 = limit;
  }
  $readRemainingSuspendCOROUTINE$27.prototype.xe = function () {
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
            if (!(toLong(this.ey_1.c()).s(this.fy_1) < 0)) {
              this.oe_1 = 4;
              continue $sm;
            }

            var tmp_0 = this;
            var tmp0_minus = this.ey_1.c();
            var tmp1_minOf = this.fy_1.g5(toLong(tmp0_minus));
            var tmp2_minOf = this.dy_1.sw_1.f11();
            tmp_0.gy_1 = tmp1_minOf.s(tmp2_minOf) <= 0 ? tmp1_minOf : tmp2_minOf;
            this.ey_1.g11(this.dy_1.sw_1, this.gy_1);
            this.dy_1.h11(this.gy_1.k7());
            ensureNotFailed_0(this.dy_1, this.ey_1);
            if (this.dy_1.j11() ? true : this.ey_1.c() === this.fy_1.k7()) {
              this.oe_1 = 4;
              continue $sm;
            } else {
              this.oe_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            this.oe_1 = 3;
            suspendResult = this.dy_1.k11(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            ;
            this.oe_1 = 1;
            continue $sm;
          case 4:
            ensureNotFailed_0(this.dy_1, this.ey_1);
            return this.ey_1.i11();
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
  function $readAvailableCOROUTINE$30(_this__u8e3s4, dst, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t11_1 = _this__u8e3s4;
    this.u11_1 = dst;
  }
  $readAvailableCOROUTINE$30.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 3;
            var tmp0_safe_receiver = this.t11_1.tx();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            ;
            if (this.t11_1.ux() ? this.t11_1.hy() === 0 : false)
              return -1;
            if ((this.u11_1.tz_1 - this.u11_1.rz_1 | 0) === 0)
              return 0;
            if (this.t11_1.hy() === 0) {
              this.oe_1 = 1;
              suspendResult = this.t11_1.k11(1, this);
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
            if (!this.t11_1.sw_1.w11()) {
              this.t11_1.v11();
            }

            var tmp0_minOf = toLong(this.u11_1.tz_1 - this.u11_1.rz_1 | 0);
            var tmp1_minOf = this.t11_1.sw_1.f11();
            var size = (tmp0_minOf.s(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf).k7();
            readFully_2(this.t11_1.sw_1, this.u11_1, size);
            this.t11_1.h11(size);
            return size;
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
  function $readAvailableCOROUTINE$33(_this__u8e3s4, dst, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f12_1 = _this__u8e3s4;
    this.g12_1 = dst;
    this.h12_1 = offset;
    this.i12_1 = length;
  }
  $readAvailableCOROUTINE$33.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 3;
            var tmp0_safe_receiver = this.f12_1.tx();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            ;
            if (this.f12_1.ux() ? this.f12_1.hy() === 0 : false)
              return -1;
            if (this.i12_1 === 0)
              return 0;
            if (this.f12_1.hy() === 0) {
              this.oe_1 = 1;
              suspendResult = this.f12_1.k11(1, this);
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
            if (!this.f12_1.sw_1.w11()) {
              this.f12_1.v11();
            }

            var tmp0_minOf = toLong(this.i12_1);
            var tmp1_minOf = this.f12_1.sw_1.f11();
            var size = (tmp0_minOf.s(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf).k7();
            readFully_1(this.f12_1.sw_1, this.g12_1, this.h12_1, size);
            this.f12_1.h11(size);
            return size;
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
  function $awaitInternalAtLeast1COROUTINE$38(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r12_1 = _this__u8e3s4;
  }
  $awaitInternalAtLeast1COROUTINE$38.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 2;
            var tmp0__get_isNotEmpty__a29w5p = this.r12_1.sw_1;
            if (!tmp0__get_isNotEmpty__a29w5p.t12()) {
              var tmp_0 = this;
              tmp_0.s12_1 = true;
              this.oe_1 = 3;
              continue $sm;
            } else {
              this.oe_1 = 1;
              suspendResult = this.r12_1.k11(1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.s12_1 = suspendResult;
            this.oe_1 = 3;
            continue $sm;
          case 2:
            throw this.re_1;
          case 3:
            return this.s12_1;
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
  function $awaitSuspendCOROUTINE$39(_this__u8e3s4, atLeast, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c13_1 = _this__u8e3s4;
    this.d13_1 = atLeast;
  }
  $awaitSuspendCOROUTINE$39.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 2;
            var tmp0_require = this.d13_1 >= 0;
            if (!tmp0_require) {
              var message = 'Failed requirement.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }

            this.oe_1 = 1;
            suspendResult = this.c13_1.e13(this.d13_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.c13_1.v11();
            var tmp0_safe_receiver = this.c13_1.tx();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            ;
            return !this.c13_1.j11() ? this.c13_1.hy() >= this.d13_1 : false;
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
  function ByteChannelSequentialBase(initial, autoFlush, pool) {
    this.kw_1 = autoFlush;
    this.lw_1 = atomic$ref$1(Companion_getInstance_4().hw_1);
    this.mw_1 = atomic$long$1(new Long(0, 0));
    this.nw_1 = atomic$long$1(new Long(0, 0));
    this.ow_1 = atomic$int$1(0);
    this.pw_1 = atomic$int$1(0);
    this.qw_1 = atomic$ref$1(null);
    this.rw_1 = new BytePacketBuilder(pool);
    this.sw_1 = ByteReadPacket_init_$Create$(initial, pool);
    this.tw_1 = atomic$int$1(0);
    this.uw_1 = atomic$ref$1(Companion_getInstance_4().hw_1);
    this.vw_1 = new AwaitingSlot();
    this.ww_1 = new Object();
    var tmp = this;
    tmp.xw_1 = BytePacketBuilder_init_$Create$(null, 1, null);
    var count = remainingAll(initial).k7();
    this.vz(count);
    this.ow_1.atomicfu$addAndGet(count);
  }
  ByteChannelSequentialBase.prototype.f13 = function () {
    return this.kw_1;
  };
  ByteChannelSequentialBase.prototype.ux = function () {
    return !(this.qw_1.kotlinx$atomicfu$value == null);
  };
  ByteChannelSequentialBase.prototype.hy = function () {
    return this.ow_1.kotlinx$atomicfu$value;
  };
  ByteChannelSequentialBase.prototype.iy = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = 4088 - this.pw_1.kotlinx$atomicfu$value | 0;
    tmp$ret$0 = Math.max(0, tmp0_maxOf);
    return tmp$ret$0;
  };
  ByteChannelSequentialBase.prototype.j11 = function () {
    return _get_isCancelled__nhbn6y(this) ? true : this.ux() ? this.pw_1.kotlinx$atomicfu$value === 0 : false;
  };
  ByteChannelSequentialBase.prototype.tx = function () {
    var tmp0_safe_receiver = this.qw_1.kotlinx$atomicfu$value;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.yw_1;
  };
  ByteChannelSequentialBase.prototype.oz = function (count, $cont) {
    var tmp = new $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0(this, count, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  ByteChannelSequentialBase.prototype.e13 = function (count, $cont) {
    var tmp = new $awaitAtLeastNBytesAvailableForReadCOROUTINE$1(this, count, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  ByteChannelSequentialBase.prototype.gb = function () {
    flushImpl(this);
  };
  ByteChannelSequentialBase.prototype.v11 = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = this.ww_1;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.prepareFlushedBytes.<anonymous>' call
    tmp$ret$0 = unsafeAppend(this.sw_1, this.xw_1);
    tmp$ret$1 = tmp$ret$0;
  };
  ByteChannelSequentialBase.prototype.g13 = function (src, $cont) {
    var tmp = new $writeFullyCOROUTINE$9(this, src, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  ByteChannelSequentialBase.prototype.h13 = function (src, offset, length, $cont) {
    var tmp = new $writeFullyCOROUTINE$10(this, src, offset, length, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  ByteChannelSequentialBase.prototype.h11 = function (count) {
    addBytesRead(this, count);
    this.vw_1.ax();
  };
  ByteChannelSequentialBase.prototype.i13 = function (limit, $cont) {
    var tmp = new $readRemainingCOROUTINE$26(this, limit, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  ByteChannelSequentialBase.prototype.k13 = function (dst, $cont) {
    return this.l13(dst instanceof Buffer ? dst : THROW_CCE(), $cont);
  };
  ByteChannelSequentialBase.prototype.l13 = function (dst, $cont) {
    var tmp = new $readAvailableCOROUTINE$30(this, dst, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  ByteChannelSequentialBase.prototype.m13 = function (dst, offset, length, $cont) {
    var tmp = new $readAvailableCOROUTINE$33(this, dst, offset, length, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  ByteChannelSequentialBase.prototype.n13 = function ($cont) {
    var tmp = new $awaitInternalAtLeast1COROUTINE$38(this, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  ByteChannelSequentialBase.prototype.k11 = function (atLeast, $cont) {
    var tmp = new $awaitSuspendCOROUTINE$39(this, atLeast, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  ByteChannelSequentialBase.prototype.tj = function (cause) {
    if (!(this.tx() == null) ? true : this.ux()) {
      return false;
    }
    var tmp0_elvis_lhs = cause;
    return this.ms(tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Channel cancelled') : tmp0_elvis_lhs);
  };
  ByteChannelSequentialBase.prototype.ms = function (cause) {
    var closeElement = cause == null ? get_CLOSED_SUCCESS() : new CloseElement(cause);
    if (!this.qw_1.atomicfu$compareAndSet(null, closeElement))
      return false;
    if (!(cause == null)) {
      this.sw_1.rl();
      this.rw_1.rl();
      this.xw_1.rl();
    } else {
      this.gb();
    }
    this.vw_1.o13(cause);
    return true;
  };
  ByteChannelSequentialBase.prototype.p13 = function (dst, limit) {
    var size = this.sw_1.f11();
    var tmp;
    if (size.s(limit) <= 0) {
      dst.rw_1.q13(this.sw_1);
      dst.vz(size.k7());
      this.h11(size.k7());
      tmp = size;
    } else {
      tmp = new Long(0, 0);
    }
    return tmp;
  };
  ByteChannelSequentialBase.prototype.vz = function (count) {
    addBytesWritten(this, count);
    if (this.ux()) {
      this.rw_1.rl();
      ensureNotClosed(this);
    }
    if (this.f13() ? true : this.iy() === 0) {
      this.gb();
    }
  };
  function cancel(_this__u8e3s4) {
    return _this__u8e3s4.tj(null);
  }
  function readAvailable(_this__u8e3s4, dst, $cont) {
    return _this__u8e3s4.m13(dst, 0, dst.length, $cont);
  }
  function close_0(_this__u8e3s4) {
    return _this__u8e3s4.ms(null);
  }
  function ClosedWriteChannelException(message) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, ClosedWriteChannelException);
  }
  function writeFully(_this__u8e3s4, src, $cont) {
    return _this__u8e3s4.h13(src, 0, src.length, $cont);
  }
  function get_CLOSED_SUCCESS() {
    init_properties_CloseElement_kt_zcr6ie();
    return CLOSED_SUCCESS;
  }
  var CLOSED_SUCCESS;
  function CloseElement(cause) {
    this.yw_1 = cause;
  }
  var properties_initialized_CloseElement_kt_clkism;
  function init_properties_CloseElement_kt_zcr6ie() {
    if (properties_initialized_CloseElement_kt_clkism) {
    } else {
      properties_initialized_CloseElement_kt_clkism = true;
      CLOSED_SUCCESS = new CloseElement(null);
    }
  }
  function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
    return launchChannel(_this__u8e3s4, coroutineContext, ByteChannel(autoFlush), true, block);
  }
  function writer$default(_this__u8e3s4, coroutineContext, autoFlush, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      coroutineContext = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      autoFlush = false;
    return writer(_this__u8e3s4, coroutineContext, autoFlush, block);
  }
  function WriterScope() {
  }
  function ChannelJob(delegate, channel) {
    this.t13_1 = delegate;
    this.u13_1 = channel;
  }
  ChannelJob.prototype.s13 = function () {
    return this.u13_1;
  };
  ChannelJob.prototype.wf = function () {
    return this.t13_1.wf();
  };
  ChannelJob.prototype.n = function () {
    return this.t13_1.n();
  };
  ChannelJob.prototype.ih = function (child) {
    return this.t13_1.ih(child);
  };
  ChannelJob.prototype.bh = function (cause) {
    this.t13_1.bh(cause);
  };
  ChannelJob.prototype.o3 = function (initial, operation) {
    return this.t13_1.o3(initial, operation);
  };
  ChannelJob.prototype.i3 = function (key) {
    return this.t13_1.i3(key);
  };
  ChannelJob.prototype.tg = function () {
    return this.t13_1.tg();
  };
  ChannelJob.prototype.xg = function (onCancelling, invokeImmediately, handler) {
    return this.t13_1.xg(onCancelling, invokeImmediately, handler);
  };
  ChannelJob.prototype.wg = function (handler) {
    return this.t13_1.wg(handler);
  };
  ChannelJob.prototype.n3 = function (key) {
    return this.t13_1.n3(key);
  };
  ChannelJob.prototype.p3 = function (context) {
    return this.t13_1.p3(context);
  };
  ChannelJob.prototype.rg = function () {
    return this.t13_1.rg();
  };
  ChannelJob.prototype.toString = function () {
    return 'ChannelJob[' + this.t13_1 + ']';
  };
  function launchChannel(_this__u8e3s4, context, channel, attachJob, block) {
    var dispatcher = _this__u8e3s4.vf().i3(Key_getInstance());
    var job = launch$default(_this__u8e3s4, context, null, launchChannel$slambda_0(attachJob, channel, block, dispatcher, null), 2, null);
    job.wg(launchChannel$lambda(channel));
    return new ChannelJob(job, channel);
  }
  function ChannelScope(delegate, channel) {
    this.v13_1 = channel;
    this.w13_1 = delegate;
  }
  ChannelScope.prototype.s13 = function () {
    return this.v13_1;
  };
  ChannelScope.prototype.vf = function () {
    return this.w13_1.vf();
  };
  function launchChannel$slambda($attachJob, $channel, $block, $dispatcher, resultContinuation) {
    this.f14_1 = $attachJob;
    this.g14_1 = $channel;
    this.h14_1 = $block;
    this.i14_1 = $dispatcher;
    CoroutineImpl.call(this, resultContinuation);
  }
  launchChannel$slambda.prototype.l14 = function ($this$launch, $cont) {
    var tmp = this.m14($this$launch, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  launchChannel$slambda.prototype.jf = function (p1, $cont) {
    return this.l14((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  launchChannel$slambda.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 3;
            if (this.f14_1) {
              this.g14_1.r13(ensureNotNull(this.j14_1.vf().i3(Key_getInstance_0())));
            }

            var tmp_0 = this;
            var tmp_1 = new ChannelScope(this.j14_1, this.g14_1);
            tmp_0.k14_1 = isInterface(tmp_1, CoroutineScope) ? tmp_1 : THROW_CCE();
            this.pe_1 = 2;
            this.oe_1 = 1;
            suspendResult = this.h14_1(this.k14_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.pe_1 = 3;
            this.oe_1 = 4;
            continue $sm;
          case 2:
            this.pe_1 = 3;
            var tmp_2 = this.re_1;
            if (tmp_2 instanceof Error) {
              var cause = this.re_1;
              if (!equals(this.i14_1, Dispatchers_getInstance().wl_1) ? !(this.i14_1 == null) : false) {
                throw cause;
              }
              this.g14_1.tj(cause);
              this.oe_1 = 4;
              continue $sm;
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
  launchChannel$slambda.prototype.m14 = function ($this$launch, completion) {
    var i = new launchChannel$slambda(this.f14_1, this.g14_1, this.h14_1, this.i14_1, completion);
    i.j14_1 = $this$launch;
    return i;
  };
  function launchChannel$slambda_0($attachJob, $channel, $block, $dispatcher, resultContinuation) {
    var i = new launchChannel$slambda($attachJob, $channel, $block, $dispatcher, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.l14($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function launchChannel$lambda($channel) {
    return function (cause) {
      $channel.ms(cause);
      return Unit_getInstance();
    };
  }
  function unwrapCancellationException(_this__u8e3s4) {
    var exception = _this__u8e3s4;
    $l$loop: while (true) {
      if (!(exception instanceof CancellationException)) {
        break $l$loop;
      }
      if (equals(exception, exception.cause)) {
        return _this__u8e3s4;
      }
      var tmp0_elvis_lhs = exception.cause;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return exception;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      exception = tmp;
    }
    return exception;
  }
  function decode(_this__u8e3s4, input, max) {
    var tmp$ret$2;
    // Inline function 'kotlin.text.buildString' call
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf = toLong(max);
    var tmp1_minOf = sizeEstimate(input);
    tmp$ret$0 = tmp0_minOf.s(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf;
    var tmp2_buildString = tmp$ret$0.k7();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$(tmp2_buildString);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>' call
    decode_0(_this__u8e3s4, input, tmp0_apply, max);
    tmp$ret$1 = tmp0_apply;
    tmp$ret$2 = tmp$ret$1.toString();
    return tmp$ret$2;
  }
  function decode$default(_this__u8e3s4, input, max, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      max = IntCompanionObject_getInstance().MAX_VALUE;
    return decode(_this__u8e3s4, input, max);
  }
  function encodeToByteArrayImpl1(_this__u8e3s4, input, fromIndex, toIndex) {
    var start = fromIndex;
    if (start >= toIndex)
      return get_EmptyByteArray();
    var single = Companion_getInstance_4().fw_1.n14();
    try {
      var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, single);
      start = start + rc | 0;
      if (start === toIndex) {
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$0 = single.rz_1 - single.qz_1 | 0;
        var result = new Int8Array(tmp$ret$0);
        // Inline function 'io.ktor.utils.io.core.readFully' call
        var tmp0_readFully = result.length - 0 | 0;
        readFully(single instanceof Buffer ? single : THROW_CCE(), result, 0, tmp0_readFully);
        return result;
      }
      var tmp$ret$1;
      $l$block: {
        // Inline function 'io.ktor.utils.io.core.buildPacket' call
        // Inline function 'kotlin.contracts.contract' call
        var builder = BytePacketBuilder_init_$Create$(null, 1, null);
        try {
          // Inline function 'io.ktor.utils.io.charsets.encodeToByteArrayImpl1.<anonymous>' call
          builder.z14(single.y14());
          encodeToImpl(_this__u8e3s4, builder, input, start, toIndex);
          tmp$ret$1 = builder.i11();
          break $l$block;
        } catch ($p) {
          if ($p instanceof Error) {
            builder.rl();
            throw $p;
          } else {
            throw $p;
          }
        }
      }
      var tmp = tmp$ret$1;
      return readBytes$default(tmp, 0, 1, null);
    }finally {
      single.a15(Companion_getInstance_4().fw_1);
    }
  }
  function sizeEstimate(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof ByteReadPacket) {
      tmp = _this__u8e3s4.f11();
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.maxOf' call
      var tmp0_maxOf = _this__u8e3s4.f11();
      tmp$ret$0 = tmp0_maxOf.s(new Long(16, 0)) >= 0 ? tmp0_maxOf : new Long(16, 0);
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function encodeToImpl(_this__u8e3s4, destination, input, fromIndex, toIndex) {
    var start = fromIndex;
    if (start >= toIndex)
      return 0;
    var bytesWritten = 0;
    // Inline function 'io.ktor.utils.io.core.writeWhileSize' call
    var tail = prepareWriteHead(destination, 1, null);
    try {
      var size;
      $l$loop: while (true) {
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.charsets.encodeToImpl.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tail;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$0 = tmp0__anonymous__q1qw7t.tz_1 - tmp0__anonymous__q1qw7t.rz_1 | 0;
        var before = tmp$ret$0;
        var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, tmp0__anonymous__q1qw7t);
        // Inline function 'kotlin.check' call
        var tmp0_check = rc >= 0;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_check) {
          var tmp$ret$1;
          // Inline function 'kotlin.check.<anonymous>' call
          tmp$ret$1 = 'Check failed.';
          var message = tmp$ret$1;
          throw IllegalStateException_init_$Create$(toString(message));
        }
        start = start + rc | 0;
        var tmp = bytesWritten;
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$2 = tmp0__anonymous__q1qw7t.tz_1 - tmp0__anonymous__q1qw7t.rz_1 | 0;
        bytesWritten = tmp + (before - tmp$ret$2 | 0) | 0;
        tmp$ret$3 = start >= toIndex ? 0 : rc === 0 ? 8 : 1;
        size = tmp$ret$3;
        if (size <= 0)
          break $l$loop;
        tail = prepareWriteHead(destination, size, tail);
      }
    }finally {
      destination.b15();
    }
    bytesWritten = bytesWritten + encodeCompleteImpl(_this__u8e3s4, destination) | 0;
    return bytesWritten;
  }
  function encodeCompleteImpl(_this__u8e3s4, dst) {
    var size = 1;
    var bytesWritten = 0;
    // Inline function 'io.ktor.utils.io.core.writeWhile' call
    var tail = prepareWriteHead(dst, 1, null);
    try {
      $l$loop: while (true) {
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.charsets.encodeCompleteImpl.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tail;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$0 = tmp0__anonymous__q1qw7t.tz_1 - tmp0__anonymous__q1qw7t.rz_1 | 0;
        var before = tmp$ret$0;
        if (encodeComplete(_this__u8e3s4, tmp0__anonymous__q1qw7t)) {
          size = 0;
        } else {
          var tmp0 = size;
          size = tmp0 + 1 | 0;
        }
        var tmp = bytesWritten;
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$1 = tmp0__anonymous__q1qw7t.tz_1 - tmp0__anonymous__q1qw7t.rz_1 | 0;
        bytesWritten = tmp + (before - tmp$ret$1 | 0) | 0;
        tmp$ret$2 = size > 0;
        if (!tmp$ret$2)
          break $l$loop;
        tail = prepareWriteHead(dst, 1, tail);
      }
    }finally {
      dst.b15();
    }
    return bytesWritten;
  }
  function encode(_this__u8e3s4, input, fromIndex, toIndex) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = BytePacketBuilder_init_$Create$(null, 1, null);
      try {
        // Inline function 'io.ktor.utils.io.charsets.encode.<anonymous>' call
        encodeToImpl(_this__u8e3s4, builder, input, fromIndex, toIndex);
        tmp$ret$0 = builder.i11();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          builder.rl();
          throw $p;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  function encode$default(_this__u8e3s4, input, fromIndex, toIndex, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      fromIndex = 0;
    if (!(($mask0 & 4) === 0))
      toIndex = charSequenceLength(input);
    return encode(_this__u8e3s4, input, fromIndex, toIndex);
  }
  function Companion() {
    Companion_instance = this;
    this.c15_1 = 8;
  }
  Companion.prototype.d15 = function () {
    return Companion_getInstance_4().hw_1;
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Buffer(memory) {
    Companion_getInstance_1();
    this.pz_1 = memory;
    this.qz_1 = 0;
    this.rz_1 = 0;
    this.sz_1 = 0;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.Memory.size32' call
    var tmp0__get_size32__ezg0pb = this.pz_1;
    tmp$ret$0 = tmp0__get_size32__ezg0pb.e15_1.byteLength;
    tmp.tz_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.bits.Memory.size32' call
    var tmp0__get_size32__ezg0pb_0 = this.pz_1;
    tmp$ret$1 = tmp0__get_size32__ezg0pb_0.e15_1.byteLength;
    tmp_0.uz_1 = tmp$ret$1;
  }
  Buffer.prototype.f15 = function (count) {
    if (count === 0)
      return Unit_getInstance();
    var newReadPosition = this.qz_1 + count | 0;
    if (count < 0 ? true : newReadPosition > this.rz_1) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$1 = this.rz_1 - this.qz_1 | 0;
      discardFailed(count, tmp$ret$1);
    }
    this.qz_1 = newReadPosition;
  };
  Buffer.prototype.g15 = function (count) {
    var newWritePosition = this.rz_1 + count | 0;
    if (count < 0 ? true : newWritePosition > this.tz_1) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$0 = this.tz_1 - this.rz_1 | 0;
      commitWrittenFailed(count, tmp$ret$0);
    }
    this.rz_1 = newWritePosition;
  };
  Buffer.prototype.h15 = function (position) {
    var limit = this.tz_1;
    if (position < this.rz_1) {
      var tmp = position - this.rz_1 | 0;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$0 = this.tz_1 - this.rz_1 | 0;
      commitWrittenFailed(tmp, tmp$ret$0);
    }
    if (position >= limit) {
      if (position === limit) {
        this.rz_1 = position;
        return false;
      }
      var tmp_0 = position - this.rz_1 | 0;
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$1 = this.tz_1 - this.rz_1 | 0;
      commitWrittenFailed(tmp_0, tmp$ret$1);
    }
    this.rz_1 = position;
    return true;
  };
  Buffer.prototype.i15 = function (position) {
    if (position < 0 ? true : position > this.rz_1) {
      var tmp = position - this.qz_1 | 0;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$0 = this.rz_1 - this.qz_1 | 0;
      discardFailed(tmp, tmp$ret$0);
    }
    if (!(this.qz_1 === position)) {
      this.qz_1 = position;
    }
  };
  Buffer.prototype.j15 = function (count) {
    var newReadPosition = this.qz_1 - count | 0;
    if (newReadPosition < this.sz_1) {
      rewindFailed(count, this.qz_1 - this.sz_1 | 0);
    }
    this.qz_1 = newReadPosition;
  };
  Buffer.prototype.k15 = function (startGap) {
    // Inline function 'kotlin.require' call
    var tmp0_require = startGap >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.reserveStartGap.<anonymous>' call
      tmp$ret$0 = "startGap shouldn't be negative: " + startGap;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.qz_1 >= startGap) {
      this.sz_1 = startGap;
      return Unit_getInstance();
    }
    if (this.qz_1 === this.rz_1) {
      if (startGap > this.tz_1) {
        startGapReservationFailedDueToLimit(this, startGap);
      }
      this.rz_1 = startGap;
      this.qz_1 = startGap;
      this.sz_1 = startGap;
      return Unit_getInstance();
    }
    startGapReservationFailed(this, startGap);
  };
  Buffer.prototype.l15 = function (endGap) {
    // Inline function 'kotlin.require' call
    var tmp0_require = endGap >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.reserveEndGap.<anonymous>' call
      tmp$ret$0 = "endGap shouldn't be negative: " + endGap;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var newLimit = this.uz_1 - endGap | 0;
    if (newLimit >= this.rz_1) {
      this.tz_1 = newLimit;
      return Unit_getInstance();
    }
    if (newLimit < 0) {
      endGapReservationFailedDueToCapacity(this, endGap);
    }
    if (newLimit < this.sz_1) {
      endGapReservationFailedDueToStartGap(this, endGap);
    }
    if (this.qz_1 === this.rz_1) {
      this.tz_1 = newLimit;
      this.qz_1 = newLimit;
      this.rz_1 = newLimit;
      return Unit_getInstance();
    }
    endGapReservationFailedDueToContent(this, endGap);
  };
  Buffer.prototype.m15 = function () {
    this.sz_1 = 0;
    this.qz_1 = 0;
    var capacity = this.uz_1;
    this.rz_1 = capacity;
  };
  Buffer.prototype.n15 = function () {
    this.o15(this.uz_1 - this.sz_1 | 0);
  };
  Buffer.prototype.o15 = function (limit) {
    var startGap = this.sz_1;
    this.qz_1 = startGap;
    this.rz_1 = startGap;
    this.tz_1 = limit;
  };
  Buffer.prototype.p15 = function () {
    this.q15(0);
    this.r15();
  };
  Buffer.prototype.r15 = function () {
    this.tz_1 = this.uz_1;
  };
  Buffer.prototype.q15 = function (newReadPosition) {
    // Inline function 'kotlin.require' call
    var tmp0_require = newReadPosition >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.releaseStartGap.<anonymous>' call
      tmp$ret$0 = "newReadPosition shouldn't be negative: " + newReadPosition;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = newReadPosition <= this.qz_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.Buffer.releaseStartGap.<anonymous>' call
      tmp$ret$1 = "newReadPosition shouldn't be ahead of the read position: " + newReadPosition + ' > ' + this.qz_1;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.qz_1 = newReadPosition;
    if (this.sz_1 > newReadPosition) {
      this.sz_1 = newReadPosition;
    }
  };
  Buffer.prototype.s15 = function (copy) {
    copy.tz_1 = this.tz_1;
    copy.sz_1 = this.sz_1;
    copy.qz_1 = this.qz_1;
    copy.rz_1 = this.rz_1;
  };
  Buffer.prototype.t15 = function () {
    var readPosition = this.qz_1;
    if (readPosition === this.rz_1) {
      throw new EOFException('No readable bytes available.');
    }
    this.qz_1 = readPosition + 1 | 0;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.bits.get' call
    var tmp0_get = this.pz_1;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
    tmp$ret$0 = tmp0_get.e15_1.getInt8(readPosition);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  Buffer.prototype.u15 = function (value) {
    var writePosition = this.rz_1;
    if (writePosition === this.tz_1) {
      throw new InsufficientSpaceException('No free space in the buffer to write a byte');
    }
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.set' call
    var tmp0_set = this.pz_1;
    tmp0_set.e15_1.setInt8(writePosition, value);
    tmp$ret$0 = Unit_getInstance();
    this.rz_1 = writePosition + 1 | 0;
  };
  Buffer.prototype.v15 = function () {
    this.p15();
    this.n15();
  };
  Buffer.prototype.toString = function () {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = this.rz_1 - this.qz_1 | 0;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$1 = this.tz_1 - this.rz_1 | 0;
    var tmp_0 = tmp$ret$1;
    var tmp_1 = this.sz_1;
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    tmp$ret$2 = this.uz_1 - this.tz_1 | 0;
    return 'Buffer(' + tmp + ' used, ' + tmp_0 + ' free, ' + (tmp_1 + tmp$ret$2 | 0) + ' reserved of ' + this.uz_1 + ')';
  };
  function discardFailed(count, readRemaining) {
    throw new EOFException('Unable to discard ' + count + ' bytes: only ' + readRemaining + ' available for reading');
  }
  function commitWrittenFailed(count, writeRemaining) {
    throw new EOFException('Unable to discard ' + count + ' bytes: only ' + writeRemaining + ' available for writing');
  }
  function rewindFailed(count, rewindRemaining) {
    throw IllegalArgumentException_init_$Create$('Unable to rewind ' + count + ' bytes: only ' + rewindRemaining + ' could be rewinded');
  }
  function startGapReservationFailedDueToLimit(_this__u8e3s4, startGap) {
    if (startGap > _this__u8e3s4.uz_1) {
      throw IllegalArgumentException_init_$Create$('Start gap ' + startGap + ' is bigger than the capacity ' + _this__u8e3s4.uz_1);
    }
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    tmp$ret$0 = _this__u8e3s4.uz_1 - _this__u8e3s4.tz_1 | 0;
    throw IllegalStateException_init_$Create$('Unable to reserve ' + startGap + ' start gap: there are already ' + tmp$ret$0 + ' bytes reserved in the end');
  }
  function startGapReservationFailed(_this__u8e3s4, startGap) {
    var tmp = 'Unable to reserve ' + startGap + ' start gap: ';
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = _this__u8e3s4.rz_1 - _this__u8e3s4.qz_1 | 0;
    throw IllegalStateException_init_$Create$(tmp + ('there are already ' + tmp$ret$0 + ' content bytes starting at offset ' + _this__u8e3s4.qz_1));
  }
  function endGapReservationFailedDueToCapacity(_this__u8e3s4, endGap) {
    throw IllegalArgumentException_init_$Create$('End gap ' + endGap + ' is too big: capacity is ' + _this__u8e3s4.uz_1);
  }
  function endGapReservationFailedDueToStartGap(_this__u8e3s4, endGap) {
    throw IllegalArgumentException_init_$Create$('End gap ' + endGap + ' is too big: there are already ' + _this__u8e3s4.sz_1 + ' bytes reserved in the beginning');
  }
  function endGapReservationFailedDueToContent(_this__u8e3s4, endGap) {
    var tmp = 'Unable to reserve end gap ' + endGap + ':';
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = _this__u8e3s4.rz_1 - _this__u8e3s4.qz_1 | 0;
    throw IllegalArgumentException_init_$Create$(tmp + (' there are already ' + tmp$ret$0 + ' content bytes at offset ' + _this__u8e3s4.qz_1));
  }
  function InsufficientSpaceException_init_$Init$(name, size, availableSpace, $this) {
    InsufficientSpaceException.call($this, 'Not enough free space to write ' + name + ' of ' + size + ' bytes, available ' + availableSpace + ' bytes.');
    return $this;
  }
  function InsufficientSpaceException_init_$Create$(name, size, availableSpace) {
    var tmp = InsufficientSpaceException_init_$Init$(name, size, availableSpace, Object.create(InsufficientSpaceException.prototype));
    captureStack(tmp, InsufficientSpaceException_init_$Create$);
    return tmp;
  }
  function InsufficientSpaceException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, InsufficientSpaceException);
  }
  function restoreStartGap(_this__u8e3s4, size) {
    _this__u8e3s4.q15(_this__u8e3s4.qz_1 - size | 0);
  }
  function writeBufferAppend(_this__u8e3s4, other, maxSize) {
    var tmp$ret$1;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = other.rz_1 - other.qz_1 | 0;
    var tmp0_minOf = tmp$ret$0;
    tmp$ret$1 = Math.min(tmp0_minOf, maxSize);
    var size = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$2 = _this__u8e3s4.tz_1 - _this__u8e3s4.rz_1 | 0;
    if (tmp$ret$2 <= size) {
      writeBufferAppendUnreserve(_this__u8e3s4, size);
    }
    var tmp$ret$6;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$5;
    // Inline function 'io.ktor.utils.io.core.writeBufferAppend.<anonymous>' call
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.pz_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.rz_1;
    var tmp3__anonymous__ufb84q = _this__u8e3s4.tz_1;
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'io.ktor.utils.io.core.writeBufferAppend.<anonymous>.<anonymous>' call
    var tmp0__anonymous__q1qw7t = other.pz_1;
    var tmp1__anonymous__uwfjfc_0 = other.qz_1;
    var tmp2__anonymous__z9zvc9_0 = other.rz_1;
    tmp0__anonymous__q1qw7t.w15(tmp1__anonymous__uwfjfc, tmp1__anonymous__uwfjfc_0, size, tmp2__anonymous__z9zvc9);
    tmp$ret$3 = size;
    var rc = tmp$ret$3;
    other.f15(rc);
    tmp$ret$4 = rc;
    tmp$ret$5 = tmp$ret$4;
    var rc_0 = tmp$ret$5;
    _this__u8e3s4.g15(rc_0);
    tmp$ret$6 = rc_0;
    return tmp$ret$6;
  }
  function writeBufferAppendUnreserve(_this__u8e3s4, writeSize) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$0 = _this__u8e3s4.tz_1 - _this__u8e3s4.rz_1 | 0;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    tmp$ret$1 = _this__u8e3s4.uz_1 - _this__u8e3s4.tz_1 | 0;
    if ((tmp + tmp$ret$1 | 0) < writeSize) {
      throw IllegalArgumentException_init_$Create$("Can't append buffer: not enough free space at the end");
    }
    var newWritePosition = _this__u8e3s4.rz_1 + writeSize | 0;
    var overrunSize = newWritePosition - _this__u8e3s4.tz_1 | 0;
    if (overrunSize > 0) {
      _this__u8e3s4.r15();
    }
  }
  function writeBufferPrepend(_this__u8e3s4, other) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = other.rz_1 - other.qz_1 | 0;
    var size = tmp$ret$0;
    var readPosition = _this__u8e3s4.qz_1;
    if (readPosition < size) {
      throw IllegalArgumentException_init_$Create$('Not enough space in the beginning to prepend bytes');
    }
    var newReadPosition = readPosition - size | 0;
    other.pz_1.w15(_this__u8e3s4.pz_1, other.qz_1, size, newReadPosition);
    other.f15(size);
    _this__u8e3s4.q15(newReadPosition);
    return size;
  }
  function get_DefaultChunkedBufferPool() {
    init_properties_BufferFactory_kt_l6j3be();
    return DefaultChunkedBufferPool;
  }
  var DefaultChunkedBufferPool;
  function DefaultBufferPool_init_$Init$(bufferSize, capacity, allocator, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      bufferSize = 4096;
    if (!(($mask0 & 2) === 0))
      capacity = 1000;
    if (!(($mask0 & 4) === 0))
      allocator = DefaultAllocator_getInstance();
    DefaultBufferPool.call($this, bufferSize, capacity, allocator);
    return $this;
  }
  function DefaultBufferPool_init_$Create$(bufferSize, capacity, allocator, $mask0, $marker) {
    return DefaultBufferPool_init_$Init$(bufferSize, capacity, allocator, $mask0, $marker, Object.create(DefaultBufferPool.prototype));
  }
  function DefaultBufferPool(bufferSize, capacity, allocator) {
    DefaultPool.call(this, capacity);
    this.a16_1 = bufferSize;
    this.b16_1 = allocator;
  }
  DefaultBufferPool.prototype.c16 = function () {
    return new ChunkBuffer(this.b16_1.d16(this.a16_1), null, this);
  };
  DefaultBufferPool.prototype.e16 = function (instance) {
    this.b16_1.f16(instance.pz_1);
    DefaultPool.prototype.j16.call(this, instance);
    instance.k16();
  };
  DefaultBufferPool.prototype.j16 = function (instance) {
    return this.e16(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  DefaultBufferPool.prototype.l16 = function (instance) {
    DefaultPool.prototype.m16.call(this, instance);
    // Inline function 'kotlin.check' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.Memory.size' call
    var tmp0__get_size__8hfv5c = instance.pz_1;
    tmp$ret$0 = toLong(tmp0__get_size__8hfv5c.e15_1.byteLength);
    var tmp1_check = tmp$ret$0.equals(toLong(this.a16_1));
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.bits.Memory.size' call
      var tmp0__get_size__8hfv5c_0 = instance.pz_1;
      tmp$ret$1 = toLong(tmp0__get_size__8hfv5c_0.e15_1.byteLength);
      tmp$ret$2 = 'Buffer size mismatch. Expected: ' + this.a16_1 + ', actual: ' + toString(tmp$ret$1);
      var message = tmp$ret$2;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    var tmp2_check = !(instance === Companion_getInstance_4().hw_1);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_check) {
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      tmp$ret$3 = "ChunkBuffer.Empty couldn't be recycled";
      var message_0 = tmp$ret$3;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    var tmp3_check = !(instance === Companion_getInstance_1().d15());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp3_check) {
      var tmp$ret$4;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      tmp$ret$4 = "Empty instance couldn't be recycled";
      var message_1 = tmp$ret$4;
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.check' call
    var tmp4_check = instance.n16() === 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp4_check) {
      var tmp$ret$5;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      tmp$ret$5 = 'Unable to clear buffer: it is still in use.';
      var message_2 = tmp$ret$5;
      throw IllegalStateException_init_$Create$(toString(message_2));
    }
    // Inline function 'kotlin.check' call
    var tmp5_check = instance.o16() == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp5_check) {
      var tmp$ret$6;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      tmp$ret$6 = "Recycled instance shouldn't be a part of a chain.";
      var message_3 = tmp$ret$6;
      throw IllegalStateException_init_$Create$(toString(message_3));
    }
    // Inline function 'kotlin.check' call
    var tmp6_check = instance.x14_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp6_check) {
      var tmp$ret$7;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      tmp$ret$7 = "Recycled instance shouldn't be a view or another buffer.";
      var message_4 = tmp$ret$7;
      throw IllegalStateException_init_$Create$(toString(message_4));
    }
  };
  DefaultBufferPool.prototype.m16 = function (instance) {
    return this.l16(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  DefaultBufferPool.prototype.p16 = function (instance) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = DefaultPool.prototype.q16.call(this, instance);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.clearInstance.<anonymous>' call
    tmp0_apply.r16();
    tmp0_apply.v15();
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  };
  DefaultBufferPool.prototype.q16 = function (instance) {
    return this.p16(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  function get_DEFAULT_BUFFER_SIZE() {
    return DEFAULT_BUFFER_SIZE;
  }
  var DEFAULT_BUFFER_SIZE;
  var properties_initialized_BufferFactory_kt_q9tgbq;
  function init_properties_BufferFactory_kt_l6j3be() {
    if (properties_initialized_BufferFactory_kt_q9tgbq) {
    } else {
      properties_initialized_BufferFactory_kt_q9tgbq = true;
      DefaultChunkedBufferPool = DefaultBufferPool_init_$Create$(0, 0, null, 7, null);
    }
  }
  function writeFully_0(_this__u8e3s4, source, offset, length) {
    // Inline function 'io.ktor.utils.io.core.writeExact' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.writeExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.pz_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.rz_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.tz_1;
    var writeRemaining = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
    if (writeRemaining < length) {
      throw InsufficientSpaceException_init_$Create$('byte array', length, writeRemaining);
    }
    // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
    // Inline function 'io.ktor.utils.io.bits.storeByteArray' call
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.bits.useMemory' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.let' call
    var tmp0_let = of(Companion_getInstance_6(), source, offset, length);
    // Inline function 'kotlin.contracts.contract' call
    tmp0_let.w15(tmp0__anonymous__q1qw7t, 0, length, tmp1__anonymous__uwfjfc);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = length;
    var rc = tmp$ret$2;
    _this__u8e3s4.g15(rc);
    tmp$ret$3 = rc;
  }
  function writeFully_1(_this__u8e3s4, src, length) {
    // Inline function 'kotlin.require' call
    var tmp0_require = length >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
      tmp$ret$0 = "length shouldn't be negative: " + length;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$1 = src.rz_1 - src.qz_1 | 0;
    var tmp1_require = length <= tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$2 = src.rz_1 - src.qz_1 | 0;
      tmp$ret$3 = "length shouldn't be greater than the source read remaining: " + length + ' > ' + tmp$ret$2;
      var message_0 = tmp$ret$3;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$4 = _this__u8e3s4.tz_1 - _this__u8e3s4.rz_1 | 0;
    var tmp2_require = length <= tmp$ret$4;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$6;
      // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
      var tmp$ret$5;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$5 = _this__u8e3s4.tz_1 - _this__u8e3s4.rz_1 | 0;
      tmp$ret$6 = "length shouldn't be greater than the destination write remaining space: " + length + ' > ' + tmp$ret$5;
      var message_1 = tmp$ret$6;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'io.ktor.utils.io.core.writeExact' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$8;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$7;
    // Inline function 'io.ktor.utils.io.core.writeExact.<anonymous>' call
    var tmp3__anonymous__ufb84q = _this__u8e3s4.pz_1;
    var tmp4__anonymous__pkmkx7 = _this__u8e3s4.rz_1;
    var tmp5__anonymous__kpxxpo = _this__u8e3s4.tz_1;
    var writeRemaining = tmp5__anonymous__kpxxpo - tmp4__anonymous__pkmkx7 | 0;
    if (writeRemaining < length) {
      throw InsufficientSpaceException_init_$Create$('buffer readable content', length, writeRemaining);
    }
    // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
    src.pz_1.w15(tmp3__anonymous__ufb84q, src.qz_1, length, tmp4__anonymous__pkmkx7);
    src.f15(length);
    tmp$ret$7 = length;
    var rc = tmp$ret$7;
    _this__u8e3s4.g15(rc);
    tmp$ret$8 = rc;
  }
  function readFully(_this__u8e3s4, destination, offset, length) {
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.readExact' call
    // Inline function 'kotlin.contracts.contract' call
    var value;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.readExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.pz_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.qz_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.rz_1;
    if ((tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0) < length) {
      throw new EOFException('Not enough bytes to read a byte array of size ' + length + '.');
    }
    copyTo_0(tmp0__anonymous__q1qw7t, destination, tmp1__anonymous__uwfjfc, length, offset);
    value = Unit_getInstance();
    tmp$ret$0 = length;
    var rc = tmp$ret$0;
    _this__u8e3s4.f15(rc);
    tmp$ret$1 = rc;
    tmp$ret$2 = value;
  }
  function readFully_0(_this__u8e3s4, dst, length) {
    // Inline function 'kotlin.require' call
    var tmp0_require = length >= 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$1 = 'Failed requirement.';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$2 = dst.tz_1 - dst.rz_1 | 0;
    var tmp1_require = length <= tmp$ret$2;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$3;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$3 = 'Failed requirement.';
      var message_0 = tmp$ret$3;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp$ret$6;
    // Inline function 'io.ktor.utils.io.core.readExact' call
    // Inline function 'kotlin.contracts.contract' call
    var value;
    var tmp$ret$5;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.readExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.pz_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.qz_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.rz_1;
    if ((tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0) < length) {
      throw new EOFException('Not enough bytes to read a buffer content of size ' + length + '.');
    }
    tmp0__anonymous__q1qw7t.w15(dst.pz_1, tmp1__anonymous__uwfjfc, length, dst.rz_1);
    dst.g15(length);
    value = Unit_getInstance();
    tmp$ret$4 = length;
    var rc = tmp$ret$4;
    _this__u8e3s4.f15(rc);
    tmp$ret$5 = rc;
    tmp$ret$6 = value;
    return length;
  }
  function writeShort(_this__u8e3s4, value) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.writeExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.pz_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.rz_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.tz_1;
    var writeRemaining = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
    if (writeRemaining < 2) {
      throw InsufficientSpaceException_init_$Create$('short integer', 2, writeRemaining);
    }
    // Inline function 'io.ktor.utils.io.core.writeShort.<anonymous>' call
    // Inline function 'io.ktor.utils.io.bits.storeShortAt' call
    tmp0__anonymous__q1qw7t.e15_1.setInt16(tmp1__anonymous__uwfjfc, value, false);
    tmp$ret$0 = 2;
    var rc = tmp$ret$0;
    _this__u8e3s4.g15(rc);
    tmp$ret$1 = rc;
    return Unit_getInstance();
  }
  function readShort(_this__u8e3s4) {
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.readExact' call
    // Inline function 'kotlin.contracts.contract' call
    var value;
    var tmp$ret$3;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.readExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.pz_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.qz_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.rz_1;
    if ((tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0) < 2) {
      throw new EOFException('Not enough bytes to read a short integer of size 2.');
    }
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.readShort.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.loadShortAt' call
    tmp$ret$0 = tmp0__anonymous__q1qw7t.e15_1.getInt16(tmp1__anonymous__uwfjfc, false);
    tmp$ret$1 = tmp$ret$0;
    value = tmp$ret$1;
    tmp$ret$2 = 2;
    var rc = tmp$ret$2;
    _this__u8e3s4.f15(rc);
    tmp$ret$3 = rc;
    tmp$ret$4 = value;
    return tmp$ret$4;
  }
  function remainingAll(_this__u8e3s4) {
    return remainingAll_0(_this__u8e3s4, new Long(0, 0));
  }
  function findTail(_this__u8e3s4) {
    var $this = _this__u8e3s4;
    $l$1: do {
      $l$0: do {
        var tmp0_elvis_lhs = $this.o16();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return $this;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var next = tmp;
        var tmp0 = next;
        $this = tmp0;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function releaseAll(_this__u8e3s4, pool) {
    var current = _this__u8e3s4;
    while (!(current == null)) {
      var next = current.t16();
      current.a15(pool);
      current = next;
    }
  }
  function remainingAll_0(_this__u8e3s4, n) {
    var $this = _this__u8e3s4;
    var n_0 = n;
    $l$1: do {
      $l$0: do {
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$0 = $this.rz_1 - $this.qz_1 | 0;
        var rem = toLong(tmp$ret$0).f5(n_0);
        var tmp0_elvis_lhs = $this.o16();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return rem;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var next = tmp;
        var tmp0 = next;
        var tmp1 = rem;
        $this = tmp0;
        n_0 = tmp1;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function BytePacketBuilder_init_$Init$(pool, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      pool = Companion_getInstance_4().fw_1;
    BytePacketBuilder.call($this, pool);
    return $this;
  }
  function BytePacketBuilder_init_$Create$(pool, $mask0, $marker) {
    return BytePacketBuilder_init_$Init$(pool, $mask0, $marker, Object.create(BytePacketBuilder.prototype));
  }
  function BytePacketBuilder(pool) {
    Output.call(this, pool);
  }
  BytePacketBuilder.prototype.c = function () {
    return this.u16();
  };
  BytePacketBuilder.prototype.om = function () {
    return this.u16() === 0;
  };
  BytePacketBuilder.prototype.v16 = function () {
  };
  BytePacketBuilder.prototype.w16 = function (source, offset, length) {
  };
  BytePacketBuilder.prototype.b5 = function (value) {
    var tmp = Output.prototype.b5.call(this, value);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  BytePacketBuilder.prototype.b = function (value) {
    var tmp = Output.prototype.b.call(this, value);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  BytePacketBuilder.prototype.tc = function (value, startIndex, endIndex) {
    var tmp = Output.prototype.tc.call(this, value, startIndex, endIndex);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  BytePacketBuilder.prototype.i11 = function () {
    var size = this.c();
    var head = this.rx();
    return head == null ? Companion_getInstance_2().x16_1 : new ByteReadPacket(head, toLong(size), this.jx_1);
  };
  BytePacketBuilder.prototype.toString = function () {
    return 'BytePacketBuilder(' + this.c() + ' bytes written)';
  };
  function ByteReadPacket_init_$Init$(head, pool, $this) {
    ByteReadPacket.call($this, head, remainingAll(head), pool);
    return $this;
  }
  function ByteReadPacket_init_$Create$(head, pool) {
    return ByteReadPacket_init_$Init$(head, pool, Object.create(ByteReadPacket.prototype));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.x16_1 = new ByteReadPacket(Companion_getInstance_4().hw_1, new Long(0, 0), Companion_getInstance_4().gw_1);
  }
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ByteReadPacket(head, remaining, pool) {
    Companion_getInstance_2();
    Input.call(this, head, remaining, pool);
    this.c17();
  }
  ByteReadPacket.prototype.k17 = function () {
    return null;
  };
  ByteReadPacket.prototype.l17 = function (destination, offset, length) {
    return 0;
  };
  ByteReadPacket.prototype.m17 = function () {
  };
  ByteReadPacket.prototype.toString = function () {
    return 'ByteReadPacket(' + toString(this.f11()) + ' bytes remaining)';
  };
  function _set__head__b4pap2($this, newHead) {
    $this.z10_1 = newHead;
    $this.a11_1 = newHead.pz_1;
    $this.b11_1 = newHead.qz_1;
    $this.c11_1 = newHead.rz_1;
  }
  function readASCII($this, out, min, max) {
    if (max === 0 ? min === 0 : false)
      return 0;
    else if ($this.t12())
      if (min === 0)
        return 0;
      else {
        atLeastMinCharactersRequire($this, min);
      }
     else if (max < min) {
      minShouldBeLess($this, min, max);
    }
    var copied = 0;
    var utf8 = false;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead($this, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_0: do {
          var tmp$ret$7;
          // Inline function 'io.ktor.utils.io.core.Input.readASCII.<anonymous>' call
          var tmp0__anonymous__q1qw7t = current;
          var tmp$ret$4;
          $l$block_0: {
            // Inline function 'io.ktor.utils.io.core.internal.decodeASCII' call
            var tmp$ret$6;
            // Inline function 'io.ktor.utils.io.core.read' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$5;
            // Inline function 'io.ktor.utils.io.core.internal.decodeASCII.<anonymous>' call
            var tmp0__anonymous__q1qw7t_0 = tmp0__anonymous__q1qw7t.pz_1;
            var tmp1__anonymous__uwfjfc = tmp0__anonymous__q1qw7t.qz_1;
            var tmp2__anonymous__z9zvc9 = tmp0__anonymous__q1qw7t.rz_1;
            var inductionVariable = tmp1__anonymous__uwfjfc;
            if (inductionVariable < tmp2__anonymous__z9zvc9)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var tmp$ret$2;
                // Inline function 'io.ktor.utils.io.bits.get' call
                var tmp$ret$1;
                // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
                tmp$ret$1 = tmp0__anonymous__q1qw7t_0.e15_1.getInt8(index);
                tmp$ret$2 = tmp$ret$1;
                var codepoint = tmp$ret$2 & 255;
                var tmp_0;
                if ((codepoint & 128) === 128) {
                  tmp_0 = true;
                } else {
                  var tmp$ret$3;
                  // Inline function 'io.ktor.utils.io.core.Input.readASCII.<anonymous>.<anonymous>' call
                  var tmp3__anonymous__ufb84q = numberToChar(codepoint);
                  var tmp_1;
                  if (copied === max) {
                    tmp_1 = false;
                  } else {
                    out.b5(tmp3__anonymous__ufb84q);
                    var tmp0 = copied;
                    copied = tmp0 + 1 | 0;
                    tmp_1 = true;
                  }
                  tmp$ret$3 = tmp_1;
                  tmp_0 = !tmp$ret$3;
                }
                if (tmp_0) {
                  tmp0__anonymous__q1qw7t.f15(index - tmp1__anonymous__uwfjfc | 0);
                  tmp$ret$4 = false;
                  break $l$block_0;
                }
              }
               while (inductionVariable < tmp2__anonymous__z9zvc9);
            tmp$ret$5 = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
            var rc = tmp$ret$5;
            tmp0__anonymous__q1qw7t.f15(rc);
            tmp$ret$6 = rc;
            tmp$ret$4 = true;
          }
          var rc_0 = tmp$ret$4;
          var tmp_2;
          if (rc_0) {
            tmp_2 = true;
          } else if (copied === max) {
            tmp_2 = false;
          } else {
            utf8 = true;
            tmp_2 = false;
          }
          tmp$ret$7 = tmp_2;
          if (!tmp$ret$7) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead($this, current);
          var tmp_3;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_3 = tmp1_elvis_lhs;
          }
          var next = tmp_3;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead($this, current);
        }
      }
    }
    if (utf8) {
      return copied + readUtf8($this, out, min - copied | 0, max - copied | 0) | 0;
    }
    if (copied < min) {
      prematureEndOfStreamChars($this, min, copied);
    }
    return copied;
  }
  function atLeastMinCharactersRequire($this, min) {
    throw new EOFException('at least ' + min + ' characters required but no bytes available');
  }
  function minShouldBeLess($this, min, max) {
    throw IllegalArgumentException_init_$Create$('min should be less or equal to max but min = ' + min + ', max = ' + max);
  }
  function prematureEndOfStreamChars($this, min, copied) {
    throw new MalformedUTF8InputException('Premature end of stream: expected at least ' + min + ' chars but had only ' + copied);
  }
  function readUtf8($this, out, min, max) {
    var copied = 0;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead($this, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      var size = 1;
      try {
        $l$loop_0: do {
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          var tmp0__get_readRemaining__u3cy9h = current;
          tmp$ret$1 = tmp0__get_readRemaining__u3cy9h.rz_1 - tmp0__get_readRemaining__u3cy9h.qz_1 | 0;
          var before = tmp$ret$1;
          var after;
          if (before >= size) {
            try {
              var tmp$ret$11;
              // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>' call
              var tmp3__anonymous__ufb84q = current;
              var tmp$ret$5;
              $l$block_3: {
                // Inline function 'io.ktor.utils.io.core.internal.decodeUTF8' call
                var byteCount = 0;
                var value = 0;
                var lastByteCount = 0;
                var tmp$ret$10;
                // Inline function 'io.ktor.utils.io.core.read' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$9;
                // Inline function 'io.ktor.utils.io.core.internal.decodeUTF8.<anonymous>' call
                var tmp0__anonymous__q1qw7t = tmp3__anonymous__ufb84q.pz_1;
                var tmp1__anonymous__uwfjfc = tmp3__anonymous__ufb84q.qz_1;
                var tmp2__anonymous__z9zvc9 = tmp3__anonymous__ufb84q.rz_1;
                var inductionVariable = tmp1__anonymous__uwfjfc;
                if (inductionVariable < tmp2__anonymous__z9zvc9)
                  do {
                    var index = inductionVariable;
                    inductionVariable = inductionVariable + 1 | 0;
                    var tmp$ret$3;
                    // Inline function 'io.ktor.utils.io.bits.get' call
                    var tmp$ret$2;
                    // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
                    tmp$ret$2 = tmp0__anonymous__q1qw7t.e15_1.getInt8(index);
                    tmp$ret$3 = tmp$ret$2;
                    var v = tmp$ret$3 & 255;
                    if ((v & 128) === 0) {
                      if (!(byteCount === 0)) {
                        malformedByteCount(byteCount);
                      }
                      var tmp$ret$4;
                      // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                      var tmp3__anonymous__ufb84q_0 = numberToChar(v);
                      var tmp_0;
                      if (copied === max) {
                        tmp_0 = false;
                      } else {
                        out.b5(tmp3__anonymous__ufb84q_0);
                        var tmp0 = copied;
                        copied = tmp0 + 1 | 0;
                        tmp_0 = true;
                      }
                      tmp$ret$4 = tmp_0;
                      if (!tmp$ret$4) {
                        tmp3__anonymous__ufb84q.f15(index - tmp1__anonymous__uwfjfc | 0);
                        tmp$ret$5 = -1;
                        break $l$block_3;
                      }
                    } else if (byteCount === 0) {
                      var mask = 128;
                      value = v;
                      var inductionVariable_0 = 1;
                      if (inductionVariable_0 <= 6)
                        $l$loop: do {
                          var i = inductionVariable_0;
                          inductionVariable_0 = inductionVariable_0 + 1 | 0;
                          if (!((value & mask) === 0)) {
                            value = value & ~mask;
                            mask = mask >> 1;
                            var tmp2 = byteCount;
                            byteCount = tmp2 + 1 | 0;
                          } else {
                            break $l$loop;
                          }
                        }
                         while (inductionVariable_0 <= 6);
                      lastByteCount = byteCount;
                      var tmp3 = byteCount;
                      byteCount = tmp3 - 1 | 0;
                      if (lastByteCount > (tmp2__anonymous__z9zvc9 - index | 0)) {
                        tmp3__anonymous__ufb84q.f15(index - tmp1__anonymous__uwfjfc | 0);
                        tmp$ret$5 = lastByteCount;
                        break $l$block_3;
                      }
                    } else {
                      value = value << 6 | v & 127;
                      var tmp4 = byteCount;
                      byteCount = tmp4 - 1 | 0;
                      if (byteCount === 0) {
                        if (isBmpCodePoint(value)) {
                          var tmp$ret$6;
                          // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                          var tmp4__anonymous__pkmkx7 = numberToChar(value);
                          var tmp_1;
                          if (copied === max) {
                            tmp_1 = false;
                          } else {
                            out.b5(tmp4__anonymous__pkmkx7);
                            var tmp0_0 = copied;
                            copied = tmp0_0 + 1 | 0;
                            tmp_1 = true;
                          }
                          tmp$ret$6 = tmp_1;
                          if (!tmp$ret$6) {
                            tmp3__anonymous__ufb84q.f15(((index - tmp1__anonymous__uwfjfc | 0) - lastByteCount | 0) + 1 | 0);
                            tmp$ret$5 = -1;
                            break $l$block_3;
                          }
                        } else if (!isValidCodePoint(value)) {
                          malformedCodePoint(value);
                        } else {
                          var tmp_2;
                          var tmp$ret$7;
                          // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                          var tmp5__anonymous__kpxxpo = numberToChar(highSurrogate(value));
                          var tmp_3;
                          if (copied === max) {
                            tmp_3 = false;
                          } else {
                            out.b5(tmp5__anonymous__kpxxpo);
                            var tmp0_1 = copied;
                            copied = tmp0_1 + 1 | 0;
                            tmp_3 = true;
                          }
                          tmp$ret$7 = tmp_3;
                          if (!tmp$ret$7) {
                            tmp_2 = true;
                          } else {
                            var tmp$ret$8;
                            // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                            var tmp6__anonymous__fv9ai5 = numberToChar(lowSurrogate(value));
                            var tmp_4;
                            if (copied === max) {
                              tmp_4 = false;
                            } else {
                              out.b5(tmp6__anonymous__fv9ai5);
                              var tmp0_2 = copied;
                              copied = tmp0_2 + 1 | 0;
                              tmp_4 = true;
                            }
                            tmp$ret$8 = tmp_4;
                            tmp_2 = !tmp$ret$8;
                          }
                          if (tmp_2) {
                            tmp3__anonymous__ufb84q.f15(((index - tmp1__anonymous__uwfjfc | 0) - lastByteCount | 0) + 1 | 0);
                            tmp$ret$5 = -1;
                            break $l$block_3;
                          }
                        }
                        value = 0;
                      }
                    }
                  }
                   while (inductionVariable < tmp2__anonymous__z9zvc9);
                tmp$ret$9 = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
                var rc = tmp$ret$9;
                tmp3__anonymous__ufb84q.f15(rc);
                tmp$ret$10 = rc;
                tmp$ret$5 = 0;
              }
              var size_0 = tmp$ret$5;
              tmp$ret$11 = size_0 === 0 ? 1 : size_0 > 0 ? size_0 : 0;
              size = tmp$ret$11;
            }finally {
              var tmp$ret$12;
              // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
              var tmp1__get_readRemaining__qliyus = current;
              tmp$ret$12 = tmp1__get_readRemaining__qliyus.rz_1 - tmp1__get_readRemaining__qliyus.qz_1 | 0;
              after = tmp$ret$12;
            }
          } else {
            after = before;
          }
          release = false;
          var tmp_5;
          if (after === 0) {
            tmp_5 = prepareReadNextHead($this, current);
          } else {
            var tmp_6;
            if (after < size) {
              tmp_6 = true;
            } else {
              var tmp$ret$13;
              // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
              var tmp2__get_endGap__m31424 = current;
              tmp$ret$13 = tmp2__get_endGap__m31424.uz_1 - tmp2__get_endGap__m31424.tz_1 | 0;
              var tmp_7 = tmp$ret$13;
              Companion_getInstance_1();
              tmp_6 = tmp_7 < 8;
            }
            if (tmp_6) {
              completeReadHead($this, current);
              tmp_5 = prepareReadFirstHead($this, size);
            } else {
              tmp_5 = current;
            }
          }
          var tmp1_elvis_lhs = tmp_5;
          var tmp_8;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_8 = tmp1_elvis_lhs;
          }
          var next = tmp_8;
          current = next;
          release = true;
        }
         while (size > 0);
      }finally {
        if (release) {
          completeReadHead($this, current);
        }
      }
    }
    if (copied < min) {
      prematureEndOfStreamChars($this, min, copied);
    }
    return copied;
  }
  function discardAsMuchAsPossible($this, n, skipped) {
    var $this_0 = $this;
    var n_0 = n;
    var skipped_0 = skipped;
    $l$1: do {
      $l$0: do {
        if (n_0.equals(new Long(0, 0)))
          return skipped_0;
        var tmp0_elvis_lhs = $this_0.z17(1);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return skipped_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var current = tmp;
        var tmp$ret$1;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$0 = current.rz_1 - current.qz_1 | 0;
        var tmp0_minOf = toLong(tmp$ret$0);
        tmp$ret$1 = tmp0_minOf.s(n_0) <= 0 ? tmp0_minOf : n_0;
        var size = tmp$ret$1.k7();
        current.f15(size);
        var tmp1_this = $this_0;
        tmp1_this.b11_1 = tmp1_this.b11_1 + size | 0;
        afterRead($this_0, current);
        var tmp0 = $this_0;
        var tmp$ret$2;
        // Inline function 'kotlin.Long.minus' call
        tmp$ret$2 = n_0.g5(toLong(size));
        var tmp1 = tmp$ret$2;
        var tmp$ret$3;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$3 = skipped_0.f5(toLong(size));
        var tmp2 = tmp$ret$3;
        $this_0 = tmp0;
        n_0 = tmp1;
        skipped_0 = tmp2;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function discardAsMuchAsPossible_0($this, n, skipped) {
    var currentCount = n;
    var currentSkipped = skipped;
    while (true) {
      if (currentCount === 0) {
        return currentSkipped;
      }
      var tmp0_elvis_lhs = $this.z17(1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return currentSkipped;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$0 = current.rz_1 - current.qz_1 | 0;
      var tmp0_minOf = tmp$ret$0;
      var tmp1_minOf = currentCount;
      tmp$ret$1 = Math.min(tmp0_minOf, tmp1_minOf);
      var size = tmp$ret$1;
      current.f15(size);
      var tmp1_this = $this;
      tmp1_this.b11_1 = tmp1_this.b11_1 + size | 0;
      afterRead($this, current);
      currentCount = currentCount - size | 0;
      currentSkipped = currentSkipped + size | 0;
    }
  }
  function fixGapAfterReadFallback($this, current) {
    if ($this.e11_1 ? current.o16() == null : false) {
      $this.b11_1 = current.qz_1;
      $this.c11_1 = current.rz_1;
      $this.n17(new Long(0, 0));
      return Unit_getInstance();
    }
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = current.rz_1 - current.qz_1 | 0;
    var size = tmp$ret$0;
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.minOf' call
    Companion_getInstance_1();
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    tmp$ret$1 = current.uz_1 - current.tz_1 | 0;
    var tmp0_minOf = 8 - tmp$ret$1 | 0;
    tmp$ret$2 = Math.min(size, tmp0_minOf);
    var overrun = tmp$ret$2;
    if (size > overrun) {
      fixGapAfterReadFallbackUnreserved($this, current, size, overrun);
    } else {
      var new_0 = $this.y10_1.n14();
      Companion_getInstance_1();
      new_0.l15(8);
      new_0.b18(current.t16());
      writeBufferAppend(new_0, current, size);
      _set__head__b4pap2($this, new_0);
    }
    current.a15($this.y10_1);
  }
  function fixGapAfterReadFallbackUnreserved($this, current, size, overrun) {
    var chunk1 = $this.y10_1.n14();
    var chunk2 = $this.y10_1.n14();
    Companion_getInstance_1();
    chunk1.l15(8);
    Companion_getInstance_1();
    chunk2.l15(8);
    chunk1.b18(chunk2);
    chunk2.b18(current.t16());
    writeBufferAppend(chunk1, current, size - overrun | 0);
    writeBufferAppend(chunk2, current, overrun);
    _set__head__b4pap2($this, chunk1);
    $this.n17(remainingAll(chunk2));
  }
  function ensureNext($this, current, empty) {
    var $this_0 = $this;
    var current_0 = current;
    var empty_0 = empty;
    $l$1: do {
      $l$0: do {
        if (current_0 === empty_0) {
          return doFill($this_0);
        }
        var next = current_0.t16();
        current_0.a15($this_0.y10_1);
        var tmp;
        if (next == null) {
          _set__head__b4pap2($this_0, empty_0);
          $this_0.n17(new Long(0, 0));
          var tmp0 = $this_0;
          var tmp1 = empty_0;
          var tmp2 = empty_0;
          $this_0 = tmp0;
          current_0 = tmp1;
          empty_0 = tmp2;
          continue $l$0;
        } else {
          var tmp$ret$0;
          // Inline function 'io.ktor.utils.io.core.canRead' call
          tmp$ret$0 = next.rz_1 > next.qz_1;
          if (tmp$ret$0) {
            _set__head__b4pap2($this_0, next);
            var tmp0_this = $this_0;
            var tmp$ret$2;
            // Inline function 'kotlin.Long.minus' call
            var tmp0_minus = tmp0_this.d11_1;
            var tmp$ret$1;
            // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
            tmp$ret$1 = next.rz_1 - next.qz_1 | 0;
            var tmp1_minus = tmp$ret$1;
            tmp$ret$2 = tmp0_minus.g5(toLong(tmp1_minus));
            tmp0_this.n17(tmp$ret$2);
            tmp = next;
          } else {
            var tmp3 = $this_0;
            var tmp4 = next;
            var tmp5 = empty_0;
            $this_0 = tmp3;
            current_0 = tmp4;
            empty_0 = tmp5;
            continue $l$0;
          }
        }
        return tmp;
      }
       while (false);
    }
     while (true);
  }
  function doFill($this) {
    if ($this.e11_1)
      return null;
    var chunk = $this.k17();
    if (chunk == null) {
      $this.e11_1 = true;
      return null;
    }
    appendView($this, chunk);
    return chunk;
  }
  function appendView($this, chunk) {
    var tail = findTail($this.z10_1);
    if (tail === Companion_getInstance_4().hw_1) {
      _set__head__b4pap2($this, chunk);
      // Inline function 'kotlin.require' call
      var tmp0_require = $this.d11_1.equals(new Long(0, 0));
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        throw IllegalStateException_init_$Create$('It should be no tail remaining bytes if current tail is EmptyBuffer');
      }
      var tmp0_safe_receiver = chunk.o16();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : remainingAll(tmp0_safe_receiver);
      $this.n17(tmp1_elvis_lhs == null ? new Long(0, 0) : tmp1_elvis_lhs);
    } else {
      tail.b18(chunk);
      var tmp2_this = $this;
      tmp2_this.n17(tmp2_this.d11_1.f5(remainingAll(chunk)));
    }
  }
  function prepareReadLoop($this, minSize, head) {
    var $this_0 = $this;
    var minSize_0 = minSize;
    var head_0 = head;
    $l$1: do {
      $l$0: do {
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
        tmp$ret$0 = $this_0.c11_1 - $this_0.b11_1 | 0;
        var headSize = tmp$ret$0;
        if (headSize >= minSize_0)
          return head_0;
        var tmp0_elvis_lhs = head_0.o16();
        var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? doFill($this_0) : tmp0_elvis_lhs;
        var tmp;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        var next = tmp;
        if (headSize === 0) {
          if (!(head_0 === Companion_getInstance_4().hw_1)) {
            $this_0.a18(head_0);
          }
          var tmp0 = $this_0;
          var tmp1 = minSize_0;
          var tmp2 = next;
          $this_0 = tmp0;
          minSize_0 = tmp1;
          head_0 = tmp2;
          continue $l$0;
        } else {
          var desiredExtraBytes = minSize_0 - headSize | 0;
          var copied = writeBufferAppend(head_0, next, desiredExtraBytes);
          $this_0.c11_1 = head_0.rz_1;
          var tmp2_this = $this_0;
          var tmp$ret$1;
          // Inline function 'kotlin.Long.minus' call
          var tmp0_minus = tmp2_this.d11_1;
          tmp$ret$1 = tmp0_minus.g5(toLong(copied));
          tmp2_this.n17(tmp$ret$1);
          var tmp$ret$2;
          // Inline function 'io.ktor.utils.io.core.canRead' call
          tmp$ret$2 = next.rz_1 > next.qz_1;
          if (!tmp$ret$2) {
            head_0.b18(null);
            head_0.b18(next.t16());
            next.a15($this_0.y10_1);
          } else {
            next.k15(copied);
          }
        }
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$3 = head_0.rz_1 - head_0.qz_1 | 0;
        if (tmp$ret$3 >= minSize_0)
          return head_0;
        var tmp_0 = minSize_0;
        Companion_getInstance_1();
        if (tmp_0 > 8) {
          minSizeIsTooBig($this_0, minSize_0);
        }
        var tmp3 = $this_0;
        var tmp4 = minSize_0;
        var tmp5 = head_0;
        $this_0 = tmp3;
        minSize_0 = tmp4;
        head_0 = tmp5;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function minSizeIsTooBig($this, minSize) {
    Companion_getInstance_1();
    throw IllegalStateException_init_$Create$('minSize of ' + minSize + ' is too big (should be less than ' + 8 + ')');
  }
  function afterRead($this, head) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = head.rz_1 - head.qz_1 | 0;
    if (tmp$ret$0 === 0) {
      $this.a18(head);
    }
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  var Companion_instance_1;
  function Companion_getInstance_3() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Input(head, remaining, pool) {
    Companion_getInstance_3();
    this.y10_1 = pool;
    this.z10_1 = head;
    this.a11_1 = head.pz_1;
    this.b11_1 = head.qz_1;
    this.c11_1 = head.rz_1;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = this.c11_1 - this.b11_1 | 0;
    tmp$ret$0 = remaining.g5(toLong(tmp0_minus));
    tmp.d11_1 = tmp$ret$0;
    this.e11_1 = false;
  }
  Input.prototype.t12 = function () {
    var tmp;
    var tmp_0;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
    tmp$ret$0 = this.c11_1 - this.b11_1 | 0;
    if (tmp$ret$0 === 0) {
      tmp_0 = this.d11_1.equals(new Long(0, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.e11_1 ? true : doFill(this) == null;
    } else {
      tmp = false;
    }
    return tmp;
  };
  Input.prototype.y16 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.z10_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.Input.<get-head>.<anonymous>' call
    tmp0_also.i15(this.b11_1);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  Input.prototype.n17 = function (newValue) {
    // Inline function 'kotlin.require' call
    var tmp0_require = newValue.s(new Long(0, 0)) >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Input.<set-tailRemaining>.<anonymous>' call
      tmp$ret$0 = "tailRemaining shouldn't be negative: " + toString(newValue);
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.d11_1 = newValue;
  };
  Input.prototype.f11 = function () {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
    tmp$ret$0 = this.c11_1 - this.b11_1 | 0;
    return toLong(tmp$ret$0).f5(this.d11_1);
  };
  Input.prototype.w11 = function () {
    return !(this.b11_1 === this.c11_1) ? true : !this.d11_1.equals(new Long(0, 0));
  };
  Input.prototype.rl = function () {
    var head = this.y16();
    var empty = Companion_getInstance_4().hw_1;
    if (!(head === empty)) {
      _set__head__b4pap2(this, empty);
      this.n17(new Long(0, 0));
      releaseAll(head, this.y10_1);
    }
  };
  Input.prototype.nu = function () {
    this.rl();
    if (!this.e11_1) {
      this.e11_1 = true;
    }
    this.m17();
  };
  Input.prototype.rx = function () {
    var head = this.y16();
    var empty = Companion_getInstance_4().hw_1;
    if (head === empty)
      return null;
    _set__head__b4pap2(this, empty);
    this.n17(new Long(0, 0));
    return head;
  };
  Input.prototype.o17 = function () {
    var head = this.y16();
    var next = head.o16();
    var empty = Companion_getInstance_4().hw_1;
    if (head === empty)
      return null;
    if (next == null) {
      _set__head__b4pap2(this, empty);
      this.n17(new Long(0, 0));
    } else {
      _set__head__b4pap2(this, next);
      var tmp0_this = this;
      var tmp$ret$1;
      // Inline function 'kotlin.Long.minus' call
      var tmp0_minus = tmp0_this.d11_1;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$0 = next.rz_1 - next.qz_1 | 0;
      var tmp1_minus = tmp$ret$0;
      tmp$ret$1 = tmp0_minus.g5(toLong(tmp1_minus));
      tmp0_this.n17(tmp$ret$1);
    }
    head.b18(null);
    return head;
  };
  Input.prototype.p17 = function (chain) {
    if (chain === Companion_getInstance_4().hw_1)
      return Unit_getInstance();
    var size = remainingAll(chain);
    if (this.z10_1 === Companion_getInstance_4().hw_1) {
      _set__head__b4pap2(this, chain);
      var tmp$ret$1;
      // Inline function 'kotlin.Long.minus' call
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
      tmp$ret$0 = this.c11_1 - this.b11_1 | 0;
      var tmp0_minus = tmp$ret$0;
      tmp$ret$1 = size.g5(toLong(tmp0_minus));
      this.n17(tmp$ret$1);
    } else {
      findTail(this.z10_1).b18(chain);
      var tmp0_this = this;
      tmp0_this.n17(tmp0_this.d11_1.f5(size));
    }
  };
  Input.prototype.q17 = function (chain) {
    var tail = findTail(this.y16());
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = chain.rz_1 - chain.qz_1 | 0;
    var size = tmp$ret$0;
    var tmp;
    if (size === 0) {
      tmp = true;
    } else {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$1 = tail.tz_1 - tail.rz_1 | 0;
      tmp = tmp$ret$1 < size;
    }
    if (tmp)
      return false;
    writeBufferAppend(tail, chain, size);
    if (this.y16() === tail) {
      this.c11_1 = tail.rz_1;
    } else {
      var tmp0_this = this;
      var tmp$ret$2;
      // Inline function 'kotlin.Long.plus' call
      var tmp0_plus = tmp0_this.d11_1;
      tmp$ret$2 = tmp0_plus.f5(toLong(size));
      tmp0_this.n17(tmp$ret$2);
    }
    return true;
  };
  Input.prototype.r17 = function (n) {
    // Inline function 'kotlin.require' call
    var tmp0_require = n >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Input.discard.<anonymous>' call
      tmp$ret$0 = 'Negative discard is not allowed: ' + n;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return discardAsMuchAsPossible_0(this, n, 0);
  };
  Input.prototype.f15 = function (n) {
    if (!(this.r17(n) === n))
      throw new EOFException('Unable to discard ' + n + ' bytes due to end of packet');
  };
  Input.prototype.s17 = function (n) {
    if (n.s(new Long(0, 0)) <= 0)
      return new Long(0, 0);
    return discardAsMuchAsPossible(this, n, new Long(0, 0));
  };
  Input.prototype.t17 = function (min, max) {
    if (min === 0 ? max === 0 ? true : this.t12() : false)
      return '';
    var remaining = this.f11();
    if (remaining.s(new Long(0, 0)) > 0 ? toLong(max).s(remaining) >= 0 : false) {
      var tmp = remaining.k7();
      return readTextExactBytes$default(this, tmp, null, 2, null);
    }
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    var tmp0_buildString = coerceAtMost(coerceAtLeast(min, 16), max);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$(tmp0_buildString);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.Input.readText.<anonymous>' call
    readASCII(this, tmp0_apply, min, max);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  Input.prototype.u17 = function (min, max, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      min = 0;
    if (!(($mask0 & 2) === 0))
      max = IntCompanionObject_getInstance().MAX_VALUE;
    return this.t17(min, max);
  };
  Input.prototype.v17 = function (minSize) {
    return prepareReadLoop(this, minSize, this.y16());
  };
  Input.prototype.w17 = function (current) {
    return this.x17(current);
  };
  Input.prototype.x17 = function (current) {
    return ensureNext(this, current, Companion_getInstance_4().hw_1);
  };
  Input.prototype.y17 = function (current) {
    var tmp0_elvis_lhs = current.o16();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return fixGapAfterReadFallback(this, current);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var next = tmp;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = current.rz_1 - current.qz_1 | 0;
    var remaining = tmp$ret$0;
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.minOf' call
    Companion_getInstance_1();
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    tmp$ret$1 = current.uz_1 - current.tz_1 | 0;
    var tmp0_minOf = 8 - tmp$ret$1 | 0;
    tmp$ret$2 = Math.min(remaining, tmp0_minOf);
    var overrunSize = tmp$ret$2;
    if (next.sz_1 < overrunSize) {
      return fixGapAfterReadFallback(this, current);
    }
    restoreStartGap(next, overrunSize);
    if (remaining > overrunSize) {
      current.r15();
      this.c11_1 = current.rz_1;
      var tmp1_this = this;
      var tmp$ret$3;
      // Inline function 'kotlin.Long.plus' call
      var tmp1_plus = tmp1_this.d11_1;
      tmp$ret$3 = tmp1_plus.f5(toLong(overrunSize));
      tmp1_this.n17(tmp$ret$3);
    } else {
      _set__head__b4pap2(this, next);
      var tmp2_this = this;
      var tmp$ret$5;
      // Inline function 'kotlin.Long.minus' call
      var tmp2_minus = tmp2_this.d11_1;
      var tmp$ret$4;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$4 = next.rz_1 - next.qz_1 | 0;
      var tmp3_minus = tmp$ret$4 - overrunSize | 0;
      tmp$ret$5 = tmp2_minus.g5(toLong(tmp3_minus));
      tmp2_this.n17(tmp$ret$5);
      current.t16();
      current.a15(this.y10_1);
    }
  };
  Input.prototype.k17 = function () {
    var buffer = this.y10_1.n14();
    try {
      Companion_getInstance_1();
      buffer.l15(8);
      var tmp = buffer.rz_1;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$0 = buffer.tz_1 - buffer.rz_1 | 0;
      var copied = this.l17(buffer.pz_1, tmp, tmp$ret$0);
      if (copied === 0) {
        this.e11_1 = true;
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.core.canRead' call
        tmp$ret$1 = buffer.rz_1 > buffer.qz_1;
        if (!tmp$ret$1) {
          buffer.a15(this.y10_1);
          return null;
        }
      }
      buffer.g15(copied);
      return buffer;
    } catch ($p) {
      if ($p instanceof Error) {
        buffer.a15(this.y10_1);
        throw $p;
      } else {
        throw $p;
      }
    }
  };
  Input.prototype.c17 = function () {
    if (!this.e11_1) {
      this.e11_1 = true;
    }
  };
  Input.prototype.z17 = function (minSize) {
    var head = this.y16();
    if ((this.c11_1 - this.b11_1 | 0) >= minSize)
      return head;
    return prepareReadLoop(this, minSize, head);
  };
  Input.prototype.a18 = function (head) {
    var tmp0_elvis_lhs = head.t16();
    var next = tmp0_elvis_lhs == null ? Companion_getInstance_4().hw_1 : tmp0_elvis_lhs;
    _set__head__b4pap2(this, next);
    var tmp1_this = this;
    var tmp$ret$1;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = tmp1_this.d11_1;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = next.rz_1 - next.qz_1 | 0;
    var tmp1_minus = tmp$ret$0;
    tmp$ret$1 = tmp0_minus.g5(toLong(tmp1_minus));
    tmp1_this.n17(tmp$ret$1);
    head.a15(this.y10_1);
    return next;
  };
  function discard(_this__u8e3s4) {
    Companion_getInstance();
    return _this__u8e3s4.s17(new Long(-1, 2147483647));
  }
  function readFully_1(_this__u8e3s4, dst, offset, length) {
    // Inline function 'io.ktor.utils.io.core.requireNoRemaining' call
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate' call
    var remaining = length;
    var dstOffset = offset;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_0: do {
          var tmp$ret$3;
          // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate.<anonymous>' call
          var tmp0__anonymous__q1qw7t = current;
          var tmp$ret$2;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf = remaining;
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          tmp$ret$1 = tmp0__anonymous__q1qw7t.rz_1 - tmp0__anonymous__q1qw7t.qz_1 | 0;
          var tmp1_minOf = tmp$ret$1;
          tmp$ret$2 = Math.min(tmp0_minOf, tmp1_minOf);
          var count = tmp$ret$2;
          // Inline function 'io.ktor.utils.io.core.readFully.<anonymous>' call
          var tmp1__anonymous__uwfjfc = dstOffset;
          readFully(tmp0__anonymous__q1qw7t, dst, tmp1__anonymous__uwfjfc, count);
          remaining = remaining - count | 0;
          dstOffset = dstOffset + count | 0;
          tmp$ret$3 = remaining > 0;
          if (!tmp$ret$3) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var next = tmp_0;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead(_this__u8e3s4, current);
        }
      }
    }
    tmp$ret$4 = remaining;
    var tmp2_requireNoRemaining = tmp$ret$4;
    if (tmp2_requireNoRemaining > 0) {
      prematureEndOfStream(tmp2_requireNoRemaining);
    }
  }
  function readFully_2(_this__u8e3s4, dst, length) {
    // Inline function 'io.ktor.utils.io.core.requireNoRemaining' call
    var tmp$ret$5;
    // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate' call
    var remaining = length;
    var dstOffset = 0;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_0: do {
          var tmp$ret$4;
          // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate.<anonymous>' call
          var tmp0__anonymous__q1qw7t = current;
          var tmp$ret$3;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf = remaining;
          var tmp$ret$2;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          tmp$ret$2 = tmp0__anonymous__q1qw7t.rz_1 - tmp0__anonymous__q1qw7t.qz_1 | 0;
          var tmp1_minOf = tmp$ret$2;
          tmp$ret$3 = Math.min(tmp0_minOf, tmp1_minOf);
          var count = tmp$ret$3;
          // Inline function 'io.ktor.utils.io.core.readFully.<anonymous>' call
          var tmp1__anonymous__uwfjfc = dstOffset;
          readFully_0(tmp0__anonymous__q1qw7t, dst, count);
          remaining = remaining - count | 0;
          dstOffset = dstOffset + count | 0;
          tmp$ret$4 = remaining > 0;
          if (!tmp$ret$4) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var next = tmp_0;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead(_this__u8e3s4, current);
        }
      }
    }
    tmp$ret$5 = remaining;
    var tmp2_requireNoRemaining = tmp$ret$5;
    if (tmp2_requireNoRemaining > 0) {
      prematureEndOfStream(tmp2_requireNoRemaining);
    }
  }
  function readShort_0(_this__u8e3s4) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.readPrimitive' call
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
      tmp$ret$0 = _this__u8e3s4.c11_1 - _this__u8e3s4.b11_1 | 0;
      if (tmp$ret$0 > 2) {
        var index = _this__u8e3s4.b11_1;
        _this__u8e3s4.b11_1 = index + 2 | 0;
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.core.readShort.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _this__u8e3s4.a11_1;
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.bits.loadShortAt' call
        tmp$ret$1 = tmp0__anonymous__q1qw7t.e15_1.getInt16(index, false);
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
        break $l$block;
      }
      var tmp$ret$4;
      // Inline function 'io.ktor.utils.io.core.readShort.<anonymous>' call
      tmp$ret$4 = readShortFallback(_this__u8e3s4);
      tmp$ret$3 = tmp$ret$4;
    }
    return tmp$ret$3;
  }
  function readShortFallback(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.readPrimitiveFallback' call
    var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 2);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      prematureEndOfStream(2);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.readShortFallback.<anonymous>' call
    tmp$ret$0 = readShort(head);
    var value = tmp$ret$0;
    completeReadHead(_this__u8e3s4, head);
    tmp$ret$1 = value;
    return tmp$ret$1;
  }
  function flushChain($this) {
    var tmp0_elvis_lhs = $this.rx();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var oldTail = tmp;
    try {
      // Inline function 'io.ktor.utils.io.core.forEachChunk' call
      // Inline function 'kotlin.contracts.contract' call
      var current = oldTail;
      $l$loop: do {
        // Inline function 'io.ktor.utils.io.core.Output.flushChain.<anonymous>' call
        var tmp0__anonymous__q1qw7t = current;
        var tmp_0 = tmp0__anonymous__q1qw7t.qz_1;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$0 = tmp0__anonymous__q1qw7t.rz_1 - tmp0__anonymous__q1qw7t.qz_1 | 0;
        $this.w16(tmp0__anonymous__q1qw7t.pz_1, tmp_0, tmp$ret$0);
        var tmp0_elvis_lhs_0 = current.o16();
        var tmp_1;
        if (tmp0_elvis_lhs_0 == null) {
          break $l$loop;
        } else {
          tmp_1 = tmp0_elvis_lhs_0;
        }
        current = tmp_1;
      }
       while (true);
    }finally {
      releaseAll(oldTail, $this.jx_1);
    }
  }
  function appendNewChunk($this) {
    var new_0 = $this.jx_1.n14();
    Companion_getInstance_1();
    new_0.l15(8);
    $this.z14(new_0);
    return new_0;
  }
  function appendChainImpl($this, head, newTail, chainedSizeDelta) {
    var _tail = $this.lx_1;
    if (_tail == null) {
      $this.kx_1 = head;
      $this.qx_1 = 0;
    } else {
      _tail.b18(head);
      var tailPosition = $this.nx_1;
      _tail.h15(tailPosition);
      var tmp0_this = $this;
      tmp0_this.qx_1 = tmp0_this.qx_1 + (tailPosition - $this.px_1 | 0) | 0;
    }
    $this.lx_1 = newTail;
    var tmp1_this = $this;
    tmp1_this.qx_1 = tmp1_this.qx_1 + chainedSizeDelta | 0;
    $this.mx_1 = newTail.pz_1;
    $this.nx_1 = newTail.rz_1;
    $this.px_1 = newTail.qz_1;
    $this.ox_1 = newTail.tz_1;
  }
  function writeByteFallback($this, v) {
    appendNewChunk($this).u15(v);
    var tmp0_this = $this;
    var tmp1 = tmp0_this.nx_1;
    tmp0_this.nx_1 = tmp1 + 1 | 0;
  }
  function appendCharFallback($this, c) {
    var tmp$ret$13;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.Output.write' call
      var buffer = $this.a17(3);
      try {
        var tmp$ret$11;
        // Inline function 'io.ktor.utils.io.core.Output.appendCharFallback.<anonymous>' call
        var tmp$ret$10;
        // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
        var tmp16_putUtf8Char = buffer.pz_1;
        var tmp17_putUtf8Char = buffer.rz_1;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(c);
        var tmp18_putUtf8Char = tmp$ret$0;
        var tmp0_subject = tmp18_putUtf8Char;
        var tmp;
        if (0 <= tmp0_subject ? tmp0_subject <= 127 : false) {
          // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
          var tmp0_storeAt = toByte(tmp18_putUtf8Char);
          tmp16_putUtf8Char.e15_1.setInt8(tmp17_putUtf8Char, tmp0_storeAt);
          tmp = 1;
        } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp1_set = toByte(192 | tmp18_putUtf8Char >> 6 & 31);
          tmp16_putUtf8Char.e15_1.setInt8(tmp17_putUtf8Char, tmp1_set);
          tmp$ret$1 = Unit_getInstance();
          var tmp$ret$2;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp2_set = tmp17_putUtf8Char + 1 | 0;
          var tmp3_set = toByte(128 | tmp18_putUtf8Char & 63);
          tmp16_putUtf8Char.e15_1.setInt8(tmp2_set, tmp3_set);
          tmp$ret$2 = Unit_getInstance();
          tmp = 2;
        } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
          var tmp$ret$3;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp4_set = toByte(224 | tmp18_putUtf8Char >> 12 & 15);
          tmp16_putUtf8Char.e15_1.setInt8(tmp17_putUtf8Char, tmp4_set);
          tmp$ret$3 = Unit_getInstance();
          var tmp$ret$4;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp5_set = tmp17_putUtf8Char + 1 | 0;
          var tmp6_set = toByte(128 | tmp18_putUtf8Char >> 6 & 63);
          tmp16_putUtf8Char.e15_1.setInt8(tmp5_set, tmp6_set);
          tmp$ret$4 = Unit_getInstance();
          var tmp$ret$5;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp7_set = tmp17_putUtf8Char + 2 | 0;
          var tmp8_set = toByte(128 | tmp18_putUtf8Char & 63);
          tmp16_putUtf8Char.e15_1.setInt8(tmp7_set, tmp8_set);
          tmp$ret$5 = Unit_getInstance();
          tmp = 3;
        } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
          var tmp$ret$6;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp9_set = toByte(240 | tmp18_putUtf8Char >> 18 & 7);
          tmp16_putUtf8Char.e15_1.setInt8(tmp17_putUtf8Char, tmp9_set);
          tmp$ret$6 = Unit_getInstance();
          var tmp$ret$7;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp10_set = tmp17_putUtf8Char + 1 | 0;
          var tmp11_set = toByte(128 | tmp18_putUtf8Char >> 12 & 63);
          tmp16_putUtf8Char.e15_1.setInt8(tmp10_set, tmp11_set);
          tmp$ret$7 = Unit_getInstance();
          var tmp$ret$8;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp12_set = tmp17_putUtf8Char + 2 | 0;
          var tmp13_set = toByte(128 | tmp18_putUtf8Char >> 6 & 63);
          tmp16_putUtf8Char.e15_1.setInt8(tmp12_set, tmp13_set);
          tmp$ret$8 = Unit_getInstance();
          var tmp$ret$9;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp14_set = tmp17_putUtf8Char + 3 | 0;
          var tmp15_set = toByte(128 | tmp18_putUtf8Char & 63);
          tmp16_putUtf8Char.e15_1.setInt8(tmp14_set, tmp15_set);
          tmp$ret$9 = Unit_getInstance();
          tmp = 4;
        } else {
          malformedCodePoint(tmp18_putUtf8Char);
        }
        tmp$ret$10 = tmp;
        var size = tmp$ret$10;
        buffer.g15(size);
        tmp$ret$11 = size;
        var result = tmp$ret$11;
        // Inline function 'kotlin.check' call
        var tmp0_check = result >= 0;
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_check) {
          var tmp$ret$12;
          // Inline function 'io.ktor.utils.io.core.Output.write.<anonymous>' call
          tmp$ret$12 = "The returned value shouldn't be negative";
          var message = tmp$ret$12;
          throw IllegalStateException_init_$Create$(toString(message));
        }
        tmp$ret$13 = result;
        break $l$block;
      }finally {
        $this.b15();
      }
    }
  }
  function writePacketMerging($this, tail, foreignStolen, pool) {
    tail.h15($this.nx_1);
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = tail.rz_1 - tail.qz_1 | 0;
    var lastSize = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$1 = foreignStolen.rz_1 - foreignStolen.qz_1 | 0;
    var nextSize = tmp$ret$1;
    var maxCopySize = get_PACKET_MAX_COPY_SIZE();
    var tmp;
    var tmp_0;
    if (nextSize < maxCopySize) {
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
      tmp$ret$2 = tail.uz_1 - tail.tz_1 | 0;
      var tmp_1 = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$3 = tail.tz_1 - tail.rz_1 | 0;
      tmp_0 = nextSize <= (tmp_1 + tmp$ret$3 | 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = nextSize;
    } else {
      tmp = -1;
    }
    var appendSize = tmp;
    var tmp_2;
    if ((lastSize < maxCopySize ? lastSize <= foreignStolen.sz_1 : false) ? isExclusivelyOwned(foreignStolen) : false) {
      tmp_2 = lastSize;
    } else {
      tmp_2 = -1;
    }
    var prependSize = tmp_2;
    if (appendSize === -1 ? prependSize === -1 : false) {
      $this.z16(foreignStolen);
    } else if (prependSize === -1 ? true : appendSize <= prependSize) {
      var tmp$ret$4;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$4 = tail.tz_1 - tail.rz_1 | 0;
      var tmp_3 = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
      tmp$ret$5 = tail.uz_1 - tail.tz_1 | 0;
      writeBufferAppend(tail, foreignStolen, tmp_3 + tmp$ret$5 | 0);
      $this.b15();
      var tmp0_safe_receiver = foreignStolen.t16();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$6;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this.z16(tmp0_safe_receiver);
        tmp$ret$6 = Unit_getInstance();
      }
      foreignStolen.a15(pool);
    } else if (appendSize === -1 ? true : prependSize < appendSize) {
      writePacketSlowPrepend($this, foreignStolen, tail);
    } else {
      throw IllegalStateException_init_$Create$('prep = ' + prependSize + ', app = ' + appendSize);
    }
  }
  function writePacketSlowPrepend($this, foreignStolen, tail) {
    writeBufferPrepend(foreignStolen, tail);
    var tmp0_elvis_lhs = $this.kx_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("head should't be null since it is already handled in the fast-path");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var _head = tmp;
    if (_head === tail) {
      $this.kx_1 = foreignStolen;
    } else {
      var pre = _head;
      $l$loop: while (true) {
        var next = ensureNotNull(pre.o16());
        if (next === tail)
          break $l$loop;
        pre = next;
      }
      pre.b18(foreignStolen);
    }
    tail.a15($this.jx_1);
    $this.lx_1 = findTail(foreignStolen);
  }
  function Output(pool) {
    this.jx_1 = pool;
    this.kx_1 = null;
    this.lx_1 = null;
    this.mx_1 = Companion_getInstance_6().c18_1;
    this.nx_1 = 0;
    this.ox_1 = 0;
    this.px_1 = 0;
    this.qx_1 = 0;
  }
  Output.prototype.u16 = function () {
    return this.qx_1 + (this.nx_1 - this.px_1 | 0) | 0;
  };
  Output.prototype.y16 = function () {
    var tmp0_elvis_lhs = this.kx_1;
    return tmp0_elvis_lhs == null ? Companion_getInstance_4().hw_1 : tmp0_elvis_lhs;
  };
  Output.prototype.gb = function () {
    flushChain(this);
  };
  Output.prototype.rx = function () {
    var tmp0_elvis_lhs = this.kx_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    var tmp1_safe_receiver = this.lx_1;
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver.h15(this.nx_1);
    this.kx_1 = null;
    this.lx_1 = null;
    this.nx_1 = 0;
    this.ox_1 = 0;
    this.px_1 = 0;
    this.qx_1 = 0;
    this.mx_1 = Companion_getInstance_6().c18_1;
    return head;
  };
  Output.prototype.z14 = function (buffer) {
    // Inline function 'kotlin.check' call
    var tmp0_check = buffer.o16() == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Output.appendSingleChunk.<anonymous>' call
      tmp$ret$0 = 'It should be a single buffer chunk.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    appendChainImpl(this, buffer, buffer, 0);
  };
  Output.prototype.z16 = function (head) {
    var tail = findTail(head);
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.internal.toIntOrFail' call
    var tmp$ret$1;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = remainingAll(head);
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = tail.rz_1 - tail.qz_1 | 0;
    var tmp1_minus = tmp$ret$0;
    tmp$ret$1 = tmp0_minus.g5(toLong(tmp1_minus));
    var tmp2_toIntOrFail = tmp$ret$1;
    if (tmp2_toIntOrFail.s(toLong(IntCompanionObject_getInstance().MAX_VALUE)) >= 0) {
      failLongToIntConversion(tmp2_toIntOrFail, 'total size increase');
    }
    tmp$ret$2 = tmp2_toIntOrFail.k7();
    var chainedSizeDelta = tmp$ret$2;
    appendChainImpl(this, head, tail, chainedSizeDelta);
  };
  Output.prototype.u15 = function (v) {
    var index = this.nx_1;
    if (index < this.ox_1) {
      this.nx_1 = index + 1 | 0;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.bits.set' call
      var tmp0_set = this.mx_1;
      tmp0_set.e15_1.setInt8(index, v);
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    }
    return writeByteFallback(this, v);
  };
  Output.prototype.nu = function () {
    try {
      this.gb();
    }finally {
      this.v16();
    }
  };
  Output.prototype.b5 = function (value) {
    var tailPosition = this.nx_1;
    if ((this.ox_1 - tailPosition | 0) >= 3) {
      var tmp$ret$10;
      // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
      var tmp16_putUtf8Char = this.mx_1;
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(value);
      var tmp17_putUtf8Char = tmp$ret$0;
      var tmp0_subject = tmp17_putUtf8Char;
      var tmp;
      if (0 <= tmp0_subject ? tmp0_subject <= 127 : false) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var tmp0_storeAt = toByte(tmp17_putUtf8Char);
        tmp16_putUtf8Char.e15_1.setInt8(tailPosition, tmp0_storeAt);
        tmp = 1;
      } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp1_set = toByte(192 | tmp17_putUtf8Char >> 6 & 31);
        tmp16_putUtf8Char.e15_1.setInt8(tailPosition, tmp1_set);
        tmp$ret$1 = Unit_getInstance();
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp2_set = tailPosition + 1 | 0;
        var tmp3_set = toByte(128 | tmp17_putUtf8Char & 63);
        tmp16_putUtf8Char.e15_1.setInt8(tmp2_set, tmp3_set);
        tmp$ret$2 = Unit_getInstance();
        tmp = 2;
      } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp4_set = toByte(224 | tmp17_putUtf8Char >> 12 & 15);
        tmp16_putUtf8Char.e15_1.setInt8(tailPosition, tmp4_set);
        tmp$ret$3 = Unit_getInstance();
        var tmp$ret$4;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp5_set = tailPosition + 1 | 0;
        var tmp6_set = toByte(128 | tmp17_putUtf8Char >> 6 & 63);
        tmp16_putUtf8Char.e15_1.setInt8(tmp5_set, tmp6_set);
        tmp$ret$4 = Unit_getInstance();
        var tmp$ret$5;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp7_set = tailPosition + 2 | 0;
        var tmp8_set = toByte(128 | tmp17_putUtf8Char & 63);
        tmp16_putUtf8Char.e15_1.setInt8(tmp7_set, tmp8_set);
        tmp$ret$5 = Unit_getInstance();
        tmp = 3;
      } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
        var tmp$ret$6;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp9_set = toByte(240 | tmp17_putUtf8Char >> 18 & 7);
        tmp16_putUtf8Char.e15_1.setInt8(tailPosition, tmp9_set);
        tmp$ret$6 = Unit_getInstance();
        var tmp$ret$7;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp10_set = tailPosition + 1 | 0;
        var tmp11_set = toByte(128 | tmp17_putUtf8Char >> 12 & 63);
        tmp16_putUtf8Char.e15_1.setInt8(tmp10_set, tmp11_set);
        tmp$ret$7 = Unit_getInstance();
        var tmp$ret$8;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp12_set = tailPosition + 2 | 0;
        var tmp13_set = toByte(128 | tmp17_putUtf8Char >> 6 & 63);
        tmp16_putUtf8Char.e15_1.setInt8(tmp12_set, tmp13_set);
        tmp$ret$8 = Unit_getInstance();
        var tmp$ret$9;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp14_set = tailPosition + 3 | 0;
        var tmp15_set = toByte(128 | tmp17_putUtf8Char & 63);
        tmp16_putUtf8Char.e15_1.setInt8(tmp14_set, tmp15_set);
        tmp$ret$9 = Unit_getInstance();
        tmp = 4;
      } else {
        malformedCodePoint(tmp17_putUtf8Char);
      }
      tmp$ret$10 = tmp;
      var size = tmp$ret$10;
      this.nx_1 = tailPosition + size | 0;
      return this;
    }
    appendCharFallback(this, value);
    return this;
  };
  Output.prototype.b = function (value) {
    if (value == null) {
      this.tc('null', 0, 4);
    } else {
      this.tc(value, 0, charSequenceLength(value));
    }
    return this;
  };
  Output.prototype.tc = function (value, startIndex, endIndex) {
    if (value == null) {
      return this.tc('null', startIndex, endIndex);
    }
    writeText(this, value, startIndex, endIndex, Charsets_getInstance().d18_1);
    return this;
  };
  Output.prototype.q13 = function (packet) {
    var foreignStolen = packet.rx();
    if (foreignStolen == null) {
      packet.rl();
      return Unit_getInstance();
    }
    var tail = this.lx_1;
    if (tail == null) {
      this.z16(foreignStolen);
      return Unit_getInstance();
    }
    writePacketMerging(this, tail, foreignStolen, packet.y10_1);
  };
  Output.prototype.sx = function (chunkBuffer) {
    var _tail = this.lx_1;
    if (_tail == null) {
      this.z16(chunkBuffer);
      return Unit_getInstance();
    }
    writePacketMerging(this, _tail, chunkBuffer, this.jx_1);
  };
  Output.prototype.g11 = function (p, n) {
    var remaining = n;
    $l$loop: while (remaining.s(new Long(0, 0)) > 0) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
      tmp$ret$0 = p.c11_1 - p.b11_1 | 0;
      var headRemaining = toLong(tmp$ret$0);
      if (headRemaining.s(remaining) <= 0) {
        remaining = remaining.g5(headRemaining);
        var tmp0_elvis_lhs = p.o17();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw new EOFException('Unexpected end of packet');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        this.z14(tmp);
      } else {
        // Inline function 'io.ktor.utils.io.core.read' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp0_elvis_lhs_0 = p.z17(1);
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          prematureEndOfStream(1);
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        var buffer = tmp_0;
        var positionBefore = buffer.qz_1;
        try {
          // Inline function 'io.ktor.utils.io.core.Output.writePacket.<anonymous>' call
          writeFully_2(this, buffer, remaining.k7());
        }finally {
          var positionAfter = buffer.qz_1;
          if (positionAfter < positionBefore) {
            throw IllegalStateException_init_$Create$("Buffer's position shouldn't be rewinded");
          }
          if (positionAfter === buffer.rz_1) {
            p.x17(buffer);
          } else {
            p.b11_1 = positionAfter;
          }
        }
        break $l$loop;
      }
    }
  };
  Output.prototype.rl = function () {
    this.nu();
  };
  Output.prototype.a17 = function (n) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Output.tailRemaining' call
    tmp$ret$0 = this.ox_1 - this.nx_1 | 0;
    if (tmp$ret$0 >= n) {
      var tmp0_safe_receiver = this.lx_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.h15(this.nx_1);
        return tmp0_safe_receiver;
      }
    }
    return appendNewChunk(this);
  };
  Output.prototype.b15 = function () {
    var tmp0_safe_receiver = this.lx_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.nx_1 = tmp0_safe_receiver.rz_1;
      tmp$ret$0 = Unit_getInstance();
    }
  };
  Output.prototype.b17 = function () {
    var head = this.y16();
    if (!(head === Companion_getInstance_4().hw_1)) {
      // Inline function 'kotlin.check' call
      var tmp0_check = head.o16() == null;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'kotlin.check.<anonymous>' call
        tmp$ret$0 = 'Check failed.';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      head.n15();
      Companion_getInstance_1();
      head.l15(8);
      this.nx_1 = head.rz_1;
      this.px_1 = this.nx_1;
      this.ox_1 = head.tz_1;
    }
  };
  function writeFully_2(_this__u8e3s4, src, length) {
    // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate' call
    var currentOffset = 0;
    var remaining = length;
    // Inline function 'io.ktor.utils.io.core.writeWhile' call
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      $l$loop: while (true) {
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tail;
        var tmp$ret$2;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = remaining;
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$1 = tmp0__anonymous__q1qw7t.tz_1 - tmp0__anonymous__q1qw7t.rz_1 | 0;
        var tmp1_minOf = tmp$ret$1;
        tmp$ret$2 = Math.min(tmp0_minOf, tmp1_minOf);
        var size = tmp$ret$2;
        // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
        var tmp1__anonymous__uwfjfc = currentOffset;
        writeFully_1(tmp0__anonymous__q1qw7t, src, size);
        currentOffset = currentOffset + size | 0;
        remaining = remaining - size | 0;
        tmp$ret$3 = remaining > 0;
        if (!tmp$ret$3)
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, 1, tail);
      }
    }finally {
      _this__u8e3s4.b15();
    }
  }
  function writeFully$default(_this__u8e3s4, src, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$0 = src.rz_1 - src.qz_1 | 0;
      tmp$ret$0_0 = Unit_getInstance();
      length = tmp$ret$0;
    }
    return writeFully_2(_this__u8e3s4, src, length);
  }
  function writeFully_3(_this__u8e3s4, src, offset, length) {
    // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate' call
    var currentOffset = offset;
    var remaining = length;
    // Inline function 'io.ktor.utils.io.core.writeWhile' call
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      $l$loop: while (true) {
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tail;
        var tmp$ret$1;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = remaining;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$0 = tmp0__anonymous__q1qw7t.tz_1 - tmp0__anonymous__q1qw7t.rz_1 | 0;
        var tmp1_minOf = tmp$ret$0;
        tmp$ret$1 = Math.min(tmp0_minOf, tmp1_minOf);
        var size = tmp$ret$1;
        // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
        var tmp1__anonymous__uwfjfc = currentOffset;
        writeFully_0(tmp0__anonymous__q1qw7t, src, tmp1__anonymous__uwfjfc, size);
        currentOffset = currentOffset + size | 0;
        remaining = remaining - size | 0;
        tmp$ret$2 = remaining > 0;
        if (!tmp$ret$2)
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, 1, tail);
      }
    }finally {
      _this__u8e3s4.b15();
    }
  }
  function writeFully$default_0(_this__u8e3s4, src, offset, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = 0;
    if (!(($mask0 & 4) === 0))
      length = src.length - offset | 0;
    return writeFully_3(_this__u8e3s4, src, offset, length);
  }
  function writeShort_0(_this__u8e3s4, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.writePrimitiveTemplate' call
      var index = _this__u8e3s4.nx_1;
      if ((_this__u8e3s4.ox_1 - index | 0) > 2) {
        _this__u8e3s4.nx_1 = index + 2 | 0;
        // Inline function 'io.ktor.utils.io.core.writeShort.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _this__u8e3s4.mx_1;
        // Inline function 'io.ktor.utils.io.bits.storeShortAt' call
        tmp0__anonymous__q1qw7t.e15_1.setInt16(index, value, false);
        tmp$ret$0 = true;
        break $l$block;
      }
      tmp$ret$0 = false;
    }
    if (!tmp$ret$0) {
      writeShortFallback(_this__u8e3s4, value);
    }
  }
  function writeShortFallback(_this__u8e3s4, value) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.writePrimitiveFallbackTemplate' call
    var tail = _this__u8e3s4.a17(2);
    // Inline function 'io.ktor.utils.io.core.writeShortFallback.<anonymous>' call
    writeShort(tail, value);
    _this__u8e3s4.b15();
    tmp$ret$0 = true;
    if (!tmp$ret$0) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.bits.highByte' call
      tmp$ret$1 = toByte(value >>> 8 | 0);
      _this__u8e3s4.u15(tmp$ret$1);
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.bits.lowByte' call
      tmp$ret$2 = toByte(value & 255);
      _this__u8e3s4.u15(tmp$ret$2);
    }
  }
  function readBytes(_this__u8e3s4, n) {
    var tmp;
    if (!(n === 0)) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp0_also = new Int8Array(n);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.utils.io.core.readBytes.<anonymous>' call
      readFully_1(_this__u8e3s4, tmp0_also, 0, n);
      tmp$ret$1 = tmp0_also;
      tmp = tmp$ret$1;
    } else {
      tmp = get_EmptyByteArray();
    }
    return tmp;
  }
  function readBytes$default(_this__u8e3s4, n, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'io.ktor.utils.io.core.coerceAtMostMaxIntOrFail' call
      var tmp0_coerceAtMostMaxIntOrFail = _this__u8e3s4.f11();
      if (tmp0_coerceAtMostMaxIntOrFail.s(toLong(IntCompanionObject_getInstance().MAX_VALUE)) > 0)
        throw IllegalArgumentException_init_$Create$('Unable to convert to a ByteArray: packet is too big');
      tmp$ret$0 = tmp0_coerceAtMostMaxIntOrFail.k7();
      tmp$ret$0_0 = Unit_getInstance();
      n = tmp$ret$0;
    }
    return readBytes(_this__u8e3s4, n);
  }
  function readText(_this__u8e3s4, charset, max) {
    return decode(charset.g18(), _this__u8e3s4, max);
  }
  function readText$default(_this__u8e3s4, charset, max, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      charset = Charsets_getInstance().d18_1;
    if (!(($mask0 & 2) === 0))
      max = IntCompanionObject_getInstance().MAX_VALUE;
    return readText(_this__u8e3s4, charset, max);
  }
  function prematureEndOfStream(size) {
    throw new EOFException('Premature end of stream: expected ' + size + ' bytes');
  }
  function readTextExactBytes(_this__u8e3s4, bytesCount, charset) {
    return decodeExactBytes(charset.g18(), _this__u8e3s4, bytesCount);
  }
  function readTextExactBytes$default(_this__u8e3s4, bytesCount, charset, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      charset = Charsets_getInstance().d18_1;
    return readTextExactBytes(_this__u8e3s4, bytesCount, charset);
  }
  function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
    if (charset === Charsets_getInstance().d18_1) {
      return writeTextUtf8(_this__u8e3s4, text, fromIndex, toIndex);
    }
    encodeToImpl(charset.h18(), _this__u8e3s4, text, fromIndex, toIndex);
  }
  function writeText$default(_this__u8e3s4, text, fromIndex, toIndex, charset, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      fromIndex = 0;
    if (!(($mask0 & 4) === 0))
      toIndex = charSequenceLength(text);
    if (!(($mask0 & 8) === 0))
      charset = Charsets_getInstance().d18_1;
    return writeText(_this__u8e3s4, text, fromIndex, toIndex, charset);
  }
  function writeTextUtf8(_this__u8e3s4, text, fromIndex, toIndex) {
    var index = fromIndex;
    // Inline function 'io.ktor.utils.io.core.writeWhileSize' call
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      var size;
      $l$loop: while (true) {
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.core.writeTextUtf8.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tail;
        var memory = tmp0__anonymous__q1qw7t.pz_1;
        var dstOffset = tmp0__anonymous__q1qw7t.rz_1;
        var dstLimit = tmp0__anonymous__q1qw7t.tz_1;
        var tmp0_container = encodeUTF8(memory, text, index, toIndex, dstOffset, dstLimit);
        var characters = EncodeResult__component1_impl_36tlhi(tmp0_container);
        var bytes = EncodeResult__component2_impl_3nv7vp(tmp0_container);
        var tmp = index;
        var tmp$ret$0;
        // Inline function 'kotlin.UShort.toInt' call
        tmp$ret$0 = _UShort___get_data__impl__g0245(characters) & 65535;
        index = tmp + tmp$ret$0 | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.UShort.toInt' call
        tmp$ret$1 = _UShort___get_data__impl__g0245(bytes) & 65535;
        tmp0__anonymous__q1qw7t.g15(tmp$ret$1);
        var tmp_0;
        var tmp_1;
        var tmp$ret$2;
        // Inline function 'kotlin.UShort.toInt' call
        tmp$ret$2 = _UShort___get_data__impl__g0245(characters) & 65535;
        if (tmp$ret$2 === 0) {
          tmp_1 = index < toIndex;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp_0 = 8;
        } else {
          if (index < toIndex) {
            tmp_0 = 1;
          } else {
            tmp_0 = 0;
          }
        }
        tmp$ret$3 = tmp_0;
        size = tmp$ret$3;
        if (size <= 0)
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, size, tail);
      }
    }finally {
      _this__u8e3s4.b15();
    }
  }
  function ChunkBuffer$Companion$Pool$1() {
  }
  ChunkBuffer$Companion$Pool$1.prototype.n14 = function () {
    return get_DefaultChunkedBufferPool().n14();
  };
  ChunkBuffer$Companion$Pool$1.prototype.i18 = function (instance) {
    get_DefaultChunkedBufferPool().s16(instance);
  };
  ChunkBuffer$Companion$Pool$1.prototype.s16 = function (instance) {
    return this.i18(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  ChunkBuffer$Companion$Pool$1.prototype.zi = function () {
    get_DefaultChunkedBufferPool().zi();
  };
  function ChunkBuffer$Companion$EmptyPool$1() {
  }
  ChunkBuffer$Companion$EmptyPool$1.prototype.n14 = function () {
    return Companion_getInstance_4().hw_1;
  };
  ChunkBuffer$Companion$EmptyPool$1.prototype.i18 = function (instance) {
    // Inline function 'kotlin.require' call
    var tmp0_require = instance === Companion_getInstance_4().hw_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.internal.<no name provided>.recycle.<anonymous>' call
      tmp$ret$0 = 'Only ChunkBuffer.Empty instance could be recycled.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  ChunkBuffer$Companion$EmptyPool$1.prototype.s16 = function (instance) {
    return this.i18(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  ChunkBuffer$Companion$EmptyPool$1.prototype.zi = function () {
  };
  function ChunkBuffer$Companion$NoPool$1() {
    NoPoolImpl.call(this);
  }
  ChunkBuffer$Companion$NoPool$1.prototype.n14 = function () {
    return new ChunkBuffer(DefaultAllocator_getInstance().d16(get_DEFAULT_BUFFER_SIZE()), null, this);
  };
  ChunkBuffer$Companion$NoPool$1.prototype.i18 = function (instance) {
    DefaultAllocator_getInstance().f16(instance.pz_1);
  };
  ChunkBuffer$Companion$NoPool$1.prototype.s16 = function (instance) {
    return this.i18(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  function ChunkBuffer$Companion$NoPoolManuallyManaged$1() {
    NoPoolImpl.call(this);
  }
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.prototype.n14 = function () {
    throw UnsupportedOperationException_init_$Create$("This pool doesn't support borrow");
  };
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.prototype.i18 = function (instance) {
  };
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.prototype.s16 = function (instance) {
    return this.i18(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  function appendNext($this, chunk) {
    if (!$this.v14_1.atomicfu$compareAndSet(null, chunk)) {
      throw IllegalStateException_init_$Create$('This chunk has already a next chunk.');
    }
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    tmp.fw_1 = new ChunkBuffer$Companion$Pool$1();
    var tmp_0 = this;
    tmp_0.gw_1 = new ChunkBuffer$Companion$EmptyPool$1();
    this.hw_1 = new ChunkBuffer(Companion_getInstance_6().c18_1, null, this.gw_1);
    var tmp_1 = this;
    tmp_1.iw_1 = new ChunkBuffer$Companion$NoPool$1();
    var tmp_2 = this;
    tmp_2.jw_1 = new ChunkBuffer$Companion$NoPoolManuallyManaged$1();
  }
  var Companion_instance_2;
  function Companion_getInstance_4() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function ChunkBuffer(memory, origin, parentPool) {
    Companion_getInstance_4();
    Buffer.call(this, memory);
    this.u14_1 = parentPool;
    // Inline function 'kotlin.require' call
    var tmp0_require = !(origin === this);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.<anonymous>' call
      tmp$ret$0 = "A chunk couldn't be a view of itself.";
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.v14_1 = atomic$ref$1(null);
    this.w14_1 = atomic$int$1(1);
    this.x14_1 = origin;
  }
  ChunkBuffer.prototype.b18 = function (newValue) {
    if (newValue == null) {
      this.t16();
    } else {
      appendNext(this, newValue);
    }
  };
  ChunkBuffer.prototype.o16 = function () {
    return this.v14_1.kotlinx$atomicfu$value;
  };
  ChunkBuffer.prototype.n16 = function () {
    return this.w14_1.kotlinx$atomicfu$value;
  };
  ChunkBuffer.prototype.t16 = function () {
    return this.v14_1.atomicfu$getAndSet(null);
  };
  ChunkBuffer.prototype.y14 = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_elvis_lhs = this.x14_1;
    var tmp0_let = tmp0_elvis_lhs == null ? this : tmp0_elvis_lhs;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.duplicate.<anonymous>' call
    tmp0_let.j18();
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new ChunkBuffer(this.pz_1, tmp0_let, this.u14_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.duplicate.<anonymous>.<anonymous>' call
    this.s15(tmp0_also);
    tmp$ret$0 = tmp0_also;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  ChunkBuffer.prototype.a15 = function (pool) {
    if (this.k18()) {
      var origin = this.x14_1;
      if (!(origin == null)) {
        this.k16();
        origin.a15(pool);
      } else {
        var tmp0_elvis_lhs = this.u14_1;
        var poolToUse = tmp0_elvis_lhs == null ? pool : tmp0_elvis_lhs;
        poolToUse.s16(this);
      }
    }
  };
  ChunkBuffer.prototype.k16 = function () {
    if (!this.w14_1.atomicfu$compareAndSet(0, -1)) {
      throw IllegalStateException_init_$Create$('Unable to unlink: buffer is in use.');
    }
    this.t16();
    this.x14_1 = null;
  };
  ChunkBuffer.prototype.j18 = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp0_update = this.w14_1;
      while (true) {
        var cur = tmp0_update.kotlinx$atomicfu$value;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.acquire.<anonymous>' call
        if (cur <= 0)
          throw IllegalStateException_init_$Create$('Unable to acquire chunk: it is already released.');
        tmp$ret$0 = cur + 1 | 0;
        var upd = tmp$ret$0;
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }
      }
    }
  };
  ChunkBuffer.prototype.r16 = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp0_update = this.w14_1;
      while (true) {
        var cur = tmp0_update.kotlinx$atomicfu$value;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.unpark.<anonymous>' call
        if (cur < 0) {
          throw IllegalStateException_init_$Create$("This instance is already disposed and couldn't be borrowed.");
        }
        if (cur > 0) {
          throw IllegalStateException_init_$Create$('This instance is already in use but somehow appeared in the pool.');
        }
        tmp$ret$0 = 1;
        var upd = tmp$ret$0;
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }
      }
    }
  };
  ChunkBuffer.prototype.k18 = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.updateAndGet' call
      var tmp0_updateAndGet = this.w14_1;
      while (true) {
        var cur = tmp0_updateAndGet.kotlinx$atomicfu$value;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.release.<anonymous>' call
        if (cur <= 0)
          throw IllegalStateException_init_$Create$('Unable to release: it is already released.');
        tmp$ret$0 = cur - 1 | 0;
        var upd = tmp$ret$0;
        if (tmp0_updateAndGet.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = upd;
          break $l$block;
        }
      }
    }
    return tmp$ret$1 === 0;
  };
  ChunkBuffer.prototype.v15 = function () {
    // Inline function 'kotlin.require' call
    var tmp0_require = this.x14_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.reset.<anonymous>' call
      tmp$ret$0 = 'Unable to reset buffer with origin';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    Buffer.prototype.v15.call(this);
    this.v14_1.kotlinx$atomicfu$value = null;
  };
  function isExclusivelyOwned(_this__u8e3s4) {
    return _this__u8e3s4.n16() === 1;
  }
  function _EncodeResult___init__impl__vkc0cy(value) {
    return value;
  }
  function _EncodeResult___get_value__impl__h0r466($this) {
    return $this;
  }
  function _EncodeResult___init__impl__vkc0cy_0(characters, bytes) {
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toInt' call
    tmp$ret$0 = _UShort___get_data__impl__g0245(characters) & 65535;
    var tmp = tmp$ret$0 << 16;
    var tmp$ret$1;
    // Inline function 'kotlin.UShort.toInt' call
    tmp$ret$1 = _UShort___get_data__impl__g0245(bytes) & 65535;
    var tmp_0 = _EncodeResult___init__impl__vkc0cy(tmp | tmp$ret$1);
    return tmp_0;
  }
  function _EncodeResult___get_characters__impl__rrxzcv($this) {
    var tmp$ret$1;
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.highShort' call
    var tmp0__get_highShort__24misv = _EncodeResult___get_value__impl__h0r466($this);
    tmp$ret$0 = toShort(tmp0__get_highShort__24misv >>> 16 | 0);
    var tmp1_toUShort = tmp$ret$0;
    tmp$ret$1 = _UShort___init__impl__jigrne(tmp1_toUShort);
    return tmp$ret$1;
  }
  function _EncodeResult___get_bytes__impl__bt0kq0($this) {
    var tmp$ret$1;
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.lowShort' call
    var tmp0__get_lowShort__5ljr93 = _EncodeResult___get_value__impl__h0r466($this);
    tmp$ret$0 = toShort(tmp0__get_lowShort__5ljr93 & 65535);
    var tmp1_toUShort = tmp$ret$0;
    tmp$ret$1 = _UShort___init__impl__jigrne(tmp1_toUShort);
    return tmp$ret$1;
  }
  function EncodeResult__component1_impl_36tlhi($this) {
    return _EncodeResult___get_characters__impl__rrxzcv($this);
  }
  function EncodeResult__component2_impl_3nv7vp($this) {
    return _EncodeResult___get_bytes__impl__bt0kq0($this);
  }
  function failLongToIntConversion(value, name) {
    throw IllegalArgumentException_init_$Create$('Long value ' + toString(value) + ' of ' + name + " doesn't fit into 32-bit integer");
  }
  function MalformedUTF8InputException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, MalformedUTF8InputException);
  }
  function malformedByteCount(byteCount) {
    throw new MalformedUTF8InputException('Expected ' + byteCount + ' more character bytes');
  }
  function isBmpCodePoint(cp) {
    return (cp >>> 16 | 0) === 0;
  }
  function isValidCodePoint(codePoint) {
    return codePoint <= 1114111;
  }
  function malformedCodePoint(value) {
    throw IllegalArgumentException_init_$Create$('Malformed code-point ' + value + ' found');
  }
  function highSurrogate(cp) {
    return (cp >>> 10 | 0) + 55232 | 0;
  }
  function lowSurrogate(cp) {
    return (cp & 1023) + 56320 | 0;
  }
  function encodeUTF8(_this__u8e3s4, text, from, to, dstOffset, dstLimit) {
    var tmp$ret$1;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toInt' call
    Companion_getInstance_0();
    var tmp0_toInt = _UShort___init__impl__jigrne(-1);
    tmp$ret$0 = _UShort___get_data__impl__g0245(tmp0_toInt) & 65535;
    var tmp1_minOf = from + tmp$ret$0 | 0;
    tmp$ret$1 = Math.min(to, tmp1_minOf);
    var lastCharIndex = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.UShort.toInt' call
    Companion_getInstance_0();
    var tmp2_toInt = _UShort___init__impl__jigrne(-1);
    tmp$ret$2 = _UShort___get_data__impl__g0245(tmp2_toInt) & 65535;
    var resultLimit = coerceAtMost(dstLimit, tmp$ret$2);
    var resultPosition = dstOffset;
    var index = from;
    $l$loop: do {
      if (resultPosition >= resultLimit ? true : index >= lastCharIndex) {
        var tmp$ret$3;
        // Inline function 'kotlin.toUShort' call
        var tmp3_toUShort = index - from | 0;
        tmp$ret$3 = _UShort___init__impl__jigrne(toShort(tmp3_toUShort));
        var tmp = tmp$ret$3;
        var tmp$ret$4;
        // Inline function 'kotlin.toUShort' call
        var tmp4_toUShort = resultPosition - dstOffset | 0;
        tmp$ret$4 = _UShort___init__impl__jigrne(toShort(tmp4_toUShort));
        return _EncodeResult___init__impl__vkc0cy_0(tmp, tmp$ret$4);
      }
      var tmp$ret$5;
      // Inline function 'kotlin.code' call
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var tmp5__get_code__iwzzkv = charSequenceGet(text, tmp0);
      tmp$ret$5 = Char__toInt_impl_vasixd(tmp5__get_code__iwzzkv);
      var character = tmp$ret$5 & 65535;
      if ((character & 65408) === 0) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var tmp1 = resultPosition;
        resultPosition = tmp1 + 1 | 0;
        var tmp6_storeAt = tmp1;
        var tmp7_storeAt = toByte(character);
        _this__u8e3s4.e15_1.setInt8(tmp6_storeAt, tmp7_storeAt);
      } else {
        break $l$loop;
      }
    }
     while (true);
    var tmp2 = index;
    index = tmp2 - 1 | 0;
    return encodeUTF8Stage1(_this__u8e3s4, text, index, lastCharIndex, from, resultPosition, resultLimit, dstOffset);
  }
  function encodeUTF8Stage1(_this__u8e3s4, text, index1, lastCharIndex, from, resultPosition1, resultLimit, dstOffset) {
    var index = index1;
    var resultPosition = resultPosition1;
    var stage1Limit = resultLimit - 3 | 0;
    $l$loop: do {
      var freeSpace = stage1Limit - resultPosition | 0;
      if (freeSpace <= 0 ? true : index >= lastCharIndex) {
        break $l$loop;
      }
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var character = charSequenceGet(text, tmp0);
      var tmp;
      if (isHighSurrogate(character)) {
        var tmp_0;
        if (index === lastCharIndex ? true : !isLowSurrogate(charSequenceGet(text, index))) {
          tmp_0 = 63;
        } else {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          tmp_0 = codePoint(character, charSequenceGet(text, tmp1));
        }
        tmp = tmp_0;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(character);
        tmp = tmp$ret$0;
      }
      var codepoint = tmp;
      var tmp$ret$10;
      // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
      var tmp0_putUtf8Char = resultPosition;
      var tmp0_subject = codepoint;
      var tmp_1;
      if (0 <= tmp0_subject ? tmp0_subject <= 127 : false) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var tmp0_storeAt = toByte(codepoint);
        _this__u8e3s4.e15_1.setInt8(tmp0_putUtf8Char, tmp0_storeAt);
        tmp_1 = 1;
      } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp1_set = toByte(192 | codepoint >> 6 & 31);
        _this__u8e3s4.e15_1.setInt8(tmp0_putUtf8Char, tmp1_set);
        tmp$ret$1 = Unit_getInstance();
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp2_set = tmp0_putUtf8Char + 1 | 0;
        var tmp3_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.e15_1.setInt8(tmp2_set, tmp3_set);
        tmp$ret$2 = Unit_getInstance();
        tmp_1 = 2;
      } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp4_set = toByte(224 | codepoint >> 12 & 15);
        _this__u8e3s4.e15_1.setInt8(tmp0_putUtf8Char, tmp4_set);
        tmp$ret$3 = Unit_getInstance();
        var tmp$ret$4;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp5_set = tmp0_putUtf8Char + 1 | 0;
        var tmp6_set = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.e15_1.setInt8(tmp5_set, tmp6_set);
        tmp$ret$4 = Unit_getInstance();
        var tmp$ret$5;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp7_set = tmp0_putUtf8Char + 2 | 0;
        var tmp8_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.e15_1.setInt8(tmp7_set, tmp8_set);
        tmp$ret$5 = Unit_getInstance();
        tmp_1 = 3;
      } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
        var tmp$ret$6;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp9_set = toByte(240 | codepoint >> 18 & 7);
        _this__u8e3s4.e15_1.setInt8(tmp0_putUtf8Char, tmp9_set);
        tmp$ret$6 = Unit_getInstance();
        var tmp$ret$7;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp10_set = tmp0_putUtf8Char + 1 | 0;
        var tmp11_set = toByte(128 | codepoint >> 12 & 63);
        _this__u8e3s4.e15_1.setInt8(tmp10_set, tmp11_set);
        tmp$ret$7 = Unit_getInstance();
        var tmp$ret$8;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp12_set = tmp0_putUtf8Char + 2 | 0;
        var tmp13_set = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.e15_1.setInt8(tmp12_set, tmp13_set);
        tmp$ret$8 = Unit_getInstance();
        var tmp$ret$9;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp14_set = tmp0_putUtf8Char + 3 | 0;
        var tmp15_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.e15_1.setInt8(tmp14_set, tmp15_set);
        tmp$ret$9 = Unit_getInstance();
        tmp_1 = 4;
      } else {
        malformedCodePoint(codepoint);
      }
      tmp$ret$10 = tmp_1;
      var size = tmp$ret$10;
      resultPosition = resultPosition + size | 0;
    }
     while (true);
    if (resultPosition === stage1Limit) {
      return encodeUTF8Stage2(_this__u8e3s4, text, index, lastCharIndex, from, resultPosition, resultLimit, dstOffset);
    }
    var tmp$ret$11;
    // Inline function 'kotlin.toUShort' call
    var tmp1_toUShort = index - from | 0;
    tmp$ret$11 = _UShort___init__impl__jigrne(toShort(tmp1_toUShort));
    var tmp_2 = tmp$ret$11;
    var tmp$ret$12;
    // Inline function 'kotlin.toUShort' call
    var tmp2_toUShort = resultPosition - dstOffset | 0;
    tmp$ret$12 = _UShort___init__impl__jigrne(toShort(tmp2_toUShort));
    return _EncodeResult___init__impl__vkc0cy_0(tmp_2, tmp$ret$12);
  }
  function codePoint(high, low) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(high);
    var highValue = tmp$ret$0 - 55232 | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.code' call
    tmp$ret$1 = Char__toInt_impl_vasixd(low);
    var lowValue = tmp$ret$1 - 56320 | 0;
    return highValue << 10 | lowValue;
  }
  function encodeUTF8Stage2(_this__u8e3s4, text, index1, lastCharIndex, from, resultPosition1, resultLimit, dstOffset) {
    var index = index1;
    var resultPosition = resultPosition1;
    $l$loop_0: do {
      var freeSpace = resultLimit - resultPosition | 0;
      if (freeSpace <= 0 ? true : index >= lastCharIndex) {
        break $l$loop_0;
      }
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var character = charSequenceGet(text, tmp0);
      var tmp;
      if (!isHighSurrogate(character)) {
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(character);
        tmp = tmp$ret$0;
      } else {
        var tmp_0;
        if (index === lastCharIndex ? true : !isLowSurrogate(charSequenceGet(text, index))) {
          tmp_0 = 63;
        } else {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          tmp_0 = codePoint(character, charSequenceGet(text, tmp1));
        }
        tmp = tmp_0;
      }
      var codepoint = tmp;
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.internal.charactersSize' call
      var tmp0_subject = codepoint;
      var tmp_1;
      if (1 <= tmp0_subject ? tmp0_subject <= 127 : false) {
        tmp_1 = 1;
      } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
        tmp_1 = 2;
      } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
        tmp_1 = 3;
      } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
        tmp_1 = 4;
      } else {
        malformedCodePoint(codepoint);
      }
      tmp$ret$1 = tmp_1;
      if (tmp$ret$1 > freeSpace) {
        var tmp2 = index;
        index = tmp2 - 1 | 0;
        break $l$loop_0;
      }
      var tmp$ret$11;
      // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
      var tmp0_putUtf8Char = resultPosition;
      var tmp0_subject_0 = codepoint;
      var tmp_2;
      if (0 <= tmp0_subject_0 ? tmp0_subject_0 <= 127 : false) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var tmp0_storeAt = toByte(codepoint);
        _this__u8e3s4.e15_1.setInt8(tmp0_putUtf8Char, tmp0_storeAt);
        tmp_2 = 1;
      } else if (128 <= tmp0_subject_0 ? tmp0_subject_0 <= 2047 : false) {
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp1_set = toByte(192 | codepoint >> 6 & 31);
        _this__u8e3s4.e15_1.setInt8(tmp0_putUtf8Char, tmp1_set);
        tmp$ret$2 = Unit_getInstance();
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp2_set = tmp0_putUtf8Char + 1 | 0;
        var tmp3_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.e15_1.setInt8(tmp2_set, tmp3_set);
        tmp$ret$3 = Unit_getInstance();
        tmp_2 = 2;
      } else if (2048 <= tmp0_subject_0 ? tmp0_subject_0 <= 65535 : false) {
        var tmp$ret$4;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp4_set = toByte(224 | codepoint >> 12 & 15);
        _this__u8e3s4.e15_1.setInt8(tmp0_putUtf8Char, tmp4_set);
        tmp$ret$4 = Unit_getInstance();
        var tmp$ret$5;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp5_set = tmp0_putUtf8Char + 1 | 0;
        var tmp6_set = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.e15_1.setInt8(tmp5_set, tmp6_set);
        tmp$ret$5 = Unit_getInstance();
        var tmp$ret$6;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp7_set = tmp0_putUtf8Char + 2 | 0;
        var tmp8_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.e15_1.setInt8(tmp7_set, tmp8_set);
        tmp$ret$6 = Unit_getInstance();
        tmp_2 = 3;
      } else if (65536 <= tmp0_subject_0 ? tmp0_subject_0 <= 1114111 : false) {
        var tmp$ret$7;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp9_set = toByte(240 | codepoint >> 18 & 7);
        _this__u8e3s4.e15_1.setInt8(tmp0_putUtf8Char, tmp9_set);
        tmp$ret$7 = Unit_getInstance();
        var tmp$ret$8;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp10_set = tmp0_putUtf8Char + 1 | 0;
        var tmp11_set = toByte(128 | codepoint >> 12 & 63);
        _this__u8e3s4.e15_1.setInt8(tmp10_set, tmp11_set);
        tmp$ret$8 = Unit_getInstance();
        var tmp$ret$9;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp12_set = tmp0_putUtf8Char + 2 | 0;
        var tmp13_set = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.e15_1.setInt8(tmp12_set, tmp13_set);
        tmp$ret$9 = Unit_getInstance();
        var tmp$ret$10;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp14_set = tmp0_putUtf8Char + 3 | 0;
        var tmp15_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.e15_1.setInt8(tmp14_set, tmp15_set);
        tmp$ret$10 = Unit_getInstance();
        tmp_2 = 4;
      } else {
        malformedCodePoint(codepoint);
      }
      tmp$ret$11 = tmp_2;
      var size = tmp$ret$11;
      resultPosition = resultPosition + size | 0;
    }
     while (true);
    var tmp$ret$12;
    // Inline function 'kotlin.toUShort' call
    var tmp1_toUShort = index - from | 0;
    tmp$ret$12 = _UShort___init__impl__jigrne(toShort(tmp1_toUShort));
    var tmp_3 = tmp$ret$12;
    var tmp$ret$13;
    // Inline function 'kotlin.toUShort' call
    var tmp2_toUShort = resultPosition - dstOffset | 0;
    tmp$ret$13 = _UShort___init__impl__jigrne(toShort(tmp2_toUShort));
    return _EncodeResult___init__impl__vkc0cy_0(tmp_3, tmp$ret$13);
  }
  function get_EmptyByteArray() {
    init_properties_Unsafe_kt_ayh6vg();
    return EmptyByteArray;
  }
  var EmptyByteArray;
  function completeReadHead(_this__u8e3s4, current) {
    init_properties_Unsafe_kt_ayh6vg();
    if (current === _this__u8e3s4)
      return Unit_getInstance();
    else {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.canRead' call
      tmp$ret$0 = current.rz_1 > current.qz_1;
      if (!tmp$ret$0) {
        _this__u8e3s4.x17(current);
      } else {
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
        tmp$ret$1 = current.uz_1 - current.tz_1 | 0;
        var tmp = tmp$ret$1;
        Companion_getInstance_1();
        if (tmp < 8) {
          _this__u8e3s4.y17(current);
        } else {
          _this__u8e3s4.b11_1 = current.qz_1;
        }
      }
    }
  }
  function prepareReadFirstHead(_this__u8e3s4, minSize) {
    init_properties_Unsafe_kt_ayh6vg();
    return _this__u8e3s4.v17(minSize);
  }
  function prepareReadNextHead(_this__u8e3s4, current) {
    init_properties_Unsafe_kt_ayh6vg();
    if (current === _this__u8e3s4) {
      return _this__u8e3s4.w11() ? _this__u8e3s4 : null;
    }
    return _this__u8e3s4.w17(current);
  }
  function unsafeAppend(_this__u8e3s4, builder) {
    init_properties_Unsafe_kt_ayh6vg();
    var builderSize = builder.c();
    var tmp0_elvis_lhs = builder.rx();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var builderHead = tmp;
    if ((builderSize <= get_PACKET_MAX_COPY_SIZE() ? builderHead.o16() == null : false) ? _this__u8e3s4.q17(builderHead) : false) {
      builder.b17();
      return builderSize;
    }
    _this__u8e3s4.p17(builderHead);
    return builderSize;
  }
  function prepareWriteHead(_this__u8e3s4, capacity, current) {
    init_properties_Unsafe_kt_ayh6vg();
    if (!(current == null)) {
      _this__u8e3s4.b15();
    }
    return _this__u8e3s4.a17(capacity);
  }
  var properties_initialized_Unsafe_kt_o5mw48;
  function init_properties_Unsafe_kt_ayh6vg() {
    if (properties_initialized_Unsafe_kt_o5mw48) {
    } else {
      properties_initialized_Unsafe_kt_o5mw48 = true;
      EmptyByteArray = new Int8Array(0);
    }
  }
  function trySuspend($this, sleepCondition, $cont) {
    var tmp = new $trySuspendCOROUTINE$53($this, sleepCondition, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  }
  function $sleepCOROUTINE$52(_this__u8e3s4, sleepCondition, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f19_1 = _this__u8e3s4;
    this.g19_1 = sleepCondition;
  }
  $sleepCOROUTINE$52.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 3;
            this.oe_1 = 1;
            suspendResult = trySuspend(this.f19_1, this.g19_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              return Unit_getInstance();
            } else {
              this.oe_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            this.f19_1.ax();
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
  function $trySuspendCOROUTINE$53(_this__u8e3s4, sleepCondition, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t18_1 = _this__u8e3s4;
    this.u18_1 = sleepCondition;
  }
  $trySuspendCOROUTINE$53.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 3;
            this.v18_1 = false;
            var tmp_0 = this;
            tmp_0.w18_1 = Job$default(null, 1, null);
            if (this.t18_1.zw_1.atomicfu$compareAndSet(null, this.w18_1) ? this.u18_1() : false) {
              this.v18_1 = true;
              this.oe_1 = 1;
              suspendResult = this.w18_1.ll(this);
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
            this.oe_1 = 2;
            continue $sm;
          case 2:
            return this.v18_1;
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
  function AwaitingSlot() {
    this.zw_1 = atomic$ref$1(null);
  }
  AwaitingSlot.prototype.ty = function (sleepCondition, $cont) {
    var tmp = new $sleepCOROUTINE$52(this, sleepCondition, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  AwaitingSlot.prototype.ax = function () {
    var tmp0_safe_receiver = this.zw_1.atomicfu$getAndSet(null);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.kl();
  };
  AwaitingSlot.prototype.o13 = function (cause) {
    var tmp0_elvis_lhs = this.zw_1.atomicfu$getAndSet(null);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var continuation = tmp;
    if (!(cause == null)) {
      continuation.jl(cause);
    } else {
      continuation.kl();
    }
  };
  function copyToSequentialImpl(_this__u8e3s4, dst, limit, $cont) {
    var tmp = new $copyToSequentialImplCOROUTINE$54(_this__u8e3s4, dst, limit, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  }
  function copyToTail(_this__u8e3s4, dst, limit, $cont) {
    var tmp = new $copyToTailCOROUTINE$55(_this__u8e3s4, dst, limit, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  }
  function $copyToSequentialImplCOROUTINE$54(_this__u8e3s4, dst, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p19_1 = _this__u8e3s4;
    this.q19_1 = dst;
    this.r19_1 = limit;
  }
  $copyToSequentialImplCOROUTINE$54.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 10;
            var tmp0_require = !(this.p19_1 === this.q19_1);
            if (!tmp0_require) {
              var message = 'Failed requirement.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }

            if (!(this.p19_1.tx() == null)) {
              this.q19_1.ms(this.p19_1.tx());
              return new Long(0, 0);
            }

            this.s19_1 = this.r19_1;
            this.oe_1 = 1;
            continue $sm;
          case 1:
            if (!(this.s19_1.s(new Long(0, 0)) > 0)) {
              this.oe_1 = 9;
              continue $sm;
            }

            this.oe_1 = 2;
            suspendResult = this.p19_1.n13(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.t19_1 = suspendResult;
            if (!this.t19_1) {
              this.oe_1 = 9;
              continue $sm;
            } else {
              this.oe_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            this.u19_1 = this.p19_1.p13(this.q19_1, this.s19_1);
            if (this.u19_1.equals(new Long(0, 0))) {
              this.oe_1 = 6;
              suspendResult = copyToTail(this.p19_1, this.q19_1, this.s19_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.q19_1.iy() === 0) {
                this.oe_1 = 4;
                suspendResult = this.q19_1.oz(1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.oe_1 = 5;
                continue $sm;
              }
            }

            break;
          case 4:
            this.oe_1 = 5;
            continue $sm;
          case 5:
            this.v19_1 = this.u19_1;
            this.oe_1 = 8;
            continue $sm;
          case 6:
            var tail = suspendResult;
            if (tail.equals(new Long(0, 0))) {
              this.oe_1 = 9;
              continue $sm;
            } else {
              this.oe_1 = 7;
              continue $sm;
            }

            break;
          case 7:
            this.v19_1 = tail;
            this.oe_1 = 8;
            continue $sm;
          case 8:
            var copied = this.v19_1;
            this.s19_1 = this.s19_1.g5(copied);
            if (copied.s(new Long(0, 0)) > 0) {
              this.q19_1.gb();
            }

            this.oe_1 = 1;
            continue $sm;
          case 9:
            return this.r19_1.g5(this.s19_1);
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
  function $copyToTailCOROUTINE$55(_this__u8e3s4, dst, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e1a_1 = _this__u8e3s4;
    this.f1a_1 = dst;
    this.g1a_1 = limit;
  }
  $copyToTailCOROUTINE$55.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 9;
            this.h1a_1 = Companion_getInstance_4().fw_1.n14();
            this.oe_1 = 1;
            continue $sm;
          case 1:
            this.oe_1 = 2;
            continue $sm;
          case 2:
            this.pe_1 = 8;
            this.h1a_1.o15(coerceAtMost_0(this.g1a_1, toLong(this.h1a_1.uz_1)).k7());
            this.oe_1 = 3;
            suspendResult = this.e1a_1.k13(this.h1a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.j1a_1 = suspendResult;
            if (this.j1a_1 === -1) {
              this.h1a_1.a15(Companion_getInstance_4().fw_1);
              this.i1a_1 = new Long(0, 0);
              this.pe_1 = 9;
              this.oe_1 = 6;
              continue $sm;
            } else {
              this.oe_1 = 4;
              continue $sm;
            }

            break;
          case 4:
            this.oe_1 = 5;
            suspendResult = this.f1a_1.g13(this.h1a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.i1a_1 = toLong(this.j1a_1);
            this.pe_1 = 9;
            this.oe_1 = 6;
            var tmp_0 = this;
            continue $sm;
          case 6:
            var tmp_1 = this.i1a_1;
            this.h1a_1.a15(Companion_getInstance_4().fw_1);
            ;
            return tmp_1;
          case 7:
            this.h1a_1.a15(Companion_getInstance_4().fw_1);
            ;
            return Unit_getInstance();
          case 8:
            this.pe_1 = 9;
            var t = this.re_1;
            this.h1a_1.a15(Companion_getInstance_4().fw_1);
            ;
            throw t;
          case 9:
            throw this.re_1;
        }
      } catch ($p) {
        if (this.pe_1 === 9) {
          throw $p;
        } else {
          this.oe_1 = this.pe_1;
          this.re_1 = $p;
        }
      }
     while (true);
  };
  function get_ByteArrayPool() {
    init_properties_ByteArrayPool_kt_ygh2ft();
    return ByteArrayPool;
  }
  var ByteArrayPool;
  function ByteArrayPool$1() {
    DefaultPool.call(this, 128);
  }
  ByteArrayPool$1.prototype.c16 = function () {
    return new Int8Array(4096);
  };
  var properties_initialized_ByteArrayPool_kt_td6pfh;
  function init_properties_ByteArrayPool_kt_ygh2ft() {
    if (properties_initialized_ByteArrayPool_kt_td6pfh) {
    } else {
      properties_initialized_ByteArrayPool_kt_td6pfh = true;
      ByteArrayPool = new ByteArrayPool$1();
    }
  }
  function ObjectPool() {
  }
  function NoPoolImpl() {
  }
  NoPoolImpl.prototype.s16 = function (instance) {
  };
  NoPoolImpl.prototype.zi = function () {
  };
  function ByteChannel(autoFlush) {
    return new ByteChannelJS(Companion_getInstance_4().hw_1, autoFlush);
  }
  function copyTo(_this__u8e3s4, dst, limit, $cont) {
    var tmp = _this__u8e3s4 instanceof ByteChannelSequentialBase ? _this__u8e3s4 : THROW_CCE();
    return copyToSequentialImpl(tmp, dst instanceof ByteChannelSequentialBase ? dst : THROW_CCE(), limit, $cont);
  }
  function ByteReadChannel_0(content, offset, length) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$0 = content.length === 0;
    if (tmp$ret$0)
      return Companion_getInstance_5().d15();
    var head = Companion_getInstance_4().fw_1.n14();
    var tail = head;
    var start = offset;
    var end = start + length | 0;
    $l$loop: while (true) {
      tail.l15(8);
      var tmp$ret$2;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp1_minOf = end - start | 0;
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      var tmp0__get_writeRemaining__z8qq3e = tail;
      tmp$ret$1 = tmp0__get_writeRemaining__z8qq3e.tz_1 - tmp0__get_writeRemaining__z8qq3e.rz_1 | 0;
      var tmp2_minOf = tmp$ret$1;
      tmp$ret$2 = Math.min(tmp1_minOf, tmp2_minOf);
      var size = tmp$ret$2;
      writeFully_0(tail instanceof Buffer ? tail : THROW_CCE(), content, start, size);
      start = start + size | 0;
      if (start === end)
        break $l$loop;
      var current = tail;
      tail = Companion_getInstance_4().fw_1.n14();
      current.b18(tail);
    }
    var tmp$ret$3;
    // Inline function 'kotlin.apply' call
    var tmp3_apply = new ByteChannelJS(head, false);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.ByteReadChannel.<anonymous>' call
    close_0(tmp3_apply);
    tmp$ret$3 = tmp3_apply;
    return tmp$ret$3;
  }
  function ByteChannelJS$attachJob$lambda(this$0) {
    return function (cause) {
      this$0.c1b_1 = null;
      var tmp;
      if (!(cause == null)) {
        this$0.tj(unwrapCancellationException(cause));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ByteChannelJS(initial, autoFlush) {
    ByteChannelSequentialBase_init_$Init$(initial, autoFlush, null, 4, null, this);
    this.c1b_1 = null;
  }
  ByteChannelJS.prototype.r13 = function (job) {
    var tmp0_safe_receiver = this.c1b_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.ch(null, 1, null);
    }
    this.c1b_1 = job;
    job.yg(true, false, ByteChannelJS$attachJob$lambda(this), 2, null);
  };
  ByteChannelJS.prototype.toString = function () {
    return 'ByteChannel[' + this.c1b_1 + ', ' + hashCode(this) + ']';
  };
  function ByteReadChannel$Companion$Empty$delegate$lambda() {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new ByteChannelJS(Companion_getInstance_4().hw_1, false);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.Companion.Empty$delegate.<anonymous>.<anonymous>' call
    tmp0_apply.ms(null);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    tmp.n1a_1 = lazy(ByteReadChannel$Companion$Empty$delegate$lambda);
  }
  Companion_3.prototype.d15 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = Empty$factory();
    tmp$ret$0 = this.n1a_1.o();
    return tmp$ret$0;
  };
  var Companion_instance_3;
  function Companion_getInstance_5() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ByteReadChannel_1() {
    Companion_getInstance_5();
  }
  function Empty$factory() {
    return getPropertyCallableRef('Empty', 1, KProperty1, function (receiver) {
      return receiver.d15();
    }, null);
  }
  function DefaultAllocator() {
    DefaultAllocator_instance = this;
  }
  DefaultAllocator.prototype.d16 = function (size) {
    return new Memory(new DataView(new ArrayBuffer(size)));
  };
  DefaultAllocator.prototype.f16 = function (instance) {
  };
  var DefaultAllocator_instance;
  function DefaultAllocator_getInstance() {
    if (DefaultAllocator_instance == null)
      new DefaultAllocator();
    return DefaultAllocator_instance;
  }
  function of(_this__u8e3s4, array, offset, length) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = array;
    var typedArray = tmp$ret$0;
    return of_0(Companion_getInstance_6(), typedArray, offset, length);
  }
  function of_0(_this__u8e3s4, view, offset, length) {
    return of_1(Companion_getInstance_6(), view.buffer, view.byteOffset + offset | 0, length);
  }
  function of_1(_this__u8e3s4, buffer, offset, length) {
    return new Memory(new DataView(buffer, offset, length));
  }
  function of$default(_this__u8e3s4, buffer, offset, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = 0;
    if (!(($mask0 & 4) === 0))
      length = buffer.byteLength - offset | 0;
    return of_1(_this__u8e3s4, buffer, offset, length);
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.c18_1 = new Memory(new DataView(new ArrayBuffer(0)));
  }
  var Companion_instance_4;
  function Companion_getInstance_6() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Memory(view) {
    Companion_getInstance_6();
    this.e15_1 = view;
  }
  Memory.prototype.d1b = function (offset, length) {
    // Inline function 'kotlin.require' call
    var tmp0_require = offset >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.bits.Memory.slice.<anonymous>' call
      tmp$ret$0 = "offset shouldn't be negative: " + offset;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = length >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.bits.Memory.slice.<anonymous>' call
      tmp$ret$1 = "length shouldn't be negative: " + length;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp = toLong(offset + length | 0);
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.bits.Memory.size' call
    tmp$ret$2 = toLong(this.e15_1.byteLength);
    if (tmp.s(tmp$ret$2) > 0) {
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.bits.Memory.size' call
      tmp$ret$3 = toLong(this.e15_1.byteLength);
      throw IndexOutOfBoundsException_init_$Create$('offset + length > size: ' + offset + ' + ' + length + ' > ' + toString(tmp$ret$3));
    }
    return new Memory(new DataView(this.e15_1.buffer, this.e15_1.byteOffset + offset | 0, length));
  };
  Memory.prototype.w15 = function (destination, offset, length, destinationOffset) {
    var src = new Int8Array(this.e15_1.buffer, this.e15_1.byteOffset + offset | 0, length);
    var dst = new Int8Array(destination.e15_1.buffer, destination.e15_1.byteOffset + destinationOffset | 0, length);
    dst.set(src);
  };
  function copyTo_0(_this__u8e3s4, destination, offset, length, destinationOffset) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = destination;
    var to = tmp$ret$0;
    var from = new Int8Array(_this__u8e3s4.e15_1.buffer, _this__u8e3s4.e15_1.byteOffset + offset | 0, length);
    to.set(from, destinationOffset);
  }
  function copyTo_1(_this__u8e3s4, destination, offset, length, destinationOffset) {
    copyTo_2(_this__u8e3s4.buffer, destination, offset + _this__u8e3s4.byteOffset | 0, length, destinationOffset);
  }
  function copyTo_2(_this__u8e3s4, destination, offset, length, destinationOffset) {
    var from = new Int8Array(_this__u8e3s4, offset, length);
    var to = new Int8Array(destination.e15_1.buffer, destination.e15_1.byteOffset + destinationOffset | 0, length);
    to.set(from, 0);
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  Companion_5.prototype.e1b = function (name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().d18_1;
    }
    var tmp;
    var tmp_0;
    var tmp_1;
    switch (name) {
      case 'ISO-8859-1':
      case 'iso-8859-1':
        tmp_1 = true;
        break;
      default:
        var tmp$ret$3;
        // Inline function 'kotlin.let' call
        var tmp_2 = _Char___init__impl__6a9atx(95);
        var tmp_3 = _Char___init__impl__6a9atx(45);
        var tmp0_let = replace$default(name, tmp_2, tmp_3, false, 4, null);
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.charsets.Companion.forName.<anonymous>' call
        var tmp_4;
        if (tmp0_let === 'iso-8859-1') {
          tmp_4 = true;
        } else {
          var tmp$ret$1;
          // Inline function 'kotlin.text.lowercase' call
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_let;
          tmp$ret$1 = tmp$ret$0.toLowerCase();
          tmp_4 = tmp$ret$1 === 'iso-8859-1';
        }
        tmp$ret$2 = tmp_4;
        tmp$ret$3 = tmp$ret$2;

        tmp_1 = tmp$ret$3;
        break;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = name === 'latin1';
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = name === 'Latin1';
    }
    if (tmp) {
      return Charsets_getInstance().e18_1;
    }
    throw IllegalArgumentException_init_$Create$('Charset ' + name + ' is not supported');
  };
  Companion_5.prototype.f1b = function (charset) {
    var tmp;
    switch (charset) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        tmp = true;
        break;
      default:
        var tmp_0;
        var tmp_1;
        switch (charset) {
          case 'ISO-8859-1':
          case 'iso-8859-1':
            tmp_1 = true;
            break;
          default:
            var tmp$ret$3;
            // Inline function 'kotlin.let' call
            var tmp_2 = _Char___init__impl__6a9atx(95);
            var tmp_3 = _Char___init__impl__6a9atx(45);
            var tmp0_let = replace$default(charset, tmp_2, tmp_3, false, 4, null);
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$2;
            // Inline function 'io.ktor.utils.io.charsets.Companion.isSupported.<anonymous>' call
            var tmp_4;
            if (tmp0_let === 'iso-8859-1') {
              tmp_4 = true;
            } else {
              var tmp$ret$1;
              // Inline function 'kotlin.text.lowercase' call
              var tmp$ret$0;
              // Inline function 'kotlin.js.asDynamic' call
              tmp$ret$0 = tmp0_let;
              tmp$ret$1 = tmp$ret$0.toLowerCase();
              tmp_4 = tmp$ret$1 === 'iso-8859-1';
            }
            tmp$ret$2 = tmp_4;
            tmp$ret$3 = tmp$ret$2;

            tmp_1 = tmp$ret$3;
            break;
        }

        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = charset === 'latin1';
        }

        if (tmp_0) {
          tmp = true;
        } else {
          tmp = false;
        }

        break;
    }
    return tmp;
  };
  var Companion_instance_5;
  function Companion_getInstance_7() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Charset(_name) {
    Companion_getInstance_7();
    this.f18_1 = _name;
  }
  Charset.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !(this.constructor == other.constructor))
      return false;
    if (other instanceof Charset)
      other;
    else
      THROW_CCE();
    if (!(this.f18_1 === other.f18_1))
      return false;
    return true;
  };
  Charset.prototype.hashCode = function () {
    return getStringHashCode(this.f18_1);
  };
  Charset.prototype.toString = function () {
    return this.f18_1;
  };
  function get_name(_this__u8e3s4) {
    return _this__u8e3s4.f18_1;
  }
  function Charsets() {
    Charsets_instance = this;
    this.d18_1 = new CharsetImpl('UTF-8');
    this.e18_1 = new CharsetImpl('ISO-8859-1');
  }
  var Charsets_instance;
  function Charsets_getInstance() {
    if (Charsets_instance == null)
      new Charsets();
    return Charsets_instance;
  }
  function CharsetDecoder(_charset) {
    this.g1b_1 = _charset;
  }
  function encodeToByteArray(_this__u8e3s4, input, fromIndex, toIndex) {
    return encodeToByteArrayImpl1(_this__u8e3s4, input, fromIndex, toIndex);
  }
  function CharsetEncoder(_charset) {
    this.h1b_1 = _charset;
  }
  function CharsetImpl(name) {
    Charset.call(this, name);
    this.j1b_1 = name;
  }
  CharsetImpl.prototype.h18 = function () {
    return new CharsetEncoderImpl(this);
  };
  CharsetImpl.prototype.g18 = function () {
    return new CharsetDecoderImpl(this);
  };
  CharsetImpl.prototype.toString = function () {
    return 'CharsetImpl(name=' + this.j1b_1 + ')';
  };
  CharsetImpl.prototype.hashCode = function () {
    return getStringHashCode(this.j1b_1);
  };
  CharsetImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetImpl ? other : THROW_CCE();
    if (!(this.j1b_1 === tmp0_other_with_cast.j1b_1))
      return false;
    return true;
  };
  function CharsetEncoderImpl(charset) {
    CharsetEncoder.call(this, charset);
    this.l1b_1 = charset;
  }
  CharsetEncoderImpl.prototype.toString = function () {
    return 'CharsetEncoderImpl(charset=' + this.l1b_1 + ')';
  };
  CharsetEncoderImpl.prototype.hashCode = function () {
    return this.l1b_1.hashCode();
  };
  CharsetEncoderImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetEncoderImpl ? other : THROW_CCE();
    if (!this.l1b_1.equals(tmp0_other_with_cast.l1b_1))
      return false;
    return true;
  };
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.n1b_1 = charset;
  }
  CharsetDecoderImpl.prototype.toString = function () {
    return 'CharsetDecoderImpl(charset=' + this.n1b_1 + ')';
  };
  CharsetDecoderImpl.prototype.hashCode = function () {
    return this.n1b_1.hashCode();
  };
  CharsetDecoderImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetDecoderImpl ? other : THROW_CCE();
    if (!this.n1b_1.equals(tmp0_other_with_cast.n1b_1))
      return false;
    return true;
  };
  function decode_0(_this__u8e3s4, input, dst, max) {
    var decoder = Decoder(get_name(get_charset(_this__u8e3s4)), true);
    var charactersCopied = 0;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(input, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      var size = 1;
      try {
        $l$loop: do {
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          var tmp0__get_readRemaining__u3cy9h = current;
          tmp$ret$1 = tmp0__get_readRemaining__u3cy9h.rz_1 - tmp0__get_readRemaining__u3cy9h.qz_1 | 0;
          var before = tmp$ret$1;
          var after;
          if (before >= size) {
            try {
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>' call
                var tmp0__anonymous__q1qw7t = current;
                var rem = max - charactersCopied | 0;
                var tmp$ret$2;
                // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                tmp$ret$2 = tmp0__anonymous__q1qw7t.rz_1 - tmp0__anonymous__q1qw7t.qz_1 | 0;
                var bufferSize = tmp$ret$2;
                if (rem < bufferSize) {
                  tmp$ret$3 = 0;
                  break $l$block_0;
                }
                var tmp$ret$11;
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$10;
                // Inline function 'io.ktor.utils.io.core.read' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$9;
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array.<anonymous>' call
                var tmp0__anonymous__q1qw7t_0 = tmp0__anonymous__q1qw7t.pz_1;
                var tmp1__anonymous__uwfjfc = tmp0__anonymous__q1qw7t.qz_1;
                var tmp2__anonymous__z9zvc9 = tmp0__anonymous__q1qw7t.rz_1;
                var tmp$ret$8;
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>.<anonymous>' call
                var tmp3__anonymous__ufb84q = new Int8Array(tmp0__anonymous__q1qw7t_0.e15_1.buffer, tmp0__anonymous__q1qw7t_0.e15_1.byteOffset + tmp1__anonymous__uwfjfc | 0, tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0);
                var tmp$ret$7;
                $l$block_2: {
                  // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                  try {
                    var tmp$ret$6;
                    // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>.<anonymous>.<anonymous>' call
                    var tmp$ret$4;
                    $l$block_1: {
                      // Inline function 'io.ktor.utils.io.js.decodeStream' call
                      var tmp$ret$5;
                      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                      try {
                        tmp$ret$4 = decoder.o1b(tmp3__anonymous__ufb84q, decodeOptions(true));
                        break $l$block_1;
                      } catch ($p) {
                        if ($p instanceof Error) {
                          var tmp0_elvis_lhs_0 = $p.message;
                          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_0 == null ? 'no cause provided' : tmp0_elvis_lhs_0));
                        } else {
                          throw $p;
                        }
                      }
                    }
                    tmp$ret$6 = tmp$ret$4;
                    tmp$ret$7 = tmp$ret$6;
                    break $l$block_2;
                  } catch ($p) {
                    if ($p instanceof Error) {
                      var tmp0_elvis_lhs_1 = $p.message;
                      throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_1 == null ? 'no cause provided' : tmp0_elvis_lhs_1));
                    } else {
                      throw $p;
                    }
                  }
                }
                var decodedText = tmp$ret$7;
                dst.b(decodedText);
                charactersCopied = charactersCopied + decodedText.length | 0;
                tmp$ret$8 = tmp3__anonymous__ufb84q.byteLength;
                tmp$ret$9 = tmp$ret$8;
                var rc = tmp$ret$9;
                tmp0__anonymous__q1qw7t.f15(rc);
                tmp$ret$10 = rc;
                tmp$ret$11 = tmp$ret$10;
                var tmp_0;
                if (charactersCopied === max) {
                  var tmp_1;
                  try {
                    tmp_1 = decoder.p1b();
                  } catch ($p) {
                    var tmp_2;
                    {
                      tmp_2 = '';
                    }
                    tmp_1 = tmp_2;
                  }
                  var tail = tmp_1;
                  var tmp$ret$12;
                  // Inline function 'kotlin.text.isNotEmpty' call
                  tmp$ret$12 = charSequenceLength(tail) > 0;
                  if (tmp$ret$12) {
                    tmp0__anonymous__q1qw7t.j15(bufferSize);
                  }
                  tmp_0 = 0;
                } else if (charactersCopied < max) {
                  tmp_0 = get_MAX_CHARACTERS_SIZE_IN_BYTES();
                } else {
                  tmp_0 = 0;
                }
                tmp$ret$3 = tmp_0;
              }
              size = tmp$ret$3;
            }finally {
              var tmp$ret$13;
              // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
              var tmp1__get_readRemaining__qliyus = current;
              tmp$ret$13 = tmp1__get_readRemaining__qliyus.rz_1 - tmp1__get_readRemaining__qliyus.qz_1 | 0;
              after = tmp$ret$13;
            }
          } else {
            after = before;
          }
          release = false;
          var tmp_3;
          if (after === 0) {
            tmp_3 = prepareReadNextHead(input, current);
          } else {
            var tmp_4;
            if (after < size) {
              tmp_4 = true;
            } else {
              var tmp$ret$14;
              // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
              var tmp2__get_endGap__m31424 = current;
              tmp$ret$14 = tmp2__get_endGap__m31424.uz_1 - tmp2__get_endGap__m31424.tz_1 | 0;
              var tmp_5 = tmp$ret$14;
              Companion_getInstance_1();
              tmp_4 = tmp_5 < 8;
            }
            if (tmp_4) {
              completeReadHead(input, current);
              tmp_3 = prepareReadFirstHead(input, size);
            } else {
              tmp_3 = current;
            }
          }
          var tmp1_elvis_lhs = tmp_3;
          var tmp_6;
          if (tmp1_elvis_lhs == null) {
            break $l$loop;
          } else {
            tmp_6 = tmp1_elvis_lhs;
          }
          var next = tmp_6;
          current = next;
          release = true;
        }
         while (size > 0);
      }finally {
        if (release) {
          completeReadHead(input, current);
        }
      }
    }
    if (charactersCopied < max) {
      var size_0 = 1;
      var tmp$ret$15;
      $l$block_3: {
        // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
        var release_0 = true;
        var tmp0_elvis_lhs_2 = prepareReadFirstHead(input, 1);
        var tmp_7;
        if (tmp0_elvis_lhs_2 == null) {
          tmp$ret$15 = Unit_getInstance();
          break $l$block_3;
        } else {
          tmp_7 = tmp0_elvis_lhs_2;
        }
        var current_0 = tmp_7;
        var size_1 = 1;
        try {
          $l$loop_0: do {
            var tmp$ret$16;
            // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
            var tmp0__get_readRemaining__u3cy9h_0 = current_0;
            tmp$ret$16 = tmp0__get_readRemaining__u3cy9h_0.rz_1 - tmp0__get_readRemaining__u3cy9h_0.qz_1 | 0;
            var before_0 = tmp$ret$16;
            var after_0;
            if (before_0 >= size_1) {
              try {
                var tmp$ret$21;
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>' call
                var tmp1__anonymous__uwfjfc_0 = current_0;
                var tmp$ret$20;
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$19;
                // Inline function 'io.ktor.utils.io.core.read' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$18;
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array.<anonymous>' call
                var tmp0__anonymous__q1qw7t_1 = tmp1__anonymous__uwfjfc_0.pz_1;
                var tmp1__anonymous__uwfjfc_1 = tmp1__anonymous__uwfjfc_0.qz_1;
                var tmp2__anonymous__z9zvc9_0 = tmp1__anonymous__uwfjfc_0.rz_1;
                var tmp$ret$17;
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>.<anonymous>' call
                var tmp3__anonymous__ufb84q_0 = new Int8Array(tmp0__anonymous__q1qw7t_1.e15_1.buffer, tmp0__anonymous__q1qw7t_1.e15_1.byteOffset + tmp1__anonymous__uwfjfc_1 | 0, tmp2__anonymous__z9zvc9_0 - tmp1__anonymous__uwfjfc_1 | 0);
                var result = decodeBufferImpl(tmp3__anonymous__ufb84q_0, decoder, max - charactersCopied | 0);
                dst.b(result.q1b_1);
                charactersCopied = charactersCopied + result.q1b_1.length | 0;
                tmp$ret$17 = result.r1b_1;
                tmp$ret$18 = tmp$ret$17;
                var rc_0 = tmp$ret$18;
                tmp1__anonymous__uwfjfc_0.f15(rc_0);
                tmp$ret$19 = rc_0;
                tmp$ret$20 = tmp$ret$19;
                var rc_1 = tmp$ret$20;
                if (rc_1 > 0)
                  size_0 = 1;
                else if (size_0 === get_MAX_CHARACTERS_SIZE_IN_BYTES())
                  size_0 = 0;
                else {
                  var tmp0 = size_0;
                  size_0 = tmp0 + 1 | 0;
                }
                tmp$ret$21 = size_0;
                size_1 = tmp$ret$21;
              }finally {
                var tmp$ret$22;
                // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                var tmp1__get_readRemaining__qliyus_0 = current_0;
                tmp$ret$22 = tmp1__get_readRemaining__qliyus_0.rz_1 - tmp1__get_readRemaining__qliyus_0.qz_1 | 0;
                after_0 = tmp$ret$22;
              }
            } else {
              after_0 = before_0;
            }
            release_0 = false;
            var tmp_8;
            if (after_0 === 0) {
              tmp_8 = prepareReadNextHead(input, current_0);
            } else {
              var tmp_9;
              if (after_0 < size_1) {
                tmp_9 = true;
              } else {
                var tmp$ret$23;
                // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
                var tmp2__get_endGap__m31424_0 = current_0;
                tmp$ret$23 = tmp2__get_endGap__m31424_0.uz_1 - tmp2__get_endGap__m31424_0.tz_1 | 0;
                var tmp_10 = tmp$ret$23;
                Companion_getInstance_1();
                tmp_9 = tmp_10 < 8;
              }
              if (tmp_9) {
                completeReadHead(input, current_0);
                tmp_8 = prepareReadFirstHead(input, size_1);
              } else {
                tmp_8 = current_0;
              }
            }
            var tmp1_elvis_lhs_0 = tmp_8;
            var tmp_11;
            if (tmp1_elvis_lhs_0 == null) {
              break $l$loop_0;
            } else {
              tmp_11 = tmp1_elvis_lhs_0;
            }
            var next_0 = tmp_11;
            current_0 = next_0;
            release_0 = true;
          }
           while (size_1 > 0);
        }finally {
          if (release_0) {
            completeReadHead(input, current_0);
          }
        }
      }
    }
    return charactersCopied;
  }
  function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
    // Inline function 'kotlin.require' call
    var tmp0_require = fromIndex <= toIndex;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (get_charset_0(_this__u8e3s4).equals(Charsets_getInstance().e18_1)) {
      return encodeISO88591(input, fromIndex, toIndex, dst);
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = get_charset_0(_this__u8e3s4) === Charsets_getInstance().d18_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.charsets.encodeImpl.<anonymous>' call
      tmp$ret$1 = 'Only UTF-8 encoding is supported in JS';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var encoder = new TextEncoder();
    var start = fromIndex;
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$2 = dst.tz_1 - dst.rz_1 | 0;
    var dstRemaining = tmp$ret$2;
    $l$loop: while (start < toIndex ? dstRemaining > 0 : false) {
      var tmp$ret$3;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp2_minOf = toIndex - start | 0;
      var tmp3_minOf = dstRemaining / 6 | 0;
      tmp$ret$3 = Math.min(tmp2_minOf, tmp3_minOf);
      var numChars = coerceAtLeast(tmp$ret$3, 1);
      var dropLastChar = isHighSurrogate(charSequenceGet(input, (start + numChars | 0) - 1 | 0));
      var endIndexExclusive = (dropLastChar ? numChars === 1 : false) ? start + 2 | 0 : dropLastChar ? (start + numChars | 0) - 1 | 0 : start + numChars | 0;
      var tmp$ret$4;
      // Inline function 'kotlin.text.substring' call
      var tmp4_substring = start;
      tmp$ret$4 = toString(charSequenceSubSequence(input, tmp4_substring, endIndexExclusive));
      var array1 = encoder.encode(tmp$ret$4);
      if (array1.length > dstRemaining)
        break $l$loop;
      writeFully$default_1(dst, array1, 0, 0, 6, null);
      start = endIndexExclusive;
      dstRemaining = dstRemaining - array1.length | 0;
    }
    return start - fromIndex | 0;
  }
  function encodeComplete(_this__u8e3s4, dst) {
    return true;
  }
  function decodeExactBytes(_this__u8e3s4, input, inputLength) {
    if (inputLength === 0)
      return '';
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
    tmp$ret$0 = input.c11_1 - input.b11_1 | 0;
    if (tmp$ret$0 >= inputLength) {
      var decoder = Decoder(get_charset(_this__u8e3s4).f18_1, true);
      var head = input.y16();
      var view = input.a11_1.e15_1;
      var tmp$ret$2;
      $l$block: {
        // Inline function 'io.ktor.utils.io.js.decodeWrap' call
        try {
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.charsets.decodeExactBytes.<anonymous>' call
          var subView = (head.qz_1 === 0 ? inputLength === view.byteLength : false) ? view : new DataView(view.buffer, view.byteOffset + head.qz_1 | 0, inputLength);
          tmp$ret$1 = decoder.s1b(subView);
          tmp$ret$2 = tmp$ret$1;
          break $l$block;
        } catch ($p) {
          if ($p instanceof Error) {
            var tmp0_elvis_lhs = $p.message;
            throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
          } else {
            throw $p;
          }
        }
      }
      var text = tmp$ret$2;
      input.f15(inputLength);
      return text;
    }
    return decodeExactBytesSlow(_this__u8e3s4, input, inputLength);
  }
  function get_charset(_this__u8e3s4) {
    return _this__u8e3s4.g1b_1;
  }
  function get_charset_0(_this__u8e3s4) {
    return _this__u8e3s4.h1b_1;
  }
  function decodeExactBytesSlow(_this__u8e3s4, input, inputLength) {
    var decoder = Decoder(get_name(get_charset(_this__u8e3s4)), true);
    var inputRemaining = inputLength;
    var sb = StringBuilder_init_$Create$(inputLength);
    var tmp$ret$18;
    $l$block_4: {
      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
      try {
        var tmp$ret$17;
        // Inline function 'io.ktor.utils.io.charsets.decodeExactBytesSlow.<anonymous>' call
        var tmp$ret$0;
        $l$block: {
          // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
          var release = true;
          var tmp0_elvis_lhs = prepareReadFirstHead(input, 6);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var current = tmp;
          var size = 6;
          try {
            $l$loop: do {
              var tmp$ret$1;
              // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
              var tmp0__get_readRemaining__u3cy9h = current;
              tmp$ret$1 = tmp0__get_readRemaining__u3cy9h.rz_1 - tmp0__get_readRemaining__u3cy9h.qz_1 | 0;
              var before = tmp$ret$1;
              var after;
              if (before >= size) {
                try {
                  var tmp$ret$8;
                  // Inline function 'io.ktor.utils.io.charsets.decodeExactBytesSlow.<anonymous>.<anonymous>' call
                  var tmp0__anonymous__q1qw7t = current;
                  var tmp$ret$2;
                  // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                  tmp$ret$2 = tmp0__anonymous__q1qw7t.rz_1 - tmp0__anonymous__q1qw7t.qz_1 | 0;
                  var chunkSize = tmp$ret$2;
                  var tmp$ret$3;
                  // Inline function 'kotlin.comparisons.minOf' call
                  var tmp0_minOf = inputRemaining;
                  tmp$ret$3 = Math.min(chunkSize, tmp0_minOf);
                  var size_0 = tmp$ret$3;
                  var tmp_0;
                  if (tmp0__anonymous__q1qw7t.qz_1 === 0 ? tmp0__anonymous__q1qw7t.pz_1.e15_1.byteLength === size_0 : false) {
                    var tmp$ret$4;
                    $l$block_0: {
                      // Inline function 'io.ktor.utils.io.js.decodeStream' call
                      var tmp1_decodeStream = tmp0__anonymous__q1qw7t.pz_1.e15_1;
                      var tmp$ret$5;
                      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                      try {
                        tmp$ret$4 = decoder.o1b(tmp1_decodeStream, decodeOptions(true));
                        break $l$block_0;
                      } catch ($p) {
                        if ($p instanceof Error) {
                          var tmp0_elvis_lhs_0 = $p.message;
                          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_0 == null ? 'no cause provided' : tmp0_elvis_lhs_0));
                        } else {
                          throw $p;
                        }
                      }
                    }
                    tmp_0 = tmp$ret$4;
                  } else {
                    var tmp$ret$6;
                    $l$block_1: {
                      // Inline function 'io.ktor.utils.io.js.decodeStream' call
                      var tmp2_decodeStream = new Int8Array(tmp0__anonymous__q1qw7t.pz_1.e15_1.buffer, tmp0__anonymous__q1qw7t.pz_1.e15_1.byteOffset + tmp0__anonymous__q1qw7t.qz_1 | 0, size_0);
                      var tmp$ret$7;
                      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                      try {
                        tmp$ret$6 = decoder.o1b(tmp2_decodeStream, decodeOptions(true));
                        break $l$block_1;
                      } catch ($p) {
                        if ($p instanceof Error) {
                          var tmp0_elvis_lhs_1 = $p.message;
                          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_1 == null ? 'no cause provided' : tmp0_elvis_lhs_1));
                        } else {
                          throw $p;
                        }
                      }
                    }
                    tmp_0 = tmp$ret$6;
                  }
                  var text = tmp_0;
                  sb.wc(text);
                  tmp0__anonymous__q1qw7t.f15(size_0);
                  inputRemaining = inputRemaining - size_0 | 0;
                  tmp$ret$8 = inputRemaining > 0 ? 6 : 0;
                  size = tmp$ret$8;
                }finally {
                  var tmp$ret$9;
                  // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                  var tmp1__get_readRemaining__qliyus = current;
                  tmp$ret$9 = tmp1__get_readRemaining__qliyus.rz_1 - tmp1__get_readRemaining__qliyus.qz_1 | 0;
                  after = tmp$ret$9;
                }
              } else {
                after = before;
              }
              release = false;
              var tmp_1;
              if (after === 0) {
                tmp_1 = prepareReadNextHead(input, current);
              } else {
                var tmp_2;
                if (after < size) {
                  tmp_2 = true;
                } else {
                  var tmp$ret$10;
                  // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
                  var tmp2__get_endGap__m31424 = current;
                  tmp$ret$10 = tmp2__get_endGap__m31424.uz_1 - tmp2__get_endGap__m31424.tz_1 | 0;
                  var tmp_3 = tmp$ret$10;
                  Companion_getInstance_1();
                  tmp_2 = tmp_3 < 8;
                }
                if (tmp_2) {
                  completeReadHead(input, current);
                  tmp_1 = prepareReadFirstHead(input, size);
                } else {
                  tmp_1 = current;
                }
              }
              var tmp1_elvis_lhs = tmp_1;
              var tmp_4;
              if (tmp1_elvis_lhs == null) {
                break $l$loop;
              } else {
                tmp_4 = tmp1_elvis_lhs;
              }
              var next = tmp_4;
              current = next;
              release = true;
            }
             while (size > 0);
          }finally {
            if (release) {
              completeReadHead(input, current);
            }
          }
        }
        if (inputRemaining > 0) {
          var tmp$ret$11;
          $l$block_2: {
            // Inline function 'io.ktor.utils.io.core.takeWhile' call
            var release_0 = true;
            var tmp0_elvis_lhs_2 = prepareReadFirstHead(input, 1);
            var tmp_5;
            if (tmp0_elvis_lhs_2 == null) {
              tmp$ret$11 = Unit_getInstance();
              break $l$block_2;
            } else {
              tmp_5 = tmp0_elvis_lhs_2;
            }
            var current_0 = tmp_5;
            try {
              $l$loop_1: do {
                var tmp$ret$16;
                // Inline function 'io.ktor.utils.io.charsets.decodeExactBytesSlow.<anonymous>.<anonymous>' call
                var tmp1__anonymous__uwfjfc = current_0;
                var tmp$ret$12;
                // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                tmp$ret$12 = tmp1__anonymous__uwfjfc.rz_1 - tmp1__anonymous__uwfjfc.qz_1 | 0;
                var chunkSize_0 = tmp$ret$12;
                var tmp$ret$13;
                // Inline function 'kotlin.comparisons.minOf' call
                var tmp0_minOf_0 = inputRemaining;
                tmp$ret$13 = Math.min(chunkSize_0, tmp0_minOf_0);
                var size_1 = tmp$ret$13;
                var tmp_6;
                if (tmp1__anonymous__uwfjfc.qz_1 === 0 ? tmp1__anonymous__uwfjfc.pz_1.e15_1.byteLength === size_1 : false) {
                  tmp_6 = decoder.s1b(tmp1__anonymous__uwfjfc.pz_1.e15_1);
                } else {
                  var tmp$ret$14;
                  $l$block_3: {
                    // Inline function 'io.ktor.utils.io.js.decodeStream' call
                    var tmp1_decodeStream_0 = new Int8Array(tmp1__anonymous__uwfjfc.pz_1.e15_1.buffer, tmp1__anonymous__uwfjfc.pz_1.e15_1.byteOffset + tmp1__anonymous__uwfjfc.qz_1 | 0, size_1);
                    var tmp$ret$15;
                    // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                    try {
                      tmp$ret$14 = decoder.o1b(tmp1_decodeStream_0, decodeOptions(true));
                      break $l$block_3;
                    } catch ($p) {
                      if ($p instanceof Error) {
                        var tmp0_elvis_lhs_3 = $p.message;
                        throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_3 == null ? 'no cause provided' : tmp0_elvis_lhs_3));
                      } else {
                        throw $p;
                      }
                    }
                  }
                  tmp_6 = tmp$ret$14;
                }
                var text_0 = tmp_6;
                sb.wc(text_0);
                tmp1__anonymous__uwfjfc.f15(size_1);
                inputRemaining = inputRemaining - size_1 | 0;
                tmp$ret$16 = true;
                if (!tmp$ret$16) {
                  break $l$loop_1;
                }
                release_0 = false;
                var tmp1_elvis_lhs_0 = prepareReadNextHead(input, current_0);
                var tmp_7;
                if (tmp1_elvis_lhs_0 == null) {
                  break $l$loop_1;
                } else {
                  tmp_7 = tmp1_elvis_lhs_0;
                }
                var next_0 = tmp_7;
                current_0 = next_0;
                release_0 = true;
              }
               while (true);
            }finally {
              if (release_0) {
                completeReadHead(input, current_0);
              }
            }
          }
        }
        tmp$ret$17 = sb.wc(decoder.p1b());
        tmp$ret$18 = tmp$ret$17;
        break $l$block_4;
      } catch ($p) {
        if ($p instanceof Error) {
          var tmp0_elvis_lhs_4 = $p.message;
          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_4 == null ? 'no cause provided' : tmp0_elvis_lhs_4));
        } else {
          throw $p;
        }
      }
    }
    if (inputRemaining > 0) {
      throw new EOFException('Not enough bytes available: had only ' + (inputLength - inputRemaining | 0) + ' instead of ' + inputLength);
    }
    return sb.toString();
  }
  function MalformedInputException(message) {
    extendThrowable(this, message, void 1);
    captureStack(this, MalformedInputException);
  }
  function get_MAX_CHARACTERS_SIZE_IN_BYTES() {
    return MAX_CHARACTERS_SIZE_IN_BYTES;
  }
  var MAX_CHARACTERS_SIZE_IN_BYTES;
  function DecodeBufferResult(charactersDecoded, bytesConsumed) {
    this.q1b_1 = charactersDecoded;
    this.r1b_1 = bytesConsumed;
  }
  DecodeBufferResult.prototype.toString = function () {
    return 'DecodeBufferResult(charactersDecoded=' + this.q1b_1 + ', bytesConsumed=' + this.r1b_1 + ')';
  };
  DecodeBufferResult.prototype.hashCode = function () {
    var result = getStringHashCode(this.q1b_1);
    result = imul(result, 31) + this.r1b_1 | 0;
    return result;
  };
  DecodeBufferResult.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DecodeBufferResult))
      return false;
    var tmp0_other_with_cast = other instanceof DecodeBufferResult ? other : THROW_CCE();
    if (!(this.q1b_1 === tmp0_other_with_cast.q1b_1))
      return false;
    if (!(this.r1b_1 === tmp0_other_with_cast.r1b_1))
      return false;
    return true;
  };
  function decodeBufferImpl(_this__u8e3s4, nativeDecoder, maxCharacters) {
    if (maxCharacters === 0) {
      return new DecodeBufferResult('', 0);
    }
    try {
      var sizeInBytes = coerceAtMost(maxCharacters, _this__u8e3s4.byteLength);
      var text = nativeDecoder.s1b(_this__u8e3s4.subarray(0, sizeInBytes));
      if (text.length <= maxCharacters) {
        return new DecodeBufferResult(text, sizeInBytes);
      }
    } catch ($p) {
    }
    return decodeBufferImplSlow(_this__u8e3s4, nativeDecoder, maxCharacters);
  }
  function decodeBufferImplSlow(_this__u8e3s4, nativeDecoder, maxCharacters) {
    var maxBytes = coerceAtMost(maxCharacters >= 268435455 ? IntCompanionObject_getInstance().MAX_VALUE : imul(maxCharacters, 8), _this__u8e3s4.byteLength);
    var sizeInBytes = maxBytes;
    while (sizeInBytes > 8) {
      try {
        var text = nativeDecoder.s1b(_this__u8e3s4.subarray(0, sizeInBytes));
        if (text.length <= maxCharacters) {
          return new DecodeBufferResult(text, sizeInBytes);
        }
      } catch ($p) {
      }
      sizeInBytes = sizeInBytes / 2 | 0;
    }
    sizeInBytes = 8;
    while (sizeInBytes > 0) {
      try {
        var text_0 = nativeDecoder.s1b(_this__u8e3s4.subarray(0, sizeInBytes));
        if (text_0.length <= maxCharacters) {
          return new DecodeBufferResult(text_0, sizeInBytes);
        }
      } catch ($p) {
      }
      var tmp0 = sizeInBytes;
      sizeInBytes = tmp0 - 1 | 0;
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
      try {
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.charsets.decodeBufferImplSlow.<anonymous>' call
        tmp$ret$0 = nativeDecoder.s1b(_this__u8e3s4);
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          var tmp0_elvis_lhs = $p.message;
          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
        } else {
          throw $p;
        }
      }
    }
    throw new MalformedInputException('Unable to decode buffer');
  }
  function encodeISO88591(input, fromIndex, toIndex, dst) {
    if (fromIndex >= toIndex)
      return 0;
    var tmp$ret$5;
    // Inline function 'io.ktor.utils.io.core.writeDirect' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'io.ktor.utils.io.core.writeDirect.<anonymous>' call
    var tmp0__anonymous__q1qw7t = dst.pz_1;
    var tmp1__anonymous__uwfjfc = dst.rz_1;
    var tmp2__anonymous__z9zvc9 = dst.tz_1;
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.charsets.encodeISO88591.<anonymous>' call
    var tmp3__anonymous__ufb84q = tmp0__anonymous__q1qw7t.d1b(tmp1__anonymous__uwfjfc, tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0).e15_1;
    var i8 = new Int8Array(tmp3__anonymous__ufb84q.buffer, tmp3__anonymous__ufb84q.byteOffset, tmp3__anonymous__ufb84q.byteLength);
    var writeIndex = 0;
    var inductionVariable = fromIndex;
    if (inductionVariable < toIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        var tmp0__get_code__88qj9g = charSequenceGet(input, index);
        tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
        var character = tmp$ret$0;
        if (character > 255) {
          failedToMapError(character);
        }
        // Inline function 'org.khronos.webgl.set' call
        var tmp1 = writeIndex;
        writeIndex = tmp1 + 1 | 0;
        var tmp1_set = tmp1;
        var tmp2_set = toByte(character);
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = i8;
        tmp$ret$1[tmp1_set] = tmp2_set;
      }
       while (inductionVariable < toIndex);
    tmp$ret$2 = writeIndex;
    tmp$ret$3 = tmp$ret$2;
    var rc = tmp$ret$3;
    dst.g15(rc);
    tmp$ret$4 = rc;
    tmp$ret$5 = tmp$ret$4;
    return toIndex - fromIndex | 0;
  }
  function failedToMapError(ch) {
    throw new MalformedInputException('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
  }
  function writeFully_4(_this__u8e3s4, src, offset, length) {
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.pz_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.rz_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.tz_1;
    if ((tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0) < length) {
      throw new InsufficientSpaceException('Not enough free space to write ' + length + ' bytes');
    }
    copyTo_1(src, tmp0__anonymous__q1qw7t, offset, length, tmp1__anonymous__uwfjfc);
    tmp$ret$0 = length;
    var rc = tmp$ret$0;
    _this__u8e3s4.g15(rc);
    tmp$ret$1 = rc;
  }
  function writeFully$default_1(_this__u8e3s4, src, offset, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = 0;
    if (!(($mask0 & 4) === 0))
      length = src.byteLength - offset | 0;
    return writeFully_4(_this__u8e3s4, src, offset, length);
  }
  function Closeable() {
  }
  function get_PACKET_MAX_COPY_SIZE() {
    return PACKET_MAX_COPY_SIZE;
  }
  var PACKET_MAX_COPY_SIZE;
  function String_0(bytes, offset, length, charset) {
    if ((offset < 0 ? true : length < 0) ? true : (offset + length | 0) > bytes.length) {
      checkIndices(offset, length, bytes);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = bytes;
    var i8 = tmp$ret$0;
    var bufferOffset = i8.byteOffset + offset | 0;
    var buffer = i8.buffer.slice(bufferOffset, bufferOffset + length | 0);
    var tmp = Companion_getInstance_6();
    var view = new ChunkBuffer(of$default(tmp, buffer, 0, 0, 6, null), null, Companion_getInstance_4().iw_1);
    view.m15();
    var packet = ByteReadPacket_init_$Create$(view, Companion_getInstance_4().jw_1);
    return decode(charset.g18(), packet, IntCompanionObject_getInstance().MAX_VALUE);
  }
  function String$default(bytes, offset, length, charset, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = 0;
    if (!(($mask0 & 4) === 0))
      length = bytes.length;
    if (!(($mask0 & 8) === 0))
      charset = Charsets_getInstance().d18_1;
    return String_0(bytes, offset, length, charset);
  }
  function checkIndices(offset, length, bytes) {
    // Inline function 'kotlin.require' call
    var tmp0_require = offset >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      throw IndexOutOfBoundsException_init_$Create$('offset (' + offset + ") shouldn't be negative");
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = length >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      throw IndexOutOfBoundsException_init_$Create$('length (' + length + ") shouldn't be negative");
    }
    // Inline function 'kotlin.require' call
    var tmp2_require = (offset + length | 0) <= bytes.length;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      throw IndexOutOfBoundsException_init_$Create$('offset (' + offset + ') + length (' + length + ') > bytes.size (' + bytes.length + ')');
    }
    throw IndexOutOfBoundsException_init_$Create$_0();
  }
  function EOFException(message) {
    IOException_init_$Init$(message, this);
    captureStack(this, EOFException);
  }
  function IOException_init_$Init$(message, $this) {
    IOException.call($this, message, null);
    return $this;
  }
  function IOException(message, cause) {
    Exception_init_$Init$_0(message, cause, this);
    captureStack(this, IOException);
  }
  function Decoder(encoding, fatal) {
    var tmp;
    try {
      tmp = toKtor(new TextDecoder(encoding, textDecoderOptions(fatal)));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = new TextDecoderFallback(encoding, fatal);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function decodeOptions(stream) {
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Object();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.js.decodeOptions.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_apply;
    var tmp0_with = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$1 = tmp0_with.stream = stream;
    tmp$ret$2 = tmp0_apply;
    return tmp$ret$2;
  }
  function toKtor(_this__u8e3s4) {
    return new toKtor$1(_this__u8e3s4);
  }
  function textDecoderOptions(fatal) {
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Object();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.js.textDecoderOptions.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_apply;
    var tmp0_with = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$1 = tmp0_with.fatal = fatal;
    tmp$ret$2 = tmp0_apply;
    return tmp$ret$2;
  }
  function toKtor$1($this_toKtor) {
    this.t1b_1 = $this_toKtor;
  }
  toKtor$1.prototype.p1b = function () {
    return this.t1b_1.decode();
  };
  toKtor$1.prototype.s1b = function (buffer) {
    return this.t1b_1.decode(buffer);
  };
  toKtor$1.prototype.o1b = function (buffer, options) {
    return this.t1b_1.decode(buffer, options);
  };
  function get_ENCODING_ALIASES() {
    init_properties_TextDecoderFallback_kt_mch4cl();
    return ENCODING_ALIASES;
  }
  var ENCODING_ALIASES;
  function get_REPLACEMENT() {
    init_properties_TextDecoderFallback_kt_mch4cl();
    return REPLACEMENT;
  }
  var REPLACEMENT;
  function TextDecoderFallback(encoding, fatal) {
    this.u1b_1 = fatal;
    var tmp$ret$2;
    // Inline function 'kotlin.text.lowercase' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.trim' call
    tmp$ret$0 = toString(trim(isCharSequence(encoding) ? encoding : THROW_CCE()));
    var tmp0_lowercase = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = tmp0_lowercase;
    tmp$ret$2 = tmp$ret$1.toLowerCase();
    var requestedEncoding = tmp$ret$2;
    // Inline function 'kotlin.check' call
    var tmp1_check = get_ENCODING_ALIASES().y(requestedEncoding);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.js.TextDecoderFallback.<anonymous>' call
      tmp$ret$3 = encoding + ' is not supported.';
      var message = tmp$ret$3;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  TextDecoderFallback.prototype.p1b = function () {
    return '';
  };
  TextDecoderFallback.prototype.s1b = function (buffer) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = BytePacketBuilder_init_$Create$(null, 1, null);
      try {
        // Inline function 'io.ktor.utils.io.js.TextDecoderFallback.decode.<anonymous>' call
        var bytes = buffer instanceof Int8Array ? buffer : THROW_CCE();
        var inductionVariable = 0;
        var last = bytes.length;
        if (inductionVariable < last)
          $l$loop: do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$1;
            // Inline function 'org.khronos.webgl.get' call
            var tmp$ret$0;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$0 = bytes;
            tmp$ret$1 = tmp$ret$0[index];
            var byte = tmp$ret$1;
            var point = toCodePoint(byte);
            if (point < 0) {
              // Inline function 'kotlin.check' call
              var tmp0_check = !this.u1b_1;
              // Inline function 'kotlin.contracts.contract' call
              if (!tmp0_check) {
                var tmp$ret$2;
                // Inline function 'io.ktor.utils.io.js.TextDecoderFallback.decode.<anonymous>.<anonymous>' call
                tmp$ret$2 = 'Invalid character: ' + point;
                var message = tmp$ret$2;
                throw IllegalStateException_init_$Create$(toString(message));
              }
              var tmp = get_REPLACEMENT();
              writeFully$default_0(builder, tmp, 0, 0, 6, null);
              continue $l$loop;
            }
            if (point > 255) {
              builder.u15(toByte(point >> 8));
            }
            builder.u15(toByte(point & 255));
          }
           while (inductionVariable < last);
        tmp$ret$3 = builder.i11();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          builder.rl();
          throw $p;
        } else {
          throw $p;
        }
      }
    }
    var tmp_0 = tmp$ret$3;
    return decodeToString(readBytes$default(tmp_0, 0, 1, null));
  };
  TextDecoderFallback.prototype.o1b = function (buffer, options) {
    return this.s1b(buffer);
  };
  function toCodePoint(_this__u8e3s4) {
    init_properties_TextDecoderFallback_kt_mch4cl();
    var value = _this__u8e3s4 & 255;
    if (isASCII(value)) {
      return value;
    }
    return get_WIN1252_TABLE()[value - 128 | 0];
  }
  function isASCII(_this__u8e3s4) {
    init_properties_TextDecoderFallback_kt_mch4cl();
    return 0 <= _this__u8e3s4 ? _this__u8e3s4 <= 127 : false;
  }
  var properties_initialized_TextDecoderFallback_kt_7y92ax;
  function init_properties_TextDecoderFallback_kt_mch4cl() {
    if (properties_initialized_TextDecoderFallback_kt_7y92ax) {
    } else {
      properties_initialized_TextDecoderFallback_kt_7y92ax = true;
      ENCODING_ALIASES = setOf(['ansi_x3.4-1968', 'ascii', 'cp1252', 'cp819', 'csisolatin1', 'ibm819', 'iso-8859-1', 'iso-ir-100', 'iso8859-1', 'iso88591', 'iso_8859-1', 'iso_8859-1:1987', 'l1', 'latin1', 'us-ascii', 'windows-1252', 'x-cp1252']);
      var tmp$ret$0;
      // Inline function 'kotlin.byteArrayOf' call
      var tmp0_byteArrayOf = new Int8Array([-17, -65, -67]);
      tmp$ret$0 = tmp0_byteArrayOf;
      REPLACEMENT = tmp$ret$0;
    }
  }
  function get_WIN1252_TABLE() {
    init_properties_Win1252Table_kt_2hu70m();
    return WIN1252_TABLE;
  }
  var WIN1252_TABLE;
  var properties_initialized_Win1252Table_kt_pkmjoq;
  function init_properties_Win1252Table_kt_2hu70m() {
    if (properties_initialized_Win1252Table_kt_pkmjoq) {
    } else {
      properties_initialized_Win1252Table_kt_pkmjoq = true;
      var tmp$ret$0;
      // Inline function 'kotlin.intArrayOf' call
      tmp$ret$0 = new Int32Array([8364, -1, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, -1, 381, -1, -1, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, -1, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]);
      WIN1252_TABLE = tmp$ret$0;
    }
  }
  function DefaultPool(capacity) {
    this.g16_1 = capacity;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.g16_1;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp.h16_1 = tmp$ret$0;
    this.i16_1 = 0;
  }
  DefaultPool.prototype.j16 = function (instance) {
  };
  DefaultPool.prototype.q16 = function (instance) {
    return instance;
  };
  DefaultPool.prototype.m16 = function (instance) {
  };
  DefaultPool.prototype.n14 = function () {
    if (this.i16_1 === 0)
      return this.c16();
    var tmp0_this = this;
    tmp0_this.i16_1 = tmp0_this.i16_1 - 1 | 0;
    var idx = tmp0_this.i16_1;
    var tmp = this.h16_1[idx];
    var instance = isObject(tmp) ? tmp : THROW_CCE();
    this.h16_1[idx] = null;
    return this.q16(instance);
  };
  DefaultPool.prototype.s16 = function (instance) {
    this.m16(instance);
    if (this.i16_1 === this.g16_1) {
      this.j16(instance);
    } else {
      var tmp0_this = this;
      var tmp1 = tmp0_this.i16_1;
      tmp0_this.i16_1 = tmp1 + 1 | 0;
      this.h16_1[tmp1] = instance;
    }
  };
  DefaultPool.prototype.zi = function () {
    var inductionVariable = 0;
    var last = this.i16_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.h16_1[i];
        var instance = isObject(tmp) ? tmp : THROW_CCE();
        this.h16_1[i] = null;
        this.j16(instance);
      }
       while (inductionVariable < last);
    this.i16_1 = 0;
  };
  //region block: post-declaration
  ByteChannelSequentialBase.prototype.j13 = readRemaining$default;
  ChannelJob.prototype.ch = cancel$default;
  ChannelJob.prototype.yg = invokeOnCompletion$default;
  DefaultPool.prototype.nu = close;
  DefaultBufferPool.prototype.nu = close;
  ChunkBuffer$Companion$Pool$1.prototype.nu = close;
  ChunkBuffer$Companion$EmptyPool$1.prototype.nu = close;
  NoPoolImpl.prototype.nu = close;
  ChunkBuffer$Companion$NoPool$1.prototype.nu = close;
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.prototype.nu = close;
  ByteArrayPool$1.prototype.nu = close;
  ByteChannelJS.prototype.j13 = readRemaining$default;
  //endregion
  //region block: init
  DEFAULT_BUFFER_SIZE = 4096;
  MAX_CHARACTERS_SIZE_IN_BYTES = 8;
  PACKET_MAX_COPY_SIZE = 200;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = copyTo;
  _.$_$.b = readAvailable;
  _.$_$.c = writeFully;
  _.$_$.d = decode$default;
  _.$_$.e = encode$default;
  _.$_$.f = String$default;
  _.$_$.g = readBytes$default;
  _.$_$.h = readText$default;
  _.$_$.i = writeFully$default_0;
  _.$_$.j = writeText$default;
  _.$_$.k = writer$default;
  _.$_$.l = BytePacketBuilder_init_$Create$;
  _.$_$.m = IOException_init_$Init$;
  _.$_$.n = Companion_getInstance_7;
  _.$_$.o = Charsets_getInstance;
  _.$_$.p = Companion_getInstance_5;
  _.$_$.q = encodeToByteArray;
  _.$_$.r = encode;
  _.$_$.s = get_name;
  _.$_$.t = completeReadHead;
  _.$_$.u = prepareReadFirstHead;
  _.$_$.v = prepareReadNextHead;
  _.$_$.w = ByteReadPacket;
  _.$_$.x = Closeable;
  _.$_$.y = Input;
  _.$_$.z = String_0;
  _.$_$.a1 = discard;
  _.$_$.b1 = readShort_0;
  _.$_$.c1 = writeShort_0;
  _.$_$.d1 = IOException;
  _.$_$.e1 = get_ByteArrayPool;
  _.$_$.f1 = ByteReadChannel;
  _.$_$.g1 = ByteReadChannel_1;
  _.$_$.h1 = WriterScope;
  _.$_$.i1 = cancel;
  _.$_$.j1 = writer;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-io-js-ir.js.map
