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
      updateSelectOptions(uploadedFiles, '#select-file');
      updateSelectOptions(uploadedFiles, '#select-file-search');
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

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target.result;
      let invertedIndex = new InvertedIndex(JSON.parse(data));
      const checkFileExtension = invertedIndex.checkIfJson(uploadedFileName);

      if (checkFileExtension) {
        const fileContainsTitleText = invertedIndex.containsTitleText();

        if (fileContainsTitleText) {
          const contentToDisplay = invertedIndex.displayInTableFormat();
          const titleAndText = invertedIndex.getTitlesAndTexts();
          const titleArray = getTitleArray(titleAndText);
          displayTableTitle(titleArray, uploadedFileName);
          displayTableBody(contentToDisplay, uploadedFileName);
        }
      }
    };

      reader.readAsText(uploadedFile);
  });

  // search indexed files
  $('.button-search').click(() => {
    const uploadedFileName = $('#select-file').val();
    const fileToSearch = getSelectOptionFile(uploadedFileName, uploadedFiles);
    const wordToSearch = $('#search-field-id').val().split(' ');

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target.result;
      let invertedIndex = new InvertedIndex(JSON.parse(data));
      const searchResult = invertedIndex.searchIndexedWords(wordToSearch);
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
* updateSelect (update the select option with the files selected)
* @param {Object} uploadedFiles
* @return{}
*/
const updateSelectOptions = (uploadedFiles, idToPopulate) => {
  for (let arrayIndex = 0; arrayIndex < uploadedFiles.length; arrayIndex++) {
    $('<option id="option'
    + (arrayIndex + 1) + '" value="'
    + uploadedFiles[arrayIndex].name + '">'
    + uploadedFiles[arrayIndex].name + '</option>')
    .appendTo(idToPopulate);
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

/**
 * getTitleArray (gets the titles in the array of titles and texts passed in as an argument)
 * @param {array} titleTextArray 
 * @returns {array} - returns an array of the titles
 */
const getTitleArray = (titleTextArray) => {
  const arrayToReturn = ['']

  titleTextArray[0].titles.forEach((e) => {
    arrayToReturn.push(e);
  });

  return arrayToReturn;
};

/*
* displayTableTitle (it displays the title of the table in the DOM)
* @param {Object} titleArray
* @return
*/
const displayTableTitle = (titleArray, uploadedFileName) => {
  
  $('#indexTableHeader').empty();

  for (let arrayIndex = 0; arrayIndex < titleArray.length; arrayIndex++) {
    const title = titleArray[arrayIndex].split(':')[0];
    $('#indexTableHeader').append('<th>' + title + '</th>');
  }
};

/*
* displayTableBody (it displays the body of the table in the DOM)
* @param {Object} contentToDisplay
* @return
*/
const displayTableBody = (contentToDisplay, uploadedFileName) => {
  $('.wordsRow').empty();
  $('#lastRow').empty();
  let count = 1;
  // $('<tr><td>testing</td></tr>').insertAfter('#indexTableHeader')

  contentToDisplay.forEach((e, index) => {
    $('<tr class="wordsRow" id="wordsRow' + count + '"> </tr>').insertAfter('#indexTableHeader');
    contentToDisplay[index].forEach((e, index) => {
      if (index > 0) {
        if (e) {
          $('<td><span class="glyphicon glyphicon-ok"></span></td>').appendTo('#wordsRow' + count);
          console.log('<td><span class="glyphicon glyphicon-ok"></span></td>');
        } else {
          $('<td><span class="glyphicon glyphicon-remove"></span></td>').appendTo('#wordsRow' + count);
        }
      } else {
        $('<td>' + e + '</td>').appendTo('#wordsRow' + count);
      }
    });

    count += 1;
  });
};



























