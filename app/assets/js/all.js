// $(document).ready(() => {
//   console.log('Hello Bootstrap4');
// });
// document.querySelector('a[data-sidebar="assignment"]').classList.add('active');



// document.querySelector('a[data-sidebar="admin"]').classList.add('active');
$('.outside-reply').click(function(e){
  e.preventDefault
  $('.card-edit').addClass('d-flex');
  $('.card-relpy').addClass('d-none');
  $('.final-card').removeClass('d-flex');
  $('.final-card').addClass('d-none');
})

$('.btn-cancel').click(function(e){
  e.preventDefault
  // $('.card-reply').removeClass('d-none');
  $('.card-edit').removeClass('d-flex');
  $('.card-relpy').removeClass('d-none');
  $('.final-card').addClass('d-flex');

})
$('.js-icon').click(function(e){
  e.preventDefault
  $('.js-icon').toggleClass('active');
  $('.js-dropdown').toggleClass('show');
})
