import { Meta, Story } from '@storybook/angular';
import { AbaComponent } from './aba.component';

export default {
  title: 'Components/Aba',
  component: AbaComponent,
} as Meta;

const Template: Story<AbaComponent> = (args: AbaComponent) => ({
  props: args,
});
export const Primary = Template.bind({});
Primary.args = {
  text: 'TESTAE',
};
