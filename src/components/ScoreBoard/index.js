import "./scoreBoard.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { pause, resume, restart } from "../../actions/actionCreators";

const ScoreBoard = () => {
  const dispatch = useDispatch();
  const { score, isRunning, gameOver, level } = useSelector(
    (state) => state.gameReducer
  );

  return (
    <div className="score-board">
      <div>Score:{score}</div>
      <br />
      <div>Level:{level}</div>
      <br />
      <button
        className="score-board-button"
        onClick={(e) => {
          if (gameOver) {
            return;
          }
          if (isRunning) {
            dispatch(pause());
          } else {
            dispatch(resume());
          }
        }}
      >
        {isRunning ? "Pause" : "Play"}
      </button>
      <button
        className="score-board-button"
        onClick={(e) => {
          dispatch(restart());
        }}
      >
        Restart
      </button>
    </div>
  );
};
export default ScoreBoard;
