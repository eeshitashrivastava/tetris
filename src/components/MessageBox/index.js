import "./messageBox.css";
import MessageOverlay from "./MessageOverlay";
import { useDispatch, useSelector } from "react-redux";
import { restart, resume } from "../../actions/actionCreators";

const MessageBox = () => {
  const dispatch = useDispatch();
  const { isRunning, gameOver, score } = useSelector(
    (state) => state.gameReducer
  );

  return (
    <div>
      <MessageOverlay hidden={isRunning} title="Game Paused">
        Press Enter to Resume, or
        <br />
        <div
          className="link"
          onClick={(e) => {
            dispatch(resume());
          }}
        >
          Resume
        </div>
        <div
          className="link"
          onClick={(e) => {
            dispatch(restart());
          }}
        >
          Restart
        </div>
      </MessageOverlay>

      <MessageOverlay hidden={!gameOver} title="Game Over">
        Your Score is {score}!
        <br />
        <div
          className="link"
          onClick={(e) => {
            dispatch(restart());
          }}
        >
          Restart
        </div>
      </MessageOverlay>
    </div>
  );
};

export default MessageBox;
