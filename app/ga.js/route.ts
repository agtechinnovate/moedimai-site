export const dynamic = "force-dynamic";

function gaScript(measurementId: string) {
  const safeId = JSON.stringify(measurementId);

  return `
(function () {
  var measurementId = ${safeId};
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };

  if (measurementId) {
    var ga = document.createElement("script");
    ga.async = true;
    ga.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
    document.head.appendChild(ga);
    window.gtag("js", new Date());
    window.gtag("config", measurementId, { send_page_view: true });
  }

  window.moedimTrack = function(eventName, params) {
    if (!eventName || typeof window.gtag !== "function") return;
    window.gtag("event", eventName, params || {});
  };

  function cleanLinkUrl(href) {
    if (!href) return "";
    if (href.indexOf("mailto:") === 0 || href.indexOf("mail.google.com/mail") !== -1) {
      return "email_link";
    }

    try {
      var url = new URL(href, window.location.href);
      return url.origin + url.pathname;
    } catch (error) {
      return href.split("?")[0].split("#")[0].slice(0, 160);
    }
  }

  document.addEventListener("click", function(event) {
    var target = event.target && event.target.closest ? event.target.closest("a,button") : null;
    if (!target) return;

    var href = target.getAttribute("href") || "";
    var eventName = target.getAttribute("data-analytics-event");
    var label = target.getAttribute("data-analytics-label") || target.textContent || href;

    if (!eventName && href.indexOf("intake.moedim.ai") !== -1) eventName = "farmer_intake_click";
    if (!eventName && (href.indexOf("mailto:") === 0 || href.indexOf("mail.google.com/mail") !== -1)) eventName = "email_click";
    if (!eventName) return;

    window.moedimTrack(eventName, {
      event_category: "website_cta",
      event_label: label.trim().slice(0, 120),
      link_url: cleanLinkUrl(href),
      page_path: window.location.pathname
    });
  }, { passive: true });
})();`;
}

export function GET() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

  return new Response(gaScript(measurementId), {
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "public, max-age=300, stale-while-revalidate=3600",
    },
  });
}
