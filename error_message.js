function showError() {
  const errorContainer = document.getElementById('errorContainer');
  const background = document.getElementById('background');
  
  // Munculkan pesan kesalahan dengan animasi
  errorContainer.style.display = 'block';
  setTimeout(() => {
    errorContainer.style.transform = 'translate(-50%, -50%) scale(1)';
  }, 100);
  
  background.style.display = 'block';
}

function hideError() {
  const errorContainer = document.getElementById('errorContainer');
  const background = document.getElementById('background');
  
  // Sembunyikan pesan kesalahan dengan animasi
  errorContainer.style.transform = 'translate(-50%, -50%) scale(0)';
  setTimeout(() => {
    errorContainer.style.display = 'none';
    background.style.display = 'none';
  }, 300);
}

setInterval(showError, 2000);