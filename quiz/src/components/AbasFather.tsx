import { useState } from "react";
import { Aba } from "./Aba";

export const AbasFather = () => {
  const abas = [
    { title: "Tab1", content: "1111111111111111111111111111111111111" },
    { title: "Tab2", content: "2222222222222222222222222222222222222" },
    { title: "Tab3", content: "3333333333333333333333333333333333333" },
    { title: "Tab4", content: "4444444444444444444444444444444444444" },
  ];

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
    <div className="abas-father">
      <div className="aba">{Abas}</div>
      <div className="content">
        <h4>{abas[currentAba].content}</h4>
      </div>
    </div>
  );
};
