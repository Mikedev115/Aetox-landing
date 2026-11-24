<script lang="ts">
  /**
   * Where a capture goes before it exists. The id is the slot's name in the
   * README's "ภาพและวิดีโอ" section, so an empty frame on the page says which
   * take fills it. `ratio` keeps the frame the height the capture will be.
   */
  let { id, ratio = "16/10" }: { id: string; ratio?: string } = $props();
</script>

<div class="slot" style="aspect-ratio: {ratio}"><span>{id}</span></div>
