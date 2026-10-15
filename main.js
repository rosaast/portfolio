(function () {
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  var preview = document.querySelector('.preview img');
  if (preview) {
    document.querySelectorAll('.ixlist a[data-preview]').forEach(function (a) {
      var src = a.getAttribute('data-preview');
      var pre = new Image(); pre.src = src;
      a.addEventListener('mouseenter', function () {
        if (preview.getAttribute('src') === src) return;
        preview.style.opacity = 0;
        setTimeout(function () { preview.src = src; preview.style.objectFit = a.getAttribute('data-fit') || 'cover'; preview.style.opacity = 1; }, 150);
      });
    });
  }

  var current = document.querySelector('.barlist a[aria-current]');
  if (current && current.scrollIntoView) {
    current.parentNode.scrollLeft = current.offsetLeft - 16;
  }
})();
