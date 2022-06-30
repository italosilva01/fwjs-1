import { useState } from "react";
import { Aba } from "./Aba";
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
      <div className="aba">{Abas}</div>
      <div className="content">
        <h4>{abas[currentAba].content}</h4>
      </div>
    </div>
  );
};
