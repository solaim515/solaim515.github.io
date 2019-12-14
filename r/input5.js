    function readValue() {
      var formName = document.getElementById('name-input').value;
      var output = document.getElementById('output');
      var sound = " لاتوجد نتائج ";
      switch(formName.toLowerCase()) {
        
        
        case 'آل إبراهيم':
          sound="آل إِبْرَاهِيْم : ينسبون إلى إبراهيم بن راشد بن حمد بن ناصر الشريدي ويسكنون في : سدوس والرياض والعيينة";
          break;
		       case '':
          sound="";
          break;
      }
   output.innerHTML = sound;
    }