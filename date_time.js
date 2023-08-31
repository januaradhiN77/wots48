// Ambil elemen-elemen yang ingin kamu atur tampilannya
var jadwalElements = document.querySelectorAll(".jadwal_date"); // Ganti ".jadwal_element" dengan selektor yang sesuai

// Tentukan tanggal dan waktu target
var targetDate = new Date("2023-09-01T00:00:00"); // Ganti dengan tanggal dan waktu yang sesuai

// Fungsi untuk memeriksa dan ubah tampilan untuk setiap elemen
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

// Panggil fungsi updateDisplay secara berkala
setInterval(updateDisplay, 0); // Cek setiap detik

// Panggil updateDisplay saat halaman dimuat
updateDisplay();
