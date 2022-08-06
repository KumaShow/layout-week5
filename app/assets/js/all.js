$(document).ready(() => {
  $('.sidebar__link').click(function (e) {
    $('.sidebar__link').removeClass('is-active');
    $(this).addClass('is-active');
  })
});