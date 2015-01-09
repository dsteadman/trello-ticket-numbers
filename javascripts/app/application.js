(function($, undefined) {
  'use strict';

  var $b = $('#board');

  function init() {
    $b.find('.card-short-id').each(function(idx, el) {
      $(el).removeClass('hide');
    });
  }

  $(init);
} (jQuery));

