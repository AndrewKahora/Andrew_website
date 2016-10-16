$(document).foundation()
function sticky_relocate() {
      var window_top = $(window).scrollTop();
      var div_top = $('#content-anchor').offset().top;
      if (window_top > div_top) {
        $('#sticky').addClass('stick');
        $('#sticky-phantom').show();
      } else {
        $('#sticky').removeClass('stick');
        $('#sticky-phantom').hide();
      }
    }

    $(function () {
      $(window).scroll(sticky_relocate);
      sticky_relocate();
    });
function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});
