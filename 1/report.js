// Load every comparison before printing so lazy images appear in the PDF.
const printButton = document.getElementById('print-report');
const printStatus = document.getElementById('print-status');
const images = Array.from(document.querySelectorAll('img'));
window.addEventListener('beforeprint', () => {
  images.forEach(image => { image.loading = 'eager'; });
});
printButton.addEventListener('click', async () => {
  printButton.disabled = true;
  printStatus.textContent = 'Loading all 105 comparisons for printing…';
  try {
    const results = await Promise.allSettled(images.map(image => {
      image.loading = 'eager';
      return image.decode();
    }));
    const failures = results.filter(result => result.status === 'rejected').length;
    if (failures) {
      printStatus.textContent = `${failures} images could not load. Reload the page and try again before saving the PDF.`;
      return;
    }
    printStatus.textContent = 'All images are ready. Enable “Headers and footers” in the print dialog to include the webpage URL.';
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    window.print();
  } finally {
    printButton.disabled = false;
  }
});
