import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    browser: {
      enabled: true,
      name: 'chromium',
      provider: 'playwright',
      headless: true,
    },
    coverage: {
      enabled: true,
      include: ['src/**/*'],
    },
  },
  server: {
    fs: {
      strict: false,
    },
  },
})
