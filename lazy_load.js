const allSkeleton = document.querySelectorAll('.skeleton');

window.addEventListener('load', function() {
  setTimeout(function() {
    allSkeleton.forEach(item => {
      item.classList.remove('skeleton');
    });
  }, 700);
});



function openEventDetailPage(eventId) {
      window.location.href = `event_detail.html?id=${eventId}`;
    }
    
const searchInput = document.getElementById("searchInput");
const dataItems = document.querySelectorAll(".data-item");

searchInput.addEventListener("input", function() {
  const searchQuery = searchInput.value.toLowerCase();
  
  dataItems.forEach(item => {
    const itemText = item.textContent.toLowerCase();
    
    if (itemText.includes(searchQuery)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
      
    }
  });
});

    
    
    
