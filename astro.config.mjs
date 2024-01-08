import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap"; // https://astro.build/config
import vercelStatic from '@astrojs/vercel/static';


// https://astro.build/config
export default defineConfig({
  site: 'https://emanuelcosta.dev',
  integrations: [tailwind(), image(), compress(), sitemap()],
  output: 'static',
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
  }),
});