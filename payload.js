(() => {
  document.documentElement.dataset.ownedExternalScript = "benign";
  const marker = document.createElement("p");
  marker.id = "owned-external-script-marker";
  marker.textContent = "OWNED_EXTERNAL_SCRIPT_BENIGN";
  document.body.append(marker);
})();
