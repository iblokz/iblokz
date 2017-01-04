'use strict';

const expect = require('chai').expect;

const arr = require('../../common/arr');

describe('arr', () =>
  describe('fromList', () =>
    it('converts array like list object to array', () =>
      expect(
        arr.fromList(
          (function(){ return arguments})(1, 'a', {})
        )
      ).to.deep.equal([1, 'a', {}])
    )
  )
);
