import { defineConfig } from '@playwright/test'

export default defineConfig({
	retries: 2,
	timeout: 120_000,
	projects: [
		{
			name: 'setup',
			testMatch: '**/setup/auth.setup.ts',
		},
		{
			name: 'Test',
			testMatch: '**/testPlaywright/example.spec.ts',
			retries: 0,
			use: {
				storageState: '.auth/user.json',
			},
			dependencies: ['setup'],
		}
	],
	use: {
		actionTimeout: 0,
		trace: 'retain-on-failure',
		contextOptions: {
			permissions: ['clipboard-read', 'clipboard-write'],
		},
		timezoneId: 'Europe/Moscow',
		headless: true,
		// video: 'retain-on-failure',
		screenshot: {
			mode: 'only-on-failure',
			fullPage: false,
		},
	},
})