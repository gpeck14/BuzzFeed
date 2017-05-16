function checkIt() {
  // Initialize scores
  var ross = 0;
  var chandler = 0;
  var joey = 0;
  var phoebe = 0;
  var rachel = 0;
  var monica = 0;
  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'Ross') {
        ross++;
      }
      else if (e.value == 'Chandler') {
        chandler++;
      }
      else if (e.value == 'Joey') {
        joey++;
      }
      else if (e.value == 'Phoebe') {
        phoebe++;
      }
      else if (e.value == 'Rachel') {
        rachel++;
      }
      else if (e.value == 'Monica') {
        monica++;
      }
    }

  }

  // Determine result
  var counts = "Ross: " + ross + ", " +
               "Chandler: " + chandler  + ", " +
               "Joey: " + joey  + ", " +
               "Phoebe: " + phoebe  + ", " +
               "Rachel: " + rachel  + ", " +
               "Monica: " + monica;

  // What is the highest value?
  var max = Math.max(ross, chandler, joey, phoebe, rachel, monica);

  // Form a message
  var message;

  if (max == ross) {
    message = " 'Ross, we were not on a break!' Yes we were. ";
  }
  else if (max == chandler) {
    message = " I say the most dumb things before 9am than most people do all day.";
  }
  else if (max == joey) {
    message = " Is it obvious that I’m wearing six sweaters? ";
  }
  else if (max == phoebe) {
    message = " They don’t know that we know they know we know ";
  }
  else if (max == rachel) {
    message = " 'Rachel, we were on a break!' No we weren't!";
  }
  else if (max == monica) {
    message = "Kiss the cook";
  }
  // Display result
  // document.getElementById('result').innerHTML = counts;
document.getElementById('result').innerHTML = message;
}
