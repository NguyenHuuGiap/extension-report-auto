$(function() {
  setTimeout(function(){ clickBtnAccept(); }, 7000);
});

function clickBtnAccept() {
  if($('div').hasClass('component')){
    $('.component button')[1].click();
  }
}