// create vowels array
//var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

function puzzle(inputString){
  var newphrase = inputString.replace(/[aeiou]/gi, "*");
  return newphrase;
}

function toggle() {
  $("#wordpuzzle").toggle();
  $("#initially-hidden").toggle();
}

// JQUERY
$(document).ready(function() {
    $("#wordpuzzle").submit(function(event) {
      event.preventDefault();

      var userInput = $("#string").val();
      $("#initially-hidden").text(puzzle(userInput));
      toggle();


    });
  });
