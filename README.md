# Francesco Sala Portfolio

Personal portfolio for Francesco Sala, built as a static GitHub Pages site.

## Stack

- HTML5 for the page structure
- CSS3 for layout, responsive design, and visual style
- Small vanilla JavaScript for lightweight interactions
- `data.js` for editable portfolio content
- GitHub Pages for free deployment from this repository

This is the right starting point because the repository is named `FraSala0220.github.io`, so GitHub can publish the site directly without a build step.

## How The Site Is Organized

- `index.html`: minimal page shell, header, root container, and script loading
- `data.js`: all editable content, including hero, experience, projects, skills, and contact links
- `script.js`: section renderers that convert `data.js` content into HTML
- `styles.css`: visual system, responsive layout, and section styling
- `assets/`: static files such as the downloadable CV

Profile photo path:

```text
assets/francesco-sala-profile.jpg
```

To change content, start from `data.js`.

To change the look, work in `styles.css`.

To add a new section type, add the data object in `data.js` and a renderer in `script.js`.

## Local Preview

Open `index.html` in a browser.

For a local server:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Next Content To Add

- A professional photo or workshop/motorsport image for the hero area
- 3 to 4 detailed case studies with images, CAD screenshots, and results
- GitHub, LinkedIn, and email links checked before publishing
- Optional Italian version if the portfolio should target Italian companies too
