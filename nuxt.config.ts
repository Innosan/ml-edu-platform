export default defineNuxtConfig({
	devtools: { enabled: true },

	runtimeConfig: {
		public: {
			apiUrl: "",
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
