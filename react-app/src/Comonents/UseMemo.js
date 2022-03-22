import React, { useState ,useMemo} from "react";


const add =(num1,num2) =>{
    console.log("add number")
    return parseInt(num1) + parseInt(num2)
}
const UseMemo = () => {

    const [val1, setval1] = useState(0)
    const [val2,setval2] = useState(0)
    const ans = useMemo(() => {return add(val1,val2)}, [val1,val2]);
  return (
    <div>
    <div>{ans}</div>
        <input value={val1} onChange={(e)=>setval1(e.target.value)} />
        <input value={val2} onChange={(e)=> setval2(e.target.value)} />
    </div>
  )
}

export default UseMemo