(() => {
  "use strict";

  const config = Object.freeze({
    analyticsId: "",
    consentStorageKey: "francesco-sala-cookie-consent",
    consentVersion: 1,
  });

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    wait_for_update: 500,
  });
  window.gtag("set", "ads_data_redaction", true);

  let tagLoaded = false;

  const hasValidAnalyticsId = () => /^G-[A-Z0-9]+$/i.test(config.analyticsId);

  const loadAnalytics = () => {
    if (tagLoaded || !hasValidAnalyticsId()) {
      return;
    }

    tagLoaded = true;
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(config.analyticsId)}`;
    document.head.append(script);

    window.gtag("js", new Date());
    window.gtag("config", config.analyticsId, {
      allow_ad_personalization_signals: false,
      allow_google_signals: false,
    });
  };

  const deleteAnalyticsCookies = () => {
    const hostParts = window.location.hostname.split(".");
    const domains = [window.location.hostname];

    if (hostParts.length > 2) {
      domains.push(`.${hostParts.slice(-2).join(".")}`);
    } else if (hostParts.length === 2) {
      domains.push(`.${window.location.hostname}`);
    }

    document.cookie.split(";").forEach((cookie) => {
      const name = cookie.split("=")[0].trim();

      if (!/^(_ga|_gid|_gat)/.test(name)) {
        return;
      }

      document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
      domains.forEach((domain) => {
        document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}; SameSite=Lax`;
      });
    });
  };

  const updateConsent = (analyticsGranted) => {
    window.gtag("consent", "update", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: analyticsGranted ? "granted" : "denied",
    });

    if (analyticsGranted) {
      loadAnalytics();
    } else {
      deleteAnalyticsCookies();
    }
  };

  const readStoredConsent = () => {
    try {
      const stored = JSON.parse(localStorage.getItem(config.consentStorageKey));
      return stored?.version === config.consentVersion ? stored : null;
    } catch {
      return null;
    }
  };

  const storedConsent = readStoredConsent();
  if (storedConsent) {
    updateConsent(storedConsent.analytics === true);
  }

  window.GooglePrivacy = Object.freeze({
    config,
    hasValidAnalyticsId,
    loadAnalytics,
    readStoredConsent,
    updateConsent,
  });
})();
