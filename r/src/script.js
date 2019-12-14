var pokemon = [
  {
    name: "Bulbasaur",
    type: "Grass",
    special_move: "Vine Whip",
    pic: "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png",
    description: "Bulbasaur is a cute Pokémon born with a large seed firmly affixed to its back; the seed grows in size as the Pokémon does. Along with Squirtle and Charmander, Bulbasaur is one of the three Pokémon available at the beginning of Pokémon Red and Blue. It evolves into Ivysaur.",
    gif: "https://78.media.tumblr.com/tumblr_lmtntqcikA1qd87hlo1_500.gif"
  },
  {
    name: "Charmander",
    type: "Fire",
    special_move: "Flamethrower",
    pic: "https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png",
    description: "The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely. The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is happy, and blazes when it is enraged.",
    gif: 'https://media1.tenor.com/images/e4ad735b0bf29e75999c4c4fae140c89/tenor.gif?itemid=5827908'
  },
  {
    name: "Squirtle",
    type: "Water",
    special_move: "Bubble Beam",
    pic: "https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png",
    description: "It evolves into Wartortle starting at level 16, which evolves into Blastoise starting at level 36. Along with Bulbasaur and Charmander, Squirtle is one of three starter Pokémon of Kanto available at the beginning of Pokémon Red, Green, Blue, FireRed, and LeafGreen.",
    gif: 'https://78.media.tumblr.com/7b6894ba5c9104935321007303332357/tumblr_mgy0dySE5L1rfk2ioo1_500.gif'
  },
  {
    name: "Pikachu",
    type: "Electric",
    special_move: "Thunder Bolt",
    pic: "https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png",
    description: "Pikachu, the Mouse Pokémon, and the evolved form of Pichu. Pikachu's tail is sometimes struck by lightning as it raises it to check its surroundings. Pikachu, the Mouse Pokémon, and the evolved form of Pichu. Pikachu can help other Pikachu who are feeling weak by sharing its electric current.",
    gif: "https://media1.tenor.com/images/9f7e36b264992626b6791eb67ab47b58/tenor.gif?itemid=5209565"
  }  
];
var index = 0;

function print(message){
var text = document.getElementById('text');
  div.innerHTML = message;
}

function search() {
 for (i = 0; i < pokemon.length; i += 1){
   if (text.value.toLowerCase() === pokemon[i].name.toLowerCase()) {
     var name = document.getElementById('name');
     var image = document.getElementById('image');
     var description = document.getElementById('description');
     var gifs = document.getElementById('gifer');
    
     name.innerHTML = "";
     name.innerHTML += '<h1>' + pokemon[i].name + '</h1>' + '<img src=' + "'" + pokemon[i].gif + "'>" +
       '<br>' + '<p><strong>Type:</strong> ' + pokemon[i].type + '</p>' +
       '<p><strong>Special Move:</strong> ' + pokemon[i].special_move + '</p>';
     
     description.innerHTML = "";
     description.innerHTML = '<p>' + pokemon[i].description + '</p>';   
   }
 }
}

$('#text').keypress(function(e){
 if (e.keyCode === 13){
   $('#searchButton').click();
}
});

function right(current){
  i = (i + 1) % pokemon.length;
     var name = document.getElementById('name');
     var description = document.getElementById('description');
     var gifs = document.getElementById('gifer');     
     name.innerHTML = "";
     name.innerHTML += '<h1>' + pokemon[i].name + '</h1>' +
       '<img src=' + "'" + pokemon[i].pic + "'>" +
       '<br>' + '<p><strong>Type:</strong> ' + pokemon[i].type + '</p>' +
       '<p><strong>Special Move:</strong> ' + pokemon[i].special_move + '</p>';
     
     description.innerHTML = "";
     description.innerHTML = '<p>' + pokemon[i].description + '</p>';
       gifs.innerHTML = "";
     gifs.innerHTML = '<img src=' + "'" + pokemon[i].gif + "'>";
     gifs.style.width = '140%';
}

function left(current){
  i = (i + -1) % pokemon.length;
if(i<0){i=3;}
     var name = document.getElementById('name');
     var description = document.getElementById('description');
     var gifs = document.getElementById('gifer');     
     name.innerHTML = "";
     name.innerHTML += '<h1>' + pokemon[i].name + '</h1>' +
       '<img src=' + "'" + pokemon[i].pic + "'>" +
       '<br>' + '<p><strong>Type:</strong> ' + pokemon[i].type + '</p>' +
       '<p><strong>Special Move:</strong> ' + pokemon[i].special_move + '</p>';
     
     description.innerHTML = "";
     description.innerHTML = '<p>' + pokemon[i].description + '</p>';
       gifs.innerHTML = "";
     gifs.innerHTML = '<img src=' + "'" + pokemon[i].gif + "'>";
     gifs.style.width = '140%';
}
