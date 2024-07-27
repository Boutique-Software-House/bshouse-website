// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  app: {
    head: {
      title: "Boutique Software House Llc.",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Boutique Software House is a software agency located in Miami USA. We use the latest technologies to make the work everithing simpler for our customers: Mercedes-Benz, Daimler Financial Services and Daimler Trucks",
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "bshouse.io",
        },
        {
          hid: "og:url",
          name: "og:url",
          content: "https://bshouse.io",
        },
        {
          hid: "og:image",
          name: "og:image",
          content: "https://bshouse.io/favicon.png",
        },
        {
          hid: "og:type",
          name: "og:type",
          content: "website",
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: "bshouse.io",
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Boutique Software House is a software agency located in Miami USA. We use the latest technologies to make the work everithing simpler for our customers: Mercedes-Benz, Daimler Financial Services and Daimler Trucks",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary", // Can be "summary","summary_large_image","app","player"
        },
        {
          hid: "twitter:creator",
          name: "twitter:creator",
          content: "@sebabromberg",
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: "https://bshouse.io",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "bshouse.io",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Boutique Software House is a software agency located in Miami USA. We use the latest technologies to make the work everithing simpler for our customers. Mercedes-Benz, Daimler Financial Services and Daimler Trucks",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://bshouse.io/favicon.png",
        },
        { name: "format-detection", content: "+5491136563300" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/Favicon.png" }],
    },
  },
});
