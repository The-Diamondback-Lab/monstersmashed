$(document).ready(function() {
  $('a[href*="#"]').on('click', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 500, 'linear');
  });

  $('#deweyFizz .wrapper .text ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

    $('#deweyFizz .wrapper .text ul.tabs li').removeClass('current');
    $('#deweyFizz .wrapper .text .tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

  $('#broomstick .wrapper .text ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

    $('#broomstick .wrapper .text ul.tabs li').removeClass('current');
    $('#broomstick .wrapper .text .tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

  $('#ectoplasm .wrapper .text ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('#ectoplasm .wrapper .text ul.tabs li').removeClass('current');
    $('#ectoplasm .wrapper .text .tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  });

  $('#piranha .wrapper .text ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('#piranha .wrapper .text ul.tabs li').removeClass('current');
    $('#piranha .wrapper .text .tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  });

  $('#gravesite .wrapper .text ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('#gravesite .wrapper .text ul.tabs li').removeClass('current');
    $('#gravesite .wrapper .text .tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  });

  $('#kidcob .wrapper .text ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('#kidcob .wrapper .text ul.tabs li').removeClass('current');
    $('#kidcob .wrapper .text .tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  });

  function checkTabs() {
    if ($("#tab-1").hasClass('current') == true || $("#tab-2").hasClass('current') == true) {
      $("video").css('display', 'none');
    }
  }
  function hideSeeMe() {
    if ($(window).width() > 600 && $('.see').css('display','none') == true && $('.img-see').hasClass('current') == true) {
      $('.img-see').css('display', 'none');
    }

  }
  $(window).load(function() {
    checkTabs();
  });

  $(window).on('resize', function() {
    hideSeeMe();
  });


});
