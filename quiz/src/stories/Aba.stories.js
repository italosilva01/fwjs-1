import Aba from "../components/Aba.svelte";

export default {
  title: "Components/Aba",
  component: Aba,
};

const Template = (args) => ({
  Component: Aba,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = { name: "Text" };
