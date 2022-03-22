import React ,{ useEffect, useState}from 'react'

// const Useeffect = () => {

//     const [count ,setcount] = useState(0);
//     useEffect(() => {
//         console.log('hello1')
//         if(count >= 1)
//         {

//         document.title =`React App (${count})`
//         }
//         else{
//             document.title = `React App`
//         }
//     },[count]);
//     useEffect(()=>{
//         console.log('hello ')
//     })
//    console.log('hello0')
//   return (
//     <div>
//         <h1>{count}</h1>
//         <button className='btn btn-primary' onClick={() => setcount(count + 1)}>Click me</button>
//     </div>
//   )
// }



const Useeffect = () => {
    const [widthcount ,setwidthcount] = useState(window.screen.width);

    const actualWidth = () => {
        console.log(window.innerHeight);
        setwidthcount(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener('resize', actualWidth);
        return () => {
            window.removeEventListener('resize', actualWidth);
          }
    });

  
    
  return (
    <div>
        <h3>the actual size of window is:</h3>
        <h1>{widthcount}</h1>
    </div>
  )
}

export default Useeffect
