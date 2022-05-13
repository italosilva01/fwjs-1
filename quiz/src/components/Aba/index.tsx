import "./style.css";
export interface AbaProps {
  text: string;
  setCurrentAba: React.Dispatch<React.SetStateAction<number>>;
  position: number;
}

export const Aba = ({ text, setCurrentAba, position }: AbaProps) => {
  return (
    <div className="container-button" onClick={() => setCurrentAba(position)}>
      {text}
    </div>
  );
};
