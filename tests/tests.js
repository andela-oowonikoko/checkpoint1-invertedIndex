
  'use strict';

  // var checkIfJson = require('../public/invertedIndexTests.js');

  describe('Checks if an uploaded file is .json: ', function() {
    describe("Case for .json file been uploaded", function() {

      it('should return true for .json file', function() {
      expect(checkIfJson('json')).toEqual(true);
      });
    });

    describe('Case for .txt file been uploaded', function() {

      it('should return false for .txt file', function() {
      expect(checkIfJson('txt')).toEqual(false);
      });
    });
  });
