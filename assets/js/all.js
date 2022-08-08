"use strict";

$(document).ready(function () {
  $('.sidebar__link').click(function (e) {
    $('.sidebar__link').removeClass('is-active');
    $(this).addClass('is-active');
  });
  $('#grade-icon').click(function (e) {
    $('#grade-icon').toggleClass('no-fill');
  });
  $('#assignment-reply').click(function (e) {
    $('#editor').removeClass('d-none');
    $('#assignment-nav').addClass('d-none');
  });
  $('#editor-cancel').click(function (e) {
    $('#editor').addClass('d-none');
    $('#assignment-nav').removeClass('d-none');
  });
  $('.btn-more').click(function (e) {
    $('.btn-more').toggleClass('d-none');
    $('.view-modal__btn').toggleClass('d-none');
  });
});
//# sourceMappingURL=all.js.map
