
// Rotate the plus sign when FAQ are shown or hidden
$('.sc-faq').on('show.bs.collapse', function (){
  $(this).find('img').addClass('sc-rotate45')
})

$('.sc-faq').on('hide.bs.collapse', function (){
  $(this).find('img').removeClass('sc-rotate45')
})

