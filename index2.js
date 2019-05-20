    function readValue() {
      var formName = document.getElementById('name-input').value;
      var output = document.getElementById('output');
      var sound = "لا توجد نتائج";
      switch(formName.toLowerCase()) {
        
        case 'سليم':
          sound="سُليم بن منصور بن عكرمة بن خصفة بن قيس عيلان بن مضر بن نزار بن معد بن عدنان";
          break;
        
        case 'chicken':
          sound="cluck";
          break;
      }
      output.innerHTML = 'قبيلة ' + formName.toLowerCase() + ' تنسب إلى ' + sound;










  
    }