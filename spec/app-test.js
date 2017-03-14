(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
'use strict';

var truebook = require('../example.json');
var falseBook = require('../package.json');

describe('Tests the InvertedIndex class: ', function () {
  var invertedIndexTrue = new InvertedIndex(truebook);
  var invertedIndexFalse = new InvertedIndex(falseBook);

  describe('InvertedIndex: checkIfJson()', function () {
    it('should return true for .json file', function () {
      expect(invertedIndexTrue.checkIfJson('example.json')).toEqual(true);
    });

    it('should return false for .txt file', function () {
      expect(invertedIndexTrue.checkIfJson('example.txt')).toEqual(false);
    });
  });

  describe('InvertedIndex: containsTitleText()', function () {
    it('should return true for files containing titles and text', function () {
      expect(invertedIndexTrue.containsTitleText()).toEqual(true);
    });

    it('should return false for files containing titles and text', function () {
      expect(invertedIndexFalse.containsTitleText()).toEqual(false);
    });
  });

  describe('InvertedIndex: getTitlesAndTexts()', function () {
    var returnedObject = invertedIndexTrue.getTitlesAndTexts();

    it('should return true if returned value is an Array', function () {
      expect(returnedObject instanceof Array).toBeTruthy();
    });

    it('should return 2 for the length of returned value', function () {
      expect(returnedObject.length).toEqual(2);
    });
  });

  describe('InvertedIndex: getIndexedWords()', function () {
    var returnedObject = invertedIndexTrue.getIndexedWords();

    it('should return true if returned value is an Array', function () {
      expect(returnedObject instanceof Array).toBeTruthy();
    });
  });

  describe('InvertedIndex: contentToDisplay()', function () {
    var returnedObject = invertedIndexTrue.contentToDisplay();
    var bool = returnedObject[0].length === returnedObject[1].length;

    it('should return true if the values at indexes are equal', function () {
      expect(bool).toEqual(true);
    });

    it('should return true is returned value is an Array', function () {
      expect(returnedObject instanceof Array).toBeTruthy();
    });
  });

  describe('InvertedIndex: displayInTableFormat()', function () {
    var returnedObject = invertedIndexTrue.displayInTableFormat();
    var bool = returnedObject[0].length === returnedObject[1].length;

    it('should return true if the values at indexes are equal', function () {
      expect(bool).toEqual(true);
    });

    it('should return true is returned value is an Array', function () {
      expect(returnedObject instanceof Array).toBeTruthy();
    });
  });

  describe('InvertedIndex: searchIndexedWords()', function () {
    var returnedObject = invertedIndexTrue.searchIndexedWords(['quick', 'An', 'unusual']);

    it('should return true is returned value is an Array', function () {
      expect(returnedObject instanceof Array).toBeTruthy();
    });
  });
});

},{"../example.json":1,"../package.json":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlLmpzb24iLCJwYWNrYWdlLmpzb24iLCJzcGVjL2ludmVydGVkSW5kZXh0ZXN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDMURBLElBQU0sV0FBVyxRQUFRLGlCQUFSLENBQWpCO0FBQ0EsSUFBTSxZQUFZLFFBQVEsaUJBQVIsQ0FBbEI7O0FBRUEsU0FBUyxpQ0FBVCxFQUE0QyxZQUFNO0FBQ2hELE1BQU0sb0JBQW9CLElBQUksYUFBSixDQUFrQixRQUFsQixDQUExQjtBQUNBLE1BQU0scUJBQXFCLElBQUksYUFBSixDQUFrQixTQUFsQixDQUEzQjs7QUFFQSxXQUFTLDhCQUFULEVBQXlDLFlBQU07QUFDN0MsT0FBRyxtQ0FBSCxFQUF3QyxZQUFNO0FBQzlDLGFBQU8sa0JBQWtCLFdBQWxCLENBQThCLGNBQTlCLENBQVAsRUFBc0QsT0FBdEQsQ0FBOEQsSUFBOUQ7QUFDQyxLQUZEOztBQUlBLE9BQUcsbUNBQUgsRUFBd0MsWUFBTTtBQUM5QyxhQUFPLGtCQUFrQixXQUFsQixDQUE4QixhQUE5QixDQUFQLEVBQXFELE9BQXJELENBQTZELEtBQTdEO0FBQ0MsS0FGRDtBQUdELEdBUkQ7O0FBVUEsV0FBUyxvQ0FBVCxFQUErQyxZQUFNO0FBQ25ELE9BQUcseURBQUgsRUFBOEQsWUFBTTtBQUNwRSxhQUFPLGtCQUFrQixpQkFBbEIsRUFBUCxFQUE4QyxPQUE5QyxDQUFzRCxJQUF0RDtBQUNDLEtBRkQ7O0FBSUEsT0FBRywwREFBSCxFQUErRCxZQUFNO0FBQ3JFLGFBQU8sbUJBQW1CLGlCQUFuQixFQUFQLEVBQStDLE9BQS9DLENBQXVELEtBQXZEO0FBQ0MsS0FGRDtBQUdELEdBUkQ7O0FBVUEsV0FBUyxvQ0FBVCxFQUNBLFlBQU07QUFDSixRQUFNLGlCQUFpQixrQkFBa0IsaUJBQWxCLEVBQXZCOztBQUVBLE9BQUcsa0RBQUgsRUFBdUQsWUFBTTtBQUM3RCxhQUFPLDBCQUEwQixLQUFqQyxFQUF3QyxVQUF4QztBQUNDLEtBRkQ7O0FBSUEsT0FBRyxrREFBSCxFQUF1RCxZQUFNO0FBQzdELGFBQU8sZUFBZSxNQUF0QixFQUE4QixPQUE5QixDQUFzQyxDQUF0QztBQUNDLEtBRkQ7QUFHRCxHQVhEOztBQWFBLFdBQVMsa0NBQVQsRUFBNkMsWUFBTTtBQUNqRCxRQUFNLGlCQUFpQixrQkFBa0IsZUFBbEIsRUFBdkI7O0FBRUEsT0FBRyxrREFBSCxFQUF1RCxZQUFNO0FBQzdELGFBQU8sMEJBQTBCLEtBQWpDLEVBQXdDLFVBQXhDO0FBQ0MsS0FGRDtBQUdELEdBTkQ7O0FBUUEsV0FBUyxtQ0FBVCxFQUE4QyxZQUFNO0FBQ2xELFFBQU0saUJBQWlCLGtCQUFrQixnQkFBbEIsRUFBdkI7QUFDQSxRQUFNLE9BQVEsZUFBZSxDQUFmLEVBQWtCLE1BQWxCLEtBQTZCLGVBQWUsQ0FBZixFQUFrQixNQUE3RDs7QUFFQSxPQUFHLHVEQUFILEVBQTRELFlBQU07QUFDbEUsYUFBTyxJQUFQLEVBQWEsT0FBYixDQUFxQixJQUFyQjtBQUNDLEtBRkQ7O0FBSUEsT0FBRyxrREFBSCxFQUF1RCxZQUFNO0FBQzdELGFBQU8sMEJBQTBCLEtBQWpDLEVBQXdDLFVBQXhDO0FBQ0MsS0FGRDtBQUdELEdBWEQ7O0FBYUEsV0FBUyx1Q0FBVCxFQUFrRCxZQUFNO0FBQ3RELFFBQU0saUJBQWlCLGtCQUFrQixvQkFBbEIsRUFBdkI7QUFDQSxRQUFNLE9BQVEsZUFBZSxDQUFmLEVBQWtCLE1BQWxCLEtBQTZCLGVBQWUsQ0FBZixFQUFrQixNQUE3RDs7QUFFQSxPQUFHLHVEQUFILEVBQTRELFlBQU07QUFDbEUsYUFBTyxJQUFQLEVBQWEsT0FBYixDQUFxQixJQUFyQjtBQUNDLEtBRkQ7O0FBSUEsT0FBRyxrREFBSCxFQUF1RCxZQUFNO0FBQzdELGFBQU8sMEJBQTBCLEtBQWpDLEVBQXdDLFVBQXhDO0FBQ0MsS0FGRDtBQUdELEdBWEQ7O0FBYUEsV0FBUyxxQ0FBVCxFQUNBLFlBQU07QUFDSixRQUFNLGlCQUFpQixrQkFBa0Isa0JBQWxCLENBQ3JCLENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsU0FBaEIsQ0FEcUIsQ0FBdkI7O0FBR0EsT0FBRyxrREFBSCxFQUF1RCxZQUFNO0FBQzdELGFBQU8sMEJBQTBCLEtBQWpDLEVBQXdDLFVBQXhDO0FBQ0MsS0FGRDtBQUdELEdBUkQ7QUFTRCxDQWhGRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cz1bXG4gIHtcbiAgICBcInRpdGxlXCI6IFwiQWxpY2UgaW4gV29uZGVybGFuZFwiLFxuICAgIFwidGV4dFwiOiBcIkFsaWNlIGZhbGxzIGludG8gYSByYWJiaXQgaG9sZSBhbmQgZW50ZXJzIGEgd29ybGQgZnVsbCBvZiBpbWFnaW5hdGlvbi5cIlxuICB9LFxuXG4gIHtcbiAgICBcInRpdGxlXCI6IFwiVGhlIExvcmQgb2YgdGhlIFJpbmdzOiBUaGUgRmVsbG93c2hpcCBvZiB0aGUgUmluZy5cIixcbiAgICBcInRleHRcIjogXCJBbiB1bnVzdWFsIGFsbGlhbmNlIG9mIG1hbiwgZWxmLCBkd2FyZiwgd2l6YXJkIGFuZCBob2JiaXQgc2VlayB0byBkZXN0cm95IGEgcG93ZXJmdWwgcmluZy5cIlxuICB9LFxuICB7XG4gICAgXCJ0aXRsZVwiOiBcIlRoZSBMb3JkIG9mIHRoZSBSaW5nczogVGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmcuXCIsXG4gICAgXCJ0ZXh0XCI6IFwiQW4gdW51c3VhbCBhbGxpYW5jZSBvZiBtYW4sIGVsZiwgZHdhcmYsIHdpemFyZCBhbmQgaG9iYml0IHNlZWsgdG8gZGVzdHJveSBhIHBvd2VyZnVsIHJpbmcuXCJcbiAgfVxuXSIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJuYW1lXCI6IFwiaW52ZXJ0ZWRpbmRleFwiLFxuICBcInZlcnNpb25cIjogXCIxLjAuMFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwic2VhcmNoIGZpbGVzXCIsXG4gIFwibWFpblwiOiBcImluZGV4LmpzXCIsXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJ0ZXN0XCI6IFwibm9kZV9tb2R1bGVzL2thcm1hL2Jpbi9rYXJtYSBzdGFydCAtLXNpbmdsZS1ydW4gfHwgdHJ1ZVwiLFxuICAgIFwic3RhcnRcIjogXCJub2RlIHNlcnZlci5qc1wiXG4gIH0sXG4gIFwiZW5naW5lc1wiOiB7XG4gICAgXCJub2RlXCI6IFwiNC4yLjZcIixcbiAgICBcIm5wbVwiOiBcIjQuMC4zXCJcbiAgfSxcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcInVybFwiOiBcImdpdCtodHRwczovL2dpdGh1Yi5jb20vYW5kZWxhLW9vd29uaWtva28vY2hlY2twb2ludDEtaW52ZXJ0ZWRJbmRleC5naXRcIlxuICB9LFxuICBcImF1dGhvclwiOiBcInNldW5rb2tvXCIsXG4gIFwibGljZW5zZVwiOiBcIklTQ1wiLFxuICBcImJ1Z3NcIjoge1xuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FuZGVsYS1vb3dvbmlrb2tvL2NoZWNrcG9pbnQxLWludmVydGVkSW5kZXgvaXNzdWVzXCJcbiAgfSxcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hbmRlbGEtb293b25pa29rby9jaGVja3BvaW50MS1pbnZlcnRlZEluZGV4I3JlYWRtZVwiLFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJiYWJlbC1wcmVzZXQtZXMyMDE1XCI6IFwiXjYuMjIuMFwiLFxuICAgIFwiYmFiZWxpZnlcIjogXCJeNy4zLjBcIixcbiAgICBcImJyb3dzZXItc3luY1wiOiBcIl4yLjE4LjhcIixcbiAgICBcImJyb3dzZXJpZnlcIjogXCJeMTQuMS4wXCIsXG4gICAgXCJlc2xpbnQtY29uZmlnLWFpcmJuYlwiOiBcIl4xNC4xLjBcIixcbiAgICBcImV4cHJlc3NcIjogXCJeNC4xNC4xXCIsXG4gICAgXCJndWxwXCI6IFwiXjMuOS4xXCIsXG4gICAgXCJub2RlbW9uXCI6IFwiXjEuMTEuMFwiLFxuICAgIFwidmlueWwtc291cmNlLXN0cmVhbVwiOiBcIl4xLjEuMFwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImJhYmVsLXByZXNldC1lczIwMTVcIjogXCJeNi4yMi4wXCIsXG4gICAgXCJiYWJlbGlmeVwiOiBcIl43LjMuMFwiLFxuICAgIFwiYnJvd3Nlci1zeW5jXCI6IFwiXjIuMTguOFwiLFxuICAgIFwiYnJvd3NlcmlmeVwiOiBcIl4xNC4xLjBcIixcbiAgICBcImNvdmVyYWxsc1wiOiBcIl4yLjExLjE2XCIsXG4gICAgXCJlc2xpbnRcIjogXCJeMy4xNS4wXCIsXG4gICAgXCJlc2xpbnQtY29uZmlnLWFpcmJuYi1iYXNlXCI6IFwiXjExLjEuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1pbXBvcnRcIjogXCJeMi4yLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tanN4LWExMXlcIjogXCJeMy4wLjJcIixcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3RcIjogXCJeNi4xMC4wXCIsXG4gICAgXCJndWxwXCI6IFwiXjMuOS4xXCIsXG4gICAgXCJqYXNtaW5lXCI6IFwiXjIuNS4zXCIsXG4gICAgXCJqYXNtaW5lLWNvcmVcIjogXCJeMi41LjJcIixcbiAgICBcImthcm1hXCI6IFwiXjEuNS4wXCIsXG4gICAgXCJrYXJtYS1jaHJvbWUtbGF1bmNoZXJcIjogXCJeMi4wLjBcIixcbiAgICBcImthcm1hLWNvdmVyYWdlXCI6IFwiXjEuMS4xXCIsXG4gICAgXCJrYXJtYS1jb3ZlcmFsbHNcIjogXCJeMS4xLjJcIixcbiAgICBcImthcm1hLWphc21pbmVcIjogXCJeMS4xLjBcIixcbiAgICBcImthcm1hLXNwZWMtcmVwb3J0ZXJcIjogXCIwLjAuMjZcIixcbiAgICBcImthcm1hLXZlcmJvc2UtcmVwb3J0ZXJcIjogXCIwLjAuNVwiLFxuICAgIFwidmlueWwtc291cmNlLXN0cmVhbVwiOiBcIl4xLjEuMFwiXG4gIH1cbn1cbiIsImNvbnN0IHRydWVib29rID0gcmVxdWlyZSgnLi4vZXhhbXBsZS5qc29uJyk7XG5jb25zdCBmYWxzZUJvb2sgPSByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKTtcblxuZGVzY3JpYmUoJ1Rlc3RzIHRoZSBJbnZlcnRlZEluZGV4IGNsYXNzOiAnLCAoKSA9PiB7XG4gIGNvbnN0IGludmVydGVkSW5kZXhUcnVlID0gbmV3IEludmVydGVkSW5kZXgodHJ1ZWJvb2spO1xuICBjb25zdCBpbnZlcnRlZEluZGV4RmFsc2UgPSBuZXcgSW52ZXJ0ZWRJbmRleChmYWxzZUJvb2spO1xuXG4gIGRlc2NyaWJlKCdJbnZlcnRlZEluZGV4OiBjaGVja0lmSnNvbigpJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgcmV0dXJuIHRydWUgZm9yIC5qc29uIGZpbGUnLCAoKSA9PiB7XG4gICAgZXhwZWN0KGludmVydGVkSW5kZXhUcnVlLmNoZWNrSWZKc29uKCdleGFtcGxlLmpzb24nKSkudG9FcXVhbCh0cnVlKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGZhbHNlIGZvciAudHh0IGZpbGUnLCAoKSA9PiB7XG4gICAgZXhwZWN0KGludmVydGVkSW5kZXhUcnVlLmNoZWNrSWZKc29uKCdleGFtcGxlLnR4dCcpKS50b0VxdWFsKGZhbHNlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ0ludmVydGVkSW5kZXg6IGNvbnRhaW5zVGl0bGVUZXh0KCknLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gdHJ1ZSBmb3IgZmlsZXMgY29udGFpbmluZyB0aXRsZXMgYW5kIHRleHQnLCAoKSA9PiB7XG4gICAgZXhwZWN0KGludmVydGVkSW5kZXhUcnVlLmNvbnRhaW5zVGl0bGVUZXh0KCkpLnRvRXF1YWwodHJ1ZSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBmYWxzZSBmb3IgZmlsZXMgY29udGFpbmluZyB0aXRsZXMgYW5kIHRleHQnLCAoKSA9PiB7XG4gICAgZXhwZWN0KGludmVydGVkSW5kZXhGYWxzZS5jb250YWluc1RpdGxlVGV4dCgpKS50b0VxdWFsKGZhbHNlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ0ludmVydGVkSW5kZXg6IGdldFRpdGxlc0FuZFRleHRzKCknLFxuICAoKSA9PiB7XG4gICAgY29uc3QgcmV0dXJuZWRPYmplY3QgPSBpbnZlcnRlZEluZGV4VHJ1ZS5nZXRUaXRsZXNBbmRUZXh0cygpO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gdHJ1ZSBpZiByZXR1cm5lZCB2YWx1ZSBpcyBhbiBBcnJheScsICgpID0+IHtcbiAgICBleHBlY3QocmV0dXJuZWRPYmplY3QgaW5zdGFuY2VvZiBBcnJheSkudG9CZVRydXRoeSgpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gMiBmb3IgdGhlIGxlbmd0aCBvZiByZXR1cm5lZCB2YWx1ZScsICgpID0+IHtcbiAgICBleHBlY3QocmV0dXJuZWRPYmplY3QubGVuZ3RoKS50b0VxdWFsKDIpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnSW52ZXJ0ZWRJbmRleDogZ2V0SW5kZXhlZFdvcmRzKCknLCAoKSA9PiB7XG4gICAgY29uc3QgcmV0dXJuZWRPYmplY3QgPSBpbnZlcnRlZEluZGV4VHJ1ZS5nZXRJbmRleGVkV29yZHMoKTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIHRydWUgaWYgcmV0dXJuZWQgdmFsdWUgaXMgYW4gQXJyYXknLCAoKSA9PiB7XG4gICAgZXhwZWN0KHJldHVybmVkT2JqZWN0IGluc3RhbmNlb2YgQXJyYXkpLnRvQmVUcnV0aHkoKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ0ludmVydGVkSW5kZXg6IGNvbnRlbnRUb0Rpc3BsYXkoKScsICgpID0+IHtcbiAgICBjb25zdCByZXR1cm5lZE9iamVjdCA9IGludmVydGVkSW5kZXhUcnVlLmNvbnRlbnRUb0Rpc3BsYXkoKTtcbiAgICBjb25zdCBib29sID0gKHJldHVybmVkT2JqZWN0WzBdLmxlbmd0aCA9PT0gcmV0dXJuZWRPYmplY3RbMV0ubGVuZ3RoKTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIHRydWUgaWYgdGhlIHZhbHVlcyBhdCBpbmRleGVzIGFyZSBlcXVhbCcsICgpID0+IHtcbiAgICBleHBlY3QoYm9vbCkudG9FcXVhbCh0cnVlKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIHRydWUgaXMgcmV0dXJuZWQgdmFsdWUgaXMgYW4gQXJyYXknLCAoKSA9PiB7XG4gICAgZXhwZWN0KHJldHVybmVkT2JqZWN0IGluc3RhbmNlb2YgQXJyYXkpLnRvQmVUcnV0aHkoKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ0ludmVydGVkSW5kZXg6IGRpc3BsYXlJblRhYmxlRm9ybWF0KCknLCAoKSA9PiB7XG4gICAgY29uc3QgcmV0dXJuZWRPYmplY3QgPSBpbnZlcnRlZEluZGV4VHJ1ZS5kaXNwbGF5SW5UYWJsZUZvcm1hdCgpO1xuICAgIGNvbnN0IGJvb2wgPSAocmV0dXJuZWRPYmplY3RbMF0ubGVuZ3RoID09PSByZXR1cm5lZE9iamVjdFsxXS5sZW5ndGgpO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gdHJ1ZSBpZiB0aGUgdmFsdWVzIGF0IGluZGV4ZXMgYXJlIGVxdWFsJywgKCkgPT4ge1xuICAgIGV4cGVjdChib29sKS50b0VxdWFsKHRydWUpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gdHJ1ZSBpcyByZXR1cm5lZCB2YWx1ZSBpcyBhbiBBcnJheScsICgpID0+IHtcbiAgICBleHBlY3QocmV0dXJuZWRPYmplY3QgaW5zdGFuY2VvZiBBcnJheSkudG9CZVRydXRoeSgpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnSW52ZXJ0ZWRJbmRleDogc2VhcmNoSW5kZXhlZFdvcmRzKCknLFxuICAoKSA9PiB7XG4gICAgY29uc3QgcmV0dXJuZWRPYmplY3QgPSBpbnZlcnRlZEluZGV4VHJ1ZS5zZWFyY2hJbmRleGVkV29yZHMoXG4gICAgICBbJ3F1aWNrJywgJ0FuJywgJ3VudXN1YWwnXSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiB0cnVlIGlzIHJldHVybmVkIHZhbHVlIGlzIGFuIEFycmF5JywgKCkgPT4ge1xuICAgIGV4cGVjdChyZXR1cm5lZE9iamVjdCBpbnN0YW5jZW9mIEFycmF5KS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXX0=
