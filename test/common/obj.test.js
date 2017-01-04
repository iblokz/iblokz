'use strict';

const expect = require('chai').expect;

const obj = require('../../common/obj');

describe('obj', () =>
  describe('keyValue', () =>
    it('creates a new object with key and value provided in the arguments', () =>
      expect(obj.keyValue('foo', 'bar')).to.deep.equal({foo: 'bar'})))
  &&
  describe('clone', () =>
    it('creates a new object of the same type as passed in object', () =>
      expect(obj.clone(new Date(2017, 1, 1))).to.be.an.instanceof(Date))
    &&
    it('assigns the object tree properties', () =>
      expect(obj.clone({a: 1, b: {c: 2}})).to.deep.equal({a: 1, b: {c: 2}}))
    &&
    it('with subelements preserving their prototype', () =>
      expect(obj.clone({foo:{bar: new Date(2016)}})['foo']['bar']).to.be.an.instanceof(Date)))
  &&
  describe('sub', () =>
    it('returns a sub property on an object tree based on provided path array', () =>
      expect(obj.sub({foo:{bar: new Date(2016)}}, ['foo', 'bar'])).to.be.an.instanceof(Date))
    &&
    it('also works with single path string', () =>
      expect(obj.sub({a: 1, b: {c: 2}}, 'b')).to.deep.equal({c: 2}))
    &&
    it('should return false if no match', () =>
      expect(obj.sub({a: 1}, 'b')).to.equal(false)))
  &&
  describe('patch', () =>
    it('patches a property based on a path string', () =>
      expect(obj.patch({a: 1, b: 3}, 'b', 2)).to.deep.equal({a: 1, b: 2}))
    &&
    it('patches a property based on a path array with single element', () =>
      expect(obj.patch({a: 1, b: 3}, ['b'], 2)).to.deep.equal({a: 1, b: 2}))
    &&
    it('patches a sub property based on a path array', () =>
      expect(obj.patch({a: 1, b: {c: 3}}, ['b', 'c'], 2)).to.deep.equal({a: 1, b: {c: 2}}))
    &&
    it('creates the tree structure if missing', () =>
      expect(obj.patch({a: 1}, ['b', 'c', 'd'], 2)).to.deep.equal({a: 1, b: {c: {d: 2}}}))
    &&
    it('preserves the objects prototype', () =>
      expect(obj.patch(new Date(), ['b', 'c'], 2))
        .to.be.an.instanceof(Date)
        .and.to.include.keys('b'))
    &&
    it('preserves the sub objects prototype', () =>
      expect(obj.patch({a: new Date()}, ['a', 'b', 'c'], 2)['a'])
        .to.be.an.instanceof(Date)
        .and.to.include.keys('b'))));
