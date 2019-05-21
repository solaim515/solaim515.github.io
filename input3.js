    function readValue() {
      var formName = document.getElementById('name-input').value;
      var output = document.getElementById('output');
      var sound = " لاتوجد نتائج ";
      switch(formName.toLowerCase()) {
         case 'جبل عمدان':
          sound="جبل عِمْدَان : هو جبل يتميز بالارتفاع لذلك سُمي عِمْدَان لأنَّه منتصب بشكل عمودي ويقع بين محافظة الكامل ومركز الحنو على بُعد 11 كلم شمال غرب المحافظة غرب الطريق العام الذي يربط المحافظة بقرية الدوارة وتسيل مياهه من جهة الشرق لوادي نهوى حيث يلاقي وادي ساية غرب قرية الشعبة ومن جهة الغرب تسيل لوادي الحنو ";
          break;
        
        case '':
          sound="";
          break;
      }
   output.innerHTML = sound;
    }