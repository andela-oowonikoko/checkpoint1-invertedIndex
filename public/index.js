
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

function checkFileFormat(uploadedFile) {
  const array = uploadedFile.split('.');
  return array[array.length - 1];
}

function checkIfJson(format) {
  if (format.toLowerCase() === 'json') {
    return true;
  }
  return false;
}

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
    displayTableBody(indexedWords);
  } else {
    $('<img src="/images/wrongcheck.png" />').appendTo('#checkmark');
  }
}

function containsTitleText(objectToCheck) {
  if (('title' in objectToCheck) && ('text' in objectToCheck)) {
    return true;
  }
  return false;
}

function displayTableTitle(titleArray) {
  $('#indexTableHeader').empty();

  for (let arrayIndex = 0; arrayIndex < titleArray.length; arrayIndex++) {
    let title = titleArray[arrayIndex].split(':')[0];
    $('#indexTableHeader').append('<th>' + title + '</th>');
  }
}

function displayTableBody(indexedWords) {
  $('.wordsRow').empty();

  for (let arrayIndex = (indexedWords.length - 2); arrayIndex >= 0; arrayIndex--) {
    $('<tr class="wordsRow" id="wordsRow' + arrayIndex + '">' +
      '<td>' + indexedWords[arrayIndex].toLowerCase() + '</td>'
     + '</tr>').insertAfter('#indexTableHeader');
  }

  $('<tr>' +
    '<td>TOTAL</td>'
    + '</tr>').insertAfter('.wordsRow' + (indexedWords.length - 2));
}

function cleanIndexedWords(indexedWords) {
  let cleanWords = indexedWords.replace(/\.|,/g, '').split(' ');
  let uniqueWords = [];
  $.each(cleanWords, function (i, el) {
    if ($.inArray(el, uniqueWords) === -1) uniqueWords.push(el);
  });
  return uniqueWords;
}

