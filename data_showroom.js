        // Mengambil parameter "lagu" dari URL
        var urlParams = new URLSearchParams(window.location.search);
        var showroomId = urlParams.get('showroom');
        
        
        
        // Sesuaikan konten berdasarkan lagu yang dipilih
        if (showroomId === 'ashel') {
            document.getElementById('namaMember').innerHTML = 'Ashel JKT48';
            document.getElementById('iframeSr').src = 'https://www.youtube.com/embed/yjTZPycMoKk?si=EoyfWoTCbPfVAxQe';
            document.getElementById('detailSr').innerHTML = 'test';
            
            
        } 
      else if (showroomId === 'indira') {
            document.getElementById('namaMember').innerHTML = 'Indira JKT48';
            document.getElementById('iframeSr').src = 'https://www.youtube.com/embed/yjTZPycMoKk?si=EoyfWoTCbPfVAxQe';
            document.getElementById('detailSr').innerHTML = 'test';
            
            
        } 
        
        