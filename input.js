    function readValue() {
      var formName = document.getElementById('name-input').value;
      var output = document.getElementById('output');
      var sound = " لاتوجد نتائج ";
      switch(formName.toLowerCase()) {
        case 'بني سليم':
          sound=" قبيلة سُلَيْم هي قبيلة قيسية مضرية عدنانية تنسب إلى سُلَيْم بن مَنْصُور بن عكرمة بن خصفة بن قيس عيلان بن مضر بن نزار بن معد بن عدنان ";
          break;
        case 'سليم':
          sound=" الجد سُلَيْم وإليه تنسب قبيلة سليم ";
          break;
       
        case '':
          sound="";
          break;
      }
   output.innerHTML = sound;
    }
