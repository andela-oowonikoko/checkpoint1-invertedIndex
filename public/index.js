
'use strict';

$(document).ready(function () {
  console.log('loading index.js file');
  $('.button-file').click(function () {
    console.log('on click of upload button');
    // Learn how to get an uploaded file
    let uploadedFile = $('#image-file').files;
    console.log(uploadedFile);
    let fileFormat = checkFileFormat(uploadedFile);
    //console.log(fileFormat);
    let checkFormat = checkIfJson(fileFormat);
    console.log(checkFormat);
  });
});

function checkFileFormat(uploadedFile) {
  let array = uploadedFile.split('.');
  return array[array.length - 1];
}

function checkIfJson(format) {
  console.log('got here');
  if (format.toLowerCase() === 'json') {
    return true;
  }
  return false;
}

