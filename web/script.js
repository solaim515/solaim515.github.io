var ToC =
  "<nav role='navigation' class='table-of-contents'>" +
    "<h2>المحتويات</h2>" +
    "<ul>";

var newLine, el, title, link;

$("article h3").each(function() {

  el = $(this);
  title = el.text();
  link = "#" + el.attr("id");

  newLine =
    "<li>" +
      "<a href='" + link + "'>" +
        title +
      "</a>" +
    "</li>";

  ToC += newLine;

});

ToC +=
   "</ul>" +
  "</nav>";

$(".all-questions").prepend(ToC);









// Use JavaScript to hide the accordion elements. This is a best practice that ensures
// that the accordion remains usable even when JS is disabled.
$(".js-accordion__item").each(function() {
    if ($(this).hasClass("is-closed")) {
        var $contents = $(this).find(".js-accordion__item__content");
        TweenMax.to($contents, 0, {
            height: 0
        })
    }
});

// Toggle height on click
$(".js-accordion__item__title").click(function() {
    var $content = $(this).next(".js-accordion__item__content"),
        $container = $(this).parent(".js-accordion__item");
    // Use is-closed class to determine whether item has been toggled
    if ($container.hasClass("is-closed")) {
        TweenMax.set($content, {
            height: "auto"
        })
        TweenMax.from($content, 0.2, {
            height: 0
        })
        $container.removeClass("is-closed");
    } else {
        TweenMax.to($content, 0.2, {
            height: 0
        })
        $container.addClass("is-closed")
    }
})