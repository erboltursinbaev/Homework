export const slider = () => {
$('.comment__slider').slick({
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  centerMode: true,
  centerPadding: '91px',
  responsive: [

    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        centerMode:false
      }
    },
    {
      breakpoint: 735,
      settings: {
        slidesToShow: 1,
        centerMode: false
      }
    }
  ]
})
$('.comment__slider-prev').on('click', function(e) {
  e.preventDefault();
  $('.comment__slider').slick('slickPrev');
});

$('.comment__slider-next').on('click', function(e) {
  e.preventDefault();
  $('.comment__slider').slick('slickNext');
})}