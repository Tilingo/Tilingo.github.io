/*
  1. Create the array with the cities names.
  2. Fill the dropdown menu with the array values.
  3. Save the select option of the menu on a variable.
  4. When option is selected on the menu, change bakground.
  5. The value of the variable must change, when the select option is changed.
*/

$(function() {

  var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

  for (var i = 0; i < cities.length; i++) {
    $('#city-type').append($('<option>',
    {
      value: cities[i],
      text: cities[i]
    }))
  }

  $('#city-type').change(function(){
    var city = $('#city-type').val();

    switch (city) {

    case "NYC":
      $('body').attr("class", "nyc");
      break;

    case "SF":
      $('body').attr("class", "sf");
      break;

    case "LA":
      $('body').attr("class", "la");
      break;

    case "ATX":
      $('body').attr("class", "austin");
      break;

    case "SYD":
      $('body').attr("class", "sydney");
      break;
  }

  })

})