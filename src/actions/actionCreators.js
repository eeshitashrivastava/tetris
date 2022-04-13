import {
  MOVE_RIGHT,
  MOVE_LEFT,
  ROTATE,
  MOVE_DOWN,
  PAUSE,
  RESUME,
  RESTART,
  SET_NEXT,
  GAME_OVER,
} from ".";

export const moveRight = () => {
  return { type: MOVE_RIGHT };
};

export const moveLeft = () => {
  return { type: MOVE_LEFT };
};

export const rotate = () => {
  return { type: ROTATE };
};

export const moveDown = () => {
  return { type: MOVE_DOWN };
};

export const pause = () => {
  return { type: PAUSE };
};

export const resume = () => {
  return { type: RESUME };
};

export const restart = () => {
  return { type: RESTART };
};

export const setNext = () => {
  return { type: SET_NEXT };
};

export const gameOver = () => {
  return { type: GAME_OVER };
};
