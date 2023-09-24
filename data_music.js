        // Mengambil parameter "lagu" dari URL
        var urlParams = new URLSearchParams(window.location.search);
        var laguId = urlParams.get('lagu');
        
        // Sesuaikan konten berdasarkan lagu yang dipilih
        if (laguId === 'kebunbinatangsaathujan') {
            document.getElementById('judulLagu').innerHTML = 'Ame No Doubutsuen - Kebun <br> Binatang Saat Hujan';
            document.getElementById('typeMusic').textContent = 'Mahagita - Kamikyokutachi'
            document.getElementById('iframeLagu').src = 'https://www.youtube.com/embed/yjTZPycMoKk?si=EoyfWoTCbPfVAxQe';
            document.getElementById('lirikLagu').innerHTML = 'Kebun binatang saat hujan<br>memang sengaja kupilih<br>Kencan saat tak ada seorang pun<br>oh sungguh terasa mewah<br>Seakan hanya dibuka tuk kita berdua<br><br><br>Jerapah, singa, dan bahkan simpanse<br>punbahkan gajah, zebra, dan juga unta<br>Entah mengapa melihat kepada kita<br>Pasti mereka merasa iri<br><br>Manusia yang saling mencinta<br>pasti selalu merasa gelisah<br>Ekspresi sampai tingkah laku pun<br>satu persatu selalu terpikir<br><br><br>Kebun binatang saat hujan<br>menjadi tempat rahasia<br>Jalan-jalan sambil berpegang tangan<br>Di bangku taman yang basah<br>kita bisa tuk saling bermesraan<br>Kebun binatang saat hujan<br>memang sengaja kupilih<br>Kencan saat tak ada seorang pun<br>oh sungguh terasa mewah<br>Seakan hanya dibuka tuk kita berdua<br><br><br>Membelikan makanan untuk anak rusa<br>mengambil foto bersama dengan panda<br>Bahkan penguin pun diberikan nama<br>selalu riang dan gembira<br><br><br>Asal kau tahu di luar pagar<br>kita berdua selalu diperhatikan<br>Kita berdua sepasang insan<br>ada dalam bahaya kepunahan<br><br><br>Kebun binatang saat hujan<br>dengan perasaan galau<br>Mengapa dada ini terasa sesak?<br>Apakah karena cinta?<br>Pasti karena terlalu bahagia<br>Kebun binatang saat hujan<br>yang selalu ingin kudatangi<br>pada suatu saat dengan kekasihku<br>Ku selalu memimpikannya<br>pergi bersama dirinya menuju tempat ini<br><br><br>Kebun binatang saat hujan<br>menjadi tempat rahasia<br>Jalan-jalan sambil berpegang tangan<br>Di bangku taman yang basah<br>kita bisa tuk saling bermesraan<br>Kebun binatang saat hujan<br>memang sengaja kupilih<br>Kencan saat tak ada seorang pun<br>oh sungguh terasa mewah<br>Seakan hanya dibuka tuk kita berdua';
        } 
        
        
        
        
        else if (laguId === 'seventeen') {
            document.getElementById('judulLagu').innerHTML = 'Seventeen';
            document.getElementById('typeMusic').textContent = 'BANZAI JKT48'
            document.getElementById('iframeLagu').src = 'https://www.youtube.com/embed/njeqh_BK36A?si=QlY0szqy9W02GCUB';
            document.getElementById('lirikLagu').innerHTML = 'Di tempat kulahir dan dibesarkan<br>Di kota yang dekat laut ini<br>Setelah sekian lama aku pulang<br>Sudah ada shopping mall berdiri<br><br>Waktu itu selalu seperti tongkat sihir<br>Walaupun telah mengubah pemandangan<br>Suara ombak dan aroma gelombang<br>Masih sama seperti dulu<br>Seventeen<br><br>Sekarang juga kamu yang teristimewa<br>Ada di pojok kanan buku tahunan kita<br>Sungguh memang kamu yang teristimewa<br>Berapakali kubuka untuk memastikannya<br><br>Rumahmu yang dulu toko minuman<br>Sekarang menjadi minimarket<br>Saatku intip ke balik jendela<br>Kamu berdiri di kasir counter<br><br>Cita-citamu menjadi seorang hair stylist<br>Waktu itu kamu pernah bercerita<br>Walau tak seperti yang kamu bayangkan<br>Kamu terlihat bahagia<br>Aku jadi lega<br><br>Kudengar kalau kamu sudah menikah <br>Aku terlambat bilang suka kepadamu<br>Kudengar kamu pun sekarang punya anak<br>Tak sanggup memanggilmu<br>Farewell masa mudaku<br><br>Sekarang juga kamu yang teristimewa<br>Ada di pojok kanan buku tahunan kita<br>Sungguh memang kamu yang teristimewa<br>Berapakali kubuka untuk memastikannya<br>Sekarang juga kamu yang teristimewa<br>Berkilau dengan terang di dalam kenangan<br>Sungguh memang kamu yang teristimewa<br>Seperti ini selamanya<br>Cintaku yang pertama';
        }
        // Tambahkan kondisi lain untuk lagu lain jika diperlukan