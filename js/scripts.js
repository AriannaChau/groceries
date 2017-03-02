$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    event.preventDefault();

    var foods = [$('#food1').val(),$('#food2').val(), $('#food3').val(),$('#food4').val(),$('#food5').val(), $('#food6').val()]

    var alphabet = foods.sort();

    var upperCase = alphabet.map(function(food) {
      return food.toUpperCase();

    });

  });
});
