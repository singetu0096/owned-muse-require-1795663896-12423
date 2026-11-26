(() => {
  const script = document.createElement("script");
  script.src = new URL(
    `payload.js?owned_cache_bust=${Date.now()}`,
    document.currentScript.src
  ).href;
  script.referrerPolicy = "no-referrer";
  document.head.append(script);
})();
