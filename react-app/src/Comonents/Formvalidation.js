import React from 'react'

export  class Formvalidation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputfields: {},
            errors :{}
        }
    }
    submitregistrationform =(e) =>{
        e.preventDefault();
        if(this.validateForm()){
            let inputfields = {};
            inputfields["firstname"] = "";
            inputfields["lastname"] = "";
            inputfields["emailid"] = "";
            inputfields["phoneno"] = "";
            inputfields["address"] = "";
            this.setState({inputfields:inputfields});
            alert("Form submitted successfuly");
        }
    }
    handlechange =(e) =>{
        let inputfields = this.state.inputfields;
        inputfields[e.target.name] = e.target.value
        this.setState({
            inputfields
        })
    }
    validateForm =() =>{
        let inputfields = this.state.inputfields;
        let errors = {};
        let formisvalid = true;

        if((!inputfields['firstname']) || (!inputfields['firstname'].match(/^[a-zA-Z ]*$/)) && (typeof inputfields['firstname'] !== 'undefined')){
                formisvalid = false;
                errors['firstname'] = '*Please enter alphabets only !!';
        }
        
        if((!inputfields['lastname']) || (!inputfields['lastname'].match(/^[a-zA-Z ]*$/)) && (typeof inputfields['lastname'] !== 'undefined')){
        
                formisvalid = false;
                errors['lastname'] = '*Please enter alphabets only !!';
            
        }
        if((!inputfields['emailid'])  || (typeof inputfields['emailid'] !== 'undefined') ){
       
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if(!pattern.test(inputfields['emailid'])){
                formisvalid = false;
                errors['emailid'] = '*Please enter valid Email id';
            }
        }
        if((!inputfields['phoneno']) || (!inputfields['phoneno'].match(/^[0-9]{10}$/)) && (typeof inputfields['phoneno'] !== 'undefined')){
          
                formisvalid = false;
                errors['phoneno'] = '*Please enter 10 digit phone number';
    
        }
        if((!inputfields['address']) || (inputfields['address'].length < 10) && (typeof inputfields['address'] !== 'undefined')){
          
                formisvalid = false;
                errors['address'] = '*Please enter your address';
            }

        this.setState({
            errors: errors
        })
        return formisvalid;
    }
    render(){
        return(
            <div className='container '>
                <div className='registration'>
                    <h1 className='text-center display-6'>Registration Form</h1>
                    <form onSubmit={this.submitregistrationform}> 
                        <label>First Name:</label>
                            <input type='text' name='firstname' value={this.state.inputfields.firstname}  onChange={this.handlechange}/>
                            <div className='errormsg'>{this.state.errors.firstname}</div>
                        
                        <label>Last Name:</label>
                            <input type='text' name='lastname' value={this.state.inputfields.lastname}  onChange={this.handlechange}/>
                            <div className='errormsg'>{this.state.errors.lastname}</div>
                        
                        <label>Email Id:</label>
                            <input type='text' name='emailid' value={this.state.inputfields.emailid}  onChange={this.handlechange}/>
                            <div className='errormsg'>{this.state.errors.emailid}</div> 
                        
                        <label>Phone Number:</label>
                            <input type='text' name='phoneno' value={this.state.inputfields.phoneno}  onChange={this.handlechange}/>
                            <div className='errormsg'>{this.state.errors.phoneno}</div>
                        
                        <label>Address:</label>
                            <textarea rows='3'  name='address' value={this.state.inputfields.address} onChange={this.handlechange}></textarea>
                            <div className='errormsg'>{this.state.errors.address}</div>
                        <input type="submit" className="btn btn-primary mt-3" value="Register"/>
                    </form>
                </div>
            </div>
        )
    }
}
