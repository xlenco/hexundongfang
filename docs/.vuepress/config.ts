import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  base: '/',
  title: 'VuePress Starter',
  description: 'VuePress Starter Project in Stackblitz',

  bundler: viteBundler({
    // vite bundler options here
  }),
  theme: defaultTheme({
    // default theme options here
  }),
});
