# Ghaida Yahya Alhadi — CPIT405 Portfolio (Phase 1)

A multi-page personal portfolio built using **HTML and CSS**. The color palette is Graphite Rosé (#0C1023, #24254E, #505BD8, #A2AAFF, #F2F0FF).

## Website pages
- `index.html` — Home; intro, featured projects, experience and skills
- `cv.html` — Redesigned elegant two-column CV, focused internship experience, KAU education, skills, achievements, and updated phone-free downloadable PDF
- `projects.html` — Six projects with descriptions and working destination links
- `labs.html` — Completed CPIT405 Labs 1, 2, 3, 5 and 6 (full original exercise files preserved in `/labs/`)
- `contact.html` — Contact information and an HTML form using FormSubmit
- `style.css` — Shared external CSS stylesheet

## Local preview
Open `index.html` with a browser or VS Code Live Server. No build tools are needed.

## GitHub Pages publishing (required for CPIT405)
1. Create a GitHub repository for this portfolio, or copy these files into your portfolio repository root.
2. Upload the contents of this folder (not just the ZIP) to the `main` branch, with `index.html` at the repository root.
3. Under Repository Settings > Pages, choose **Deploy from a branch**, `main`, `/ (root)`, then Save.
4. After GitHub Pages publishes your site, open each menu item, project link, lab, CV download and contact form.
5. Submit the **GitHub Pages link** plus the final ZIP named `2306299.zip` to Blackboard.

## IMPORTANT: activate the contact form before submitting
The form posts to `https://formsubmit.co/Ghadi@stu.kau.edu.sa` (an external free service, no JavaScript required). **The first form submission sends a verification/activation email to your university inbox.** Open that email and confirm FormSubmit activation. Then send another test message and confirm its delivery. The form cannot be considered fully tested until this is done. You may need to check spam/junk and university-email filtering policies. If university email blocks the service, replace the destination with a supported email address and activate that address before submitting.

## Adding Lab 4 later
When a lab is genuinely complete, place the Lab 4 HTML and dependent files under `/labs/lab4/`, then link its entry page in `labs.html` with a relative link such as `href="labs/lab4/index.html"`. Keep an external CSS file beside a lab HTML if it depends on one. Only label completed labs `COMPLETED`.

## Project imagery
- Actual user-provided images: Smart Guide landing page, Flying House render, and the Weam logo.
- StyleSculpt / HR / AES card art: original **conceptual illustrations**, clearly marked on the site, rather than claims of genuine product screenshots. Follow the buttons for the original prototype / repository.
- Certificate previews come from supplied attendance and recognition documents.

## Privacy
The site **does not display a phone number**, and the downloadable PDF CV has been newly created without one. The student ID is shown on the CV page as required by the assignment.

## Not yet performed
GitHub Pages publication and live contact form activation require your GitHub and university inbox. No live URL has been created and the form is not yet verified.

## CV revision (November 2026)
The CV page was redesigned in Graphite Rosé using semantic HTML and responsive CSS. The Arab University of Science and Technology degree was removed from the website and downloadable PDF. The internship was rewritten based on the student training final report. No phone number is displayed.

## Graphite Rosé redesign (November 2026)
- Palette: `#141318` background, `#302933` panels, `#E3A7BD` accent, `#D3BAC8` secondary text, `#FAF5F7` foreground.
- Fonts: Sora (headings), Inter (body), with local system-font fallbacks when Google Fonts cannot be reached.
- Balanced type: 68px hero on desktop, 40px section titles, ~24px project titles, 16px body and 15px navigation, responsive for mobile.
- Labs 5 and 6 are included with original HTML/CSS/JS and linked on Labs page. Lab 4 is not included because no completed files were provided.
- The original content, projects, certificates, PDF CV, student ID and phone-free public contact were preserved. The PDF uses its existing standalone print layout.

## Dark / Light Mode

Use the **Light mode / Dark mode** button in the header on any portfolio page. The choice is kept in your browser and reused when you navigate to other portfolio pages. The original Graphite Rosé theme is the default dark mode. This feature uses `theme.js` (plain JavaScript) and the theme rules at the end of `style.css`. The course lab pages keep their own styling and behavior.


## Understanding the portfolio code

- `index.html`, `cv.html`, `projects.html`, `labs.html` and `contact.html` are separate HTML pages. Each uses the same navigation and footer.
- `style.css` is the shared external stylesheet. It contains the layout, font styles, colors, and responsive rules. Edit colors in `:root` and under `html[data-theme="light"]`.
- `theme.js` handles the theme button using `querySelector`, `addEventListener`, and `localStorage`.
- Individual lab files are kept in `labs/` so their JavaScript exercises are independent of the main portfolio.

Open `index.html` with Live Server in VS Code. You can practice changing one CSS property at a time and refreshing the page.
