        // Mengambil parameter "lagu" dari URL
        var urlParams = new URLSearchParams(window.location.search);
        var laguId = urlParams.get('lagu');
        
        var chantButton = document.getElementById('chantButton');
        var lirikButton = document.getElementById('lirikButton');
        
        // Sesuaikan konten berdasarkan lagu yang dipilih
        if (laguId === 'kebunbinatangsaathujan') {
            document.getElementById('judulLagu').innerHTML = 'Ame No Doubutsuen - Kebun <br> Binatang Saat Hujan';
            document.getElementById('typeMusic').textContent = 'Mahagita - Kamikyokutachi'
            document.getElementById('iframeLagu').src = 'https://www.youtube.com/embed/yjTZPycMoKk?si=EoyfWoTCbPfVAxQe';
            document.getElementById('chantLagu').innerHTML = 'Chant lagu 1:<br>Chant 1<br>Chant 2<br>Chant 3';
            document.getElementById('lirikLagu').innerHTML = 'Lirik<br><br><br>Kebun binatang saat hujan<br>memang sengaja kupilih<br>Kencan saat tak ada seorang pun<br>oh sungguh terasa mewah<br>Seakan hanya dibuka tuk kita berdua<br><br><br>Jerapah, singa, dan bahkan simpanse<br>punbahkan gajah, zebra, dan juga unta<br>Entah mengapa melihat kepada kita<br>Pasti mereka merasa iri<br><br>Manusia yang saling mencinta<br>pasti selalu merasa gelisah<br>Ekspresi sampai tingkah laku pun<br>satu persatu selalu terpikir<br><br><br>Kebun binatang saat hujan<br>menjadi tempat rahasia<br>Jalan-jalan sambil berpegang tangan<br>Di bangku taman yang basah<br>kita bisa tuk saling bermesraan<br>Kebun binatang saat hujan<br>memang sengaja kupilih<br>Kencan saat tak ada seorang pun<br>oh sungguh terasa mewah<br>Seakan hanya dibuka tuk kita berdua<br><br><br>Membelikan makanan untuk anak rusa<br>mengambil foto bersama dengan panda<br>Bahkan penguin pun diberikan nama<br>selalu riang dan gembira<br><br><br>Asal kau tahu di luar pagar<br>kita berdua selalu diperhatikan<br>Kita berdua sepasang insan<br>ada dalam bahaya kepunahan<br><br><br>Kebun binatang saat hujan<br>dengan perasaan galau<br>Mengapa dada ini terasa sesak?<br>Apakah karena cinta?<br>Pasti karena terlalu bahagia<br>Kebun binatang saat hujan<br>yang selalu ingin kudatangi<br>pada suatu saat dengan kekasihku<br>Ku selalu memimpikannya<br>pergi bersama dirinya menuju tempat ini<br><br><br>Kebun binatang saat hujan<br>menjadi tempat rahasia<br>Jalan-jalan sambil berpegang tangan<br>Di bangku taman yang basah<br>kita bisa tuk saling bermesraan<br>Kebun binatang saat hujan<br>memang sengaja kupilih<br>Kencan saat tak ada seorang pun<br>oh sungguh terasa mewah<br>Seakan hanya dibuka tuk kita berdua';
            lirikButton.classList.add('active'); // Tandai tombol "Lirik" sebagai aktif
            
        } 
        
        
        
        
        else if (laguId === 'seventeen') {
            document.getElementById('judulLagu').innerHTML = 'Seventeen';
            document.getElementById('typeMusic').textContent = 'BANZAI JKT48'
            document.getElementById('iframeLagu').src = 'https://www.youtube.com/embed/njeqh_BK36A?si=QlY0szqy9W02GCUB';
            document.getElementById('chantLagu').innerHTML = 'Chant lagu 2:<br>Chant 1<br>Chant 2<br>Chant 3';
            document.getElementById('lirikLagu').innerHTML = 'Lirik<br><br><br>Di tempat kulahir dan dibesarkan<br>Di kota yang dekat laut ini<br>Setelah sekian lama aku pulang<br>Sudah ada shopping mall berdiri<br><br>Waktu itu selalu seperti tongkat sihir<br>Walaupun telah mengubah pemandangan<br>Suara ombak dan aroma gelombang<br>Masih sama seperti dulu<br>Seventeen<br><br>Sekarang juga kamu yang teristimewa<br>Ada di pojok kanan buku tahunan kita<br>Sungguh memang kamu yang teristimewa<br>Berapakali kubuka untuk memastikannya<br><br>Rumahmu yang dulu toko minuman<br>Sekarang menjadi minimarket<br>Saatku intip ke balik jendela<br>Kamu berdiri di kasir counter<br><br>Cita-citamu menjadi seorang hair stylist<br>Waktu itu kamu pernah bercerita<br>Walau tak seperti yang kamu bayangkan<br>Kamu terlihat bahagia<br>Aku jadi lega<br><br>Kudengar kalau kamu sudah menikah <br>Aku terlambat bilang suka kepadamu<br>Kudengar kamu pun sekarang punya anak<br>Tak sanggup memanggilmu<br>Farewell masa mudaku<br><br>Sekarang juga kamu yang teristimewa<br>Ada di pojok kanan buku tahunan kita<br>Sungguh memang kamu yang teristimewa<br>Berapakali kubuka untuk memastikannya<br>Sekarang juga kamu yang teristimewa<br>Berkilau dengan terang di dalam kenangan<br>Sungguh memang kamu yang teristimewa<br>Seperti ini selamanya<br>Cintaku yang pertama';
            lirikButton.classList.add('active'); // Tandai tombol "Lirik" sebagai aktif
            }
        
