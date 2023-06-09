import {
  CORECT_KEY_COUNT,
  KEY_COUNT,
  RESET,
  SHOW_RESULTS,
  START,
  STOP,
} from "./actionType";
// To reset application
export const resetAction = () => {
  return { type: RESET };
};
// To start application
export const startAction = () => {
  return { type: START };
};
// To stop application
export const stopAction = () => {
  return { type: STOP };
};
//To counting number of keys pressed
export const keyCountAction = () => {
  return { type: KEY_COUNT };
};
// To counting correct number of keys pressed
export const correctKeyCountAction = () => {
  return { type: CORECT_KEY_COUNT };
};
//To show the results
export const showResultsAction = () => {
  return { type: SHOW_RESULTS };
};
