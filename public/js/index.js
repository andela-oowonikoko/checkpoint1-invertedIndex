$(document).ready(() => {
  let uploadedFiles = [];

  $('#table-display-error').hide();
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
    }else {
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

      if (invertedIndex.checkIfJson(uploadedFileName)) {
        if (invertedIndex.containsTitleText()) {
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
    let uploadedFileName = $('#select-file-search').val();
    const fileToSearch = getSelectOptionFile(uploadedFileName, uploadedFiles);
    const wordToSearch = $('#search-field-id').val().split(' ');

    if (uploadedFileName === 'All') {
      $('#table-display-error').hide();
      $('.table-display').empty();

      for (let value of uploadedFiles) {
        uploadedFileName = value.name;
        readerForAllFiles(value, uploadedFileName);
      }
    } else if (fileToSearch.length === 0) {
      $('#table-display-error').show();
    } else {
      $('#table-display-error').hide();
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        let invertedIndex = new InvertedIndex(JSON.parse(data));
        const titleAndText = invertedIndex.getTitlesAndTexts();
        const titleArray = getTitleArray(titleAndText);
        const searchResult = invertedIndex.searchIndexedWords(wordToSearch);
        displayTableTitle(titleArray, uploadedFileName, false);
        displayTableBody(searchResult, uploadedFileName);
      };

      reader.readAsText(fileToSearch);
    }
  });

  // back-upload clicked
  $('#back-upload').click(() => {
    $('.file-index').hide();
    $('.file-upload').fadeIn('slow');
  });
});

/*
* readerForAllFiles (creates and reads files)
* @param {Object, string} value, uploadedFiles
*/
const readerForAllFiles = (value, uploadedFileName) => {
  const wordToSearch = $('#search-field-id').val().split(' ');
  const reader = new FileReader();
  reader.readAsText(value);
  reader.onload = (e) => {
    const data = e.target.result;
    const invertedIndex = new InvertedIndex(JSON.parse(data));
    const titleAndText = invertedIndex.getTitlesAndTexts();
    const titleArray = getTitleArray(titleAndText);
    const searchResult = invertedIndex.searchIndexedWords(wordToSearch);
    displayTableTitle(titleArray, uploadedFileName, true);
    displayTableBody(searchResult, uploadedFileName);
  };
};

/*
* updateSelect (update the select option with the files selected)
* @param {Object} uploadedFiles
* @return{}
*/
const updateSelectOptions = (uploadedFiles, idToPopulate) => {
  for (let arrayIndex = 0; arrayIndex < uploadedFiles.length; arrayIndex += 1) {
    $(`<option id="option${arrayIndex + 1}" value="${uploadedFiles[arrayIndex].name}">${uploadedFiles[arrayIndex].name}</option>`)
    .appendTo(idToPopulate);
  }
};

/*
* getSelectOptionFile (gets the file that will be worked on)
* @param {String, Object} (fileName, uploadedFiles)
* @return{Object}
*/
const getSelectOptionFile = (fileName, uploadedFiles) => {
  for (let arrayIndex = 0; arrayIndex < uploadedFiles.length; arrayIndex += 1) {
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
  const arrayToReturn = [''];
  const arrayIndex = 0;

  titleTextArray[arrayIndex].titles.forEach((e) => {
    arrayToReturn.push(e);
  });

  return arrayToReturn;
};

/*
* displayTableTitle (it displays the title of the table in the DOM)
* @param {Object} titleArray
* @return
*/
const displayTableTitle = (titleArray, uploadedFileName, isPresent) => {
  const fileName = uploadedFileName.split('.')[0];

  if (!isPresent) {
    // empties the div where the table populates
    $('.table-display').empty();
  }

  // creates a table and appends it to the div .table-display
  $(`<div id="${fileName}Div">${uploadedFileName}</div><table id="${fileName}Table"><tr id="${fileName}Header"></tr></table>`).appendTo('.table-display');

  // empties the table headet
  $(`#${fileName}Header`).empty();

  for (let arrayIndex = 0; arrayIndex < titleArray.length; arrayIndex += 1) {
    const title = titleArray[arrayIndex].split(':')[0];
    $(`#${fileName}Header`).append(`<th>${title}</th>`);
  }
};

/*
* displayTableBody (it displays the body of the table in the DOM)
* @param {Object} contentToDisplay
* @return
*/
const displayTableBody = (contentToDisplay, uploadedFileName) => {
  const fileName = uploadedFileName.split('.')[0];

  $(`.${fileName}Row`).empty();
  $('#lastRow').empty();
  let count = 1;

  contentToDisplay.forEach((e, index) => {
    $(`<tr class="${fileName}Row" id="${fileName}Row${count}"></tr>`).insertAfter(`#${fileName}Header`);
    contentToDisplay[index].forEach((e, index) => {
      if (index > 0) {
        $(`<td><span class="glyphicon ${e ? 'glyphicon-ok' : 'glyphicon-remove'}"></span></td>`).appendTo(`#${fileName}Row${count}`);
      } else {
        $(`<td>${e}</td>`).appendTo(`#${fileName}Row${count}`);
      }
    });

    count += 1;
  });
};
