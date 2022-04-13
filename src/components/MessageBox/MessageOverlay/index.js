import "./messageOverlay.css";

const MessageOverlay = (props) => {
  const classes = "message-popup" + (props.hidden ? " hidden" : "");
  return (
    <div className={classes}>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
};

export default MessageOverlay;