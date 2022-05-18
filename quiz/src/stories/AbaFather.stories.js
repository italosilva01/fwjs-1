import AbaFather from "../assets/componentes/AbaFather/AbaFather.vue";

export default {
  title: "Component/AbaFather",
  component: AbaFather,
};

const abas = [
  { tab: "Tabe1", content: "1111111111111111111111111111111111111" },
  { tab: "Tab2", content: "2222222222222222222222222222222222222" },
  { tab: "Tab3", content: "3333333333333333333333333333333333333" },
  { tab: "Tab4", content: "4444444444444444444444444444444444444" },
];
const Template = (args) => ({
  components: { AbaFather },
  setup() {
    return args;
  },
  template: '<AbaFather :abas="abas" />',
});

export const Primary = Template.bind({});
Primary.args = { abas: abas };
