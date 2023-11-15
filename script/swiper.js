var swiper = new Swiper('.swiper-container.swiper-one', {
  loop: true,
  speed: '1450',
  spaceBetween: 20,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true'
  },
  //   autoplay: {
  //     delay: 6500,
  //  },
});

AOS.init()


// breakpoints: {
//     1920: {
//         slidesPerView: 1,
//         spaceBetween: 30
//     },
//     1028: {
//         slidesPerView: 1,
//         spaceBetween: 30
//     },
//     480: {
//         slidesPerView: 1,
//         spaceBetween: 10
//     }
// }

var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  thumbs: {
    swiper: galleryThumbs
  }
});