jQuery.noConflict();
(function($) {
  var currentSlideIndex = -1;
  var nextSlideIndex = -1;
  var interval;

  function slideImage(){
    var images = $("div.image-container");
    if (images.length < 2) {
      clearInterval(interval);
      return;
    }

    images.removeClass('z-index-neutral z-index-positive animated').addClass('z-index-negative');
    if (currentSlideIndex < 0 || nextSlideIndex < 0) {
      currentSlideIndex = images.length - 1;
      nextSlideIndex = 0;
    }

    $(images.get(nextSlideIndex)).addClass('z-index-neutral');
    $(images.get(currentSlideIndex)).addClass('z-index-positive animated');

    currentSlideIndex = (currentSlideIndex + 1) % images.length;
    nextSlideIndex = (nextSlideIndex + 1) % images.length;
  }

  interval = setInterval(slideImage, 2000);
})(jQuery);
