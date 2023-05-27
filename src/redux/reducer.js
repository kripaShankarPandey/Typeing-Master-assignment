import { CORECT_KEY_COUNT, KEY_COUNT, RESET, SHOW_RESULTS } from "./actionType"
//initial state value
const initialState={
    keyCount:0,
    correctKeyCount:0,
    str:["a","s","d","f","j","k","l",";"],
    showResult:false
}
export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
    //counting number of correct keys presses
        case CORECT_KEY_COUNT:{
            return {...state,correctKeyCount:state.correctKeyCount+1}
        }
      //counting number of  keys presses
        case KEY_COUNT:{
            return {...state,keyCount:state.keyCount+1}
        }
       // For reset 
        case RESET:{
            return {...state,keyCount:0,correctKeyCount:0}
        }
        // To show result after typing 5 min
        case SHOW_RESULTS:{
            return {...state,showResult:true}
        }
        default:{
            return initialState
        }
    }
}
