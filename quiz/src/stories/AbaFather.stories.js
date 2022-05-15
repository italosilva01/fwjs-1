import AbaFather from "../assets/componentes/AbaFather/AbaFather.vue";

export default {
  title: "Component/AbaFather",
  component: AbaFather,
};
const Template = (args) => ({
  components: { AbaFather },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<AbaFatherVue :abas="abas" />',
});
export const Primary = Template.bind({});

Primary.args = {
  abas: [
    { title: "Tab1", content: "1111111111111111111111111111111111111" },
    { title: "Tab2", content: "2222222222222222222222222222222222222" },
    { title: "Tab3", content: "3333333333333333333333333333333333333" },
    { title: "Tab4", content: "4444444444444444444444444444444444444" },
  ],
};
