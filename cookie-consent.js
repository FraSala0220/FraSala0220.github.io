(() => {
  "use strict";

  const privacy = window.GooglePrivacy;
  if (!privacy) {
    return;
  }

  const storeConsent = (analytics) => {
    const consent = {
      analytics,
      timestamp: new Date().toISOString(),
      version: privacy.config.consentVersion,
    };

    try {
      localStorage.setItem(privacy.config.consentStorageKey, JSON.stringify(consent));
    } catch {
      // Consent still applies to the current page if storage is unavailable.
    }

    privacy.updateConsent(analytics);
  };

  const createInterface = () => {
    const banner = document.createElement("section");
    banner.className = "cookie-banner";
    banner.hidden = true;
    banner.setAttribute("aria-labelledby", "cookie-banner-title");
    banner.setAttribute("aria-describedby", "cookie-banner-description");
    banner.innerHTML = `
      <div class="cookie-banner-copy">
        <p class="cookie-banner-label">Privacy choices</p>
        <h2 id="cookie-banner-title">Your privacy, your choice.</h2>
        <p id="cookie-banner-description">
          This site uses necessary local storage for your preference. Optional Google Analytics cookies are activated
          only if you allow them. <a href="/privacy-cookies.html">Read the privacy and cookie policy</a>.
        </p>
      </div>
      <div class="cookie-banner-actions">
        <button class="cookie-button cookie-button-secondary" type="button" data-cookie-choice="necessary">
          Necessary only
        </button>
        <button class="cookie-button cookie-button-primary" type="button" data-cookie-choice="analytics">
          Allow analytics
        </button>
      </div>
    `;

    const settingsButton = document.createElement("button");
    settingsButton.className = "cookie-settings-button";
    settingsButton.type = "button";
    settingsButton.textContent = "Cookie settings";
    settingsButton.setAttribute("aria-controls", "cookie-consent-banner");

    banner.id = "cookie-consent-banner";
    document.body.append(banner, settingsButton);

    const openBanner = () => {
      banner.hidden = false;
      settingsButton.hidden = true;
      banner.querySelector("button")?.focus({ preventScroll: true });
    };

    const closeBanner = () => {
      banner.hidden = true;
      settingsButton.hidden = false;
    };

    banner.addEventListener("click", (event) => {
      const choice = event.target.closest("[data-cookie-choice]")?.dataset.cookieChoice;
      if (!choice) {
        return;
      }

      storeConsent(choice === "analytics");
      closeBanner();
    });

    settingsButton.addEventListener("click", openBanner);
    document.querySelectorAll("[data-cookie-settings]").forEach((button) => {
      button.addEventListener("click", openBanner);
    });

    if (!privacy.readStoredConsent()) {
      openBanner();
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createInterface, { once: true });
  } else {
    createInterface();
  }
})();
