// Fungsi untuk mengunjungi file HTML lain saat tombol diklik
function goToPage(pageName) {
  window.location.href = pageName;
}

// Daftar nama file HTML yang sesuai dengan tombol
const pages = [
  "callie.html", "ella.html", "indira.html",
  "alya.html"
];

// Tambahkan tindakan saat tombol diklik dengan menggunakan perulangan
for (let i = 0; i < pages.length; i++) {
  const buttonId = "btnbd" + (i + 1);
  document.getElementById(buttonId).addEventListener("click", function() {
    goToPage(pages[i]);
  });
}
