export default defineNuxtConfig({
	devtools: { enabled: true },

	runtimeConfig: {
		public: {
			apiUrl: "",
		},
	},

	nitro: {
		routeRules: {
			"/api/**": { proxy: "http://194.58.114.242:8081/api/v1/**" },
		},
	},

	modules: [
		"@nuxt/ui",
		"@formkit/auto-animate/nuxt",
		"@pinia/nuxt",
		"@pinia-plugin-persistedstate/nuxt",
	],

	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
	],

	css: ["~/assets/styles/main.css"],
});
