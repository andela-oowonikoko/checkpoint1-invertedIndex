const truebook = require('../example.json');
const falseBook = require('../package.json');

describe('Tests the InvertedIndex class: ', () => {
  const invertedIndexTrue = new InvertedIndex(truebook);
  const invertedIndexFalse = new InvertedIndex(falseBook);

  describe('InvertedIndex: checkIfJson()', () => {
    it('should return true for .json file', () => {
    expect(invertedIndexTrue.checkIfJson('example.json')).toEqual(true);
    });

    it('should return false for .txt file', () => {
    expect(invertedIndexTrue.checkIfJson('example.txt')).toEqual(false);
    });
  });

  describe('InvertedIndex: containsTitleText()', () => {
    it('should return true for files containing titles and text', () => {
    expect(invertedIndexTrue.containsTitleText()).toEqual(true);
    });

    it('should return false for files containing titles and text', () => {
    expect(invertedIndexFalse.containsTitleText()).toEqual(false);
    });
  });

  describe('InvertedIndex: getTitlesAndTexts()',
  () => {
    const returnedObject = invertedIndexTrue.getTitlesAndTexts();

    it('should return true if returned value is an Array', () => {
    expect(returnedObject instanceof Array).toBeTruthy();
    });

    it('should return 2 for the length of returned value', () => {
    expect(returnedObject.length).toEqual(2);
    });
  });

  describe('InvertedIndex: getIndexedWords()', () => {
    const returnedObject = invertedIndexTrue.getIndexedWords();

    it('should return true if returned value is an Array', () => {
    expect(returnedObject instanceof Array).toBeTruthy();
    });
  });

  describe('InvertedIndex: contentToDisplay()', () => {
    const returnedObject = invertedIndexTrue.contentToDisplay();
    const bool = (returnedObject[0].length === returnedObject[1].length);

    it('should return true if the values at indexes are equal', () => {
    expect(bool).toEqual(true);
    });

    it('should return true is returned value is an Array', () => {
    expect(returnedObject instanceof Array).toBeTruthy();
    });
  });

  describe('InvertedIndex: displayInTableFormat()', () => {
    const returnedObject = invertedIndexTrue.displayInTableFormat();
    const bool = (returnedObject[0].length === returnedObject[1].length);

    it('should return true if the values at indexes are equal', () => {
    expect(bool).toEqual(true);
    });

    it('should return true is returned value is an Array', () => {
    expect(returnedObject instanceof Array).toBeTruthy();
    });
  });

  describe('InvertedIndex: searchIndexedWords()',
  () => {
    const returnedObject = invertedIndexTrue.searchIndexedWords(
      ['quick', 'An', 'unusual']);

    it('should return true is returned value is an Array', () => {
    expect(returnedObject instanceof Array).toBeTruthy();
    });
  });
});
