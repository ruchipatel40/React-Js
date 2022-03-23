import React, { useState } from 'react'
import {omit} from 'lodash'

const useForm = (callback) => {
    
    //Form values
    const [values, setValues] = useState({});
    //Errors
    const [errors, setErrors] = useState({});



    const validate = (event, name, value) => {
        //A function to validate each input values

        switch (name) {
            case 'firstname':
                if(value.length <= 4){
                    // we will set the error state

                    setErrors({
                        ...errors,
                        firstname:'firstname atleast have 5 letters'
                    })
                }else{
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "firstname");
                    setErrors(newObj);
                    
                }
                break;
        
                case 'lastname':
                    if(value.length <= 4){
                        // we will set the error state
    
                        setErrors({
                            ...errors,
                            lastname:'lastname atleast have 5 letters'
                        })
                    }else{
                        // set the error state empty or remove the error for username input
    
                        //omit function removes/omits the value from given object and returns a new object
                        let newObj = omit(errors, "lastname");
                        setErrors(newObj);
                        
                    }
                    break;

                    case 'number':
                    if(!(value.match(/^[0-9]{10}$/))){
                        // we will set the error state
    
                        setErrors({
                            ...errors,
                            number:'Please enter a 10 digit number'
                        })
                    }else{
                        // set the error state empty or remove the error for username input
    
                        //omit function removes/omits the value from given object and returns a new object
                        let newObj = omit(errors, "number");
                        setErrors(newObj);
                        
                    }
                    break;
            case 'email':
                if(
                    !new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}').test(value)
                ){
                    setErrors({
                        ...errors,
                        email:'Enter a valid email address'
                    })
                }else{

                    let newObj = omit(errors, "email");
                    setErrors(newObj);
                    
                }
            break;
            
            
            
            default:
                break;
        }
    }

  //A method to handle form inputs
    const handleChange = (event) => {
        //To stop default events    
        event.persist();

        let name = event.target.name;
        let val = event.target.value;

        validate(event,name,val);
        //Let's set these values in state

        setValues({
            ...values,
            [name]:val,
        })

    }


    const handleSubmit = (event) => {
        if(event) {event.preventDefault(); }

        if(Object.keys(errors).length === 0 && Object.keys(values).length !==0 ){
            callback();

        }else{
            console.log("There is an Error!");
        }
    }


    return {
        
        errors,
        handleChange,
        handleSubmit
    }
}

export default useForm