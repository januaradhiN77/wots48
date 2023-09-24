        // Mengambil parameter "lagu" dari URL
        var urlParams = new URLSearchParams(window.location.search);
        var laguId = urlParams.get('lagu');
        
        // Sesuaikan konten berdasarkan lagu yang dipilih
        if (laguId === 'lagu1') {
            document.getElementById('judulLagu').textContent = 'Ame No Doubutsuen - Kebun <br> Binatang Saat Hujan';
            document.getElementById('typeMusic').textContent = 'Mahagita - Kamikyokutachi'
            document.getElementById('iframeLagu').src = 'https://www.youtube.com/embed/yjTZPycMoKk?si=EoyfWoTCbPfVAxQe';
            document.getElementById('lirikLagu').innerHTML = 'Kebun binatang saat hujan<br>memang sengaja kupilih<br>Kencan saat tak ada seorang pun<br>oh sungguh terasa mewah<br>Seakan hanya dibuka tuk kita berdua<br><br><br>Jerapah, singa, dan bahkan simpanse<br>punbahkan gajah, zebra, dan juga unta<br>Entah mengapa melihat kepada kita<br>Pasti mereka merasa iri<br><br>Manusia yang saling mencinta<br>pasti selalu merasa gelisah<br>Ekspresi sampai tingkah laku pun<br>satu persatu selalu terpikir<br><br><br>Kebun binatang saat hujan<br>menjadi tempat rahasia<br>Jalan-jalan sambil berpegang tangan<br>Di bangku taman yang basah<br>kita bisa tuk saling bermesraan<br>Kebun binatang saat hujan<br>memang sengaja kupilih<br>Kencan saat tak ada seorang pun<br>oh sungguh terasa mewah<br>Seakan hanya dibuka tuk kita berdua<br><br><br>Membelikan makanan untuk anak rusa<br>mengambil foto bersama dengan panda<br>Bahkan penguin pun diberikan nama<br>selalu riang dan gembira<br><br><br>Asal kau tahu di luar pagar<br>kita berdua selalu diperhatikan<br>Kita berdua sepasang insan<br>ada dalam bahaya kepunahan<br><br><br>Kebun binatang saat hujan<br>dengan perasaan galau<br>Mengapa dada ini terasa sesak?<br>Apakah karena cinta?<br>Pasti karena terlalu bahagia<br>Kebun binatang saat hujan<br>yang selalu ingin kudatangi<br>pada suatu saat dengan kekasihku<br>Ku selalu memimpikannya<br>pergi bersama dirinya menuju tempat ini<br><br><br>Kebun binatang saat hujan<br>menjadi tempat rahasia<br>Jalan-jalan sambil berpegang tangan<br>Di bangku taman yang basah<br>kita bisa tuk saling bermesraan<br>Kebun binatang saat hujan<br>memang sengaja kupilih<br>Kencan saat tak ada seorang pun<br>oh sungguh terasa mewah<br>Seakan hanya dibuka tuk kita berdua';
        } else if (laguId === 'lagu2') {
            document.getElementById('judulLagu').textContent = 'Judul Lagu 2';
            document.getElementById('iframeLagu').src = 'URL_VIDEO_LAGU_2';
            document.getElementById('lirikLagu').innerHTML = 'Lirik lagu 2:<br>Baris 1<br>Baris 2<br>Baris 3';
        }
        // Tambahkan kondisi lain untuk lagu lain jika diperlukan