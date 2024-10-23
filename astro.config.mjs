// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import embeds from "astro-embed/integration";

// https://astro.build/config
export default defineConfig({
  integrations: [
    embeds(),
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
