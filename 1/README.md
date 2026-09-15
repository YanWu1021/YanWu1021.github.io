# Project 1 webpage

Open `index.html` in a browser. This is a self-contained static report with relative image, stylesheet, and script paths. No build step or external JavaScript/font service is required.

## Files

- `index.html`: English project report, seven experiment sections, all 105 comparison figures, saved-result tables, discussion, and sources.
- `style.css`: responsive layout and A4 print styles.
- `report.js`: loads every comparison before opening the print dialog.
- `media/01_single_scale/` through `media/07_color_mapping/`: exact JPG copies from the corresponding `Outputs/` directories (about 201 MB total).

The report is intentionally comprehensive. Images load as the reader scrolls; each comparison opens its original exported JPG when clicked. Main content, figures, and tables work without JavaScript. The print button uses JavaScript to wait for lazy images.

## Editing and GitHub Pages

Edit the report text in `index.html` and layout in `style.css`. When regenerating output images, replace the corresponding copies in `media/`; do not rename the section directories without updating the HTML paths. Update the saved-result tables if experiments are rerun.

Publish this directory's website files in the chosen GitHub Pages project folder. If they are placed in `1/`, the project URL is `https://<username>.github.io/1/`. Keep the project's Python source, notebooks, and raw scans out of the public website repository. Do not upload this README if it is not needed there.

## PDF submission

1. Open the published page so the browser can print its actual URL.
2. Click **Print / Save PDF** and wait for all 105 images to load.
3. Choose **Save as PDF** and enable **Headers and footers**; enable background graphics for the report's shaded panels.
4. Check every page for complete figures and readable tables before submitting `web/page.pdf`.
5. Submit the PDF with code through the required Gradescope ZIP; do not include `media/` image files in that ZIP.

The actual webpage URL and author name are not invented in this report. Add any author/course identification required by the course before publishing. Qualitative observations follow the notebooks; Part 3 runtime prose uses the latest saved output (1.60 s pixel median, 2.00 s gradient median, 2.10 s gradient maximum) instead of older Discussion numbers.
