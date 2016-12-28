'use strict';

const expect = require('chai').expect;

const obj = require('../../common/obj');

describe('common/obj', () =>
  describe('keyValue', () =>
    it('creates a new object with key and value provided in the arguments', () =>
      expect(
        obj.keyValue('foo', 'bar')
      ).to.deep.equal({foo: 'bar'})
    )
  )
);


// console.log(patch({}, ['a', 'b', 'c'], 'boom'));
// console.log(patch({}, 'x', 1));
// console.log(['a', 'b', 'c'].slice(1));
//
// console.log(patch({a: {d: '1'}}, 'a', {g: 2}));

// let o = {
// 	a: {b: {c: 123}}
// };
//
// console.log(sub(o, ['a', 'b', 3]));
