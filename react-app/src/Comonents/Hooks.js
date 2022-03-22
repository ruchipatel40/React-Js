import React,{ useState } from "react";

// function ExampleofHook(){
//     // const val = 'Ruchi patel'

//     const [myname,setMyname] = useState('ruchi patel')
//    const changename = () => {
//        const val = myname;
//     //    if(val === 'ruchi patel' ){
//     //     setMyname('hello ruchi patel')
//     //    }
//     //    else{
//     //    setMyname('ruchi patel')
//     //    }
//     // }
// (val === 'ruchi patel') ? setMyname('Hello ruchi patel') : setMyname('ruchi patel')
//    }
//     return(
//         <div>
//             <p>{myname}</p>
//             <button className="btn btn-primary" onClick={changename}>Click me </button>
//         </div>
//     )
// }
// export default ExampleofHook;

 //const biodata = [
   // {
//         id:0, myname:'ruchi',age:20
//     },
//     {
//         id:1, myname:'khushbu',age:20
//     },
//     {
//         id:2, myname:'palsu',age:20
//     },
//     {
//         id:3, myname:'dhruti',age:20
//     },
// ]


// function ExampleofHook(){
//     const [myArray , setmyArray] = useState(biodata)
//  const clearArray = () => {
//     setmyArray([]); 
//   } 
// return(
//     <div className="ruchi">
//         {myArray.map((curelm) =>{
//         return  <h1 className="h1style rounded-pill" key={curelm.id}> Name: {curelm.myname} and age :{curelm.age}</h1>
//         })}
//         <button onClick={clearArray}>Clear</button>
//     </div>
// )
// }
// export default ExampleofHook

// function ExampleofHook() {
//     const [myObject, setmyObject] = useState({
//         myname:'ruchi', myage:20, mydegree:'BE',rollno: 55,channel:'ruchi patel' 
//     });
//     const changeobject = () => {
//         setmyObject({...myObject,myname:'ruchipatel'});
//     }
//     return(
//         <>
//             <h1>Name:{myObject.myname} Age:{myObject.myage} Degree:{myObject.mydegree}</h1>
//             <button onClick={changeobject}>Update</button>
//         </>
//     )
// }
// export default ExampleofHook;
// const biodata = [
//          {
//              id:0, myname:'ruchi',age:20
//          },
//          {
//              id:1, myname:'khushbu',age:20
//          },
//          {
//              id:2, myname:'palsu',age:20
//          },
//          {
//              id:3, myname:'dhruti',age:20
//          },
//      ]
    
    
//      function ExampleofHook(){
//          const [myArray , setmyArray] = useState(biodata)
//       const clearArray = () => {
//          setmyArray([]); 
//        } 
//        const removelm = (id) =>{
//         //    alert(id)
//         const mynewarray = myArray.filter((curelm) => {
//             return(
//                 curelm.id !== id
//             )
//         })
//         setmyArray(mynewarray);
//        }
//      return(
//          <div className="ruchi">
//              {myArray.map((curelm) =>{
//              return  (
//                  <h1 className="h1style rounded-pill" key={curelm.id}> Name: {curelm.myname} and age :{curelm.age}
//                  <button className="btn btn-danger rounded-pill ms-4" onClick={() => removelm(curelm.id)}>remove</button>
//                  </h1>
//              )
//              })
//              }
//              <button onClick={clearArray}>Clear</button>
//          </div>
//      )
//      }
//      export default ExampleofHook;

// function ExampleofHook(){
//     const [shortcircut ,setshortcircuit] = useState('')
//     return(
//         <>
//             <h1>{shortcircut || 
//             <>
//                 <h1>hello ruchi</h1>
//                 <p> hello i am ruchi  patel</p>
//             </>
//             }</h1>
//             <h1>Welcome {shortcircut && 'ruchi'}</h1>
//         </>
//     )
// }
// export default  ExampleofHook;

function ExampleofHook(){
    const [email, setemail] = useState('')
    const [password ,setpassword] = useState('')
    const [allentry ,setallentry] = useState([]);

    const submitform =(e) =>{
        e.preventDefault();
        
        if(email && password){
            const newentry = {id:new Date().getTime().toString(), email:email,password:password }
            setallentry([...allentry, newentry])

            setemail('')
            setpassword('')
        }
        else{
            alert('plz enter details');
        }
        
        
    }
    return(
        <>
            <form onSubmit={submitform}>
                <div>
                    <label>Email:</label>
                    <input type='text' name='email' id='email' value={email} onChange={(e) => setemail(e.target.value)}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type='password' name='password' id='password' value={password} onChange={(e) => setpassword(e.target.value)  }/>
                </div>
                <button type="submit">Submit</button>
            </form>
            <div>
                {
                    allentry.map((entry) =>{
                        return(
                            <div key={entry.id}>
                            <h1 > { entry.email}</h1>
                            <h2> {entry.password}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default ExampleofHook;