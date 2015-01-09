(function($, undefined) {
  'use strict';

  var $b = $('#board');

  function init() {
    $b.find('.card-short-id').each(function(idx, el) {
      $b.find(el).removeClass('hide');
    });
  }

  $(init);
} (jQuery));

