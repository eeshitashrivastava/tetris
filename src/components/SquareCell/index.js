import "./squareCell.css";

const SquareCell = (props) => {
  const classes = `grid-square color-${props.color}`;
  return <div className={classes} />;
};

export default SquareCell;
