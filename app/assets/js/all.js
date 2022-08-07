$(document).ready(() => {
  $('.sidebar__link').click(function (e) {
    $('.sidebar__link').removeClass('is-active');
    $(this).addClass('is-active');
  })

  $('#grade-icon').click(function (e) {
    $('#grade-icon').toggleClass('no-fill');
  })

  $('#assignment-reply').click(function (e) {
    $('#editor').removeClass('d-none');
    $('#assignment-nav').addClass('d-none');
    
  })

  $('#editor-cancel').click(function (e) {
    $('#editor').addClass('d-none');
    $('#assignment-nav').removeClass('d-none');
  })

});