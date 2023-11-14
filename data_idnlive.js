var urlParams = new URLSearchParams(window.location.search);
var idnliveId = urlParams.get('idnlive');




 if (idnliveId === 'idnapp') {
    document.getElementById('namaMember').innerHTML = 'Temen Main JKT48';document.getElementById('memberSt').innerHTML = 'IDN Live';
    document.getElementById('status').innerHTML = '• 15:32';
    document.getElementById('iframeSr').src = '';
    
    
}