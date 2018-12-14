$(function() {
  setTimeout(function(){ ClickBtnLogout(); }, 3000);
})

function ClickBtnLogout() {
  if($('a').hasClass('dropdown-item')){
    $('.dropdown-item')[0].click();
  }
  setTimeout(function(){ clickBtnLogin(); }, 5000);
}

function clickBtnLogin() {
  if($('button').hasClass('btn-login')){
    $('.btn-login')[0].click();
  }
}