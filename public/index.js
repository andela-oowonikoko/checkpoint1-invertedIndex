
'use strict';

$(document).ready(() => {
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
    const uploadedFileName = $('#select-file').val();
    const uploadedFile = getSelectOptionFile(uploadedFileName, uploadedFiles);
    console.log(uploadedFile);

    const checkFileExtension = checkIfJson(uploadedFileName);

    $('#checkmark').empty();
    if (checkFileExtension) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = e.target.result;
        sortJsonObject(JSON.parse(data));
      };

      reader.readAsText(uploadedFile);
    } else {
      // condition for else statement set here
    }
  });

  // search indexed files
  $('.button-search').click(() => {
    const uploadedFileName = $('#select-file').val();
    const fileToSearch = getSelectOptionFile(uploadedFileName, uploadedFiles);
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;
      const indexedWords = getIndexedWords(JSON.parse(data));
      const cleanWords = cleanIndexedWords(indexedWords);
      const wordToSearch = $('#search-field-id').val();

      searchIndexedWords(cleanWords, wordToSearch);
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
* checkFileExtension (it returns the file extension)
* @param {String} uploadedFile
* @return{String}
*/
const checkFileExtension = (uploadedFileName) => {
  const array = uploadedFileName.split('.');
  return array[array.length - 1];
};

/*
* checkIfJson (it returns true if the file extension is .json)
* @param {String} format
* @return{Boolean}
*/
const checkIfJson = (uploadedFileName) => {
  const fileExtension = checkFileExtension(uploadedFileName);

  return fileExtension.toLowerCase() === 'json';
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
  const titles = [''];
  let indexedWords = '';
  let temporaryData;

  for (let arrayIndex = 0; arrayIndex < data.length; arrayIndex++) {
    temporaryData = data[arrayIndex];
    titles.push(temporaryData.title);
    indexedWords += temporaryData.text + ' ';
  }

  if (containsTitleText(temporaryData)) {
    displayTableTitle(titles);

    indexedWords = cleanIndexedWords(indexedWords);
    const displayIndexedWords = getFoundWords(indexedWords, data);

    displayTableBody(displayIndexedWords);
  } else {
    // condition for else set here
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
    const title = titleArray[arrayIndex].split(':')[0];
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
  const tableData = '';

  displayIndexedWords.forEach((e) => {
    console.log('----starting----');
    $().appendTo('')
    for (let arrayIndex = 0; arrayIndex < displayIndexedWords[0].length; arrayIndex++) {
      console.log(displayIndexedWords[count][arrayIndex]);
      $().appendTo('')
    }

    // $('<tr class="wordsRow"' + count + '> </tr>').insertAfter('#indexTableHeader');
    // for (let arrayIndex = 0; arrayIndex < displayIndexedWords[0].length; arrayIndex++) { 
    //   $('<tdclass="wordsRow"' + count + '' + arrayIndex + '>' + 
    //     displayIndexedWords[count][arrayIndex].toLowerCase() + 
    //   '</td>').appendTo('.wordsRow' + count);
    // }

    count += 1;
  });

  // $('<tr id="lastRow">' +
  //   '<td>TOTAL</td>'
  //   + '</tr>').insertAfter('#wordsRow' + (displayIndexedWords.length - 2));
};

/*
* getIndexedWords (it gets the words to the indexed from the file and returns a string)
* @param {Object} fileData
* @return {String}
*/
const getIndexedWords = (fileData) => {
  let indexedWords = '';

  for (let arrayIndex = 0; arrayIndex < fileData.length; arrayIndex++) {
    indexedWords += fileData[arrayIndex].text + ' '; 
  }

  return indexedWords;
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
* getFoundWords (it checks if the words to check against the indexed words
are present or not thereby returning a true or false)
* @param {String, Object} indexedWords, data
* @return{Object}
*/
const getFoundWords = (indexedWords, data) => {
  let temporarySortedWords = [];
  indexedWords.pop();
  const sortedWords = [indexedWords];

  for (let arrayIndex1 = 0; arrayIndex1 < data.length; arrayIndex1++) {
    const newData = cleanIndexedWords(data[arrayIndex1].text);

    indexedWords.forEach(e => {
      if (newData.includes(e)) {
        temporarySortedWords.push('true');
      } else {
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
* @param {Object, String} (cleanWords, wordToSearch)
* @return{}
*/
const searchIndexedWords = (cleanWords, wordToSearch) => {
  const wordToSearchArray = wordToSearch.split(' ');

  wordToSearchArray.forEach(e => {
    if (cleanWords.includes(e)) {
      console.log('Includes: ' + e);
    }
  });
};



























