var app = (function() {
  var hiddenClass = 'hidden';
  var visibleClass = 'visible';
  var navVisibleClass = 'nav-shown';

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
      // this.$body.addClass(navVisibleClass);
      $(window).scrollTop(0);
      setTimeout(function() {
        self.$nav.addClass(visibleClass);
      }, 50);
      return this;
    },

    hideNav: function() {
      var self = this;
      this.$nav.removeClass(visibleClass);
      // this.$body.removeClass(navVisibleClass);
      setTimeout(function() {
        self.$nav.hide();
      }, 500);
      return this;
    },

    parallax: function() {
      jarallax(document.querySelectorAll('.jarallax'), {
        disableParallax: function () {
            return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
        },
        disableVideo: function () {
            return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
        }
      });

      return this;
    }
  };
})();

$(function() {
  app.initialize();
});