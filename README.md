[![Code Climate](https://codeclimate.com/github/andela-oowonikoko/checkpoint1-invertedIndex/badges/gpa.svg)](https://codeclimate.com/github/andela-oowonikoko/checkpoint1-invertedIndex)
[![Coverage Status](https://coveralls.io/repos/github/andela-oowonikoko/checkpoint1-invertedIndex/badge.svg?branch=master)](https://coveralls.io/github/andela-oowonikoko/checkpoint1-invertedIndex?branch=master)
[![Build Status](https://travis-ci.org/andela-oowonikoko/checkpoint1-invertedIndex.svg?branch=master)](https://travis-ci.org/andela-oowonikoko/checkpoint1-invertedIndex)

# checkpoint1-invertedIndex
An inverted index is an index data structure storing a mapping from content to locations or mapping of words or numbers to its location in a database file. The index allows a user to search for text blocks in the array that contains a specified collection of words.

Inverted index takes a JSON array of text objects and creates an index from the array. 

# JSON Array Format
```
[
    {
        "title": "This is a sample title",
        "text": "And this is a sample text"
    }
]
```

# Features
* Create indexes from uploaded files.
* Find the index for a particular file.
* Allows single/multiple JSON files upload.
* Full indexing of words
* Full text search of created indexes.
* Cross-file text/words search


# Why the project is useful
The purpose of an inverted index is to allow user perform fast and full text search

# How can I get started with the project
* Open your browser to visit the [homepage](http://checkpoint1-invertedindex.herokuapp.com) and follow the instructions there.
* Upload file/files to be indexed using the upload button.
* Full text search can be made at the top of the page.

# External dependencies for the app
* Node.js
* JQuery
* JavaScript

# How to run tests
* Install npm dependencies `npm install`
* To test the app run: `gulp watch`
* To run the tests run: `npm test`

# Limitations of the project
* This application can only work for one file at a time.
* Files must be in json format.

# Contributing to the project
* Fork this repository to your account.
* Clone your repositry: git clone git@github.com:your-username/checkpoint1-invertedIndex.git
* Create your feature branch: git checkout -b new-feature
* Commit your changes: git commit -m "did something"
* Push to the remote branch: git push origin new-feature
* Open a pull request.

# Troubleshooting & FAQ
https://github.com/andela-oowonikoko/checkpoint1-invertedIndex/issues

# License
Internet Systems Consortium (ISC)