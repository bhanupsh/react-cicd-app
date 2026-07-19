import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',

    reporters: ['verbose', 'junit'],

    outputFile: {
      junit: './test-results/junit.xml',
    },

    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      thresholds: {
        statements: 90,
        branches: 90,
        functions: 90,
        lines: 90,
      },
      exclude: [
        'node_modules/',
        'src/setupTests.ts',
        'src/main.tsx',
        '**/*.test.tsx',
      ],
    },
  },
});
