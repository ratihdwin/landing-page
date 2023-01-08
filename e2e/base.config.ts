import { devices } from '@playwright/test'

const PORT = process.env.PORT || 3000
const baseURL = `http://localhost:${PORT}`

const config = {
  timeout: 10 * 1000,
  retries: 1,
  webServer: {
    url: baseURL,
    timeout: 30 * 1000,
    reuseExistingServer: true,
  },
  use: { baseURL, trace: 'retry-with-trace', headless: true },
  projects: [
    { name: 'Desktop Chrome', use: { ...devices['Desktop Chrome'] } },
    // { name: 'Desktop Firefox', use: { ...devices['Desktop Firefox'], }, },
    // { name: 'Desktop Safari', use: { ...devices['Desktop Safari'] }, }
  ],
}
export default config
