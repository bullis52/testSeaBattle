import React, {SetStateAction, useContext} from "react";
import { GameContext } from "../../context";
import {IGameBoard} from "../../types/IGameBoard";

interface Props {
    children: any;
    type: number;
    x: number;
    y: number;
    setCell: React.Dispatch<SetStateAction<any>>;
    clickedCells: any;
}


const Cell:React.FC<Props> = ({ children, type, x, y, setCell, clickedCells }) => {

    const { turn, winner } = useContext<any>(GameContext);

    const classList = ["cell"];

    const isClicked = clickedCells.length && clickedCells.find(([x1, y1]:number[]) => x1 === x && y1 === y);
    if (isClicked) {
        const [x, y, cellType] = isClicked;

        if (cellType === 0) children.push(<div key={3} className="cell-missed"><div className="cell-circle"></div></div>);
        if (cellType === 1) children.push(<div key={4} className="cell-red"></div>);
        if (cellType === 2) children.push(<div key={5} className="cell-bounds"><div className="cell-circle"></div></div>);
    }

    const canClick = !turn && type && !isClicked && winner === null;
    if (canClick) classList.push("clickable");
    return (
        <td
            className={classList.join(" ")}
            // @ts-ignore
            onClick={canClick ? () => setCell([x, y]) : null}
        >
            {children}
        </td>
    )
}

export default Cell;
