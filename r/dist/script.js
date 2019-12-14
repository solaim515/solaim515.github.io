// взимаме бутона и инпут-а като обекти:
var btnNode = document.querySelector(".calculator button");
var inputNode = document.querySelector(".calculator input");

// гледаме какво и как сме взели - ше трябва да ползвате конзолата на браузера, а не вградената в кодпен.
console.dir(btnNode);
console.dir(inputNode);


function contentToInputText() {
  // визмаме съдържанието на бутона: 
  var btnContent = btnNode.textContent;
  
  // задаваме стойността на input-a да бъде равна на съдържанието на бутона
  inputNode.value = btnContent;

  // input елемента няма съдържание, т.е. textContent/innerHTML при него не работи. Той има само value, което определя това което виждаме в input елемента
}