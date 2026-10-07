import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";

const outputDirectory = new URL("../dist/", import.meta.url);
const siteConfig = JSON.parse(await readFile(new URL("../site-config.json", import.meta.url), "utf8"));
const sourceFiles = [
  "index.html",
  "privacy-cookies.html",
  "styles.css",
  "data.js",
  "script.js",
  "google-tag.js",
  "cookie-consent.js",
  "_redirects",
];
const sourceDirectories = ["assets", "projects"];

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

for (const file of sourceFiles) {
  await cp(new URL(`../${file}`, import.meta.url), new URL(file, outputDirectory));
}

for (const directory of sourceDirectories) {
  await cp(
    new URL(`../${directory}/`, import.meta.url),
    new URL(`${directory}/`, outputDirectory),
    { recursive: true }
  );
}

const googleTagUrl = new URL("google-tag.js", outputDirectory);
const googleTagSource = await readFile(googleTagUrl, "utf8");
await writeFile(
  googleTagUrl,
  googleTagSource.replace(
    'analyticsId: "",',
    `analyticsId: ${JSON.stringify(siteConfig.googleAnalyticsId)},`
  )
);

const projectPages = (await readdir(new URL("projects/", outputDirectory)))
  .filter((file) => file.endsWith(".html"))
  .sort()
  .map((file) => `projects/${file}`);
const htmlPages = ["index.html", ...projectPages, "privacy-cookies.html"];

const extract = (html, expression, fallback = "") => html.match(expression)?.[1]?.trim() || fallback;
const normalizeText = (value) => value.replace(/\s+/g, " ").trim();

for (const relativePath of htmlPages) {
  const pageUrl = new URL(relativePath === "index.html" ? "/" : `/${relativePath}`, siteConfig.origin).href;
  const pageFile = new URL(relativePath, outputDirectory);
  let html = await readFile(pageFile, "utf8");
  const title = normalizeText(extract(html, /<title>([\s\S]*?)<\/title>/i, "Francesco Sala"));
  const description = normalizeText(
    extract(html, /<meta\s+name="description"\s+content="([^"]+)"/i, "Francesco Sala engineering portfolio.")
  );
  const rawImage = extract(html, /<img[^>]+src="([^"]+)"/i, "/assets/francesco-sala-profile.jpg").split("?")[0];
  const imageUrl = new URL(rawImage, pageUrl).href;
  const isHome = relativePath === "index.html";
  const isLegal = relativePath === "privacy-cookies.html";
  const openGraphType = isHome ? "profile" : isLegal ? "website" : "article";
  const structuredData = isHome
    ? {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        url: pageUrl,
        name: title,
        description,
        mainEntity: {
          "@type": "Person",
          name: "Francesco Sala",
          url: `${siteConfig.origin}/`,
          image: `${siteConfig.origin}/assets/francesco-sala-profile.jpg`,
          jobTitle: "Mechanical Engineering M.Sc. Student",
          homeLocation: { "@type": "Place", name: "Milan, Italy" },
          sameAs: ["https://linkedin.com/in/francescosala2002"],
        },
      }
    : isLegal
      ? {
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: pageUrl,
          name: title,
          description,
          isPartOf: { "@type": "WebSite", url: `${siteConfig.origin}/`, name: "Francesco Sala Portfolio" },
        }
      : {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          url: pageUrl,
          name: title.replace(/\s*\|\s*Francesco Sala$/, ""),
          description,
          image: imageUrl,
          author: { "@type": "Person", name: "Francesco Sala", url: `${siteConfig.origin}/` },
          isPartOf: { "@type": "WebSite", url: `${siteConfig.origin}/`, name: "Francesco Sala Portfolio" },
        };
  const verificationTag = siteConfig.googleSiteVerification
    ? `\n    <meta name="google-site-verification" content="${siteConfig.googleSiteVerification}">`
    : "";
  const metadata = `
    <!-- Generated SEO metadata -->
    <meta name="author" content="Francesco Sala">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">${verificationTag}
    <link rel="canonical" href="${pageUrl}">
    <meta property="og:type" content="${openGraphType}">
    <meta property="og:site_name" content="Francesco Sala Portfolio">
    <meta property="og:locale" content="en_US">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:image" content="${imageUrl}">
    <meta property="og:image:alt" content="${title}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${imageUrl}">
    <script type="application/ld+json">${JSON.stringify(structuredData).replaceAll("<", "\\u003c")}</script>
    <script src="/google-tag.js"></script>
    <script src="/cookie-consent.js" defer></script>
  `;

  html = html.replace(/\s*<link rel="canonical"[^>]*>/i, "");
  html = html.replace(/\s*<\/head>/i, `${metadata}</head>`);
  await writeFile(pageFile, html);
}

const sitemapUrls = htmlPages.map((relativePath) => {
  const url = new URL(relativePath === "index.html" ? "/" : `/${relativePath}`, siteConfig.origin).href;
  return `  <url><loc>${url}</loc></url>`;
});
await writeFile(
  new URL("sitemap.xml", outputDirectory),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.join("\n")}\n</urlset>\n`
);
await writeFile(
  new URL("robots.txt", outputDirectory),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteConfig.origin}/sitemap.xml\n`
);

console.log("Static portfolio prepared in dist/.");
