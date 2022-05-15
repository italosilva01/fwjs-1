import Aba from "../assets/componentes/Aba/Aba.vue";

export default {
  title: "Component/Aba",
  component: Aba,
};
const Template = (args) => ({
  components: { Aba },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<Aba v-bind="args" />',
});
export const Primary = Template.bind({});

Primary.args = {
  text: "Primary",
};
