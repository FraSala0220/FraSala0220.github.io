const portfolioData = window.PORTFOLIO_DATA;
const header = document.querySelector(".site-header");
const nav = document.querySelector("#site-nav");
const root = document.querySelector("#portfolio-root");
const footer = document.querySelector("#site-footer");

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const renderAttributes = (item) => {
  if (!item.external) {
    return "";
  }

  return ' target="_blank" rel="noreferrer"';
};

const renderActions = (actions, className) => `
  <div class="${className}">
    ${actions
      .map(
        (action) => `
          <a class="button ${escapeHtml(action.variant)}" href="${escapeHtml(action.href)}"${renderAttributes(action)}>
            ${escapeHtml(action.label)}
          </a>
        `,
      )
      .join("")}
  </div>
`;

const renderSectionHeading = (section) => `
  <div class="section-heading">
    <p class="eyebrow">${escapeHtml(section.eyebrow)}</p>
    <h2 id="${escapeHtml(section.id)}-title">${escapeHtml(section.title)}</h2>
  </div>
`;

const renderHero = (hero) => `
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-layout">
      <div class="hero-copy">
        <p class="eyebrow">${escapeHtml(hero.eyebrow)}</p>
        <h1 id="hero-title">${escapeHtml(hero.title)}</h1>
        <p class="hero-subtitle">${escapeHtml(hero.subtitle)}</p>
        <p class="hero-text">${escapeHtml(hero.text)}</p>
        ${renderActions(hero.actions, "hero-actions")}
      </div>
      <div class="profile-photo-wrap hero-photo-wrap" data-fallback="${escapeHtml(hero.image.fallback)}">
        <img class="profile-photo" src="${escapeHtml(hero.image.src)}" alt="${escapeHtml(hero.image.alt)}">
      </div>
    </div>
  </section>
`;

const renderProfileSection = (section) => `
  <section class="section-shell split-section" id="${escapeHtml(section.id)}" aria-labelledby="${escapeHtml(section.id)}-title">
    <div class="profile-copy">
      <div>
        <p class="eyebrow">${escapeHtml(section.eyebrow)}</p>
        <h2 id="${escapeHtml(section.id)}-title">${escapeHtml(section.title)}</h2>
      </div>
      <p>${escapeHtml(section.text)}</p>
    </div>
  </section>
`;

const renderTimelineSection = (section) => `
  <section class="section-shell" id="${escapeHtml(section.id)}" aria-labelledby="${escapeHtml(section.id)}-title">
    ${renderSectionHeading(section)}
    <div class="timeline">
      ${section.items
        .map(
          (item) => {
            const website = item.website ? escapeHtml(item.website) : "";
            const websiteLabel = escapeHtml(item.websiteLabel || `Visit the ${item.company} website`);
            const logo = item.logo
              ? item.website
                ? `
                <a
                  class="timeline-logo-frame timeline-logo-${escapeHtml(item.logo.variant || "default")}"
                  href="${website}"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="${websiteLabel}"
                >
                  <img
                    class="timeline-company-logo"
                    src="${escapeHtml(item.logo.src)}"
                    alt="${escapeHtml(item.logo.alt)}"
                    loading="lazy"
                  >
                </a>
              `
                : `
                <div class="timeline-logo-frame timeline-logo-${escapeHtml(item.logo.variant || "default")}">
                  <img
                    class="timeline-company-logo"
                    src="${escapeHtml(item.logo.src)}"
                    alt="${escapeHtml(item.logo.alt)}"
                    loading="lazy"
                  >
                </div>
              `
              : "";
            const company = item.website
              ? `<a class="company-link" href="${website}" target="_blank" rel="noreferrer">${escapeHtml(item.company)}</a>`
              : escapeHtml(item.company);

            return `
            <article class="timeline-item ${item.variant ? `timeline-item-${escapeHtml(item.variant)}` : ""}">
              <div class="timeline-meta">
                <span>${escapeHtml(item.period)}</span>
                <span>${escapeHtml(item.location)}</span>
              </div>
              <div class="timeline-content${item.logo ? " timeline-content-with-logo" : ""}">
                <div class="timeline-copy">
                  <h3>${escapeHtml(item.role)}</h3>
                  <p class="company">${company}</p>
                  <p>${escapeHtml(item.description)}</p>
                </div>
                ${logo}
              </div>
            </article>
          `;
          },
        )
        .join("")}
    </div>
  </section>
`;

