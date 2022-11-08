let currNum = document.querySelector("#currentNumber") //The elemnt storing the current number in the bar

function waitAndAlert(msg) {
  /**
   * Since the alert is triggering BEFORE the DOM of the number is changing, this function prevents it by
   * alerting the 'msg' string after some quantom of time
   */
  setTimeout(function () { alert(msg); }, 10);
}

function fizzBuzzLogic(val) {
  /**
   * Alerts FIZZ / BUZZ / FIZZ BUZZ according to the rules of the game
   */
  fizz = val % 3 === 0;
  buzz = val % 5 === 0;
  if (fizz && buzz) { waitAndAlert("FIZZ BUZZ"); }
  else if (fizz) { waitAndAlert("FIZZ"); }
  else if (buzz) { waitAndAlert("BUZZ"); }
}

function resetNumber() {
  /**
   * Resets the number in the bar
   */
  currNum.value = 0
}

function incrementNumber() {
  /**
   * When the user clicks on the 'increment' button, this function is called.
   * It increments the number in the bar by one and calling the game's logic function
   */
  currNum.stepUp();
  let val = currNum.valueAsNumber;
  fizzBuzzLogic(val)
}
