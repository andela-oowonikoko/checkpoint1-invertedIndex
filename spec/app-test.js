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
    "start": "node public/app.js"
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
    "eslint-config-airbnb": "^14.1.0",
    "express": "^4.14.1",
    "nodemon": "^1.11.0"
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

describe('Tests the invertedIndex.js class: ', function () {
  var invertedIndexTrue = new InvertedIndex(truebook);
  var invertedIndexFalse = new InvertedIndex(falseBook);

  describe('Checks if file extension is json', function () {
    it('should return true for .json file', function () {
      expect(invertedIndexTrue.checkIfJson('example.json')).toEqual(true);
    });

    it('should return false for .txt file', function () {
      expect(invertedIndexTrue.checkIfJson('example.txt')).toEqual(false);
    });
  });

  describe('Checks if uploaded file contains title and text', function () {
    it('should return true for truebook', function () {
      expect(invertedIndexTrue.containsTitleText()).toEqual(true);
    });

    it('should return false for falsebook', function () {
      expect(invertedIndexFalse.containsTitleText()).toEqual(false);
    });
  });

  describe('Checks if value returned by getTitlesAndTexts() is an object', function () {
    var returnedObject = invertedIndexTrue.getTitlesAndTexts();

    it('should return Object for (typeof returnedObject)', function () {
      expect(returnedObject instanceof Array).toBeTruthy();
    });
  });

  describe('Checks if object returned by getTitlesAndTexts() is of length 2', function () {
    var returnedObject = invertedIndexTrue.getTitlesAndTexts();

    it('should return 2', function () {
      expect(returnedObject.length).toEqual(2);
    });
  });

  describe('Checks if value returned by getIndexedWords() is an object', function () {
    var returnedObject = invertedIndexTrue.getIndexedWords();

    it('should return Object for (typeof returnedObject)', function () {
      expect(returnedObject instanceof Array).toBeTruthy();
    });
  });

  describe('Checks the value returned by contentToDisplay()', function () {
    var returnedObject = invertedIndexTrue.contentToDisplay();
    var bool = returnedObject[0].length === returnedObject[1].length;

    it('should return true if the values at indexes are equal', function () {
      expect(bool).toEqual(true);
    });

    it('should return Object for typeof value', function () {
      expect(returnedObject instanceof Array).toBeTruthy();
    });
  });

  describe('Checks the value returned by displayInTableFormat()', function () {
    var returnedObject = invertedIndexTrue.displayInTableFormat();
    var bool = returnedObject[0].length === returnedObject[1].length;

    it('should return true if the values at indexes are equal', function () {
      expect(bool).toEqual(true);
    });

    it('should return Object for typeof value', function () {
      expect(returnedObject instanceof Array).toBeTruthy();
    });
  });

  describe('Checks if the value returned by searchIndexedWords() is an Object', function () {
    var returnedObject = invertedIndexTrue.searchIndexedWords(['quick', 'An', 'unusual']);

    it('should return Object for typeof value', function () {
      expect(returnedObject instanceof Array).toBeTruthy();
    });
  });
});

},{"../example.json":1,"../package.json":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlLmpzb24iLCJwYWNrYWdlLmpzb24iLCJzcGVjL3Rlc3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNwREEsSUFBTSxXQUFXLFFBQVEsaUJBQVIsQ0FBakI7QUFDQSxJQUFNLFlBQVksUUFBUSxpQkFBUixDQUFsQjs7QUFFQSxTQUFTLG9DQUFULEVBQStDLFlBQU07QUFDbkQsTUFBTSxvQkFBb0IsSUFBSSxhQUFKLENBQWtCLFFBQWxCLENBQTFCO0FBQ0EsTUFBTSxxQkFBcUIsSUFBSSxhQUFKLENBQWtCLFNBQWxCLENBQTNCOztBQUVBLFdBQVMsa0NBQVQsRUFBNkMsWUFBTTtBQUNqRCxPQUFHLG1DQUFILEVBQXdDLFlBQU07QUFDOUMsYUFBTyxrQkFBa0IsV0FBbEIsQ0FBOEIsY0FBOUIsQ0FBUCxFQUFzRCxPQUF0RCxDQUE4RCxJQUE5RDtBQUNDLEtBRkQ7O0FBSUEsT0FBRyxtQ0FBSCxFQUF3QyxZQUFNO0FBQzlDLGFBQU8sa0JBQWtCLFdBQWxCLENBQThCLGFBQTlCLENBQVAsRUFBcUQsT0FBckQsQ0FBNkQsS0FBN0Q7QUFDQyxLQUZEO0FBR0QsR0FSRDs7QUFVQSxXQUFTLGlEQUFULEVBQTRELFlBQU07QUFDaEUsT0FBRyxpQ0FBSCxFQUFzQyxZQUFNO0FBQzVDLGFBQU8sa0JBQWtCLGlCQUFsQixFQUFQLEVBQThDLE9BQTlDLENBQXNELElBQXREO0FBQ0MsS0FGRDs7QUFJQSxPQUFHLG1DQUFILEVBQXdDLFlBQU07QUFDOUMsYUFBTyxtQkFBbUIsaUJBQW5CLEVBQVAsRUFBK0MsT0FBL0MsQ0FBdUQsS0FBdkQ7QUFDQyxLQUZEO0FBR0QsR0FSRDs7QUFVQSxXQUFTLDhEQUFULEVBQXlFLFlBQU07QUFDN0UsUUFBTSxpQkFBaUIsa0JBQWtCLGlCQUFsQixFQUF2Qjs7QUFFQSxPQUFHLGtEQUFILEVBQXVELFlBQU07QUFDN0QsYUFBTywwQkFBMEIsS0FBakMsRUFBd0MsVUFBeEM7QUFDQyxLQUZEO0FBR0QsR0FORDs7QUFRQSxXQUFTLGlFQUFULEVBQTRFLFlBQU07QUFDaEYsUUFBTSxpQkFBaUIsa0JBQWtCLGlCQUFsQixFQUF2Qjs7QUFFQSxPQUFHLGlCQUFILEVBQXNCLFlBQU07QUFDNUIsYUFBTyxlQUFlLE1BQXRCLEVBQThCLE9BQTlCLENBQXNDLENBQXRDO0FBQ0MsS0FGRDtBQUdELEdBTkQ7O0FBUUEsV0FBUyw0REFBVCxFQUF1RSxZQUFNO0FBQzNFLFFBQU0saUJBQWlCLGtCQUFrQixlQUFsQixFQUF2Qjs7QUFFQSxPQUFHLGtEQUFILEVBQXVELFlBQU07QUFDN0QsYUFBTywwQkFBMEIsS0FBakMsRUFBd0MsVUFBeEM7QUFDQyxLQUZEO0FBR0QsR0FORDs7QUFRQSxXQUFTLGlEQUFULEVBQTRELFlBQU07QUFDaEUsUUFBTSxpQkFBaUIsa0JBQWtCLGdCQUFsQixFQUF2QjtBQUNBLFFBQU0sT0FBUSxlQUFlLENBQWYsRUFBa0IsTUFBbEIsS0FBNkIsZUFBZSxDQUFmLEVBQWtCLE1BQTdEOztBQUVBLE9BQUcsdURBQUgsRUFBNEQsWUFBTTtBQUNsRSxhQUFPLElBQVAsRUFBYSxPQUFiLENBQXFCLElBQXJCO0FBQ0MsS0FGRDs7QUFJQSxPQUFHLHVDQUFILEVBQTRDLFlBQU07QUFDbEQsYUFBTywwQkFBMEIsS0FBakMsRUFBd0MsVUFBeEM7QUFDQyxLQUZEO0FBR0QsR0FYRDs7QUFhQSxXQUFTLHFEQUFULEVBQWdFLFlBQU07QUFDcEUsUUFBTSxpQkFBaUIsa0JBQWtCLG9CQUFsQixFQUF2QjtBQUNBLFFBQU0sT0FBUSxlQUFlLENBQWYsRUFBa0IsTUFBbEIsS0FBNkIsZUFBZSxDQUFmLEVBQWtCLE1BQTdEOztBQUVBLE9BQUcsdURBQUgsRUFBNEQsWUFBTTtBQUNsRSxhQUFPLElBQVAsRUFBYSxPQUFiLENBQXFCLElBQXJCO0FBQ0MsS0FGRDs7QUFJQSxPQUFHLHVDQUFILEVBQTRDLFlBQU07QUFDbEQsYUFBTywwQkFBMEIsS0FBakMsRUFBd0MsVUFBeEM7QUFDQyxLQUZEO0FBR0QsR0FYRDs7QUFhQSxXQUFTLG1FQUFULEVBQThFLFlBQU07QUFDbEYsUUFBTSxpQkFBaUIsa0JBQWtCLGtCQUFsQixDQUFxQyxDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQWdCLFNBQWhCLENBQXJDLENBQXZCOztBQUVBLE9BQUcsdUNBQUgsRUFBNEMsWUFBTTtBQUNsRCxhQUFPLDBCQUEwQixLQUFqQyxFQUF3QyxVQUF4QztBQUNDLEtBRkQ7QUFHRCxHQU5EO0FBT0QsQ0FqRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHM9W1xuICB7XG4gICAgXCJ0aXRsZVwiOiBcIkFsaWNlIGluIFdvbmRlcmxhbmRcIixcbiAgICBcInRleHRcIjogXCJBbGljZSBmYWxscyBpbnRvIGEgcmFiYml0IGhvbGUgYW5kIGVudGVycyBhIHdvcmxkIGZ1bGwgb2YgaW1hZ2luYXRpb24uXCJcbiAgfSxcblxuICB7XG4gICAgXCJ0aXRsZVwiOiBcIlRoZSBMb3JkIG9mIHRoZSBSaW5nczogVGhlIEZlbGxvd3NoaXAgb2YgdGhlIFJpbmcuXCIsXG4gICAgXCJ0ZXh0XCI6IFwiQW4gdW51c3VhbCBhbGxpYW5jZSBvZiBtYW4sIGVsZiwgZHdhcmYsIHdpemFyZCBhbmQgaG9iYml0IHNlZWsgdG8gZGVzdHJveSBhIHBvd2VyZnVsIHJpbmcuXCJcbiAgfSxcbiAge1xuICAgIFwidGl0bGVcIjogXCJUaGUgTG9yZCBvZiB0aGUgUmluZ3M6IFRoZSBGZWxsb3dzaGlwIG9mIHRoZSBSaW5nLlwiLFxuICAgIFwidGV4dFwiOiBcIkFuIHVudXN1YWwgYWxsaWFuY2Ugb2YgbWFuLCBlbGYsIGR3YXJmLCB3aXphcmQgYW5kIGhvYmJpdCBzZWVrIHRvIGRlc3Ryb3kgYSBwb3dlcmZ1bCByaW5nLlwiXG4gIH1cbl0iLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwibmFtZVwiOiBcImludmVydGVkaW5kZXhcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMS4wLjBcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcInNlYXJjaCBmaWxlc1wiLFxuICBcIm1haW5cIjogXCJpbmRleC5qc1wiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwidGVzdFwiOiBcIm5vZGVfbW9kdWxlcy9rYXJtYS9iaW4va2FybWEgc3RhcnQgLS1zaW5nbGUtcnVuIHx8IHRydWVcIixcbiAgICBcInN0YXJ0XCI6IFwibm9kZSBwdWJsaWMvYXBwLmpzXCJcbiAgfSxcbiAgXCJlbmdpbmVzXCI6IHtcbiAgICBcIm5vZGVcIjogXCI0LjIuNlwiLFxuICAgIFwibnBtXCI6IFwiNC4wLjNcIlxuICB9LFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9hbmRlbGEtb293b25pa29rby9jaGVja3BvaW50MS1pbnZlcnRlZEluZGV4LmdpdFwiXG4gIH0sXG4gIFwiYXV0aG9yXCI6IFwic2V1bmtva29cIixcbiAgXCJsaWNlbnNlXCI6IFwiSVNDXCIsXG4gIFwiYnVnc1wiOiB7XG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vYW5kZWxhLW9vd29uaWtva28vY2hlY2twb2ludDEtaW52ZXJ0ZWRJbmRleC9pc3N1ZXNcIlxuICB9LFxuICBcImhvbWVwYWdlXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FuZGVsYS1vb3dvbmlrb2tvL2NoZWNrcG9pbnQxLWludmVydGVkSW5kZXgjcmVhZG1lXCIsXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcImVzbGludC1jb25maWctYWlyYm5iXCI6IFwiXjE0LjEuMFwiLFxuICAgIFwiZXhwcmVzc1wiOiBcIl40LjE0LjFcIixcbiAgICBcIm5vZGVtb25cIjogXCJeMS4xMS4wXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiYmFiZWwtcHJlc2V0LWVzMjAxNVwiOiBcIl42LjIyLjBcIixcbiAgICBcImJhYmVsaWZ5XCI6IFwiXjcuMy4wXCIsXG4gICAgXCJicm93c2VyLXN5bmNcIjogXCJeMi4xOC44XCIsXG4gICAgXCJicm93c2VyaWZ5XCI6IFwiXjE0LjEuMFwiLFxuICAgIFwiY292ZXJhbGxzXCI6IFwiXjIuMTEuMTZcIixcbiAgICBcImVzbGludFwiOiBcIl4zLjE1LjBcIixcbiAgICBcImVzbGludC1jb25maWctYWlyYm5iLWJhc2VcIjogXCJeMTEuMS4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLWltcG9ydFwiOiBcIl4yLjIuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1qc3gtYTExeVwiOiBcIl4zLjAuMlwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdFwiOiBcIl42LjEwLjBcIixcbiAgICBcImd1bHBcIjogXCJeMy45LjFcIixcbiAgICBcImphc21pbmVcIjogXCJeMi41LjNcIixcbiAgICBcImphc21pbmUtY29yZVwiOiBcIl4yLjUuMlwiLFxuICAgIFwia2FybWFcIjogXCJeMS41LjBcIixcbiAgICBcImthcm1hLWNocm9tZS1sYXVuY2hlclwiOiBcIl4yLjAuMFwiLFxuICAgIFwia2FybWEtY292ZXJhZ2VcIjogXCJeMS4xLjFcIixcbiAgICBcImthcm1hLWNvdmVyYWxsc1wiOiBcIl4xLjEuMlwiLFxuICAgIFwia2FybWEtamFzbWluZVwiOiBcIl4xLjEuMFwiLFxuICAgIFwia2FybWEtc3BlYy1yZXBvcnRlclwiOiBcIjAuMC4yNlwiLFxuICAgIFwia2FybWEtdmVyYm9zZS1yZXBvcnRlclwiOiBcIjAuMC41XCIsXG4gICAgXCJ2aW55bC1zb3VyY2Utc3RyZWFtXCI6IFwiXjEuMS4wXCJcbiAgfVxufVxuIiwiY29uc3QgdHJ1ZWJvb2sgPSByZXF1aXJlKCcuLi9leGFtcGxlLmpzb24nKTtcbmNvbnN0IGZhbHNlQm9vayA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpO1xuXG5kZXNjcmliZSgnVGVzdHMgdGhlIGludmVydGVkSW5kZXguanMgY2xhc3M6ICcsICgpID0+IHtcbiAgY29uc3QgaW52ZXJ0ZWRJbmRleFRydWUgPSBuZXcgSW52ZXJ0ZWRJbmRleCh0cnVlYm9vayk7XG4gIGNvbnN0IGludmVydGVkSW5kZXhGYWxzZSA9IG5ldyBJbnZlcnRlZEluZGV4KGZhbHNlQm9vayk7XG5cbiAgZGVzY3JpYmUoJ0NoZWNrcyBpZiBmaWxlIGV4dGVuc2lvbiBpcyBqc29uJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgcmV0dXJuIHRydWUgZm9yIC5qc29uIGZpbGUnLCAoKSA9PiB7XG4gICAgZXhwZWN0KGludmVydGVkSW5kZXhUcnVlLmNoZWNrSWZKc29uKCdleGFtcGxlLmpzb24nKSkudG9FcXVhbCh0cnVlKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGZhbHNlIGZvciAudHh0IGZpbGUnLCAoKSA9PiB7XG4gICAgZXhwZWN0KGludmVydGVkSW5kZXhUcnVlLmNoZWNrSWZKc29uKCdleGFtcGxlLnR4dCcpKS50b0VxdWFsKGZhbHNlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ0NoZWNrcyBpZiB1cGxvYWRlZCBmaWxlIGNvbnRhaW5zIHRpdGxlIGFuZCB0ZXh0JywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgcmV0dXJuIHRydWUgZm9yIHRydWVib29rJywgKCkgPT4ge1xuICAgIGV4cGVjdChpbnZlcnRlZEluZGV4VHJ1ZS5jb250YWluc1RpdGxlVGV4dCgpKS50b0VxdWFsKHRydWUpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gZmFsc2UgZm9yIGZhbHNlYm9vaycsICgpID0+IHtcbiAgICBleHBlY3QoaW52ZXJ0ZWRJbmRleEZhbHNlLmNvbnRhaW5zVGl0bGVUZXh0KCkpLnRvRXF1YWwoZmFsc2UpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnQ2hlY2tzIGlmIHZhbHVlIHJldHVybmVkIGJ5IGdldFRpdGxlc0FuZFRleHRzKCkgaXMgYW4gb2JqZWN0JywgKCkgPT4ge1xuICAgIGNvbnN0IHJldHVybmVkT2JqZWN0ID0gaW52ZXJ0ZWRJbmRleFRydWUuZ2V0VGl0bGVzQW5kVGV4dHMoKTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIE9iamVjdCBmb3IgKHR5cGVvZiByZXR1cm5lZE9iamVjdCknLCAoKSA9PiB7XG4gICAgZXhwZWN0KHJldHVybmVkT2JqZWN0IGluc3RhbmNlb2YgQXJyYXkpLnRvQmVUcnV0aHkoKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ0NoZWNrcyBpZiBvYmplY3QgcmV0dXJuZWQgYnkgZ2V0VGl0bGVzQW5kVGV4dHMoKSBpcyBvZiBsZW5ndGggMicsICgpID0+IHtcbiAgICBjb25zdCByZXR1cm5lZE9iamVjdCA9IGludmVydGVkSW5kZXhUcnVlLmdldFRpdGxlc0FuZFRleHRzKCk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiAyJywgKCkgPT4ge1xuICAgIGV4cGVjdChyZXR1cm5lZE9iamVjdC5sZW5ndGgpLnRvRXF1YWwoMik7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdDaGVja3MgaWYgdmFsdWUgcmV0dXJuZWQgYnkgZ2V0SW5kZXhlZFdvcmRzKCkgaXMgYW4gb2JqZWN0JywgKCkgPT4ge1xuICAgIGNvbnN0IHJldHVybmVkT2JqZWN0ID0gaW52ZXJ0ZWRJbmRleFRydWUuZ2V0SW5kZXhlZFdvcmRzKCk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBPYmplY3QgZm9yICh0eXBlb2YgcmV0dXJuZWRPYmplY3QpJywgKCkgPT4ge1xuICAgIGV4cGVjdChyZXR1cm5lZE9iamVjdCBpbnN0YW5jZW9mIEFycmF5KS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdDaGVja3MgdGhlIHZhbHVlIHJldHVybmVkIGJ5IGNvbnRlbnRUb0Rpc3BsYXkoKScsICgpID0+IHtcbiAgICBjb25zdCByZXR1cm5lZE9iamVjdCA9IGludmVydGVkSW5kZXhUcnVlLmNvbnRlbnRUb0Rpc3BsYXkoKTtcbiAgICBjb25zdCBib29sID0gKHJldHVybmVkT2JqZWN0WzBdLmxlbmd0aCA9PT0gcmV0dXJuZWRPYmplY3RbMV0ubGVuZ3RoKTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIHRydWUgaWYgdGhlIHZhbHVlcyBhdCBpbmRleGVzIGFyZSBlcXVhbCcsICgpID0+IHtcbiAgICBleHBlY3QoYm9vbCkudG9FcXVhbCh0cnVlKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIE9iamVjdCBmb3IgdHlwZW9mIHZhbHVlJywgKCkgPT4ge1xuICAgIGV4cGVjdChyZXR1cm5lZE9iamVjdCBpbnN0YW5jZW9mIEFycmF5KS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdDaGVja3MgdGhlIHZhbHVlIHJldHVybmVkIGJ5IGRpc3BsYXlJblRhYmxlRm9ybWF0KCknLCAoKSA9PiB7XG4gICAgY29uc3QgcmV0dXJuZWRPYmplY3QgPSBpbnZlcnRlZEluZGV4VHJ1ZS5kaXNwbGF5SW5UYWJsZUZvcm1hdCgpO1xuICAgIGNvbnN0IGJvb2wgPSAocmV0dXJuZWRPYmplY3RbMF0ubGVuZ3RoID09PSByZXR1cm5lZE9iamVjdFsxXS5sZW5ndGgpO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gdHJ1ZSBpZiB0aGUgdmFsdWVzIGF0IGluZGV4ZXMgYXJlIGVxdWFsJywgKCkgPT4ge1xuICAgIGV4cGVjdChib29sKS50b0VxdWFsKHRydWUpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gT2JqZWN0IGZvciB0eXBlb2YgdmFsdWUnLCAoKSA9PiB7XG4gICAgZXhwZWN0KHJldHVybmVkT2JqZWN0IGluc3RhbmNlb2YgQXJyYXkpLnRvQmVUcnV0aHkoKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ0NoZWNrcyBpZiB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgc2VhcmNoSW5kZXhlZFdvcmRzKCkgaXMgYW4gT2JqZWN0JywgKCkgPT4ge1xuICAgIGNvbnN0IHJldHVybmVkT2JqZWN0ID0gaW52ZXJ0ZWRJbmRleFRydWUuc2VhcmNoSW5kZXhlZFdvcmRzKFsncXVpY2snLCAnQW4nLCAndW51c3VhbCddKTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIE9iamVjdCBmb3IgdHlwZW9mIHZhbHVlJywgKCkgPT4ge1xuICAgIGV4cGVjdChyZXR1cm5lZE9iamVjdCBpbnN0YW5jZW9mIEFycmF5KS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXX0=
