import { legacy_createStore } from "redux";
import { reducer } from "./reducer";
//exporting store data so each components can use store data
export const store=legacy_createStore(reducer)
