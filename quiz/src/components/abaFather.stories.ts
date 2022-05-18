import { Meta, Story } from '@storybook/angular';
import { AbaFatherComponent } from './abaFather.component';

export default {
  title: 'Components/Father',
  component: AbaFatherComponent,
} as Meta;

const Template: Story<AbaFatherComponent> = (args: AbaFatherComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
const aba = [
  { tab: 'Tab1', content: 's' },
  { tab: 'Tab2', content: '2222222222222222222222222222222222222' },
  { tab: 'Tab3', content: '3333333333333333333333333333333333333' },
  { tab: 'Tab4', content: '4444444444444444444444444444444444444' },
];

Primary.args = {
  abas: aba,
};
export const Secondary = Template.bind({});
