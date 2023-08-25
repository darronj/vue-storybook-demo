import { setup, type Preview } from "@storybook/vue3";
import { createPinia } from 'pinia';
import type { App } from 'vue';
import '../src/style.css'

const pinia = createPinia();

setup((app: App) => {
  app.use(pinia);
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
