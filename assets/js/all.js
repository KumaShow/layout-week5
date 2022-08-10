"use strict";

$(function () {
  // sidebar
  $('.sidebar__link').on('click', function () {
    $('.sidebar__link').removeClass('is-active'); // $(this).addClass('is-active');
    // $(this).toggleClass('is-active');
  }); // assignment 頁

  $('#grade-icon').on('click', function () {
    $('#grade-icon').toggleClass('no-fill');
  }); // admin 頁

  $('.btn-more').on('click', function () {
    $('.btn-more').toggleClass('d-none');
    $('.view-modal__btn').toggleClass('d-none');
  });
  $('#assignment-reply').on('click', function () {
    $('#editor').removeClass('d-none');
    $('#assignment-nav').addClass('d-none');
  });
  $('#editor-cancel').on('click', function () {
    $('#editor').addClass('d-none');
    $('#assignment-nav').removeClass('d-none');
  });
});
//# sourceMappingURL=all.js.map
