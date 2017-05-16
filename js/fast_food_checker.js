function checkIt() {
  // Initialize scores
  var golden = 0;
  var husky = 0;
  var dachshund = 0;
  var poodle = 0;
  var bulldog = 0;
  var dalmatian = 0;
  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'Golden Retriever') {
        golden++;
      }
      else if (e.value == 'Husky') {
        husky++;
      }
      else if (e.value == 'Dachshund') {
        dachshund++;
      }
      else if (e.value == 'Poodle') {
        poodle++;
      }
      else if (e.value == 'Bulldog') {
        bulldog++;
      }
      else if (e.value == 'Dalmatian') {
        dalmatian++;
      }
    }
  }


    // Determine result
    var counts = "Golden Retriever: " + golden + ", " +
                 "Husky: " + husky  + ", " +
                 "Dachshund: " + dachshund  + ", " +
                 "Poodle: " + poodle  + ", " +
                 "Bulldog: " + bulldog  + ", " +
                 "Dalmatian: " + dalmatian;

    // What is the highest value?
    var max = Math.max(golden, husky, dachshund, poodle, bulldog, dalmatian);

    // Form a message
    var message;

    if (max == golden) {
      message = " You must be a loyal friend. ";
    }
    else if (max == husky) {
      message = " Cold on the inside, fluffy on the outside!";
    }
    else if (max == dachshund) {
      message = " I may look like a hot dog, but I bite! ";
    }
    else if (max == poodle) {
      message = " You must be very posh, you poodle ";
    }
    else if (max == bulldog) {
      message = " 'What are you looking at? That's just my face!";
    }
    else if (max == dalmatian) {
      message = "Black with white spots or white with black spots?";
    }

    // Display result
    // document.getElementById('result').innerHTML = counts;
    document.getElementById('result').innerHTML = message;
}
