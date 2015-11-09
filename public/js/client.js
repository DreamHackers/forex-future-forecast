import $ from 'jquery';

(function() {
  "use strict";

  $(function() {
    $('p').click(function() {
      $(this).fadeOut('slow');
    });
  });

  function load() {
    console.log("index test");
  }
  document.addEventListener('DOMContentLoaded', load, false);
}());
