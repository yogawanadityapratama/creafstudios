var scrollContent = document.getElementById('scrollContent');

scrollContent.addEventListener('mouseover', function() {
  scrollContent.style.animationPlayState = 'paused';
});

scrollContent.addEventListener('mouseout', function() {
  scrollContent.style.animationPlayState = 'running';
});