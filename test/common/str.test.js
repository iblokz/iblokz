'use strict';

const expect = require('chai').expect;

const str = require('../../common/str');

describe('common/str', () =>
  describe('toCamelCase', () =>
    it('should convert dash separated str to camelcase', () =>
      expect(
        str.toCamelCase('inch-high-private-eye', '-')
      ).to.equal('inchHighPrivateEye')
    )
    &&
    it('should convert underscore separated str to camelcase', () =>
      expect(
        str.toCamelCase('inch_high_private_eye', '_')
      ).to.equal('inchHighPrivateEye')
    )
  )
  &&
  describe('fromCamelCase', () =>
    it('should convert camelcase str to dash separated', () =>
      expect(
        str.fromCamelCase('inchHighPrivateEye', '-')
      ).to.equal('inch-high-private-eye')
    )
    &&
    it('should convert camelcase str to underscore separated', () =>
      expect(
        str.fromCamelCase('inchHighPrivateEye', '_')
      ).to.equal('inch_high_private_eye')
    )
  )
  &&
  describe('singularToPlural', () =>
    it('should convert to plural normal strings', () =>
      expect(
        str.singularToPlural('task', '-')
      ).to.equal('tasks')
    )
    &&
    it('should convert to plural strings ending in y', () =>
      expect(
        str.singularToPlural('company', '-')
      ).to.equal('companies')
    )
  )
  &&
  describe('pluralToSingular', () =>
    it('should convert to singular normal strings', () =>
      expect(
        str.pluralToSingular('tasks', '-')
      ).to.equal('task')
    )
    &&
    it('should convert to singular strings ending in ..ies', () =>
      expect(
        str.pluralToSingular('companies', '-')
      ).to.equal('company')
    )
  )
  &&
  describe('toDocumentId', () =>
    it('should convert dash separated collection name to camelcase document id', () =>
      expect(
        str.toDocumentId('user-comments')
      ).to.equal(':userCommentId')
    )
  )
);
