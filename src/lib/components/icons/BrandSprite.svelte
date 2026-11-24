<script lang="ts">
  import { SPRITE } from "./sprite.ts";

  // Renders the symbol sprite once, hidden; every <use href="#…"> on the page
  // points here. The markup is the project's own constant, not outside input.
</script>

<svg style="display: none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">{@html SPRITE}</svg>
