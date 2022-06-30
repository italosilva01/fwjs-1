import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbasFather } from "../components/AbasFather";

export default {
  title: "Componentes/AbasFather",
  component: AbasFather,
} as ComponentMeta<typeof AbasFather>;

const Template: ComponentStory<typeof AbasFather> = (args) => (
  <AbasFather {...args} />
);

export const Primary = Template.bind({});

const abas = [
  { title: "Título 1", content: "Texto do tab 1" },
  { title: "Título 2", content: "Texto do tab 2" },
];
Primary.args = {
  abas: abas,
};
