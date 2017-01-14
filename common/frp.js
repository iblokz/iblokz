'use strict';

// lib
const Rx = require('rx');
const $ = Rx.Observable;

// observe
const observe = (source) => (source instanceof Rx.Observable)
  ? source
  : (source.then instanceof Function)
    ? Rx.Observable.fromPromise(source)
    : Rx.Observable.just(source);

module.exports = {
  observe
};
