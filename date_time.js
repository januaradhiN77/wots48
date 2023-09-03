var jadwalElements = document.querySelectorAll(".none_date"); 


var targetDate = new Date("2023-09-03T23:00:00"); 


function updateDisplay() {
  var currentDate = new Date();

  jadwalElements.forEach(function(jadwalElement) {
    if (currentDate < targetDate) {
      jadwalElement.style.display = "block";
    } else {
      jadwalElement.style.display = "none";
    }
  });
}


setInterval(updateDisplay, 1);


updateDisplay();

var blockElements = document.querySelectorAll(".block_date"); 


var targetDate = new Date("2023-09-03T23:00:00"); 


function updateBlock() {
  var currentDate = new Date();

  blockElements.forEach(function(blockElement) {
    if (currentDate < targetDate) {
      blockElement.style.display = "none";
    } else {
      blockElement.style.display = "block";
    }
  });
}


setInterval(updateBlock, 1);


updateBlock();
