import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  optimizeDeps: {
    include: ["html2canvas"],
  },
  base: "/AccountAssistant/",
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      manifest: {
        protocol_handlers: [{ protocol: "mailto", url: "/newEmail?to=%s" }],
        display_override: ["window-controls-overlay"],
        name: "El Arepero Mayor",
        short_name: "ELAM",
        start_url: "./index.html",
        display: "standalone",
        description:
          "Esta es una Progressive Web App (PWA) que permite a los usuarios realizar pedidos de productos, como arepas, paquetes, bebidas y huevos, y generar una factura detallada de su pedido.",
        lang: "ES",
        dir: "auto",
        theme_color: "#c7c7c7",
        background_color: "#fff",
        orientation: "any",
        id: "elam2024",
        iarc_rating_id: "e58c174a-81d2-5c3c-32cc-34b8de4a52e9",
        categories: ["business", "productivity"],
        icons: [
          {
            src: "https://i.imgur.com/AxzRcRG.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "https://i.imgur.com/AxzRcRG.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "https://i.imgur.com/K3Qs8Yb.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "https://i.imgur.com/K3Qs8Yb.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],

        scope: "/",
        screenshots: [
          {
            src: "https://i.imgur.com/V5kpUnI.png",
            sizes: "1920x1080",
            type: "image/png",
            description: "Home Screen",
          },
        ],
        shortcuts: [
          {
            name: "Home",
            url: "/",
            icons: [
              {
                src: "https://i.imgur.com/0TKBifl.png",
                sizes: "96x96",
                type: "image/png",
                purpose: "any",
              },
            ],
          },
        ],
        related_applications: [
          {
            platform: "windows",
            url: "https://rcristianh.github.io/myBlog/",
            id: "blog.personalMB",
          },
          {
            platform: "windows",
            url: "https://rcristianh.github.io/api-rest-moviedb/",
          },
        ],
        version: "2.0.3",
      },
    }),
  ],
});
