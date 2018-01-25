$('#sort').click(function(e) {
  e.stopPropagation();
  if ( $('#sort_menu').is(":visible") ) {
    $('#sort_menu').hide();
  } else {
    $('#sort_menu').show();
  }
});

$('#menu').click(function(e) {
  e.stopPropagation();
  if ( $('#main_menu').is(":visible") ) {
    $('#main_menu').hide();
  } else {
    $('#main_menu').show();
  }
});

$(window).click(function() {
  $('.dropdown:visible').hide();
});
