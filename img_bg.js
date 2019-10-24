$(function() {
  bg_img();
});

function bg_img() {
  if($('div').hasClass('content-background-color')){
    $('.content-background-color').css('background-image', 'url("https://res.cloudinary.com/wsm-02/image/upload/v1549870613/51561970_284182425611066_9121384988984475648_n_dbzskq.jpg"')
    $('.color-primary-font-color').css('color', '#000000bf');
  }
}
