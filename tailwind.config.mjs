/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			screens: {
				maxmd: { max: "768px" },
				maxsm: { max: "360px" },
			}
		},
	},
	darkMode: "class",
  	plugins: [nextui()]
}
