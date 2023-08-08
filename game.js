document.addEventListener("DOMContentLoaded", function() {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");
    const background = document.querySelector(".background");
  
    button1.addEventListener("click", function() {
      // Add functionality for Button 1
      background.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    });
  
    button2.addEventListener("click", function() {
      // Add functionality for Button 2
      background.style.backgroundColor = "rgba(0, 255, 0, 0.5)";
    });
  
    button3.addEventListener("click", function() {
      // Add functionality for Button 3
      background.style.backgroundColor = "rgba(0, 0, 255, 0.5)";
    });
  });
  