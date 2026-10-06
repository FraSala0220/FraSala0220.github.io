# Francesco Sala Portfolio

Personal portfolio for Francesco Sala, deployed as a static site on Cloudflare Workers.

## Stack

- HTML5 for the page structure
- CSS3 for layout, responsive design, and visual style
- Small vanilla JavaScript for lightweight interactions
- `data.js` for editable portfolio content
- Cloudflare Workers Static Assets for deployment on `salafrancesco.com`

The site does not need compilation. The deployment script stages only the public files in `dist/`, then Cloudflare serves them as static assets from the custom domain.

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

## Cloudflare Deployment

Install the deployment dependency once:

```powershell
npm install
```

Authenticate and deploy:

```powershell
npx wrangler login
npm run deploy
```

The Wrangler configuration publishes the portfolio to both:

- `https://salafrancesco.com`
- `https://www.salafrancesco.com`

## Google Search and Analytics

The production build generates canonical links, robots directives, Open Graph and Twitter metadata, JSON-LD,
`robots.txt`, and `sitemap.xml` for every page.

Google identifiers are configured in `site-config.json`:

- `googleAnalyticsId`: the GA4 web-stream Measurement ID in the `G-...` format
- `googleSiteVerification`: the `content` value from the Search Console HTML meta-tag verification method

Analytics uses basic Consent Mode v2. Google Analytics is not requested and cannot set analytics cookies before the
visitor selects **Allow analytics**. Advertising storage, advertising user data, ad personalization, and Google signals
remain disabled.

## Next Content To Add

- A professional photo or workshop/motorsport image for the hero area
- 3 to 4 detailed case studies with images, CAD screenshots, and results
- GitHub, LinkedIn, and email links checked before publishing
- Optional Italian version if the portfolio should target Italian companies too
