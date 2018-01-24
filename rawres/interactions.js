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

window.addEventListener('scroll', function scrolling() {
  if ( current == "palettes" && oktoload == "yes" && $(document).scrollTop() + $(window).height() >= $("body").height()-300 ) {
    step++;
    taker(step,sort,names);
    oktoload = "no";
    setTimeout(function(){ oktoload = "yes" }, 500);
  }
});

$('#subscribe .button').click(function() {
  var input = document.getElementById('email');
  if ( input.value.length != 0 ) {
    $('#subscribe .button').hide(); $('#error').hide(); $('#loader').show();
    var email = $('#subscribe input').val();
    $.ajax({ type: 'POST', url: '/subscribe.php', dataType: "html", data: { action: 'subscribe', email: email },
      success: function(data) {
        if ( data == "success" ) { setTimeout(success, 500); }
        if ( data == "already" ) { setTimeout(already, 500); }
        if ( data == "toomuch" ) { setTimeout(toomuch, 500); }
        if ( data == "notvalid" ) { setTimeout(notvalid, 500); }
      }
    });
    ga('send', 'event', 'subscribe', email);
  }
});

$('#subscribe input').keyup(function(e){
  if (e.keyCode == 13) {
    $('.btn.subscribe').trigger('click');
  }
});
