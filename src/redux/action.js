import { CORECT_KEY_COUNT, KEY_COUNT, RESET, SHOW_RESULTS } from "./actionType"

export const resetAction=()=>{
return {type:RESET}
}
export const keyCountAction=()=>{
return {type:KEY_COUNT}
}
export const correctKeyCountAction=()=>{
return {type:CORECT_KEY_COUNT}
}
export const showResultsAction=()=>{
return {type:SHOW_RESULTS}
}