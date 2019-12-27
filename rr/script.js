$(document).ready(function() {
   $(".wrapper").css("margin-top", ($(window).height())/6);
  var $bgColors = ["#007faa", "#28a228", "#f62459", "#708090", "#f64747", "#ff4500", "#7462e0", "#8b008b"];

  function colorRandomizer() {
    var randomColor = $bgColors[Math.floor(Math.random() * ($bgColors.length - 0 + 1)) + 0];
    var changeBackground = $('body, .quote-button, .logo-box, .divider').css("background-color", randomColor);
    var changeColor = $('.project-title, .quote-content, .quote-author').css("color", randomColor);
  };

  //Page Load
  getQuote();
  colorRandomizer();

  //Load-on-click
  $('.quote-button').click(function() {
    getQuote();
    colorRandomizer();
  });
  
  function getQuote() {
    $.getJSON("https://solaim515.github.io/a.json", function(json) {
      //var quoteContents = $('.quote-content').html(JSON.stringify(json));
      $jsonLength = json.length;

      var randomizedQuoteId = Math.floor(Math.random() * ($jsonLength - 0 + 1)) + 0;
      json = json.filter(function(val) {
        return (val.id === randomizedQuoteId);
      });
      json.forEach(function(val) {
        quoteText = val.quote;
        quoteAuthor = val.author;
        $('.quote-content').html(quoteText);
        $('.quote-author').html(quoteAuthor);
        $('.twitter-share').attr("href",'https://twitter.com/intent/tweet?text=' + '"' + quoteText + '" - ' + quoteAuthor + ' codepen.io/myleschuahiock/full/WrVgzB');
      });
    });
  }

  
});