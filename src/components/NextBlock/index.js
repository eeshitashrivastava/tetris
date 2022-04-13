import SquareCell from "../SquareCell";
import "./nextBlock.css";
import { useSelector } from "react-redux";
import shapes from "../../constants/shapes";

// Draws the "next" block view showing the next block to drop
const NextBlock = (props) => {
    const nextShape = useSelector((state) => state.gameReducer.nextShape);
    const box = shapes[nextShape][0];
    // Map the block to the grid
    const grid = box.map((rowArray, row) => {
        return rowArray.map((square, col) => {
            return <SquareCell key={`${row}${col}`} color={square === 0 ? 0 : nextShape} />
        })
    })

    return (
        <div className="next-block">
            {grid}
        </div>
    )
}

export default NextBlock;