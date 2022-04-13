import "./controls.css";
import { useDispatch, useSelector } from "react-redux";
import {
  moveDown,
  rotate,
  moveLeft,
  moveRight,
  pause,
  resume,
} from "../../actions/actionCreators";
import { useEffect } from "react";

const Controls = (props) => {
  const dispatch = useDispatch();
  const { isRunning, gameOver } = useSelector((state) => state.gameReducer);

  const handleKeyEvents = (e) => {
    if (!gameOver && isRunning) {
      switch (e.key) {
        case " ":
          dispatch(rotate());
          break;
        case "ArrowDown":
        case "s":
          dispatch(moveDown());
          break;
        case "ArrowLeft":
        case "a":
          dispatch(moveLeft());
          break;
        case "ArrowRight":
        case "d":
          dispatch(moveRight());
          break;
        case "Enter":
          dispatch(pause());
          break;
        default:
      }
    } else if (!gameOver && !isRunning && e.key === "Enter") {
      dispatch(resume());
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyEvents);
    return () => {
      window.removeEventListener("keydown", handleKeyEvents);
    };
  });

  return (
    <div className="controls">
      {/* left */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          if (!isRunning || gameOver) {
            return;
          }
          dispatch(moveLeft());
        }}
      >
        Left
      </button>

      {/* right */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          if (!isRunning || gameOver) {
            return;
          }
          dispatch(moveRight());
        }}
      >
        Right
      </button>

      {/* rotate */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          if (!isRunning || gameOver) {
            return;
          }
          dispatch(rotate());
        }}
      >
        Rotate
      </button>

      {/* down */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          if (!isRunning || gameOver) {
            return;
          }
          dispatch(moveDown());
        }}
      >
        Down
      </button>
    </div>
  );
};

export default Controls;
