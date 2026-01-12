function toggleCategory(element) {
  document.querySelectorAll('.category.expanded').forEach(cat => {
    if (cat !== element) {
      cat.classList.remove('expanded');
    }
  });

  element.classList.toggle('expanded');

  const content = element.querySelector('.category-content');

  // Load content only once
  if (content && content.dataset.src && !content.dataset.loaded) {
    fetch(content.dataset.src)
      .then(response => response.text())
      .then(html => {
        content.innerHTML = html;
        content.dataset.loaded = "true";
      })
      .catch(err => {
        content.innerHTML = "<p>Failed to load content.</p>";
        console.error(err);
      });
  }
}
