(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[
  {
    "title": "",
    "text": ""
  },

  {
    "title": "",
    "text": ""
  }
]
},{}],2:[function(require,module,exports){
module.exports=[
  {
    "title": "Alice in Wonderland",
    "text": "Alice falls into a rabbit hole and enters a world full of imagination."
  },

  {
    "title": "The Lord of the Rings: The Fellowship of the Ring.",
    "text": "An unusual alliance of man, elf, dwarf, wizard and hobbit seek to destroy a powerful ring."
  },
  {
    "title": "The Lord of the Rings: The Fellowship of the Ring.",
    "text": "An unusual alliance of man, elf, dwarf, wizard and hobbit seek to destroy a powerful ring."
  }
]
},{}],3:[function(require,module,exports){
module.exports={
  "name": "invertedindex",
  "version": "1.0.0",
  "description": "search files",
  "main": "index.js",
  "scripts": {
    "test": "node_modules/karma/bin/karma start --single-run || true",
    "start": "node server.js"
  },
  "engines": {
    "node": "4.2.6",
    "npm": "4.0.3"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/andela-oowonikoko/checkpoint1-invertedIndex.git"
  },
  "author": "seunkoko",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/andela-oowonikoko/checkpoint1-invertedIndex/issues"
  },
  "homepage": "https://github.com/andela-oowonikoko/checkpoint1-invertedIndex#readme",
  "dependencies": {
    "babel-preset-es2015": "^6.22.0",
    "babelify": "^7.3.0",
    "browser-sync": "^2.18.8",
    "browserify": "^14.1.0",
    "eslint-config-airbnb": "^14.1.0",
    "express": "^4.14.1",
    "gulp": "^3.9.1",
    "nodemon": "^1.11.0",
    "vinyl-source-stream": "^1.1.0"
  },
  "devDependencies": {
    "babel-preset-es2015": "^6.22.0",
    "babelify": "^7.3.0",
    "browser-sync": "^2.18.8",
    "browserify": "^14.1.0",
    "coveralls": "^2.11.16",
    "eslint": "^3.15.0",
    "eslint-config-airbnb-base": "^11.1.0",
    "eslint-plugin-import": "^2.2.0",
    "eslint-plugin-jsx-a11y": "^3.0.2",
    "eslint-plugin-react": "^6.10.0",
    "gulp": "^3.9.1",
    "jasmine": "^2.5.3",
    "jasmine-core": "^2.5.2",
    "karma": "^1.5.0",
    "karma-chrome-launcher": "^2.0.0",
    "karma-coverage": "^1.1.1",
    "karma-coveralls": "^1.1.2",
    "karma-jasmine": "^1.1.0",
    "karma-spec-reporter": "0.0.26",
    "karma-verbose-reporter": "0.0.5",
    "vinyl-source-stream": "^1.1.0"
  }
}

},{}],4:[function(require,module,exports){
'use strict';

var truebook = require('../example.json');
var falseBook = require('../package.json');
var emptyBook = require('../emptyFile.json');

describe('Tests the InvertedIndex class: ', function () {
  var invertedIndexTrue = new InvertedIndex(truebook);
  var invertedIndexFalse = new InvertedIndex(falseBook);
  var InvertedIndexEmpty = new InvertedIndex(emptyBook);

  describe('InvertedIndex: is instance of a class', function () {
    it('should return true for instance of invertedIndexTrue', function () {
      expect(invertedIndexTrue instanceof Object).toBeTruthy();
      expect(invertedIndexFalse instanceof Object).toBeTruthy();
      expect(InvertedIndexEmpty instanceof Object).toBeTruthy();
    });
  });

  describe('InvertedIndex: checks if methods are defined', function () {
    it('should check if method is defined in InvertedIndex', function () {
      expect(invertedIndexTrue.getTitlesAndTexts).toBeDefined();
      expect(invertedIndexTrue.checkIfJson).toBeDefined();
      expect(invertedIndexTrue.containsTitleText).toBeDefined();
      expect(invertedIndexTrue.contentToDisplay).toBeDefined();
      expect(invertedIndexTrue.displayInTableFormat).toBeDefined();
      expect(invertedIndexTrue.getIndexedWords).toBeDefined();
      expect(invertedIndexTrue.cleanIndexedWords).toBeDefined();
      expect(invertedIndexTrue.searchIndexedWords).toBeDefined();
    });
  });

  describe('InvertedIndex: checks file extension', function () {
    it('should return true for .json file', function () {
      expect(invertedIndexTrue.checkIfJson('example.json')).toEqual(true);
    });

    it('should return false for .txt file', function () {
      expect(invertedIndexTrue.checkIfJson('example.txt')).toEqual(false);
    });
  });

  describe('InvertedIndex: checks if file is empty', function () {
    var returnedObject = InvertedIndexEmpty.getTitlesAndTexts();
    var testValue = false;
    if (returnedObject[0].titles[0] === "" || returnedObject[0].texts[0] === "") {
      testValue = true;
    }

    it('should return true for empty file', function () {
      expect(testValue).toEqual(true);
    });
  });

  describe('InvertedIndex: checks validity of file', function () {
    it('should return true for files containing titles and text', function () {
      expect(invertedIndexTrue.containsTitleText()).toEqual(true);
    });

    it('should return false for files containing titles and text', function () {
      expect(invertedIndexFalse.containsTitleText()).toEqual(false);
    });
  });

  describe('InvertedIndex: gets titles and text of file', function () {
    var returnedObject = invertedIndexTrue.getTitlesAndTexts();

    it('should return true if returned value is an Array', function () {
      expect(returnedObject instanceof Array).toBeTruthy();
    });

    it('should return 2 for the length of returned value', function () {
      expect(returnedObject.length).toEqual(2);
    });
  });

  describe('InvertedIndex: gets indexed words', function () {
    var returnedObject = invertedIndexTrue.getIndexedWords();

    it('should return true if returned value is an Array', function () {
      expect(returnedObject instanceof Array).toBeTruthy();
    });
  });

  describe('InvertedIndex: gets content to display', function () {
    var returnedObject = invertedIndexTrue.contentToDisplay();
    var bool = returnedObject[0].length === returnedObject[1].length;

    it('should return true if the values at indexes are equal', function () {
      expect(bool).toEqual(true);
    });

    it('should return true is returned value is an Array', function () {
      expect(returnedObject instanceof Array).toBeTruthy();
    });
  });

  describe('InvertedIndex: gets content to display in table format', function () {
    var returnedObject = invertedIndexTrue.displayInTableFormat();
    var bool = returnedObject[0].length === returnedObject[1].length;

    it('should return true if the values at indexes are equal', function () {
      expect(bool).toEqual(true);
    });

    it('should return true is returned value is an Array', function () {
      expect(returnedObject instanceof Array).toBeTruthy();
    });
  });

  describe('InvertedIndex: search indexed words', function () {
    var returnedObject = invertedIndexTrue.searchIndexedWords(['quick', 'An', 'unusual']);

    it('should return true is returned value is an Array', function () {
      expect(returnedObject instanceof Array).toBeTruthy();
    });
  });
});

},{"../emptyFile.json":1,"../example.json":2,"../package.json":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJlbXB0eUZpbGUuanNvbiIsImV4YW1wbGUuanNvbiIsInBhY2thZ2UuanNvbiIsInNwZWMvaW52ZXJ0ZWRJbmRleHRlc3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzFEQSxJQUFNLFdBQVcsUUFBUSxpQkFBUixDQUFqQjtBQUNBLElBQU0sWUFBWSxRQUFRLGlCQUFSLENBQWxCO0FBQ0EsSUFBTSxZQUFZLFFBQVEsbUJBQVIsQ0FBbEI7O0FBRUEsU0FBUyxpQ0FBVCxFQUE0QyxZQUFNO0FBQ2hELE1BQU0sb0JBQW9CLElBQUksYUFBSixDQUFrQixRQUFsQixDQUExQjtBQUNBLE1BQU0scUJBQXFCLElBQUksYUFBSixDQUFrQixTQUFsQixDQUEzQjtBQUNBLE1BQU0scUJBQXFCLElBQUksYUFBSixDQUFrQixTQUFsQixDQUEzQjs7QUFFQSxXQUFTLHVDQUFULEVBQWtELFlBQU07QUFDdEQsT0FBRyxz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QSxPQUFHLHVEQUFILEVBQTRELFlBQU07QUFDbEUsYUFBTyxJQUFQLEVBQWEsT0FBYixDQUFxQixJQUFyQjtBQUNDLEtBRkQ7O0FBSUEsT0FBRyxrREFBSCxFQUF1RCxZQUFNO0FBQzdELGFBQU8sMEJBQTBCLEtBQWpDLEVBQXdDLFVBQXhDO0FBQ0MsS0FGRDtBQUdELEdBWEQ7O0FBYUEsV0FBUyx3REFBVCxFQUFtRSxZQUFNO0FBQ3ZFLFFBQU0saUJBQWlCLGtCQUFrQixvQkFBbEIsRUFBdkI7QUFDQSxRQUFNLE9BQVEsZUFBZSxDQUFmLEVBQWtCLE1BQWxCLEtBQTZCLGVBQWUsQ0FBZixFQUFrQixNQUE3RDs7QUFFQSxPQUFHLHVEQUFILEVBQTRELFlBQU07QUFDbEUsYUFBTyxJQUFQLEVBQWEsT0FBYixDQUFxQixJQUFyQjtBQUNDLEtBRkQ7O0FBSUEsT0FBRyxrREFBSCxFQUF1RCxZQUFNO0FBQzdELGFBQU8sMEJBQTBCLEtBQWpDLEVBQXdDLFVBQXhDO0FBQ0MsS0FGRDtBQUdELEdBWEQ7O0FBYUEsV0FBUyxxQ0FBVCxFQUFnRCxZQUFNO0FBQ3BELFFBQU0saUJBQWlCLGtCQUFrQixrQkFBbEIsQ0FDckIsQ0FBQyxPQUFELEVBQVUsSUFBVixFQUFnQixTQUFoQixDQURxQixDQUF2Qjs7QUFHQSxPQUFHLGtEQUFILEVBQXVELFlBQU07QUFDN0QsYUFBTywwQkFBMEIsS0FBakMsRUFBd0MsVUFBeEM7QUFDQyxLQUZEO0FBR0QsR0FQRDtBQVFELENBaEhEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzPVtcbiAge1xuICAgIFwidGl0bGVcIjogXCJcIixcbiAgICBcInRleHRcIjogXCJcIlxuICB9LFxuXG4gIHtcbiAgICBcInRpdGxlXCI6IFwiXCIsXG4gICAgXCJ0ZXh0XCI6IFwiXCJcbiAgfVxuXSIsIm1vZHVsZS5leHBvcnRzPVtcbiAge1xuICAgIFwidGl0bGVcIjogXCJBbGljZSBpbiBXb25kZXJsYW5kXCIsXG4gICAgXCJ0ZXh0XCI6IFwiQWxpY2UgZmFsbHMgaW50byBhIHJhYmJpdCBob2xlIGFuZCBlbnRlcnMgYSB3b3JsZCBmdWxsIG9mIGltYWdpbmF0aW9uLlwiXG4gIH0sXG5cbiAge1xuICAgIFwidGl0bGVcIjogXCJUaGUgTG9yZCBvZiB0aGUgUmluZ3M6IFRoZSBGZWxsb3dzaGlwIG9mIHRoZSBSaW5nLlwiLFxuICAgIFwidGV4dFwiOiBcIkFuIHVudXN1YWwgYWxsaWFuY2Ugb2YgbWFuLCBlbGYsIGR3YXJmLCB3aXphcmQgYW5kIGhvYmJpdCBzZWVrIHRvIGRlc3Ryb3kgYSBwb3dlcmZ1bCByaW5nLlwiXG4gIH0sXG4gIHtcbiAgICBcInRpdGxlXCI6IFwiVGhlIExvcmQgb2YgdGhlIFJpbmdzOiBUaGUgRmVsbG93c2hpcCBvZiB0aGUgUmluZy5cIixcbiAgICBcInRleHRcIjogXCJBbiB1bnVzdWFsIGFsbGlhbmNlIG9mIG1hbiwgZWxmLCBkd2FyZiwgd2l6YXJkIGFuZCBob2JiaXQgc2VlayB0byBkZXN0cm95IGEgcG93ZXJmdWwgcmluZy5cIlxuICB9XG5dIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcIm5hbWVcIjogXCJpbnZlcnRlZGluZGV4XCIsXG4gIFwidmVyc2lvblwiOiBcIjEuMC4wXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJzZWFyY2ggZmlsZXNcIixcbiAgXCJtYWluXCI6IFwiaW5kZXguanNcIixcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcInRlc3RcIjogXCJub2RlX21vZHVsZXMva2FybWEvYmluL2thcm1hIHN0YXJ0IC0tc2luZ2xlLXJ1biB8fCB0cnVlXCIsXG4gICAgXCJzdGFydFwiOiBcIm5vZGUgc2VydmVyLmpzXCJcbiAgfSxcbiAgXCJlbmdpbmVzXCI6IHtcbiAgICBcIm5vZGVcIjogXCI0LjIuNlwiLFxuICAgIFwibnBtXCI6IFwiNC4wLjNcIlxuICB9LFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9hbmRlbGEtb293b25pa29rby9jaGVja3BvaW50MS1pbnZlcnRlZEluZGV4LmdpdFwiXG4gIH0sXG4gIFwiYXV0aG9yXCI6IFwic2V1bmtva29cIixcbiAgXCJsaWNlbnNlXCI6IFwiSVNDXCIsXG4gIFwiYnVnc1wiOiB7XG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vYW5kZWxhLW9vd29uaWtva28vY2hlY2twb2ludDEtaW52ZXJ0ZWRJbmRleC9pc3N1ZXNcIlxuICB9LFxuICBcImhvbWVwYWdlXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FuZGVsYS1vb3dvbmlrb2tvL2NoZWNrcG9pbnQxLWludmVydGVkSW5kZXgjcmVhZG1lXCIsXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImJhYmVsLXByZXNldC1lczIwMTVcIjogXCJeNi4yMi4wXCIsXG4gICAgXCJiYWJlbGlmeVwiOiBcIl43LjMuMFwiLFxuICAgIFwiYnJvd3Nlci1zeW5jXCI6IFwiXjIuMTguOFwiLFxuICAgIFwiYnJvd3NlcmlmeVwiOiBcIl4xNC4xLjBcIixcbiAgICBcImVzbGludC1jb25maWctYWlyYm5iXCI6IFwiXjE0LjEuMFwiLFxuICAgIFwiZXhwcmVzc1wiOiBcIl40LjE0LjFcIixcbiAgICBcImd1bHBcIjogXCJeMy45LjFcIixcbiAgICBcIm5vZGVtb25cIjogXCJeMS4xMS4wXCIsXG4gICAgXCJ2aW55bC1zb3VyY2Utc3RyZWFtXCI6IFwiXjEuMS4wXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiYmFiZWwtcHJlc2V0LWVzMjAxNVwiOiBcIl42LjIyLjBcIixcbiAgICBcImJhYmVsaWZ5XCI6IFwiXjcuMy4wXCIsXG4gICAgXCJicm93c2VyLXN5bmNcIjogXCJeMi4xOC44XCIsXG4gICAgXCJicm93c2VyaWZ5XCI6IFwiXjE0LjEuMFwiLFxuICAgIFwiY292ZXJhbGxzXCI6IFwiXjIuMTEuMTZcIixcbiAgICBcImVzbGludFwiOiBcIl4zLjE1LjBcIixcbiAgICBcImVzbGludC1jb25maWctYWlyYm5iLWJhc2VcIjogXCJeMTEuMS4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLWltcG9ydFwiOiBcIl4yLjIuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1qc3gtYTExeVwiOiBcIl4zLjAuMlwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdFwiOiBcIl42LjEwLjBcIixcbiAgICBcImd1bHBcIjogXCJeMy45LjFcIixcbiAgICBcImphc21pbmVcIjogXCJeMi41LjNcIixcbiAgICBcImphc21pbmUtY29yZVwiOiBcIl4yLjUuMlwiLFxuICAgIFwia2FybWFcIjogXCJeMS41LjBcIixcbiAgICBcImthcm1hLWNocm9tZS1sYXVuY2hlclwiOiBcIl4yLjAuMFwiLFxuICAgIFwia2FybWEtY292ZXJhZ2VcIjogXCJeMS4xLjFcIixcbiAgICBcImthcm1hLWNvdmVyYWxsc1wiOiBcIl4xLjEuMlwiLFxuICAgIFwia2FybWEtamFzbWluZVwiOiBcIl4xLjEuMFwiLFxuICAgIFwia2FybWEtc3BlYy1yZXBvcnRlclwiOiBcIjAuMC4yNlwiLFxuICAgIFwia2FybWEtdmVyYm9zZS1yZXBvcnRlclwiOiBcIjAuMC41XCIsXG4gICAgXCJ2aW55bC1zb3VyY2Utc3RyZWFtXCI6IFwiXjEuMS4wXCJcbiAgfVxufVxuIiwiY29uc3QgdHJ1ZWJvb2sgPSByZXF1aXJlKCcuLi9leGFtcGxlLmpzb24nKTtcbmNvbnN0IGZhbHNlQm9vayA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpO1xuY29uc3QgZW1wdHlCb29rID0gcmVxdWlyZSgnLi4vZW1wdHlGaWxlLmpzb24nKTtcblxuZGVzY3JpYmUoJ1Rlc3RzIHRoZSBJbnZlcnRlZEluZGV4IGNsYXNzOiAnLCAoKSA9PiB7XG4gIGNvbnN0IGludmVydGVkSW5kZXhUcnVlID0gbmV3IEludmVydGVkSW5kZXgodHJ1ZWJvb2spO1xuICBjb25zdCBpbnZlcnRlZEluZGV4RmFsc2UgPSBuZXcgSW52ZXJ0ZWRJbmRleChmYWxzZUJvb2spO1xuICBjb25zdCBJbnZlcnRlZEluZGV4RW1wdHkgPSBuZXcgSW52ZXJ0ZWRJbmRleChlbXB0eUJvb2spO1xuXG4gIGRlc2NyaWJlKCdJbnZlcnRlZEluZGV4OiBpcyBpbnN0YW5jZSBvZiBhIGNsYXNzJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgcmV0dXJuIHRydWUgZm9yIGluc3RhbmNlIG9mIGludmVydGVkSW5kZXhUcnVlJywgKCkgPT4ge1xuICAgIGV4cGVjdChpbnZlcnRlZEluZGV4VHJ1ZSBpbnN0YW5jZW9mIE9iamVjdCkudG9CZVRydXRoeSgpO1xuICAgIGV4cGVjdChpbnZlcnRlZEluZGV4RmFsc2UgaW5zdGFuY2VvZiBPYmplY3QpLnRvQmVUcnV0aHkoKTtcbiAgICBleHBlY3QoSW52ZXJ0ZWRJbmRleEVtcHR5IGluc3RhbmNlb2YgT2JqZWN0KS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdJbnZlcnRlZEluZGV4OiBjaGVja3MgaWYgbWV0aG9kcyBhcmUgZGVmaW5lZCcsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIGNoZWNrIGlmIG1ldGhvZCBpcyBkZWZpbmVkIGluIEludmVydGVkSW5kZXgnLCAoKSA9PiB7XG4gICAgZXhwZWN0KGludmVydGVkSW5kZXhUcnVlLmdldFRpdGxlc0FuZFRleHRzKS50b0JlRGVmaW5lZCgpO1xuICAgIGV4cGVjdChpbnZlcnRlZEluZGV4VHJ1ZS5jaGVja0lmSnNvbikudG9CZURlZmluZWQoKTtcbiAgICBleHBlY3QoaW52ZXJ0ZWRJbmRleFRydWUuY29udGFpbnNUaXRsZVRleHQpLnRvQmVEZWZpbmVkKCk7XG4gICAgZXhwZWN0KGludmVydGVkSW5kZXhUcnVlLmNvbnRlbnRUb0Rpc3BsYXkpLnRvQmVEZWZpbmVkKCk7XG4gICAgZXhwZWN0KGludmVydGVkSW5kZXhUcnVlLmRpc3BsYXlJblRhYmxlRm9ybWF0KS50b0JlRGVmaW5lZCgpO1xuICAgIGV4cGVjdChpbnZlcnRlZEluZGV4VHJ1ZS5nZXRJbmRleGVkV29yZHMpLnRvQmVEZWZpbmVkKCk7XG4gICAgZXhwZWN0KGludmVydGVkSW5kZXhUcnVlLmNsZWFuSW5kZXhlZFdvcmRzKS50b0JlRGVmaW5lZCgpO1xuICAgIGV4cGVjdChpbnZlcnRlZEluZGV4VHJ1ZS5zZWFyY2hJbmRleGVkV29yZHMpLnRvQmVEZWZpbmVkKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdJbnZlcnRlZEluZGV4OiBjaGVja3MgZmlsZSBleHRlbnNpb24nLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gdHJ1ZSBmb3IgLmpzb24gZmlsZScsICgpID0+IHtcbiAgICBleHBlY3QoaW52ZXJ0ZWRJbmRleFRydWUuY2hlY2tJZkpzb24oJ2V4YW1wbGUuanNvbicpKS50b0VxdWFsKHRydWUpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gZmFsc2UgZm9yIC50eHQgZmlsZScsICgpID0+IHtcbiAgICBleHBlY3QoaW52ZXJ0ZWRJbmRleFRydWUuY2hlY2tJZkpzb24oJ2V4YW1wbGUudHh0JykpLnRvRXF1YWwoZmFsc2UpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnSW52ZXJ0ZWRJbmRleDogY2hlY2tzIGlmIGZpbGUgaXMgZW1wdHknLCAoKSA9PiB7XG4gICAgY29uc3QgcmV0dXJuZWRPYmplY3QgPSBJbnZlcnRlZEluZGV4RW1wdHkuZ2V0VGl0bGVzQW5kVGV4dHMoKTtcbiAgICBsZXQgdGVzdFZhbHVlID0gZmFsc2U7XG4gICAgaWYgKChyZXR1cm5lZE9iamVjdFswXS50aXRsZXNbMF0gPT09IFwiXCIpIHx8IChyZXR1cm5lZE9iamVjdFswXS50ZXh0c1swIF0gPT09IFwiXCIpKSB7XG4gICAgICB0ZXN0VmFsdWUgPSB0cnVlO1xuICAgIH1cblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIHRydWUgZm9yIGVtcHR5IGZpbGUnLCAoKSA9PiB7XG4gICAgZXhwZWN0KHRlc3RWYWx1ZSkudG9FcXVhbCh0cnVlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ0ludmVydGVkSW5kZXg6IGNoZWNrcyB2YWxpZGl0eSBvZiBmaWxlJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgcmV0dXJuIHRydWUgZm9yIGZpbGVzIGNvbnRhaW5pbmcgdGl0bGVzIGFuZCB0ZXh0JywgKCkgPT4ge1xuICAgIGV4cGVjdChpbnZlcnRlZEluZGV4VHJ1ZS5jb250YWluc1RpdGxlVGV4dCgpKS50b0VxdWFsKHRydWUpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gZmFsc2UgZm9yIGZpbGVzIGNvbnRhaW5pbmcgdGl0bGVzIGFuZCB0ZXh0JywgKCkgPT4ge1xuICAgIGV4cGVjdChpbnZlcnRlZEluZGV4RmFsc2UuY29udGFpbnNUaXRsZVRleHQoKSkudG9FcXVhbChmYWxzZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdJbnZlcnRlZEluZGV4OiBnZXRzIHRpdGxlcyBhbmQgdGV4dCBvZiBmaWxlJywgKCkgPT4ge1xuICAgIGNvbnN0IHJldHVybmVkT2JqZWN0ID0gaW52ZXJ0ZWRJbmRleFRydWUuZ2V0VGl0bGVzQW5kVGV4dHMoKTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIHRydWUgaWYgcmV0dXJuZWQgdmFsdWUgaXMgYW4gQXJyYXknLCAoKSA9PiB7XG4gICAgZXhwZWN0KHJldHVybmVkT2JqZWN0IGluc3RhbmNlb2YgQXJyYXkpLnRvQmVUcnV0aHkoKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIDIgZm9yIHRoZSBsZW5ndGggb2YgcmV0dXJuZWQgdmFsdWUnLCAoKSA9PiB7XG4gICAgZXhwZWN0KHJldHVybmVkT2JqZWN0Lmxlbmd0aCkudG9FcXVhbCgyKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ0ludmVydGVkSW5kZXg6IGdldHMgaW5kZXhlZCB3b3JkcycsICgpID0+IHtcbiAgICBjb25zdCByZXR1cm5lZE9iamVjdCA9IGludmVydGVkSW5kZXhUcnVlLmdldEluZGV4ZWRXb3JkcygpO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gdHJ1ZSBpZiByZXR1cm5lZCB2YWx1ZSBpcyBhbiBBcnJheScsICgpID0+IHtcbiAgICBleHBlY3QocmV0dXJuZWRPYmplY3QgaW5zdGFuY2VvZiBBcnJheSkudG9CZVRydXRoeSgpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnSW52ZXJ0ZWRJbmRleDogZ2V0cyBjb250ZW50IHRvIGRpc3BsYXknLCAoKSA9PiB7XG4gICAgY29uc3QgcmV0dXJuZWRPYmplY3QgPSBpbnZlcnRlZEluZGV4VHJ1ZS5jb250ZW50VG9EaXNwbGF5KCk7XG4gICAgY29uc3QgYm9vbCA9IChyZXR1cm5lZE9iamVjdFswXS5sZW5ndGggPT09IHJldHVybmVkT2JqZWN0WzFdLmxlbmd0aCk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiB0cnVlIGlmIHRoZSB2YWx1ZXMgYXQgaW5kZXhlcyBhcmUgZXF1YWwnLCAoKSA9PiB7XG4gICAgZXhwZWN0KGJvb2wpLnRvRXF1YWwodHJ1ZSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiB0cnVlIGlzIHJldHVybmVkIHZhbHVlIGlzIGFuIEFycmF5JywgKCkgPT4ge1xuICAgIGV4cGVjdChyZXR1cm5lZE9iamVjdCBpbnN0YW5jZW9mIEFycmF5KS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdJbnZlcnRlZEluZGV4OiBnZXRzIGNvbnRlbnQgdG8gZGlzcGxheSBpbiB0YWJsZSBmb3JtYXQnLCAoKSA9PiB7XG4gICAgY29uc3QgcmV0dXJuZWRPYmplY3QgPSBpbnZlcnRlZEluZGV4VHJ1ZS5kaXNwbGF5SW5UYWJsZUZvcm1hdCgpO1xuICAgIGNvbnN0IGJvb2wgPSAocmV0dXJuZWRPYmplY3RbMF0ubGVuZ3RoID09PSByZXR1cm5lZE9iamVjdFsxXS5sZW5ndGgpO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gdHJ1ZSBpZiB0aGUgdmFsdWVzIGF0IGluZGV4ZXMgYXJlIGVxdWFsJywgKCkgPT4ge1xuICAgIGV4cGVjdChib29sKS50b0VxdWFsKHRydWUpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gdHJ1ZSBpcyByZXR1cm5lZCB2YWx1ZSBpcyBhbiBBcnJheScsICgpID0+IHtcbiAgICBleHBlY3QocmV0dXJuZWRPYmplY3QgaW5zdGFuY2VvZiBBcnJheSkudG9CZVRydXRoeSgpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnSW52ZXJ0ZWRJbmRleDogc2VhcmNoIGluZGV4ZWQgd29yZHMnLCAoKSA9PiB7XG4gICAgY29uc3QgcmV0dXJuZWRPYmplY3QgPSBpbnZlcnRlZEluZGV4VHJ1ZS5zZWFyY2hJbmRleGVkV29yZHMoXG4gICAgICBbJ3F1aWNrJywgJ0FuJywgJ3VudXN1YWwnXSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiB0cnVlIGlzIHJldHVybmVkIHZhbHVlIGlzIGFuIEFycmF5JywgKCkgPT4ge1xuICAgIGV4cGVjdChyZXR1cm5lZE9iamVjdCBpbnN0YW5jZW9mIEFycmF5KS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXX0=
