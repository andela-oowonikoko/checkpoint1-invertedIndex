
'use strict';

$(document).ready(function () {
  let uploadedFiles = [];

  $('#upload-error').hide();
  $('.file-index').hide();
  $('.file-upload').fadeIn('slow');

  // upload file button
  $('#button-upload-file').click(() => {
    $('#button-upload-file').removeAttr('disabled');
    $('#select-file').empty();

    if (uploadedFiles.length < 5) {
      $('#button-upload-file').removeAttr('disabled');
      $('#upload-error').hide();
      uploadedFiles = $('#image-file')[0].files;
      updateSelectOptions(uploadedFiles);
    } else if (uploadedFiles.length <= 0) {
      $('#button-upload-file').attr('disabled', true);
      $('#upload-error').show();
    } else {
      $('#button-upload-file').attr('disabled', true);
      $('#upload-error').show();
    }

    $('.file-upload').hide();
    $('.file-index').fadeIn('slow');
  });

  // create index button
  $('#button-create-index').click(() => {
    let uploadedFileName = $('#select-file').val();
    let uploadedFile = getSelectOptionFile(uploadedFileName, uploadedFiles);
    console.log(uploadedFile);

    let fileFormat = checkFileFormat(uploadedFile.name);
    let checkFormat = checkIfJson(fileFormat);

    $('#checkmark').empty();
    if (checkFormat) {
      // $('<img src="/images/bluecheck.png" />').appendTo('#checkmark');

      let reader = new FileReader();
      reader.onload = (e) => {
        let data = e.target.result;
        sortJsonObject(JSON.parse(data));
      };

      reader.readAsText(uploadedFile);
    } else {
      // $('<img src="/images/wrongcheck.png" />').appendTo('#checkmark');
    }
  });

  // search indexed files 
  $('.button-search').click(() => {
    let uploadedFileName = $('#select-file').val();
    let fileToSearch = getSelectOptionFile(uploadedFileName, uploadedFiles);

    let reader = new FileReader();
    reader.onload = (e) => {
      let data = e.target.result;
      console.log(data);
    };

    reader.readAsText(fileToSearch);
  });

  // back-upload clicked
  $('#back-upload').click(() => {
    $('.file-index').hide();
    $('.file-upload').fadeIn('slow');
  });
});

/*
* checkFileFormat (it returns the file extension)
* @param {String} uploadedFile
* @return{String}
*/
const checkFileFormat = (uploadedFile) => {
  const array = uploadedFile.split('.');
  return array[array.length - 1];
};

/*
* checkIfJson (it returns true if the file extension is .json)
* @param {String} format
* @return{Boolean}
*/
const checkIfJson = (format) => {
  if (format.toLowerCase() === 'json') {
    return true;
  }
  return false;
};

/*
* updateSelect (update the select option with the files selected)
* @param {Object} uploadedFiles
* @return{}
*/
const updateSelectOptions = (uploadedFiles) => {
  for (let arrayIndex = 0; arrayIndex < uploadedFiles.length; arrayIndex++) {
    $('<option id="option' 
    + (arrayIndex + 1) + '" value="' 
    + uploadedFiles[arrayIndex].name + '">' 
    + uploadedFiles[arrayIndex].name + '</option>')
    .appendTo('#select-file');
  }
};

/*
* getSelectOptionFile (gets the file that will be worked on)
* @param {String, Object} (fileName, uploadedFiles)
* @return{Object}
*/
const getSelectOptionFile = (fileName, uploadedFiles) => {
  for (let arrayIndex = 0; arrayIndex < uploadedFiles.length; arrayIndex++) {
    if (fileName === uploadedFiles[arrayIndex].name) {
      return uploadedFiles[arrayIndex];
    }
  }

  return '';
};


/*
* sortJsonObject (it takes in data which contains the
content of the file and further calls the display functions)
* @param {Object} data
* @return
*/
const sortJsonObject = (data) => {
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
};

/*
* containsTitleText (it checks if the content of the file contains title and text)
* @param {Object} objectToCheck
* @return{Boolean}
*/
const containsTitleText = (objectToCheck) => {
  if (('title' in objectToCheck) && ('text' in objectToCheck)) {
    return true;
  }
  return false;
};

/*
* displayTableTitle (it displays the title of the table in the DOM)
* @param {Object} titleArray
* @return
*/
const displayTableTitle = (titleArray) => {
  $('#indexTableHeader').empty();

  for (let arrayIndex = 0; arrayIndex < titleArray.length; arrayIndex++) {
    let title = titleArray[arrayIndex].split(':')[0];
    $('#indexTableHeader').append('<th>' + title + '</th>');
  }
};

/*
* displayTableBody (it displays the body of the table in the DOM)
* @param {Object} displayIndexedWords
* @return
*/
const displayTableBody = (displayIndexedWords) => {
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
    count += 1;
  });

  // $('<tr id="lastRow">' +
  //   '<td>TOTAL</td>'
  //   + '</tr>').insertAfter('#wordsRow' + (displayIndexedWords.length - 2));
};

/*
* cleanIndexedWords (it makes every of the indexed words
unique and cleans off commas and full-stops)
* @param {String} indexedWords
* @return{Object}
*/
const cleanIndexedWords = (indexedWords) => {
  let cleanWords = indexedWords.replace(/\.|,/g, '').split(' ');
  let uniqueWords = [];
  $.each(cleanWords, function (i, el) {
    if ($.inArray(el, uniqueWords) === -1) uniqueWords.push(el);
  });
  return uniqueWords;
};

/*
* isWordPresent (it checks if the words to check against the indexed words
are present or not thereby returning a true or false)
* @param {String, Object} indexedWords, data
* @return{Object}
*/
const isWordPresent = (indexedWords, data) => {
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
};

/*
* searchIndexedWords (it searches through the indexed words)
* @param {}
* @return{}
*/
const searchIndexedWords = () => {
};               




























