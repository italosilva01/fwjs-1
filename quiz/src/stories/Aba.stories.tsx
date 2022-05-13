import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Aba } from "../components/Aba";

export default {
  title: "Componentes/Aba",
  component: Aba,
} as ComponentMeta<typeof Aba>;

const Template: ComponentStory<typeof Aba> = (args) => <Aba {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: "Aba",
  position: 0,
};
