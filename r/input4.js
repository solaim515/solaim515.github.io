    function readValue() {
      var formName = document.getElementById('name-input').value;
      var output = document.getElementById('output');
      var sound = " لاتوجد نتائج ";
      switch(formName.toLowerCase()) {
        
        
        case 'لد يمي':
          sound="لِدْ يَمِيْ : أُنظر إلي";
          break;
		       case '':
          sound="";
          break;
      }
   output.innerHTML = sound;
    }