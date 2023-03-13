(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    root['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] = factory(typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined' ? {} : this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var THROW_CCE = kotlin_kotlin.$_$.kb;
  var isObject = kotlin_kotlin.$_$.u8;
  var Unit_getInstance = kotlin_kotlin.$_$.b4;
  var plus = kotlin_kotlin.$_$.n7;
  var get = kotlin_kotlin.$_$.k7;
  var fold = kotlin_kotlin.$_$.j7;
  var minusKey = kotlin_kotlin.$_$.l7;
  var Continuation = kotlin_kotlin.$_$.i7;
  var classMeta = kotlin_kotlin.$_$.a8;
  var setMetadataFor = kotlin_kotlin.$_$.d9;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.l3;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.b7;
  var CoroutineImpl = kotlin_kotlin.$_$.o7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.a7;
  var interfaceMeta = kotlin_kotlin.$_$.j8;
  var isInterface = kotlin_kotlin.$_$.s8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var toString = kotlin_kotlin.$_$.hc;
  var toString_0 = kotlin_kotlin.$_$.h9;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var objectMeta = kotlin_kotlin.$_$.c9;
  var hashCode = kotlin_kotlin.$_$.i8;
  var equals = kotlin_kotlin.$_$.c8;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.v2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.x2;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.e7;
  var Key_getInstance = kotlin_kotlin.$_$.k3;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.d7;
  var get_0 = kotlin_kotlin.$_$.f7;
  var minusKey_0 = kotlin_kotlin.$_$.g7;
  var ContinuationInterceptor = kotlin_kotlin.$_$.h7;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.i2;
  var getStringHashCode = kotlin_kotlin.$_$.h8;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.m1;
  var Enum = kotlin_kotlin.$_$.bb;
  var startCoroutine = kotlin_kotlin.$_$.p7;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ec;
  var Long = kotlin_kotlin.$_$.gb;
  var intercepted = kotlin_kotlin.$_$.c7;
  var Companion_getInstance = kotlin_kotlin.$_$.v3;
  var RuntimeException = kotlin_kotlin.$_$.jb;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.h2;
  var captureStack = kotlin_kotlin.$_$.u7;
  var Error_0 = kotlin_kotlin.$_$.cb;
  var Error_init_$Init$ = kotlin_kotlin.$_$.q1;
  var Element = kotlin_kotlin.$_$.m7;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.o1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.gc;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var CancellationException = kotlin_kotlin.$_$.z6;
  var ArrayList = kotlin_kotlin.$_$.c4;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.d2;
  var anyToString = kotlin_kotlin.$_$.r7;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.w3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.u2;
  var createFailure = kotlin_kotlin.$_$.wb;
  var UnsupportedOperationException = kotlin_kotlin.$_$.sb;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var fillArrayVal = kotlin_kotlin.$_$.e8;
  var fill = kotlin_kotlin.$_$.k5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var fill$default = kotlin_kotlin.$_$.h;
  var ensureNotNull = kotlin_kotlin.$_$.xb;
  var NoSuchElementException = kotlin_kotlin.$_$.hb;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.g2;
  var IllegalStateException = kotlin_kotlin.$_$.fb;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.a2;
  var arrayCopy = kotlin_kotlin.$_$.r4;
  var toLong = kotlin_kotlin.$_$.f9;
  var toLongOrNull = kotlin_kotlin.$_$.oa;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.l1;
  var coerceIn = kotlin_kotlin.$_$.m9;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.b1;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.k2;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    var tmp;
    if ($handler == null) {
      this.bh(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(cause);
    }
    return tmp;
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancelling = false;
    if (!(($mask0 & 2) === 0))
      invokeImmediately = true;
    return $handler == null ? this.xg(onCancelling, invokeImmediately, handler) : $handler(onCancelling, invokeImmediately, handler);
  }
  setMetadataFor(Job, 'Job', interfaceMeta, undefined, [Element], undefined, undefined, [0]);
  setMetadataFor(ParentJob, 'ParentJob', interfaceMeta, undefined, [Job], undefined, undefined, [0]);
  setMetadataFor(JobSupport, 'JobSupport', classMeta, undefined, [Job, ParentJob], undefined, undefined, [0]);
  setMetadataFor(CoroutineScope, 'CoroutineScope', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AbstractCoroutine, 'AbstractCoroutine', classMeta, JobSupport, [JobSupport, Job, Continuation, CoroutineScope], undefined, undefined, [0]);
  setMetadataFor(StandaloneCoroutine, 'StandaloneCoroutine', classMeta, AbstractCoroutine, undefined, undefined, undefined, [0]);
  setMetadataFor(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', classMeta, StandaloneCoroutine, undefined, undefined, undefined, [0]);
  setMetadataFor($awaitCOROUTINE$0, '$awaitCOROUTINE$0', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(DeferredCoroutine, 'DeferredCoroutine', classMeta, AbstractCoroutine, [AbstractCoroutine, Job], undefined, undefined, [0]);
  setMetadataFor(LazyDeferredCoroutine, 'LazyDeferredCoroutine', classMeta, DeferredCoroutine, undefined, undefined, undefined, [0]);
  function tryResume$default(value, idempotent, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      idempotent = null;
    return $handler == null ? this.pi(value, idempotent) : $handler(value, idempotent);
  }
  setMetadataFor(CancellableContinuation, 'CancellableContinuation', interfaceMeta, undefined, [Continuation], undefined, undefined, []);
  setMetadataFor(CancelHandlerBase, 'CancelHandlerBase', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(NotCompleted, 'NotCompleted', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CancelHandler, 'CancelHandler', classMeta, CancelHandlerBase, [CancelHandlerBase, NotCompleted], undefined, undefined, []);
  setMetadataFor(DisposeOnCancel, 'DisposeOnCancel', classMeta, CancelHandler, undefined, undefined, undefined, []);
  setMetadataFor(SchedulerTask, 'SchedulerTask', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DispatchedTask, 'DispatchedTask', classMeta, SchedulerTask, undefined, undefined, undefined, []);
  setMetadataFor(CancellableContinuationImpl, 'CancellableContinuationImpl', classMeta, DispatchedTask, [DispatchedTask, CancellableContinuation], undefined, undefined, []);
  setMetadataFor(Active, 'Active', objectMeta, undefined, [NotCompleted], undefined, undefined, []);
  setMetadataFor(CompletedContinuation, 'CompletedContinuation', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(BeforeResumeCancelHandler, 'BeforeResumeCancelHandler', classMeta, CancelHandler, undefined, undefined, undefined, []);
  setMetadataFor(InvokeOnCancel, 'InvokeOnCancel', classMeta, CancelHandler, undefined, undefined, undefined, []);
  setMetadataFor($awaitCOROUTINE$1, '$awaitCOROUTINE$1', classMeta, CoroutineImpl, undefined, undefined, undefined, []);
  setMetadataFor(CompletableDeferredImpl, 'CompletableDeferredImpl', classMeta, JobSupport, [JobSupport, Job], undefined, undefined, [0]);
  setMetadataFor(CompletableJob, 'CompletableJob', interfaceMeta, undefined, [Job], undefined, undefined, [0]);
  setMetadataFor(CompletedExceptionally, 'CompletedExceptionally', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CancelledContinuation, 'CancelledContinuation', classMeta, CompletedExceptionally, undefined, undefined, undefined, []);
  setMetadataFor(CompletedWithCancellation, 'CompletedWithCancellation', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Key, 'Key', objectMeta, AbstractCoroutineContextKey, undefined, undefined, undefined, []);
  setMetadataFor(CoroutineDispatcher, 'CoroutineDispatcher', classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor], undefined, undefined, []);
  setMetadataFor(Key_0, 'Key', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Key_1, 'Key', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CoroutineName, 'CoroutineName', classMeta, AbstractCoroutineContextElement, undefined, undefined, undefined, []);
  setMetadataFor(GlobalScope, 'GlobalScope', objectMeta, undefined, [CoroutineScope], undefined, undefined, []);
  setMetadataFor(CoroutineStart, 'CoroutineStart', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(Delay, 'Delay', interfaceMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(EventLoop, 'EventLoop', classMeta, CoroutineDispatcher, undefined, undefined, undefined, []);
  setMetadataFor(ThreadLocalEventLoop, 'ThreadLocalEventLoop', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CompletionHandlerException, 'CompletionHandlerException', classMeta, RuntimeException, undefined, undefined, undefined, []);
  setMetadataFor(CoroutinesInternalError, 'CoroutinesInternalError', classMeta, Error_0, undefined, undefined, undefined, []);
  setMetadataFor(Key_2, 'Key', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ChildHandle, 'ChildHandle', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(NonDisposableHandle, 'NonDisposableHandle', objectMeta, undefined, [ChildHandle], undefined, undefined, []);
  setMetadataFor(Incomplete, 'Incomplete', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Empty, 'Empty', classMeta, undefined, [Incomplete], undefined, undefined, []);
  setMetadataFor(LinkedListNode, 'LinkedListNode', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(LinkedListHead, 'LinkedListHead', classMeta, LinkedListNode, undefined, undefined, undefined, []);
  setMetadataFor(NodeList, 'NodeList', classMeta, LinkedListHead, [LinkedListHead, Incomplete], undefined, undefined, []);
  setMetadataFor(CompletionHandlerBase, 'CompletionHandlerBase', classMeta, LinkedListNode, undefined, undefined, undefined, []);
  setMetadataFor(JobNode, 'JobNode', classMeta, CompletionHandlerBase, [CompletionHandlerBase, Incomplete], undefined, undefined, []);
  setMetadataFor(Finishing, 'Finishing', classMeta, undefined, [Incomplete], undefined, undefined, []);
  setMetadataFor(ChildCompletion, 'ChildCompletion', classMeta, JobNode, undefined, undefined, undefined, []);
  setMetadataFor(AwaitContinuation, 'AwaitContinuation', classMeta, CancellableContinuationImpl, undefined, undefined, undefined, []);
  setMetadataFor(JobCancellingNode, 'JobCancellingNode', classMeta, JobNode, undefined, undefined, undefined, []);
  setMetadataFor(InactiveNodeList, 'InactiveNodeList', classMeta, undefined, [Incomplete], undefined, undefined, []);
  setMetadataFor(ChildHandleNode, 'ChildHandleNode', classMeta, JobCancellingNode, [JobCancellingNode, ChildHandle], undefined, undefined, []);
  setMetadataFor(InvokeOnCancelling, 'InvokeOnCancelling', classMeta, JobCancellingNode, undefined, undefined, undefined, []);
  setMetadataFor(InvokeOnCompletion, 'InvokeOnCompletion', classMeta, JobNode, undefined, undefined, undefined, []);
  setMetadataFor(ResumeOnCompletion, 'ResumeOnCompletion', classMeta, JobNode, undefined, undefined, undefined, []);
  setMetadataFor(ResumeAwaitOnCompletion, 'ResumeAwaitOnCompletion', classMeta, JobNode, undefined, undefined, undefined, []);
  setMetadataFor(IncompleteStateBox, 'IncompleteStateBox', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ChildContinuation, 'ChildContinuation', classMeta, JobCancellingNode, undefined, undefined, undefined, []);
  setMetadataFor(JobImpl, 'JobImpl', classMeta, JobSupport, [JobSupport, CompletableJob], undefined, undefined, [0]);
  setMetadataFor(MainCoroutineDispatcher, 'MainCoroutineDispatcher', classMeta, CoroutineDispatcher, undefined, undefined, undefined, []);
  setMetadataFor(SupervisorJobImpl, 'SupervisorJobImpl', classMeta, JobImpl, undefined, undefined, undefined, [0]);
  setMetadataFor(TimeoutCancellationException, 'TimeoutCancellationException', classMeta, CancellationException, undefined, undefined, undefined, []);
  setMetadataFor(Unconfined, 'Unconfined', objectMeta, CoroutineDispatcher, undefined, undefined, undefined, []);
  setMetadataFor(Key_3, 'Key', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(RemoveReceiveOnCancel, 'RemoveReceiveOnCancel', classMeta, BeforeResumeCancelHandler, undefined, undefined, undefined, []);
  setMetadataFor(Itr, 'Itr', classMeta, undefined, undefined, undefined, undefined, [0]);
  setMetadataFor(ReceiveOrClosed, 'ReceiveOrClosed', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Receive, 'Receive', classMeta, LinkedListNode, [LinkedListNode, ReceiveOrClosed], undefined, undefined, []);
  setMetadataFor(ReceiveHasNext, 'ReceiveHasNext', classMeta, Receive, undefined, undefined, undefined, []);
  function close$default(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return $handler == null ? this.ms(cause) : $handler(cause);
  }
  setMetadataFor(SendChannel, 'SendChannel', interfaceMeta, undefined, undefined, undefined, undefined, [1]);
  setMetadataFor(AbstractSendChannel, 'AbstractSendChannel', classMeta, undefined, [SendChannel], undefined, undefined, [1]);
  function cancel$default_0(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    var tmp;
    if ($handler == null) {
      this.bh(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(cause);
    }
    return tmp;
  }
  setMetadataFor(ReceiveChannel, 'ReceiveChannel', interfaceMeta, undefined, undefined, undefined, undefined, [0]);
  setMetadataFor(AbstractChannel, 'AbstractChannel', classMeta, AbstractSendChannel, [AbstractSendChannel, SendChannel, ReceiveChannel], undefined, undefined, [0, 1]);
  setMetadataFor(Send, 'Send', classMeta, LinkedListNode, undefined, undefined, undefined, []);
  setMetadataFor(SendBuffered, 'SendBuffered', classMeta, Send, undefined, undefined, undefined, []);
  setMetadataFor(Closed, 'Closed', classMeta, Send, [Send, ReceiveOrClosed], undefined, undefined, []);
  setMetadataFor(ArrayChannel, 'ArrayChannel', classMeta, AbstractChannel, undefined, undefined, undefined, [0, 1]);
  setMetadataFor(BufferOverflow, 'BufferOverflow', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(Factory, 'Factory', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Failed, 'Failed', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Closed_0, 'Closed', classMeta, Failed, undefined, undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ClosedReceiveChannelException, 'ClosedReceiveChannelException', classMeta, NoSuchElementException, undefined, undefined, undefined, []);
  setMetadataFor(ClosedSendChannelException, 'ClosedSendChannelException', classMeta, IllegalStateException, undefined, undefined, undefined, []);
  setMetadataFor(ConflatedChannel, 'ConflatedChannel', classMeta, AbstractChannel, undefined, undefined, undefined, [0, 1]);
  setMetadataFor(LinkedListChannel, 'LinkedListChannel', classMeta, AbstractChannel, undefined, undefined, undefined, [0, 1]);
  setMetadataFor(RendezvousChannel, 'RendezvousChannel', classMeta, AbstractChannel, undefined, undefined, undefined, [0, 1]);
  setMetadataFor(ArrayQueue, 'ArrayQueue', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(OpDescriptor, 'OpDescriptor', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DispatchedContinuation, 'DispatchedContinuation', classMeta, DispatchedTask, [DispatchedTask, Continuation], undefined, undefined, []);
  setMetadataFor(UndeliveredElementException, 'UndeliveredElementException', classMeta, RuntimeException, undefined, undefined, undefined, []);
  setMetadataFor(ContextScope, 'ContextScope', classMeta, undefined, [CoroutineScope], undefined, undefined, []);
  setMetadataFor(Symbol, 'Symbol', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CloseableCoroutineDispatcher, 'CloseableCoroutineDispatcher', classMeta, CoroutineDispatcher, undefined, undefined, undefined, []);
  setMetadataFor(Dispatchers, 'Dispatchers', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(JsMainDispatcher, 'JsMainDispatcher', classMeta, MainCoroutineDispatcher, undefined, undefined, undefined, []);
  setMetadataFor(UnconfinedEventLoop, 'UnconfinedEventLoop', classMeta, EventLoop, undefined, undefined, undefined, []);
  setMetadataFor(JobCancellationException, 'JobCancellationException', classMeta, CancellationException, undefined, undefined, undefined, []);
  setMetadataFor(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], undefined, undefined, [1]);
  setMetadataFor(NodeDispatcher, 'NodeDispatcher', objectMeta, SetTimeoutBasedDispatcher, undefined, undefined, undefined, [1]);
  setMetadataFor(SetTimeoutDispatcher, 'SetTimeoutDispatcher', objectMeta, SetTimeoutBasedDispatcher, undefined, undefined, undefined, [1]);
  setMetadataFor(MessageQueue, 'MessageQueue', classMeta, ArrayQueue, undefined, undefined, undefined, []);
  setMetadataFor(ScheduledMessageQueue, 'ScheduledMessageQueue', classMeta, MessageQueue, undefined, undefined, undefined, []);
  setMetadataFor(ClearTimeout, 'ClearTimeout', classMeta, CancelHandler, undefined, undefined, undefined, []);
  setMetadataFor(WindowDispatcher, 'WindowDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], undefined, undefined, [1]);
  setMetadataFor(WindowMessageQueue, 'WindowMessageQueue', classMeta, MessageQueue, undefined, undefined, undefined, []);
  setMetadataFor(NoOpLock, 'NoOpLock', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CommonThreadLocal, 'CommonThreadLocal', classMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.rf(parentContext.i3(Key_getInstance_3()));
    }
    this.uf_1 = parentContext.p3(this);
  }
  AbstractCoroutine.prototype.e3 = function () {
    return this.uf_1;
  };
  AbstractCoroutine.prototype.vf = function () {
    return this.uf_1;
  };
  AbstractCoroutine.prototype.wf = function () {
    return JobSupport.prototype.wf.call(this);
  };
  AbstractCoroutine.prototype.xf = function (value) {
  };
  AbstractCoroutine.prototype.yf = function (cause, handled) {
  };
  AbstractCoroutine.prototype.zf = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  AbstractCoroutine.prototype.ag = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.yf(state.bg_1, state.dg());
    } else {
      this.xf((state == null ? true : isObject(state)) ? state : THROW_CCE());
    }
  };
  AbstractCoroutine.prototype.f3 = function (result) {
    var state = this.eg(toState$default(result, null, 1, null));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_getInstance();
    this.fg(state);
  };
  AbstractCoroutine.prototype.fg = function (state) {
    return this.gg(state);
  };
  AbstractCoroutine.prototype.hg = function (exception) {
    handleCoroutineException(this.uf_1, exception);
  };
  AbstractCoroutine.prototype.ig = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.uf_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return JobSupport.prototype.ig.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + JobSupport.prototype.ig.call(this);
  };
  AbstractCoroutine.prototype.jg = function (start, receiver, block) {
    start.mg(block, receiver, this);
  };
  function launch(_this__u8e3s4, context, start, block) {
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.oh() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.jg(start, coroutine, block);
    return coroutine;
  }
  function launch$default(_this__u8e3s4, context, start, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    return launch(_this__u8e3s4, context, start, block);
  }
  function async(_this__u8e3s4, context, start, block) {
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.oh() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.jg(start, coroutine, block);
    return coroutine;
  }
  function async$default(_this__u8e3s4, context, start, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    return async(_this__u8e3s4, context, start, block);
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  StandaloneCoroutine.prototype.mh = function (exception) {
    handleCoroutineException(this.uf_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.vh_1 = createCoroutineUnintercepted(block, this, this);
  }
  LazyStandaloneCoroutine.prototype.sg = function () {
    startCoroutineCancellable_0(this.vh_1, this);
  };
  function $awaitCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ei_1 = _this__u8e3s4;
  }
  $awaitCOROUTINE$0.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 2;
            this.oe_1 = 1;
            suspendResult = this.ei_1.fi(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : isObject(suspendResult)) ? suspendResult : THROW_CCE();
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
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  DeferredCoroutine.prototype.ji = function ($cont) {
    var tmp = new $awaitCOROUTINE$0(this, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.ni_1 = createCoroutineUnintercepted(block, this, this);
  }
  LazyDeferredCoroutine.prototype.sg = function () {
    startCoroutineCancellable_0(this.ni_1, this);
  };
  function CancellableContinuation() {
  }
  function disposeOnCancellation(_this__u8e3s4, handle) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new DisposeOnCancel(handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return _this__u8e3s4.ui(tmp$ret$1);
  }
  function DisposeOnCancel(handle) {
    CancelHandler.call(this);
    this.xi_1 = handle;
  }
  DisposeOnCancel.prototype.yi = function (cause) {
    return this.xi_1.zi();
  };
  DisposeOnCancel.prototype.invoke = function (cause) {
    return this.yi(cause);
  };
  DisposeOnCancel.prototype.toString = function () {
    return 'DisposeOnCancel[' + this.xi_1 + ']';
  };
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE());
    }
    var tmp0_safe_receiver = delegate.gj();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.getOrCreateCancellableContinuation.<anonymous>' call
      tmp$ret$0 = tmp0_safe_receiver.nj();
      if (tmp$ret$0) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp$ret$1 = tmp_0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE_REUSABLE());
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function get_RESUME_TOKEN() {
    init_properties_CancellableContinuationImpl_kt_jcze1b();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.pg();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.pj_1)) {
      var tmp_0 = $this.ij_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).oj();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.ij_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.qj(cause);
  }
  function callCancelHandler($this, handler, cause) {
    var tmp;
    try {
      invokeIt(handler, cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        handleCoroutineException($this.e3(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, $p));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.kj_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this.kj_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already suspended');
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.kj_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this.kj_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.e3().i3(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ChildContinuation($this);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var handle = parent.yg(true, false, tmp$ret$1, 2, null);
    $this.mj_1 = handle;
    return handle;
  }
  function releaseClaimedReusableContinuation($this) {
    var tmp = $this.ij_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.rj($this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    $this.sj();
    $this.tj(cancellationCause);
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var tmp0_error = "It's prohibited to register multiple handlers, tried to register " + handler + ', already has ' + toString(state);
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      tmp = new InvokeOnCancel(handler);
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume($this))
      return Unit_getInstance();
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          var tmp_2;
          if (state instanceof CancelHandler) {
            tmp_2 = !(state instanceof BeforeResumeCancelHandler);
          } else {
            tmp_2 = false;
          }
          tmp_1 = tmp_2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          var tmp_3 = state instanceof CancelHandler ? state : null;
          tmp = CompletedContinuation_init_$Create$(proposedUpdate, tmp_3, onCancellation, idempotent, null, 16, null);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.lj_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
          var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this.lj_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_getInstance();
        } else {
          if (tmp0_subject instanceof CancelledContinuation) {
            if (tmp1__anonymous__uwfjfc.yj()) {
              var tmp1_safe_receiver = onCancellation;
              if (tmp1_safe_receiver == null)
                null;
              else {
                var tmp$ret$1;
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                $this.uj(tmp1_safe_receiver, tmp1__anonymous__uwfjfc.bg_1);
                tmp$ret$1 = Unit_getInstance();
              }
              return Unit_getInstance();
            }
          }
        }
        alreadyResumedError($this, proposedUpdate);
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      onCancellation = null;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.lj_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResumeImpl.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
          var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, $this.pj_1, onCancellation, idempotent);
          if (!$this.lj_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          detachChildIfNonResuable($this);
          return get_RESUME_TOKEN();
        } else {
          if (tmp0_subject instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) ? tmp1__anonymous__uwfjfc.ck_1 === idempotent : false) {
              // Inline function 'kotlinx.coroutines.assert' call
              tmp = get_RESUME_TOKEN();
            } else {
              tmp = null;
            }
            return tmp;
          } else {
            return null;
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var tmp0_error = 'Already resumed, but proposed with update ' + toString(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.sj();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.ij_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.jj_1 = this.ij_1.e3();
    this.kj_1 = atomic$int$1(0);
    this.lj_1 = atomic$ref$1(Active_getInstance());
    this.mj_1 = null;
  }
  CancellableContinuationImpl.prototype.ek = function () {
    return this.ij_1;
  };
  CancellableContinuationImpl.prototype.e3 = function () {
    return this.jj_1;
  };
  CancellableContinuationImpl.prototype.pg = function () {
    return this.lj_1.kotlinx$atomicfu$value;
  };
  CancellableContinuationImpl.prototype.qg = function () {
    var tmp = this.pg();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  CancellableContinuationImpl.prototype.oi = function () {
    var tmp = this.pg();
    return tmp instanceof CancelledContinuation;
  };
  CancellableContinuationImpl.prototype.fk = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.qg()) {
      handle.zi();
      this.mj_1 = NonDisposableHandle_getInstance();
    }
  };
  CancellableContinuationImpl.prototype.nj = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this.lj_1.kotlinx$atomicfu$value;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.ck_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.sj();
      return false;
    }
    this.kj_1.kotlinx$atomicfu$value = 0;
    this.lj_1.kotlinx$atomicfu$value = Active_getInstance();
    return true;
  };
  CancellableContinuationImpl.prototype.gk = function () {
    return this.pg();
  };
  CancellableContinuationImpl.prototype.hk = function (takenState, cause) {
    var tmp0_loop = this.lj_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        throw IllegalStateException_init_$Create$('Not completed');
      } else {
        if (tmp0_subject instanceof CompletedExceptionally)
          return Unit_getInstance();
        else {
          if (tmp0_subject instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            var tmp0_check = !tmp1__anonymous__uwfjfc.ik();
            // Inline function 'kotlin.contracts.contract' call
            if (!tmp0_check) {
              var tmp$ret$0;
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              tmp$ret$0 = 'Must be called at most once';
              var message = tmp$ret$0;
              throw IllegalStateException_init_$Create$(toString_0(message));
            }
            var update = tmp1__anonymous__uwfjfc.jk(null, null, null, null, cause, 15, null);
            if (this.lj_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
              tmp1__anonymous__uwfjfc.kk(this, cause);
              return Unit_getInstance();
            }
          } else {
            if (this.lj_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, CompletedContinuation_init_$Create$(tmp1__anonymous__uwfjfc, null, null, null, cause, 14, null))) {
              return Unit_getInstance();
            }
          }
        }
      }
    }
    return Unit_getInstance();
  };
  CancellableContinuationImpl.prototype.tj = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.lj_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancel.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
        if (!(!(tmp1__anonymous__uwfjfc == null) ? isInterface(tmp1__anonymous__uwfjfc, NotCompleted) : false))
          return false;
        var update = new CancelledContinuation(this, cause, tmp1__anonymous__uwfjfc instanceof CancelHandler);
        if (!this.lj_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }
        var tmp0_safe_receiver = tmp1__anonymous__uwfjfc instanceof CancelHandler ? tmp1__anonymous__uwfjfc : null;
        if (tmp0_safe_receiver == null)
          null;
        else {
          var tmp$ret$1;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          this.lk(tmp0_safe_receiver, cause);
          tmp$ret$1 = Unit_getInstance();
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.pj_1);
        return true;
      }
    }
  };
  CancellableContinuationImpl.prototype.mk = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.tj(cause);
    detachChildIfNonResuable(this);
  };
  CancellableContinuationImpl.prototype.lk = function (handler, cause) {
    var tmp;
    try {
      handler.invoke(cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        handleCoroutineException(this.e3(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, $p));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.uj = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineException(this.e3(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, $p));
      } else {
        throw $p;
      }
    }
  };
  CancellableContinuationImpl.prototype.nk = function (parent) {
    return parent.tg();
  };
  CancellableContinuationImpl.prototype.ok = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend(this)) {
      if (this.mj_1 == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        releaseClaimedReusableContinuation(this);
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      releaseClaimedReusableContinuation(this);
    }
    var state = this.pg();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.bg_1, this);
    if (get_isCancellableMode(this.pj_1)) {
      var job = this.e3().i3(Key_getInstance_3());
      if (!(job == null) ? !job.wf() : false) {
        var cause = job.tg();
        this.hk(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.pk(state);
  };
  CancellableContinuationImpl.prototype.f3 = function (result) {
    var tmp = toState(result, this);
    var tmp_0 = this.pj_1;
    return resumeImpl$default(this, tmp, tmp_0, null, 8, null);
  };
  CancellableContinuationImpl.prototype.wi = function (value, onCancellation) {
    return resumeImpl(this, value, this.pj_1, onCancellation);
  };
  CancellableContinuationImpl.prototype.ui = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.lj_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (tmp0_subject instanceof Active) {
        if (this.lj_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, cancelHandler))
          return Unit_getInstance();
      } else {
        if (tmp0_subject instanceof CancelHandler) {
          multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
        } else {
          if (tmp0_subject instanceof CompletedExceptionally) {
            if (!tmp1__anonymous__uwfjfc.qk()) {
              multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
            }
            if (tmp1__anonymous__uwfjfc instanceof CancelledContinuation) {
              var tmp1_safe_receiver = tmp1__anonymous__uwfjfc instanceof CompletedExceptionally ? tmp1__anonymous__uwfjfc : null;
              callCancelHandler(this, handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.bg_1);
            }
            return Unit_getInstance();
          } else {
            if (tmp0_subject instanceof CompletedContinuation) {
              if (!(tmp1__anonymous__uwfjfc.ak_1 == null)) {
                multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
              }
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              if (tmp1__anonymous__uwfjfc.ik()) {
                callCancelHandler(this, handler, tmp1__anonymous__uwfjfc.dk_1);
                return Unit_getInstance();
              }
              var update = tmp1__anonymous__uwfjfc.jk(null, cancelHandler, null, null, null, 29, null);
              if (this.lj_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update))
                return Unit_getInstance();
            } else {
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              var update_0 = CompletedContinuation_init_$Create$(tmp1__anonymous__uwfjfc, cancelHandler, null, null, null, 28, null);
              if (this.lj_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update_0))
                return Unit_getInstance();
            }
          }
        }
      }
    }
  };
  CancellableContinuationImpl.prototype.sj = function () {
    var tmp0_elvis_lhs = this.mj_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.zi();
    this.mj_1 = NonDisposableHandle_getInstance();
  };
  CancellableContinuationImpl.prototype.pi = function (value, idempotent) {
    return tryResumeImpl(this, value, idempotent, null);
  };
  CancellableContinuationImpl.prototype.ri = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  CancellableContinuationImpl.prototype.si = function (exception) {
    return tryResumeImpl(this, CompletedExceptionally_init_$Create$(exception, false, 2, null), null, null);
  };
  CancellableContinuationImpl.prototype.ti = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.pj_1);
  };
  CancellableContinuationImpl.prototype.vi = function (_this__u8e3s4, value) {
    var tmp = this.ij_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    var tmp0_safe_receiver = dc;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bj_1) === _this__u8e3s4) {
      tmp_0 = get_MODE_UNDISPATCHED();
    } else {
      tmp_0 = this.pj_1;
    }
    var tmp_1 = tmp_0;
    resumeImpl$default(this, value, tmp_1, null, 8, null);
  };
  CancellableContinuationImpl.prototype.pk = function (state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof CompletedContinuation) {
      var tmp_0 = state.zj_1;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.rk = function (state) {
    var tmp0_safe_receiver = DispatchedTask.prototype.rk.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp$ret$0 = recoverStackTrace(tmp0_safe_receiver, this.ij_1);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.toString = function () {
    return this.ig() + '(' + toDebugString(this.ij_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  CancellableContinuationImpl.prototype.ig = function () {
    return 'CancellableContinuation';
  };
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  function Active() {
    Active_instance = this;
  }
  Active.prototype.toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function NotCompleted() {
  }
  function CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cancelHandler = null;
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    if (!(($mask0 & 8) === 0))
      idempotentResume = null;
    if (!(($mask0 & 16) === 0))
      cancelCause = null;
    CompletedContinuation.call($this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
    return $this;
  }
  function CompletedContinuation_init_$Create$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker) {
    return CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, Object.create(CompletedContinuation.prototype));
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    this.zj_1 = result;
    this.ak_1 = cancelHandler;
    this.bk_1 = onCancellation;
    this.ck_1 = idempotentResume;
    this.dk_1 = cancelCause;
  }
  CompletedContinuation.prototype.ik = function () {
    return !(this.dk_1 == null);
  };
  CompletedContinuation.prototype.kk = function (cont, cause) {
    var tmp0_safe_receiver = this.ak_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.lk(tmp0_safe_receiver, cause);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = this.bk_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.uj(tmp1_safe_receiver, cause);
      tmp$ret$1 = Unit_getInstance();
    }
  };
  CompletedContinuation.prototype.uk = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.jk = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      result = this.zj_1;
    if (!(($mask0 & 2) === 0))
      cancelHandler = this.ak_1;
    if (!(($mask0 & 4) === 0))
      onCancellation = this.bk_1;
    if (!(($mask0 & 8) === 0))
      idempotentResume = this.ck_1;
    if (!(($mask0 & 16) === 0))
      cancelCause = this.dk_1;
    return this.uk(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.toString = function () {
    return 'CompletedContinuation(result=' + toString(this.zj_1) + ', cancelHandler=' + this.ak_1 + ', onCancellation=' + this.bk_1 + ', idempotentResume=' + toString(this.ck_1) + ', cancelCause=' + this.dk_1 + ')';
  };
  CompletedContinuation.prototype.hashCode = function () {
    var result = this.zj_1 == null ? 0 : hashCode(this.zj_1);
    result = imul(result, 31) + (this.ak_1 == null ? 0 : hashCode(this.ak_1)) | 0;
    result = imul(result, 31) + (this.bk_1 == null ? 0 : hashCode(this.bk_1)) | 0;
    result = imul(result, 31) + (this.ck_1 == null ? 0 : hashCode(this.ck_1)) | 0;
    result = imul(result, 31) + (this.dk_1 == null ? 0 : hashCode(this.dk_1)) | 0;
    return result;
  };
  CompletedContinuation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.zj_1, tmp0_other_with_cast.zj_1))
      return false;
    if (!equals(this.ak_1, tmp0_other_with_cast.ak_1))
      return false;
    if (!equals(this.bk_1, tmp0_other_with_cast.bk_1))
      return false;
    if (!equals(this.ck_1, tmp0_other_with_cast.ck_1))
      return false;
    if (!equals(this.dk_1, tmp0_other_with_cast.dk_1))
      return false;
    return true;
  };
  function BeforeResumeCancelHandler() {
    CancelHandler.call(this);
  }
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.vk_1 = handler;
  }
  InvokeOnCancel.prototype.yi = function (cause) {
    this.vk_1(cause);
  };
  InvokeOnCancel.prototype.invoke = function (cause) {
    return this.yi(cause);
  };
  InvokeOnCancel.prototype.toString = function () {
    return 'InvokeOnCancel[' + get_classSimpleName(this.vk_1) + '@' + get_hexAddress(this) + ']';
  };
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function init_properties_CancellableContinuationImpl_kt_jcze1b() {
    if (properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
    } else {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableDeferred(parent) {
    return new CompletableDeferredImpl(parent);
  }
  function CompletableDeferred$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return CompletableDeferred(parent);
  }
  function $awaitCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.el_1 = _this__u8e3s4;
  }
  $awaitCOROUTINE$1.prototype.xe = function () {
    var suspendResult = this.qe_1;
    $sm: do
      try {
        var tmp = this.oe_1;
        switch (tmp) {
          case 0:
            this.pe_1 = 2;
            this.oe_1 = 1;
            suspendResult = this.el_1.fi(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : isObject(suspendResult)) ? suspendResult : THROW_CCE();
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
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.rf(parent);
  }
  CompletableDeferredImpl.prototype.ah = function () {
    return true;
  };
  CompletableDeferredImpl.prototype.ji = function ($cont) {
    var tmp = new $awaitCOROUTINE$1(this, $cont);
    tmp.qe_1 = Unit_getInstance();
    tmp.re_1 = null;
    return tmp.xe();
  };
  CompletableDeferredImpl.prototype.hl = function (value) {
    return this.il(value);
  };
  CompletableDeferredImpl.prototype.jl = function (exception) {
    return this.il(CompletedExceptionally_init_$Create$(exception, false, 2, null));
  };
  function CompletableJob() {
  }
  function CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      handled = false;
    CompletedExceptionally.call($this, cause, handled);
    return $this;
  }
  function CompletedExceptionally_init_$Create$(cause, handled, $mask0, $marker) {
    return CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, Object.create(CompletedExceptionally.prototype));
  }
  function CompletedExceptionally(cause, handled) {
    this.bg_1 = cause;
    this.cg_1 = atomic$boolean$1(handled);
  }
  CompletedExceptionally.prototype.dg = function () {
    return this.cg_1.kotlinx$atomicfu$value;
  };
  CompletedExceptionally.prototype.qk = function () {
    return this.cg_1.atomicfu$compareAndSet(false, true);
  };
  CompletedExceptionally.prototype.toString = function () {
    return get_classSimpleName(this) + '[' + this.bg_1 + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    var tmp0_elvis_lhs = cause;
    CompletedExceptionally.call(this, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Continuation ' + continuation + ' was cancelled normally') : tmp0_elvis_lhs, handled);
    this.xj_1 = atomic$boolean$1(false);
  }
  CancelledContinuation.prototype.yj = function () {
    return this.xj_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    var tmp$ret$2;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp$ret$0 = tmp0__anonymous__q1qw7t;
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_1 = recoverStackTrace(exception, caller);
      tmp$ret$1 = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    var tmp$ret$2;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp$ret$0 = !(onCancellation == null) ? new CompletedWithCancellation(tmp0__anonymous__q1qw7t, onCancellation) : tmp0__anonymous__q1qw7t;
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp$ret$1 = CompletedExceptionally_init_$Create$(exception, false, 2, null);
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2;
  }
  function toState$default(_this__u8e3s4, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancellation = null;
    return toState_0(_this__u8e3s4, onCancellation);
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.ml_1 = result;
    this.nl_1 = onCancellation;
  }
  CompletedWithCancellation.prototype.toString = function () {
    return 'CompletedWithCancellation(result=' + toString(this.ml_1) + ', onCancellation=' + this.nl_1 + ')';
  };
  CompletedWithCancellation.prototype.hashCode = function () {
    var result = this.ml_1 == null ? 0 : hashCode(this.ml_1);
    result = imul(result, 31) + hashCode(this.nl_1) | 0;
    return result;
  };
  CompletedWithCancellation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.ml_1, tmp0_other_with_cast.ml_1))
      return false;
    if (!equals(this.nl_1, tmp0_other_with_cast.nl_1))
      return false;
    return true;
  };
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  CoroutineDispatcher.prototype.pl = function (context) {
    return true;
  };
  CoroutineDispatcher.prototype.g3 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  CoroutineDispatcher.prototype.h3 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.rl();
  };
  CoroutineDispatcher.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.i3(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.sl(context, exception);
        return Unit_getInstance();
      }
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineExceptionImpl(context, handlerException(exception, $p));
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function Key_0() {
    Key_instance_0 = this;
  }
  var Key_instance_0;
  function Key_getInstance_1() {
    if (Key_instance_0 == null)
      new Key_0();
    return Key_instance_0;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.handlerException.<anonymous>' call
    // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function Key_1() {
    Key_instance_1 = this;
  }
  var Key_instance_1;
  function Key_getInstance_2() {
    if (Key_instance_1 == null)
      new Key_1();
    return Key_instance_1;
  }
  function CoroutineName(name) {
    Key_getInstance_2();
    AbstractCoroutineContextElement.call(this, Key_getInstance_2());
    this.ul_1 = name;
  }
  CoroutineName.prototype.toString = function () {
    return 'CoroutineName(' + this.ul_1 + ')';
  };
  CoroutineName.prototype.hashCode = function () {
    return getStringHashCode(this.ul_1);
  };
  CoroutineName.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CoroutineName))
      return false;
    var tmp0_other_with_cast = other instanceof CoroutineName ? other : THROW_CCE();
    if (!(this.ul_1 === tmp0_other_with_cast.ul_1))
      return false;
    return true;
  };
  function CoroutineScope() {
  }
  function CoroutineScope_0(context) {
    var tmp;
    if (!(context.i3(Key_getInstance_3()) == null)) {
      tmp = context;
    } else {
      tmp = context.p3(Job$default(null, 1, null));
    }
    return new ContextScope(tmp);
  }
  function cancel(_this__u8e3s4, cause) {
    var tmp0_elvis_lhs = _this__u8e3s4.vf().i3(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'Scope cannot be cancelled because it does not have a job: ' + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.bh(cause);
  }
  function cancel$default_1(_this__u8e3s4, cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return cancel(_this__u8e3s4, cause);
  }
  function cancel_0(_this__u8e3s4, message, cause) {
    return cancel(_this__u8e3s4, CancellationException_init_$Create$_0(message, cause));
  }
  function GlobalScope() {
    GlobalScope_instance = this;
  }
  GlobalScope.prototype.vf = function () {
    return EmptyCoroutineContext_getInstance();
  };
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    if (GlobalScope_instance == null)
      new GlobalScope();
    return GlobalScope_instance;
  }
  function MainScope() {
    return new ContextScope(SupervisorJob$default(null, 1, null).p3(Dispatchers_getInstance().zl()));
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_getInstance();
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  CoroutineStart.prototype.mg = function (block, receiver, completion) {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.v3_1;
    var tmp;
    switch (tmp0) {
      case 0:
        startCoroutineCancellable$default(block, receiver, completion, null, 4, null);
        tmp = Unit_getInstance();
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 1:
        tmp = Unit_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  CoroutineStart.prototype.oh = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function Delay() {
  }
  function delay(timeMillis, $cont) {
    if (timeMillis.s(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.fk();
    // Inline function 'kotlinx.coroutines.delay.<anonymous>' call
    Companion_getInstance();
    if (timeMillis.s(new Long(-1, 2147483647)) < 0) {
      get_delay(cancellable.e3()).am(timeMillis, cancellable);
    }
    tmp$ret$0 = cancellable.ok();
    return tmp$ret$0;
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.i3(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.cm_1 = new Long(0, 0);
    this.dm_1 = false;
    this.em_1 = null;
  }
  EventLoop.prototype.fm = function () {
    var tmp0_elvis_lhs = this.em_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.jm();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.sk();
    return true;
  };
  EventLoop.prototype.km = function (task) {
    var tmp0_elvis_lhs = this.em_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new ArrayQueue();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.em_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.lm(task);
  };
  EventLoop.prototype.mm = function () {
    return this.cm_1.s(delta(this, true)) >= 0;
  };
  EventLoop.prototype.nm = function () {
    var tmp0_safe_receiver = this.em_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.om();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  EventLoop.prototype.pm = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.cm_1 = tmp0_this.cm_1.f5(delta(this, unconfined));
    if (!unconfined)
      this.dm_1 = true;
  };
  EventLoop.prototype.qm = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.cm_1 = tmp0_this.cm_1.g5(delta(this, unconfined));
    if (this.cm_1.s(new Long(0, 0)) > 0)
      return Unit_getInstance();
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.dm_1) {
      this.rm();
    }
  };
  EventLoop.prototype.rm = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.sm_1 = new CommonThreadLocal();
  }
  ThreadLocalEventLoop.prototype.tm = function () {
    var tmp0_elvis_lhs = this.sm_1.vm();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = createEventLoop();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().sm_1.wm(tmp0_also);
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function Key_2() {
    Key_instance_2 = this;
  }
  var Key_instance_2;
  function Key_getInstance_3() {
    if (Key_instance_2 == null)
      new Key_2();
    return Key_instance_2;
  }
  function Job() {
  }
  function ParentJob() {
  }
  function ChildHandle() {
  }
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  NonDisposableHandle.prototype.zi = function () {
  };
  NonDisposableHandle.prototype.fh = function (cause) {
    return false;
  };
  NonDisposableHandle.prototype.toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.i3(Key_getInstance_3());
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.wf())
      throw _this__u8e3s4.tg();
  }
  function Job_0(parent) {
    return new JobImpl(parent);
  }
  function Job$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return Job_0(parent);
  }
  function cancel_1(_this__u8e3s4, message, cause) {
    return _this__u8e3s4.bh(CancellationException_init_$Create$_0(message, cause));
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.i3(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = "Current context doesn't contain Job in it: " + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancel_2(_this__u8e3s4, cause) {
    var tmp0_safe_receiver = _this__u8e3s4.i3(Key_getInstance_3());
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.bh(cause);
    }
  }
  function get_COMPLETING_ALREADY() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    init_properties_JobSupport_kt_iaxwag();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    init_properties_JobSupport_kt_iaxwag();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    init_properties_JobSupport_kt_iaxwag();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    init_properties_JobSupport_kt_iaxwag();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.xm_1 = isActive;
  }
  Empty.prototype.wf = function () {
    return this.xm_1;
  };
  Empty.prototype.ym = function () {
    return null;
  };
  Empty.prototype.toString = function () {
    return 'Empty{' + (this.xm_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LinkedListHead.call(this);
  }
  NodeList.prototype.wf = function () {
    return true;
  };
  NodeList.prototype.ym = function () {
    return this;
  };
  NodeList.prototype.cn = function (state) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    tmp0_apply.wc('List{');
    tmp0_apply.wc(state);
    tmp0_apply.wc('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this.dn_1;
    while (!equals(cur, this)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        if (first)
          first = false;
        else {
          tmp0_apply.wc(', ');
        }
        tmp0_apply.vc(tmp0__anonymous__q1qw7t);
      }
      cur = cur.dn_1;
    }
    tmp0_apply.wc(']');
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  NodeList.prototype.toString = function () {
    return get_DEBUG() ? this.cn('Active') : LinkedListHead.prototype.toString.call(this);
  };
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  JobNode.prototype.rn = function () {
    var tmp = this.qn_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  JobNode.prototype.wf = function () {
    return true;
  };
  JobNode.prototype.ym = function () {
    return null;
  };
  JobNode.prototype.zi = function () {
    return this.rn().zg(this);
  };
  JobNode.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.rn()) + ']';
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.wn_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.wn_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bg_1;
    var wasCancelling = false;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.xn();
    var exceptions = state.yn(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    tmp$ret$0 = finalCause;
    tmp$ret$1 = tmp$ret$0;
    var finalException = tmp$ret$1;
    var tmp;
    if (finalException == null) {
      tmp = proposedUpdate;
    } else if (finalException === proposedException) {
      tmp = proposedUpdate;
    } else {
      tmp = CompletedExceptionally_init_$Create$(finalException, false, 2, null);
    }
    var finalState = tmp;
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.mh(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).qk();
      }
    }
    if (!wasCancelling) {
      $this.jh(finalException);
    }
    $this.ag(finalState);
    var casSuccess = $this.pf_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.i()) {
      if (state.xn()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        var tmp0_elvis_lhs = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.zf() : tmp0_elvis_lhs, null, $this);
        return tmp$ret$0;
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = exceptions.j();
      while (tmp0_iterator.k()) {
        var element = tmp0_iterator.l();
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
        tmp$ret$1 = !(element instanceof CancellationException);
        if (tmp$ret$1) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.h(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = exceptions.j();
        while (tmp0_iterator_0.k()) {
          var element_0 = tmp0_iterator_0.l();
          var tmp$ret$3;
          // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          tmp$ret$3 = tmp;
          if (tmp$ret$3) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.c() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions.c());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.j();
    while (tmp0_iterator.k()) {
      var exception = tmp0_iterator.l();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.a(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.pf_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.jh(null);
    $this.ag(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.og();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.zi();
      $this.ng(NonDisposableHandle_getInstance());
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.bg_1;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          $this.hg(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, $p));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.ym();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.jh(cause);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = list.dn_1;
    while (!equals(cur, list)) {
      if (cur instanceof JobCancellingNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        try {
          tmp0__anonymous__q1qw7t.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              var tmp$ret$0;
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp$ret$0 = tmp0_safe_receiver;
              tmp = tmp$ret$0;
            }
            var tmp1_elvis_lhs = tmp;
            if (tmp1_elvis_lhs == null) {
              var tmp$ret$1;
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, $p);
              tmp$ret$1 = Unit_getInstance();
            } else
              tmp1_elvis_lhs;
          } else {
            throw $p;
          }
        }
      }
      cur = cur.dn_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.hg(tmp0_safe_receiver_0);
      tmp$ret$2 = Unit_getInstance();
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.kh())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.og();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }
    return parent.fh(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = _this__u8e3s4.dn_1;
    while (!equals(cur, _this__u8e3s4)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        try {
          tmp0__anonymous__q1qw7t.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              var tmp$ret$0;
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp$ret$0 = tmp0_safe_receiver;
              tmp = tmp$ret$0;
            }
            var tmp1_elvis_lhs = tmp;
            if (tmp1_elvis_lhs == null) {
              var tmp$ret$1;
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, $p);
              tmp$ret$1 = Unit_getInstance();
            } else
              tmp1_elvis_lhs;
          } else {
            throw $p;
          }
        }
      }
      cur = cur.dn_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.hg(tmp0_safe_receiver_0);
      tmp$ret$2 = Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    var tmp0_subject = state;
    if (tmp0_subject instanceof Empty) {
      if (state.xm_1)
        return 0;
      if (!$this.pf_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.sg();
      return 1;
    } else {
      if (tmp0_subject instanceof InactiveNodeList) {
        if (!$this.pf_1.atomicfu$compareAndSet(state, state.zn_1))
          return -1;
        $this.sg();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.JobSupport.makeNode.<anonymous>' call
        // Inline function 'kotlinx.coroutines.assert' call
        tmp$ret$0 = tmp1_safe_receiver;
        tmp_0 = tmp$ret$0;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.qn_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.addLastAtomic.<anonymous>' call
      tmp$ret$0 = $this.pg() === expect;
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.kn(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.xm_1 ? list : new InactiveNodeList(list);
    $this.pf_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.sn(new NodeList());
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    tmp$ret$0 = state.dn_1;
    var list = tmp$ret$0;
    $this.pf_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.joinInternal.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $this.pg();
      if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false))
        return false;
      if (startInternal($this, tmp0__anonymous__q1qw7t) >= 0)
        return true;
    }
  }
  function joinSuspend($this, $cont) {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.fk();
    // Inline function 'kotlinx.coroutines.JobSupport.joinSuspend.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ResumeOnCompletion(cancellable);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    disposeOnCancellation(cancellable, $this.wg(tmp$ret$1));
    tmp$ret$2 = cancellable.ok();
    return tmp$ret$2;
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $this.pg();
      var tmp;
      if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (tmp0__anonymous__q1qw7t instanceof Finishing) {
          tmp_0 = tmp0__anonymous__q1qw7t.ao();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var tmp_1 = createCauseException($this, cause);
      var proposedUpdate = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
      var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp0_subject = cause;
    var tmp;
    if (tmp0_subject == null ? true : tmp0_subject instanceof Error) {
      var tmp1_elvis_lhs = cause;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        var tmp0_elvis_lhs = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.zf() : tmp0_elvis_lhs, null, $this);
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).hh();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        var tmp0__anonymous__q1qw7t = $this.pg();
        var tmp0_subject = tmp0__anonymous__q1qw7t;
        if (tmp0_subject instanceof Finishing) {
          var tmp$ret$4;
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          var tmp$ret$3;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (tmp0__anonymous__q1qw7t.bo())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp0__anonymous__q1qw7t.xn();
          if (!(cause == null) ? true : !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              var tmp$ret$0;
              // Inline function 'kotlin.also' call
              var tmp0_also = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also;
              tmp$ret$0 = tmp0_also;
              tmp = tmp$ret$0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp0__anonymous__q1qw7t.co(causeException);
          }
          var tmp$ret$2;
          // Inline function 'kotlin.takeIf' call
          var tmp1_takeIf = tmp0__anonymous__q1qw7t.do();
          // Inline function 'kotlin.contracts.contract' call
          var tmp_0;
          var tmp$ret$1;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$1 = !wasCancelling;
          if (tmp$ret$1) {
            tmp_0 = tmp1_takeIf;
          } else {
            tmp_0 = null;
          }
          tmp$ret$2 = tmp_0;
          tmp$ret$3 = tmp$ret$2;
          tmp$ret$4 = tmp$ret$3;
          var notifyRootCause = tmp$ret$4;
          var tmp1_safe_receiver = notifyRootCause;
          if (tmp1_safe_receiver == null)
            null;
          else {
            var tmp$ret$5;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            notifyCancelling($this, tmp0__anonymous__q1qw7t.tn_1, tmp1_safe_receiver);
            tmp$ret$5 = Unit_getInstance();
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              var tmp$ret$6;
              // Inline function 'kotlin.also' call
              var tmp0_also_0 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also_0;
              tmp$ret$6 = tmp0_also_0;
              tmp_1 = tmp$ret$6;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (tmp0__anonymous__q1qw7t.wf()) {
              if (tryMakeCancelling($this, tmp0__anonymous__q1qw7t, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, CompletedExceptionally_init_$Create$(causeException_0, false, 2, null));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var tmp1_error = 'Cannot happen in ' + toString(tmp0__anonymous__q1qw7t);
                throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
              } else if (finalState === get_COMPLETING_RETRY()) {
                tmp$ret$7 = Unit_getInstance();
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.ym();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_subject = state;
      var tmp_0;
      if (tmp0_subject instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (tmp0_subject instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var tmp0_error = 'State should have list: ' + state;
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.pf_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    if (finishing.ao())
      return get_COMPLETING_ALREADY();
    finishing.eo(true);
    if (!(finishing === state)) {
      if (!$this.pf_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.xn();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      finishing.co(tmp0_safe_receiver.bg_1);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp$ret$2;
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = finishing.do();
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
    tmp$ret$1 = !wasCancelling;
    if (tmp$ret$1) {
      tmp_0 = tmp0_takeIf;
    } else {
      tmp_0 = null;
    }
    tmp$ret$2 = tmp_0;
    notifyRootCause = tmp$ret$2;
    tmp$ret$3 = Unit_getInstance();
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      notifyCancelling($this, list, tmp2_safe_receiver);
      tmp$ret$4 = Unit_getInstance();
    }
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bg_1;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.ym();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var tmp = child_0.jo_1;
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        var tmp0__get_asHandler__gq3rkj = new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0);
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
        tmp$ret$1 = tmp$ret$0;
        var handle = tmp.yg(false, false, tmp$ret$1, 1, null);
        if (!(handle === NonDisposableHandle_getInstance()))
          return true;
        var tmp0_elvis_lhs = nextChild(child_0, $this_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp_0;
        var tmp0 = $this_0;
        var tmp1 = state_0;
        var tmp2 = nextChild_0;
        var tmp3 = proposedUpdate_0;
        $this_0 = tmp0;
        state_0 = tmp1;
        child_0 = tmp2;
        proposedUpdate_0 = tmp3;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.gg(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      var tmp0__get_isRemoved__hsfvgr = cur;
      tmp$ret$0 = tmp0__get_isRemoved__hsfvgr.fn_1;
      if (!tmp$ret$0) {
        break $l$loop;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp1__get_prevNode__b1i0ed = cur;
      tmp$ret$1 = tmp1__get_prevNode__b1i0ed.en_1;
      cur = tmp$ret$1;
    }
    $l$loop_0: while (true) {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
      var tmp2__get_nextNode__ek7k4a = cur;
      tmp$ret$2 = tmp2__get_nextNode__ek7k4a.dn_1;
      cur = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      var tmp3__get_isRemoved__lodk3s = cur;
      tmp$ret$3 = tmp3__get_isRemoved__lodk3s.fn_1;
      if (tmp$ret$3)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.xn() ? 'Cancelling' : state.ao() ? 'Completing' : 'Active';
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
        tmp = state.wf() ? 'Active' : 'New';
      } else {
        if (tmp0_subject instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this.tn_1 = list;
    this.un_1 = atomic$boolean$1(isCompleting);
    this.vn_1 = atomic$ref$1(rootCause);
    this.wn_1 = atomic$ref$1(null);
  }
  Finishing.prototype.ym = function () {
    return this.tn_1;
  };
  Finishing.prototype.eo = function (value) {
    this.un_1.kotlinx$atomicfu$value = value;
  };
  Finishing.prototype.ao = function () {
    return this.un_1.kotlinx$atomicfu$value;
  };
  Finishing.prototype.ko = function (value) {
    this.vn_1.kotlinx$atomicfu$value = value;
  };
  Finishing.prototype.do = function () {
    return this.vn_1.kotlinx$atomicfu$value;
  };
  Finishing.prototype.bo = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  Finishing.prototype.xn = function () {
    return !(this.do() == null);
  };
  Finishing.prototype.wf = function () {
    return this.do() == null;
  };
  Finishing.prototype.yn = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        tmp0_also.a(eh);
        tmp$ret$0 = tmp0_also;
        tmp = tmp$ret$0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
    var list = tmp;
    var rootCause = this.do();
    var tmp0_safe_receiver = rootCause;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      list.k8(0, tmp0_safe_receiver);
      tmp$ret$1 = Unit_getInstance();
    }
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.a(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  Finishing.prototype.co = function (exception) {
    var rootCause = this.do();
    if (rootCause == null) {
      this.ko(exception);
      return Unit_getInstance();
    }
    if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        var tmp$ret$0;
        // Inline function 'kotlin.apply' call
        var tmp0_apply = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        tmp0_apply.a(eh);
        tmp0_apply.a(exception);
        tmp$ret$0 = tmp0_apply;
        _set_exceptionsHolder__tqm22h(this, tmp$ret$0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).a(exception);
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  Finishing.prototype.toString = function () {
    return 'Finishing[cancelling=' + this.xn() + ', completing=' + this.ao() + ', rootCause=' + this.do() + ', exceptions=' + toString(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.tn_1 + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.po_1 = parent;
    this.qo_1 = state;
    this.ro_1 = child;
    this.so_1 = proposedUpdate;
  }
  ChildCompletion.prototype.yi = function (cause) {
    continueCompleting(this.po_1, this.qo_1, this.ro_1, this.so_1);
  };
  ChildCompletion.prototype.invoke = function (cause) {
    return this.yi(cause);
  };
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, get_MODE_CANCELLABLE());
    this.zo_1 = job;
  }
  AwaitContinuation.prototype.nk = function (parent) {
    var state = this.zo_1.pg();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.do();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
    }
    if (state instanceof CompletedExceptionally)
      return state.bg_1;
    return parent.tg();
  };
  AwaitContinuation.prototype.ig = function () {
    return 'AwaitContinuation';
  };
  function awaitSuspend($this, $cont) {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.JobSupport.awaitSuspend.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cont = new AwaitContinuation(intercepted(tmp0__anonymous__q1qw7t), $this);
    cont.fk();
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ResumeAwaitOnCompletion(cont);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    disposeOnCancellation(cont, $this.wg(tmp$ret$1));
    tmp$ret$2 = cont.ok();
    return tmp$ret$2;
  }
  function JobSupport(active) {
    this.pf_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.qf_1 = atomic$ref$1(null);
  }
  JobSupport.prototype.n = function () {
    return Key_getInstance_3();
  };
  JobSupport.prototype.ng = function (value) {
    this.qf_1.kotlinx$atomicfu$value = value;
  };
  JobSupport.prototype.og = function () {
    return this.qf_1.kotlinx$atomicfu$value;
  };
  JobSupport.prototype.rf = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.ng(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }
    parent.rg();
    var handle = parent.ih(this);
    this.ng(handle);
    if (this.qg()) {
      handle.zi();
      this.ng(NonDisposableHandle_getInstance());
    }
  };
  JobSupport.prototype.pg = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.pf_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.<get-state>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (!(tmp1__anonymous__uwfjfc instanceof OpDescriptor))
        return tmp1__anonymous__uwfjfc;
      tmp1__anonymous__uwfjfc.ap(this);
    }
  };
  JobSupport.prototype.wf = function () {
    var state = this.pg();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.wf();
    } else {
      tmp = false;
    }
    return tmp;
  };
  JobSupport.prototype.qg = function () {
    var tmp = this.pg();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  JobSupport.prototype.rg = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.pg();
      var tmp0_subject = startInternal(this, tmp0__anonymous__q1qw7t);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  JobSupport.prototype.sg = function () {
  };
  JobSupport.prototype.tg = function () {
    var state = this.pg();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.do();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.ug(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.vg(state.bg_1, null, 1, null);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  JobSupport.prototype.ug = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs_0 = message;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.zf() : tmp0_elvis_lhs_0, _this__u8e3s4, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  JobSupport.prototype.vg = function (_this__u8e3s4, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      message = null;
    return this.ug(_this__u8e3s4, message);
  };
  JobSupport.prototype.wg = function (handler) {
    return this.xg(false, true, handler);
  };
  JobSupport.prototype.xg = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletion.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.pg();
        var tmp0_subject = tmp0__anonymous__q1qw7t;
        if (tmp0_subject instanceof Empty) {
          if (tmp0__anonymous__q1qw7t.xm_1) {
            if (this.pf_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, tmp0__anonymous__q1qw7t);
          }
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
            var list = tmp0__anonymous__q1qw7t.ym();
            if (list == null) {
              promoteSingleToNodeList(this, tmp0__anonymous__q1qw7t instanceof JobNode ? tmp0__anonymous__q1qw7t : THROW_CCE());
            } else {
              var rootCause = null;
              var handle = NonDisposableHandle_getInstance();
              var tmp;
              if (onCancelling) {
                tmp = tmp0__anonymous__q1qw7t instanceof Finishing;
              } else {
                tmp = false;
              }
              if (tmp) {
                var tmp$ret$2;
                // Inline function 'kotlinx.coroutines.internal.synchronized' call
                rootCause = tmp0__anonymous__q1qw7t.do();
                var tmp_0;
                var tmp_1;
                if (rootCause == null) {
                  tmp_1 = true;
                } else {
                  var tmp_2;
                  var tmp$ret$0;
                  // Inline function 'kotlinx.coroutines.isHandlerOf' call
                  tmp$ret$0 = handler instanceof ChildHandleNode;
                  if (tmp$ret$0) {
                    tmp_2 = !tmp0__anonymous__q1qw7t.ao();
                  } else {
                    tmp_2 = false;
                  }
                  tmp_1 = tmp_2;
                }
                if (tmp_1) {
                  if (!addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node)) {
                    tmp$ret$1 = Unit_getInstance();
                    break $l$block;
                  }
                  if (rootCause == null)
                    return node;
                  handle = node;
                  tmp_0 = Unit_getInstance();
                }
                tmp$ret$2 = tmp_0;
              }
              if (!(rootCause == null)) {
                if (invokeImmediately) {
                  invokeIt(handler, rootCause);
                }
                return handle;
              } else {
                if (addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node))
                  return node;
              }
            }
          } else {
            if (invokeImmediately) {
              var tmp1_safe_receiver = tmp0__anonymous__q1qw7t instanceof CompletedExceptionally ? tmp0__anonymous__q1qw7t : null;
              invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.bg_1);
            }
            return NonDisposableHandle_getInstance();
          }
        }
      }
    }
  };
  JobSupport.prototype.ll = function ($cont) {
    if (!joinInternal(this)) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.getCoroutineContext' call
      tmp$ret$0 = $cont.e3();
      ensureActive(tmp$ret$0);
      return Unit_getInstance();
    }
    return joinSuspend(this, $cont);
  };
  JobSupport.prototype.zg = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.pg();
      var tmp0_subject = tmp0__anonymous__q1qw7t;
      if (tmp0_subject instanceof JobNode) {
        if (!(tmp0__anonymous__q1qw7t === node))
          return Unit_getInstance();
        if (this.pf_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, get_EMPTY_ACTIVE()))
          return Unit_getInstance();
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          if (!(tmp0__anonymous__q1qw7t.ym() == null)) {
            node.jn();
          }
          return Unit_getInstance();
        } else {
          return Unit_getInstance();
        }
      }
    }
  };
  JobSupport.prototype.ah = function () {
    return false;
  };
  JobSupport.prototype.bh = function (cause) {
    var tmp0_elvis_lhs = cause;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs_0 = null;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.zf() : tmp0_elvis_lhs_0, null, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    this.dh(tmp);
  };
  JobSupport.prototype.zf = function () {
    return 'Job was cancelled';
  };
  JobSupport.prototype.dh = function (cause) {
    this.gh(cause);
  };
  JobSupport.prototype.eh = function (parentJob) {
    this.gh(parentJob);
  };
  JobSupport.prototype.fh = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.gh(cause) ? this.lh() : false;
  };
  JobSupport.prototype.gh = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.ah()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.gg(finalState);
      tmp = true;
    }
    return tmp;
  };
  JobSupport.prototype.hh = function () {
    var state = this.pg();
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.do();
    } else {
      if (tmp0_subject instanceof CompletedExceptionally) {
        tmp = state.bg_1;
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          var tmp0_error = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  JobSupport.prototype.il = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompleting.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.pg();
        var finalState = tryMakeCompleting(this, tmp0__anonymous__q1qw7t, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else {
          this.gg(finalState);
          return true;
        }
      }
    }
  };
  JobSupport.prototype.eg = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.pg();
        var finalState = tryMakeCompleting(this, tmp0__anonymous__q1qw7t, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  JobSupport.prototype.ih = function (child) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ChildHandleNode(child);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var tmp = this.yg(true, false, tmp$ret$1, 2, null);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  JobSupport.prototype.hg = function (exception) {
    throw exception;
  };
  JobSupport.prototype.jh = function (cause) {
  };
  JobSupport.prototype.kh = function () {
    return false;
  };
  JobSupport.prototype.lh = function () {
    return true;
  };
  JobSupport.prototype.mh = function (exception) {
    return false;
  };
  JobSupport.prototype.ag = function (state) {
  };
  JobSupport.prototype.gg = function (state) {
  };
  JobSupport.prototype.toString = function () {
    return this.nh() + '@' + get_hexAddress(this);
  };
  JobSupport.prototype.nh = function () {
    return this.ig() + '{' + stateString(this, this.pg()) + '}';
  };
  JobSupport.prototype.ig = function () {
    return get_classSimpleName(this);
  };
  JobSupport.prototype.fi = function ($cont) {
    $l$loop: while (true) {
      var state = this.pg();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          var tmp0_recoverAndThrow = state.bg_1;
          throw tmp0_recoverAndThrow;
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $cont);
  };
  function boxIncomplete(_this__u8e3s4) {
    init_properties_JobSupport_kt_iaxwag();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  function InactiveNodeList(list) {
    this.zn_1 = list;
  }
  InactiveNodeList.prototype.ym = function () {
    return this.zn_1;
  };
  InactiveNodeList.prototype.wf = function () {
    return false;
  };
  InactiveNodeList.prototype.toString = function () {
    return get_DEBUG() ? this.zn_1.cn('New') : anyToString(this);
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.jo_1 = childJob;
  }
  ChildHandleNode.prototype.yi = function (cause) {
    return this.jo_1.eh(this.rn());
  };
  ChildHandleNode.prototype.invoke = function (cause) {
    return this.yi(cause);
  };
  ChildHandleNode.prototype.fh = function (cause) {
    return this.rn().fh(cause);
  };
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.fp_1 = handler;
    this.gp_1 = atomic$int$1(0);
  }
  InvokeOnCancelling.prototype.yi = function (cause) {
    if (this.gp_1.atomicfu$compareAndSet(0, 1))
      this.fp_1(cause);
  };
  InvokeOnCancelling.prototype.invoke = function (cause) {
    return this.yi(cause);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.lp_1 = handler;
  }
  InvokeOnCompletion.prototype.yi = function (cause) {
    return this.lp_1(cause);
  };
  InvokeOnCompletion.prototype.invoke = function (cause) {
    return this.yi(cause);
  };
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.qp_1 = continuation;
  }
  ResumeOnCompletion.prototype.yi = function (cause) {
    var tmp$ret$1;
    // Inline function 'kotlin.coroutines.resume' call
    var tmp0_resume = this.qp_1;
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.success' call
    var tmp0_success = Companion_getInstance_0();
    tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
    tmp0_resume.f3(tmp$ret$0);
    tmp$ret$1 = Unit_getInstance();
    return tmp$ret$1;
  };
  ResumeOnCompletion.prototype.invoke = function (cause) {
    return this.yi(cause);
  };
  function unboxState(_this__u8e3s4) {
    init_properties_JobSupport_kt_iaxwag();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.rp_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.wp_1 = continuation;
  }
  ResumeAwaitOnCompletion.prototype.yi = function (cause) {
    var state = this.rn().pg();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp0_resumeWithException = this.wp_1;
      var tmp1_resumeWithException = state.bg_1;
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance_0();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_resumeWithException));
      tmp0_resumeWithException.f3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp2_resume = this.wp_1;
      var tmp = unboxState(state);
      var tmp3_resume = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      var tmp$ret$2;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_0();
      tmp$ret$2 = _Result___init__impl__xyqfz8(tmp3_resume);
      tmp2_resume.f3(tmp$ret$2);
      tmp$ret$3 = Unit_getInstance();
    }
  };
  ResumeAwaitOnCompletion.prototype.invoke = function (cause) {
    return this.yi(cause);
  };
  function IncompleteStateBox(state) {
    this.rp_1 = state;
  }
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.bq_1 = child;
  }
  ChildContinuation.prototype.yi = function (cause) {
    this.bq_1.mk(this.bq_1.nk(this.rn()));
  };
  ChildContinuation.prototype.invoke = function (cause) {
    return this.yi(cause);
  };
  function handlesException($this) {
    var tmp = $this.og();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.rn();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.lh())
        return true;
      var tmp_1 = parentJob.og();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.rn();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.rf(parent);
    this.eq_1 = handlesException(this);
  }
  JobImpl.prototype.ah = function () {
    return true;
  };
  JobImpl.prototype.lh = function () {
    return this.eq_1;
  };
  JobImpl.prototype.kl = function () {
    return this.il(Unit_getInstance());
  };
  JobImpl.prototype.jl = function (exception) {
    return this.il(CompletedExceptionally_init_$Create$(exception, false, 2, null));
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function init_properties_JobSupport_kt_iaxwag() {
    if (properties_initialized_JobSupport_kt_5iq8a4) {
    } else {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  MainCoroutineDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.hq();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  MainCoroutineDispatcher.prototype.hq = function () {
    var main = Dispatchers_getInstance().zl();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.gq();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function SupervisorJob(parent) {
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJob$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return SupervisorJob(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  SupervisorJobImpl.prototype.fh = function (cause) {
    return false;
  };
  function TimeoutCancellationException() {
  }
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  Unconfined.prototype.pl = function (context) {
    return false;
  };
  Unconfined.prototype.ql = function (context, block) {
    var yieldContext = context.i3(Key_getInstance_4());
    if (!(yieldContext == null)) {
      yieldContext.nq_1 = true;
      return Unit_getInstance();
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  Unconfined.prototype.toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_3() {
    Key_instance_3 = this;
  }
  var Key_instance_3;
  function Key_getInstance_4() {
    if (Key_instance_3 == null)
      new Key_3();
    return Key_instance_3;
  }
  function get_EMPTY() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return EMPTY;
  }
  var EMPTY;
  function get_OFFER_SUCCESS() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return OFFER_SUCCESS;
  }
  var OFFER_SUCCESS;
  function get_OFFER_FAILED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return OFFER_FAILED;
  }
  var OFFER_FAILED;
  function get_POLL_FAILED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return POLL_FAILED;
  }
  var POLL_FAILED;
  var ENQUEUE_FAILED;
  function get_HANDLER_INVOKED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return HANDLER_INVOKED;
  }
  var HANDLER_INVOKED;
  function hasNextResult($this, result) {
    if (result instanceof Closed) {
      if (!(result.rq_1 == null))
        throw recoverStackTrace_0(result.sq());
      return false;
    }
    return true;
  }
  function hasNextSuspend($this, $cont) {
    var tmp$ret$5;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.channels.Itr.hasNextSuspend.<anonymous>' call
      var receive = new ReceiveHasNext($this, cancellable);
      while (true) {
        if (enqueueReceive($this.tq_1, receive)) {
          removeReceiveOnCancel($this.tq_1, cancellable, receive);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        var result = $this.tq_1.yq();
        $this.uq_1 = result;
        if (result instanceof Closed) {
          if (result.rq_1 == null) {
            var tmp$ret$2;
            // Inline function 'kotlin.coroutines.resume' call
            var tmp$ret$1;
            // Inline function 'kotlin.Companion.success' call
            var tmp0_success = Companion_getInstance_0();
            tmp$ret$1 = _Result___init__impl__xyqfz8(false);
            cancellable.f3(tmp$ret$1);
            tmp$ret$2 = Unit_getInstance();
          } else {
            var tmp$ret$4;
            // Inline function 'kotlin.coroutines.resumeWithException' call
            var tmp0_resumeWithException = result.sq();
            var tmp$ret$3;
            // Inline function 'kotlin.Companion.failure' call
            var tmp0_failure = Companion_getInstance_0();
            tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(tmp0_resumeWithException));
            cancellable.f3(tmp$ret$3);
            tmp$ret$4 = Unit_getInstance();
          }
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        if (!(result === get_POLL_FAILED())) {
          var tmp0_safe_receiver = $this.tq_1.zq_1;
          var tmp;
          if (tmp0_safe_receiver == null) {
            tmp = null;
          } else {
            tmp = bindCancellationFun(tmp0_safe_receiver, (result == null ? true : isObject(result)) ? result : THROW_CCE(), cancellable.e3());
          }
          cancellable.wi(true, tmp);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
      }
    }
    tmp$ret$5 = cancellable.ok();
    return tmp$ret$5;
  }
  function enqueueReceive($this, receive) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.cr(receive);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceive.<anonymous>' call
    if (tmp0_also) {
      $this.dr();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function removeReceiveOnCancel($this, cont, receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new RemoveReceiveOnCancel($this, receive);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return cont.ui(tmp$ret$1);
  }
  function RemoveReceiveOnCancel($outer, receive) {
    this.fr_1 = $outer;
    BeforeResumeCancelHandler.call(this);
    this.er_1 = receive;
  }
  RemoveReceiveOnCancel.prototype.yi = function (cause) {
    if (this.er_1.jn()) {
      this.fr_1.gr();
    }
  };
  RemoveReceiveOnCancel.prototype.invoke = function (cause) {
    return this.yi(cause);
  };
  RemoveReceiveOnCancel.prototype.toString = function () {
    return 'RemoveReceiveOnCancel[' + this.er_1 + ']';
  };
  function Itr(channel) {
    this.tq_1 = channel;
    this.uq_1 = get_POLL_FAILED();
  }
  Itr.prototype.hr = function ($cont) {
    if (!(this.uq_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.uq_1);
    this.uq_1 = this.tq_1.yq();
    if (!(this.uq_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.uq_1);
    return hasNextSuspend(this, $cont);
  };
  Itr.prototype.l = function () {
    var result = this.uq_1;
    if (result instanceof Closed)
      throw recoverStackTrace_0(result.sq());
    if (!(result === get_POLL_FAILED())) {
      this.uq_1 = get_POLL_FAILED();
      return (result == null ? true : isObject(result)) ? result : THROW_CCE();
    }
    throw IllegalStateException_init_$Create$("'hasNext' should be called prior to 'next' invocation");
  };
  function ReceiveHasNext(iterator, cont) {
    Receive.call(this);
    this.lr_1 = iterator;
    this.mr_1 = cont;
  }
  ReceiveHasNext.prototype.nr = function (value, otherOp) {
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.mr_1.ri(true, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pr_1, this.rr(value));
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var token = tmp;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp2_safe_receiver = otherOp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.sr();
    }
    return get_RESUME_TOKEN();
  };
  ReceiveHasNext.prototype.tr = function (value) {
    this.lr_1.uq_1 = value;
    this.mr_1.ti(get_RESUME_TOKEN());
  };
  ReceiveHasNext.prototype.ur = function (closed) {
    var tmp;
    if (closed.rq_1 == null) {
      tmp = this.mr_1.qi(false, null, 2, null);
    } else {
      tmp = this.mr_1.si(closed.sq());
    }
    var token = tmp;
    if (!(token == null)) {
      this.lr_1.uq_1 = closed;
      this.mr_1.ti(token);
    }
  };
  ReceiveHasNext.prototype.rr = function (value) {
    var tmp0_safe_receiver = this.lr_1.tq_1.zq_1;
    return tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, value, this.mr_1.e3());
  };
  ReceiveHasNext.prototype.toString = function () {
    return 'ReceiveHasNext@' + get_hexAddress(this);
  };
  function AbstractChannel(onUndeliveredElement) {
    AbstractSendChannel.call(this, onUndeliveredElement);
  }
  AbstractChannel.prototype.yq = function () {
    while (true) {
      var tmp0_elvis_lhs = this.bs();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_POLL_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var send = tmp;
      var token = send.fs(null);
      if (!(token == null)) {
        // Inline function 'kotlinx.coroutines.assert' call
        send.gs();
        return send.hs();
      }
      send.is();
    }
  };
  AbstractChannel.prototype.js = function () {
    return !(this.ks() == null) ? this.as() : false;
  };
  AbstractChannel.prototype.cr = function (receive) {
    var tmp;
    if (this.zr()) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
        var tmp0_addLastIfPrev = this.ar_1;
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev.en_1;
        tmp$ret$0 = !(tmp1__anonymous__uwfjfc instanceof Send);
        if (!tmp$ret$0) {
          tmp$ret$1 = false;
          break $l$block;
        }
        tmp0_addLastIfPrev.kn(receive);
        tmp$ret$1 = true;
      }
      tmp = tmp$ret$1;
    } else {
      var tmp$ret$3;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrevAndIf' call
        var tmp2_addLastIfPrevAndIf = this.ar_1;
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        var tmp3__anonymous__ufb84q = tmp2_addLastIfPrevAndIf.en_1;
        tmp$ret$2 = !(tmp3__anonymous__ufb84q instanceof Send);
        if (!tmp$ret$2) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        tmp$ret$4 = this.as();
        if (!tmp$ret$4) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        tmp2_addLastIfPrevAndIf.kn(receive);
        tmp$ret$3 = true;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  AbstractChannel.prototype.bh = function (cause) {
    if (this.js())
      return Unit_getInstance();
    var tmp0_elvis_lhs = cause;
    this.ls(tmp0_elvis_lhs == null ? CancellationException_init_$Create$(get_classSimpleName(this) + ' was cancelled') : tmp0_elvis_lhs);
  };
  AbstractChannel.prototype.ls = function (cause) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.ms(cause);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.cancelInternal.<anonymous>' call
    this.ns(tmp0_also);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  AbstractChannel.prototype.ns = function (wasClosed) {
    var tmp0_elvis_lhs = this.os();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Cannot happen');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var closed = tmp;
    var list = _InlineList___init__impl__z8n56_0(null, 1, null);
    $l$loop_0: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      tmp$ret$0 = closed.en_1;
      var previous = tmp$ret$0;
      if (previous instanceof LinkedListHead) {
        break $l$loop_0;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      if (!previous.jn()) {
        previous.mn();
        continue $l$loop_0;
      }
      var tmp_0 = list;
      list = InlineList__plus_impl_nuetvo(tmp_0, previous instanceof Send ? previous : THROW_CCE());
    }
    this.ps(list, closed);
  };
  AbstractChannel.prototype.ps = function (list, closed) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.AbstractChannel.onCancelIdempotentList.<anonymous>' call
          var tmp = _get_holder__f6h5pd(list);
          var tmp0__anonymous__q1qw7t = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          tmp0__anonymous__q1qw7t.qs(closed);
        } else {
          var tmp_0 = _get_holder__f6h5pd(list);
          var list_0 = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable = list_0.c() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.AbstractChannel.onCancelIdempotentList.<anonymous>' call
              var tmp1__anonymous__uwfjfc = list_0.h(i);
              tmp1__anonymous__uwfjfc.qs(closed);
            }
             while (0 <= inductionVariable);
        }
      }
    }
  };
  AbstractChannel.prototype.j = function () {
    return new Itr(this);
  };
  AbstractChannel.prototype.rs = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = AbstractSendChannel.prototype.rs.call(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.takeFirstReceiveOrPeekClosed.<anonymous>' call
    var tmp;
    if (!(tmp0_also == null)) {
      tmp = !(tmp0_also instanceof Closed);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.gr();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  AbstractChannel.prototype.dr = function () {
  };
  AbstractChannel.prototype.gr = function () {
  };
  function helpCloseAndGetSendException($this, closed) {
    helpClose($this, closed);
    return closed.xs();
  }
  function invokeOnCloseHandler($this, cause) {
    var handler = $this.br_1.kotlinx$atomicfu$value;
    if ((!(handler === null) ? !(handler === get_HANDLER_INVOKED()) : false) ? $this.br_1.atomicfu$compareAndSet(handler, get_HANDLER_INVOKED()) : false) {
      ((!(handler == null) ? typeof handler === 'function' : false) ? handler : THROW_CCE())(cause);
    }
  }
  function helpClose($this, closed) {
    var closedList = _InlineList___init__impl__z8n56_0(null, 1, null);
    $l$loop_0: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      tmp$ret$0 = closed.en_1;
      var tmp = tmp$ret$0;
      var tmp0_elvis_lhs = tmp instanceof Receive ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        break $l$loop_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var previous = tmp_0;
      if (!previous.jn()) {
        previous.mn();
        continue $l$loop_0;
      }
      closedList = InlineList__plus_impl_nuetvo(closedList, previous);
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_forEachReversed = closedList;
      var tmp0_subject = _get_holder__f6h5pd(tmp0_forEachReversed);
      if (tmp0_subject == null) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.helpClose.<anonymous>' call
          var tmp_1 = _get_holder__f6h5pd(tmp0_forEachReversed);
          var tmp1__anonymous__uwfjfc = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
          tmp1__anonymous__uwfjfc.ur(closed);
        } else {
          var tmp_2 = _get_holder__f6h5pd(tmp0_forEachReversed);
          var list = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list.c() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.helpClose.<anonymous>' call
              var tmp2__anonymous__z9zvc9 = list.h(i);
              tmp2__anonymous__z9zvc9.ur(closed);
            }
             while (0 <= inductionVariable);
        }
      }
    }
    $this.vs(closed);
  }
  function _get_queueDebugStateString__k7jj75($this) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = $this.ar_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4.dn_1;
    var head = tmp$ret$0;
    if (head === $this.ar_1)
      return 'EmptyQueue';
    var tmp0_subject = head;
    var tmp;
    if (tmp0_subject instanceof Closed) {
      tmp = toString_0(head);
    } else {
      if (tmp0_subject instanceof Receive) {
        tmp = 'ReceiveQueued';
      } else {
        if (tmp0_subject instanceof Send) {
          tmp = 'SendQueued';
        } else {
          tmp = 'UNEXPECTED:' + head;
        }
      }
    }
    var result = tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
    var tmp1__get_prevNode__b1i0ed = $this.ar_1;
    tmp$ret$1 = tmp1__get_prevNode__b1i0ed.en_1;
    var tail = tmp$ret$1;
    if (!(tail === head)) {
      result = result + (',queueSize=' + countQueueSize($this));
      if (tail instanceof Closed)
        result = result + (',closedForSend=' + tail);
    }
    return result;
  }
  function countQueueSize($this) {
    var size = 0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var tmp0_forEach = $this.ar_1;
    var cur = tmp0_forEach.dn_1;
    while (!equals(cur, tmp0_forEach)) {
      if (cur instanceof LinkedListNode) {
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.countQueueSize.<anonymous>' call
        var tmp1__anonymous__uwfjfc = cur;
        var tmp0 = size;
        size = tmp0 + 1 | 0;
      }
      cur = cur.dn_1;
    }
    return size;
  }
  function SendBuffered(element) {
    Send.call(this);
    this.bt_1 = element;
  }
  SendBuffered.prototype.hs = function () {
    return this.bt_1;
  };
  SendBuffered.prototype.fs = function (otherOp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.SendBuffered.tryResumeSend.<anonymous>' call
    var tmp0_safe_receiver = otherOp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.sr();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  SendBuffered.prototype.gs = function () {
  };
  SendBuffered.prototype.qs = function (closed) {
    // Inline function 'kotlinx.coroutines.assert' call
  };
  SendBuffered.prototype.toString = function () {
    return 'SendBuffered@' + get_hexAddress(this) + '(' + this.bt_1 + ')';
  };
  function AbstractSendChannel(onUndeliveredElement) {
    this.zq_1 = onUndeliveredElement;
    this.ar_1 = new LinkedListHead();
    this.br_1 = atomic$ref$1(null);
  }
  AbstractSendChannel.prototype.ss = function (element) {
    while (true) {
      var tmp0_elvis_lhs = this.rs();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_OFFER_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var receive = tmp;
      var token = receive.nr(element, null);
      if (!(token == null)) {
        // Inline function 'kotlinx.coroutines.assert' call
        receive.tr(element);
        return receive.yr();
      }
    }
  };
  AbstractSendChannel.prototype.os = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
    var tmp0__get_prevNode__2ljhpg = this.ar_1;
    tmp$ret$0 = tmp0__get_prevNode__2ljhpg.en_1;
    var tmp = tmp$ret$0;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.<get-closedForSend>.<anonymous>' call
      helpClose(this, tmp0_safe_receiver);
      tmp$ret$1 = tmp0_safe_receiver;
      tmp_0 = tmp$ret$1;
    }
    return tmp_0;
  };
  AbstractSendChannel.prototype.ks = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = this.ar_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4.dn_1;
    var tmp = tmp$ret$0;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.<get-closedForReceive>.<anonymous>' call
      helpClose(this, tmp0_safe_receiver);
      tmp$ret$1 = tmp0_safe_receiver;
      tmp_0 = tmp$ret$1;
    }
    return tmp_0;
  };
  AbstractSendChannel.prototype.bs = function () {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf' call
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf = this.ar_1;
      var next = tmp1_removeFirstIfIsInstanceOfOrPeekIf.dn_1;
      if (next === tmp1_removeFirstIfIsInstanceOfOrPeekIf) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!(next instanceof Send)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.takeFirstSendOrPeekClosed.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = next;
      tmp$ret$1 = tmp2__anonymous__z9zvc9 instanceof Closed;
      if (tmp$ret$1) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      // Inline function 'kotlin.check' call
      var tmp0_check = next.ln();
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf.<anonymous>' call
        tmp$ret$2 = 'Should remove';
        var message = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  AbstractSendChannel.prototype.ct = function (element) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
      var tmp0_addLastIfPrev = this.ar_1;
      var tmp1_addLastIfPrev = new SendBuffered(element);
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.sendBuffered.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = tmp0_addLastIfPrev.en_1;
      if (isInterface(tmp2__anonymous__z9zvc9, ReceiveOrClosed))
        return tmp2__anonymous__z9zvc9;
      tmp$ret$0 = true;
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      tmp0_addLastIfPrev.kn(tmp1_addLastIfPrev);
      tmp$ret$1 = true;
    }
    return null;
  };
  AbstractSendChannel.prototype.ts = function (element) {
    var result = this.ss(element);
    var tmp;
    if (result === get_OFFER_SUCCESS()) {
      tmp = Companion_getInstance_1().gt(Unit_getInstance());
    } else {
      if (result === get_OFFER_FAILED()) {
        var tmp0_elvis_lhs = this.os();
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return Companion_getInstance_1().ft();
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var closedForSend = tmp_0;
        tmp = Companion_getInstance_1().et(helpCloseAndGetSendException(this, closedForSend));
      } else {
        if (result instanceof Closed) {
          tmp = Companion_getInstance_1().et(helpCloseAndGetSendException(this, result));
        } else {
          var tmp0_error = 'trySend returned ' + toString_0(result);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
    }
    return tmp;
  };
  AbstractSendChannel.prototype.ms = function (cause) {
    var closed = new Closed(cause);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
      var tmp0_addLastIfPrev = this.ar_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.close.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev.en_1;
      tmp$ret$0 = !(tmp1__anonymous__uwfjfc instanceof Closed);
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      tmp0_addLastIfPrev.kn(closed);
      tmp$ret$1 = true;
    }
    var closeAdded = tmp$ret$1;
    var tmp;
    if (closeAdded) {
      tmp = closed;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp2__get_prevNode__jhgj3a = this.ar_1;
      tmp$ret$2 = tmp2__get_prevNode__jhgj3a.en_1;
      var tmp_0 = tmp$ret$2;
      tmp = tmp_0 instanceof Closed ? tmp_0 : THROW_CCE();
    }
    var actuallyClosed = tmp;
    helpClose(this, actuallyClosed);
    if (closeAdded) {
      invokeOnCloseHandler(this, cause);
    }
    return closeAdded;
  };
  AbstractSendChannel.prototype.vs = function (closed) {
  };
  AbstractSendChannel.prototype.rs = function () {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf' call
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf = this.ar_1;
      var next = tmp1_removeFirstIfIsInstanceOfOrPeekIf.dn_1;
      if (next === tmp1_removeFirstIfIsInstanceOfOrPeekIf) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!isInterface(next, ReceiveOrClosed)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.takeFirstReceiveOrPeekClosed.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = next;
      tmp$ret$1 = tmp2__anonymous__z9zvc9 instanceof Closed;
      if (tmp$ret$1) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      // Inline function 'kotlin.check' call
      var tmp0_check = next.ln();
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf.<anonymous>' call
        tmp$ret$2 = 'Should remove';
        var message = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  AbstractSendChannel.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '{' + _get_queueDebugStateString__k7jj75(this) + '}' + this.ws();
  };
  AbstractSendChannel.prototype.ws = function () {
    return '';
  };
  function Send() {
    LinkedListNode.call(this);
  }
  Send.prototype.is = function () {
  };
  function ReceiveOrClosed() {
  }
  function Closed(closeCause) {
    Send.call(this);
    this.rq_1 = closeCause;
  }
  Closed.prototype.xs = function () {
    var tmp0_elvis_lhs = this.rq_1;
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  Closed.prototype.sq = function () {
    var tmp0_elvis_lhs = this.rq_1;
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  Closed.prototype.yr = function () {
    return this;
  };
  Closed.prototype.hs = function () {
    return this;
  };
  Closed.prototype.fs = function (otherOp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.Closed.tryResumeSend.<anonymous>' call
    var tmp0_safe_receiver = otherOp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.sr();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  Closed.prototype.gs = function () {
  };
  Closed.prototype.nr = function (value, otherOp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.Closed.tryResumeReceive.<anonymous>' call
    var tmp0_safe_receiver = otherOp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.sr();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  Closed.prototype.tr = function (value) {
  };
  Closed.prototype.qs = function (closed) {
    return Unit_getInstance();
  };
  Closed.prototype.toString = function () {
    return 'Closed@' + get_hexAddress(this) + '[' + this.rq_1 + ']';
  };
  function Receive() {
    LinkedListNode.call(this);
  }
  Receive.prototype.yr = function () {
    return get_OFFER_SUCCESS();
  };
  var properties_initialized_AbstractChannel_kt_uwqnpt;
  function init_properties_AbstractChannel_kt_mjk5bh() {
    if (properties_initialized_AbstractChannel_kt_uwqnpt) {
    } else {
      properties_initialized_AbstractChannel_kt_uwqnpt = true;
      EMPTY = new Symbol('EMPTY');
      OFFER_SUCCESS = new Symbol('OFFER_SUCCESS');
      OFFER_FAILED = new Symbol('OFFER_FAILED');
      POLL_FAILED = new Symbol('POLL_FAILED');
      ENQUEUE_FAILED = new Symbol('ENQUEUE_FAILED');
      HANDLER_INVOKED = new Symbol('ON_CLOSE_HANDLER_INVOKED');
    }
  }
  function updateBufferSize($this, currentSize) {
    if (currentSize < $this.kt_1) {
      $this.pt_1.kotlinx$atomicfu$value = currentSize + 1 | 0;
      return null;
    }
    var tmp0_subject = $this.lt_1;
    var tmp0 = tmp0_subject.v3_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = get_OFFER_FAILED();
        break;
      case 2:
        tmp = get_OFFER_SUCCESS();
        break;
      case 1:
        tmp = null;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function enqueueElement($this, currentSize, element) {
    if (currentSize < $this.kt_1) {
      ensureCapacity($this, currentSize);
      $this.nt_1[($this.ot_1 + currentSize | 0) % $this.nt_1.length | 0] = element;
    } else {
      // Inline function 'kotlinx.coroutines.assert' call
      $this.nt_1[$this.ot_1 % $this.nt_1.length | 0] = null;
      $this.nt_1[($this.ot_1 + currentSize | 0) % $this.nt_1.length | 0] = element;
      $this.ot_1 = ($this.ot_1 + 1 | 0) % $this.nt_1.length | 0;
    }
  }
  function ensureCapacity($this, currentSize) {
    if (currentSize >= $this.nt_1.length) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.min' call
      var tmp0_min = imul($this.nt_1.length, 2);
      var tmp1_min = $this.kt_1;
      tmp$ret$0 = Math.min(tmp0_min, tmp1_min);
      var newSize = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$1 = fillArrayVal(Array(newSize), null);
      var newBuffer = tmp$ret$1;
      var inductionVariable = 0;
      if (inductionVariable < currentSize)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          newBuffer[i] = $this.nt_1[($this.ot_1 + i | 0) % $this.nt_1.length | 0];
        }
         while (inductionVariable < currentSize);
      fill(newBuffer, get_EMPTY(), currentSize, newSize);
      $this.nt_1 = newBuffer;
      $this.ot_1 = 0;
    }
  }
  function ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.kt_1 = capacity;
    this.lt_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.kt_1 >= 1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<anonymous>' call
      tmp$ret$0 = 'ArrayChannel capacity must be at least 1, but ' + this.kt_1 + ' was specified';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    this.mt_1 = new NoOpLock();
    var tmp = this;
    var tmp$ret$3;
    // Inline function 'kotlin.apply' call
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$1;
    // Inline function 'kotlin.math.min' call
    var tmp0_min = this.kt_1;
    tmp$ret$1 = Math.min(tmp0_min, 8);
    var tmp1_arrayOfNulls = tmp$ret$1;
    tmp$ret$2 = fillArrayVal(Array(tmp1_arrayOfNulls), null);
    var tmp2_apply = tmp$ret$2;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.buffer.<anonymous>' call
    var tmp_0 = get_EMPTY();
    fill$default(tmp2_apply, tmp_0, 0, 0, 6, null);
    tmp$ret$3 = tmp2_apply;
    tmp.nt_1 = tmp$ret$3;
    this.ot_1 = 0;
    this.pt_1 = atomic$int$1(0);
  }
  ArrayChannel.prototype.zr = function () {
    return false;
  };
  ArrayChannel.prototype.as = function () {
    return this.pt_1.kotlinx$atomicfu$value === 0;
  };
  ArrayChannel.prototype.js = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.mt_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<get-isClosedForReceive>.<anonymous>' call
    tmp$ret$0 = AbstractChannel.prototype.js.call(this);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ArrayChannel.prototype.ss = function (element) {
    var receive = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.mt_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.offerInternal.<anonymous>' call
      var size = this.pt_1.kotlinx$atomicfu$value;
      var tmp0_safe_receiver = this.os();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      var tmp1_safe_receiver = updateBufferSize(this, size);
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp1_safe_receiver;
      }
      if (size === 0) {
        loop: while (true) {
          var tmp2_elvis_lhs = this.rs();
          var tmp;
          if (tmp2_elvis_lhs == null) {
            break loop;
          } else {
            tmp = tmp2_elvis_lhs;
          }
          receive = tmp;
          if (receive instanceof Closed) {
            this.pt_1.kotlinx$atomicfu$value = size;
            return ensureNotNull(receive);
          }
          var token = ensureNotNull(receive).nr(element, null);
          if (!(token == null)) {
            // Inline function 'kotlinx.coroutines.assert' call
            this.pt_1.kotlinx$atomicfu$value = size;
            tmp$ret$2 = Unit_getInstance();
            break $l$block;
          }
        }
      }
      enqueueElement(this, size, element);
      return get_OFFER_SUCCESS();
    }
    tmp$ret$3 = tmp$ret$2;
    ensureNotNull(receive).tr(element);
    return ensureNotNull(receive).yr();
  };
  ArrayChannel.prototype.yq = function () {
    var send = null;
    var resumed = false;
    var result = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.mt_1;
    var size = this.pt_1.kotlinx$atomicfu$value;
    if (size === 0) {
      var tmp0_elvis_lhs = this.os();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.nt_1[this.ot_1];
    this.nt_1[this.ot_1] = null;
    this.pt_1.kotlinx$atomicfu$value = size - 1 | 0;
    var replacement = get_POLL_FAILED();
    if (size === this.kt_1) {
      loop: while (true) {
        var tmp1_elvis_lhs = this.bs();
        var tmp;
        if (tmp1_elvis_lhs == null) {
          break loop;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        send = tmp;
        var token = ensureNotNull(send).fs(null);
        if (!(token == null)) {
          // Inline function 'kotlinx.coroutines.assert' call
          resumed = true;
          replacement = ensureNotNull(send).hs();
          break loop;
        }
        ensureNotNull(send).is();
      }
    }
    var tmp_0;
    if (!(replacement === get_POLL_FAILED())) {
      tmp_0 = !(replacement instanceof Closed);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      this.pt_1.kotlinx$atomicfu$value = size;
      this.nt_1[(this.ot_1 + size | 0) % this.nt_1.length | 0] = replacement;
    }
    this.ot_1 = (this.ot_1 + 1 | 0) % this.nt_1.length | 0;
    tmp$ret$0 = Unit_getInstance();
    if (resumed) {
      ensureNotNull(send).gs();
    }
    return result;
  };
  ArrayChannel.prototype.cr = function (receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.mt_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.enqueueReceiveInternal.<anonymous>' call
    tmp$ret$0 = AbstractChannel.prototype.cr.call(this, receive);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ArrayChannel.prototype.ns = function (wasClosed) {
    var onUndeliveredElement = this.zq_1;
    var undeliveredElementException = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.mt_1;
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.pt_1.kotlinx$atomicfu$value;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.coroutines.channels.ArrayChannel.onCancelIdempotent.<anonymous>.<anonymous>' call
        var value = this.nt_1[this.ot_1];
        if (!(onUndeliveredElement == null) ? !(value === get_EMPTY()) : false) {
          undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, (value == null ? true : isObject(value)) ? value : THROW_CCE(), undeliveredElementException);
        }
        this.nt_1[this.ot_1] = get_EMPTY();
        this.ot_1 = (this.ot_1 + 1 | 0) % this.nt_1.length | 0;
      }
       while (inductionVariable < tmp0_repeat);
    this.pt_1.kotlinx$atomicfu$value = 0;
    tmp$ret$0 = Unit_getInstance();
    AbstractChannel.prototype.ns.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  ArrayChannel.prototype.ws = function () {
    return '(buffer:capacity=' + this.kt_1 + ',size=' + this.pt_1.kotlinx$atomicfu$value + ')';
  };
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_getInstance();
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function Factory() {
    Factory_instance = this;
    this.qt_1 = 2147483647;
    this.rt_1 = 0;
    this.st_1 = -1;
    this.tt_1 = -2;
    this.ut_1 = -3;
    this.vt_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.wt_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function Channel(capacity, onBufferOverflow, onUndeliveredElement) {
    var tmp0_subject = capacity;
    var tmp;
    Factory_getInstance();
    if (tmp0_subject === 0) {
      tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new RendezvousChannel(onUndeliveredElement) : new ArrayChannel(1, onBufferOverflow, onUndeliveredElement);
    } else {
      Factory_getInstance();
      if (tmp0_subject === -1) {
        // Inline function 'kotlin.require' call
        var tmp0_require = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance());
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_require) {
          var tmp$ret$0;
          // Inline function 'kotlinx.coroutines.channels.Channel.<anonymous>' call
          tmp$ret$0 = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          var message = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString_0(message));
        }
        tmp = new ConflatedChannel(onUndeliveredElement);
      } else {
        Factory_getInstance();
        if (tmp0_subject === 2147483647) {
          tmp = new LinkedListChannel(onUndeliveredElement);
        } else {
          Factory_getInstance();
          if (tmp0_subject === -2) {
            tmp = new ArrayChannel(onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? Factory_getInstance().wt_1 : 1, onBufferOverflow, onUndeliveredElement);
          } else {
            tmp = (capacity === 1 ? onBufferOverflow.equals(BufferOverflow_DROP_OLDEST_getInstance()) : false) ? new ConflatedChannel(onUndeliveredElement) : new ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement);
          }
        }
      }
    }
    return tmp;
  }
  function Channel$default(capacity, onBufferOverflow, onUndeliveredElement, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      Factory_getInstance();
      capacity = 0;
    }
    if (!(($mask0 & 2) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    if (!(($mask0 & 4) === 0))
      onUndeliveredElement = null;
    return Channel(capacity, onBufferOverflow, onUndeliveredElement);
  }
  function ReceiveChannel() {
  }
  function SendChannel() {
  }
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__pm9gzw($this) {
    return $this;
  }
  function _ChannelResult___get_isSuccess__impl__odq1z9($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return !(tmp instanceof Failed);
  }
  function Failed() {
  }
  Failed.prototype.toString = function () {
    return 'Failed';
  };
  function Closed_0(cause) {
    Failed.call(this);
    this.xt_1 = cause;
  }
  Closed_0.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Closed_0) {
      tmp = equals(this.xt_1, other.xt_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  Closed_0.prototype.hashCode = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.xt_1;
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp$ret$0;
  };
  Closed_0.prototype.toString = function () {
    return 'Closed(' + this.xt_1 + ')';
  };
  function Companion() {
    Companion_instance = this;
    this.dt_1 = new Failed();
  }
  Companion.prototype.gt = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  Companion.prototype.ft = function () {
    return _ChannelResult___init__impl__siwsuf(this.dt_1);
  };
  Companion.prototype.et = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed_0(cause));
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  function get_DEFAULT_CLOSE_MESSAGE() {
    return DEFAULT_CLOSE_MESSAGE;
  }
  var DEFAULT_CLOSE_MESSAGE;
  function cancelConsumed(_this__u8e3s4, cause) {
    var tmp0_safe_receiver = cause;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.cancelConsumed.<anonymous>' call
      var tmp0_elvis_lhs = tmp0_safe_receiver instanceof CancellationException ? tmp0_safe_receiver : null;
      tmp$ret$0 = tmp0_elvis_lhs == null ? CancellationException_init_$Create$_0('Channel was consumed, consumer had failed', tmp0_safe_receiver) : tmp0_elvis_lhs;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    _this__u8e3s4.bh(tmp);
  }
  function updateValueLocked($this, element) {
    var old = $this.cu_1;
    var tmp;
    if (old === get_EMPTY()) {
      tmp = null;
    } else {
      var tmp0_safe_receiver = $this.zq_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp_1 = (old == null ? true : isObject(old)) ? old : THROW_CCE();
        tmp_0 = callUndeliveredElementCatchingException$default(tmp0_safe_receiver, tmp_1, null, 2, null);
      }
      tmp = tmp_0;
    }
    var undeliveredElementException = tmp;
    $this.cu_1 = element;
    return undeliveredElementException;
  }
  function ConflatedChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.bu_1 = new NoOpLock();
    this.cu_1 = get_EMPTY();
  }
  ConflatedChannel.prototype.zr = function () {
    return false;
  };
  ConflatedChannel.prototype.as = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.bu_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-isBufferEmpty>.<anonymous>' call
    tmp$ret$0 = this.cu_1 === get_EMPTY();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ConflatedChannel.prototype.ss = function (element) {
    var receive = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.bu_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.offerInternal.<anonymous>' call
      var tmp0_safe_receiver = this.os();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      if (this.cu_1 === get_EMPTY()) {
        loop: while (true) {
          var tmp1_elvis_lhs = this.rs();
          var tmp;
          if (tmp1_elvis_lhs == null) {
            break loop;
          } else {
            tmp = tmp1_elvis_lhs;
          }
          receive = tmp;
          if (receive instanceof Closed) {
            return ensureNotNull(receive);
          }
          var token = ensureNotNull(receive).nr(element, null);
          if (!(token == null)) {
            // Inline function 'kotlinx.coroutines.assert' call
            tmp$ret$1 = Unit_getInstance();
            break $l$block;
          }
        }
      }
      var tmp2_safe_receiver = updateValueLocked(this, element);
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        throw tmp2_safe_receiver;
      }
      return get_OFFER_SUCCESS();
    }
    tmp$ret$3 = tmp$ret$1;
    ensureNotNull(receive).tr(element);
    return ensureNotNull(receive).yr();
  };
  ConflatedChannel.prototype.yq = function () {
    var result = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.bu_1;
    if (this.cu_1 === get_EMPTY()) {
      var tmp0_elvis_lhs = this.os();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.cu_1;
    this.cu_1 = get_EMPTY();
    tmp$ret$0 = Unit_getInstance();
    return result;
  };
  ConflatedChannel.prototype.ns = function (wasClosed) {
    var undeliveredElementException = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.bu_1;
    undeliveredElementException = updateValueLocked(this, get_EMPTY());
    tmp$ret$0 = Unit_getInstance();
    AbstractChannel.prototype.ns.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  ConflatedChannel.prototype.cr = function (receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.bu_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.enqueueReceiveInternal.<anonymous>' call
    tmp$ret$0 = AbstractChannel.prototype.cr.call(this, receive);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ConflatedChannel.prototype.ws = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.bu_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-bufferDebugString>.<anonymous>' call
    tmp$ret$0 = '(value=' + toString(this.cu_1) + ')';
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  function LinkedListChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  LinkedListChannel.prototype.zr = function () {
    return true;
  };
  LinkedListChannel.prototype.as = function () {
    return true;
  };
  LinkedListChannel.prototype.ss = function (element) {
    while (true) {
      var result = AbstractChannel.prototype.ss.call(this, element);
      if (result === get_OFFER_SUCCESS())
        return get_OFFER_SUCCESS();
      else {
        if (result === get_OFFER_FAILED()) {
          var sendResult = this.ct(element);
          if (sendResult == null)
            return get_OFFER_SUCCESS();
          else {
            if (sendResult instanceof Closed)
              return sendResult;
          }
        } else {
          if (result instanceof Closed)
            return result;
          else {
            var tmp0_error = 'Invalid offerInternal result ' + toString_0(result);
            throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
          }
        }
      }
    }
  };
  LinkedListChannel.prototype.ps = function (list, closed) {
    var undeliveredElementException = null;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.LinkedListChannel.onCancelIdempotentList.<anonymous>' call
          var tmp = _get_holder__f6h5pd(list);
          var tmp0__anonymous__q1qw7t = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          var tmp0_subject_0 = tmp0__anonymous__q1qw7t;
          if (tmp0_subject_0 instanceof SendBuffered) {
            var tmp1_safe_receiver = this.zq_1;
            var tmp_0;
            if (tmp1_safe_receiver == null) {
              tmp_0 = null;
            } else {
              var tmp_1 = tmp0__anonymous__q1qw7t.bt_1;
              tmp_0 = callUndeliveredElementCatchingException(tmp1_safe_receiver, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE(), undeliveredElementException);
            }
            undeliveredElementException = tmp_0;
          } else {
            tmp0__anonymous__q1qw7t.qs(closed);
          }
        } else {
          var tmp_2 = _get_holder__f6h5pd(list);
          var list_0 = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list_0.c() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.LinkedListChannel.onCancelIdempotentList.<anonymous>' call
              var tmp1__anonymous__uwfjfc = list_0.h(i);
              var tmp0_subject_1 = tmp1__anonymous__uwfjfc;
              if (tmp0_subject_1 instanceof SendBuffered) {
                var tmp1_safe_receiver_0 = this.zq_1;
                var tmp_3;
                if (tmp1_safe_receiver_0 == null) {
                  tmp_3 = null;
                } else {
                  var tmp_4 = tmp1__anonymous__uwfjfc.bt_1;
                  tmp_3 = callUndeliveredElementCatchingException(tmp1_safe_receiver_0, (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE(), undeliveredElementException);
                }
                undeliveredElementException = tmp_3;
              } else {
                tmp1__anonymous__uwfjfc.qs(closed);
              }
            }
             while (0 <= inductionVariable);
        }
      }
    }
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  function RendezvousChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  RendezvousChannel.prototype.zr = function () {
    return true;
  };
  RendezvousChannel.prototype.as = function () {
    return true;
  };
  function ensureCapacity_0($this) {
    var currentSize = $this.gm_1.length;
    var newCapacity = currentSize << 1;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(newCapacity), null);
    var newElements = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.gm_1;
    var tmp1_copyInto = $this.hm_1;
    var tmp2_copyInto = tmp0_copyInto.length;
    arrayCopy(tmp0_copyInto, newElements, 0, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$1 = newElements;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp3_copyInto = $this.gm_1;
    var tmp4_copyInto = $this.gm_1.length - $this.hm_1 | 0;
    var tmp5_copyInto = $this.hm_1;
    arrayCopy(tmp3_copyInto, newElements, tmp4_copyInto, 0, tmp5_copyInto);
    tmp$ret$2 = newElements;
    $this.gm_1 = newElements;
    $this.hm_1 = 0;
    $this.im_1 = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp.gm_1 = tmp$ret$0;
    this.hm_1 = 0;
    this.im_1 = 0;
  }
  ArrayQueue.prototype.om = function () {
    return this.hm_1 === this.im_1;
  };
  ArrayQueue.prototype.lm = function (element) {
    this.gm_1[this.im_1] = element;
    this.im_1 = (this.im_1 + 1 | 0) & (this.gm_1.length - 1 | 0);
    if (this.im_1 === this.hm_1) {
      ensureCapacity_0(this);
    }
  };
  ArrayQueue.prototype.jm = function () {
    if (this.hm_1 === this.im_1)
      return null;
    var element = this.gm_1[this.hm_1];
    this.gm_1[this.hm_1] = null;
    this.hm_1 = (this.hm_1 + 1 | 0) & (this.gm_1.length - 1 | 0);
    return isObject(element) ? element : THROW_CCE();
  };
  function OpDescriptor() {
  }
  function get_UNDEFINED() {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof DispatchedContinuation) {
      var tmp1_resumeCancellableWith = _this__u8e3s4;
      var state = toState_0(result, onCancellation);
      var tmp_0;
      if (tmp1_resumeCancellableWith.bj_1.pl(tmp1_resumeCancellableWith.e3())) {
        tmp1_resumeCancellableWith.dj_1 = state;
        tmp1_resumeCancellableWith.pj_1 = get_MODE_CANCELLABLE();
        tmp1_resumeCancellableWith.bj_1.ql(tmp1_resumeCancellableWith.e3(), tmp1_resumeCancellableWith);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().tm();
          if (false ? eventLoop.nm() : false) {
            tmp$ret$0 = false;
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.mm()) {
            tmp1_resumeCancellableWith.dj_1 = state;
            tmp1_resumeCancellableWith.pj_1 = tmp0_executeUnconfined;
            eventLoop.km(tmp1_resumeCancellableWith);
            tmp_1 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.pm(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = tmp1_resumeCancellableWith.e3().i3(Key_getInstance_3());
                if (!(job == null) ? !job.wf() : false) {
                  var cause = job.tg();
                  tmp1_resumeCancellableWith.hk(state, cause);
                  var tmp$ret$2;
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  var tmp$ret$1;
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp0_failure = Companion_getInstance_0();
                  tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  tmp1_resumeCancellableWith.f3(tmp$ret$1);
                  tmp$ret$2 = Unit_getInstance();
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                var tmp$ret$4;
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                var tmp0_withContinuationContext = tmp1_resumeCancellableWith.cj_1;
                var tmp1_withContinuationContext = tmp1_resumeCancellableWith.ej_1;
                tmp1_resumeCancellableWith.cj_1.f3(result);
                tmp$ret$4 = Unit_getInstance();
              }
              $l$loop: while (true) {
                if (!eventLoop.fm())
                  break $l$loop;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                tmp1_resumeCancellableWith.tk($p, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.qm(true);
            }
            tmp_1 = false;
          }
          tmp$ret$0 = tmp_1;
        }
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      _this__u8e3s4.f3(result);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function resumeCancellableWith$default(_this__u8e3s4, result, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      onCancellation = null;
    return resumeCancellableWith(_this__u8e3s4, result, onCancellation);
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.fj_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, get_MODE_UNINITIALIZED());
    this.bj_1 = dispatcher;
    this.cj_1 = continuation;
    this.dj_1 = get_UNDEFINED();
    this.ej_1 = threadContextElements(this.e3());
    this.fj_1 = atomic$ref$1(null);
  }
  DispatchedContinuation.prototype.e3 = function () {
    return this.cj_1.e3();
  };
  DispatchedContinuation.prototype.oj = function () {
    return !(this.fj_1.kotlinx$atomicfu$value == null);
  };
  DispatchedContinuation.prototype.ju = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.fj_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (!(tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()))
        return Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.rl = function () {
    this.ju();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.sj();
    }
  };
  DispatchedContinuation.prototype.gj = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.fj_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.claimReusableCancellableContinuation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (tmp1__anonymous__uwfjfc === null) {
        this.fj_1.kotlinx$atomicfu$value = get_REUSABLE_CLAIMED();
        return null;
      } else {
        if (tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl) {
          if (this.fj_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_REUSABLE_CLAIMED())) {
            return tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl ? tmp1__anonymous__uwfjfc : THROW_CCE();
          }
        } else {
          if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
          } else {
            if (tmp1__anonymous__uwfjfc instanceof Error) {
            } else {
              var tmp0_error = 'Inconsistent state ' + toString(tmp1__anonymous__uwfjfc);
              throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
            }
          }
        }
      }
    }
  };
  DispatchedContinuation.prototype.rj = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.fj_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
        if (this.fj_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (tmp1__anonymous__uwfjfc instanceof Error) {
          // Inline function 'kotlin.require' call
          var tmp0_require = this.fj_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp0_require) {
            var tmp$ret$0;
            // Inline function 'kotlin.require.<anonymous>' call
            tmp$ret$0 = 'Failed requirement.';
            var message = tmp$ret$0;
            throw IllegalArgumentException_init_$Create$(toString_0(message));
          }
          return tmp1__anonymous__uwfjfc;
        } else {
          var tmp1_error = 'Inconsistent state ' + toString(tmp1__anonymous__uwfjfc);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  DispatchedContinuation.prototype.qj = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.fj_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.kotlinx$atomicfu$value;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (equals(tmp0_subject, get_REUSABLE_CLAIMED())) {
        if (this.fj_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (tmp0_subject instanceof Error)
          return true;
        else {
          if (this.fj_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null))
            return false;
        }
      }
    }
  };
  DispatchedContinuation.prototype.gk = function () {
    var state = this.dj_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.dj_1 = get_UNDEFINED();
    return state;
  };
  DispatchedContinuation.prototype.ek = function () {
    return this;
  };
  DispatchedContinuation.prototype.f3 = function (result) {
    var context = this.cj_1.e3();
    var state = toState$default(result, null, 1, null);
    if (this.bj_1.pl(context)) {
      this.dj_1 = state;
      this.pj_1 = get_MODE_ATOMIC();
      this.bj_1.ql(context, this);
    } else {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var tmp0_executeUnconfined = get_MODE_ATOMIC();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().tm();
        if (false ? eventLoop.nm() : false) {
          tmp$ret$0 = false;
          break $l$block;
        }
        var tmp;
        if (eventLoop.mm()) {
          this.dj_1 = state;
          this.pj_1 = tmp0_executeUnconfined;
          eventLoop.km(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.pm(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            var tmp$ret$1;
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            var tmp0_withCoroutineContext = this.e3();
            var tmp1_withCoroutineContext = this.ej_1;
            this.cj_1.f3(result);
            tmp$ret$1 = Unit_getInstance();
            $l$loop: while (true) {
              if (!eventLoop.fm())
                break $l$loop;
            }
          } catch ($p) {
            if ($p instanceof Error) {
              this.tk($p, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.qm(true);
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
      }
    }
  };
  DispatchedContinuation.prototype.hk = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.nl_1(cause);
    }
  };
  DispatchedContinuation.prototype.toString = function () {
    return 'DispatchedContinuation[' + this.bj_1 + ', ' + toDebugString(this.cj_1) + ']';
  };
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function init_properties_DispatchedContinuation_kt_s7rtw6() {
    if (properties_initialized_DispatchedContinuation_kt_2siadq) {
    } else {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function get_MODE_CANCELLABLE() {
    return MODE_CANCELLABLE;
  }
  var MODE_CANCELLABLE;
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.pj_1 = resumeMode;
  }
  DispatchedTask.prototype.hk = function (takenState, cause) {
  };
  DispatchedTask.prototype.pk = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  DispatchedTask.prototype.rk = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bg_1;
  };
  DispatchedTask.prototype.sk = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    get_taskContext(this);
    var taskContext = Unit_getInstance();
    var fatalException = null;
    try {
      var tmp = this.ek();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.cj_1;
      var tmp$ret$5;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      var tmp0_withContinuationContext = delegate.ej_1;
      var context = continuation.e3();
      var state = this.gk();
      var exception = this.rk(state);
      var job = (exception == null ? get_isCancellableMode(this.pj_1) : false) ? context.i3(Key_getInstance_3()) : null;
      var tmp_0;
      if (!(job == null) ? !job.wf() : false) {
        var cause = job.tg();
        this.hk(state, cause);
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance_0();
        var tmp1_failure = recoverStackTrace(cause, continuation);
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
        continuation.f3(tmp$ret$0);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp_1;
        if (!(exception == null)) {
          var tmp$ret$2;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.failure' call
          var tmp0_failure_0 = Companion_getInstance_0();
          tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.f3(tmp$ret$1);
          tmp$ret$2 = Unit_getInstance();
          tmp_1 = tmp$ret$2;
        } else {
          var tmp$ret$4;
          // Inline function 'kotlin.coroutines.resume' call
          var tmp2_resume = this.pk(state);
          var tmp$ret$3;
          // Inline function 'kotlin.Companion.success' call
          var tmp0_success = Companion_getInstance_0();
          tmp$ret$3 = _Result___init__impl__xyqfz8(tmp2_resume);
          continuation.f3(tmp$ret$3);
          tmp$ret$4 = Unit_getInstance();
          tmp_1 = tmp$ret$4;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$5 = tmp_0;
    } catch ($p) {
      if ($p instanceof Error) {
        fatalException = $p;
      } else {
        throw $p;
      }
    }
    finally {
      var tmp$ret$8;
      // Inline function 'kotlin.runCatching' call
      var tmp_2;
      try {
        var tmp$ret$6;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success_0 = Companion_getInstance_0();
        var tmp1_success = Unit_getInstance();
        tmp$ret$6 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp_2 = tmp$ret$6;
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var tmp$ret$7;
          // Inline function 'kotlin.Companion.failure' call
          var tmp2_failure = Companion_getInstance_0();
          tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure($p));
          tmp_3 = tmp$ret$7;
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      tmp$ret$8 = tmp_2;
      var result = tmp$ret$8;
      this.tk(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  DispatchedTask.prototype.tk = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    }
    var tmp0_elvis_lhs = exception;
    var cause = tmp0_elvis_lhs == null ? finallyException : tmp0_elvis_lhs;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.ek().e3(), reason);
  };
  function get_MODE_UNINITIALIZED() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_MODE_CANCELLABLE_REUSABLE() {
    return MODE_CANCELLABLE_REUSABLE;
  }
  var MODE_CANCELLABLE_REUSABLE;
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 ? true : _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.ek();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.pj_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.bj_1;
      var context = delegate.e3();
      if (dispatcher.pl(context)) {
        dispatcher.ql(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function get_MODE_UNDISPATCHED() {
    return MODE_UNDISPATCHED;
  }
  var MODE_UNDISPATCHED;
  function get_MODE_ATOMIC() {
    return MODE_ATOMIC;
  }
  var MODE_ATOMIC;
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().tm();
    if (eventLoop.mm()) {
      eventLoop.km(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.pm(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.ek(), true);
        $l$loop: while (true) {
          if (!eventLoop.fm())
            break $l$loop;
        }
      } catch ($p) {
        if ($p instanceof Error) {
          _this__u8e3s4.tk($p, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.qm(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.gk();
    var exception = _this__u8e3s4.rk(state);
    var tmp;
    if (!(exception == null)) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance_0();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp1_success = Companion_getInstance_0();
      var tmp2_success = _this__u8e3s4.pk(state);
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp2_success);
      tmp = tmp$ret$1;
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var tmp3_resumeUndispatchedWith = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      var tmp0_withContinuationContext = tmp3_resumeUndispatchedWith.cj_1;
      var tmp1_withContinuationContext = tmp3_resumeUndispatchedWith.ej_1;
      tmp3_resumeUndispatchedWith.cj_1.f3(result);
      tmp$ret$2 = Unit_getInstance();
    } else {
      delegate.f3(result);
    }
  }
  function _InlineList___init__impl__z8n56(holder) {
    return holder;
  }
  function _InlineList___init__impl__z8n56_0(holder, $mask0, $marker) {
    if (!(($mask0 & 1) === 0))
      holder = null;
    var tmp = _InlineList___init__impl__z8n56(holder);
    return tmp;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).a(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        var tmp_1 = _get_holder__f6h5pd($this);
        list.a((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
        list.a(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function bindCancellationFun(_this__u8e3s4, element, context) {
    return bindCancellationFun$lambda(_this__u8e3s4, element, context);
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        if (!(undeliveredElementException == null) ? !(undeliveredElementException.cause === $p) : false) {
          // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + element, $p);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function callUndeliveredElementCatchingException$default(_this__u8e3s4, element, undeliveredElementException, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      undeliveredElementException = null;
    return callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException);
  }
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      handleCoroutineException(context, tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
  }
  function bindCancellationFun$lambda($this_bindCancellationFun, $element, $context) {
    return function (_anonymous_parameter_0__qggqh8) {
      callUndeliveredElement($this_bindCancellationFun, $element, $context);
      return Unit_getInstance();
    };
  }
  function ContextScope(context) {
    this.ku_1 = context;
  }
  ContextScope.prototype.vf = function () {
    return this.ku_1;
  };
  ContextScope.prototype.toString = function () {
    return 'CoroutineScope(coroutineContext=' + this.ku_1 + ')';
  };
  function Symbol(symbol) {
    this.lu_1 = symbol;
  }
  Symbol.prototype.toString = function () {
    return '<' + this.lu_1 + '>';
  };
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).k7();
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp0_error = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parsed = tmp_0;
    if (!(minValue.s(parsed) <= 0 ? parsed.s(maxValue) <= 0 : false)) {
      // Inline function 'kotlin.error' call
      var tmp1_error = "System property '" + propertyName + "' should be in range " + toString_0(minValue) + '..' + toString_0(maxValue) + ", but is '" + toString_0(parsed) + "'";
      throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_0();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        dispatcherFailure$accessor$paksz7(completion, $p);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable$default(_this__u8e3s4, receiver, completion, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    return startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation);
  }
  function dispatcherFailure(completion, e) {
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    var tmp0_failure = Companion_getInstance_0();
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.f3(tmp$ret$0);
    throw e;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_0();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      var tmp_1 = tmp$ret$0;
      resumeCancellableWith$default(tmp_0, tmp_1, null, 2, null);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        dispatcherFailure$accessor$paksz7(fatalCompletion, $p);
        tmp_2 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function dispatcherFailure$accessor$paksz7(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    var tmp$ret$8;
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      tmp$ret$0 = completion;
      var actualCompletion = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$5;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        var tmp0_withCoroutineContext = completion.e3();
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = _this__u8e3s4;
        var a = tmp$ret$1;
        tmp$ret$2 = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.jf(receiver, actualCompletion);
        tmp$ret$3 = tmp$ret$2;
        tmp$ret$4 = tmp$ret$3;
        tmp$ret$5 = tmp$ret$4;
        tmp = tmp$ret$5;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var tmp$ret$7;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$6;
          // Inline function 'kotlin.Companion.failure' call
          var tmp0_failure = Companion_getInstance_0();
          tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure($p));
          actualCompletion.f3(tmp$ret$6);
          tmp$ret$7 = Unit_getInstance();
          tmp$ret$8 = Unit_getInstance();
          break $l$block;
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        var tmp$ret$10;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance_0();
        tmp$ret$9 = _Result___init__impl__xyqfz8(tmp0_resume);
        actualCompletion.f3(tmp$ret$9);
        tmp$ret$10 = Unit_getInstance();
      }
    }
  }
  function CloseableCoroutineDispatcher() {
  }
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  function invokeIt(_this__u8e3s4, cause) {
    var tmp0_subject = typeof _this__u8e3s4;
    if (tmp0_subject === 'function')
      _this__u8e3s4(cause);
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = _this__u8e3s4;
      tmp$ret$0.invoke(cause);
    }
  }
  function CancelHandlerBase() {
  }
  function toDebugString(_this__u8e3s4) {
    return toString_0(_this__u8e3s4);
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().vl_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_asDynamic = window;
        tmp$ret$0 = tmp0_asDynamic;
        tmp_1 = tmp$ret$0 != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_asDynamic = window;
        tmp$ret$1 = tmp1_asDynamic;
        tmp_0 = !(typeof tmp$ret$1.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' ? true : typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.vf().p3(context);
    return (!(combined === Dispatchers_getInstance().vl_1) ? combined.i3(Key_getInstance()) == null : false) ? combined.p3(Dispatchers_getInstance().vl_1) : combined;
  }
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function handleCoroutineExceptionImpl(context, exception) {
    console.error(exception);
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).jb();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    var result = tmp$ret$0.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = _this__u8e3s4;
      tmp$ret$1.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.vl_1 = createDefaultDispatcher();
    this.wl_1 = Unconfined_getInstance();
    this.xl_1 = new JsMainDispatcher(this.vl_1, false);
    this.yl_1 = null;
  }
  Dispatchers.prototype.zl = function () {
    var tmp0_elvis_lhs = this.yl_1;
    return tmp0_elvis_lhs == null ? this.xl_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.pu_1 = delegate;
    this.qu_1 = invokeImmediately;
    this.ru_1 = this.qu_1 ? this : new JsMainDispatcher(this.pu_1, true);
  }
  JsMainDispatcher.prototype.gq = function () {
    return this.ru_1;
  };
  JsMainDispatcher.prototype.pl = function (context) {
    return !this.qu_1;
  };
  JsMainDispatcher.prototype.ql = function (context, block) {
    return this.pu_1.ql(context, block);
  };
  JsMainDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.hq();
    return tmp0_elvis_lhs == null ? this.pu_1.toString() : tmp0_elvis_lhs;
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  UnconfinedEventLoop.prototype.ql = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$(message, cause, this);
    this.wu_1 = job;
    captureStack(this, JobCancellationException);
  }
  JobCancellationException.prototype.toString = function () {
    return CancellationException.prototype.toString.call(this) + '; job=' + this.wu_1;
  };
  JobCancellationException.prototype.equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.wu_1, this.wu_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  JobCancellationException.prototype.hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.wu_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  NodeDispatcher.prototype.zu = function () {
    process.nextTick(this.iv_1.fv_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  SetTimeoutDispatcher.prototype.zu = function () {
    setTimeout(this.iv_1.fv_1, 0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.qv();
      return Unit_getInstance();
    };
  }
  function ScheduledMessageQueue($outer) {
    this.gv_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.fv_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  ScheduledMessageQueue.prototype.rv = function () {
    this.gv_1.zu();
  };
  ScheduledMessageQueue.prototype.sv = function () {
    setTimeout(this.fv_1, 0);
  };
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.vi(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.iv_1 = new ScheduledMessageQueue(this);
  }
  SetTimeoutBasedDispatcher.prototype.ql = function (context, block) {
    this.iv_1.tv(block);
  };
  SetTimeoutBasedDispatcher.prototype.am = function (timeMillis, continuation) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ClearTimeout(handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    continuation.ui(tmp$ret$1);
  };
  function MessageQueue() {
    ArrayQueue.call(this);
    this.ov_1 = 16;
    this.pv_1 = false;
  }
  MessageQueue.prototype.tv = function (element) {
    this.lm(element);
    if (!this.pv_1) {
      this.pv_1 = true;
      this.rv();
    }
  };
  MessageQueue.prototype.qv = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var tmp0_repeat = this.ov_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = this.jm();
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_getInstance();
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.sk();
        }
         while (inductionVariable < tmp0_repeat);
    }finally {
      if (this.om()) {
        this.pv_1 = false;
      } else {
        this.sv();
      }
    }
  };
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).k7();
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this.uv_1 = handle;
  }
  ClearTimeout.prototype.zi = function () {
    clearTimeout(this.uv_1);
  };
  ClearTimeout.prototype.yi = function (cause) {
    this.zi();
  };
  ClearTimeout.prototype.invoke = function (cause) {
    return this.yi(cause);
  };
  ClearTimeout.prototype.toString = function () {
    return 'ClearTimeout[' + this.uv_1 + ']';
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.vi(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.wv_1 = window_0;
    this.xv_1 = new WindowMessageQueue(this.wv_1);
  }
  WindowDispatcher.prototype.ql = function (context, block) {
    return this.xv_1.tv(block);
  };
  WindowDispatcher.prototype.am = function (timeMillis, continuation) {
    this.wv_1.setTimeout(WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
  };
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.dw_1 ? event.data == this$0.ew_1 : false) {
        event.stopPropagation();
        this$0.qv();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.qv();
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.dw_1 = window_0;
    this.ew_1 = 'dispatchCoroutine';
    this.dw_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  WindowMessageQueue.prototype.rv = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  WindowMessageQueue.prototype.sv = function () {
    this.dw_1.postMessage(this.ew_1, '*');
  };
  function SchedulerTask() {
  }
  function get_taskContext(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    var tmp0_elvis_lhs = tmp$ret$0.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$2;
      // Inline function 'kotlin.also' call
      var tmp0_also = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = _this__u8e3s4;
      tmp$ret$1.coroutineDispatcher = tmp0_also;
      tmp$ret$2 = tmp0_also;
      tmp = tmp$ret$2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function NoOpLock() {
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  LinkedListHead.prototype.jn = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  function LinkedListNode() {
    this.dn_1 = this;
    this.en_1 = this;
    this.fn_1 = false;
  }
  LinkedListNode.prototype.kn = function (node) {
    var prev = this.en_1;
    node.dn_1 = this;
    node.en_1 = prev;
    prev.dn_1 = node;
    this.en_1 = node;
  };
  LinkedListNode.prototype.jn = function () {
    return this.ln();
  };
  LinkedListNode.prototype.ln = function () {
    if (this.fn_1)
      return false;
    var prev = this.en_1;
    var next = this.dn_1;
    prev.dn_1 = next;
    next.en_1 = prev;
    this.fn_1 = true;
    return true;
  };
  LinkedListNode.prototype.sn = function (node) {
    if (!(this.dn_1 === this))
      return false;
    this.kn(node);
    return true;
  };
  LinkedListNode.prototype.mn = function () {
  };
  function unwrap(exception) {
    return exception;
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.um_1 = null;
  }
  CommonThreadLocal.prototype.vm = function () {
    var tmp = this.um_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  CommonThreadLocal.prototype.wm = function (value) {
    this.um_1 = value;
  };
  //region block: post-declaration
  JobSupport.prototype.yg = invokeOnCompletion$default;
  JobSupport.prototype.ch = cancel$default;
  JobSupport.prototype.p3 = plus;
  JobSupport.prototype.i3 = get;
  JobSupport.prototype.o3 = fold;
  JobSupport.prototype.n3 = minusKey;
  AbstractCoroutine.prototype.yg = invokeOnCompletion$default;
  AbstractCoroutine.prototype.ch = cancel$default;
  AbstractCoroutine.prototype.p3 = plus;
  AbstractCoroutine.prototype.i3 = get;
  AbstractCoroutine.prototype.o3 = fold;
  AbstractCoroutine.prototype.n3 = minusKey;
  StandaloneCoroutine.prototype.yg = invokeOnCompletion$default;
  StandaloneCoroutine.prototype.ch = cancel$default;
  StandaloneCoroutine.prototype.p3 = plus;
  StandaloneCoroutine.prototype.i3 = get;
  StandaloneCoroutine.prototype.o3 = fold;
  StandaloneCoroutine.prototype.n3 = minusKey;
  LazyStandaloneCoroutine.prototype.yg = invokeOnCompletion$default;
  LazyStandaloneCoroutine.prototype.ch = cancel$default;
  LazyStandaloneCoroutine.prototype.p3 = plus;
  LazyStandaloneCoroutine.prototype.i3 = get;
  LazyStandaloneCoroutine.prototype.o3 = fold;
  LazyStandaloneCoroutine.prototype.n3 = minusKey;
  DeferredCoroutine.prototype.yg = invokeOnCompletion$default;
  DeferredCoroutine.prototype.ch = cancel$default;
  DeferredCoroutine.prototype.p3 = plus;
  DeferredCoroutine.prototype.i3 = get;
  DeferredCoroutine.prototype.o3 = fold;
  DeferredCoroutine.prototype.n3 = minusKey;
  LazyDeferredCoroutine.prototype.yg = invokeOnCompletion$default;
  LazyDeferredCoroutine.prototype.ch = cancel$default;
  LazyDeferredCoroutine.prototype.p3 = plus;
  LazyDeferredCoroutine.prototype.i3 = get;
  LazyDeferredCoroutine.prototype.o3 = fold;
  LazyDeferredCoroutine.prototype.n3 = minusKey;
  CancellableContinuationImpl.prototype.qi = tryResume$default;
  CompletableDeferredImpl.prototype.yg = invokeOnCompletion$default;
  CompletableDeferredImpl.prototype.ch = cancel$default;
  CompletableDeferredImpl.prototype.p3 = plus;
  CompletableDeferredImpl.prototype.i3 = get;
  CompletableDeferredImpl.prototype.o3 = fold;
  CompletableDeferredImpl.prototype.n3 = minusKey;
  CoroutineDispatcher.prototype.i3 = get_0;
  CoroutineDispatcher.prototype.o3 = fold;
  CoroutineDispatcher.prototype.n3 = minusKey_0;
  CoroutineDispatcher.prototype.p3 = plus;
  CoroutineName.prototype.i3 = get;
  CoroutineName.prototype.o3 = fold;
  CoroutineName.prototype.n3 = minusKey;
  CoroutineName.prototype.p3 = plus;
  EventLoop.prototype.p3 = plus;
  EventLoop.prototype.i3 = get_0;
  EventLoop.prototype.o3 = fold;
  EventLoop.prototype.n3 = minusKey_0;
  AwaitContinuation.prototype.qi = tryResume$default;
  JobImpl.prototype.yg = invokeOnCompletion$default;
  JobImpl.prototype.ch = cancel$default;
  JobImpl.prototype.p3 = plus;
  JobImpl.prototype.i3 = get;
  JobImpl.prototype.o3 = fold;
  JobImpl.prototype.n3 = minusKey;
  MainCoroutineDispatcher.prototype.p3 = plus;
  MainCoroutineDispatcher.prototype.i3 = get_0;
  MainCoroutineDispatcher.prototype.o3 = fold;
  MainCoroutineDispatcher.prototype.n3 = minusKey_0;
  SupervisorJobImpl.prototype.yg = invokeOnCompletion$default;
  SupervisorJobImpl.prototype.ch = cancel$default;
  SupervisorJobImpl.prototype.p3 = plus;
  SupervisorJobImpl.prototype.i3 = get;
  SupervisorJobImpl.prototype.o3 = fold;
  SupervisorJobImpl.prototype.n3 = minusKey;
  Unconfined.prototype.p3 = plus;
  Unconfined.prototype.i3 = get_0;
  Unconfined.prototype.o3 = fold;
  Unconfined.prototype.n3 = minusKey_0;
  AbstractSendChannel.prototype.us = close$default;
  AbstractChannel.prototype.ch = cancel$default_0;
  AbstractChannel.prototype.us = close$default;
  ArrayChannel.prototype.ch = cancel$default_0;
  ArrayChannel.prototype.us = close$default;
  ConflatedChannel.prototype.ch = cancel$default_0;
  ConflatedChannel.prototype.us = close$default;
  LinkedListChannel.prototype.ch = cancel$default_0;
  LinkedListChannel.prototype.us = close$default;
  RendezvousChannel.prototype.ch = cancel$default_0;
  RendezvousChannel.prototype.us = close$default;
  JsMainDispatcher.prototype.p3 = plus;
  JsMainDispatcher.prototype.i3 = get_0;
  JsMainDispatcher.prototype.o3 = fold;
  JsMainDispatcher.prototype.n3 = minusKey_0;
  UnconfinedEventLoop.prototype.p3 = plus;
  UnconfinedEventLoop.prototype.i3 = get_0;
  UnconfinedEventLoop.prototype.o3 = fold;
  UnconfinedEventLoop.prototype.n3 = minusKey_0;
  SetTimeoutBasedDispatcher.prototype.p3 = plus;
  SetTimeoutBasedDispatcher.prototype.i3 = get_0;
  SetTimeoutBasedDispatcher.prototype.o3 = fold;
  SetTimeoutBasedDispatcher.prototype.n3 = minusKey_0;
  NodeDispatcher.prototype.p3 = plus;
  NodeDispatcher.prototype.i3 = get_0;
  NodeDispatcher.prototype.o3 = fold;
  NodeDispatcher.prototype.n3 = minusKey_0;
  SetTimeoutDispatcher.prototype.p3 = plus;
  SetTimeoutDispatcher.prototype.i3 = get_0;
  SetTimeoutDispatcher.prototype.o3 = fold;
  SetTimeoutDispatcher.prototype.n3 = minusKey_0;
  WindowDispatcher.prototype.p3 = plus;
  WindowDispatcher.prototype.i3 = get_0;
  WindowDispatcher.prototype.o3 = fold;
  WindowDispatcher.prototype.n3 = minusKey_0;
  //endregion
  //region block: init
  DEFAULT_CLOSE_MESSAGE = 'Channel was closed';
  MODE_CANCELLABLE = 1;
  MODE_UNINITIALIZED = -1;
  MODE_CANCELLABLE_REUSABLE = 2;
  MODE_UNDISPATCHED = 4;
  MODE_ATOMIC = 0;
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = delay;
  _.$_$.b = Channel$default;
  _.$_$.c = CompletableDeferred$default;
  _.$_$.d = cancel$default;
  _.$_$.e = invokeOnCompletion$default;
  _.$_$.f = Job$default;
  _.$_$.g = SupervisorJob$default;
  _.$_$.h = async$default;
  _.$_$.i = cancel$default_1;
  _.$_$.j = launch$default;
  _.$_$.k = _ChannelResult___get_isSuccess__impl__odq1z9;
  _.$_$.l = Factory_getInstance;
  _.$_$.m = Key_getInstance_0;
  _.$_$.n = Key_getInstance_1;
  _.$_$.o = Dispatchers_getInstance;
  _.$_$.p = GlobalScope_getInstance;
  _.$_$.q = Key_getInstance_3;
  _.$_$.r = cancelConsumed;
  _.$_$.s = LinkedListNode;
  _.$_$.t = recoverStackTrace;
  _.$_$.u = CancellableContinuationImpl;
  _.$_$.v = CloseableCoroutineDispatcher;
  _.$_$.w = CompletableJob;
  _.$_$.x = CoroutineName;
  _.$_$.y = CoroutineScope_0;
  _.$_$.z = CoroutineScope;
  _.$_$.a1 = Job_0;
  _.$_$.b1 = Job;
  _.$_$.c1 = get_MODE_CANCELLABLE;
  _.$_$.d1 = MainScope;
  _.$_$.e1 = SupervisorJob;
  _.$_$.f1 = cancel;
  _.$_$.g1 = cancel_2;
  _.$_$.h1 = cancel_0;
  _.$_$.i1 = cancel_1;
  _.$_$.j1 = get_job;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js.map
