import React, { useEffect, useState } from 'react'
import ExampleofHook from './Hooks'
import Loading from './Loading'
import { FcApproval } from "react-icons/fc";

const UseeffectAPI = () => {
    const [users, setUsers] = useState([])

    const [loading, setLoading] = useState(true);
    const getUser = async () => {

        try{
            setLoading(false)
            // const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
           
            const response = await fetch(' https://api.github.com/users')
            setUsers( await response.json())
        }
        catch(error){
            console.log("My error is" +error)
        }
       
       
    }
    useEffect(() => {
        getUser();
    },[])

if(loading == true){
    return <Loading />
}
  return (
    <>
        <h2>List of Github User</h2>
        <div className='container-fluid mt-5'>
            <div className='row text-center'>

                {
                    users.map((curElem) => {
                        return(
                            
                                <div className='col-md-4 col-10 mt-5' key={curElem.id}>
                                    <div className='card p-2'>
                                        <div className='d-flex align-items-center'>
                                            <div className='image'><img src={curElem.avatar_url} className='rounded' width='155' /></div>
                                            <div className='ml-2 w-100'>
                                                <h4 className='my-0 textleft'>{curElem.login} < FcApproval /></h4><span className='textleft'>{curElem.type}</span>
                                                <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                                                    <div className='d-flex flex-column'><span className='articles'>Articles</span><span className='number1'>38</span></div>
                                                    <div className='d-flex flex-column'><span className='followers'>Followers</span><span className='number2'>980</span></div>
                                                    <div className='d-flex flex-column'><span className='rating'>Rating</span><span className='number3'>8.9</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   

                            </div>
                        )
                    })
                }

               
                
            </div>
        </div>
    </>
  )
}
export default UseeffectAPI