var hiddenClass = 'hidden';

var app = (function() {
  return {
    initialize: function() {
      this.$header = $('header');
      this.$footer = $('footer > div');
      this.$ampersand = $('.ampersand');
      return this;
    },

    hideAll: function() {
      this.$header.addClass(hiddenClass);
      this.$footer.addClass(hiddenClass);
      this.$ampersand.addClass(hiddenClass);
      return this;
    },

    showAll: function() {
      var self = this;
      setTimeout(function() { self.showHeader(); }, 500);
      setTimeout(function() { self.showAmpersand(); }, 500);
      setTimeout(function() { self.showFooter(); }, 2000);
      return this;
    },

    showHeader: function() {
      this.$header.removeClass(hiddenClass);
      return this;
    },

    showFooter: function() {
      this.$footer.removeClass(hiddenClass);
      return this;
    },

    showAmpersand: function() {
      this.$ampersand.removeClass(hiddenClass);
      return this;
    }
  };
})();

$(function() {
  app.initialize()
    .hideAll()
    .showAll();
});