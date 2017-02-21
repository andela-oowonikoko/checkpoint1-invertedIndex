
'use strict';

$(document).ready(function () {
  // upload button
  $('.button-file').click(function () {
    $('.button-file').css('background-color', 'cornflowerblue');

    // let uploadedFiles = $('#image-file')[0].files;
    // console.log(uploadedFiles);
    let uploadedFile = $('#image-file')[0].files[0];
    let fileFormat = checkFileFormat(uploadedFile.name);
    let checkFormat = checkIfJson(fileFormat);

    $('#checkmark').empty();
    if (checkFormat) {
      // $('<img src="/images/bluecheck.png" />').appendTo('#checkmark');

      let reader = new FileReader();
      reader.onload = function (e) {
        let data = e.target.result;
        sortJsonObject(JSON.parse(data));
      };

      reader.readAsText(uploadedFile);
    } else {
      // $('<img src="/images/wrongcheck.png" />').appendTo('#checkmark');
    }
  });
});

/**
* checkFileFormat (it returns the file extension)
* @param {String} uploadedFile
* @return{String}
*/
function checkFileFormat(uploadedFile) {
  const array = uploadedFile.split('.');
  return array[array.length - 1];
}

/**
* checkIfJson (it returns true if the file extension is .json)
* @param {String} format
* @return{Boolean}
*/
function checkIfJson(format) {
  if (format.toLowerCase() === 'json') {
    return true;
  }
  return false;
}

/**
* sortJsonObject (it takes in data which contains the content of the file and further calls the display functions)
* @param {Object} data
* @return
*/
function sortJsonObject(data) {
  let temporaryData;
  let titles = [''];
  let indexedWords = '';

  for (let arrayIndex = 0; arrayIndex < data.length; arrayIndex++) {
    temporaryData = data[arrayIndex];
    titles.push(temporaryData.title);
    indexedWords += temporaryData.text + ' ';
  }

  if (containsTitleText(temporaryData)) {
    displayTableTitle(titles);
    indexedWords = cleanIndexedWords(indexedWords);
    let displayIndexedWords = isWordPresent(indexedWords, data);
    displayTableBody(displayIndexedWords);
  } else {
    $('<img src="/images/wrongcheck.png" />').appendTo('#checkmark');
  }
}

/**
* containsTitleText (it checks if the content of the file contains title and text)
* @param {Object} objectToCheck
* @return{Boolean}
*/
function containsTitleText(objectToCheck) {
  if (('title' in objectToCheck) && ('text' in objectToCheck)) {
    return true;
  }
  return false;
}

/**
* displayTableTitle (it displays the title of the table in the DOM)
* @param {Object} titleArray
* @return
*/
function displayTableTitle(titleArray) {
  $('#indexTableHeader').empty();

  for (let arrayIndex = 0; arrayIndex < titleArray.length; arrayIndex++) {
    let title = titleArray[arrayIndex].split(':')[0];
    $('#indexTableHeader').append('<th>' + title + '</th>');
  }
}

/**
* displayTableBody (it displays the body of the table in the DOM)
* @param {Object} displayIndexedWords
* @return
*/
function displayTableBody(displayIndexedWords) {
  $('.wordsRow').empty();
  $('#lastRow'). empty();
  let count = 0;
  let tableData = '';

  displayIndexedWords.forEach(function (e) {
    console.log(e);
    $('<tr class="wordsRow"' + count + '> </tr>').insertAfter('#indexTableHeader');
    for (let arrayIndex = 0; arrayIndex < displayIndexedWords[0].length; arrayIndex++) { 
      $('<tdclass="wordsRow"' + count + '' + arrayIndex + '>' + 
        displayIndexedWords[count][arrayIndex].toLowerCase() + 
      '</td>').appendTo('.wordsRow' + count);
    }
    count++;
  });
 
  // $('<tr id="lastRow">' +
  //   '<td>TOTAL</td>'
  //   + '</tr>').insertAfter('#wordsRow' + (displayIndexedWords.length - 2));
}

/**
* cleanIndexedWords (it makes every of the indexed words unique and cleans off commas and full-stops)
* @param {String} indexedWords
* @return{Object}
*/
function cleanIndexedWords(indexedWords) {
  let cleanWords = indexedWords.replace(/\.|,/g, '').split(' ');
  let uniqueWords = [];
  $.each(cleanWords, function (i, el) {
    if ($.inArray(el, uniqueWords) === -1) uniqueWords.push(el);
  });
  return uniqueWords;
}

/**
* isWordPresent (it checks if the words to check against the indexed words are present or not thereby returning a true or false)
* @param {String, Object} indexedWords, data
* @return{Object}
*/
function isWordPresent(indexedWords, data) {
  let temporarySortedWords = [];
  indexedWords.pop();
  let sortedWords = [indexedWords];

  for (let arrayIndex1 = 0; arrayIndex1 < data.length; arrayIndex1++) {
    let newData = cleanIndexedWords(data[arrayIndex1].text);

    indexedWords.forEach(function(e) {
      if (newData.includes(e)) {
        temporarySortedWords.push('true');
      }else{
        temporarySortedWords.push('false');
      }
    });
    sortedWords.push(temporarySortedWords);
    temporarySortedWords = [];
  }

  return sortedWords;
}

/**
* searchIndexedWords (it searches through the indexed words)
* @param {}
* @return{}
*/
function searchIndexedWords() {
  
}


