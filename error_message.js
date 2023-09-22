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


const merchandise = document.getElementById('merch');
const schedule = document.getElementById('sc');
const mmbr = document.getElementById('anggota');
const berita = document.getElementById('brt');
const birthday = document.getElementById('bday');
const menuBar = document.getElementById('menu')

merchandise.style.display = 'none';
  schedule.style.display = 'none';
  mmbr.style.display = 'none';
  berita.style.display = 'none';
  birthday.style.display = 'none';
  menuBar.style.display = 'none';