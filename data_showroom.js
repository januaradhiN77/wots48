var urlParams = new URLSearchParams(window.location.search);
var showroomId = urlParams.get('showroom');

if (showroomId === 'ashel') {
    document.getElementById('namaMember').innerHTML = 'Ashel /アシェル（JKT48）';
    document.getElementById('status').innerHTML = '• TBD';
    document.getElementById('iframeSr').src = 'https://static.showroom-live.com/image/room/cover/1f4eca57063fe3f6be0bf5a66adefd5e3afa7395324c0a95e572a533c8c1f89a_s.jpeg?v=1675092239';
    document.getElementById('detailSr').innerHTML = 'Name: Adzana Shaliha アザナ・サリハ<br>Birthday: 8-January-2005<br>Birthplace: Jakarta<br>Blood type: B<br>Zodiac signs: Capricorn<br>Hobby: Dance, Gymnastic, Gaming';

    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_Ashel';
} else if (showroomId === 'christy') {
    document.getElementById('namaMember').innerHTML = '';
    document.getElementById('iframeSr').src = '';
    document.getElementById('detailSr').innerHTML = 'Name: <br>Birthday: <br>Birthplace: <br>Blood type: <br>Zodiac signs: <br>Hobby: ';
    // Menyesuaikan href tombol
    document.getElementById('showroomLink').href = 'https://www.showroom-live.com/JKT48_';
}
