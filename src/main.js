document.addEventListener('DOMContentLoaded', async () => {
    const loads = document.querySelectorAll('load[src]');
    for (const loadEl of loads) {
      const src = loadEl.getAttribute('src');
      try {
        const res = await fetch(src);
        if (res.ok) {
          const html = await res.text();
          loadEl.outerHTML = html; // замінюємо тег <load> на HTML з файлу
        } else {
          loadEl.outerHTML = `<p>Не вдалося завантажити ${src}</p>`;
        }
      } catch {
        loadEl.outerHTML = `<p>Помилка завантаження ${src}</p>`;
      }
    }
  });