else if (laguId === 'masadepanyangmenyilaukanmata') {
            document.getElementById('judulLagu').innerHTML = 'Masa Depan yang Menyilaukan<br>Mata - Mirai ga Me ni Shimiru';
            document.getElementById('typeMusic').innerHTML = 'Masa Depan yang Menyilaukan Mata - Mirai<br>ga Me ni Shimiru'
            document.getElementById('iframeLagu').src = 'https://www.youtube.com/embed/qKPBBGlnsbA?si=T5v0fClFBUkfAQUw';
            document.getElementById('chantLagu').innerHTML = 'Chant lagu 3:<br>Chant 1<br>Chant 2<br>Chant 3';
            document.getElementById('lirikLagu').innerHTML = 'Lirik<br><br><br>[Verse 1]<br>Baru pertama kali ini ku melihat<br>Fajar yang seperti ini<br>Warna-warna meluas bagai dilukis<br>Oleh kuas biru, meleleh di atas langit<br><br>[Pre-Chorus 1]<br>Saat manusia membuat keputusan<br>Hal yang terlihat menjadi berubah<br>Walau pagi yang sama<br>Seperti biasanya<br><br> [Chorus 1]<br>Pedih di mata pun, lihat baik-baik<br>Seberapa silau pun, itulah masa depan kita<br>Pedih di mata pun, dunia luar menunggu<br>Entah mengapa air mataku berlinang<br><br>[Verse 2]<br>Walau tak ada hal sedih sedikit pun<br>Diriku merasa sendu<br>Walaupun hanya menatap langit tempat<br>Sang mentari terbit, aku pun jadi menangis<br><br>[Pre-Chorus 2]<br>Oh betapa begitu indahnya<br>Tiada awan kekhawatiran<br>Tampak setidaknya<br>Kuingin hatiku cerah<br><br>[Chorus 2]<br>Janganlah berpaling, walau di saat hujan pun<br>Seperti apa pun cuacanya, itulah yang namanya hidup<br>Janganlah berpaling, terimalah semuanya<br>Air mata kan bersihkan hal sedih<br><br>[Chorus 1]<br>Pedih di mata pun, lihat baik-baik<br>Seberapa silau pun, itulah masa depan kita<br>Pedih di mata pun, dunia luar menunggu<br>Entah mengapa air mataku berlinang ';
            lirikButton.classList.add('active'); // Tandai tombol "Lirik" sebagai aktif
            
}

else if (laguId === 'hissatsuteleport') {
            document.getElementById('judulLagu').innerHTML = 'Hissatsu Teleport (Jurus Rahasia<br>Teleport)';
            document.getElementById('typeMusic').textContent = 'Pajama Drive'
            document.getElementById('iframeLagu').src = 'https://www.youtube.com/embed/BXXI_MnaA0Y?si=7eq2dYSF6j78Yyp2';
            document.getElementById('chantLagu').innerHTML = 'Chant lagu 4:<br>Chant 1<br>Chant 2<br>Chant 3';
            document.getElementById('lirikLagu').innerHTML = 'Lirik<br><br><br>Lawanlah daya tarik dari cinta<br>Jump! Jump! Jump!<br>Hatiku sedikit saja Layangkanlah <br>Jump! Jump! Jump!<br><br>Orang yang kusuka <br>[Tolonglah TELEPORT<br>Tolonglah Teleport Hissatsu TELEPORT]<br>Jalan sekolah di pagi hari<br>Kalian yang di depanku  [Hey!Boys]<br>GOOD MORNING  aku ucapkan <br>Aku agak dicuekin [Masa siih?]<br><br>Ah- jika semua melihat [Uuuh]<br>Laki-laki itu pemalu [Lucunyaaa]<br>Selalu pasang<br>Tatapan keren [Hyuuu]<br><br>Hingga di angkasa sana<br>Di kejauhan<br>Pertemuan antara kita berdua<br>Tempat yang tak ada siapapun<br>HISSATSU TELEPORT<br>[HISSATSU! HISSATSU! HISSATSU!...]<br>Walau kucoba melewatimu<br>Kau tampak tidak tertarik  [Oh yaa?]<br>Kau pun berpaling dan berbicara<br>Ayo lihat kesini  [Lihat ke sini]<br><br>Ah- jika saja aku bisa  [Bibibibibi]<br>Memakai satu kekuatan khusus  [Hoi]<br>Dalam sekejap <br>Kau akan kuhapus <br>[Hup!]<br>Dirimu yang selama ini <br>Ada di situ<br>Mengapa hanya dalam sesaat<br>Ke tempat diriku berada<br>HISSATSU TELEPORT<br>[[Tolonglah TELEPORT!]<br> Puruppipparurudaddaddaddira]<br><br>Hingga di angkasa sana<br>Di kejauhan<br>Pertemuan antara kita berdua<br>Tempat yang tak ada siapapun<br>HISSATSU TELEPORT<br>[[Tolonglah TELEPORT!]<br> Puruppipparurudaddaddaddira]<br>Lawanlah daya tarik dari cinta<br>Jump! Jump! Jump!<br>Hatiku sedikit saja Layangkanlah <br>Jump! Jump! Jump!<br>Terbangkanlah<br>Orang yang kusuka <br><br>Melanggar peraturan dari cinta<br>Jump! Jump! Jump!<br>Tak perlu pilih cara dapatkanlah! <br>Jump! Jump! Jump!<br>Kudapatkan!<br>Orang yang ku suka<br>';
        // Tambahkan kondisi lain untuk lagu lain jika diperlukan
        lirikButton.classList.add('active'); // Tandai tombol "Lirik" sebagai aktif
        }


