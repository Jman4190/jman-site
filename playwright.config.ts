import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  retries: process.env.CI ? 2 : 0,
  use: {
    baseURL: 'http://127.0.0.1:3100',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'yarn dev --port 3100',
    env: {
      NEXT_PUBLIC_FATHOM_SITE_ID: '',
      NEXT_PUBLIC_FATHOM_CUSTOM_URL: '',
    },
    reuseExistingServer: !process.env.CI,
    url: 'http://127.0.0.1:3100',
    timeout: 120000,
  },
  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile',
      use: { ...devices['Pixel 5'] },
    },
  ],
})
