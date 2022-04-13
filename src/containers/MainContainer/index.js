import Controls from "../../components/Controls";
import GridBoard from "../../components/GridBoard";
import MessageBox from "../../components/MessageBox";
import NextBlock from "../../components/NextBlock";
import ScoreBoard from "../../components/ScoreBoard";
import "./mainContainer.css";

const MainContainer = () => {
  return (
    <div className="container">
      <header className="heading">
        <h1 className="App-title">Tetris</h1>
      </header>
      <NextBlock />
      <GridBoard />
      <ScoreBoard />
      <Controls />
      <MessageBox />
    </div>
  );
};

export default MainContainer;
