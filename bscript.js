document.addEventListener("DOMContentLoaded", function() {
  const divs = document.querySelectorAll(".MAIN > div");
  let currentDiv = 0;

  function showNextDiv() {
    if (currentDiv > 0) {
      divs[currentDiv - 1].classList.add("hidden");
    }
    divs[currentDiv].classList.remove("hidden");
    currentDiv++;
    if (currentDiv < divs.length) {
      if (currentDiv === 3) {
        // Typing animation for the 3rd div
        const textbox = document.querySelector(".textbox");
        const message = "Happy Birthday! yeah! Love";
        let i = 0;
        let typingText = document.createElement("span");

        function typeMessage() {
          if (i < message.length) {
            typingText.textContent += message.charAt(i);
            i++;
            setTimeout(typeMessage, 100);
          } else {
            let button = document.createElement("button");
            button.textContent = "Send";
            textbox.appendChild(button);
          }
        }

        typingText.classList.add("typing");
        textbox.insertBefore(typingText, textbox.firstChild);
        typeMessage();
      } else if (currentDiv === 8) {
        // Rotate :) in the 8th div
        const smiley = document.querySelector(".smiley");
        smiley.classList.add("rotate-smiley");
      } if (currentDiv === 11) {
  const message = "Happy Birthday My Gorgeous";
  const textbox = divs[currentDiv].querySelector("h4");
  let i = 0;
  textbox.textContent = ""; // Clear previous text

  function typeMessage() {
    if (i < message.length) {
      textbox.textContent += message.charAt(i);
      i++;
      setTimeout(typeMessage, 150); // Adjust speed as needed
    } else {
      textbox.classList.add("glowing-text");  // Apply glowing effect after typing
    }
  }

  typeMessage();
}

      

      setTimeout(showNextDiv, 5000); // Display each message for 5 seconds
    }
  }

  showNextDiv();
});
