import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap"; // https://astro.build/config


// https://astro.build/config
export default defineConfig({
  site: 'https://emanuelcosta.dev',
  integrations: [tailwind(), image(), compress(), sitemap()]
});