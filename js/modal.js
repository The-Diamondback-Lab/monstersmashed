$(document).ready(function() {

function closeModal() {
  $('#modal-overlay').css('display','none');
  $('#modal').css('display','none');
}

function openModal() {
  $('#modal-overlay').css('display','block');
  $('#modal').css('display','flex');
}

$('#modal').click(function() {
  closeModal();
});

$('#img-modal').click(function() {
  closeModal();
});

// $('.view').click(function() {
//   openModal();
// });

$('.view').click(function() {
  var id = $(this).attr('id'), drink, name, link, bkg;
  if (id == 'view-deweyFizz') {
    drink = "#deweyFizz"
    name = "The Dewey Fizz"
    bkg = "rgba(29, 18, 46, .95)";
    link = "assets/img/monsterSmashed01.jpg"
  } else if (id == 'view-broomstick') {
    drink = "#broomstick"
    name =  "The Broomstick Punch"
    bkg = "rgba(45, 19, 19, .95)";
    link = "assets/img/monsterSmashed02.jpg"
  } else if (id == 'view-ectoplasm') {
    drink = "#ectoplasm"
    name = "Ectoplasm"
    bkg = "rgba(23, 36, 6, .95)";
    link = "assets/img/monsterSmashed03.jpg"
  } else if (id == 'view-piranha') {
    drink = "#piranha"
    name = "Piranha Head Punch"
    bkg = "rgba(37, 32, 5, .95)";
    link = "assets/img/monsterSmashed04.jpg"
  } else if (id == 'view-gravesite') {
    drink = "#gravesite"
    name = "Gravesite Grotesquery"
    bkg = "rgba(23, 28, 13, .95)";
    link = "assets/img/monsterSmashed05.jpg"
  } else {
    drink = "#kidcob"
    name = "Kid Cob"
    bkg = "rgba(2, 22, 17, .95)";
    link = "assets/img/monsterSmashed06.jpg"
  }
  $('#modal-overlay').css("background-color", bkg);
  $('#link-drink').attr("href", drink);
  $('#link-drink').text(name);
  $('#img-modal').attr("src", link);

  openModal();
});

});
