import { FC } from "react";
import { FigureType } from "../types";
import ButtonFigure from "./ButtonFigure";
import List from "./List/List";

interface RemainingFiguresProps {
  type: FigureType;
  figures: number[]
}

const RemainingFigures: FC<RemainingFiguresProps> = ({ type, figures }) => {
  return (
    <List additionalStyle={{ marginBottom: "25px" }}>
      {
        figures.map(figure =>
          <ButtonFigure
            type={type}
            size={figure}
            key={FigureType.mark + figure}
          />
        )
      }
    </List>
  );
};

export default RemainingFigures;