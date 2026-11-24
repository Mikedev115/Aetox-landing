<script lang="ts">
  const KEY = "aetox-theme";

  let { label }: { label: string } = $props();

  function apply(t: "light" | "dark") {
    document.documentElement.dataset.theme = t;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", t === "light" ? "#ffffff" : "#000000");
  }

  // The pre-paint script in app.html has already set data-theme by the time
  // this mounts; this only flips it and follows the OS while the visitor has
  // not chosen for themselves. Which icon shows is decided in CSS from the
  // data-theme attribute, so there is no theme state to hydrate here.
  $effect(() => {
    try {
      if (localStorage.getItem(KEY)) return;
      const mq = matchMedia("(prefers-color-scheme: light)");
      const on = (e: MediaQueryListEvent) => apply(e.matches ? "light" : "dark");
      mq.addEventListener("change", on);
      return () => mq.removeEventListener("change", on);
    } catch {
      /* storage blocked: follow nothing, keep what the pre-paint script chose */
    }
  });

  function toggle() {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    apply(next);
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* fine */
    }
  }
</script>

<button class="icon-btn" type="button" aria-label={label} title={label} onclick={toggle}>
  <svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
  <svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
</button>
