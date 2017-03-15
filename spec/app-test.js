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

  describe('InvertedIndex: checks file extension', function () {
    it('should return true for .json file', function () {
      expect(invertedIndexTrue.checkIfJson('example.json')).toEqual(true);
    });

    it('should return false for .txt file', function () {
      expect(invertedIndexTrue.checkIfJson('example.txt')).toEqual(false);
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

  describe('InvertedIndex: gets content to display in table format()', function () {
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

},{"../example.json":1,"../package.json":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlLmpzb24iLCJwYWNrYWdlLmpzb24iLCJzcGVjL2ludmVydGVkSW5kZXh0ZXN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDMURBLElBQU0sV0FBVyxRQUFRLGlCQUFSLENBQWpCO0FBQ0EsSUFBTSxZQUFZLFFBQVEsaUJBQVIsQ0FBbEI7O0FBRUEsU0FBUyxpQ0FBVCxFQUE0QyxZQUFNO0FBQ2hELE1BQU0sb0JBQW9CLElBQUksYUFBSixDQUFrQixRQUFsQixDQUExQjtBQUNBLE1BQU0scUJBQXFCLElBQUksYUFBSixDQUFrQixTQUFsQixDQUEzQjs7QUFHQSxXQUFTLHNDQUFULEVBQWlELFlBQU07QUFDckQsT0FBRyxtQ0FBSCxFQUF3QyxZQUFNO0FBQzlDLGFBQU8sa0JBQWtCLFdBQWxCLENBQThCLGNBQTlCLENBQVAsRUFBc0QsT0FBdEQsQ0FBOEQsSUFBOUQ7QUFDQyxLQUZEOztBQUlBLE9BQUcsbUNBQUgsRUFBd0MsWUFBTTtBQUM5QyxhQUFPLGtCQUFrQixXQUFsQixDQUE4QixhQUE5QixDQUFQLEVBQXFELE9BQXJELENBQTZELEtBQTdEO0FBQ0MsS0FGRDtBQUdELEdBUkQ7O0FBVUEsV0FBUyx3Q0FBVCxFQUFtRCxZQUFNO0FBQ3ZELE9BQUcseURBQUgsRUFBOEQsWUFBTTtBQUNwRSxhQUFPLGtCQUFrQixpQkFBbEIsRUFBUCxFQUE4QyxPQUE5QyxDQUFzRCxJQUF0RDtBQUNDLEtBRkQ7O0FBSUEsT0FBRywwREFBSCxFQUErRCxZQUFNO0FBQ3JFLGFBQU8sbUJBQW1CLGlCQUFuQixFQUFQLEVBQStDLE9BQS9DLENBQXVELEtBQXZEO0FBQ0MsS0FGRDtBQUdELEdBUkQ7O0FBVUEsV0FBUyw2Q0FBVCxFQUF3RCxZQUFNO0FBQzVELFFBQU0saUJBQWlCLGtCQUFrQixpQkFBbEIsRUFBdkI7O0FBRUEsT0FBRyxrREFBSCxFQUF1RCxZQUFNO0FBQzdELGFBQU8sMEJBQTBCLEtBQWpDLEVBQXdDLFVBQXhDO0FBQ0MsS0FGRDs7QUFJQSxPQUFHLGtEQUFILEVBQXVELFlBQU07QUFDN0QsYUFBTyxlQUFlLE1BQXRCLEVBQThCLE9BQTlCLENBQXNDLENBQXRDO0FBQ0MsS0FGRDtBQUdELEdBVkQ7O0FBWUEsV0FBUyxtQ0FBVCxFQUE4QyxZQUFNO0FBQ2xELFFBQU0saUJBQWlCLGtCQUFrQixlQUFsQixFQUF2Qjs7QUFFQSxPQUFHLGtEQUFILEVBQXVELFlBQU07QUFDN0QsYUFBTywwQkFBMEIsS0FBakMsRUFBd0MsVUFBeEM7QUFDQyxLQUZEO0FBR0QsR0FORDs7QUFRQSxXQUFTLHdDQUFULEVBQW1ELFlBQU07QUFDdkQsUUFBTSxpQkFBaUIsa0JBQWtCLGdCQUFsQixFQUF2QjtBQUNBLFFBQU0sT0FBUSxlQUFlLENBQWYsRUFBa0IsTUFBbEIsS0FBNkIsZUFBZSxDQUFmLEVBQWtCLE1BQTdEOztBQUVBLE9BQUcsdURBQUgsRUFBNEQsWUFBTTtBQUNsRSxhQUFPLElBQVAsRUFBYSxPQUFiLENBQXFCLElBQXJCO0FBQ0MsS0FGRDs7QUFJQSxPQUFHLGtEQUFILEVBQXVELFlBQU07QUFDN0QsYUFBTywwQkFBMEIsS0FBakMsRUFBd0MsVUFBeEM7QUFDQyxLQUZEO0FBR0QsR0FYRDs7QUFhQSxXQUFTLDBEQUFULEVBQXFFLFlBQU07QUFDekUsUUFBTSxpQkFBaUIsa0JBQWtCLG9CQUFsQixFQUF2QjtBQUNBLFFBQU0sT0FBUSxlQUFlLENBQWYsRUFBa0IsTUFBbEIsS0FBNkIsZUFBZSxDQUFmLEVBQWtCLE1BQTdEOztBQUVBLE9BQUcsdURBQUgsRUFBNEQsWUFBTTtBQUNsRSxhQUFPLElBQVAsRUFBYSxPQUFiLENBQXFCLElBQXJCO0FBQ0MsS0FGRDs7QUFJQSxPQUFHLGtEQUFILEVBQXVELFlBQU07QUFDN0QsYUFBTywwQkFBMEIsS0FBakMsRUFBd0MsVUFBeEM7QUFDQyxLQUZEO0FBR0QsR0FYRDs7QUFhQSxXQUFTLHFDQUFULEVBQWdELFlBQU07QUFDcEQsUUFBTSxpQkFBaUIsa0JBQWtCLGtCQUFsQixDQUNyQixDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQWdCLFNBQWhCLENBRHFCLENBQXZCOztBQUdBLE9BQUcsa0RBQUgsRUFBdUQsWUFBTTtBQUM3RCxhQUFPLDBCQUEwQixLQUFqQyxFQUF3QyxVQUF4QztBQUNDLEtBRkQ7QUFHRCxHQVBEO0FBUUQsQ0EvRUQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHM9W1xuICB7XG4gICAgXCJ0aXRsZVwiOiBcIkFsaWNlIGluIFdvbmRlcmxhbmRcIixcbiAgICBcInRleHRcIjogXCJBbGljZSBmYWxscyBpbnRvIGEgcmFiYml0IGhvbGUgYW5kIGVudGVycyBhIHdvcmxkIGZ1bGwgb2YgaW1hZ2luYXRpb24uXCJcbiAgfSxcblxuICB7XG4gICAgXCJ0aXRsZVwiOiBcIlRoZSBMb3JkIG9mIHRoZSBSaW5nczogVGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmcuXCIsXG4gICAgXCJ0ZXh0XCI6IFwiQW4gdW51c3VhbCBhbGxpYW5jZSBvZiBtYW4sIGVsZiwgZHdhcmYsIHdpemFyZCBhbmQgaG9iYml0IHNlZWsgdG8gZGVzdHJveSBhIHBvd2VyZnVsIHJpbmcuXCJcbiAgfSxcbiAge1xuICAgIFwidGl0bGVcIjogXCJUaGUgTG9yZCBvZiB0aGUgUmluZ3M6IFRoZSBGZWxsb3dzaGlwIG9mIHRoZSBSaW5nLlwiLFxuICAgIFwidGV4dFwiOiBcIkFuIHVudXN1YWwgYWxsaWFuY2Ugb2YgbWFuLCBlbGYsIGR3YXJmLCB3aXphcmQgYW5kIGhvYmJpdCBzZWVrIHRvIGRlc3Ryb3kgYSBwb3dlcmZ1bCByaW5nLlwiXG4gIH1cbl0iLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwibmFtZVwiOiBcImludmVydGVkaW5kZXhcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMS4wLjBcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcInNlYXJjaCBmaWxlc1wiLFxuICBcIm1haW5cIjogXCJpbmRleC5qc1wiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwidGVzdFwiOiBcIm5vZGVfbW9kdWxlcy9rYXJtYS9iaW4va2FybWEgc3RhcnQgLS1zaW5nbGUtcnVuIHx8IHRydWVcIixcbiAgICBcInN0YXJ0XCI6IFwibm9kZSBzZXJ2ZXIuanNcIlxuICB9LFxuICBcImVuZ2luZXNcIjoge1xuICAgIFwibm9kZVwiOiBcIjQuMi42XCIsXG4gICAgXCJucG1cIjogXCI0LjAuM1wiXG4gIH0sXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJnaXQraHR0cHM6Ly9naXRodWIuY29tL2FuZGVsYS1vb3dvbmlrb2tvL2NoZWNrcG9pbnQxLWludmVydGVkSW5kZXguZ2l0XCJcbiAgfSxcbiAgXCJhdXRob3JcIjogXCJzZXVua29rb1wiLFxuICBcImxpY2Vuc2VcIjogXCJJU0NcIixcbiAgXCJidWdzXCI6IHtcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hbmRlbGEtb293b25pa29rby9jaGVja3BvaW50MS1pbnZlcnRlZEluZGV4L2lzc3Vlc1wiXG4gIH0sXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2dpdGh1Yi5jb20vYW5kZWxhLW9vd29uaWtva28vY2hlY2twb2ludDEtaW52ZXJ0ZWRJbmRleCNyZWFkbWVcIixcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiYmFiZWwtcHJlc2V0LWVzMjAxNVwiOiBcIl42LjIyLjBcIixcbiAgICBcImJhYmVsaWZ5XCI6IFwiXjcuMy4wXCIsXG4gICAgXCJicm93c2VyLXN5bmNcIjogXCJeMi4xOC44XCIsXG4gICAgXCJicm93c2VyaWZ5XCI6IFwiXjE0LjEuMFwiLFxuICAgIFwiZXNsaW50LWNvbmZpZy1haXJibmJcIjogXCJeMTQuMS4wXCIsXG4gICAgXCJleHByZXNzXCI6IFwiXjQuMTQuMVwiLFxuICAgIFwiZ3VscFwiOiBcIl4zLjkuMVwiLFxuICAgIFwibm9kZW1vblwiOiBcIl4xLjExLjBcIixcbiAgICBcInZpbnlsLXNvdXJjZS1zdHJlYW1cIjogXCJeMS4xLjBcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJiYWJlbC1wcmVzZXQtZXMyMDE1XCI6IFwiXjYuMjIuMFwiLFxuICAgIFwiYmFiZWxpZnlcIjogXCJeNy4zLjBcIixcbiAgICBcImJyb3dzZXItc3luY1wiOiBcIl4yLjE4LjhcIixcbiAgICBcImJyb3dzZXJpZnlcIjogXCJeMTQuMS4wXCIsXG4gICAgXCJjb3ZlcmFsbHNcIjogXCJeMi4xMS4xNlwiLFxuICAgIFwiZXNsaW50XCI6IFwiXjMuMTUuMFwiLFxuICAgIFwiZXNsaW50LWNvbmZpZy1haXJibmItYmFzZVwiOiBcIl4xMS4xLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4taW1wb3J0XCI6IFwiXjIuMi4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLWpzeC1hMTF5XCI6IFwiXjMuMC4yXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXJlYWN0XCI6IFwiXjYuMTAuMFwiLFxuICAgIFwiZ3VscFwiOiBcIl4zLjkuMVwiLFxuICAgIFwiamFzbWluZVwiOiBcIl4yLjUuM1wiLFxuICAgIFwiamFzbWluZS1jb3JlXCI6IFwiXjIuNS4yXCIsXG4gICAgXCJrYXJtYVwiOiBcIl4xLjUuMFwiLFxuICAgIFwia2FybWEtY2hyb21lLWxhdW5jaGVyXCI6IFwiXjIuMC4wXCIsXG4gICAgXCJrYXJtYS1jb3ZlcmFnZVwiOiBcIl4xLjEuMVwiLFxuICAgIFwia2FybWEtY292ZXJhbGxzXCI6IFwiXjEuMS4yXCIsXG4gICAgXCJrYXJtYS1qYXNtaW5lXCI6IFwiXjEuMS4wXCIsXG4gICAgXCJrYXJtYS1zcGVjLXJlcG9ydGVyXCI6IFwiMC4wLjI2XCIsXG4gICAgXCJrYXJtYS12ZXJib3NlLXJlcG9ydGVyXCI6IFwiMC4wLjVcIixcbiAgICBcInZpbnlsLXNvdXJjZS1zdHJlYW1cIjogXCJeMS4xLjBcIlxuICB9XG59XG4iLCJjb25zdCB0cnVlYm9vayA9IHJlcXVpcmUoJy4uL2V4YW1wbGUuanNvbicpO1xuY29uc3QgZmFsc2VCb29rID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJyk7XG5cbmRlc2NyaWJlKCdUZXN0cyB0aGUgSW52ZXJ0ZWRJbmRleCBjbGFzczogJywgKCkgPT4ge1xuICBjb25zdCBpbnZlcnRlZEluZGV4VHJ1ZSA9IG5ldyBJbnZlcnRlZEluZGV4KHRydWVib29rKTtcbiAgY29uc3QgaW52ZXJ0ZWRJbmRleEZhbHNlID0gbmV3IEludmVydGVkSW5kZXgoZmFsc2VCb29rKTtcblxuXG4gIGRlc2NyaWJlKCdJbnZlcnRlZEluZGV4OiBjaGVja3MgZmlsZSBleHRlbnNpb24nLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gdHJ1ZSBmb3IgLmpzb24gZmlsZScsICgpID0+IHtcbiAgICBleHBlY3QoaW52ZXJ0ZWRJbmRleFRydWUuY2hlY2tJZkpzb24oJ2V4YW1wbGUuanNvbicpKS50b0VxdWFsKHRydWUpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gZmFsc2UgZm9yIC50eHQgZmlsZScsICgpID0+IHtcbiAgICBleHBlY3QoaW52ZXJ0ZWRJbmRleFRydWUuY2hlY2tJZkpzb24oJ2V4YW1wbGUudHh0JykpLnRvRXF1YWwoZmFsc2UpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnSW52ZXJ0ZWRJbmRleDogY2hlY2tzIHZhbGlkaXR5IG9mIGZpbGUnLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gdHJ1ZSBmb3IgZmlsZXMgY29udGFpbmluZyB0aXRsZXMgYW5kIHRleHQnLCAoKSA9PiB7XG4gICAgZXhwZWN0KGludmVydGVkSW5kZXhUcnVlLmNvbnRhaW5zVGl0bGVUZXh0KCkpLnRvRXF1YWwodHJ1ZSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBmYWxzZSBmb3IgZmlsZXMgY29udGFpbmluZyB0aXRsZXMgYW5kIHRleHQnLCAoKSA9PiB7XG4gICAgZXhwZWN0KGludmVydGVkSW5kZXhGYWxzZS5jb250YWluc1RpdGxlVGV4dCgpKS50b0VxdWFsKGZhbHNlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ0ludmVydGVkSW5kZXg6IGdldHMgdGl0bGVzIGFuZCB0ZXh0IG9mIGZpbGUnLCAoKSA9PiB7XG4gICAgY29uc3QgcmV0dXJuZWRPYmplY3QgPSBpbnZlcnRlZEluZGV4VHJ1ZS5nZXRUaXRsZXNBbmRUZXh0cygpO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gdHJ1ZSBpZiByZXR1cm5lZCB2YWx1ZSBpcyBhbiBBcnJheScsICgpID0+IHtcbiAgICBleHBlY3QocmV0dXJuZWRPYmplY3QgaW5zdGFuY2VvZiBBcnJheSkudG9CZVRydXRoeSgpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gMiBmb3IgdGhlIGxlbmd0aCBvZiByZXR1cm5lZCB2YWx1ZScsICgpID0+IHtcbiAgICBleHBlY3QocmV0dXJuZWRPYmplY3QubGVuZ3RoKS50b0VxdWFsKDIpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnSW52ZXJ0ZWRJbmRleDogZ2V0cyBpbmRleGVkIHdvcmRzJywgKCkgPT4ge1xuICAgIGNvbnN0IHJldHVybmVkT2JqZWN0ID0gaW52ZXJ0ZWRJbmRleFRydWUuZ2V0SW5kZXhlZFdvcmRzKCk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiB0cnVlIGlmIHJldHVybmVkIHZhbHVlIGlzIGFuIEFycmF5JywgKCkgPT4ge1xuICAgIGV4cGVjdChyZXR1cm5lZE9iamVjdCBpbnN0YW5jZW9mIEFycmF5KS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdJbnZlcnRlZEluZGV4OiBnZXRzIGNvbnRlbnQgdG8gZGlzcGxheScsICgpID0+IHtcbiAgICBjb25zdCByZXR1cm5lZE9iamVjdCA9IGludmVydGVkSW5kZXhUcnVlLmNvbnRlbnRUb0Rpc3BsYXkoKTtcbiAgICBjb25zdCBib29sID0gKHJldHVybmVkT2JqZWN0WzBdLmxlbmd0aCA9PT0gcmV0dXJuZWRPYmplY3RbMV0ubGVuZ3RoKTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIHRydWUgaWYgdGhlIHZhbHVlcyBhdCBpbmRleGVzIGFyZSBlcXVhbCcsICgpID0+IHtcbiAgICBleHBlY3QoYm9vbCkudG9FcXVhbCh0cnVlKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIHRydWUgaXMgcmV0dXJuZWQgdmFsdWUgaXMgYW4gQXJyYXknLCAoKSA9PiB7XG4gICAgZXhwZWN0KHJldHVybmVkT2JqZWN0IGluc3RhbmNlb2YgQXJyYXkpLnRvQmVUcnV0aHkoKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ0ludmVydGVkSW5kZXg6IGdldHMgY29udGVudCB0byBkaXNwbGF5IGluIHRhYmxlIGZvcm1hdCgpJywgKCkgPT4ge1xuICAgIGNvbnN0IHJldHVybmVkT2JqZWN0ID0gaW52ZXJ0ZWRJbmRleFRydWUuZGlzcGxheUluVGFibGVGb3JtYXQoKTtcbiAgICBjb25zdCBib29sID0gKHJldHVybmVkT2JqZWN0WzBdLmxlbmd0aCA9PT0gcmV0dXJuZWRPYmplY3RbMV0ubGVuZ3RoKTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIHRydWUgaWYgdGhlIHZhbHVlcyBhdCBpbmRleGVzIGFyZSBlcXVhbCcsICgpID0+IHtcbiAgICBleHBlY3QoYm9vbCkudG9FcXVhbCh0cnVlKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIHRydWUgaXMgcmV0dXJuZWQgdmFsdWUgaXMgYW4gQXJyYXknLCAoKSA9PiB7XG4gICAgZXhwZWN0KHJldHVybmVkT2JqZWN0IGluc3RhbmNlb2YgQXJyYXkpLnRvQmVUcnV0aHkoKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ0ludmVydGVkSW5kZXg6IHNlYXJjaCBpbmRleGVkIHdvcmRzJywgKCkgPT4ge1xuICAgIGNvbnN0IHJldHVybmVkT2JqZWN0ID0gaW52ZXJ0ZWRJbmRleFRydWUuc2VhcmNoSW5kZXhlZFdvcmRzKFxuICAgICAgWydxdWljaycsICdBbicsICd1bnVzdWFsJ10pO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gdHJ1ZSBpcyByZXR1cm5lZCB2YWx1ZSBpcyBhbiBBcnJheScsICgpID0+IHtcbiAgICBleHBlY3QocmV0dXJuZWRPYmplY3QgaW5zdGFuY2VvZiBBcnJheSkudG9CZVRydXRoeSgpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl19
