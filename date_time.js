// Ambil elemen yang ingin kamu atur tampilannya
var jadwalElement = document.getElementById("jadwal_date"); // Ganti "jadwal" dengan ID elemenmu

// Tentukan tanggal dan waktu target
var targetDate = new Date("2023-08-29T18:00:00"); // Ganti dengan tanggal dan waktu yang sesuai

// Fungsi untuk memeriksa dan ubah tampilan
function updateDisplay() {
  var currentDate = new Date();

  if (currentDate < targetDate) {
    jadwalElement.style.display = "none";
  } else {
    jadwalElement.style.display = "block";
  }
}

// Panggil fungsi updateDisplay secara berkala
setInterval(updateDisplay, 1000); // Cek setiap detik

// Panggil updateDisplay saat halaman dimuat
updateDisplay();