else if (laguId === 'aitakatta') {
            document.getElementById('judulLagu').innerHTML = 'Aitakatta (Ingin Bertemu)';
            document.getElementById('typeMusic').textContent = 'PERKENALKAN NAMA KAMI, JKT48 '
            document.getElementById('iframeLagu').src = 'https://www.youtube.com/embed/lOi4qgF_4MM?si=GThQuUIhyZhKyl8x';
            document.getElementById('chantLagu').innerHTML = 'Chant lagu 5:<br>Chant 1<br>Chant 2<br>Chant 3';
            document.getElementById('lirikLagu').innerHTML = 'Lirik<br><br><br>[INTRO]<br>Aitakata! Aitakata! Aitakata! YA!<br>Aitakata! Aitakata! Aitakata! YA!<br>Denganmu...<br><br>[VERSE 1]<br>Bersepeda ku kumenanjaki bukit itu<br>Sekuat tenaga ku kayuh pedalnya<br>Angin pun mulai menghembus<br>kemejaku<br>Ku merasa masih kurang cepat<br><br>[Pre-Chorus]<br>Akhirnya kusadari<br>perasaan sebenarnya<br>Ingin jalani sejujurnya<br>Hanya di jalan ini ku akan terus berlari<br><br>[Chorus 1]<br>Jika kusuka, `kan kukatakan suka`<br>Tak kututupi, kukatakan sejujurnya<br>Jika kusuka, `kan kukatakan suka`<br>Dari hatiku, terbuka kukatakan<br><br>[Post-Chorus]<br>Aitakata! Aitakata! Aitakata! YA!<br>Aitakata! Aitakata! Aitakata! YA!<br>Denganmu...<br><br>[Verse 2]<br>Peluh mengalir di wajahku, tak kuseka<br>Saya ingin menampilkan apa adanya<br>Di bawah cahaya pohon-pohon<br>Jalan pintas menuju musim panas<br><br>[Pre-Chorus 2]<br>Tak pandai ungkapkan<br>Dalam kata-kata<br>Lurus kujalani hidupku<br>Dengan caraku ku akan terus berlari<br><br>[Chorus 2]<br>Kamu lebih berharga dari siapa pun<br>Walau kau tolak tak akan ku sesali<br>Kamu lebih berharga dari siapa pun<br>Tadinya kuingin mengungkapkan rasa ini<br><br>[Chorus 1]<br>Jika kusuka, `kan kukatakan suka`<br>Tak kututupi, kukatakan sejujurnya<br>Jika kusuka, `kan kukatakan suka`<br>Dari hatiku, terbuka kukatakan<br><br>[Outro]<br>Lalalalala lalalalalalala<br>Lalalalala lalalalalalala<br>Lalalalala lalalalalalala<br>Lalalalala lalalalalalala<br>Aitakata! Aitakata! Aitakata! YA!<br>Aitakata! Aitakata! Aitakata! YA!<br>Denganmu...<br><br>Aitakatta!!';
            lirikButton.classList.add('active'); // Tandai tombol "Lirik" sebagai aktif
            
}






// Fungsi untuk menampilkan konten Chant
        function tampilkanChant() {
            document.getElementById('lirikLagu').style.display = 'none';
            document.getElementById('chantLagu').style.display = 'block';
            chantButton.classList.add('active'); // Tandai tombol "Chant" sebagai aktif
lirikButton.classList.remove('active');
        }

        // Fungsi untuk menampilkan konten Lirik
        function tampilkanLirik() {
            document.getElementById('chantLagu').style.display = 'none';
            document.getElementById('lirikLagu').style.display = 'block';
            lirikButton.classList.add('active'); // Tandai tombol "Lirik" sebagai aktif
            chantButton.classList.remove('active');
        }