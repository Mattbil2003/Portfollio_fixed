document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('roll-button').focus();
    let count = 3; // Initial count, ensuring it starts within the new bounds
    const countDisplay = document.getElementById('count'); // The element where the count is displayed
    
    // Function to update the count display
    function updateCountDisplay() {
      countDisplay.textContent = count;
    }
  
    updateCountDisplay(); // Update display on initial load
    
    // Increment count by 1, if less than 5
    function incrementCount() {
      if (count < 5) { // Check if count is less than 5 before incrementing
        count++;
        updateCountDisplay();
      }
    }
    
    // Decrement count by 1, if greater than 1
    function decrementCount() {
      if (count > 1) { // Check if count is greater than 1 before decrementing
        count--;
        updateCountDisplay();
      }
    }
      // script.js
  function rollDice() {
    for (let i = 1; i <= count; i++) {
        let diceValue = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
        document.getElementById(`dice${i}`).src = `dice${diceValue}.png`; // Update the image source
        var diceImg = document.getElementById(`dice${i}`);
        diceImg.style.display = 'block';
    }
    for (let i = 1; i <= 5; i++) {
      var diceImg = document.getElementById(`dice${i}`);
      if (i > count) {
          // Hide the dice images that are not part of the current count
          diceImg.style.display = 'none';
      }
  }
  
  }

    // Event listeners for the buttons
    document.getElementById('leftArrow').addEventListener('click', decrementCount);
    document.getElementById('rightArrow').addEventListener('click', incrementCount);
    document.getElementById('roll-button').addEventListener('click', rollDice);

    window.onload = function() {
      rollDice();
    }
  });
  