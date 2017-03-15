const truebook = require('../example.json');
const falseBook = require('../package.json');

describe('Tests the InvertedIndex class: ', () => {
  const invertedIndexTrue = new InvertedIndex(truebook);
  const invertedIndexFalse = new InvertedIndex(falseBook);

<<<<<<< HEAD:spec/invertedIndexTests.js
  describe('InvertedIndex: checks file extension', () => {
=======
  describe('InvertedIndex: checkIfJson()', () => {
>>>>>>> 77d173fb367265b05bef0a2a2676b6982549be6c:spec/invertedIndexTests.js
    it('should return true for .json file', () => {
    expect(invertedIndexTrue.checkIfJson('example.json')).toEqual(true);
    });

    it('should return false for .txt file', () => {
    expect(invertedIndexTrue.checkIfJson('example.txt')).toEqual(false);
    });
  });

<<<<<<< HEAD:spec/invertedIndexTests.js
  describe('InvertedIndex: checks validity of file', () => {
=======
  describe('InvertedIndex: containsTitleText()', () => {
>>>>>>> 77d173fb367265b05bef0a2a2676b6982549be6c:spec/invertedIndexTests.js
    it('should return true for files containing titles and text', () => {
    expect(invertedIndexTrue.containsTitleText()).toEqual(true);
    });

    it('should return false for files containing titles and text', () => {
    expect(invertedIndexFalse.containsTitleText()).toEqual(false);
    });
  });

<<<<<<< HEAD:spec/invertedIndexTests.js
  describe('InvertedIndex: gets titles and text of file',
=======
  describe('InvertedIndex: getTitlesAndTexts()',
>>>>>>> 77d173fb367265b05bef0a2a2676b6982549be6c:spec/invertedIndexTests.js
  () => {
    const returnedObject = invertedIndexTrue.getTitlesAndTexts();

    it('should return true if returned value is an Array', () => {
    expect(returnedObject instanceof Array).toBeTruthy();
    });

    it('should return 2 for the length of returned value', () => {
    expect(returnedObject.length).toEqual(2);
    });
  });

<<<<<<< HEAD:spec/invertedIndexTests.js
  describe('InvertedIndex: gets indexed words', () => {
=======
  describe('InvertedIndex: getIndexedWords()', () => {
>>>>>>> 77d173fb367265b05bef0a2a2676b6982549be6c:spec/invertedIndexTests.js
    const returnedObject = invertedIndexTrue.getIndexedWords();

    it('should return true if returned value is an Array', () => {
    expect(returnedObject instanceof Array).toBeTruthy();
    });
  });

<<<<<<< HEAD:spec/invertedIndexTests.js
  describe('InvertedIndex: gets content to display', () => {
=======
  describe('InvertedIndex: contentToDisplay()', () => {
>>>>>>> 77d173fb367265b05bef0a2a2676b6982549be6c:spec/invertedIndexTests.js
    const returnedObject = invertedIndexTrue.contentToDisplay();
    const bool = (returnedObject[0].length === returnedObject[1].length);

    it('should return true if the values at indexes are equal', () => {
    expect(bool).toEqual(true);
    });

    it('should return true is returned value is an Array', () => {
    expect(returnedObject instanceof Array).toBeTruthy();
    });
  });

<<<<<<< HEAD:spec/invertedIndexTests.js
  describe('InvertedIndex: gets content to display in table format()', () => {
=======
  describe('InvertedIndex: displayInTableFormat()', () => {
>>>>>>> 77d173fb367265b05bef0a2a2676b6982549be6c:spec/invertedIndexTests.js
    const returnedObject = invertedIndexTrue.displayInTableFormat();
    const bool = (returnedObject[0].length === returnedObject[1].length);

    it('should return true if the values at indexes are equal', () => {
    expect(bool).toEqual(true);
    });

    it('should return true is returned value is an Array', () => {
    expect(returnedObject instanceof Array).toBeTruthy();
    });
  });

<<<<<<< HEAD:spec/invertedIndexTests.js
  describe('InvertedIndex: search indexed words',
=======
  describe('InvertedIndex: searchIndexedWords()',
>>>>>>> 77d173fb367265b05bef0a2a2676b6982549be6c:spec/invertedIndexTests.js
  () => {
    const returnedObject = invertedIndexTrue.searchIndexedWords(
      ['quick', 'An', 'unusual']);

    it('should return true is returned value is an Array', () => {
    expect(returnedObject instanceof Array).toBeTruthy();
    });
  });
});
