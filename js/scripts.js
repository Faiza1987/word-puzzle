// create vowels array
//var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

function puzzle(inputString){
  var newphrase = str.replace(/[aeiou]/gi, "*");
  return newphrase;
}

function toggle() {
  $("#wordpuzzle").toggle();
  $("#puzzle").toggle()
}

// JQUERY
$(document).ready(function() {
    $("#wordpuzzle").submit(function(event) {
      event.preventDefault();

      var userInput = $("input#" + puzzle).val();
      $("#puzzle").text(puzzle(userInput));

      $("#").show
    });
  });
