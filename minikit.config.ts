const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjExNDU5NTEsInR5cGUiOiJhdXRoIiwia2V5IjoiMHg2OTJENDI0RkM2NDI2NUU2QjVDMjBjQkFiMjk1Mzk5ZDQ0MzMxNTg2In0",
    payload: "eyJkb21haW4iOiJuZXctbWluaS1hcHAtcXVpY2tzdGFydC1pdm9yeS1zaXgudmVyY2VsLmFwcCJ9",
    signature: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABieRyyw0c0O_yJXXUKEmRFNCO9XraSeyfQ6Wxqdd1rj4XTxc1BwOgufmMvh07jKf0jCdqs6liVm3"
  },
  miniapp: {
    version: "1",
    name: "Mini App Quickstart Template", 
    subtitle: "Quickstart Template ", 
    description: "A starter template for building Farcaster Mini Apps using Next.js and TypeScript. By Trio Blockchain Labs.",
    screenshotUrls: [],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "developer-tools",
    tags: ["developer-tools","productivity"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`, 
    tagline: "Ship mini apps faster. By TriO",
    ogTitle: "Mini App Quickstart Template",
    ogDescription: "A template for building Farcaster Mini Apps using Next.js and TypeScript. By Trio Blockchain Labs",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
  },
} as const;

