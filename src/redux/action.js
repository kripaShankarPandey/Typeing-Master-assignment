import { CORECT_KEY_COUNT, KEY_COUNT, RESET } from "./actionType"

export const resetAction=()=>{
return {type:RESET}
}
export const keyCountAction=(payload)=>{
return {type:KEY_COUNT,payload}
}
export const correctKeyCountAction=(payload)=>{
return {type:CORECT_KEY_COUNT,payload}
}