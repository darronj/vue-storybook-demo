import type { Meta, StoryObj } from '@storybook/vue3';

import Counter from '@/components/Counter.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Counter',
  component: Counter,
  argTypes: {
    label: { control: 'text' },
  },
  args: { }, // default value
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {};
