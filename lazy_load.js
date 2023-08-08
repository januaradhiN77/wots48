const allSkeleton = document.querySelectorAll('.skeleton')

window.addEventListener('load', function() {
  allSkeleton.forEach(item=> {
    item.classList.remove('skeleton')
  })
})
function openEventDetailPage(eventId) {
      window.location.href = `event_detail.html?id=${eventId}`;
    }