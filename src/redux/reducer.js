import { CORECT_KEY_COUNT, KEY_COUNT, RESET } from "./actionType"

const initialState={
    keyCount:0,
    correctKeyCount:1,
    str:["a","s","d","f","j","k","l",";"],
}
export const reducer=(state=initialState,{type,payload})=>{
    switch(type){

        case CORECT_KEY_COUNT:{
            return {...state,correctKeyCount:state.correctKeyCount+payload}
        }
        case KEY_COUNT:{
            return {...state,keyCount:state.keyCount+payload}
        }
        case RESET:{
            return {...state,keyCount:0,correctKeyCount:0}
        }
        default:{
            return initialState
        }
    }
}