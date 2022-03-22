import React ,{useReducer}from 'react'

// const initialstate = 0;
// const reducer =(state,action) =>{
//   console.log(state,action);
//   if(action.type === "INCREMENT"){
//     return state + 1;
//   }
//   if(action.type === "DECREMENT"){
//     return state - 1;
//   }
//   return state;
// }
// const UseReducer = () => {
//   const [state,dispatch] = useReducer(reducer,initialstate);
//   return (
//     <div>
//     <h1>{state}</h1>
//       <button onClick={() => dispatch({type:'INCREMENT'})}>INC</button>
//       <button onClick={() => dispatch({type:'DECREMENT'})}>DEC</button>
//     </div>
//   )
// }
const initialState = 0;
const reducer =(state,action) =>{
    switch(action){
      case 'increment':
        return state + 1

      case 'decrement':
        return state - 1
      case 'reset':
        return initialState
      default:
        return state;
    }

}
function UseReducer(){

  const [count,dispatch] =  useReducer(reducer, initialState)
  return(
    <div>
      <div >{count}</div>
      <button onClick={()=>dispatch('increment')}>Increment</button>
      <button onClick={()=>dispatch('decrement')}>Decrement</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}
export default UseReducer;