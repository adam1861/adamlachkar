# Adam Lachkar Portfolio

Static portfolio site for `adamlachkar.com`.

## Structure

- `index.html` - main page markup.
- `styles.css` - main site styling.
- `script.js` - portfolio content arrays and rendering logic.
- `assets/docs/` - resumes, receipts, certificates, and generated CV PDFs.
- `assets/icons/` - favicon and stack/tool icons.
- `assets/images/` - profile, project, site, UI, and CV images.
- `cv/` - editable source files for the generated CV PDF.
- `notes/` - project notes and planning files.

## Adding Content

- Add certificates to `assets/docs/certificates/`, then update the `certificates` array in `script.js`.
- Add stack/tool icons to `assets/icons/stack/`, then update the `stack` array in `script.js`.
- Add project images to `assets/images/projects/` and site images to `assets/images/sites/`.
- Keep root clean: only entry files and project-level docs should live there.
