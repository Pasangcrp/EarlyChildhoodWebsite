<script>
  document.querySelectorAll('.feature').forEach(function(item) {
    item.addEventListener('click', function() {
      window.location.href = item.getAttribute('data-url');
    })
  });
</script>