const renderProjectCard = (item) => {
  const hasImage = Boolean(item.image);
  const hasPlaceholder = Boolean(item.placeholder);
  const hasMedia = hasImage || hasPlaceholder;
  const imageClass = `project-card-image${item.imageFit === "contain" ? " project-card-image-contain" : ""}`;
  const topic = item.topic || item.tag;
  const media = hasImage
    ? `<img class="${imageClass}" src="${escapeHtml(item.image)}" alt="${escapeHtml(item.imageAlt || "")}" loading="lazy" />`
    : hasPlaceholder
      ? `
        <div class="project-card-placeholder" role="img" aria-label="${escapeHtml(item.placeholderNote || item.placeholder)}">
          <span>${escapeHtml(item.placeholder)}</span>
          ${item.placeholderNote ? `<small>${escapeHtml(item.placeholderNote)}</small>` : ""}
        </div>
      `
      : "";
  const metadata = `
    <div class="project-card-meta">
      <span class="project-card-topic">${escapeHtml(topic)}</span>
      ${item.year ? `<span class="project-card-year">${escapeHtml(item.year)}</span>` : ""}
    </div>
  `;
  const footer = item.outcome || item.href
    ? `
      <div class="project-card-footer">
        ${item.outcome ? `<span class="project-card-outcome">${escapeHtml(item.outcome)}</span>` : ""}
        ${item.href ? `<span class="project-card-cta">View Case Study <span aria-hidden="true">&rarr;</span></span>` : ""}
      </div>
    `
    : "";
  const content = `
    ${media}
    <div class="project-card-content">
      ${metadata}
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.description)}</p>
      ${footer}
    </div>
  `;
  const cardClass = `project-card${hasMedia ? " project-card-with-image" : ""}`;

  if (item.href) {
    return `
      <a class="${cardClass} project-card-link" href="${escapeHtml(item.href)}">
        ${content}
      </a>
    `;
  }

  return `
    <article class="${cardClass}">
      ${content}
    </article>
  `;
};

const renderCardsSection = (section) => `
  <section class="section-shell" id="${escapeHtml(section.id)}" aria-labelledby="${escapeHtml(section.id)}-title">
    ${renderSectionHeading(section)}
    <div class="project-grid">
      ${section.items.map(renderProjectCard).join("")}
    </div>
  </section>
`;

const renderSkillsSection = (section) => `
  <section class="section-shell skills-section" id="${escapeHtml(section.id)}" aria-labelledby="${escapeHtml(section.id)}-title">
    ${renderSectionHeading(section)}
    <div class="skills-grid">
      ${section.items
        .map(
          (item) => `
            <div>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.description)}</p>
            </div>
          `,
        )
        .join("")}
    </div>
  </section>
`;

const renderContactSection = (section) => `
  <section class="section-shell contact-section" id="${escapeHtml(section.id)}" aria-labelledby="${escapeHtml(section.id)}-title">
    <div>
      <p class="eyebrow">${escapeHtml(section.eyebrow)}</p>
      <h2 id="${escapeHtml(section.id)}-title">${escapeHtml(section.title)}</h2>
    </div>
    ${renderActions(section.actions, "contact-actions")}
  </section>
`;

const sectionRenderers = {
  profile: renderProfileSection,
  timeline: renderTimelineSection,
  cards: renderCardsSection,
  skills: renderSkillsSection,
  contact: renderContactSection,
};

const renderSection = (section) => {
  const renderer = sectionRenderers[section.type];

  if (!renderer) {
    return "";
  }

  return renderer(section);
};

const renderSite = () => {
  nav.innerHTML = portfolioData.site.nav
    .map((item) => `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`)
    .join("");

  root.innerHTML = [renderHero(portfolioData.hero), ...portfolioData.sections.map(renderSection)].join("");

  footer.innerHTML = `
    <span>${escapeHtml(portfolioData.site.name)}</span>
    <span>${escapeHtml(portfolioData.site.location)}</span>
  `;
};

const initializeImages = () => {
  document.querySelectorAll(".profile-photo").forEach((image) => {
    image.addEventListener("error", () => {
      image.closest(".profile-photo-wrap").classList.add("is-missing");
      image.remove();
    });
  });
};

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

const scrollToInitialHash = () => {
  const targetId = decodeURIComponent(window.location.hash.slice(1));

  if (!targetId) {
    return;
  }

  requestAnimationFrame(() => {
    document.getElementById(targetId)?.scrollIntoView();
  });
};

renderSite();
initializeImages();
scrollToInitialHash();
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
