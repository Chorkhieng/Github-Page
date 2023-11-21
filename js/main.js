// show current date and time on the main page
function showCurrentDateTime() {
    // Create a new Date object
    const currDateTime = document.getElementById("show-date-time");
    var currentDate = new Date();
  
    // Get the current date and time components
    var date = currentDate.toLocaleDateString();
    var time = currentDate.toLocaleTimeString();
  
    // Display the current date and time
    currDateTime.innerText = "Current Date: " + date + "\nCurrent Time: " + time + " CT\n";
  }
  
  // Call the function to display the current date and time
  // update it every second
  setInterval(showCurrentDateTime, 1000);
  

// toggle switch for dark or norman mode
function toggleMode() {
    const mode = document.getElementById("dark-light");
    const changeMode = document.getElementById("css-mode");
    let isDarkMode = localStorage.getItem("isDarkMode") === "true";
  
    // switch between css files to change background colors
    // and change the text to indicate option (Dark Mode/ Light Mode)
    if (isDarkMode) {
      changeMode.setAttribute("href", "css/main.css");
      mode.innerText = "Dark Mode";
      isDarkMode = false;
    } else {
      changeMode.setAttribute("href", "css/main.dark.css");
      mode.innerText = "Light Mode";
      isDarkMode = true;
    }
    
  
    // Store the current theme mode in localStorage
    localStorage.setItem("isDarkMode", isDarkMode.toString());
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const darkTheme = document.getElementById("dark-light");
    darkTheme.addEventListener("click", function (event) {
      event.preventDefault();
      toggleMode();
    });
  
    // Check for the initial theme mode and set it
    let isDarkMode = localStorage.getItem("isDarkMode") === "true";
    if (isDarkMode) {
      document.getElementById("css-mode").setAttribute("href", "css/main.dark.css");
      document.getElementById("dark-light").innerText = "Light Mode";
    } else {
      document.getElementById("css-mode").setAttribute("href", "css/main.css");
      document.getElementById("dark-light").innerText = "Dark Mode";
    }
  });
  
