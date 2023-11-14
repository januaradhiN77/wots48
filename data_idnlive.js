var urlParams = new URLSearchParams(window.location.search);
var idnliveId = urlParams.get('idnlive');




 if (idnliveId === 'idnapp') {
    document.getElementById('namaMember').innerHTML = 'Temen Main JKT48';document.getElementById('memberSt').innerHTML = 'IDN Live';
    document.getElementById('status').innerHTML = '• 15:32';
    document.getElementById('iframeLive').src = 'https://4b964ca68cf1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.050891932989.channel.4idUspKIZskG.m3u8';
    
    
}