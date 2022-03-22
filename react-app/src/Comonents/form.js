// function Myform(){
//     return(
//         <form>
//             <label>Enter your name:
//             <input type='text' /></label>
//         </form>
//     )
// }

import React from "react";

// class Myform extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {value :'hello fknsfnfgjnkgfnj'}
//     }
//     handlechange =(e) =>{
//         this.setState({
//             value:e.target.value
//         })
//     }
//     handleonsubmit =(e) =>{
//         console.log(this.state.value)
//         e.preventDefault();
//     }
//     render(){
//         return(
//             <form onSubmit={this.handleonsubmit}>
//                <textarea value={this.state.value} onChange={this.handlechange} />
//                <input type="submit" value="Submit" />
//             </form>
//         )
//     }
// }

// class Myform extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {value:'cocount'}
//     }
//     handlechange =(e) =>{
//         this.setState({value: e.target.value})
//     }
//     handleonsubmit =(e) =>{
//         e.preventDefault();
//         console.log(this.state.value)
//     }
//     render(){
//         return(
//             <form onSubmit={this.handleonsubmit}>
//                 <label>Pick up favotite flavor:
//                 <select value={this.state.value} onChange={this.handlechange}>
//                     <option value='grapesfruit'>grapesfruit</option>
//                     <option value='mangofruit'>mangofruit</option>
//                     <option value='lime'>lime</option>
//                     <option value='grapesfruit'>grapesfruit</option>
//                     <option value='cocount' selected>cocount</option>
//                 </select></label>
//                 <input type="submit" value="Submit" />
//             </form>
//         )
//     }
// }

class Myform extends React.Component{
//     constructor(props){
//         super(props);
//         this.state ={
//             isgoing : true,
//             numberofguest : 2
//         }
//     }
//     handlechanges =(e) =>{
//         const target = e.target;
//         const value = target.type ==='checkbox' ? target.checked : target.value;
//         console.log(value)
//         const name = target.name;
//         console.log(name)
//         this.setState({
//             [name] : value
//         })
//     }
//     render(){
//         return(
//             <form>
//                 <label>Is going:
//                   <input type='checkbox' checked={this.state.isgoing } name='isgoing' onChange={this.handlechanges}/>
//                 </label>
//                 <label>Number of the guest :
//                 <input type='number' name='numberofguest' value={this.state.numberofguest} onChange={this.handlechanges} /></label>
//             </form>
//         )
//     }
// }
constructor(props) {
    super(props);
    
    this.input = React.createRef();
  }

  handleSubmit = (event) =>{
    console.log(this.input.current.value);
    event.preventDefault();
    
  }

  render() {
    return (
        
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Myform;