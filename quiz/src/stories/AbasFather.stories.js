import AbaFather from "../components/AbasFather.svelte";

export default {
  title: "Components/AbaFather",
  component: AbaFather,
};

const Template = (args) => ({
  Component: AbaFather,
  props: args,
});
const aba = [
  { tab: "Tab1", content: "1111111111111111111111111111111111111" },
  { tab: "Tab2", content: "2222222222222222222222222222222222222" },
  { tab: "Tab3", content: "3333333333333333333333333333333333333" },
  { tab: "Tab4", content: "4444444444444444444444444444444444444" },
];
export const Primary = Template.bind({});
Primary.args = { abas: aba };
