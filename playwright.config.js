/* eslint-env node */
const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './e2e-tests',
  use: {
    baseURL: 'http://127.0.0.1:5000',
    headless: true
  },
  webServer: {
    command: 'npm run start-prod',
    port: 5000,
    reuseExistingServer: true,
    timeout: 120000
  }
})
