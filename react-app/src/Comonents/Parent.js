import React, { useRef } from 'react';
import Child from './Child';

 const ParentComponent = () => {

    const childRef = useRef(null);

    const handleOpenModal = (value) => {
        childRef.current.openModal(value);
    }


    return (
        <div>
            <p>This is a parent component</p>
            <Child ref={childRef}/>
            <input type='file'/>
            <button onClick={() => handleOpenModal(true)}>Open modal</button>
        </div>
    )

}

export default ParentComponent;