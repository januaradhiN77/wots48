var jadwalElements = document.querySelectorAll(".jadwal_date"); 


var targetDate = new Date("2023-09-01T00:00:00"); 


function updateDisplay() {
  var currentDate = new Date();

  jadwalElements.forEach(function(jadwalElement) {
    if (currentDate < targetDate) {
      jadwalElement.style.display = "none";
    } else {
      jadwalElement.style.display = "block";
    }
  });
}


setInterval(updateDisplay, 1);


updateDisplay();
