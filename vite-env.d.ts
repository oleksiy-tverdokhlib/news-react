/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_NEWS_BASE_API_URL: string
	readonly VITE_NEWS_API_KEY: string
	// add more variables here as needed
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
