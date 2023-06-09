import {
  CORECT_KEY_COUNT,
  KEY_COUNT,
  RESET,
  SHOW_RESULTS,
  START,
  STOP,
} from "./actionType";
//initial state value
const initialState = {
  keyCount: 0,
  correctKeyCount: 0,
  str: [
    "a",
    "s",
    "d",
    "f",
    "j",
    "k",
    "l",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ],
  showResult: false,
  isStart: false,
  isStop: false,
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //counting number of correct keys presses
    case CORECT_KEY_COUNT: {
      return { ...state, correctKeyCount: state.correctKeyCount + 1 };
    }
    //counting number of  keys presses
    case KEY_COUNT: {
      return { ...state, keyCount: state.keyCount + 1 };
    }
    // For reset
    case RESET: {
      return { ...state, keyCount: 0, correctKeyCount: 0 };
    }
    // For start
    case START: {
      return { ...state, isStart: true };
    }
    // For stop
    case STOP: {
      return { ...state, isStop: true };
    }
    // To show result after typing 5 min
    case SHOW_RESULTS: {
      return { ...state, showResult: true };
    }
    default: {
      return initialState;
    }
  }
};
