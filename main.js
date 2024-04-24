  // Function to handle selection of betting options
  function selectOption(option) {
    // Remove "selected" class from all options of the same fixture
    var fixtureOptions = option.parentNode.querySelectorAll('.block');
    fixtureOptions.forEach(function(opt) {
      opt.classList.remove('selected');
    });

    // Add "selected" class to the clicked option
    option.classList.add('selected');
  }

  // Function to validate selection before form submission
  function validateSelection() {
    // Get all fixtures
    var fixtures = document.querySelectorAll('.fixture');

    // Loop through each fixture
    for (var i = 0; i < fixtures.length; i++) {
      var fixtureOptions = fixtures[i].querySelectorAll('.block');
      var selected = false;

      // Check if any option of the fixture is selected
      for (var j = 0; j < fixtureOptions.length; j++) {
        if (fixtureOptions[j].classList.contains('selected')) {
          selected = true;
          break;
        }
      }

      // If no option of the fixture is selected, show an alert and return false
      if (!selected) {
        alert("Please select one option for every fixture before submitting.");
        return false;
      }
    }

    // If all fixtures have at least one option selected, return true
    return true;
  }