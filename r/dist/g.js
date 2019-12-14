var search = null;
(function($, _M) {
  'use strict';

  var $searchbar = $('#name-input');

  var dex = [{
    name: 'المطاردة',

 nat: 'الكامل',
  }, {
    name: 'البقلة',
	nat: 'جم',
  }, {
    name: 'وديعة',
   
  }];

  var options = {
    shouldSort: true,
    threshold: 0.5,
    minMatchCharLength: 0,
    keys: [{
      name: 'name',
      weight: 0.75
    }, {
      name: 'nat',
      weight: 0.5
    }, {
      name: 'jp',
      weight: 0.5
    }, {
      name: 'cat',
      weight: 0.5
    }, {
      name: 'romaji',
      weight: 0.25
    }, {
      name: 'typing',
      weight: 0.25
    }]
  };
  var fuse = new Fuse(dex, options);

  $searchbar.on('input', function() {
    var search = fuse.search($searchbar.val());
    var $res = $('#results');
    $res.empty();
    if ($searchbar.val().length < 1) return;
    if (search[0] === undefined) {
      $res.append('<h2 class="fff">لاتوجد نتائج</h2>');
    }
    $res.append('<h2 class="ff">اقرب نتيجة: ' + search[0].name + '</h2>');
    $res.append('<h5 class="vv">جميع النتائج</h5>');

    search.forEach(function(el){
      $res.append(
       '<h3 class="vvv">' + el.name + '</h3>' + '<h6 class="jjj">' + el.nat + '</h6>'
      );
    });
  });

})(jQuery, Materialize);