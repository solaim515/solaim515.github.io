const translation = document.getElementById('translated');

const input = document.getElementById('original');

const southernDict = {
  'ضاري': 'قديم',
  'مضارع' : 'ضارع',
  '<hr/>' : '',
  '<br/>' : '',
 'من قد' : 'من ضاري',
  '<h1>' : '',
  '<h2>' : '',
  '<h3>' : '',
  '<h4>' : '',
  '<h5>' : '',
  '<h6>' : '',
  '<p>' : '',
  '<b>' : '',
  '<strong>' : '',
  '<span>' : '',
  '<div>' : '',
  '<button>' : '',
}

function translate(string) {
  if (input.value == '') return '';
  string = string.replace(/( +(?= )|[,!\?])/g,'');
  
  const words = string.split(' ');
  
  for (let i = 0; i<words.length; i++) {
    let str = words[i];
    words[i] = str[0].toUpperCase() + str.slice(1);
    if (words[i] in southernDict) {
      words[i] = southernDict[words[i]];
    }
  }
 
  string = words.join(' ');
  
  string = string.replace(/(من ضاري|من ضاري|من ضاري)/gi,'مِنْ قديم');
  string = string.replace(/(من ضاري|من ضاري)/gi,'مِنْ قديم');
  string = string.replace(/من ضاري/gi,'مِنْ قديم');
  string = string.replace(/(you bet|you're right|you're correct|you are right|you are correct)/gi,'You\'re darn tootin\'');
  string = string.replace(/(going to go to|about to|planning to)/gi,'Fixin\' To');
  string = string.replace(/(good morning|morning)/gi,'Mornin\'');
  string = string.replace(/(good afternoon)/gi,'Afternoon');
  string = string.replace(/(you idiot|you're an idiot|you dummy|you stupid)/gi,'Bless your heart!');
  string = string.replace(/(it's cold|it's chilly)/gi,'It\'s Colder Than a Witch\'s Tit');
  string = string.replace(/('have a desire to'|'have a craving for')/gi,'A Hankerin\' For');
    string = string.replace(/('want to'|wanna|i'd like|you'd like|would like)/gi,'Have A Hankerin\' to');
  string = string.replace(/ضارع/gi,'ضاري');

  return string;
}

input.addEventListener('keyup', function () {
  translation.innerHTML = translate(input.value);
});