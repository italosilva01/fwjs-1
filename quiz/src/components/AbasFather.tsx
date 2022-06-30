import { useState } from "react";
import { Aba } from "./Aba";
import { ContainerAbasFather, ContainerTabs } from "./style";
interface AbasFatherProps {
  abas: { title: string; content: string }[];
}
export const AbasFather = ({ abas }: AbasFatherProps) => {
  const [currentAba, setCurrentAba] = useState<number>(0);

  const Abas = abas.map((item, index) => (
    <Aba
      key={index}
      text={item.title}
      position={index}
      setCurrentAba={setCurrentAba}
    />
  ));

  return (
    <div >
      <ContainerTabs >{Abas}</ContainerTabs>
      <ContainerAbasFather >
        <p>{abas[currentAba].content}</p>
      </ContainerAbasFather>
    </div>
  );
};
