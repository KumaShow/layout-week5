"use strict";

$(function () {
  // assignment 頁
  $('#grade-icon').on('click', function () {
    $('#grade-icon').toggleClass('no-fill');
  });
  $('#assignment-btn-reply').on('click', function () {
    $('#ckeditor').removeClass('d-none');
    $('#assignment-reply').addClass('d-none');
    $('#editor-reply').removeClass('d-none');
  });
  $('#editor-cancel').on('click', function () {
    $('#ckeditor').addClass('d-none');
    $('#editor-reply').addClass('d-none');
    $('#assignment-reply').removeClass('d-none');
  }); // admin 頁

  $('.btn-more').on('click', function () {
    $('.btn-more').toggleClass('d-none');
    $('.view-modal__btn').toggleClass('d-none');
  });
});
ClassicEditor.create(document.querySelector('#editor'))["catch"](function (error) {
  console.error(error);
});
//# sourceMappingURL=all.js.map
