var app = (function() {
  var visibleClass = 'visible';

  return {
    initialize: function() {
      this.$menu = $('.menu');
      this.$nav = $('.full-nav');
      this.$body = $('body');
      this.parallax()
          .addHandlers();
      return this;
    },

    addHandlers: function() {
      var self = this;
      this.$menu.on('click', function(e) {
        e.preventDefault();
        self.showNav();
      });
      $('.menu-close').on('click', function(e) {
        e.preventDefault();
        self.hideNav();
      });
      return this;
    },

    showNav: function() {
      var self = this;
      this.$nav.show();
      $(window).scrollTop(0);
      setTimeout(function() {
        self.$nav.addClass(visibleClass);
      }, 50);
      return this;
    },

    hideNav: function() {
      var self = this;
      this.$nav.removeClass(visibleClass);
      setTimeout(function() {
        self.$nav.hide();
      }, 500);
      return this;
    },

    parallax: function() {
      jarallax(document.querySelectorAll('.jarallax-hero'), {
        speed: 0.4,
        disableParallax: /iPad|iPhone|iPod|Android/
      });
      jarallax(document.querySelectorAll('.jarallax-body'), {
        speed: 0.8
      });

      return this;
    }
  };
})();

$(function() {
  app.initialize();
});