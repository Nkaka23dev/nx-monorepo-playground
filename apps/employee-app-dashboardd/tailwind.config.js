const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const sharedConfig = require('../../tailwind.shared.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedConfig,
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};
