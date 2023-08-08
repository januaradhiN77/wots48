const allSkeleton = document.querySelectorAll('')

window.addEventListener('load', function() {
  allSkeleton.forEach(item=> {
    item.classList.remove('skeleton')
  })
})
function openEventDetailPage(eventId) {
      window.location.href = `event_(d)etail.html?id=${eventId}`;
    }