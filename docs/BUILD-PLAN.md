Here's a plan broken into 5 small, independently testable steps:

---

**Step 1 — Add CSS variables for light and dark themes** (~5 min)

Define color tokens as CSS custom properties on `:root` and `[data-theme="dark"]` in `index.css`. No behavior yet — just colors. You can verify by manually toggling the attribute in DevTools.

---

**Step 2 — Apply theme variables to existing components** (~10 min)

Replace the hardcoded colors in `App.css` and inline styles with the CSS variables from Step 1. Verify the app still looks the same in light mode (the default), with no visual regressions.

---

**Step 3 — Create a `ThemeContext`** (~5 min)

Add a `ThemeContext` with a `useTheme` hook that holds the current theme and a toggle function. Wrap the app in the provider. No UI yet — verify via React DevTools that the context is present.

---

**Step 4 — Wire the context to the DOM** (~5 min)

In the provider, use a `useEffect` to set `data-theme` on `document.documentElement` whenever the theme changes. Verify by calling `toggleTheme` from the console and watching the DOM attribute change and colors switch.

---

**Step 5 — Add the toggle button** (~5 min)

Add a small toggle button (e.g. in `App.js`) that calls `toggleTheme` from the context. Optionally persist the user's preference to `localStorage` so it survives a refresh. Click-test it manually.

---

Each step builds on the last, and none require more than a handful of files to change. Want me to start on Step 1?
