import { ContainerButton } from "./style";
import "./style.css";
export interface AbaProps {
  text: string;
  setCurrentAba: React.Dispatch<React.SetStateAction<number>>;
  position: number;
}

export const Aba = ({ text, setCurrentAba, position }: AbaProps) => {
  return (
    <ContainerButton onClick={() => setCurrentAba(position)}>
      {text}
    </ContainerButton>
  );
};
