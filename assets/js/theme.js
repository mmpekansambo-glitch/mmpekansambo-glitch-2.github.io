(() => {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");

  if (!toggle) return;

  const updateToggle = () => {
    const isDark = root.dataset.theme === "dark";
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    const label = toggle.querySelector(".theme-label");
    if (label) label.textContent = isDark ? "Light" : "Dark";
  };

  updateToggle();

  toggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    try {
      localStorage.setItem("mwen-theme", nextTheme);
    } catch (_) {
      // Theme switching remains available for the current page if storage is disabled.
    }
    updateToggle();
  });
})();
