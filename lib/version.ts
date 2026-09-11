// The badge in the header says which release is current. This site has no
// copy of that number: it asks GitHub Releases at build time, so shipping a
// release updates the page on the next deploy with nothing to bump here.
//
// AETOX_VERSION overrides the lookup — for offline builds, or to preview the
// page against a release that is still a draft.

const RELEASES_API = "https://api.github.com/repos/Mikedev115/Aetox/releases/latest";

export async function currentVersion(): Promise<string> {
  const pinned = process.env.AETOX_VERSION?.trim();
  if (pinned) return pinned.replace(/^v/, "");

  const headers: Record<string, string> = { Accept: "application/vnd.github+json", "User-Agent": "aetox-landing-build" };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  const res = await fetch(RELEASES_API, { headers, cache: "force-cache" });
  if (!res.ok) throw new Error(`GitHub releases API: ${res.status} ${res.statusText} — set AETOX_VERSION to build without it`);
  const data = (await res.json()) as { tag_name?: string };
  if (!data.tag_name) throw new Error("GitHub releases API: latest release has no tag_name");
  return data.tag_name.replace(/^v/, "");
}
