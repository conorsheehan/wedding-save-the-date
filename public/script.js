var app = (function() {
  var hiddenClass = 'hidden';
  var visibleClass = 'visible';
  var navVisibleClass = 'nav-shown';

  return {
    initialize: function() {
      this.$menu = $('a.menu');
      this.$nav = $('.full-nav');
      this.$body = $('body');
      this.addHandlers();
      return this;
    },

    addHandlers: function() {
      var self = this;
      this.$menu.on('click', function(e) {
        e.preventDefault();
        self.showNav();
      });
      $('.full-nav .close').on('click', function(e) {
        e.preventDefault();
        self.hideNav();
      });
      return this;
    },

    showNav: function() {
      this.$nav.addClass(visibleClass);
      this.$body.addClass(navVisibleClass);
      $(window).scrollTop(0);
      return this;
    },

    hideNav: function() {
      this.$nav.removeClass(visibleClass);
      this.$body.removeClass(navVisibleClass);
      return this;
    },

    // hideAll: function() {
    //   this.$header.addClass(hiddenClass);
    //   this.$footer.addClass(hiddenClass);
    //   this.$ampersand.addClass(hiddenClass);
    //   return this;
    // },

    // showAll: function() {
    //   var self = this;
    //   setTimeout(function() { self.showHeader(); }, 500);
    //   setTimeout(function() { self.showAmpersand(); }, 500);
    //   setTimeout(function() { self.showFooter(); }, 2000);
    //   return this;
    // },

    // showHeader: function() {
    //   this.$header.removeClass(hiddenClass);
    //   return this;
    // },

    // showFooter: function() {
    //   this.$footer.removeClass(hiddenClass);
    //   return this;
    // },

    // showAmpersand: function() {
    //   this.$ampersand.removeClass(hiddenClass);
    //   return this;
    // }
  };
})();

$(function() {
  app.initialize();
});